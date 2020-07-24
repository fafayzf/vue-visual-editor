<template>
  <el-container>
    <el-header>
      <tool></tool>
    </el-header>
    <el-main class="container">
      <visual-components class="components"></visual-components>
      <visual-design class="design"></visual-design>
      <!-- <iframe class="design" src="./visualDisgn" frameborder="0"></iframe> -->
      <visual-tree class="tree"></visual-tree>
    </el-main>
  </el-container>
</template>
<script>
import tool from "@/components/tool";
import visualDesign from "@visualDesign/index";
import visualComponents from "@visualComponents/index";
import visualTree from "@visualTree/index";
export default {
  components: {
    visualComponents,
    visualDesign,
    visualTree,
    tool
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  .components {
    flex: 0 0 300px;
  }
  .design {
    width: 100%;
    height: calc(100vh - 100px);
  }
  .tree {
    flex: 0 0 500px;
  }
}
</style>