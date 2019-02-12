<script lang="tsx">
import { CreateElement } from 'vue'
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class TestJSX extends Vue {
  render (h: CreateElement) {
    return (
      <div>这条是jsx</div>
    )
  }
}
</script>
