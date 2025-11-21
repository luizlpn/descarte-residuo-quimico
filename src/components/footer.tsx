import { Heart, Mail, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3>Projeto de Extensão</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Odontologia e Descarte Correto de Resíduos Químicos
            </p>
          </div>

          {/* Institution */}
          <div>
            <h3 className="mb-4">Faculdade</h3>
            <p className="text-gray-300 mb-2">Newton Paiva Wyden</p>
            <p className="text-gray-400">Curso de Odontologia</p>
          </div>

          {/* Team */}
          <div>
            <h3 className="mb-4">Professora Orientadora</h3>
            <p className="text-gray-300 mb-4">Veridiana Salles</p>
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>contato@exemplo.com</span>
            </div>
          </div>
        </div>

        {/* Team members */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-center mb-4 text-gray-400">Equipe do Projeto</h4>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span>Alice Guerra</span>
            <span className="text-gray-600">•</span>
            <span>Evelyn Scheleger</span>
            <span className="text-gray-600">•</span>
            <span>Fernanda Mendes</span>
            <span className="text-gray-600">•</span>
            <span>Gabriela Viegas</span>
            <span className="text-gray-600">•</span>
            <span>Giovana Perpétuo</span>
            <span className="text-gray-600">•</span>
            <span>Raissa Caroline</span>
            <span className="text-gray-600">•</span>
            <span>Maria Beatriz</span>
            <span className="text-gray-600">•</span>
            <span>Yasmin Luce</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>pela equipe • 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
