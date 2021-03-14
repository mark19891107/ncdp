<template>
  <draggable
    v-model="config.elements"
    :style="'flex:' + config.flex"
    :tag="config.style === 'fieldset' ? 'fieldset' : 'div'"
    group="people"
    @start="drag = true"
    @end="drag = false"
    @click.stop.native="setFocus(config.id)"
    :disabled="config.check"
    :class="customClass"
  >
    <!-- <legend v-if="config.style === 'fieldset'">{{ config.legend }}</legend> -->
    <template v-for="c in config.elements">
      <ComContainer
        v-if="c.component === 'Container'"
        :config="c"
        :key="c.id"
      />
      <ComStatic v-else-if="c.component === 'Static'" :config="c" :key="c.id" />
      <ComTable v-else-if="c.component === 'Table'" :config="c" :key="c.id" />
      <div v-else :key="c.id">{{ c.content }}</div>
    </template>
  </draggable>
</template>
<script>
import ComStatic from "./com.static";
import ComTable from "./com.table";
import draggable from "vuedraggable";
export default {
  name: "ComContainer",
  components: {
    ComStatic,
    ComTable,
    draggable,
  },
  props: {
    config: Object,
  },
  methods: {
    setFocus() {
      this.$store.commit("updateSelectComponentID", this.config.id)
    }
  },
  computed: {
    customClass() {
      let tmp = {
        m2: true,
        edit: true,
        "d-flex":
          this.config.align === "flexrow" || this.config.align === "flexcol",
        "flex-row": this.config.align === "flexrow",
        "flex-column": this.config.align === "flexcol",
      };
      if (this.config.class !== undefined) {
        this.config.class.map((c) => {
          tmp[c] = true;
        });
      }
      return tmp;
    },
  },
};
</script>

<style>
fieldset {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend {
  width: inherit; /* Or auto */
  padding: 0 10px; /* To give a bit of padding on the left and right */
  border-bottom: none;
}

.edit {
  padding: 5px;
  margin: 5px;
  border: solid 1px black;
}

.edit:focus {
  background-color: burlywood;
}
</style>