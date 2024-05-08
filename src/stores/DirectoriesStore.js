import { defineStore } from "pinia";
import { Dir } from "../model/Dir.js";

export const useDirectoriesStore = defineStore("useDirectoriesStore", {
  state: () => ({
    rootNode: new Dir(''),
  }),

  getters: {
  },

  actions: {
  },
});

/*
const rootDir = {
    type: dir,
    children: [
        {
            type: dir,
            label: 'dir1',
            children: [
                {
                    type: dir,
                    label: 'dir1-1',
                    children: [],
                },
                {
                    label: 'dir1-2',
                    children: [],
                },
                {
                    label: 'file1-3',
                },
            ]
        },

        {
            label: 'dir2',
            children: [
                {
                    label: 'dir2-1',
                },
                {
                    label: 'dir2-2',
                },
                {
                    label: 'file2-3',
                },
            ]
        }
    ]
}
*/
