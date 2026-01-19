import DomeGallery from "@/components/DomeGallery";

const Index = () => {
  return (
    <div className="w-screen h-screen bg-background overflow-hidden relative">
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
        minRadius={350}
        maxVerticalRotationDeg={0}
        segments={30}
        dragDampening={3}
        grayscale
      />
    </div>
  );
};

export default Index;