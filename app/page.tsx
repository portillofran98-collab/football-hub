import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Player = {
  id: number;
  name: string;
  slug: string;
  team: string;
  position: string;
  nationality: string;
  image_url: string;
  description: string;
};

export default async function Home() {
  const { data: players, error } = await supabase
    .from("players")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Error cargando los jugadores.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-16">
        <h1 className="text-2xl font-black tracking-tight">
          FOOTBALL
          <span className="text-green-400">HUB</span>
        </h1>

        <div className="hidden gap-8 text-sm md:flex">
          <a
            href="#jugadores"
            className="transition hover:text-green-400"
          >
            Jugadores
          </a>

          <a
            href="#sobre"
            className="transition hover:text-green-400"
          >
            Sobre nosotros
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[500px] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-green-400">
          THE WORLD OF FOOTBALL
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          EL FÚTBOL SE VIVE
          <br />
          CON <span className="text-green-400">PASIÓN</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Descubre algunos de los jugadores más importantes y emocionantes
          del fútbol mundial.
        </p>

        <a
          href="#jugadores"
          className="mt-8 rounded-full bg-green-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-green-300 hover:scale-105"
        >
          VER JUGADORES
        </a>
      </section>

      {/* Players */}
      <section
        id="jugadores"
        className="bg-slate-900 px-6 py-20 md:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="font-bold text-green-400">
              ESTRELLAS
            </p>

            <h2 className="mt-2 text-4xl font-black">
              JUGADORES DESTACADOS
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {players?.map((player: Player) => (
              <Link
                href={`/jugadores/${player.id}`}
                key={player.id}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-green-400"
              >
                {/* FOTO DEL JUGADOR */}
                <div className="h-64 overflow-hidden bg-slate-800">
                  <img
                    src={player.image_url}
                    alt={player.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* INFORMACIÓN */}
                <div className="p-6">
                  <p className="text-sm font-bold text-green-400">
                    {player.team}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {player.name}
                  </h3>

                  <div className="mt-4 flex justify-between text-sm text-slate-400">
                    <span>{player.position}</span>

                    <span>{player.nationality}</span>
                  </div>

                  <p className="mt-5 text-sm font-bold text-white transition group-hover:text-green-400">
                    VER PERFIL →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section
        id="sobre"
        className="bg-slate-950 px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-black">
          SOBRE <span className="text-green-400">FOOTBALL HUB</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-400">
          Football Hub es un espacio dedicado a los amantes del fútbol.
          Descubre información sobre algunos de los mejores jugadores del
          mundo y conoce más sobre sus carreras.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-center text-slate-500">
        <p>
          © 2026 Football Hub — Proyecto creado con Next.js y Supabase.
        </p>
      </footer>
    </main>
  );
}