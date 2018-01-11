import Link from 'next/link';
import MainTopLayout from '../components/navbar/mainTopLayout';

import React from 'react';

const Index = () => (

  <div>

    <MainTopLayout />

    <Link href="/about">
      <a>About Link</a>
    </Link>

    <p>Hello Next.js</p>
  </div>

)

export default Index;