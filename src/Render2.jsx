export function Render2() {
  const isLogging = false;
  const usuario = 'usuario';

  if (isLogging) {
    return <div style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Cargando perfil...</div>;
  }

  if (!usuario) {
    return <div style={{ color: 'red' }}>⚠️ No existe usuario</div>;
  }

  return (
    <div>
      <h2>Render 2</h2>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        ¡Bienvenido de vuelta, {usuario}!
      </p>
    </div>
  );
}
