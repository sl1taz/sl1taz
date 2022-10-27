import Head from 'next/head'
import Card from '../Card/Card'
export default function Posts(props) {
    const posts = props.posts;
    return (
        <div className=''>
            <main className=''>
                <div className='w-full px-10 h-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full card'>
                        <Card posts={posts} />
                    </div>

                </div>

            </main>

        </div>
    )
}
