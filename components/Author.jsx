import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <>
    <div className="flex justify-center -mb-20 z-40 relative">
        <div className="absolute margin-auto -top-14">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={author.name}
              height="100"
              width="100"
              className="align-middle rounded-full"
              src={author.photo.url}
              />
          </div>
      </div>
    <div className="text-center align-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  </>
);

export default Author;

