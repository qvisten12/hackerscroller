import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [hideStory, setHideStory] = useState(false);

  const { count } = useInfiniteScroll();

  useEffect(() => {
    const getData = async () => {
      const data = await getStoryIds();
      setStoryIds(data);
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container flex flex-col mx-auto max-w-6xlxl md:px-4 ">
        <button
          className="p-2 border-1 border-gray-300 rounded-md mt-24 mb-8 w-44 self-center md:self-baseline"
          onClick={() => setHideStory((prev) => !prev)}
        >
          {hideStory ? "Show read stories" : "Hide read stories"}
        </button>

        {storyIds.slice(0, count).map((storyId, i) => (
          <Story
            hideStory={hideStory}
            key={storyId}
            index={i}
            storyId={storyId}
          />
        ))}
      </div>
    </>
  );
};
