const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toISOString().slice(0, 10)
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate == new Date().toISOString().slice(0, 10)
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toISOString().slice(0, 10)
    );
  };

  const toDisplayableList = (list) => {
    let text = "";
    list.forEach((item) => {
      if (item.completed == true) {
        item.check = "[x]";
      }
      if (item.completed == false) {
        item.check = "[ ]";
      }
      if (item.dueDate == new Date().toISOString().slice(0, 10)) {
        text += `${item.check} ${item.title}\n`;
      } else {
        text += `${item.check} ${item.title} ${item.dueDate}\n`;
      }
    });
    return text.slice(0, text.length - 1);
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
