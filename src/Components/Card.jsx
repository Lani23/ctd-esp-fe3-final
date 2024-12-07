import { Link } from "react-router-dom";
import { useCharStates } from "../Components/utils/global.context";

const Card = ({ char, theme }) => {
  const {
    dispatch,
    state: { favs },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char?.id);

  const addFav = () => {
    if (!char?.id) return;
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className={`card ${theme}`}>
      {char?.id ? (
        <>
          <Link to={`/detail/${char.id}`}>
            <img src="/images/doctor.jpg" alt={`Imagen de ${char.name}`} />
            <h3>{char.name}</h3>
          </Link>
          <button onClick={addFav} className="fav-button">
            {findFav ? "🌟 Quitar de Favoritos" : "⭐ Agregar a Favoritos"}
          </button>
          <Link to={`/detail/${char.id}`} className="detail-link">
            Ver Detalle
          </Link>
        </>
      ) : (
        <>
          <h3>Hola, {char?.name}!</h3>
          {char?.email && (
            <p>
              Te responderemos a tu correo electrónico lo antes posible. Tu
              dirección de contacto es: {char.email}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
