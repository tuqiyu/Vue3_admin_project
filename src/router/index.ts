import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  //映射关系 path=>component

  routes: [
    //初始页面重定向
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/notFound.vue'),
    },
  ],
})

router.beforeEach((to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }

  // 如果是进入到main
  if (to.path === '/main') {
    return firstMenu?.url
  }
})

export default router
