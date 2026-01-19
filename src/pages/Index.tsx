import DomeGallery from "@/components/DomeGallery";

const Index = () => {
  return (
    <div className="w-screen h-screen bg-background overflow-hidden">
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