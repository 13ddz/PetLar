import { Button } from "./ui/button";
import { ImageWithFallback } from "./assets/ImageWithFallback";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff6f2] via-[#fffaf7] to-background py-1 md:py-2">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(231,111,81,0.16),_transparent_60%)]" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-2 lg:grid-cols-[1.1fr_0.9fr] lg:gap-2 items-center">
          <div className="flex flex-col gap-1 self-start pt-16 lg:pt-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              Cuidados premium para pets felizes
            </span>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
              Tudo que seu pet merece em um só lugar.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Encontre rações premium, brinquedos divertidos, serviços de cuidado e a chance de dar um lar cheio de amor a pets que precisam de você.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-6 shadow-[0_16px_30px_rgba(231,111,81,0.22)]" onClick={() => onNavigate("products")}>
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 bg-white/80 px-6" onClick={() => onNavigate("adoption")}>
                Adotar um Pet
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-3 rounded-[1.8rem] bg-gradient-to-br from-primary/15 via-transparent to-[#f4b183]/20 blur-2xl" />
            <div className="relative aspect-[4/4.15] overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/40 p-1.5 shadow-[0_24px_60px_rgba(128,77,65,0.12)] backdrop-blur-sm">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YzliNzRzdTczM2dqNjBxb2RxYXY0ajdzb2NiZGhudzZjbG9nbTJlMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif"
                alt="Cachorro e gato brincando juntos"
                className="h-full w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
