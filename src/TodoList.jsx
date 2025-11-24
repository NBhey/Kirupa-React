import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now(),
      });

      this.setState({
        items: itemArray
      })

      this._inputElement.value = '';
    }

    console.log(itemArray)

    e.preventDefault()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={(e)=>{this.addItem(e)}}>
            <input
              ref={(a) => {
                this._inputElement = a;
              }}
              placeholder="Введите задачу"
            />
            <button type="submit"> ok </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
