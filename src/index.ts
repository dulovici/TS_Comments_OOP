import { App } from "./Classes/App.js";

window.onload = function () {
  const app = new App();

  app.newCommentBtnHtmlElement.addEventListener(
    "click",
    app.form.open.bind(app.form)
  );
  app.form.submitBtnHtmlElement.addEventListener(
    "click",
    app.handleSubmit.bind(app)
  );
};
