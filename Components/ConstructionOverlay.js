import Image from 'next/image';
import React from 'react';

export default function ConstructionOverlay() {
  return (
    <div className="fixed inset-0 flex backdrop-blur-md justify-center w-screen h-screen">
        <div>
            <Image src='/images/under-construction.png' width={190} height={132} />
        </div>
        </div>
  );
}
