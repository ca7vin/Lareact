import React from "react";
import { useNavigate } from "react-router-dom";

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
    this.setState({ [event.target.name]: event.target.value });
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
        publisher: publisher,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
          this.props.addBook(result.book)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
    this.props.navigate("/");
  }

  render() {
    return (
      <form className="form d-flex flex-column w-75 mx-auto" onSubmit={this.handleSubmit}>
        <label className="form-label">
          Title:
          <input
            className="form-control"
            type="text"
            name="title"
            value={this.state.title}
            onInput={this.handleChange}
          />
        </label>
        <label className="form-label">
          Author:
          <input
            className="form-control"
            type="text"
            name="author"
            value={this.state.author}
            onInput={this.handleChange}
          />
        </label>
        <label className="form-label">
          Publisher:
          <input
            className="form-control"
            type="text"
            name="publisher"
            value={this.state.publisher}
            onInput={this.handleChange}
          />
        </label>
        <input className="btn btn-primary w-50 mx-auto" type="submit" value="Submit" />
      </form>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <CreateBook {...props} navigate={navigate} />;
}

export default WithNavigate;
