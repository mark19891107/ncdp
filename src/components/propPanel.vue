<template>
  <div>
    {{selectedID}}
    {{ prop }}
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
  },
};
</script>

<style>
</style>