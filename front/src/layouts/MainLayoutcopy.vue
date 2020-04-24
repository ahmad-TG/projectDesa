<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white" style="height:75px">
      <div class="row items-center" style="margin-left:15px; margin-top:6px">
        <div class="col-auto" style="width:160px;">
          <q-img @click="$router.replace('home')" src="../statics/logo.png"/>
        </div>
        <div class="col"/>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('desa')"> DESA </q-item-section>
          </q-item>
        </div>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('statistik')"> STATISTIK </q-item-section>
          </q-item>
        </div>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('layanan')"> LAYANAN DESA </q-item-section>
          </q-item>
        </div>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('potensi')"> POTENSI DESA </q-item-section>
          </q-item>
        </div>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('potensi')"> KABAR DESA </q-item-section>
          </q-item>
        </div>
        <div class="col-auto">
          <q-item clickable>
            <q-item-section class="text-bold" @click="$router.replace('potensi')"> GALERI DESA </q-item-section>
          </q-item>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div style="height:50px"/>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>