
const fs = require('fs')
const path = require('path')

const _ = require('lodash')
const execa = require('execa')

module.exports = class WebpackElectroshotPlugin {
  constructor (options = {}) {
    this.options = Object.assign({}, {
      delay: 1000,
      format: 'jpg',
      out: '.',
      resolution: '1280',
      url: 'index.html'
    }, options)
  }

  apply (compiler) {
    const outputPath = compiler.options.output.path

    compiler.plugin('after-emit', (compilation, cb) => {
      let cmd = ['electroshot']

      for (let option in this.options) {
        let valid = ['resolution', 'url'].indexOf(option) === -1
        let value = this.options[option]

        if (option === 'out') {
          value = value === null
            ? path.resolve(outputPath)
            : path.resolve(outputPath, value)
        }

        if (!valid || value === null) {
          continue
        }

        cmd.push(`--${_.kebabCase(option)}${value === true ? '' : ` ${value}`}`)
      }

      cmd.push(`"file://${outputPath}/${this.options.url}"`)
      cmd.push(`"${this.options.resolution}"`)

      let outputFilePath = path.join(
        this.options.out ? this.options.out : '',
        this.options.filename
      )

      let outputFile = path.resolve(
        outputPath,
        outputFilePath
      )

      let outputDir = path.dirname(outputFile)

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
      }

      execa.shell(cmd.join(' '))
        .then((data) => {
          console.log('electroshot', outputFilePath, data.stdout)
        })
        .catch((err) => {
          console.log('electroshot', outputFilePath, err.message)
        })
        .then(() => {
          cb()
        })
    })
  }
}
