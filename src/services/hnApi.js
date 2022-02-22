import { selectFields } from "../utils/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const res = await fetch(`${storyUrl + storyId}.json`);
  let data = await res.json();
  data = selectFields(data);

  return data;
};

export const getStoryIds = async () => {
  const res = await fetch(newStoriesUrl);
  const data = await res.json();

  return data;
};
