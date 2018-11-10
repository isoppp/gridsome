import Vue from 'vue'
import Meta from 'vue-meta'
import icons from '~/.temp/icons.js'
import config from '~/.temp/config.js'

Vue.use(Meta, {
  // keyName: 'head', TODO: change this to 'head'
  attribute: 'data-vue-tag',
  ssrAttribute: 'data-html-server-rendered',
  tagIDKeyName: 'key'
})

const head = {
  title: config.siteName,
  titleTemplate: config.titleTemplate,
  __dangerouslyDisableSanitizers: ['style', 'script', 'noscript'],
  __dangerouslyDisableSanitizersByTagID: {},
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'generator', content: `Gridsome v${config.version}` },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
  ],
  base: {},
  noscript: [],
  script: [],
  style: [],
  link: []
}

icons.favicons.forEach(({ type, width, height, src: href }) => {
  head.link.push({
    rel: 'icon',
    type: `image/${type}`,
    sizes: `${width}x${height}`,
    href
  })
})

icons.touchicons.forEach(({ width, height, src: href }) => {
  head.link.push({
    rel: `apple-touch-icon${icons.precomposed ? '-precomposed' : ''}`,
    sizes: `${width}x${height}`,
    href
  })
})

head.noscript.push({
  innerHTML: `<style>.g-image--loading{display:none;}</style>`
})

export default head
