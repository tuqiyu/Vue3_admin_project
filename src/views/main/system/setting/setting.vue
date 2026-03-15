<template>
  <div class="setting">
    <div class="panel">
      <div class="panel-title">{{ t('settings.title') }}</div>
      <el-form label-width="120px" :model="form">
        <el-form-item :label="t('settings.base')">
          <el-input v-model="form.name" placeholder="系统名称" />
        </el-form-item>
        <el-form-item label="默认时区">
          <el-select v-model="form.timezone" placeholder="选择时区">
            <el-option label="Asia/Shanghai" value="Asia/Shanghai" />
            <el-option label="America/Los_Angeles" value="America/Los_Angeles" />
            <el-option label="Europe/London" value="Europe/London" />
          </el-select>
        </el-form-item>
        <el-form-item label="默认语言">
          <el-select v-model="form.locale" placeholder="选择语言">
            <el-option label="简体中文" value="zh-CN" />
            <el-option label="English" value="en-US" />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('settings.notify')">
          <el-checkbox-group v-model="form.notify">
            <el-checkbox label="邮件" />
            <el-checkbox label="短信" />
            <el-checkbox label="站内" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="自动审批">
          <el-switch v-model="form.autoApprove" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">{{ t('common.save') }}</el-button>
          <el-button>{{ t('common.cancel') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '轻轻两下后台',
  timezone: 'Asia/Shanghai',
  locale: 'zh-CN',
  notify: ['邮件', '站内'],
  autoApprove: true,
})
</script>

<style scoped>
.setting {
  display: grid;
}

.panel {
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  border-radius: 12px;
  padding: 16px 20px;
}

.panel-title {
  font-weight: 600;
  margin-bottom: 12px;
}
</style>
