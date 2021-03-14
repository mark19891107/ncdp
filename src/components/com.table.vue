<template>
  <div @click.stop="setFocus">
    <table v-if="fields.length > 0 " class="table table-striped table-sm">
      <thead>
        <tr>
          <td v-for="f in fields" :key="f.key">{{f.title}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in data" :key="`d-${index}`">
          <td v-for="(f,i) in fields" :key="`f-${i}`">
            {{d[f.key]}}
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
      data:[],
      fields:[]
    }
  },
  methods: {
    setFocus() {
      this.$store.commit("updateSelectComponentID", this.config.id)
    },
    refresh() {
      console.log("rerer")
    }
  },
  computed:{
    tableSrc(){
      return this.config.src
    }
  },
  watch:{
    tableSrc: {
      handler(){
        this.fields = [];
        this.data = [];
        fetch(this.tableSrc)
        .then(response=>response.json())
        .then(json=>{
          this.fields = json.fields;
          this.data = json.data;
        });
      },
      immediate: true
    }
  }
}
</script>