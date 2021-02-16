/* eslint-disable */

<template>
  <draggable v-model="myArray"  group="people" @start="drag = true" @end="drag = false" >
    <div class="mb-3 form-inline"  v-for="e in myArray" :key="e.id">
      <label for="exampleFormControlInput1" class="form-label">{{e.name}}</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <ComInput />
  </draggable>  
</template>

<script>
import draggable from "vuedraggable";
import ComInput from "./com.input"
export default {
  components: {
    draggable,
    ComInput
  },
  data(){
    return {
      myArray:[
        {
          id:1,
          name: "Mark"
        },
        {
          id:2,
          name: "Dark"
        }
      ]
    }
  }
};
</script>

<style>
</style>