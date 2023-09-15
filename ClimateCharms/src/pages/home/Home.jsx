import './Home.css';
import WeatherApp from '../../components/weatherApp/WeatherApp.jsx';
import logo from '../../assets/logo.png';

function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <img src={logo} className="Logo" alt="Climate Charms Logo" />
      </header>

      <section className="Introduction">
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos Climate Charms, una pequeña empresa de venta de pulseras que combina la moda y la naturaleza. Nuestro objetivo es que nuestros clientes conecten con la naturaleza a través de nuestras pulseras inspiradas en el clima.
        </p>
        <p>
          Creemos en la belleza de la naturaleza y su influencia en nuestras vidas. Cada pulsera que ofrecemos es una oportunidad para llevar un pedacito de la naturaleza en tu muñeca.
        </p>
      </section>
      <section className="AboutUs">
        <h2>Sobre Nosotros</h2>
        <p>
          En Climate Charms, nuestra misión es crear pulseras únicas que te conecten con el clima y la naturaleza. Nuestras pulseras son diseñadas con amor y pasión por la naturaleza, y cada una de ellas cuenta una historia especial.
        </p>
      </section>

      <section className="CTA">
        <h2>Explora Nuestros Productos</h2>
        <p>Descubre nuestras pulseras únicas inspiradas en el clima.</p>
        <a href="/Shop" className="Button">Ver Productos</a>
      </section>

      <section className="WeatherSection">
        <h2>¿Cómo está el clima?</h2>
        <WeatherApp />
      </section>

      <footer className="Footer">
        <p>&copy; Climate Charms</p>
      </footer>
    </div>
  );
}

export default Home;
