const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  test("Should add new todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    add({
      title: "Overdue task",
      completed: false,
      dueDate: "2023-07-21",
    });

    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].dueDate).toBe("2023-07-21");
  });

  test("Should retrieve today's items", () => {
    const today = new Date().toISOString().slice(0, 10);
    add({
      title: "Today's task",
      completed: false,
      dueDate: today,
    });

    const todayItems = dueToday();
    expect(todayItems.length).toBe(2);
    expect(todayItems[0].dueDate).toBe(today);
  });

  test("Should retrieve due later items", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    add({
      title: "Future task",
      completed: false,
      dueDate: futureDate.toISOString().slice(0, 10),
    });

    const laterItems = dueLater();
    expect(laterItems.length).toBe(1);
    expect(laterItems[0].dueDate).toBe(futureDate.toISOString().slice(0, 10));
  });
});
