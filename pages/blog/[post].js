import { useRouter } from 'next/router';
import React from 'react'
import Menu from '../../components/Menu/Menu'
import moment from 'moment';
import Theme from '../../components/Toggle/Theme';
import Link from 'next/link';
import Head from 'next/head';


// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/api/posts/`);
  const data = await response.json();
  const paths = data.map((res) => {
    return {
      params: {
        post: `${res.slug}`,

      },
    };
  });
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `${process.env.API_URL}/api/posts/${params.post}`
  );
  const post = await data.json();
  return {
    props: { post, params },
  }
}

export default function Post({ post, params }) {
  const router = useRouter();
  const metaUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${router.asPath}`
  const color = (c) => {
    let color = '';
    switch (c) {
      case 'css':
        color = 'text-blue-500';
        break;
      case 'html':
        color = 'text-orange-500';
        break;
      case 'js':
        color = 'text-yellow-500';
        break;
      case 'react':
        color = 'text-cyan-500';
        break;
      case 'next':
        color = 'text-blue-700';
        break;
      case 'linux':
        color = 'text-orange-500';
        break;
      case 'docker':
        color = 'text-blue-500';
        break;
      case 'php':
        color = 'text-purple-500';
        break;
    }

    return color;
  }
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{post.title} - sl1taz</title>
        <link rel="shortcut icon" href="https://files.suscitar.net/madchad/madchad_logo.png" />
        <meta property="og:title" content="sl1taz" />
        <meta property="og:site_name" content={post.title} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:description"
          content={post.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://files.suscitar.net/madchad/madchad_logo.png" />
      </Head>
      <div className='h-screen bg-[#000] overflow-hidden'>
        <div className='fixed top-1 left-1/2 transform -translate-x-1/2 text-xl text-dark dark:text-white  z-50'>
          <Link href={'/blog'} className="text-dark dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#linear)" className="w-8 h-8 ">
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#05a" />
                  <stop offset="100%" stopColor="#0a5" />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </Link>
        </div>
        <main className='w-full p-10 bg-dark dark:bg-light text border'>
          <div className='absolute right-12 top-12'>
            <Theme />
          </div>
          <div className=' h-full bg-light dark:bg-dark  p-4 lg:p-10 grid grid-cols-5'>
            <div className='hidden lg:block'>
              <Menu />
            </div>
            <div className='relative col-span-5 lg:col-span-3 flex-1 flex justify-center overflow-y-scroll h-full'>
              <div className='absolute top-0 lg:-top-4 flex items-center justify-start w-full gap-2'>
                <div className='fixed'>
                  <span className={color(post.category_color)}>{post.category}</span>
                  <span> / </span>
                  <span>{moment(post.time).format(" MMMM, D")}</span>
                </div>
              </div>
              <div className='pt-10'>
                <article className='prose'>
                  <h1 className='text'>{post.title}</h1>
                  <p className='text first-letter:text-5xl first-letter:font-semibold'>{post.content}</p>
                  <p className='text first-letter:text-5xl first-letter:font-semibold'>{post.content}</p>
                  <p className='text first-letter:text-5xl first-letter:font-semibold'>{post.content}</p>
                  <p className='text first-letter:text-5xl first-letter:font-semibold'>{post.content}</p>
                </article>
              </div>
            </div>
            <div className='hidden  relative justify-end lg:flex '>
              <Menu />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

