<template>
  <div @click.stop="setFocus" :style="'text-align:'+config.align" v-if="config.style==='html'" v-html="config.content"></div>
  <img @click.stop="setFocus" :style="'text-align:'+config.align" v-else-if="config.style==='image'" :src="config.src"/>
  <div @click.stop="setFocus" :style="'text-align:'+config.align" v-else>{{config.content}}</div>
</template>

<script>
export default {
    props:{
        config:Object
    },
  methods: {
    setFocus() {
      this.$store.commit("updateSelectComponentID", this.config.id)
    },
  },
}
</script>

<style>
*:focus {
  background-color: burlywood;
}
</style>