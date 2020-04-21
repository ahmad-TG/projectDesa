<template>
  <div class="q-pa-md">
      
    <div class="row q-col-gutter-none" >
      
      <div  class="col-4 " v-for="(data, index) in datas" :key="index" >
            <q-card flat bordered class="my-card bg-blue-11 text-black q-ma-md cursor-pointer" @click="show(data)" clickable >
                <q-tooltip content-class="bg-accent" anchor="top middle" style="padding-top:100px" >Data {{data.title}} </q-tooltip>
                <q-card-section class="bg-blue-3 text-black">
                    <div class="row items-center no-wrap">
                        <div class="col cursor-pointer">
                            <div class="text-h6">{{data.title}}</div>
                            <div class="text-subtitle2">{{data.user}}</div>
                        </div>

                        <div class="col-auto">
                            <q-btn color="grey-7" round flat icon="more_vert">
                            <q-menu cover auto-close>
                                <q-list>
                                <q-item clickable>
                                    <q-item-section>Remove Card</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>Send Feedback</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>Share</q-item-section>
                                </q-item>
                                </q-list>
                            </q-menu>
                            </q-btn>
                        </div>
                    </div>
                </q-card-section>

                <q-card-section class="text-center cursor-pointer"  >
                    <label class="cursor-pointer" style="font-size:50px">{{data.count }} </label>Person
                </q-card-section>

                <q-separator />

                <q-card-actions class="bg-blue text-white  " >
                  <div class="row" style="margin-left:100px">
                    <div class="col q-mr-xl ">
                        <label class="cursor-pointer" >{{data.month}}</label>
                    </div>
                    <div class="col">
                       <label class="cursor-pointer">{{data.year}}</label>
                    </div>
                  </div>
                        
                        <!-- <div class="q-mx-sm"/> -->
                        
                </q-card-actions>
            </q-card>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)

.my-card
  width: 100%
  max-width: 250px
</style>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      datas:[
          {
              user:'ahmad',
              title:'Student',
              count:30,
              month:'January',
              year:'2020'
          },
           {
              user:'ahmad',
              title:'Teacher',
              count:30,
              month:'January',
              year:'2020'
          },
           {
              user:'ahmad',
              title:'Employee',
              count:30,
              month:'January',
              year:'2020'
          },
           {
              user:'ahmad',
              title:'Instruktur',
              count:30,
              month:'January',
              year:'2020'
          },
           {
              user:'ahmad',
              title:'Partner',
              count:30,
              month:'January',
              year:'2020'
          }
        ]
    
    }
    
  },
  methods:{
    show(data){
      console.log("data", data)
    }
  }
}
</script>
