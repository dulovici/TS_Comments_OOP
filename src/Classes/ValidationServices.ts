import { IValidationService } from "../Interfaces/interfaces.js";
import { Constants } from "../Enums/enums.js";

const { EmptyString } = Constants;

export class EditModeValidation implements IValidationService {
  checkTitle(title: string): boolean {
    if (title === EmptyString) {
      alert("All fields need to be filled.");
      throw new Error("All fields need to be filled.");
    }
    if (title.length < 5) {
      alert("Title is to short.");
      throw new Error("Title is to short.");
    }
    return true;
  }
  checkText(text: string): boolean {
    if (text === EmptyString) {
      alert("All fields need to be filled.");
      throw new Error("All fields need to be filled.");
    }
    if (text.length < 10) {
      alert("Text is to short.");
      throw new Error("Text is to short.");
    }
    return true;
  }
}

export class CreateModeValidation implements IValidationService {
  checkTitle(title: string): boolean {
    if (title === EmptyString) {
      alert("All fields need to be filled.");
      throw new Error("All fields need to be filled.");
    }
    if (title.length < 3) {
      alert("Title is to short.");
      throw new Error("Title is to short.");
    }
    return true;
  }
  checkText(text: string): boolean {
    if (text === EmptyString) {
      alert("All fields need to be filled.");
      throw new Error("All fields need to be filled.");
    }
    if (text.length < 6) {
      alert("Text is to short.");
      throw new Error("Text is to short.");
    }
    return true;
  }
}
