import React from "react";
import axios from "axios";

import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";

const App = (props) => {
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      window.store.dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={props.items} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.pizzas.filters,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
