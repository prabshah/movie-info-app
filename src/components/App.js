import React from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import MovieList from "./MovieList";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <SearchForm />
      <MovieList />
    </div>
  );
}
