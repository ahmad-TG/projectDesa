<template>
  <div class="q-pa-md ">
    
    <q-breadcrumbs active-color="black"  style="font-size: 12px" class="q-mt-md">
      <q-breadcrumbs-el label="Home" icon="home" clickable to="/home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Toolbar" />
    </q-breadcrumbs>

    <q-separator  class="q-mt-md" />
    
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
        <div  >Data Employee </div>
       
        <q-space />

        <q-btn size="md" flat color="blue"  dense  icon="add_box" to="/addemployee">
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
            {{ col.value }}
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
export default {
  data () {
    return {
    filter: '',
    visibleColumns: [ 'alamat', 'mata_pelajaran', 'no_hp', 'pendidikan', 'bidang' ],
    separator: 'cell',
    columns: [
        {
          name: 'teacher',
          required: true,
          label: 'Teacher',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat', sortable: true },
        { name: 'mata_pelajaran', align: 'center', label: 'Mata Pelajaran ', field: 'mata_pelajaran', sortable: true },
        { name: 'no_hp',align: 'center', label: 'No HP', field: 'no_hp' },
        { name: 'pendidikan', align: 'center', label: 'Pendidikan', field: 'pendidikan' },
        { name: 'bidang', align: 'center', label: 'Bidang', field: 'bidang' }
       
      ],
      data: [
        {
          code:'a1',
          name: 'Frozen Yogurt',
          alamat: 159,
          mata_pelajaran: 6.0,
          no_hp: 24,
          pendidikan: 4.0,
          bidang: 87
        },
        {
          code:'a2',
          name: 'Ice cream sandwich',
          alamat: 237,
          mata_pelajaran: 9.0,
          no_hp: 37,
          pendidikan: 4.3,
          bidang: 129,
        },
        {
          code:'a3',
          name: 'Eclair',
          alamat: 262,
          mata_pelajaran: 16.0,
          no_hp: 23,
          pendidikan: 6.0,
          bidang: 337,
        },
        {
          code:'a4',
          name: 'Cupcake',
          alamat: 305,
          mata_pelajaran: 3.7,
          no_hp: 67,
          pendidikan: 4.3,
          bidang: 413,
        },
        {
          code:'a5',
          name: 'Gingerbread',
          alamat: 356,
          mata_pelajaran: 16.0,
          no_hp: 49,
          pendidikan: 3.9,
          bidang: 327,
        },
        {
          code:'a6',
          name: 'Jelly bean',
          alamat: 375,
          mata_pelajaran: 0.0,
          no_hp: 94,
          pendidikan: 0.0,
          bidang: 50,
        },
        {
          code:'a7',
          name: 'Lollipop',
          alamat: 392,
          mata_pelajaran: 0.2,
          no_hp: 98,
          pendidikan: 0,
          bidang: 38,
        },
        {
          code:'a8',
          name: 'Honeycomb',
          alamat: 408,
          mata_pelajaran: 3.2,
          no_hp: 87,
          pendidikan: 6.5,
          bidang: 562,
        },
        {
          code:'a9',
          name: 'Donut',
          alamat: 452,
          mata_pelajaran: 25.0,
          no_hp: 51,
          pendidikan: 4.9,
          bidang: 326,
        },
        {
          code:'a10',
          name: 'KitKat',
          alamat: 518,
          mata_pelajaran: 26.0,
          no_hp: 65,
          pendidikan: 7,
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