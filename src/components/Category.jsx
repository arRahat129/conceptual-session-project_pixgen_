import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {

    const res = await fetch("https://conceptual-session-project-pixgen.vercel.app/category.json");
    const categories = await res.json();
    // console.log(categories);

    return (
        <div className='mb-5 space-x-3'>
            <Link href={`?category`}>
                <Button size='sm' variant='outline'>All</Button>
            </Link>
            {
                categories.map(category => <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}>
                    <Button size='sm' variant='outline'>{category.name}</Button>
                </Link>)
            }
        </div>
    );
};

export default Category;