import React from 'react';

type Props = {
  scrollDirection: "up" | "down";
}


const Footer: React.FC<Props> = ({ scrollDirection }) => {
  return (
    <footer className="blog-footer">
      <div className="container">
        <p>&copy; 2026 tannakaken; {scrollDirection == "down" ? "All rights reserved." : "All wrongs reversed."}</p>
        <p className="disclaimer">{scrollDirection == "down" ? "※このサイトは個人の主観です。公式情報ではありません。" : "※このサイトはフィクションです。実在の観光案内所とは関係ありません。"}</p>
      </div>
    </footer>
  );
};

export default Footer;
