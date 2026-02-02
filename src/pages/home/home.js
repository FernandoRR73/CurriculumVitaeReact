//imports
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import addressIcon from "../../assets/address.png";
//app
function Home() {
  return (
    <div className="container">
      <div className="tittle">
      <h1>Fernando Ramírez Rodríguez</h1>
      <h2>Web Application Developer</h2>
      </div>
    <div className="row">
      <div className="col-md-4 order-2 order-md-1">
        <div className="infoContainer">
        <div className="iconContainer">
          <div className="iconBackground"> 
          <img className="icon" src={phoneIcon} alt="phone icon" />
          </div>
          <p className="phone-number">658997353</p>
        </div>
        <div className="iconContainer">
          <div className="iconBackground">
            <img className="icon" src={mailIcon} alt="mail icon" />
          </div>
          <p className="mail-address">fernandoramirezrdgz@gmail.com</p>
        </div>

        <div className="iconContainer">
          <div className="iconBackground">
            <img className="icon" src={addressIcon} alt="address icon" />
          </div>
          <p className="address">Calle Acacias, edf el Parque, Bloque B 1º B. 11540 Sanlucar de Bda Cadiz España</p>
        </div>
        </div>
      <div className="moreInfo">
        <h3 className="subTittle">More Information</h3>
        <p className="subText">Driver License</p>
        <p className="subText">Personal Vehicle</p>
        <p className="subText">Total Disponibility</p>
        <p className="subText">Available for remote work</p>
      </div>
      
      <div className="languages">
        <h3 className="subTittle">Languages</h3>
        <p className="subText">Ingles: C1 AptisESOL</p>
      </div>
      <div className="abilities">
        <h3 className="subTittle">Abilities</h3>
        <ul>
          <li className="subText">Coding:</li>
          <ul>
            <li className="subText">HTML</li>
            <li className="subText">CSS</li>
            <li className="subText">JavaScript</li>
            <li className="subText">java</li>
            <li className="subText">Python</li>
            <li className="subText">php</li>
            <li className="subText">xml</li>
          </ul>
          <li className="subText">Frameworks</li>
          <ul>
            <li className="subText">React</li>
            <li className="subText">Symfony</li>
          </ul>
          <li className="subText">Database Design</li>
          <ul>
            <li className="subText">MySQL</li>
            <li className="subText">LiveQL</li>
            <li className="subText">OracleSQL</li>
          </ul>
          <li className="subText">Version Control: git</li>
          <li className="subText">Containerization: docker</li>
        </ul>
      </div>
    </div>
      <div className="col-md-8 order-1 order-md-2">
        <div className="about">
          <h3 className="subTittle">About me</h3>
          <p className="subText">
            I'm a web application developer with experience in front-end and back-end technologies. I enjoy creating efficient and user-friendly applications that solve real-world problems. My passion for coding drives me to continuously learn and improve my skills in this ever-evolving field.
          </p>
        </div>
        <div className="academics">
          <h3 className="subTittle">Academics</h3>

          <p className="subText aTittle">CFGS Web Application Development -2024-</p>
          <p className="subText">IES Francisco Romero Vargas</p>

          <p className="subText aTittle">Science Bachelor degree </p>
          <p className="subText">IES Juan Sebastian el Cano</p>
        </div>

        <div className="experience">
          <h3 className="subTittle">Experience</h3>

          <p className="subText aTittle">Web Application Developer - 3 months</p>
          <p className="subText">Xerintel internet technologies SL</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;