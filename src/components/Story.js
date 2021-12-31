import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { FaRegCommentDots } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle, FiCircle } from "react-icons/fi";

const storyCommentUrl = "https://news.ycombinator.com/item?id=";

const Story = ({ storyId, index, hideStory }) => {
  const [story, setStory] = useState({});
  const [read, setRead] = useState(false);

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, []);

  return story && story.url ? (
    <div
      className={`${
        hideStory === true && read === true ? "hidden" : "block"
      } p-2 mb-5 border-t-1 border-gray-200 w-full
        md:border-l-1 md:border-r-1 md:mb-0
        last-of-type:mb-8 md:last-of-type:border-b-1`}
    >
      <div className="flex mt-2 md:mb-2 ">
        <p className="text-gray-400 mr-2">{index + 1}.</p>

        <div className="flex justify-between w-full flex-col md:flex-row">
          <div>
            <h1 className={`mb-1 m-0 ${read ? "text-gray-300" : ""}`}>
              {story.title}
            </h1>

            <p className="text-gray-400 text-sm">by {story.by}</p>
          </div>
          <div
            className="flex gap-5 items-center justify-center w-full
           md:justify-end md:items-center md:w-1/4 md:mr-5"
          >
            <button
              className="text-gray-500 border-1 rounded-md p-1 flex
              items-center justify-between"
              onClick={() => setRead((prev) => !prev)}
              type="button"
              href={story.url}
            >
              {read ? (
                <FiCircle className="mr-2" size={18} />
              ) : (
                <FiCheckCircle className="mr-2" size={18} />
              )}
              {read ? "Unread" : "Read"}
            </button>

            <a
              className="text-gray-500 border-1 rounded-md p-2"
              href={story.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setRead((prev) => !prev)}
            >
              <FiExternalLink size={18} />
            </a>

            <a
              className="text-gray-500 border-1 rounded-md p-2"
              href={`${storyCommentUrl + story.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaRegCommentDots size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Story;
