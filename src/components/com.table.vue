<template>
  <div @click.stop="setFocus">
    <table v-if="fields.length > 0 " class="table table-sm table-bordered table-striped">
      <thead>
        <tr class="table-primary">
          <td v-for="f in fields" :key="f.key">{{f.title}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in data" :key="`d-${index}`">
          <td v-for="(f,i) in fields" :key="`f-${i}`" 
            :style="
              (apply[d.key]===undefined)?'':
              (apply[d.key][f.key]===undefined)?'':
              ((apply[d.key][f.key].fg===undefined)?'':';color:'+apply[d.key][f.key].fg) + 
              ((apply[d.key][f.key].bg===undefined)?'':';background-color:'+apply[d.key][f.key].bg)">
            <span v-if="f.type===undefined">
              {{d[f.key]}}
            </span>
            <span v-if="f.type==='button'" 
                  class="btn btn-sm btn-danger"
                  @click="runFunction(f.function.onclick, d)"
            >{{f.title}}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>empty table</div>
  </div>
</template>

<script>
export default {
  props:{
    config:Object
  },
  data(){
    return {
      urlData:[],
      urlFields:[],
      urlApply:{},
    }
  },
  methods: {
    setFocus() {
      this.$store.commit("updateSelectComponentID", this.config.id)
    },
    refresh() {
      console.log("rerer")
    },
    runFunction(funcContent, row){
      this.$store.commit("runFunction",{input:row, function:funcContent})
    }
  },
  computed:{
    tableSrc(){
      return this.config.src
    },
    dataMode(){
      if(this.tableSrc.indexOf("this.$store")>-1){
        return "Store"
      }
      else{
        return "URL"
      }
    },
    storeData(){
      if(this.dataMode==='Store'){
        return eval(this.tableSrc).data
      }
      else{
        return []
      }
    },
    storeFields(){
      if(this.dataMode==='Store'){
        return eval(this.tableSrc).fields
      }
      else{
        return []
      }
    },
    data:{
      get(){
        return (this.dataMode==='Store')? this.storeData: this.urlData
      },
      set(c){
        return c;
      }
    },
    fields:{
      get(){
        return (this.dataMode==='Store')? this.storeFields: this.urlFields
      },
      set(c){
        return c;
      }
    },
    apply:{
      get(){
        return (this.dataMode==='Store')? {}: this.urlApply
      },
      set(c){
        return c;
      }
    }
  },
  watch:{
    tableSrc: {
      handler(){
        this.fields = [];
        this.data = [];
        if(this.tableSrc.indexOf("this.$store")===-1){ // URL mode
          fetch(this.tableSrc) 
          .then(response=>response.json())
          .then(json=>{
            this.urlFields = json.column;
            this.urlData = Object.keys(json.data).map(k=>{
              let tmp = json.data[k];
              tmp.key = k
              return tmp;
            });
            this.urlApply = json.apply;
          });
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
table,
tr,
td,
th,
thead,
tbody {
  border-color: black;
}
</style>