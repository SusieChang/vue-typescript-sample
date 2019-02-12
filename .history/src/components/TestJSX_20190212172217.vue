<script lang="tsx">
import { CreateElement } from 'vue'
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class TestJSX extends Vue {
  render (h: CreateElement) {
    return (
      <div>tsx语法测试</div>
    )
  }
}
</script>
