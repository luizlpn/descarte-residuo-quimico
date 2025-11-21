import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, FileText, Share2 } from "lucide-react";

export function FolderDownload() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6">
            <FileText className="w-4 h-4" />
            <span>Material Educativo</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            Download do Folder
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Criamos um folder simples e visual para orientar o descarte correto de resíduos químicos. 
            Faça o download e compartilhe com sua equipe.
          </p>
        </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="src\assets\3fa3c419-5cc1-4510-8ddc-63e670648c5d.jpg"
              alt="Interior Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="src\assets\df166a69-f134-4fae-aef7-150174493fcc.jpg"
              alt="Corredor Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          
        </div>
  <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="src\assets\8745f44c-e48e-4b7b-b2e1-0d5549a1271b.jpg"
              alt="Interior Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <ImageWithFallback
              src="src\assets\5e00e5b0-3215-4ec3-9ba2-e874d78545d0.jpg"
              alt="Corredor Hospitalar"
              className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover"
            />
          </div>

          
        </div>


        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl opacity-20 blur-2xl" />
            <ImageWithFallback
              src="src\assets\5a79b220-b389-4a01-98d4-206d047f49bb.jpg"
              alt="Prévia do Folder"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-gray-900 mb-4">Material Completo</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                O folder contém informações essenciais sobre identificação, segregação e 
                armazenamento de resíduos químicos em consultórios odontológicos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>Guia visual de identificação</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>Passo a passo ilustrado</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>Dicas de segurança</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>Legislação aplicável</span>
                </div>
              </div>
            </div>

            <a href="https://drive.google.com/file/d/122OeWoCP9tTWDgqCQTW0bvquLTUG_hQY/view">

            <button  className="w-full group relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6 px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                <span className="text-xl">Baixar Folder (JPG)</span>
              </div>
            </button>
            </a>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
              <div className="flex items-start gap-3">
                <Share2 className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-2">Compartilhe com sua equipe</h4>
                  <p className="text-gray-600">
                    Este material pode ser impresso e afixado em locais estratégicos do consultório 
                    para consulta rápida.
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
