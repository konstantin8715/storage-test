import { defineStore } from "pinia";
import { Dir } from "../model/Dir.js";

export const useDirectoriesStore = defineStore("useDirectoriesStore", {
  state: () => ({
    rootNode: new Dir(""),
  }),

  getters: {},

  actions: {
    init() {
      this.rootNode.id = 1;
      const dir1 = this.rootNode.addDir("Dir 1");
      const dir11 = dir1.addDir("Dir 1-1");
      const file111 = dir11.addFile("File 1-1-1");
      const file12 = dir1.addFile("File 1-2");
      const dir2 = this.rootNode.addDir("Dir 2");
      const dir21 = dir2.addDir("Dir 2-1");
      const file22 = dir2.addFile("File 2-2");
      const file2 = this.rootNode.addFile("File 2");
      this.rootNode.isRoot = true;
    },
  },
});