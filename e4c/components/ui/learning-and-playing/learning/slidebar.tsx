"use client";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname } from "next/navigation";
import { fetcher } from "@/api/fetcher";
import useSWR from "swr";
import CircleLoading from "@/components/ui/loading/circle-loading";
import { API_TOPIC_LIST } from "@/constants/api";

type SidebarProps = {
  id: number;
  slug: string;
};
const Sidebar = (props: SidebarProps) => {
  const pathname = usePathname();

  const { data, error, isLoading } = useSWR(
    `${API_TOPIC_LIST}/${props.id}`,
    fetcher
  );

  if (error) return <div>Error</div>;

  return (
    <>
      <div className="no-scrollbar absolute overflow-auto w-24 duration-200 ease-in-out z-10 flex-col inset-y-0 border border-y-0 border-r-2 border-colorGrey2 shadow-xl bg-white  hidden xl:flex">
        <div className="flex space-y-1 flex-col justify-center items-center py-4">
          <Tooltip title="Trang chủ" placement="right" className="w-16 h-16">
            <IconButton sx={{ p: 0 }}>
              <Link href={`/`}>
                <HomeIcon sx={{ fontSize: 35 }} />
              </Link>
            </IconButton>
          </Tooltip>
          {data &&
            data.result.map((topic: Topic, index: number) => (
              <div
                key={index}
                className={`w-full flex justify-center hover:bg-gray-200 py-2 ${
                  pathname === `/learning/${props.slug}/${topic.id}` &&
                  "bg-gray-200"
                }`}
              >
                <Tooltip
                  title={topic.name}
                  placement="right"
                  className="w-16 h-16"
                >
                  <IconButton sx={{ p: 0 }}>
                    <Link href={`/learning/${props.slug}/${topic.id}`}>
                      <Avatar
                        className="w-16 h-16"
                        src={`https://dinoenglish.app/_next/image?url=%2Fassets%2Fmedia%2Ftopic%2Fimage%2F${topic.img}.png&w=1920&q=75`}
                      />
                    </Link>
                  </IconButton>
                </Tooltip>
              </div>
            ))}
        </div>
        {isLoading && <CircleLoading />}
      </div>
    </>
  );
};

export default Sidebar;
