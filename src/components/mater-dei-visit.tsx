import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Play } from "lucide-react";

export function MaterDeiVisit() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            <span>Visita Técnica</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            Visita ao Hospital Mater Dei
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A equipe visitou o Hospital Mater Dei e entrevistou as gestoras Mariana, Mônica e Flávia 
            sobre o fluxo hospitalar de resíduos. Veja como a segregação correta protege pacientes e profissionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="\c942f710-603f-4575-bad5-d0eb57919be7.jpg"
              alt="Interior Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="\2b33c3b0-1a14-4786-aa10-803fc6c21a36.jpg"
              alt="Corredor Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          
        </div>

        {/* Video embed */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
            
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/QvzkkzypFek"
                title="Visita ao Hospital Mater Dei"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
          </div>

          <div className="mt-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Gestão Hospitalar de Resíduos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conheça as práticas adotadas pelo Hospital Mater Dei na gestão de resíduos químicos 
                  e como a segregação adequada é fundamental para a segurança de todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
