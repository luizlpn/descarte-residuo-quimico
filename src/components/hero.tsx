import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
          Projeto de Extensão • Newton Paiva Wyden
        </div>
        
        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          Odontologia e Descarte Correto de Resíduos Químicos
        </h1>
        
        <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-12 leading-relaxed">
          Conectando conhecimento acadêmico com prática profissional para promover 
          saúde pública e sustentabilidade através do descarte responsável
        </p>
        
        <a
          href="#sobre"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Conheça o Projeto
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
      
      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
