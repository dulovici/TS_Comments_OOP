export interface IComment {
  title: string;
  text: string;
  id: number;
  createdAt: number;
  updatedAt: number;
}

export interface ICommentData {
  title: string;
  text: string;
}

export interface IValidationService {
  checkTitle(title: string): boolean;
  checkText(title: string): boolean;
}
