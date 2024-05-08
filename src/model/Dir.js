import { File } from "./File.js";

export function Dir(name) {
  this.name = name;
  this.children = [];

  this.addDir = function (name) {
    const dir = new Dir(name);
    this.children.push(dir);
  };

  this.addFile = function (name) {
    const file = new File(name);
    this.children.push(file);
  };
}
