import {
  EditModeValidation,
  CreateModeValidation,
} from "./ValidationServices.js";
import { CommentService } from "./CommentService.js";
import { Comment } from "./Comment.js";
import { generateComment } from "../Utilities/utilities.js";
import { IComment } from "../Interfaces/interfaces.js";
import { Id } from "../Types/types.js";
import { Constants, FormState } from "../Enums/enums.js";
import { Form } from "./Form.js";

const { EmptyString } = Constants;
const { CreateMode, EditMode } = FormState;

export class App {
  form: Form;
  service: CommentService;
  pickedId: Id;
  comentContainerHtmlElement: HTMLElement;
  newCommentBtnHtmlElement: HTMLButtonElement;

  constructor() {
    this.form = new Form();
    this.service = new CommentService();
    this.pickedId = null;
    this.comentContainerHtmlElement = document.querySelector("#coment-wr");
    this.newCommentBtnHtmlElement = document.querySelector("#new-coment");
  }

  renderComments() {
    this.comentContainerHtmlElement.innerText = EmptyString;
    const comments = this.service.getComments();
    comments.forEach((comment) => {
      generateComment(comment, this.comentContainerHtmlElement, this);
    });
    this.form.reset();
    this.form.hide();
  }

  handleSubmit() {
    const formEntries = this.form.colectData();
    const validationService =
      this.form.formState === EditMode
        ? new EditModeValidation()
        : new CreateModeValidation();
    const newComment = new Comment(formEntries, validationService);

    if (this.form.formState === CreateMode) {
      this.service.addComment(newComment);
      this.renderComments();
      this.form.reset();
      this.form.hide();
    } else {
      this.service.editComment(this.pickedId, newComment);
      this.renderComments();
      this.form.reset();
      this.form.hide();
      this.form.formState = CreateMode;
    }
  }

  updateComentDOM(comment: IComment) {
    this.form.formState = EditMode;
    this.pickedId = comment.id;
    this.form.open();
    this.form.titleInputHtmlElement.value = comment.title;
    this.form.textInputHtmlElement.value = comment.text;
  }

  deleteCommentDOM(comment: IComment) {
    this.service.deleteComment(comment);
    this.renderComments();
  }
}
