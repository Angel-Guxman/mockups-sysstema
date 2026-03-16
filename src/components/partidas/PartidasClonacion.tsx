export default function ClonacionPartidasMockup() {
  return (
    <div className="min-h-screen bg-[#F6F7FB] p-10">
      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#2A2A2A]">
          Métodos de Manufactura
        </h1>

        <p className="text-gray-500 text-sm">
          Gestión de partidas y artículos asociados
        </p>
      </div>

      {/* CARD */}

      <div className="bg-white rounded-xl shadow-md border border-[#E6E8F0] overflow-hidden">
        {/* TABLE HEADER */}

        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-semibold text-gray-700">Listado de Partidas</h2>

          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7A005D]">
            Nueva Partida
          </button>
        </div>

        {/* TABLE */}

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-4">Código</th>
              <th className="text-left p-4">Descripción</th>
              <th className="text-left p-4">Artículos</th>
              <th className="text-left p-4">Proveedores</th>
              <th className="text-left p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium">001-LOSA-2024</td>
              <td className="p-4">Colado de losa de concreto</td>
              <td className="p-4">4 artículos</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  2 aprobados
                </span>
              </td>
              <td className="p-4">
                <button className="bg-[#9C0275] text-white px-3 py-1 rounded-md text-xs">
                  Clonar
                </button>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium">002-AZULEJO-2024</td>
              <td className="p-4">Instalación de loseta cerámica</td>
              <td className="p-4">3 artículos</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  1 aprobado
                </span>
              </td>
              <td className="p-4">
                <button className="bg-[#9C0275] text-white px-3 py-1 rounded-md text-xs">
                  Clonar
                </button>
              </td>
            </tr>

            {/* PARTIDA CLONADA */}

            <tr className="border-t bg-purple-50">
              <td className="p-4 font-medium">003-AZULEJO-2024</td>
              <td className="p-4 text-purple-700">
                Instalación de loseta cerámica (Clon)
              </td>
              <td className="p-4">3 artículos</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  1 aprobado
                </span>
              </td>
              <td className="p-4 text-sm text-gray-400">
                Generada automáticamente
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MODAL MOCKUP */}

      <div className="fixed inset-0 flex items-center justify-center bg-black/40">
        <div className="w-[420px] bg-white rounded-xl shadow-xl">
          {/* HEADER */}

          <div className="bg-primary-600 text-white p-4 rounded-t-xl">
            <h2 className="font-semibold">Confirmar clonación de partida</h2>
          </div>

          {/* BODY */}

          <div className="p-6">
            <p className="text-gray-600 text-sm mb-4">
              Se creará una nueva partida con los mismos artículos, rendimientos
              y proveedores aprobados.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p>
                <b>Código original:</b> 002-AZULEJO-2024
              </p>

              <p>
                <b>Descripción:</b> Instalación de loseta cerámica
              </p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm">
                Cancelar
              </button>

              <button className="bg-[#9C0275] text-white px-4 py-2 rounded-lg text-sm">
                Clonar partida
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
