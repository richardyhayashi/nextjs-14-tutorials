import PhotoDisplay from "@/components/PhotoDisplay";
import type { PhotoData } from "@/lib/PhotoData";

export default async function Home() {
  const response = await fetch('http://localhost:3500/images', { cache: 'no-store' });
  const images: PhotoData[] = await response.json();

  if (!images?.length) {
    return <h1>No Images to Display!</h1>;
  }

  return (
    <main>
      {images.map(photoData => (
        <PhotoDisplay key={photoData.id} photoData={photoData} />
      ))}
    </main>
  );
}
