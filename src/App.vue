<template>
  <div class="d-flex justify-center align-center flex-column h-100">
    <div>Чтобы сделать действие с папкой/файлом, нажмите на него правой кнопокой мыши</div>
    <div class="main-block d-flex justify-center align-center mt-4">
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

  created() {
    this.directoriesStore.init();
  },
};
</script>

<style scoped lang="scss">
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
