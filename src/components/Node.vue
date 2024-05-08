<template>
  <li>
    <span>{{ node.name }}</span>
    <button v-if="node.children" class="btn" @click="addDir">add dir</button>
    <ul>
      <node class="ml-2" v-for="child in node.children" :node="child" />
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  components: {},
  data() {
    return {};
  },

  props: {
    node: {
      type: Object,
      requiered: true,
    },
  },

  methods: {
    addDir() {
      this.node.addDir(this.node.name + '-' + (this.node.children.length + 1));
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  border: 2px solid red;
}
</style>
