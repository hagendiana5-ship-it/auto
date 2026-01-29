import React, { useState, useCallback, useRef } from 'react';
import { generateCarImage, generateTextContent } from '../services/geminiService';
import { Sparkles, Loader2, Download, Wand2, MonitorPlay, Upload, X, Scan } from 'lucide-react';
import { GeneratedImage, Language } from '../types';

interface VisualizerProps {
  lang: Language;
  t: {
    title: string;
    subtitle: string;
    label: string;
    placeholder: string;
    buttonGenerate: string;
    buttonGenerating: string;
    mechanicNote: string;
    emptyState: string;
    download: string;
    loading: string;
    quickPrompts: string[];
  };
}

const Visualizer: React.FC<VisualizerProps> = ({ lang, t }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<GeneratedImage | null>(null);
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setPrompt("Analyze this vehicle for repairs and visual upgrades."); // Auto-fill prompt for convenience
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() && !uploadedImage) return;

    setLoading(true);
    setResultImage(null);
    setAiAdvice('');

    try {
      // If image is uploaded, we prioritize analysis (Text generation with vision)
      // If no image uploaded, we generate an image based on text.
      
      let imgData = null;
      let textData = "";

      if (uploadedImage) {
        // Mode: Analyze Uploaded Image
        textData = await generateTextContent(
          `Analyze the visual data provided (image). Identify the car, potential damage, or suggest modifications based on this request: "${prompt}". Provide a technical assessment.`, 
          lang, 
          uploadedImage
        );
        // We don't generate a new car image if analyzing an upload, we might just show the upload or a fix later.
        // For now, let's keep the uploaded image as the "result" to show context, or generate a 'fixed' version if possible.
        // To keep it simple and impressive: We just analyze the upload.
      } else {
        // Mode: Generate New Concept
        [imgData, textData] = await Promise.all([
          generateCarImage(prompt),
          generateTextContent(`Explain the benefits or technical details of this car request to a customer: "${prompt}". Keep it short (2 sentences).`, lang)
        ]);
      }

      if (imgData) {
        setResultImage({
          url: imgData,
          prompt: prompt,
          timestamp: Date.now()
        });
      }
      
      setAiAdvice(textData);

    } catch (e) {
      console.error(e);
      setAiAdvice("Error processing request.");
    } finally {
      setLoading(false);
    }
  }, [prompt, lang, uploadedImage]);

  const clearUpload = () => {
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setPrompt('');
  };

  return (
    <div className="animate-fade-in mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
           <MonitorPlay className="h-6 w-6 text-brand-400" />
           <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">System Online</span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase italic">
          {t.title}
        </h2>
        <div className="h-1 w-20 bg-brand-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Input Section */}
        <div className="bg-dark-800 border border-white/10 p-1">
          <div className="border border-white/5 p-8 bg-black/40 backdrop-blur relative">
            {/* Tech Decoration */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-400"></div>
            
            <div className="relative space-y-8">
              
              {/* Image Upload Area */}
              <div>
                 <label className="block text-sm font-bold tracking-widest text-white mb-4 uppercase">
                   Visual Input Source
                 </label>
                 {!uploadedImage ? (
                   <div 
                     onClick={() => fileInputRef.current?.click()}
                     className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-brand-400 hover:bg-brand-400/5 transition-all group"
                   >
                     <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2 group-hover:text-brand-400" />
                     <p className="text-xs text-gray-400 font-mono uppercase">Click to upload vehicle scan</p>
                   </div>
                 ) : (
                   <div className="relative rounded-lg overflow-hidden border border-brand-400/50 group">
                      <img src={uploadedImage} alt="Upload" className="w-full h-48 object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="bg-black/70 text-brand-400 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest border border-brand-400/50">Image Loaded</span>
                      </div>
                      <button 
                        onClick={clearUpload}
                        className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-500 text-white p-1 rounded transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                   </div>
                 )}
                 <input 
                   type="file" 
                   ref={fileInputRef} 
                   onChange={handleFileChange} 
                   className="hidden" 
                   accept="image/*"
                 />
              </div>

              <div>
                <label htmlFor="prompt" className="block text-sm font-bold tracking-widest text-white mb-4 uppercase">
                  {t.label}
                </label>
                <div className="relative group">
                  <textarea
                    id="prompt"
                    rows={4}
                    className="block w-full bg-dark-900 text-white p-4 border border-white/10 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-all font-mono text-sm placeholder:text-gray-600 outline-none resize-none"
                    placeholder={uploadedImage ? "Describa el daño o la modificación deseada..." : t.placeholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <div className="absolute bottom-2 right-2 bg-brand-400/10 px-2 py-1 rounded text-[10px] text-brand-400 font-mono">
                     {uploadedImage ? 'ANALYSIS_MODE' : 'GENERATION_MODE'}
                  </div>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || (!prompt && !uploadedImage)}
                className={`w-full py-4 text-sm font-black uppercase tracking-widest transition-all duration-200 border border-transparent
                  ${loading || (!prompt && !uploadedImage)
                    ? 'bg-dark-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-brand-400 text-black hover:bg-white hover:border-brand-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]'
                  }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.buttonGenerating}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {uploadedImage ? <Scan className="h-4 w-4" /> : <Wand2 className="h-4 w-4" />}
                    {uploadedImage ? "Analyze Damage" : t.buttonGenerate}
                  </span>
                )}
              </button>

              {/* Quick Prompts - Only show if no upload */}
              {!uploadedImage && (
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Load Preset</p>
                  <div className="flex flex-wrap gap-2">
                    {t.quickPrompts.map((item) => (
                      <button
                        key={item}
                        onClick={() => setPrompt(item)}
                        className="bg-dark-700 hover:bg-brand-400 hover:text-black px-3 py-2 text-xs font-medium text-gray-300 transition-colors uppercase tracking-tight"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col gap-6">
           <div className={`relative aspect-square w-full bg-black border border-white/10 flex flex-col items-center justify-center overflow-hidden group transition-all duration-500
             ${loading ? 'border-brand-400/50 shadow-[0_0_30px_rgba(250,204,21,0.1)]' : ''}`}>
             
             {/* Tech Grid Background */}
             <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

             {loading && (
               <div className="flex flex-col items-center gap-6 animate-pulse relative z-10">
                 <Loader2 className="h-16 w-16 text-brand-400 animate-spin" />
                 <p className="text-xs font-mono text-brand-400 tracking-widest uppercase blink">{t.loading}</p>
               </div>
             )}
             
             {!loading && !resultImage && !uploadedImage && (
               <div className="text-center p-8 relative z-10 opacity-50">
                 <div className="w-20 h-20 border-2 border-dashed border-gray-600 mx-auto flex items-center justify-center mb-4 rounded-full">
                    <MonitorPlay className="h-8 w-8 text-gray-600" />
                 </div>
                 <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">{t.emptyState}</p>
               </div>
             )}

             {/* Show uploaded image as result if analyzing */}
             {!loading && uploadedImage && !resultImage && (
                <div className="relative h-full w-full">
                  <img src={uploadedImage} alt="Analysis Target" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-brand-400/10 pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-black/80 text-brand-400 text-xs px-2 py-1 font-mono border border-brand-400/50">
                    TARGET ACQUIRED
                  </div>
                </div>
             )}

             {!loading && resultImage && (
               <div className="relative h-full w-full">
                 <img 
                   src={resultImage.url} 
                   alt={resultImage.prompt} 
                   className="h-full w-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a 
                      href={resultImage.url} 
                      download="apex-concept.png"
                      className="bg-brand-400 text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors"
                    >
                      {t.download}
                    </a>
                 </div>
                 {/* Watermark style element */}
                 <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/50 bg-black/50 px-2 py-1">
                    APEX_AI_V2
                 </div>
               </div>
             )}
           </div>

           {/* AI Advice Box */}
           {aiAdvice && !loading && (
             <div className="bg-dark-800 border-l-4 border-brand-400 p-6 shadow-lg animate-slide-up">
               <h4 className="flex items-center gap-2 text-xs font-black text-brand-400 mb-3 uppercase tracking-widest">
                 <Sparkles className="h-3 w-3" />
                 {t.mechanicNote}
               </h4>
               <p className="text-sm text-gray-300 leading-relaxed font-light border-t border-white/5 pt-3">
                 "{aiAdvice}"
               </p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Visualizer;