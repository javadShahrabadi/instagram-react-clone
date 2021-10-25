import faker from "faker";
import { useState, useEffect } from "react";
function suggestion() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestion = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestion);
  }, []);
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h4 className='text-sm font-bold text-gray-400'>Suggest for you</h4>
        <button className='font-semibold text-gray-600'>See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          className='flex items-center justify-between mt-3'
          key={profile.id}
        >
          <img
            src={profile.avatar}
            alt={profile.username}
            className='w-10 h-10 rounded-full border p-[2px] cursor-pointer'
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h className='text-sm text-gray-400 truncate'>
              Works at {profile.company.name}
            </h>
          </div>
          <button className='text-xs text-blue-400'>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default suggestion;
