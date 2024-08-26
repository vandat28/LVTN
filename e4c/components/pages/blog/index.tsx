"use client";
import { fetcher } from "@/api/fetcher";
import BlogCard from "@/components/ui/blog/blog-card";
import CircleLoading from "@/components/ui/loading/circle-loading";
import { API_BLOG_LIST } from "@/constants/api";
import useSWR from "swr";

export default function Blog() {
  const { data, error, isLoading } = useSWR<Blog[]>(
    `${API_BLOG_LIST}`,
    fetcher
  );

  if (error) return <div>error</div>;

  return (
    <>
      <div className="flex flex-col md:px-20">
        {isLoading && <CircleLoading />}
        <div className="flex flex-col items-center md:flex-row md:gap-[10%] lg:gap-[5%] md:flex-wrap">
          {data &&
            data.map((blog: Blog, index: number) => (
              <BlogCard key={index} blog={blog} />
            ))}
        </div>
      </div>
    </>
  );
}
