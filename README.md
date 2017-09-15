
# webpack-electroshot-plugin

> Webpack plugin for [electroshot](https://github.com/mixu/electroshot).

> Capture website screenshots with optional device and network emulation as jpg, png or pdf (with web fonts!) using Electron / Chrome.

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![npmd][npmd]][npmd-url]
[![deps][deps]][deps-url]
[![ddeps][ddeps]][ddeps-url]
[![standard][standard]][standard-url]

## Install

### npm

```sh
npm install -D webpack-electroshot-plugin
```

### yarn

```sh
yarn add -D webpack-electroshot-plugin
```

## electroshot

```sh
npm install -D electroshot
// or global
npm install -g electroshot
```

## Usage

```js
const WebpackElectroshotPlugin = require('webpack-electroshot-plugin')
// or
import WebpackElectroshotPlugin from 'webpack-electroshot-plugin'
```

```js
{
  output: {
    path: "/output/path"
  },
  plugins: [
    new WebpackElectroshotPlugin({
      // options
    })
  ]
}
```

## API

### class WebpackElectroshotPlugin([`options`])

#### `options`

All options of electroshot are available in camelCase.

See [electroshot docs](https://github.com/mixu/electroshot#electroshot).

##### Required

- filename

##### Optional

- delay: *default: 1000*
- format: *default: jpg*
- out: *default: .*
- resolution: *default: 1280*
- url: *default: index.html*
- cookie
- css
- device
- download
- emulateNetwork
- forceDeviceScaleFactor
- ignoreCertificateErrors
- js
- latency
- pdfBackground
- pdfMargin
- pdfOrientation
- pdfPageSize
- proxyServer
- quality
- selector
- upload
- userAgent
- zoomFactor

## Examples

### JPG

Will create `BUILD_PATH/screenshot.jpg`:

```js
new WebpackElectroshotPlugin({
  filename: `screenshot.jpg`
})
```

### PNG

Will create `BUILD_PATH/screenshot.png`:

```js
new WebpackElectroshotPlugin({
  filename: `screenshot.png`,
  format: 'png'
})
```

### PDF

Will create `BUILD_PATH/screenshots/screenshot.pdf`:

```js
new WebpackElectroshotPlugin({
  filename: `screenshot.pdf`,
  format: 'pdf',
  out: 'screenshots',
  pdfBackground: true,
  pdfMargin: 'none',
  pdfPageSize: 'A4'
})
```

## Resources

- [electroshot](https://github.com/mixu/electroshot) - Capture website screenshots with optional device and network emulation as jpg, png or pdf (with web fonts!) using Electron / Chrome.

## Authors

- Ricardo Ferro <ricardo.ferro@gmail.com>

## License

MIT

[npm]: https://img.shields.io/npm/v/webpack-electroshot-plugin.svg?style=flat
[npm-url]: https://npmjs.com/package/webpack-electroshot-plugin

[node]: https://img.shields.io/node/v/webpack-electroshot-plugin.svg?style=flat
[node-url]: https://nodejs.org

[npmd]: https://img.shields.io/npm/dw/webpack-electroshot-plugin.svg?style=flat
[npmd-url]: https://www.npmjs.com/package/webpack-electroshot-plugin

[deps]: https://img.shields.io/david/rferro/webpack-electroshot-plugin.svg?style=flat
[deps-url]: https://david-dm.org/rferro/webpack-electroshot-plugin

[ddeps]: https://img.shields.io/david/dev/rferro/webpack-electroshot-plugin.svg?style=flat
[ddeps-url]: https://david-dm.org/rferro/webpack-electroshot-plugin?type=dev

[standard]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat
[standard-url]: https://standardjs.com
