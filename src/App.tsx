import React, { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Star,
  Users,
  Target,
  Globe2,
  Squircle,
  MessageCircle,
  Headphones,
  MapPinned,
  Mail,
  Send,
  Layers,
  ArrowUpRight,
} from "lucide-react";

import logoKriaNome from "./assets/logoKriaNome-CjUWgZdO.svg";
import bgFaixa from "./assets/FaixaBg-CklymE5M.svg";
import mapaAmericaLatina from "./assets/AmericaLatina-D5exzu_l.svg";

import logoCcr from "./assets/ccr_logo-Wb_mTWDt.png";
import logoArteris from "./assets/arteris_logo-GXDgWywn.png";
import logoEcorodovias from "./assets/ecorodovias_logo-BPY2mUEm.png";
import logoViaMobilidade from "./assets/viaMobilidade_logo-CILdV_Ow.png";
import logoViaQuatro from "./assets/viaQuatro_logo-BRvc18GQ.png";
import logoTamoios from "./assets/tamoios_logo-Bn9yepAf.png";
import logoBhAirport from "./assets/bhAirport_logo-HFXhkwry.png";

type Cliente = {
  name: string;
  logo?: string;
};

type Produto = {
  name: string;
  tag: string;
  description: string;
};

const indicadores = [
  {
    icon: <Star className="h-6 w-6" />,
    label: "Pioneira na área de sistemas para concessionárias",
    value: "+ 20 anos",
    description: "de tradição no mercado",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    label: "Presente na América do Sul e Central",
    value: "Desde 2000",
    description: "com o KCOR",
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: "Sob gestão de nossos sistemas",
    value: "+ de 25.000 Km",
    description: "",
  },
  {
    icon: <Target className="h-6 w-6" />,
    label: "Registrados por dia",
    value: "média de 20.000 eventos",
    description: "",
  },
];

const produtos: Produto[] = [
  {
    name: "KCOR Essencial",
    tag: "Operação",
    description:
      "Solução essencial para apoiar a gestão operacional de concessionárias de rodovias.",
  },
  {
    name: "KCOR ITS & Mobile",
    tag: "Integrações e campo",
    description:
      "Versão voltada à integração ITS, recursos mobile e operação conectada.",
  },
  {
    name: "KCOR Completo",
    tag: "Plataforma",
    description:
      "Conjunto completo de recursos para gestão operacional de rodovias.",
  },
  {
    name: "KCOR SAGT",
    tag: "Gestão de tráfego",
    description:
      "Software completo e desenvolvido para gestão de concessionárias de rodovias.",
  },
];

const ecossistema = [
  {
    name: "KCOR",
    title: "Gestão Operacional para Rodovias",
    description:
      "Sistema especialista para gestão operacional de concessionárias de rodovias.",
  },
  {
    name: "KCOM",
    title: "Atendimento ao Cliente",
    description:
      "Solução desenvolvida exclusivamente para atendimento ao cliente.",
  },
  {
    name: "KVIA",
    title: "Controle Operacional para Vias Urbanas",
    description: "Solução para operação de conservação urbana.",
  },
];

const clientesComLogo: Cliente[] = [
  { name: "Arteris", logo: logoArteris },
  { name: "CCR", logo: logoCcr },
  { name: "Ecovias", logo: logoEcorodovias },
  { name: "ViaMobilidade", logo: logoViaMobilidade },
  { name: "ViaQuatro", logo: logoViaQuatro },
  { name: "Tamoios", logo: logoTamoios },
  { name: "BH Airport", logo: logoBhAirport },
];

const clientesTexto = [
  "Lima Expressa",
  "Rodovias do Tietê",
  "Rota do Oeste",
  "Rota de Santa Maria",
  "Rutas de Lima",
  "SPMAR",
  "VIABAHIA",
];

const linha1: Cliente[] = [
  ...clientesComLogo,
  ...clientesTexto.map((name) => ({ name })),
];

const linha2: Cliente[] = [
  ...clientesTexto.map((name) => ({ name })),
  ...clientesComLogo,
];

