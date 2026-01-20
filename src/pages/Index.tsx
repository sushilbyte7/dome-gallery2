import DomeGallery from "@/components/DomeGallery";
import { Heart } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const Index = () => {
  return (
    <div className="w-screen h-screen bg-background overflow-hidden relative">
      <AnimatedShaderBackground />
      <div
        className="absolute top-8 left-8 z-10 uppercase tracking-[0.3em] font-light"
        style={{
          fontFamily: 'ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          fontSize: 'clamp(.75rem, 1.5vw, 1rem)',
          color: 'hsl(var(--foreground) / .7)'
        }}
      >
        GALLERY
      </div>
      <DomeGallery
        fit={0.6}
        minRadius={325}
        maxVerticalRotationDeg={0}
        segments={26}
        dragDampening={3}
        grayscale={true}
      />

      <footer className="absolute bottom-0 left-0 right-0 z-50 flex justify-center py-12">
        <p className="text-muted-foreground/80 text-[12.8px] flex items-center gap-1" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Created with
          <Heart className="w-4 h-4 fill-primary text-primary" />
          by
          <span className="text-primary font-medium">Chandan</span>
        </p>
      </footer>



    </div>
  );
};

export default Index;