<template>
  <div class="form-inline">
      <label class="mr-2">{{title}}</label>
      <input :type="style" :max="max" :min="min" :value="def" :step="step" />
  </div>
  
</template>

<script>
export default {
  name: "ComInput",
  data() {
    // return {
    //     style:"number",
    //     title:"顯示筆數",
    //     def:'0',
    //     disabled: false,
    //     min:0,
    //     max:10,
    //     step:3,
    //     align:"left",
    //     readonly: false
    // };
    return {
        style:"range",
        title:"顯示筆數",
        def:'0',
        disabled: false,
        min:0,
        max:10,
        step:3,
        align:"left",
        readonly: false
    };
    // return{
    //     style:"number"
    // };
  },
};
</script>

<style>
</style>