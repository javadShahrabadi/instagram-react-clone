function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='/profile-avatar.jpg'
        alt=''
        className='border rounded-full p-[2px] w-16 h-16'
      />
      <div className='flex-1 mx-4'>
        <h3 className='font-bold'>John Doe</h3>
        <h5 className='text-sm text-gray-400'>Welcome to instagram</h5>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
