import { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import Products from "./Products";

const Navigation = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  };
  return (
    <div>
      <nav className="container">
        <div className="all">
          <div className="logo">
            Foo<Span>dy Zo</Span>ne
          </div>

          <form className="input_1" onSubmit={submithandler}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food..."
              value={search}
            />
            <input className="t1" type="submit" />
            <h5>Search Egg,Chicken..</h5>
          </form>
        </div>
      </nav>
      {data.length >= 1 ? <Products data={data} /> : null}
    </div>
  );
};
export default Navigation;

const Span = styled.span`
  color: #ef5e5e;
  letter-spacing: 3px;
`;

const Buttonss = styled.button`
  display: flex;
  gap: 11px;
  width: 306px;
  align-items: center;
  background: none;
  border: none;
  button:hover {
    background: #3b3838;
    cursor: pointer;
    border: 1px solid #958888;
  }
`;
