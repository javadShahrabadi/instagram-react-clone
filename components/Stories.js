import React from "react";
import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const [suggestions, setSuggestion] = useState([]);
  useEffect(() => {
    const suggestions_array = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestion(suggestions_array);
  }, []);
  return (
    <div className=' flex space-x-2 p-6 bg-white mt-8 border-gray-200 border border-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 '>
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
