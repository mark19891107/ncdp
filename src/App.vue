<template>
  <div id="app" class="d-flex flex-row">
    <Toolbox />
    <ComContainer :config="config" />
    <div>
      <div style="white-space: pre; height: 50vh; overflow: scroll">{{config|pretty}}</div>
      <div style="white-space: pre; height: 50vh; overflow: scroll">
        <PropPanel />
      </div>
    </div>
  </div>
</template>

<script>
import ComContainer from "./components/com.container";
import Toolbox from "./components/toolbox";
import PropPanel from "./components/propPanel";

export default {
  name: "App",
  components: {
    ComContainer,
    Toolbox,
    PropPanel
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  },
  computed:{
    config(){
      return this.$store.state.config;
    },
    selectedID(){
      return this.$store.state.selectedID;
    }
  }
};
</script>