import { useParams } from "react-router-dom";
import { useCharStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const {
    state: { chars },
  } = useCharStates();

  const char = chars.find((item) => item.id === parseInt(id));

  if (!char) return <p>🔍 Dentista no encontrado</p>;

  return (
    <div className="detail-container">
      <img src="/images/doctor.jpg" alt={`Dr. ${char.name}`} />
      <h2>Dr. {char.name}</h2>
      <div className="detail-info">
        <p>
          <strong>Username:</strong> {char.username}
        </p>
        <p>
          <strong>Email:</strong> {char.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {char.phone}
        </p>
        <p>
          <strong>Dirección:</strong> {char.address?.city},{" "}
          {char.address?.street}
        </p>
        <p>
          <strong>Empresa:</strong> {char.company?.name}
        </p>
      </div>

      <Link to="/" className="back-link">
        Regresar
      </Link>
    </div>
  );
};

export default Detail;
