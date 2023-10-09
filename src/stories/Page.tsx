import React from 'react';

import { Header } from './Header';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="font-['Nunito_Sans',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif] text-[14px] leading-[24px] px-[20px] py-[48px] mx-[auto] my-[0] max-w-[600px] text-[#333]">
        <h2 className='font-bold text-[32px] leading-none mt-[0] mx-[0] mb-[4px] inline-block align-top'>Pages in Storybook</h2>
        <p className='mx-[0] my-[1em]'>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p className='mx-[0] my-[1em]'>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul className='pl-[30px] mx-[0] my-[1em]'>
          <li className='mb-[8px]'>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li className='mb-[8px]'>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p className='mx-[0] my-[1em]'>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="text-[13px] leading-[20px] mt-[40px] mb-[40px]">
          <span className="inline-block rounded-[1em] text-[11px] leading-[12px] font-bold bg-[#e7fdd8] text-[#66bf3c] px-[12px] py-[4px] mr-[10px] align-top">Tip</span> Adjust the width of the canvas with the{' '}
          <svg className='inline-block h-[12px] w-[12px] mr-[4px] align-top mt-[3px]' width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path className='fill-[#1ea7fd]'
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
