import PhotoDisplay from '@/components/PhotoDisplay';
import type { PhotoData } from '@/lib/PhotoData';
import { Modal } from '@/components/Modal';

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({ params: { photoId } }: Props) {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: 'no-store',
  });

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
}
