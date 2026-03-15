<template>
  <div class="upload">
    <div class="panel">
      <div class="panel-title">{{ t('upload.title') }}</div>
      <div class="panel-sub">{{ t('upload.tip') }}</div>
      <el-upload
        class="upload-area"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">将文件拖到此处，或 <em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip">支持 jpg/png/pdf，单个文件不超过 10MB</div>
        </template>
      </el-upload>
    </div>

    <div class="panel">
      <div class="panel-title">上传记录</div>
      <el-table :data="records" border>
        <el-table-column type="index" label="#" width="60" />
        <el-table-column prop="name" label="文件" />
        <el-table-column prop="size" label="大小" width="120" />
        <el-table-column prop="status" label="状态" width="120">
          <template #default="scope">
            <el-tag :type="scope.row.status === '成功' ? 'success' : 'warning'">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const records = [
  { name: '品牌资料包.zip', size: '8.2 MB', status: '成功', time: '2026-03-14 18:10' },
  { name: '新品海报.png', size: '2.1 MB', status: '成功', time: '2026-03-13 11:42' },
  { name: '合同模板.pdf', size: '1.4 MB', status: '处理中', time: '2026-03-12 09:30' },
]
</script>

<style scoped>
.upload {
  display: grid;
  gap: 16px;
}

.panel {
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  border-radius: 12px;
  padding: 16px 20px;
}

.panel-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.panel-sub {
  color: var(--app-subtext);
  margin-bottom: 16px;
}

.upload-area {
  width: 100%;
}
</style>
