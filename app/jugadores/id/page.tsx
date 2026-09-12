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

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: player, error } = await supabase
    .from("players")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !player) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-black">Jugador no encontrado</h1>

          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-green-400 px-6 py-3 font-bold text-slate-950"
          >
            VOLVER AL INICIO
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-16">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          FOOTBALL<span className="text-green-400">HUB</span>
        </Link>

        <Link
          href="/"
          className="rounded-full border border-slate-700 px-5 py-2 text-sm font-bold transition hover:border-green-400 hover:text-green-400"
        >
          ← VOLVER
        </Link>
      </nav>

      {/* Perfil */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-16">
        
        {/* Imagen */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <img
            src={player.image_url}
            alt={player.name}
            className="h-full min-h-[500px] w-full object-cover"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold tracking-[0.2em] text-green-400">
            {player.team.toUpperCase()}
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            {player.name}
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">POSICIÓN</p>
              <p className="mt-2 text-xl font-bold">
                {player.position}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">NACIONALIDAD</p>
              <p className="mt-2 text-xl font-bold">
                {player.nationality}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-black">
              SOBRE EL JUGADOR
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              {player.description}
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block w-fit rounded-full bg-green-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-green-300"
          >
            ← VER TODOS LOS JUGADORES
          </Link>
        </div>
      </section>
    </main>
  );
}