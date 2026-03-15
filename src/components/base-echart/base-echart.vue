<template>
  <div ref="chartRef" class="base-echart" :style="chartStyle"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption, ECharts } from 'echarts'

type Props = {
  options: EChartsOption
  height?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '320px',
  width: '100%',
})

const chartRef = ref<HTMLDivElement | null>(null)
let chartInstance: ECharts | null = null

const chartStyle = computed(() => ({
  height: props.height,
  width: props.width,
}))

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  chartInstance.setOption(props.options)
}

const resizeHandler = () => {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chartInstance?.dispose()
  chartInstance = null
})

watch(
  () => props.options,
  (newOptions) => {
    if (!chartInstance) return
    chartInstance.setOption(newOptions, true)
  },
  { deep: true }
)
</script>

<style scoped>
.base-echart {
  border-radius: 12px;
  background: var(--app-card-bg);
}
</style>
