import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import FoodDetail from "./MovieDetail";
import API from "../utils/API";

class FoodContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for Apple"
  componentDidMount() {
    this.searchFoods("Apple");
  }

  searchFoods = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Edamam API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchFoods(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Food || "Search for a Food to Begin"}
            >
              {this.state.result.Food ? (
                <FoodDetail
                  food={this.state.result.Food}
                  dairy={this.state.result.Dairy}
                  vegetarian={this.state.result.Vegetarian}
                  
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FoodContainer;