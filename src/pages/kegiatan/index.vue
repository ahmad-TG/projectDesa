<template>
  <div class="q-pa-md ">
    
    <q-breadcrumbs active-color="black"  style="font-size: 12px" class="q-mt-md">
      <q-breadcrumbs-el label="Home" icon="home" clickable to="/home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Toolbar" />
    </q-breadcrumbs>



    <q-separator  class="q-mt-md" />
  
      <div class="q-mt-sm">
        <q-btn size="lg" flat color="blue"  dense   @click="alert=!alert" :icon="alert?'event_busy':'post_add'" >
          <q-tooltip content-class="bg-accent" >
            {{!alert?'show Form':'hide form'}}
          </q-tooltip>
        </q-btn>
      </div>
       
     <kegiatan v-show="alert" />
    
    <q-table 
     class="my-sticky-column-table q-mx-auto q-mt-lg"
      title="Student"
      dense
      :data="data"
      :columns="columns"
      row-key="name"
        :separator="separator"
        :visible-columns="visibleColumns"
        :filter="filter"
    >
        <template v-slot:top>
        <div  >Kegiatan </div>
       
        <q-space />

        <q-btn size="md" flat color="blue"  dense  icon="add_box" @click="alert=true">
          <q-tooltip  content-class="bg-accent" >Add Employee </q-tooltip>
        </q-btn>

        <q-btn size="md" flat color="blue" class="text-black q-mr-sm"  dense >
          <q-icon color="black" name="print" />
          <q-tooltip  content-class="bg-accent" >Cetak </q-tooltip>
        </q-btn>

        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" class="q-mr-lg">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
       
      </template>
      
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width >aksi</q-th>
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="blue"  dense @click="edit(props)" icon="visibility">
              <q-tooltip  content-class="bg-accent" anchor="top middle" >View </q-tooltip>
            </q-btn>
            <q-btn size="sm" class="q-mx-xs" color="blue"  dense @click="edit(props)" icon="create">
              <q-tooltip  content-class="bg-accent" anchor="top middle" >Edit </q-tooltip>
            </q-btn>
            <q-btn size="sm" color="blue"  dense @click="edit(props)" icon="delete_forever">
              <q-tooltip  content-class="bg-accent" anchor="top middle" >Delete </q-tooltip>
            </q-btn>
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            <div v-if="col.name='publish' && col.value==true">
              <q-btn size="sm" color="blue"  dense @click="edit(props)" icon="check_circle">
                <q-tooltip  content-class="bg-accent" anchor="top middle" >Publish </q-tooltip>
              </q-btn>
            </div>

            <div v-else-if="col.name='publish' && col.value==false">
              <q-btn size="sm" color="blue"  dense @click="edit(props)" icon="cancel_presentation">
                <q-tooltip  content-class="bg-accent" anchor="top middle" >No Publish </q-tooltip>
              </q-btn>
            </div>

            <div v-else>{{col.value}}</div>
            
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.my-sticky-column-table
  max-width: 1200px
 
  thead tr:first-child th:first-child
    background-color: #fff

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>

<script>
import kegiatan from 'components/kegiatan'
export default {
    components: {
    kegiatan
  },
  data () {
    return {
    alert:false,
    filter: '',
    visibleColumns: [ 'penangungjawab', 'title', 'isikegiatan', 'publish', 'bidang' ],
    separator: 'cell',
    columns: [
        {
          name: 'kegiatan',
          required: true,
          label: 'Nama kegiatan',
          align: 'left',
          field: row => row.kegiatan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'penangungjawab', align: 'center', label: 'Penangung Jawab', field: 'penangungjawab', sortable: true },
        { name: 'title', align: 'center', label: 'Title ', field: 'title', sortable: true },
        { name: 'isikegiatan',align: 'center', label: 'Kegiatan', field: 'isikegiatan' },
        { name: 'publish', align: 'center', label: 'Publish to Web', field: 'publish' }
        
      ],
      data: [
        {
          code:'a1',
          kegiatan: 'Frozen Yogurt',
          penangungjawab: 0.0,
          title: 6.0,
          isikegiatan: 24,
          publish:true,
          bidang: 87
        },
        {
          code:'a2',
          kegiatan: 'Ice cream sandwich',
          penangungjawab: 237,
          title: 9.0,
          isikegiatan: 37,
          publish: true,
          bidang: 129,
        },
        {
          code:'a3',
          kegiatan: 'Eclair',
          penangungjawab: 262,
          title: 16.0,
          isikegiatan: 23,
          publish: false,
          bidang: 337,
        },
        {
          code:'a4',
          kegiatan: 'Cupcake',
          penangungjawab: 305,
          title: 3.7,
          isikegiatan: 67,
          publish:false,
          bidang: 413,
        },
        {
          code:'a5',
          kegiatan: 'Gingerbread',
          penangungjawab: 356,
          title: 16.0,
          isikegiatan: 49,
          publish: false,
          bidang: 327,
        },
        {
          code:'a6',
          kegiatan: 'Jelly bean',
          penangungjawab: 375,
          title: 2.3,
          isikegiatan: 94,
          publish: true,
          bidang: 50,
        },
        {
          code:'a7',
          kegiatan: 'Lollipop',
          penangungjawab: 392,
          title: 0.2,
          isikegiatan: 98,
          publish: false,
          bidang: 38,
        },
        {
          code:'a8',
          kegiatan: 'Honeycomb',
          penangungjawab: 408,
          title: 3.2,
          isikegiatan: 87,
          publish: false,
          bidang: 562,
        },
        {
          code:'a9',
          kegiatan: 'Donut',
          penangungjawab: 452,
          title: 25.0,
          isikegiatan: 51,
          publish: true,
          bidang: 326,
        },
        {
          code:'a10',
          kegiatan: 'KitKat',
          penangungjawab: 518,
          title: 26.0,
          isikegiatan: 65,
          publish: true,
          bidang: 54,
        }
      ]
    }
  },
  methods:{
      edit(props){
          console.log("kirim data",props)
      },
      add(){
        this.$router.go('/addemployee')
      }
    
  }
}
</script>