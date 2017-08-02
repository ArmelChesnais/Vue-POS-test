// 1. Define route components.
// These can be imported from other files
const products = { template: '#product-page' }
const Bar = { template: '<div>bar</div>' }


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: { props: ['products'], template: '#product-page' } },
  { path: '/checkout', component: { template: '<div>bar</div>' } }
]

Vue.component('products', {
  props: ['data'],
  template: '#product-page'
})

Vue.component('product', {
  props: ['product'],
  template: '#product'
})

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: { products: 'amg' }
}).$mount('#app')

app.products = [
  { name: 'drip coffee',
    cost: 4.00,
    components: ['coffee'],
    modifiers: [
      { name: 'milk', max: 5 },
      { name: 'sugar', max: 5 }
    ]
  },
  { name: 'latte',
    cost: 5.00,
    components: ['espresso', 'steamed milk'],
    modifiers: [
      { name: 'chocolate syrup', max: 1 },
      { name: 'whipped cream', max: 1 }
    ]
  },
  { name: 'smoothie',
    cost: 3.00,
    components: ['espresso', 'steamed milk'],
    modifiers: [
      { name: 'chocolate syrup', max: 1 },
      { name: 'whipped cream', max: 1 }
    ]
  }
]