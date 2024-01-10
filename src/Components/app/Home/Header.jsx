import { Headline, detailsCard } from '@/src/constant/home/HeaderPart';
import React from 'react';

const Header = () => {
  return (
    <div>
      <h1>{Headline}</h1>
      {
        detailsCard?.map((items) => {
          return(
            <>
              <h1>{items?.title}</h1>
            </>
          )
        })
      }
    </div>
  );
};

export default Header;