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

export default async function TeamPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team } = await params;

  // Convierte Real-Madrid en Real Madrid
  const teamName = decodeURIComponent(team).replace(/-/g, " ");

  const { data: players, error } = await supabase
    .from("players")
    .select("*")
    .eq("team", teamName);

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
        <Link href="/" className="text-2xl font-black tracking-tight">
          FOOTBALL<span className="text-green-400">HUB</span>
        </Link>

        <Link
          href="/"
          className="rounded-full border border-slate-700 px-5 py-2 text-sm font-bold transition hover:border-green-400 hover:text-green-400"
        >
          ← VOLVER
        </Link>
      </nav>

      {/* Header */}
      <section className="px-6 py-16 text-center md:px-16">
        <p className="text-sm font-bold tracking-[0.3em] text-green-400">
          EQUIPO
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          {teamName}
        </h1>

        <p className="mt-6 text-slate-400">
          Jugadores disponibles en Football Hub.
        </p>
      </section>

      {/* Players */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          {players && players.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {players.map((player: Player) => (
                <Link
                  href={`/jugadores/${player.id}`}
                  key={player.id}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-green-400"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={player.image_url}
                      alt={player.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-bold text-green-400">
                      {player.position}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {player.name}
                    </h2>

                    <p className="mt-3 text-slate-400">
                      {player.nationality}
                    </p>

                    <p className="mt-5 font-bold transition group-hover:text-green-400">
                      VER PERFIL →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-3xl font-black">
                No encontramos jugadores
              </h2>

              <p className="mt-4 text-slate-400">
                Actualmente no hay jugadores registrados para este equipo.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}