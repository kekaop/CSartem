import "./Header.css";
import HeaderLink from "./HeaderLink/HeaderLink";

export default function Header() {
  const datas = [
    {
      text: "На основной сайт",
      link: "https://symmetry-cs2.ru",
      icon: "arrow_back",
    },
  ];

  return (
    <header>
      <div className="logo">
        <img src="/logo.ico" width="36px" height="36px" />
        <span>SYMMETRY CS2</span>
      </div>
      <ul className="header-items">
        {datas.map((data) => (
          <HeaderLink key={data.text} {...data} />
        ))}
      </ul>
      <div className="auth-items"></div>
    </header>
  );
}
//SSFSEFSEF
