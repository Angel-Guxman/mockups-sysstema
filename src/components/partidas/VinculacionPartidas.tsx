export function VinculacionPartidasMockup() {
  return (
    <div className="min-h-screen bg-background p-10 font-[Especial]">
      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-text-primary">
          Vinculación de Partidas con Componentes de Obra
        </h1>

        <p className="text-text-secondary text-sm">
          Asociación de métodos de manufactura con componentes del proyecto
        </p>
      </div>

      {/* FORMULARIO */}

      <div className="bg-surface border border-border rounded-xl shadow-sm mb-8">
        <div className="bg-primary-600 text-white px-6 py-4 rounded-t-xl">
          Vincular partida
        </div>

        <div className="p-6 grid grid-cols-3 gap-6">
          {/* COMPONENTE */}

          <div>
            <label className="text-sm text-text-secondary mb-1 block">
              Componente de obra
            </label>

            <select className="w-full border border-border rounded-lg px-3 py-2 bg-white">
              <option>Cimentación</option>
              <option>Estructura</option>
              <option>Acabados</option>
            </select>
          </div>

          {/* PARTIDA */}

          <div>
            <label className="text-sm text-text-secondary mb-1 block">
              Partida
            </label>

            <select className="w-full border border-border rounded-lg px-3 py-2 bg-white">
              <option>002-AZULEJO-2024</option>
              <option>001-LOSA-2024</option>
            </select>
          </div>

          {/* VALIDACION */}

          <div>
            <label className="text-sm text-text-secondary mb-1 block">
              Validación de artículos
            </label>

            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm">
              <span className="text-green-600 font-medium">
                ✔ 3 artículos encontrados
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2 rounded-lg text-sm">
            Vincular partida al componente
          </button>
        </div>
      </div>

      {/* TABLA DE PARTIDAS VINCULADAS */}

      <div className="bg-surface border border-border rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-semibold text-text-primary">
            Partidas vinculadas al proyecto
          </h2>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-surface-muted text-text-secondary">
            <tr>
              <th className="text-left p-4">Componente</th>
              <th className="text-left p-4">Código</th>
              <th className="text-left p-4">Descripción</th>
              <th className="text-left p-4">Artículos</th>
              <th className="text-left p-4">Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-surface-muted">
              <td className="p-4">Cimentación</td>
              <td className="p-4 font-medium">001-LOSA-2024</td>
              <td className="p-4">Colado de losa de concreto</td>
              <td className="p-4">4</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  Vinculada
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-surface-muted">
              <td className="p-4">Acabados</td>
              <td className="p-4 font-medium">002-AZULEJO-2024</td>
              <td className="p-4">Instalación de loseta cerámica</td>
              <td className="p-4">3</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  Vinculada
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
