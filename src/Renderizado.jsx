export function Renderizado() {
  // Simulamos los datos necesarios para que el componente no arroje error
  const isLogged = true; 
  const nuevosMensajes = ['Mensaje 1', 'Mensaje 2']; 

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h2>Panel de Usuario</h2>

      {/* Operador ternario */}
      <div style={{ margin: '15px 0' }}>
        {isLogged ? (
          <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Cerrar sesión</button>
        ) : (
          <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Iniciar sesión</button>
        )}
      </div>

      {/* Operador lógico AND (&&) */}
      <div style={{ marginTop: '15px' }}>
        {nuevosMensajes.length > 0 && (
          <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
            ✉️ Tienes {nuevosMensajes.length} nuevos mensajes
          </p>
        )}
      </div>
    </div>
  );
}