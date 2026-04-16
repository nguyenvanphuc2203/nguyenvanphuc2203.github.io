"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  TrendingUp, 
  Layers, 
  Code2, 
  ExternalLink, 
  Mail,
  Smartphone,
  AppWindow,
  ArrowRight,
  Sparkles,
  Globe,
  Share2
} from "lucide-react";

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  link, 
  icon: Icon,
  color
}: { 
  title: string, 
  description: string, 
  tags: string[], 
  link: string, 
  icon: any,
  color: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:bg-zinc-900 transition-all"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 blur-[60px] rounded-full group-hover:bg-${color}-500/20 transition-all`} />
    
    <div className="relative z-10">
      <div className={`w-14 h-14 bg-${color}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`text-${color}-500`} size={28} />
      </div>
      
      <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
        {title} 
        <Link href={link}>
          <ExternalLink size={18} className="text-zinc-600 hover:text-white transition-colors cursor-pointer" />
        </Link>
      </h3>
      
      <p className="text-zinc-400 font-medium mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
      <Link href={link} className="inline-flex items-center gap-2 text-sm font-black text-white group-hover:text-yellow-500 transition-colors">
        Xem chi tiết <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-yellow-500/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Header / Hero */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-black uppercase tracking-widest mb-12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Junozdev.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed mb-12">
              Chuyên thiết kế & phát triển các ứng dụng di động có giá trị cao, tối ưu hóa trải nghiệm người dùng và tính minh bạch của dữ liệu.
            </p>

            <div className="flex items-center gap-6">
              <a href="mailto:contact@junozdev.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl">
                <Mail size={24} />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl" title="GitHub">
                <Code2 size={24} />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl" title="Social">
                <Globe size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-4">
              <Sparkles className="text-yellow-500" /> CÁC DỰ ÁN TIÊU BIỂU
            </h2>
            <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Tích Chỉ"
              description="Ứng dụng số #1 quản lý và theo dõi giá vàng cá nhân tại Việt Nam. Theo dõi lãi lỗ thời gian thực và lưu trữ hóa đơn minh bạch."
              tags={["React Native", "Expo", "AdMob", "RevenueCat"]}
              link="/tich-chi"
              icon={TrendingUp}
              color="yellow"
            />
            <ProjectCard 
              title="WealthVault"
              description="Nền tảng quản lý danh mục đầu tư đa tài sản. Tự động hóa việc theo dõi dòng tiền và tối ưu vốn đầu tư cá nhân."
              tags={["React Native", "Supabase", "Analytics"]}
              link="#"
              icon={Layers}
              color="blue"
            />
          </div>
        </section>

        {/* Stats / Skills */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="text-purple-500" />
              </div>
              <h4 className="text-lg font-black mb-2 uppercase tracking-widest text-zinc-400">Mobile Development</h4>
              <p className="text-zinc-600 font-bold">Xây dựng ứng dụng Native mượt mà trên cả iOS & Android.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <AppWindow className="text-blue-500" />
              </div>
              <h4 className="text-lg font-black mb-2 uppercase tracking-widest text-zinc-400">Web Performance</h4>
              <p className="text-zinc-600 font-bold">Tối ưu hóa tốc độ tải trang và SEO cho Landing Pages.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="text-green-500" />
              </div>
              <h4 className="text-lg font-black mb-2 uppercase tracking-widest text-zinc-400">AI Integration</h4>
              <p className="text-zinc-600 font-bold">Tích hợp các giải pháp AI vào ứng dụng thực tế.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            © 2026 JunozDev. Built with Next.js & Love.
          </p>
          <div className="flex gap-8 text-zinc-600 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
