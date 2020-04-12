import {Component} from '@angular/core';

const todos = [
  {
    id: 1,
    title: '吃饭',
    done: true
  },
  {
    id: 2,
    title: '唱歌',
    done: false
  },
  {
    id: 3,
    title: '写代码',
    done: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = todos;

  addTodo(e): void {
    console.log(e.keyCode);
    const titleText = e.target.value;
    if (!titleText.length) {
      return;
    }

    const last = this.todos[todos.length - 1];
    this.todos.push({
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false
    });
    e.target.value = '';
  }

  set toggleAll(val) {
    this.todos.forEach(t => t.done = val);
  }

  get toggleAll() {

    // console.log(this.todos.every(t => t.done));
    return this.todos.every(t => t.done);
  }

  remodeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
