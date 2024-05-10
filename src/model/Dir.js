import { File } from "./File.js";

export function Dir(name) {
  this.name = name;
  this.children = [];
  this.isRoot = false;
  this.type = 'dir';

  this.addDir = function (name) {
    const dir = new Dir(name);
    this.children.push(dir);
    return dir;
  };

  this.addFile = function (name) {
    const file = new File(name);
    this.children.push(file);
    return file;
  };
}
