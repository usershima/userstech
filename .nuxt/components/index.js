export { default as Canvas } from '../../components/Canvas.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as Slide } from '../../components/Slide.vue'
export { default as Slider } from '../../components/Slider.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
