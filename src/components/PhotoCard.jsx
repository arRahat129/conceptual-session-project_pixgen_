import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa6';

const PhotoCard = ({ photo }) => {
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    className='object-cover rounded-xl'
                />
                <Chip className='absolute right-2 top-2' size='sm'>{photo.category}</Chip>
            </div>

            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>

            <div className='flex gap-5'>
                <div className='flex items-center gap-2'>
                    <FaHeart className='text-red-500' />
                    <p>{photo.likes}</p>
                </div>

                <Separator orientation='vertical' />

                <div className='flex items-center gap-2'>
                    <FaDownload className='text-blue-900' />
                    <p>{photo.likes}</p>
                </div>
            </div>

            <Button variant='outline' className={'w-full'}>View Details</Button>
        </Card>
    );
};

export default PhotoCard;