import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://conceptual-session-project-pixgen.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);
    // console.log(photo);

    return (
        <div>
            <h1 className='text-center text-5xl mt-10 font-bold'>Image Details: <span className='font-semibold block my-2'>{photo.title}</span></h1>
            <Card className='border rounded-xl p-5 my-10'>
                <div className='relative w-full aspect-square'>
                    <Image src={photo.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={photo.title}
                        className='object-cover rounded-xl'
                    />
                    <Chip className='absolute right-2 top-2' size='sm'>{photo.category}</Chip>
                </div>
                <h1 className='text-2xl font-bold'>{photo.title}</h1>
                <p className='text-xl font-medium'><span className='text-blue-700'>Prompt:</span> {photo.prompt}</p>

                <div className='flex items-center gap-5 my-3 w-full'>
                    <Link href={'/all-photos'} className='flex-1'>
                    <Button className={'bg-blue-100 text-blue-800 font-bold w-full'}>Back To All Photos</Button>
                </Link>
                <Link href={'/'} className='flex-1'>
                    <Button className={'bg-green-100 text-green-800 font-bold w-full'}>Home</Button>
                </Link>
                </div>
            </Card>
        </div>
    );
};

export default PhotoDetailsPage;