<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      title: 'hello world'
    }
  },
  render (createElement) {
    return createElement('h1', this.title)
  }
}
</script>
