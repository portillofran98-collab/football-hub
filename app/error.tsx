"use client";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-green-400">
          FOOTBALL HUB
        </p>

        <h1 className="mt-4 text-6xl font-black">
          ¡UPS!
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          Algo salió mal
        </h2>

        <p className="mt-4 text-slate-400">
          Ocurrió un problema al cargar esta página. Intenta nuevamente.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-green-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-green-300"
        >
          INTENTAR DE NUEVO
        </button>
      </div>
    </main>
  );
}