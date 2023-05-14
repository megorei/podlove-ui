/* global PLAYER_STYLES, PLAYER_SCRIPTS */

import { prop, curry } from 'ramda'
import { setAttributes } from '@podlove/utils/dom'
import { sandbox, sandboxWindow, resize } from '@podlove/utils/sandbox'
import { iframeResizer } from 'iframe-resizer'
// eslint-disable-next-line
import iframeResizerContentWindow from 'raw-loader!iframe-resizer/js/iframeResizer.contentWindow.min.js'
import template from './template.mustache'

import { createLoader } from './loader'
import { applyUrlParameters } from './url-params'
import { persistPlayer } from './persist'
import { activeTab } from './active-tab'
import { visibleComponents } from './components'

import pkg from '../../package'

const setAccessibilityAttributes = curry((config, node) => {
  const title = `Podlove Web Player${prop('title', config) ? ': ' + prop('title', config) : ''}`

  return setAttributes(
    {
      title,
      'aria-label': title,
      tabindex: 0
    },
    node
  )
})

export const create = async (config, target) => {
  const playerDom = template({
    root: window.resourceBaseUrl,
    base: `${pkg.version}/player/`,
    styles: PLAYER_STYLES,
    scripts: PLAYER_SCRIPTS,
    template: target.template,
    resizer: iframeResizerContentWindow,
    loader: createLoader(config)
  })

  const player = await sandbox(target.node, playerDom).then(resize(target.node))

  setAccessibilityAttributes(config, player)

  iframeResizer(
    {
      checkOrigin: false,
      log: false
    },
    player
  )

  const store = prop('PODLOVE_STORE', sandboxWindow(player))

  return store
}

export const restore = (config, store) => {
  persistPlayer(config, store)
  activeTab(config, store)
  visibleComponents(config, store)
  applyUrlParameters(store)
}
