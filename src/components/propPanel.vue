<template>
  <div>
    <table class="table table-sm table-bordered">
      <tr v-for="option in proto.options.concat(template.options)||[]" :key="option.name">
        <template v-if="
          option.cond===undefined ||
          option.cond!==undefined && option.cond.style.indexOf(prop.style)>-1
        ">
          <td>
            <label class="mr-1">{{option.title}}:</label>
          </td>
          <td>
            <select v-if="option.type === 'list'" v-model="prop[option.name]">
              <option :value="v.value" :key="v.value" v-for="v in option.value">{{v.title}}</option>
            </select>
            <textarea rows="1" v-if="option.type === 'text' || option.type === 'href'" v-model="prop[option.name]"></textarea>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PropPanel",
  data() {
    return {
      prop: {},
    };
  },
  computed: {
    selectedID() {
      return this.$store.state.selectedID;
    },
    toolbox() {
      return this.$store.state.toolbox.list;
    },
    template(){
      if(Object.keys(this.prop).length>0){
        return this.toolbox[this.prop.component]
      }
      else{
        return {};
      }
    },
    proto(){
      return this.toolbox['.Prototype']
    }
  },
  watch: {
    selectedID() {
      let config = this.$store.state.config;
      function findObjectByID(config, id){
        console.log(config,id)
        if(config.id === id){
          let tmp = JSON.parse(JSON.stringify(config))
          delete tmp.elements
          return tmp
        }
        else if (config.elements !== undefined && config.elements.length > 0){
          for(let i = 0 ; i < config.elements.length ; i++){
            let tmp = findObjectByID(config.elements[i], id);
            console.log(tmp)
            if(tmp !== undefined){
              return tmp
            }
          }
        }
        else{
          return undefined;
        }
      }
      this.prop = findObjectByID(config, this.selectedID);
    },
    prop:{
      handler: function (val){
        this.$store.commit("updateComponentByID", val);
      },
      deep: true
    }
  },
};
</script>

<style scoped>

* td,tr,table,label{
  padding: 0px!important;
  margin: 0px!important;
}
* tr>td:nth-child(1){
  text-align: left!important;
  vertical-align: middle!important;
}

* textarea{
  vertical-align: middle!important;
}

</style>