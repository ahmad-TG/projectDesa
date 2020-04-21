<template>
<div class="row q-mx-auto self-center flex-center">

    <q-card flat bordered class="my-card q-my-lg q-mx-sm">
      <q-card-section>
        <div class="col-6" style="min-width:280px">
            <VueApexCharts type="bar"  :options="options" :series="options.series"/>
        </div>
      </q-card-section>
    </q-card> 
    <q-card flat bordered class="my-card q-my-lg q-mx-sm">
      <q-card-section>
        <div class="col-6" style="min-width:280px">
            <VueApexCharts type="line"  :options="options" :series="options.series"/>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card q-my-lg q-mx-sm">
      <q-card-section>
        <div class="col-6" style="min-width:280px">
            <VueApexCharts type="pie"  :options="option" :series="option.series" />
        </div>
      </q-card-section>
    </q-card>

</div>

    
    
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    components: {
        VueApexCharts
    },
    data(){
        return{
            option : {
                series: [44, 55, 13, 33],
                labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
            },
           options : {
            // chart: {
            //     type: 'line'
            // },
            series: [
                {
                name: 'sales',
                data: [30,40,35,50,49,60,70,91,125]
                },
                {
                name: 'sales2',
                data: [40,40,55,60,65,60,70,91,130]
            }
            ],
            xaxis: {
                categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
            }
            },
        } 
    }
    
}
</script>

