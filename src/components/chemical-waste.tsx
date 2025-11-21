import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertTriangle, Droplet, Flame, Skull } from "lucide-react";

export function ChemicalWaste() {
  const hazards = [
    { icon: Skull, label: "Tóxico", color: "text-red-600" },
    { icon: Flame, label: "Inflamável", color: "text-orange-600" },
    { icon: Droplet, label: "Corrosivo", color: "text-yellow-600" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>Resíduos do Grupo B</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            O Que São Resíduos Químicos?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-3xl opacity-20 blur-2xl" />
            <ImageWithFallback
              src="src\assets\ilustracao-grafica-de-sinal-de-circulo-amarelo-de-risco-biologico_53876-8057.png"
              alt="Símbolo de Risco Químico"
              className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                Resíduos do <strong>Grupo B</strong> são substâncias químicas tóxicas, corrosivas ou inflamáveis. 
                Na odontologia, incluem materiais perigosos que exigem cuidados especiais no descarte.
              </p>

              <div className="space-y-4">
                <h3 className="text-gray-900">Exemplos na Odontologia:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Reveladores e fixadores de Raio-X</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Resíduos de amálgama (mercúrio)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Medicamentos vencidos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {hazards.map((hazard, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <hazard.icon className={`w-8 h-8 mx-auto mb-3 ${hazard.color}`} />
                  <p className="text-gray-700">{hazard.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
              <p className="text-gray-800">
                ⚠️ <strong>Atenção:</strong> O descarte incorreto pode contaminar solo e água, 
                prejudicando o meio ambiente e a saúde pública.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
