import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Stethoscope, Play, Shield } from "lucide-react";

export function DrVictorInterview() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Stethoscope className="w-4 h-4" />
            <span>Entrevista Profissional</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            Entrevista com o Dr. Victor
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Entrevista com o Dr. Victor sobre a responsabilidade do profissional de saúde no descarte 
            seguro em consultórios. Ele reforça como pequenos cuidados evitam acidentes e preservam a equipe.
          </p>
        </div>

        <div className="gap-8 mb-12 ">
          


          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763070282954-c6f7c27d6ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzY3NjAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipamentos Profissionais"
              className="relative rounded-3xl shadow-xl w-full h-[280px] object-cover "
            />
          </div>
        </div>

        {/* Video embed */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
            
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ocv14ciwN4E"
                title="Entrevista com Dr. Victor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Responsabilidade Profissional</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Todo profissional de saúde tem o dever de garantir o descarte adequado em sua prática diária.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Prevenção de Acidentes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pequenos cuidados no dia a dia protegem toda a equipe de exposição a riscos químicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
