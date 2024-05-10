import { File } from "./File.js";

export class Dir {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
    this.isRoot = false;
    this.type = "dir";
  }

  addDir(name) {
    const dir = new Dir(name);
    this.children.push(dir);
    dir.parent = this;
    dir.id = this.id * 10 + this.children.length;
    return dir;
  };

  addFile(name) {
    const file = new File(name);
    this.children.push(file);
    file.parent = this;
    file.id = this.id * 10 + this.children.length;
    return file;
  };
}