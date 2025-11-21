import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trash2, Package, Tag, Truck, ArrowRight } from "lucide-react";

export function DisposalSteps() {
  const steps = [
    {
      icon: Trash2,
      title: "Segregação Imediata",
      description: "Não misture resíduos químicos com lixo comum. Separe na origem.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Package,
      title: "Recipiente Adequado",
      description: "Use recipientes rígidos, estanques e resistentes a vazamentos.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Tag,
      title: "Identificação Clara",
      description: "Etiquete com símbolo de risco químico e informações do conteúdo.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Truck,
      title: "Coleta Especializada",
      description: "Empresa certificada recolhe e destina corretamente o resíduo.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
            <Package className="w-4 h-4" />
            <span>Processo Seguro</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            Passo a Passo do Descarte
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            O processo seguro começa na segregação imediata. Siga estas etapas para garantir 
            o descarte correto e proteger o meio ambiente.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl opacity-20 blur-2xl" />
            <ImageWithFallback
              src="src\assets\MG_2424.jpg"
              alt="Descarte em Bombona"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl text-gray-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-gray-900">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-8 rounded-3xl border border-blue-100">
          <p className="text-gray-800 text-center">
            💡 <strong>Lembre-se:</strong> Armazene em recipientes rígidos e estanques, 
            identificados com etiqueta de risco químico. Após o isolamento, o resíduo deve 
            ser recolhido por empresa especializada e certificada.
          </p>
        </div>
      </div>
    </section>
  );
}
