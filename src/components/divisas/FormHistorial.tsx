export function HistorialTipoCambioMockup() {
  return (
    <div className="min-h-screen bg-background p-10 font-[Especial]">
      <div className="bg-surface border border-border rounded-xl shadow-sm">
        <div className="bg-primary-600 text-white px-6 py-4 rounded-t-xl">
          Historial de Tipo de Cambio
        </div>

        <table className="w-full text-sm">
          <thead className="bg-surface-muted text-text-secondary">
            <tr>
              <th className="text-left p-4">Año Fiscal</th>
              <th className="text-left p-4">Tipo de Cambio</th>
              <th className="text-left p-4">Origen</th>
              <th className="text-left p-4">Fecha Registro</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">2023</td>
              <td className="p-4">17.10</td>
              <td className="p-4 text-gray-500">Registro previo</td>
              <td className="p-4">01/01/2023</td>
            </tr>

            <tr className="border-t">
              <td className="p-4">2024</td>
              <td className="p-4">17.25</td>
              <td className="p-4 text-gray-500">Tipo de cambio global</td>
              <td className="p-4">01/01/2024</td>
            </tr>

            <tr className="border-t bg-purple-50">
              <td className="p-4 font-medium">2025</td>
              <td className="p-4">18.10</td>
              <td className="p-4 text-primary-600">Generado automáticamente</td>
              <td className="p-4">15/03/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
