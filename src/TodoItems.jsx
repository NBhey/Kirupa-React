import { Component, createRef } from "react";
import autoAnimate from "@formkit/auto-animate";
class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.listRef = createRef();

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    if (this.listRef.current) {
      autoAnimate(this.listRef.current, {
        duration: 250,
        easing: "ease-out",
      });
    }
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList" ref={this.listRef}>
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;
