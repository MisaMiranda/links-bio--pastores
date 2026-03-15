/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Facebook, MessageCircle, ExternalLink, Heart, Copy, Check } from 'lucide-react';

export default function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  const links = [
    {
      title: 'Pix Ofertas/Doações',
      subtitle: '26326833272',
      copyText: '26326833272',
      isCopy: true,
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: 'Site Oficial',
      subtitle: 'Conheça mais sobre nosso ministério',
      url: 'https://prsouzaedeize.vercel.app/',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/friends/requests/?profile_id=100003632628421',
      subtitle: 'Acompanhe nossas mensagens e eventos',
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/559295365561?text=A%20paz%20do%20Senhor%2C%20meus%20pastores%21%20Tudo%20bem%3F',
      subtitle: 'Fale conosco ou envie seu pedido de oração',
      icon: <MessageCircle className="w-5 h-5" />,
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-amber-600/30 selection:text-amber-200 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-800/10 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md space-y-10 relative z-10">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-[1.15] animate-[pulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-amber-500/10 scale-[1.3] animate-[pulse_4s_ease-in-out_infinite]"></div>
            <img
              className="relative h-32 w-32 rounded-full object-cover border border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]"
              src="/profile.jpeg"
              alt="Pr. Souza e Pra. Deize"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-serif font-medium tracking-wide text-amber-50 mb-3">
            Pr. Souza & Pra. Deize
          </h1>
          <p className="text-xs tracking-widest uppercase text-amber-500/80 font-medium mb-5 text-center px-2">
            Igreja Assembleia de Deus no Amazonas
          </p>
          <p className="text-sm text-slate-400 font-light px-4 leading-relaxed">
            Levando a palavra, esperança e fé. Conecte-se conosco através dos nossos canais oficiais.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 w-full"
        >
          {links.map((link, index) => {
            const isCopied = copiedIndex === index;
            
            return (
              <motion.a
                key={index}
                href={link.url || '#'}
                onClick={link.isCopy ? (e) => { e.preventDefault(); handleCopy(link.copyText!, index); } : undefined}
                target={link.isCopy ? undefined : "_blank"}
                rel={link.isCopy ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between w-full p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-amber-500/30 shadow-lg shadow-black/20 cursor-pointer text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-black/40 rounded-full text-amber-500/80 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-amber-500/20">
                    {link.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-medium text-base text-slate-200 group-hover:text-white transition-colors tracking-wide">{link.title}</span>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">
                      {isCopied ? <span className="text-emerald-400 font-medium">Chave copiada!</span> : link.subtitle}
                    </span>
                  </div>
                </div>
                {link.isCopy ? (
                  isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-600 group-hover:text-amber-500/60 transition-colors" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-500/60 transition-colors" />
                )}
              </motion.a>
            );
          })}
        </motion.div>
        
        {/* Footer */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.5 }}
           className="pt-12 pb-6 text-center"
        >
            <div className="w-12 h-[1px] bg-amber-500/20 mx-auto mb-6"></div>
            <p className="text-[10px] text-slate-500 font-light tracking-widest uppercase">
              © {new Date().getFullYear()} Ministério Pastoral
            </p>
        </motion.div>
      </div>
    </div>
  );
}
