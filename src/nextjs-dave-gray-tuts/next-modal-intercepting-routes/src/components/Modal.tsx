'use client';

import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from './ui/dialog';
import { useRouter } from 'next/navigation';

export function Modal({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  const handleOpenChang = () => {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChang}>
      <DialogOverlay>
        <DialogContent className='overflow-y-hidden'>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};