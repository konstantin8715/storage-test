<template>
  <div class="node-block mt-2">
    <template v-if="!node.isRoot">
      <div class="node-line d-flex">
        <!-- open button -->
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

        <!-- node name + node icon -->
        <template v-if="node.type == 'dir'">
          <div @contextmenu.prevent="showContextMenu($event, true)">
            <v-icon icon="mdi-folder" />
            <input
              :disabled="!isRenaming"
              @focusout="isRenaming = false"
              class="ml-1"
              v-model="node.name"
            />
          </div>
        </template>
        <template v-else>
          <div @contextmenu.prevent="showContextMenu($event, false)">
            <v-icon icon="mdi-file" />
            <input
              :disabled="!isRenaming"
              @focusout="isRenaming = false"
              v-model="node.name"
            />
          </div>
        </template>

        <!-- node menu -->
        <context-menu
          v-if="isContextMenuVisible"
          :style="{
            top: contextMenuTop + 'px',
            left: contextMenuLeft + 'px',
          }"
          :isDir="isDir"
          @createDir="createDir"
          @createFile="createFile"
          @rename="rename"
          @deleteNode="deleteNode"
        />
      </div>

      <!-- subnodes -->
      <div v-if="isChildrenOpen" class="children-node-block ml-2">
        <node
          v-if="node.children?.length > 0"
          v-for="child in node.children"
          :key="node.id"
          :node="child"
        />
        <div v-else class="ml-2">directory is empty</div>
      </div>
    </template>

    <!-- root node subnodes -->
    <template v-else>
      <div class="ml-2">
        <node v-for="child in node.children" :key="node.id" :node="child" />
      </div>
    </template>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";

export default {
  name: "node",
  components: { ContextMenu },
  data() {
    return {
      isChildrenOpen: false,
      isDir: false,
      isContextMenuVisible: false,
      isRenaming: false,
      contextMenuTop: 0,
      contextMentLeft: 0,
    };
  },

  props: {
    node: {
      type: Object,
      requiered: true,
    },
  },

  created() {
    document.addEventListener(
      "click",
      () => (this.isContextMenuVisible = false)
    );
  },

  methods: {
    showContextMenu(event, isDir) {
      this.isContextMenuVisible = true;
      this.contextMenuTop = event.clientY;
      this.contextMenuLeft = event.clientX + 10;
      this.isDir = isDir;
    },

    createFile() {
      this.node.addFile("new file");
    },

    createDir() {
      this.node.addDir("new dir");
    },

    rename() {
      this.isRenaming = true;
    },

    deleteNode() {
      this.node.parent.children = this.node.parent.children.filter(
        (c) => c.id != this.node.id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.node-block {
  width: 100%;
  color: black;
}

.children-node-block {
  border-left: solid black;
}
</style>
