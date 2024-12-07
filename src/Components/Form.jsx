import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Form = ({ theme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const validarCorreo = (correo) => {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      usuario.nombre.trim() !== "" &&
      usuario.nombre.length > 2 &&
      usuario.apellido.length > 5 &&
      validarCorreo(usuario.email)
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {mostrar ? (
        <Card char={{ name: usuario.nombre, email: usuario.email }} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={usuario.nombre}
                onChange={(event) =>
                  setUsuario({ ...usuario, nombre: event.target.value })
                }
              />
            </div>
            <div>
              <label>Apellido:</label>
              <input
                type="text"
                value={usuario.apellido}
                onChange={(event) =>
                  setUsuario({ ...usuario, apellido: event.target.value })
                }
              />
            </div>
          </div>
          <div className="center-form">
            <label>Email:</label>
            <input
              type="email"
              value={usuario.email}
              onChange={(event) =>
                setUsuario({ ...usuario, email: event.target.value })
              }
            />
          </div>
          <div className="center-form">
            <button type="submit">Enviar</button>
          </div>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta y que el email
              sea válido.
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
