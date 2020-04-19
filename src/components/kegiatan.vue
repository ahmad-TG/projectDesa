<template>
    <div class=" q-my-md items-start ">
        <q-card  bordered class=" my-card">
        <q-card-section>
            <div class="text-h6">Tambah Kegiatan</div>
            <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator  inset />

        <q-card-section >
            <div class="row q-mb-md ">
                <div class="col-2  " >
                    <div class=" q-mt-xs " style="font-size:16px" >Nama Kegiatan</div>
                </div>

                <div class="col text-center " style="max-width:25px"  >
                    <div class=" q-mt-xs " style="font-size:16px" >:</div>
                </div>

                 <div class="col-6 ">
                    <q-input outlined v-model="text" label="Outlined" />
                </div>
            </div>

             <div class="row q-mb-md ">
                <div class="col-2  " >
                    <div class=" q-mt-xs " style="font-size:16px" >Penanggung jawab</div>
                </div>

                <div class="col text-center " style="max-width:25px"  >
                    <div class=" q-mt-xs " style="font-size:16px" >:</div>
                </div>

                 <div class="col-6 ">
                    <q-input outlined v-model="text" label="Outlined" />
                </div>
            </div>

             <div class="row q-mb-md ">
                <div class="col-2  " >
                    <div class=" q-mt-xs " style="font-size:16px" >Title</div>
                </div>

                <div class="col text-center " style="max-width:25px"  >
                    <div class=" q-mt-xs " style="font-size:16px" >:</div>
                </div>

                 <div class="col-6 ">
                    <q-input outlined v-model="text" label="Outlined" />
                </div>
            </div>

             <div class="row q-mb-md ">
                <div class="col-2  " >
                    <div class=" q-mt-xs " style="font-size:16px" >Uraian Kegiatan</div>
                </div>

                <div class="col text-center " style="max-width:25px"  >
                    <div class=" q-mt-xs " style="font-size:16px" >:</div>
                </div>

                 <div class="col-6 ">
                    <q-input
                    v-model="text"
                    filled
                    type="textarea"
                    />
                </div>
            </div>

              <div class="row q-mb-md ">
                <div class="col-2  " >
                    <div class=" q-mt-xs " style="font-size:16px" >Upload Foto</div>
                </div>

                <div class="col text-center " style="max-width:25px"  >
                    <div class=" q-mt-xs " style="font-size:16px" >:</div>
                </div>

                 <div class="col-6 " >
                     <q-file outlined v-model="model" label="Select" >
                        <template v-slot:append>
                            <q-icon name="attach_file" />
                        </template>
                     </q-file>
                </div>
            </div>

             <div class="row q-mb-md ">
                <div class="col-2  " />
                   

                <div class="col text-center " style="max-width:25px"  />
                    

                 <div class="col-6 " >
                        <q-btn color="primary" label="Add" class="q-mr-md"/>
                        <q-btn color="primary" label="Cancel" />
                </div>
            </div>


           
        </q-card-section>
        </q-card>
    </div>
</template>
<style lang="stylus" scoped>
input{
        width:100%
        height:20px;
        padding: 12px 20px;
        margin: 8px 10;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }

    .file{
        width:100%
    }
   

.input_padding{
    padding: 18px 20px;
}
</style>

<script>
export default {
  data () {
    return {
      files: null
    }
  },

  methods: {
    counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
      return `${filesNumber} files of ${maxFiles} | ${totalSize}`
    }
  }
}
</script>