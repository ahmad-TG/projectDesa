
const routes = [

  {
      path: '/login',
      component: () => import('pages/login/index.vue'),
  },
  {
    
    path: '/',
    component: () => import('layouts/MainLayoutcopy.vue'),
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: 'desa', component: () => import('pages/desa/desa.vue') },
      { path: 'statistik', component: () => import('pages/profile/index.vue') },
      { path: 'teacher', component: () => import('pages/teacher/index.vue') },
      { path: 'student', component: () => import('pages/student/index.vue') },

      { path: 'employee', component: () => import('pages/employee/index.vue') },
      { path: 'addemployee', component: () => import('pages/employee/add.vue') },

      { path: 'setting', component: () => import('pages/setting/index.vue') },
      { path: 'managemantuser', component: () => import('pages/setting/index.vue') },

      { path: 'kegiatan', component: () => import('pages/kegiatan/index.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
