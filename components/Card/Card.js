import React from 'react'
import Link from 'next/link';
import moment from 'moment';
export default function Card(props) {
    const posts = props?.posts
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
    const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    
    return (
        <>
            {posts.map((post) =>
                <div key={post._id} className='card lg:max-w-[500px] max-h-[500px] min-h-[300px]'>
                    <div className='post_category'>
                        <Link href={`/blog/category/${slug(post.category)}`} className={color(post.category_color)}>{post.category}</Link>
                        <span className='text-text text-sm font-light italic'>{moment(post.time).format(" MMMM, D")}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}  className='cursor-pointer max-w-[300px]  text-center font-light hover:scale-110 hover:font-semibold text-xl '>{post.title}</Link>
                </div>
            )}
        </>
    )
}
// {`/blog/${slug(post.title)}`}