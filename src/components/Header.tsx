import React from 'react';

type Props = {
  scrollDirection: "up" | "down";
}

const Header: React.FC<Props> = ({ scrollDirection }) => {
  return (
    <header className="blog-header">
      <div className="container">
        <h1>{scrollDirection === "down" ? "Nagoya Discovery" : "Nagoya Undiscovery"}</h1>
        <p className="subtitle">{scrollDirection === "down" ? "知られざる名古屋の魅力を再発見するブログ" : "名古屋とは何なのかを再忘却するためのブログ"}</p>
      </div>
    </header>
  );
};

export default Header;
