<template >
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated class="q-ml-none bg-white text-black">
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="q-ml-md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-tooltip v-if="leftDrawerOpen" content-class="bg-accent" anchor="bottom middle" style="padding-top:100px" >Hide menu</q-tooltip>
          <q-tooltip v-else content-class="bg-accent" anchor="bottom middle" style="padding-top:100px" >show menu</q-tooltip>
        </q-btn>

        <q-toolbar-title>
          <q-btn round>
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              <q-tooltip  content-class="bg-accent">My Account</q-tooltip>
              <q-menu fit>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>New tab</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>New incognito tab</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Recent tabs</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>History</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Downloads</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Help &amp; Feedback</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-avatar>
          </q-btn>
        </q-toolbar-title>

        <div class="q-mr-md"  >
          <q-btn >
            
             Logout
             <q-menu fit>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class=" text-white bg-blue-9" >
      <q-list>
        <q-item-label
          header
          class="text-blue bg-white text-bold"
          style="height:50px"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-mx-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
.box1{ background: linear-gradient(to right, #0033ff,#000099) }
</style>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      tool:false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          // caption: 'quasar.dev',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Kegiatan',
          // caption: 'quasar.dev',
          icon: 'sports_kabaddi',
          link: 'kegiatan'
        },
        {
          title: 'Monitoring',
          // caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'profile'
        },
        {
          title: 'Teacher',
          // caption: 'chat.quasar.dev',
          icon: 'people',
          link: 'teacher'
        },
        {
          title: 'Student',
          // caption: 'forum.quasar.dev',
          icon: 'people',
          link: 'student'
        },
        {
          title: 'Employee',
          // caption: '@quasarframework',
          icon: 'people',
          link: 'employee'
        },
        {
          title: 'Managemant Users',
          // caption: '@quasarframework',
          icon: 'fa fa-users',
          link: 'managemantuser'
        },
        {
          title: 'Logout',
          // caption: '@QuasarFramework',
          icon: 'power_settings_new',
          link: 'setting'
        }
      ]
    }
  }
}
</script>
