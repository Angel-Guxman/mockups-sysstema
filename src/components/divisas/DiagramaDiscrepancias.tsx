export function DiagramaDiscrepancias() {
  return (
    <div className="bg-background p-10 font-[Especial]">
      <h2 className="text-xl font-semibold mb-6 text-text-primary  mx-auto w-fit">
        Flujo de detección de discrepancias en divisas
      </h2>

      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="bg-surface border border-border rounded-lg px-6 py-3">
          Usuario accede a vista de cotizaciones
        </div>

        <div className="text-primary-600">↓</div>

        <div className="bg-surface border border-border rounded-lg px-6 py-3">
          Sistema obtiene tipo de cambio global
        </div>

        <div className="text-primary-600">↓</div>

        <div className="bg-surface border border-border rounded-lg px-6 py-3">
          Obtiene tipo de cambio del proyecto
        </div>

        <div className="text-primary-600">↓</div>

        <div className="bg-surface border border-border rounded-lg px-6 py-3">
          Comparación de valores
        </div>

        <div className="text-primary-600">↓</div>

        <div className="bg-red-50 border border-red-200 rounded-lg px-6 py-3">
          ¿Existe discrepancia?
        </div>

        <div className="text-primary-600">↓</div>

        <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-3">
          Registrar cambio en historial de tipo de cambio
        </div>
      </div>
    </div>
  );
}
