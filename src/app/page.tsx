export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-olive-green)] text-[var(--color-bone)]  px-6 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide [font-family:var(--font-satoshi)]">
          <span className="text-[var(--color-brushed-gold)]">SIKOYO</span> is
          Coming Soon
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto [font-family:var(--font-spectral)] text-[var(--color-bone)]">
          For the woman who believes in the power of the perfect accessory —
          timeless gold pieces designed to turn simple into stunning.
        </p>
      </div>

      <footer className="mt-8 text-sm text-[var(--color-bone)] opacity-80 text-center font-inter">
        <p>
          Follow us on{" "}
          <a
            href="https://www.instagram.com/sikoyojewelry/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--color-dusty-rose)] transition"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://www.tiktok.com/@sikoyojewelry/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--color-dusty-rose)] transition"
          >
            TikTok
          </a>{" "}
          for sneak peeks & launch updates.
        </p>
      </footer>
    </main>
  );
}
