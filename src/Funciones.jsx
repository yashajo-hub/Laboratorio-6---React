export const Funciones = () => {
  const frutas = ["manzana", "pera", "sandia"];

  return (
    <div style={{ textAlign: 'left', display: 'inline-block' }}>
      <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', textAlign: 'center' }}>
        Lista de Frutas
      </h2>
      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {frutas.map((fruta, index) => {
          return <li key={index}>Fruta: {fruta}</li>;
        })}
      </ul>
    </div>
  );
};
