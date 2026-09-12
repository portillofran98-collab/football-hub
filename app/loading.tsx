export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-green-400" />

        <h2 className="mt-6 text-2xl font-black">
          CARGANDO...
        </h2>

        <p className="mt-2 text-slate-400">
          Football Hub está preparando los jugadores.
        </p>
      </div>
    </main>
  );
}