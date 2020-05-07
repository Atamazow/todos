import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {
  items = [
    { id: 1, title: "Сделать пять отжиманий", completed: false, category: "личные дела", important: false },
    { id: 2, title: "Купить новый форд мондео 2019 года", completed: false, category: "личные дела", important: false },
    { id: 3, title: "Купить фотоаппарат до свадьбы", completed: false, category: "Покупки", important: false },
    { id: 4, title: "Встретиться той самой", completed: false, category: "Покупки", important: false },
    { id: 5, title: "Прочитать 52 книги до конца года", completed: false, category: "Чтение", important: false }
  ];
  selectedCategory = null;

  onlyImportant = false;
  toggleOnlyImportant() {
    this.onlyImportant = !this.onlyImportant
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

  getCatecories() {
    const categories = [];

    this.items.forEach(item => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category)
      }
    })
    return categories;
  }
  getItems() {
    let items;
    if (this.onlyImportant) {
      items = this.items.filter(item => item.important);
    }
    else {
      items = this.items;
    }
    if (this.selectedCategory !== null) {
      return this.items.filter(item => item.category === this.selectedCategory);
    }

    return items
  }
  remove() {
    this.items = this.items.filter(item => {
      if (item.completed === true) {
        return false
      }
      return true;
    }
    )
  }
  toggleImportant(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item, important: !item.important
        };
      }
      return item;
    });
  }
  toggleCompleted(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    });

  }

  constructor() { }
}
