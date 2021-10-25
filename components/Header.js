import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalState";

function Header() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between bg-white max-w-6xl items-center mx-5 xl:mx-auto'>
        <div className='relative w-24 h-24 hidden lg:inline-grid'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-10 h-10 inline-grid lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>

            <input
              type='text'
              placeholder='search'
              className='bg-gray-50 w-full block pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md text-gray-400'
            />
          </div>
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='w-10 h-10 md:hidden cursor-pointer' />
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 text-xs -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white animate-pulse'>
              3
            </div>
          </div>

          <PlusCircleIcon className='navBtn' onClick={() => setOpen(true)} />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          <img
            src='/profile-avatar.jpg'
            className='h-10 rounded-full cursor-pointer'
            alt='profile-pic'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
