
import Link from 'next/link';
import Card from './Card';
import Image from 'next/image';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const Navigation = () => {
  return (
    <nav className='w-full bg-white border-b-4 border-black'>
      <div className='flex justify-between gap-2 p-3'>
        <div className='h-2 flex gap-2'>
            <div className='mt-[0.5px]'>
                <Link href={'/'}>
                    <Image src="/vansaarthi.svg" alt="" height={45} width={45}></Image>
                    {/* <img src="\Vansaarthi.png" alt="" height={40} width={40} /> */}
                </Link>

            </div>
            <div className='text-2xl p-2 font-semibold text-[#3BDE3B]'>Vansarthi</div>
        </div>
        <div>
            <div className='flex gap-2 pt-2'>
            <Link href="/" className='py-1 px-2'>Home</Link>
            <Link href="/about" className='py-1 px-2'>About</Link>
            <Link href="/projects" className='py-1 px-2'>Projects</Link>     
            <Link href="/volunteer" className='py-1 px-2'>Volunteer</Link>
            
            </div>
        </div>
        <div className='flex gap-2'>
            <div className=''>
                    <SignedOut>
                    <div className='py-2 px-6'>
                        <SignInButton  />
                    </div>
                    </SignedOut> 
                    <SignedIn>
                        <div className='py-2 px-6'>
                            <UserButton />
                        </div>
                    </SignedIn>
            </div>
            <div className=''>
                <Card backgroundColor="bg-[#ff615e]" textColor="text-white"><button className='py-2 px-5'>Donate</button></Card>
            </div>
        </div> 
        </div>
    </nav>
  );
}

export default Navigation;