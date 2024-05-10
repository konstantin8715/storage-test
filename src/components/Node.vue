<template>
  <div class="node-block">
    <template v-if="!node.isRoot">
      <template v-if="node.type == 'dir'">
        <v-icon
          v-if="!isChildrenOpen"
          icon="mdi-chevron-right"
          @click="isChildrenOpen = true"
        />
        <v-icon
          v-else
          icon="mdi-chevron-down"
          @click="isChildrenOpen = false"
        />
      </template>

      <v-icon v-if="node.type == 'dir'" icon="mdi-folder" />
      <v-icon v-else icon="mdi-file" />

      <span class="ml-1">{{ node.name }}</span>

      <div v-if="isChildrenOpen" class="children-node-block ml-2">
        <node v-for="child in node.children" :node="child" />
      </div>
    </template>
    <!-- <button v-if="node.children" class="btn" @click="addDir">add dir</button> -->
    <template v-else>
      <div class="ml-2">
        <node v-for="child in node.children" :node="child" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "node",
  components: {},
  data() {
    return {
      isChildrenOpen: false,
    };
  },

  props: {
    node: {
      type: Object,
      requiered: true,
    },
  },

  methods: {
    addDir() {
      this.node.addDir(this.node.name + "-" + (this.node.children.length + 1));
    },
  },
};
</script>

<style scoped lang="scss">
@import "../colors";

.node-block {
  width: 100%;
  color: black;
  // border-left: solid black;
  // background: $dark-primary;
}

.children-node-block {
  border-left: solid black;
}
</style>
