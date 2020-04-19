<template>
  <div class=" text-center  ">
      <center>
            <div class=" text-black" style="height:50px">
               
               
            </div>
      </center>
    <div>
        <q-separator color="orange"  style="height:4px;width:100%"  />
    </div>
      <center >
          
          <div  class="bg-blue-6 "  >
              
              <div class="row q-py-md justify-center ">
                  <div class="col-8 q-py-md" style="height:280px;min-width:350px">
                      <q-card>
                         <q-card-actions >
                           <div class="row">
                             <div class="col" style="height:250px;min-width:300px;">
                                <q-carousel 
                                
                                animated
                                v-model="slide"
                                navigation
                                infinite
                                autoplay
                                arrows
                                transition-prev="slide-right"
                                transition-next="slide-left"
                            >
                                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                            </q-carousel>
                             </div>
                             <div class="col q-my-sm">aa</div>
                             <div class="col" style="height:250px;min-width:300px;" >
                                <q-carousel 
                                
                                animated
                                v-model="slide"
                                navigation
                                infinite
                                autoplay
                                arrows
                                transition-prev="slide-right"
                                transition-next="slide-left"
                            >
                                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                            </q-carousel>
                             </div>
                           </div>
                             
                            
                         </q-card-actions>
                      </q-card>
                  </div>
                         

              </div>
           
          </div>
      </center>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>