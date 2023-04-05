<template>
  <div class="login-panel">
    <h1 class="title"></h1>
    <!-- tab切换 -->
    <el-tabs type="border-card" stretch v-model="activeName">
      <!-- tab1 -->
      <el-tab-pane name="account">
        <!-- 具名插槽 -->
        <template #label>
          <div class="label">
            <el-icon><User /></el-icon>
            <span class="text">账号登录</span>
          </div>
        </template>
        <pane-account ref="accountRef" />
      </el-tab-pane>
      <!-- tab2 -->
      <el-tab-pane name="phone">
        <template #label>
          <div class="label">
            <el-icon><Cellphone /></el-icon>
            <span class="text">手机登录</span>
          </div>
        </template>
        <pane-phone />
      </el-tab-pane>
    </el-tabs>

    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') || false)
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value) //得到实例，获取内部的方法
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .controls {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    //--el-button-size: 50px;
  }
}
</style>
