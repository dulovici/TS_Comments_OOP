import { ICommentData } from "../Interfaces/interfaces.js";
import { Constants, FormState } from "../Enums/enums.js";

const { EmptyString } = Constants;
const { CreateMode, EditMode } = FormState;

export class Form {
  formState: FormState;
  formHtmlElement: HTMLElement;
  titleInputHtmlElement: HTMLInputElement;
  textInputHtmlElement: HTMLInputElement;
  submitBtnHtmlElement: HTMLButtonElement;
  actionHtmlElement: HTMLElement;
  constructor() {
    this.formState = CreateMode;
    this.formHtmlElement = document.querySelector("#form");
    this.titleInputHtmlElement = document.querySelector("#title");
    this.textInputHtmlElement = document.querySelector("#text");
    this.submitBtnHtmlElement = document.querySelector("#submit-btn");
    this.actionHtmlElement = document.querySelector("#action");
  }

  colectData(): ICommentData {
    return {
      title: this.titleInputHtmlElement.value,
      text: this.textInputHtmlElement.value,
    };
  }

  reset(): void {
    this.titleInputHtmlElement.value = EmptyString;
    this.textInputHtmlElement.value = EmptyString;
  }

  open(): void {
    this.actionHtmlElement.textContent =
      this.formState === EditMode ? "Edit comment" : "Add comment";
    this.formHtmlElement.classList.add("show");
  }

  hide(): void {
    this.formHtmlElement.classList.remove("show");
  }
}
