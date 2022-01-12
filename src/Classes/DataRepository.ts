import { IComment } from "../Interfaces/interfaces";

export class DataRepository {
  data: IComment[];

  constructor() {
    this.data = [];
  }

  add(entry: IComment) {
    this.data.push(entry);
  }
  delete(entry: IComment) {
    const filteredData = this.data.filter((cmnt) => cmnt !== entry);
    this.data = filteredData;
  }
  edit(id: number, editedItem: IComment) {
    const filteredData = this.data.filter((cmnt) => cmnt.id !== id);
    this.data = filteredData;
    this.data.push(editedItem);
  }
  getAll() {
    return this.data;
  }
  getById(id: number) {
    return this.data.find((entry) => entry.id === id);
  }
}
