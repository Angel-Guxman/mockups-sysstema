export function DiscrepanciaDivisasMockup() {
  return (
    <div className="min-h-screen bg-background p-10 font-[Especial]">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-text-primary">
          Cotización de Proyecto
        </h1>
        <p className="text-text-secondary text-sm">
          Control de tipo de cambio y detección automática de discrepancias
        </p>
      </div>

      <div className="bg-surface border border-border rounded-xl shadow-sm">
        <div className="bg-primary-600 text-white px-6 py-4 rounded-t-xl">
          Información de divisas
        </div>

        <div className="p-6 grid grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-text-secondary block mb-1">
              Tipo de cambio global
            </label>
            <input
              className="w-full border border-border rounded-lg px-3 py-2"
              value="17.25"
            />
          </div>

          <div>
            <label className="text-sm text-text-secondary block mb-1">
              Tipo de cambio del proyecto
            </label>
            <input
              className="w-full border border-border rounded-lg px-3 py-2"
              value="18.10"
            />
          </div>

          <div className="flex items-end">
            <span className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm">
              ⚠ Discrepancia detectada
            </span>
          </div>
        </div>

        <div className="border-t border-border p-6">
          <p className="text-sm text-text-secondary mb-3">
            El sistema detectó una diferencia entre el tipo de cambio global y
            el tipo de cambio del proyecto.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
            Se generará automáticamente un registro en el historial de tipo de
            cambio del proyecto.
          </div>
        </div>
      </div>
    </div>
  );
}
