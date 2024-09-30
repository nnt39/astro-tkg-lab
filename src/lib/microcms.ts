//SDK利用準備
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//Blog
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "blogs",
    queries: { limit: 40 },
  });
};
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

//Live
export type Live = {
  live: any;
  title: string; 
  artist: string;
  date: string;
  venue: string;
};

// ライブイベントのレスポンスデータ型
export type LiveResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Live[];
};


// APIの呼び出し
export const getLives = async (queries?: MicroCMSQueries) => {
  const defaultQueries = { ...queries, limit: 100 }; // Set the default limit to 100
  return await client.get<LiveResponse>({
    endpoint: "lives",
    queries: defaultQueries,
  });
};
export const getLiveDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Live>({
    endpoint: "lives",
    contentId,
    queries,
  });
};
