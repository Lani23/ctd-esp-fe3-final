import { useCharStates } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const {
    state: { favs },
    theme,
  } = useCharStates();

  return (
    <div className={`card-grid ${theme}`}>
      {favs.map((char) => (
        <Card key={char.id} char={char} theme={theme} />
      ))}
    </div>
  );
};

export default Favs;
