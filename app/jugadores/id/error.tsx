"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-black text-red-400">
          ¡Ups!
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          No pudimos cargar este jugador
        </h2>

        <p className="mt-4 text-slate-400">
          Ocurrió un problema al obtener la información. Intenta nuevamente.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-green-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105"
        >
          INTENTAR DE NUEVO
        </button>
      </div>
    </main>
  );
}