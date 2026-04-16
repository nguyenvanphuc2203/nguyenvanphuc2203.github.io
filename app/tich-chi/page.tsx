"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  ShieldCheck, 
  BarChart3, 
  Smartphone, 
  ArrowRight, 
  Download,
  Zap,
  Globe,
  PieChart,
  Lock,
  Wallet,
  Sparkles,
  ChevronRight
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#100E08]/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <TrendingUp className="text-[#100E08]" size={22} strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Tích Chỉ</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Tính năng", "Giá vàng", "Bảo mật"].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-bold text-zinc-400 hover:text-yellow-500 transition-colors">
              {item}
            </a>
          ))}
          <a 
            href="https://apps.apple.com/us/app/id6759823219" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-[#100E08] px-6 py-2.5 rounded-full font-black text-sm shadow-xl shadow-yellow-500/10"
            >
              Tải ngay
            </motion.button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-yellow-500" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

import Image from "next/image";

const AppScreenshotPlaceholder = ({ label, className, imageSrc }: { label: string, className?: string, imageSrc?: string }) => (
  <div className={`relative bg-zinc-900 rounded-[2rem] border-[8px] border-zinc-800 overflow-hidden shadow-2xl ${className}`}>
    {/* Screen Content */}
    {imageSrc ? (
      <div className="absolute inset-0">
        <Image 
          src={imageSrc} 
          alt={label} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
          <Sparkles className="text-yellow-500/50" size={32} />
        </div>
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Chờ ảnh chụp</p>
        <h4 className="text-lg font-bold text-zinc-300">{label}</h4>
        
        {/* Skeleton UI placeholder */}
        <div className="mt-8 w-full space-y-3">
          <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
          <div className="h-12 bg-white/5 rounded-xl border border-white/5 w-4/5" />
          <div className="h-32 bg-yellow-500/5 rounded-2xl border border-yellow-500/10" />
        </div>
      </div>
    )}
    
    {/* Glass Flare Effect - Always visible for premium feel */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
  </div>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#100E08] text-zinc-100 font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest mb-10"
              >
                <Zap size={14} fill="currentColor" /> Mới: Theo dõi giá vàng 24/7
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
              >
                Gia tăng tài sản <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-500">
                  Từng phân vàng.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed"
              >
                Ứng dụng số một giúp bạn quản lý, theo dõi lãi lỗ và cập nhật giá vàng trực tuyến một cách minh bạch nhất.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="https://apps.apple.com/us/app/id6759823219" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-10 py-5 bg-yellow-500 text-[#100E08] rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(234,179,8,0.2)]"
                  >
                    Tải app miễn phí <ChevronRight size={20} strokeWidth={3} />
                  </motion.button>
                </a>
                <motion.button 
                   whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg"
                >
                  Xem demo
                </motion.button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-40 hover:opacity-100 transition-opacity"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black">10K+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Người dùng</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black">4.9/5</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Đánh giá App Store</span>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative w-full max-w-[500px]">
              <motion.div
                initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
                animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative perspective-1000"
              >
                {/* To add your screenshot: <AppScreenshotPlaceholder label="Dashboard Chính" imageSrc="/path/to/image.png" ... /> */}
                <AppScreenshotPlaceholder 
                  label="Dashboard Chính" 
                  className="w-full aspect-[9/18.5] relative z-20" 
                  imageSrc="/app/z7623770805311_1ba6896a2e172e310fbfd089c817e0df.jpg"
                />
                
                {/* Floating Cards around Phone */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 z-30 p-4 bg-zinc-900/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-green-500" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Lãi ròng</p>
                      <p className="text-lg font-bold text-green-500">+2.4tr</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 bottom-1/4 z-30 p-4 bg-zinc-900/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Wallet className="text-yellow-500" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">SJC 9999</p>
                      <p className="text-lg font-bold text-white">82.50</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-6 overflow-hidden flex items-center whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-sm font-bold text-zinc-500">SJC</span>
            <span className="text-sm font-black text-white">82,500,000</span>
            <span className="text-xs font-bold text-green-500">+0.5%</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-sm font-bold text-zinc-500">PNJ</span>
            <span className="text-sm font-black text-white">74,200,000</span>
            <span className="text-xs font-bold text-red-500">-0.2%</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                Tính năng vượt trội <br />
                <span className="text-yellow-500">Cho nhà đầu tư.</span>
              </h2>
              <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                Chúng tôi cung cấp đầy đủ các công cụ để bạn kiểm soát ví vàng của mình một cách khoa học nhất.
              </p>
            </div>
            <div className="h-20 w-px bg-white/10 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              delay={0.1}
              icon={TrendingUp}
              title="Cập nhật 24/7"
              desc="Giá vàng SJC, DOJI, PNJ được cập nhật theo từng giây từ các nguồn uy tín nhất."
            />
            <FeatureCard 
              delay={0.2}
              icon={BarChart3}
              title="Phân tích lãi lỗ"
              desc="Tự động tính toán lợi nhuận dựa trên giá mua và giá thị trường hiện tại."
            />
            <FeatureCard 
              delay={0.3}
              icon={ShieldCheck}
              title="Scan hóa đơn"
              desc="Lưu trữ hình ảnh hóa đơn mua bán ngay trên app, không sợ thất lạc giấy tờ."
            />
            <FeatureCard 
              delay={0.4}
              icon={Lock}
              title="Bảo mật sinh trắc"
              desc="Khóa ứng dụng bằng FaceID, TouchID để đảm bảo tài sản luôn riêng tư."
            />
          </div>
        </div>
      </section>

      {/* Dual App Preview Section */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="flex-1 grid grid-cols-2 gap-8 w-full">
              <motion.div 
                initial={{ y: 0 }}
                whileInView={{ y: -40 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                {/* To add image: <AppScreenshotPlaceholder label="..." imageSrc="..." /> */}
                <AppScreenshotPlaceholder label="Danh mục đầu tư" className="aspect-[9/18]" imageSrc="/app/z7623770734194_d338e831cdd689803de68fced72c5fa1.jpg"/>
                <AppScreenshotPlaceholder label="Biểu đồ lịch sử" className="aspect-[9/18]" imageSrc="/app/z7623770775214_c311c64e8d0a45d96e1b9121209fba61.jpg"/>
              </motion.div>
              <motion.div 
                initial={{ y: 0 }}
                whileInView={{ y: 40 }}
                transition={{ duration: 1 }}
                className="space-y-8 mt-12"
              >
                {/* To add image: <AppScreenshotPlaceholder label="..." imageSrc="..." /> */}
                <AppScreenshotPlaceholder label="Chi tiết giao dịch" className="aspect-[9/18]" imageSrc="/app/z7666444127198_55b7aa5373842e95bc71fe4c79066d92.jpg"/>
                <AppScreenshotPlaceholder label="Cài đặt thông báo" className="aspect-[9/18]" imageSrc="/app/z7623770762115_338b2a9e8742375954cbf706a9b88d19.jpg"/>
              </motion.div>
           </div>

           <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                Giao diện tinh gọn <br /> 
                Trải nghiệm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Native mượt mà.</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { t: "Dark mode sang trọng", d: "Tối ưu cho việc theo dõi vào ban đêm mà không mỏi mắt." },
                  { t: "Thao tác một chạm", d: "Mọi chức năng quan trọng đều nằm trong tầm tay bạn." },
                  { t: "Đồ họa trực quan", d: "Biểu đồ và màu sắc giúp bạn nắm bắt thị trường trong 1 giây." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.t}</h4>
                      <p className="text-zinc-500 text-sm font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-[150px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            className="w-20 h-20 bg-yellow-500 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-yellow-500/20"
          >
            <TrendingUp size={40} className="text-[#100E08]" strokeWidth={3} />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Theo dõi vàng <br /> chuyên nghiệp hơn.
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
            Gia nhập cùng 10,000+ người dùng đang tối ưu hóa danh mục đầu tư vàng của mình với Tích Chỉ.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a 
               href="https://apps.apple.com/us/app/id6759823219" 
               target="_blank" 
               rel="noopener noreferrer"
             >
               <motion.button 
                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234,179,8,0.3)" }}
                 className="bg-yellow-500 text-[#100E08] px-12 py-6 rounded-[2rem] font-black text-xl flex items-center gap-4 group"
               >
                  Tải lên App Store <Download size={24} strokeWidth={3} />
               </motion.button>
             </a>
          </div>

          <p className="mt-10 text-zinc-600 text-sm font-bold uppercase tracking-[0.2em]">
            Hoàn toàn miễn phí • Không quảng cáo ép buộc
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#0c0a06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-[#100E08]" size={18} strokeWidth={3} />
              </div>
              <span className="text-xl font-black">Tích Chỉ</span>
            </div>
            <p className="text-zinc-500 max-w-sm font-medium leading-relaxed">
              Giải pháp theo dõi tài chính cá nhân dành riêng cho thị trường vàng Việt Nam. Đơn giản, Hiệu quả, Minh bạch.
            </p>
          </div>
          
          <div>
            <h5 className="text-sm font-black uppercase tracking-widest text-white mb-6">Sản phẩm</h5>
            <ul className="space-y-4 text-zinc-500 text-sm font-bold">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Tính năng</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Bảo mật</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Hỗ trợ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-black uppercase tracking-widest text-white mb-6">Pháp lý</h5>
            <ul className="space-y-4 text-zinc-500 text-sm font-bold">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Điều khoản</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Bảo mật</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
            © 2026 JunozDev. All rights reserved.
          </p>
          <div className="flex gap-6">
             <Globe className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={20} />
             <Smartphone className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}