function ClienteCard({ cliente }: { cliente: Cliente }) {
  return (
    <div className="group flex h-24 w-[220px] flex-shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.10)]">
      {cliente.logo ? (
        <img
          src={cliente.logo}
          alt={cliente.name}
          className="max-h-12 max-w-full object-contain grayscale opacity-65 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      ) : (
        <span className="text-center text-sm font-extrabold text-neutral-400 transition-colors group-hover:text-neutral-800">
          {cliente.name}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({
  clientes,
  direction = "left",
}: {
  clientes: Cliente[];
  direction?: "left" | "right";
}) {
  return (
    <div className="overflow-hidden py-5">
      <div
        className={`flex w-max gap-6 ${direction === "left"
          ? "animate-marquee-left"
          : "animate-marquee-right"
          } hover:[animation-play-state:paused]`}
      >
        {[...clientes, ...clientes].map((cliente, index) => (
          <ClienteCard
            key={`${direction}-${cliente.name}-${index}`}
            cliente={cliente}
          />
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#D63A31]">
      {children}
    </p>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[15px] text-[#151515] font-sans antialiased selection:bg-[#D63A31] selection:text-white">
      <style>
        {`
          @keyframes marqueeLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(34px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes floatSoft {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-18px) rotate(1.5deg); }
          }

          @keyframes pulseDot {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(214, 58, 49, 0.35);
            }
            50% {
              transform: scale(1.25);
              box-shadow: 0 0 0 10px rgba(214, 58, 49, 0);
            }
          }

          @keyframes shine {
            from { transform: translateX(-120%) skewX(-18deg); }
            to { transform: translateX(220%) skewX(-18deg); }
          }

          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-marquee-left {
            animation: marqueeLeft 80s linear infinite;
          }

          .animate-marquee-right {
            animation: marqueeRight 80s linear infinite;
          }

          .reveal {
            opacity: 0;
            animation: fadeUp 0.85s cubic-bezier(.2,.8,.2,1) forwards;
          }

          .reveal-slow {
            opacity: 0;
            animation: fadeUp 1.1s cubic-bezier(.2,.8,.2,1) forwards;
          }

          .delay-100 { animation-delay: 0.10s; }
          .delay-200 { animation-delay: 0.20s; }
          .delay-300 { animation-delay: 0.30s; }
          .delay-400 { animation-delay: 0.40s; }
          .delay-500 { animation-delay: 0.50s; }
          .delay-600 { animation-delay: 0.60s; }
          .delay-700 { animation-delay: 0.70s; }

          .float-soft {
            animation: floatSoft 8s ease-in-out infinite;
          }

          .pulse-dot {
            animation: pulseDot 2s ease-in-out infinite;
          }

          .animated-gradient {
            background-size: 200% 200%;
            animation: gradientMove 10s ease infinite;
          }

          .shine-button {
            position: relative;
            overflow: hidden;
          }

          .shine-button::before {
            content: '';
            position: absolute;
            inset: 0;
            width: 45%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent);
            transform: translateX(-120%) skewX(-18deg);
          }

          .shine-button:hover::before {
            animation: shine 0.9s ease;
          }

          html {
            scroll-behavior: smooth;
          }

          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center"
            aria-label="Kria Tecnologia"
          >
            <img src={logoKriaNome} alt="Kria" className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-wide text-neutral-500 md:flex">
            <a href="#sobre" className="transition-colors hover:text-[#D63A31]">
              Sobre nós
            </a>
            <a
              href="#produtos"
              className="transition-colors hover:text-[#D63A31]"
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="transition-colors hover:text-[#D63A31]"
            >
              Contato
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full bg-[#D63A31] px-4 py-2 text-[11px] font-black uppercase text-white shadow-sm transition-colors hover:bg-[#B92E27]">
              Login
            </button>

            <button
              aria-label="Idioma"
              className="text-neutral-500 transition-colors hover:text-[#D63A31]"
            >
              <Globe2 className="h-5 w-5" />
            </button>
          </div>

          <button
            className="p-2 text-neutral-800 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-4 border-t border-black/5 bg-white px-5 py-5 md:hidden">
            {[
              ["Sobre nós", "#sobre"],
              ["Produtos", "#produtos"],
              ["Clientes", "#clientes"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-bold uppercase text-neutral-600"
              >
                {label}
              </a>
            ))}

            <button className="w-full rounded-full bg-[#D63A31] px-5 py-3 text-xs font-black uppercase text-white">
              Login
            </button>
          </div>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[660px] items-center overflow-hidden bg-[#FFF7F6]">
          <img
            src={bgFaixa}
            alt=""
            className="pointer-events-none absolute right-[-180px] top-0 hidden h-full w-auto opacity-10 lg:block float-soft"
          />

          <img
            src={bgFaixa}
            alt=""
            className="pointer-events-none absolute left-[-260px] bottom-[-120px] hidden h-[520px] w-auto rotate-180 opacity-[0.06] lg:block float-soft"
          />

          <div className="absolute inset-0 animated-gradient bg-[radial-gradient(circle_at_50%_20%,rgba(214,58,49,0.14),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(214,58,49,0.08),transparent_32%)]" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-[4.5rem] text-center sm:px-6 lg:px-8">
            <div className="reveal mx-auto inline-flex items-center gap-2 rounded-full border border-[#F4CFC8] bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D63A31] pulse-dot" />
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#D63A31]">
                Kria Tecnologia
              </span>
            </div>

            <h1 className="reveal delay-100 mx-auto mt-7 max-w-5xl text-[2.15rem] font-light leading-[1.08] tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Plataforma especialista em{" "}
              <span className="font-black text-[#D63A31]">
                gestão operacional
              </span>{" "}
              para concessionárias de rodovias
            </h1>

            <p className="reveal delay-200 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Desde 2000 presente na América do Sul e Central com o KCOR,
              sistema especialista em gestão operacional para rodovias.
            </p>

            <div className="reveal delay-300 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#produtos"
                className="shine-button group inline-flex items-center justify-center gap-3 rounded-xl bg-[#111111] px-6 py-3.5 text-xs font-black text-white shadow-[0_16px_35px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#D63A31]"
              >
                Conheça o KCOR
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#D63A31]">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border border-[#F1B8AE] bg-white/80 px-6 py-3.5 text-xs font-black text-[#D63A31] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D63A31] hover:bg-white"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="relative bg-white py-[4.5rem]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal mb-12 max-w-3xl">
              <SectionLabel>Sobre nós</SectionLabel>
              <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                Mais de duas décadas apoiando operações rodoviárias.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
                <div className="reveal delay-100 flex min-h-[210px] flex-col justify-between rounded-3xl bg-neutral-900 p-7 text-white transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-[#D63A31]">{indicadores[0].icon}</div>
                  <div>
                    <p className="text-xs font-black uppercase leading-relaxed tracking-wide text-white/70">
                      {indicadores[0].label}
                    </p>
                    <h3 className="mt-4 text-4xl font-black">
                      {indicadores[0].value}
                    </h3>
                    <p className="mt-3 text-xs font-black uppercase tracking-wide text-white/70">
                      {indicadores[0].description}
                    </p>
                  </div>
                </div>

                <div className="reveal delay-200 relative min-h-[210px] overflow-hidden rounded-3xl border border-[#F4CFC8] bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={mapaAmericaLatina}
                    alt=""
                    className="absolute bottom-[-70px] right-[-50px] h-72 opacity-10"
                  />
                  <div className="relative z-10">
                    <div className="text-[#D63A31]">{indicadores[1].icon}</div>
                    <h3 className="mt-5 text-4xl font-black leading-none text-[#D63A31]">
                      {indicadores[1].value}
                    </h3>
                    <p className="mt-4 text-xs font-black uppercase leading-relaxed tracking-wide text-[#D63A31]">
                      {indicadores[1].label}
                    </p>
                    <p className="mt-2 text-xs font-bold text-[#D63A31]/70">
                      {indicadores[1].description}
                    </p>
                  </div>
                </div>

                <div
                  id="produtos"
                  className="reveal delay-300 relative min-h-[250px] overflow-hidden rounded-3xl border border-[#F4CFC8] bg-[#FFF7F6] p-7 md:col-span-2"
                >
                  <img
                    src={bgFaixa}
                    alt=""
                    className="absolute right-0 top-0 h-full opacity-10"
                  />
                  <div className="relative z-10 max-w-3xl">
                    <SectionLabel>KCOR</SectionLabel>
                    <h2 className="text-2xl font-black leading-tight text-neutral-950 sm:text-4xl">
                      O software completo e desenvolvido para gestão de
                      concessionárias de rodovias.
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600">
                      O KCOR oferece recursos analíticos e integração com
                      equipamentos ITS e mídias sociais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal delay-400 flex min-h-[496px] flex-col justify-between rounded-3xl bg-neutral-900 p-7 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-4">
                <div>
                  <div className="text-[#D63A31]">{indicadores[2].icon}</div>
                  <h3 className="mt-5 text-4xl font-black leading-tight">
                    {indicadores[2].value}
                  </h3>
                  <p className="mt-4 text-xs font-black uppercase leading-relaxed tracking-wide text-white/70">
                    {indicadores[2].label}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-8">
                  <div className="text-[#D63A31]">{indicadores[3].icon}</div>
                  <h3 className="mt-5 text-3xl font-black leading-tight">
                    {indicadores[3].value}
                  </h3>
                  <p className="mt-4 text-xs font-black uppercase leading-relaxed tracking-wide text-white/70">
                    {indicadores[3].label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-neutral-950 py-20 text-white">
          <img
            src={bgFaixa}
            alt=""
            className="pointer-events-none absolute right-[-220px] top-0 h-full opacity-[0.06]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal mb-14 max-w-4xl">
              <SectionLabel>Produtos</SectionLabel>
              <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
                Uma plataforma especialista, organizada por necessidades da
                operação.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {produtos.map((produto, index) => (
                <div
                  key={produto.name}
                  className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : index === 2 ? "delay-300" : "delay-400"}`}
                >
                  <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-[#D63A31]/15 blur-2xl transition-all group-hover:bg-[#D63A31]/25" />

                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#FF8B80]">
                    {produto.tag}
                  </p>

                  <h3 className="mt-4 text-xl font-black">{produto.name}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {produto.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-black text-[#FF8B80]">
                    Ver solução
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal grid grid-cols-1 gap-12 items-center lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionLabel>Ecossistema Kria</SectionLabel>
                <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                  Soluções para rodovias, atendimento e vias urbanas.
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 lg:col-span-7">
                A Kria tem soluções completas para CCO, 0800 e ouvidoria,
                conservação, mobile, integração ITS e mídias sociais.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {ecossistema.map((item, index) => (
                <div
                  key={item.name}
                  className={`reveal rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${index === 0
                    ? "delay-100 border-[#D63A31] bg-[#D63A31] text-white shadow-[0_20px_60px_rgba(214,58,49,0.25)]"
                    : index === 1
                      ? "delay-200 border-neutral-100 bg-white text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                      : "delay-300 border-neutral-100 bg-white text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                    }`}
                >
                  <div
                    className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl ${index === 0
                      ? "bg-white/15 text-white"
                      : "bg-[#FFF0ED] text-[#D63A31]"
                      }`}
                  >
                    {index === 0 ? (
                      <Layers className="h-6 w-6" />
                    ) : index === 1 ? (
                      <Headphones className="h-6 w-6" />
                    ) : (
                      <MapPinned className="h-6 w-6" />
                    )}
                  </div>

                  <p
                    className={`text-xs font-black uppercase tracking-[0.16em] ${index === 0 ? "text-white/70" : "text-[#D63A31]"}`}
                  >
                    {item.name}
                  </p>

                  <h3 className="mt-3 text-xl font-black">{item.title}</h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${index === 0 ? "text-white/75" : "text-neutral-600"}`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="clientes"
          className="relative overflow-hidden bg-neutral-950 py-20"
        >
          <img
            src={bgFaixa}
            alt=""
            className="pointer-events-none absolute left-[-180px] top-10 h-[520px] opacity-[0.06]"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,58,49,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-5">
            <div className="reveal mx-auto max-w-4xl text-center">
              <SectionLabel>Clientes</SectionLabel>

              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                Concessionárias que confiam nas soluções Kria.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-white/60">
                Clientes dos produtos Kria em operações de rodovias, mobilidade
                e infraestrutura.
              </p>
            </div>

            <div className="reveal delay-200 relative mt-14 space-y-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

              <MarqueeRow clientes={linha1} direction="right" />
              <MarqueeRow clientes={linha2} direction="left" />
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="relative overflow-hidden bg-white py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal relative overflow-hidden rounded-[2rem] bg-[#D63A31] px-7 py-14 text-center text-white shadow-[0_24px_80px_rgba(214,58,49,0.28)] sm:px-12">
              <img
                src={bgFaixa}
                alt=""
                className="pointer-events-none absolute right-[-180px] top-0 h-full opacity-15"
              />

              <div className="relative mx-auto max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Fale conosco
                </p>

                <h2 className="mt-4 text-xl font-black tracking-tight sm:text-4xl">
                  Identifique a melhor solução com as plataformas Kria.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Analisaremos seus objetivos e ajudaremos a identificar a
                  melhor solução com as plataformas Kria.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="mailto:suporte@kria.com.br"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-black text-[#D63A31] transition-all hover:bg-neutral-100"
                  >
                    <Mail className="h-4 w-4" />
                    suporte@kria.com.br
                  </a>

                  <a
                    href="mailto:suporte@kria.com.br"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-neutral-950 px-6 py-3.5 text-xs font-black text-white transition-all hover:bg-neutral-800"
                  >
                    Enviar mensagem
                    <Send className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-4">
              {[
                {
                  icon: <Headphones className="h-6 w-6" />,
                  title: "Conheça a Kria",
                  content: "+55 (11) 98224-0941",
                },
                {
                  icon: <ArrowRight className="h-6 w-6" />,
                  title: "Atualizações",
                  content: "+55 (11) 97545-0166",
                },
                {
                  icon: <MessageCircle className="h-6 w-6" />,
                  title: "Whatsapp",
                  content: "+55 (11) 98224-0941",
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  content: "suporte@kria.com.br",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`reveal rounded-2xl bg-neutral-900 p-5 text-center text-white shadow-[0_16px_35px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : index === 2 ? "delay-300" : "delay-400"}`}
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/60">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-3 text-xs font-bold text-white/75">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-neutral-400">
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#D63A31]"
              >
                <Squircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-[#D63A31]"
              >
                <Squircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="transition-colors hover:text-[#D63A31]"
              >
                <Squircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-[#D63A31]"
              >
                <Squircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav className="mt-7 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase text-neutral-700 underline">
            <a href="#sobre">Sobre nós</a>
            <a href="#produtos">Serviços</a>
            <a href="#clientes">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>

          <p className="mt-7 text-center text-xs font-semibold uppercase tracking-wide text-neutral-700">
            Rua Vergueiro, 2016 - 3º andar - Vila Mariana, São Paulo - SP.
            04102-000
          </p>

          <div className="mt-7 border-t border-neutral-200 pt-7">
            <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-700">
              Copyright {new Date().getFullYear()} Kria Tecnologia
            </p>
          </div>

          <div className="mt-7 border-t border-neutral-200 pt-5">
            <p className="text-center text-xs text-neutral-700">
              Este site é protegido pelo reCAPTCHA e pelos{" "}
              <a href="#" className="underline">
                Termos de uso
              </a>{" "}
              e{" "}
              <a href="#" className="underline">
                Política de privacidade
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
