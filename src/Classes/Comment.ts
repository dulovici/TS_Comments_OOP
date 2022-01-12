import {
  IComment,
  ICommentData,
  IValidationService,
} from "../Interfaces/interfaces";

let counter = 0;

export class Comment implements IComment {
  title: string;
  text: string;
  id: number;
  createdAt: number;
  updatedAt: number;

  constructor(data: ICommentData, validationService: IValidationService) {
    validationService.checkTitle(data.title);
    validationService.checkText(data.text);

    this.text = data.text;
    this.title = data.title;
    this.id = ++counter;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }

  update() {
    this.updatedAt = Date.now();
  }
}
