<template>
  <div class="d-flex justify-center align-center h-100">
    <div class="main-block d-flex justify-center align-center">
      <div class="content-block">
        <node :node="directoriesStore.rootNode" />
      </div>
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
  border-radius: 5px;
  background: white;
  opacity: 0.3;
  width: 450px;
  height: 250px;
  overflow-y: auto;
  overflow-x: auto;
}

.content-block {
  width: 90%;
  height: 90%;
}
</style>
