// src/store/youtubeApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube.googleapis.com/youtube/v3",
  }),
  endpoints: (builder) => ({
    getPopularVideos: builder.query({
      query: () => `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`,
    }),
    getVideoDetails: builder.query({
      query: (videoId) => `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`,
    }),
    getChannelDetails: builder.query({
      query: (channelId) => `channels?part=snippet%2Cstatistics&id=${channelId}&key=${API_KEY}`,
    }),
    getRelatedVideos: builder.query({
      query: (channelId) => `search?part=snippet&channelId=${channelId}&type=video&maxResults=50&key=${API_KEY}`,
    }),
    getComments: builder.query({
      query: (videoId) => `commentThreads?part=snippet&videoId=${videoId}&maxResults=50&key=${API_KEY}`,
    }),
    searchVideos: builder.query({
      query: (searchQuery) => `search?part=snippet&q=${searchQuery}&maxResults=50&type=video&key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetPopularVideosQuery,
  useGetVideoDetailsQuery,
  useGetChannelDetailsQuery,
  useGetRelatedVideosQuery,
  useGetCommentsQuery,
  useSearchVideosQuery,
} = youtubeApi;