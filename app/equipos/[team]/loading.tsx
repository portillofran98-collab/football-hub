export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-green-400" />

        <p className="mt-6 text-lg font-bold text-slate-300">
          Cargando jugadores...
        </p>
      </div>
    </main>
  );
}