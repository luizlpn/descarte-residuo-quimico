import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, GraduationCap, Heart } from "lucide-react";
import newtonPaivaImage from "figma:asset/83c515a1968b764628894dd113d9eb52d0574d6f.png";

export function AboutProject() {
  return (
    <section id="sobre" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span>Sobre o Projeto</span>
          </div>
          <h2 className="text-blue-900 mb-6">
            Educação e Responsabilidade Ambiental
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Este site é parte de um projeto de extensão do curso de <strong>Odontologia da Faculdade Newton Paiva Wyden</strong>. 
              Nosso objetivo é conectar o conhecimento acadêmico com a prática profissional, promovendo a conscientização 
              sobre o descarte correto como uma ferramenta essencial de saúde pública e sustentabilidade.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-900 mb-2">Professora</h3>
                  <p className="text-gray-700">Veridiana Salles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-900 mb-2">Grupo</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Alice Guerra, Evelyn Scheleger, Fernanda Mendes, Gabriela Viegas, 
                    Giovana Perpétuo, Raissa Caroline, Maria Beatriz e Yasmin Luce
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
              <p className="text-gray-600">Faculdade Newton Paiva Wyden</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl" />
            <img
              src={newtonPaivaImage}
              alt="Faculdade Newton Paiva Wyden"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}