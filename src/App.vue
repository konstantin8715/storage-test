<template>
  <div class="d-flex justify-center align-center h-100">
    <div class="main-block">
      <!-- <button v-if="directoriesStore.rootNode.children.length == 0" @click="getChildren">add dir</button>
      <ul v-else class="pl-10">
        <node v-for="child in directoriesStore.rootNode.children" :node="child" />
      </ul> -->
      <node :node="directoriesStore.rootNode" />
    </div>
  </div>
</template>

<script>
import { useDirectoriesStore } from "./stores/DirectoriesStore";
import Node from "./components/Node.vue";

export default {
  components: { Node },
  data() {
    return {
      directoriesStore: useDirectoriesStore(),
    };
  },

  methods: {
    getChildren() {
      this.directoriesStore.rootNode.addDir("dir1");
      this.directoriesStore.rootNode.children[0].addDir("dir1-1");
      this.directoriesStore.rootNode.children[0].children[0].addDir("dir1-1-1");
      this.directoriesStore.rootNode.children[0].children[0].addFile("file1-1-2");
    },
  },
};
</script>

<style scoped lang="scss">
@import "colors";

.main-block {
  // border: 2px solid $dark-primary;
  border-radius: 10px;
  background: $light-primary;
  width: 700px;
  height: 500px;
}
</style>
