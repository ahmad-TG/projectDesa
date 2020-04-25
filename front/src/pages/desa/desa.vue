<template>
    <div class="q-pa-md">
        <q-scroll-area ref="scrollArea" style="height: 500px; ">
        <q-img src="/statics/layananbanner.jpg" style="height:500px">
            <div class="column" style="padding-left:100px; padding-top:150px">
                <div class="col">
                    <div class="text-h4 text-white text-bold"><u>Profil Desa</u></div>
                </div>
                <div style="height:20px"/>
                <div class="col">
                    <div class="text-h7 text-white ">Desa Kudukeras merupakan desa yang beredar di Kecamatan Babakan,<p/>
                        Kabupaten Cirebon. Informasi lebih dalam mengenai desa kudukeras dapat<p/>
                        anda lihat dengan klik tombol selengkapnya.
                    </div>
                </div>
                <div style="height:20px"/>
                <div class="col">
                    <div class="row q-gutter-lg">
                        <div class="col-auto">
                            <q-btn size="15px" unelevated class="q-px-lg q-py-xs text-bold" no-caps color="green-6" label="Selengkapnya" @click="animateScroll"/>
                        </div>
                        <div class="col-auto">
                            <q-btn size="15px" unelevated class="q-px-xl q-py-xs text-bold" no-caps color="green-6" label="Data Desa"/>
                        </div>

                    </div>
                </div>
            </div>
        </q-img>

        <div style="height:110px;"/>
        
        
        <q-intersection  transition="scale">
            <div style="margin-left:5%; margin-right:5%">
                <div class="row flex flex-center q-gutter-lg">
                    <div class="col-auto">
                        <q-btn size="30px" unelevated class="q-px-xl q-py-xs text-bold text-grey-8 icon-green-6" no-caps color="white" label="Sejarah" icon="import_contacts" @click="$router.replace('sejarah')"/>
                    </div>
                    <div class="col-auto">
                        <q-btn size="30px" unelevated class="q-px-xl q-py-xs text-bold text-grey-8 icon-green-6" no-caps color="white" label="Geografis" icon="explore" @click="$router.replace('geografis')"/>
                    </div>
                    <div class="col-auto">
                        <q-btn size="30px" unelevated class="q-px-xl q-py-xs text-bold text-grey-8 icon-green-6" no-caps color="white" label="Pemerintah Desa" icon="people_alt" @click="$router.replace('pdesa')"/>
                    </div>
                </div>
            </div>
        </q-intersection>
        <div style="height:110px;"/>
        </q-scroll-area>
    </div>
</template>

<script>
export default {
    data () {
    return {
      position: 500
    }
  },

   methods: {
      animateScroll () {
      this.$refs.scrollArea.setScrollPosition(this.position, 500)
      this.position = Math.floor(Math.random() * 1001) * 20
    }
   }

}
</script>

<style>

</style>