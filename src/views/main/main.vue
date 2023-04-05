<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 宽度是否变 -->
      <el-aside :width="isFold ? '60px' : '210px'">
        <!-- 描述是否折叠 -->
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <!-- 子组件 自定义事件通信 在图标上绑定点击事件 -->
          <main-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
const isFold = ref(false)
/* flag从子组件传过来 main-header */
function handleFoldChange(flag: boolean) {
  isFold.value = flag
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
