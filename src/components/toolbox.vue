<template>
  <div>
    <draggable
      :list="components"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="addDefault"
    >
      <div v-for="c in components" :key="c.component">
        {{ c.component }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Toolbox",
  components: {
    draggable,
  },
  data() {
    return {
      list: [],
      components: [],
    };
  },
  mounted() {
    this.list = this.$store.state.toolbox.list;
    let defProto = {};
    this.list[".Prototype"].options.forEach((option) => {
      if (option.type === "bool") {
        defProto[option.name] = false;
      } else if (option.type === "number") {
        defProto[option.name] = 0;
      } else if (option.type === "table" || option.type === "checklist") {
        defProto[option.name] = [];
      } else if (option.type === "list") {
        defProto[option.name] = option.value.filter((v) => v.default)[0].value || "";
      } else {
        defProto[option.name] = "";
      }
    });

    Object.keys(this.list).forEach((k) => {
      if (k !== ".Prototype") {
        let tmp = this.list[k];
        let def = JSON.parse(JSON.stringify(defProto));
        def.component = k;
        tmp.options.forEach((option) => {
          if (option.type === "bool") {
            def[option.name] = false;
          } else if (option.type === "number") {
            def[option.name] = 0;
          } else if (option.type === "table" || option.type === "checklist") {
            def[option.name] = [];
          } else if (option.type === "list") {
            def[option.name] = option.value.filter((v) => v.default)[0].value || "";
          } else {
            def[option.name] = "";
          }
        });
        tmp.component = k;
        tmp.default = def;
        this.components.push(tmp);
      }
    });
  },
  methods: {
    addDefault(c) {
      let tmp = JSON.parse(JSON.stringify(c.default))
      tmp.id = tmp.component + "_" + new Date().getTime()
      if(tmp.component === 'Container'){
          tmp.elements = []
      }
      return tmp;
    },
  },
};
</script>

<style>
</style>