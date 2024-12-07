import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

const Home = () => {
  const {
    state: { chars, theme },
  } = useCharStates();

  return (
    <div className="card-grid">
      {chars && chars.length > 0 ? (
        chars.map((char) => <Card key={char.id} char={char} theme={theme} />)
      ) : (
        <p>No hay dentistas disponibles</p>
      )}
    </div>
  );
};

export default Home;
