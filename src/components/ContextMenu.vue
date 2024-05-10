<template>
  <div class="context-menu">
    <div
      v-if="isDir"
      @click="$emit('createDir')"
      class="context-menu-item cursor-pointer"
    >
      Создать папку
    </div>
    <div
      v-if="isDir"
      @click="$emit('createFile')"
      class="context-menu-item cursor-pointer"
    >
      Создать файл
    </div>
    <div @click="$emit('rename')" class="context-menu-item cursor-pointer">
      Переименовать
    </div>
    <div @click="$emit('deleteNode')" class="cursor-pointer">Удалить</div>
  </div>
</template>

<script>
export default {
  name: "context-menu",

  props: {
    isDir: {
      type: Boolean,
      requiered: true,
    },
  },

  emits: ["createDir", "createFile", "rename", "deleteNode"],
};
</script>

<style scoped lang="scss">
.context-menu {
  position: fixed;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
}

.context-menu-item {
  border-bottom: 1px solid black;
}
</style>
