<script>
import { Button } from 'element-ui'
export default {
  methods: {
    drop(e) {
      console.log(e)
      const data = e.dataTransfer.getData('text');
      const instance = this.$store.state['components/button'].instance
       console.log(instance);
      this.$refs.panel.appendChild(instance.$el.cloneNode(true))
    },
    dragover() {}
  },
  render(createElement) {
    return createElement(
      'el-container',
      [
        createElement('div',  {
          nativeOn: {
            drop: this.drop,
            dragover: this.dragover
          },
          style: {
            width: '100%',
            height: '100%'
          },
          ref: 'panel'
        })
      ]
    )
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>