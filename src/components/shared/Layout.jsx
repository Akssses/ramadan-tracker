import { useState } from 'react';
import Cover from './Cover';

function Layout({ children }) {

  return (
    <div>
      <Cover />
      <div className="flex flex-col flex-1 w-full overflow-y-auto container">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
