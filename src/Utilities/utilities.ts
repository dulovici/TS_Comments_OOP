export function generateComment(comment, container, context) {
  const article = document.createElement("article");
  article.id = "comment";
  const content = document.createElement("div");
  content.classList.add("content");
  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = comment.title;
  const date = document.createElement("p");
  date.id = "date";
  date.textContent = `Created ${comment.createdAt}`;
  const text = document.createElement("p");
  text.id = "text";
  text.textContent = comment.text;
  const buttons = document.createElement("div");
  buttons.classList.add("btns");
  const editBtn = document.createElement("button");
  editBtn.id = "edit-btn";
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    context.updateComentDOM(comment);
  }.bind(comment);
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    context.deleteCommentDOM(this);
  }.bind(comment);

  container.append(article);
  article.append(content);
  content.append(title);
  content.append(date);
  content.append(text);
  article.append(buttons);
  buttons.append(editBtn);
  buttons.append(deleteBtn);
}
