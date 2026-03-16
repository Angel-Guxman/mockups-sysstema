import { useState } from "react";

export function RecalculoInsumosModal() {
  const [metros] = useState(120);
  const [nuevoMetros, setNuevoMetros] = useState(180);

  const insumos = [
    {
      articulo: "Cemento Gris",
      rendimiento: 2.5,
      unidad: "bultos/m²",
    },
    {
      articulo: "Arena",
      rendimiento: 0.05,
      unidad: "m³/m²",
    },
    {
      articulo: "Grava",
      rendimiento: 0.08,
      unidad: "m³/m²",
    },
    {
      articulo: "Agua",
      rendimiento: 15,
      unidad: "L/m²",
    },
  ];

  return (
    <div className="fixed inset-0  font-[Especial] flex items-center justify-center bg-black/40">
      <div className="bg-white w-225 rounded-xl shadow-xl">
        {/* HEADER */}

        <div className="bg-primary-600 text-white p-5 rounded-t-xl flex justify-between">
          <h2 className="text-xl font-semibold">
            Recálculo dinámico de insumos
          </h2>
          <button className="text-white text-xl">✕</button>
        </div>

        {/* CONTENT */}

        <div className="p-6 space-y-6">
          {/* DIMENSIONES */}

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500">Metros actuales</label>
              <input
                value={metros}
                disabled
                className="w-full border border-gray-200 rounded-lg p-2 bg-gray-50"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Nuevos metros²</label>
              <input
                value={nuevoMetros}
                onChange={(e) => setNuevoMetros(parseInt(e.target.value))}
                className="w-full border border-gray-200 rounded-lg p-2"
              />
            </div>
          </div>

          {/* TABLA INSUMOS */}

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-3 text-left">Artículo</th>
                  <th className="p-3 text-left">Rendimiento</th>
                  <th className="p-3 text-left">Cantidad Actual</th>
                  <th className="p-3 text-left">Nueva Cantidad</th>
                </tr>
              </thead>

              <tbody>
                {insumos.map((i, index) => {
                  const actual = i.rendimiento * metros;
                  const nuevo = i.rendimiento * nuevoMetros;

                  return (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-3">{i.articulo}</td>

                      <td className="p-3">
                        {i.rendimiento} {i.unidad}
                      </td>

                      <td className="p-3">{actual}</td>

                      <td className="p-3 font-semibold text-primary">
                        {nuevo}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* BOTONES */}

          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 border rounded-lg">Cancelar</button>

            <button className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg">
              Recalcular insumos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
