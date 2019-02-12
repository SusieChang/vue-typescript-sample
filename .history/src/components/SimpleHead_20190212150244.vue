<script lang='ts'>
import Vue, { CreateElement } from 'vue'
let getChildrenTextContent = function (children: any): any {
  return children
    .map(function (node: any) {
      return node.children ? getChildrenTextContent(node.children) : node.text
    })
    .join('')
}
export default Vue.component('SimpleHead', {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render (h: CreateElement) {
    // 创建 kebab-case 风格的ID
    let headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')
    return h('h' + this.level, [
      h(
        'a',
        {
          attrs: {
            name: headingId,
            href: 'javascript: void'
          }
        },
        this.$slots.default
      )
    ])
  }
})
</script>
