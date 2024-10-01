import React from 'react';
import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Arcived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
