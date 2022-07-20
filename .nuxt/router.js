import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b851694 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _6fd166a2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _a422eaa8 = () => interopDefault(import('..\\pages\\transaksi.vue' /* webpackChunkName: "pages/transaksi" */))
const _686676ba = () => interopDefault(import('..\\pages\\post\\create\\index.vue' /* webpackChunkName: "pages/post/create/index" */))
const _250945b3 = () => interopDefault(import('..\\pages\\product\\create\\index.vue' /* webpackChunkName: "pages/product/create/index" */))
const _afec7558 = () => interopDefault(import('..\\pages\\post\\edit\\_id.vue' /* webpackChunkName: "pages/post/edit/_id" */))
const _26560e66 = () => interopDefault(import('..\\pages\\product\\edit\\_id.vue' /* webpackChunkName: "pages/product/edit/_id" */))
const _7dbfe454 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/post",
    component: _5b851694,
    name: "post"
  }, {
    path: "/product",
    component: _6fd166a2,
    name: "product"
  }, {
    path: "/transaksi",
    component: _a422eaa8,
    name: "transaksi"
  }, {
    path: "/post/create",
    component: _686676ba,
    name: "post-create"
  }, {
    path: "/product/create",
    component: _250945b3,
    name: "product-create"
  }, {
    path: "/post/edit/:id?",
    component: _afec7558,
    name: "post-edit-id"
  }, {
    path: "/product/edit/:id?",
    component: _26560e66,
    name: "product-edit-id"
  }, {
    path: "/",
    component: _7dbfe454,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
