import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen">

      {/* Linke Seite */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-red-700 p-8">
        <div className="text-center">
          {/* Text mit Farbverlauf und benutzerdefinierter Unterstreichung */}
          <h1 className="text-[8rem] underline font-bold text-white bg-clip-text bg-gradient-to-r from-white to-teal-500 underline-custom">
            Stübi Digital
          </h1>
        </div>
      </div>

      {/* Rechte Seite: Bild */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative  bg-white">
        <div className="relative w-1/2 h-1/2">  {/* Bild auf halbe Breite und Höhe begrenzen */}
          <Image
            src="/OIP.jfif"  // Ersetze mit deinem Bildpfad
            alt="Stübi"
            width={1400}  // Setze eine feste Breite
            height={500} // Setze eine feste Höhe
          />
        </div>
      </div>

    </main>
  );
}
