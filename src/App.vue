<template>
  <div id="app">
    App
    <BaseEditor />
  </div>
</template>

<script>
import BaseEditor from "./components/BaseEditor.vue";

export default {
  name: "App",
  components: {
    BaseEditor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
