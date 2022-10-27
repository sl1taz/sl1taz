import Image from 'next/image'
import React from 'react'
import Profile2 from './profile-transparent.png'
import Theme from '../../components/Toggle/Theme'
import Posts from '../../components/Posts/Posts'
import Menu from '../../components/Menu/Menu'
import Head from 'next/head'



export default function Blog({ data }) {
    return (
        <>
            <Head>
                <title>sl1taz - Blog</title>
            </Head>
            <div className='h-screen  bg-[#000]  overflow-hidden '>
                <main className='py-20 flex flex-col gap-6'>
                    <div className='absolute right-6 top-6'>
                        <Theme />
                    </div>
                    <div className='hidden relative lg:flex w-full h-full max-h-[374px] items-center px-10 gap-6'>
                        <div className='flex items-center justify-center'>
                            <Image src={Profile2} width="350" height="350" alt="Gabriel Ralusi"
                                className='bg-gradient-to-b from-primary to-secondary' />
                        </div>
                        <div className=' h-full flex flex-col items-start justify-between'>
                            <div className='-space-y-6'>
                                <h1 className='text name font-semibold '>Gabriel Ralusi</h1>
                                <h2 className='sl1taz text font-semibold '>sl1taz</h2>
                            </div>
                            <div>
                                <code className='text sl1taz uppercase'>Front-end Developer</code>

                            </div>
                        </div>
                        <div className='hidden absolute right-4 flex-1 lg:flex h-full justify-center items-center duration-500'>
                            <Menu />
                        </div>
                    </div>

                    <div className='home_posts'>
                        <Posts posts={data} />
                    </div>
                </main>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await (await fetch(`${process.env.API_URL}/api/posts/`)).json();
    const data = await res;
    return {
        props: {
            data: data
        },
    };
}
