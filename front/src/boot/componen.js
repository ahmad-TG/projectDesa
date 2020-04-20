
import home from '../pages/home/index.vue'
import profile from '../pages/profile/index.vue'
import teacher from '../pages/teacher/index.vue'
import student from '../pages/student/index.vue'
import employee from '../pages/employee/index.vue'
import setting from '../pages/setting/index.vue'

export default ({ Vue }) => {
  Vue.component('home', home)
  Vue.component('profile', profile)
  Vue.component('teacher', teacher)
  Vue.component('student', student)
  Vue.component('employee', employee)
  Vue.component('setting', setting)
}
