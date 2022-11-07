import React from "react";

class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publisher: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const { title, author, publisher } = this.state;
    fetch("http://127.0.0.1:8000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        publisher: publisher
      })
    }
    )
    .then(res => res.json())
    .then(
        (result) =>{
            this.setState({
                isLoaded: true,
            });
            console.log(result);
        }
    )
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} onInput={this.handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={this.state.author} onInput={this.handleChange} />
        </label>
        <label>
          Publisher:
          <input type="text" name="publisher" value={this.state.publisher} onInput={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateBook;
