export const demoMenus = [
  {
    id: 1,
    name: '数据分析',
    type: 1,
    url: '/main/analysis',
    icon: 'el-icon-Monitor',
    children: [
      { id: 11, name: '数据看板', type: 2, url: '/main/analysis/dashboard' },
      { id: 12, name: '运营概览', type: 2, url: '/main/analysis/overview' },
    ],
  },
  {
    id: 2,
    name: '商品管理',
    type: 1,
    url: '/main/product',
    icon: 'el-icon-Goods',
    children: [
      { id: 21, name: '商品列表', type: 2, url: '/main/product/goods' },
      { id: 22, name: '分类配置', type: 2, url: '/main/product/category' },
    ],
  },
  {
    id: 3,
    name: '内容中心',
    type: 1,
    url: '/main/story',
    icon: 'el-icon-ChatDotSquare',
    children: [
      { id: 31, name: '动态列表', type: 2, url: '/main/story/list' },
      { id: 32, name: '客服对话', type: 2, url: '/main/story/chat' },
    ],
  },
  {
    id: 4,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: 'el-icon-Setting',
    children: [
      { id: 41, name: '用户管理', type: 2, url: '/main/system/user' },
      { id: 42, name: '角色管理', type: 2, url: '/main/system/role' },
      { id: 43, name: '部门管理', type: 2, url: '/main/system/department' },
      { id: 44, name: '菜单管理', type: 2, url: '/main/system/menu' },
      { id: 45, name: '系统设置', type: 2, url: '/main/system/setting' },
    ],
  },
  {
    id: 5,
    name: '工具箱',
    type: 1,
    url: '/main/tools',
    icon: 'el-icon-FolderOpened',
    children: [
      { id: 51, name: '文件上传', type: 2, url: '/main/tools/upload' },
    ],
  },
]

export const demoPermissions = [
  'system:user:create',
  'system:user:update',
  'system:user:delete',
  'system:role:update',
]
