import { DataRepository } from "./DataRepository.js";
import { IComment } from "../Interfaces/interfaces.js";

export class CommentService {
  repository: DataRepository;

  constructor() {
    this.repository = new DataRepository();
  }

  getComments() {
    return this.repository.getAll();
  }

  addComment(comment: IComment) {
    this.repository.add(comment);
  }

  deleteComment(comment: IComment) {
    this.repository.delete(comment);
  }

  editComment(id: number, editedItem: IComment) {
    this.repository.edit(id, editedItem);
  }
}
