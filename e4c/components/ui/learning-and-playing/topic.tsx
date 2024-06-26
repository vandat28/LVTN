"use client";
import { Dialog, DialogContent } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

type TopicProps = {
  color: string;
  topic: Topic;
  slug: string;
};

export default function Topic(props: TopicProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`bg-${props.color}-100 p-4 mb-4 md:mb-8 rounded-2xl shadow-lg flex items-center justify-between transform transition-transform duration-300 hover:-translate-y-2  hover:shadow-2xl w-full  md:w-[45%] lg:w-[30%] cursor-pointer`}
      >
        <div className="ml-4">
          <h3 className="text-lg font-semibold ">{props.topic.name}</h3>
          <p className="text-gray-600 text-sm"> {props.topic.label}</p>
        </div>
        <div className="bg-white p-2 rounded-full">
          <img
            src={`https://dinoenglish.app/_next/image?url=%2Fassets%2Fmedia%2Ftopic%2Fimage%2F${props.topic.img}.png&w=1920&q=75`}
            className="w-14 md:w-20"
          />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        disableScrollLock={true}
      >
        <DialogContent>
          <div className="p-12 w-80 flex flex-col items-center">
            <img
              src={`https://dinoenglish.app/_next/image?url=%2Fassets%2Fmedia%2Ftopic%2Fimage%2F${props.topic.img}.png&w=1920&q=75`}
              className="w-14 md:w-20"
            />
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold ">{props.topic.name}</h3>
              <p className="text-gray-600 text-sm font-medium">
                {props.topic.label}
              </p>
            </div>
            <div className="mt-8 text-center w-full">
              <Link
                href={`/learning/${props.slug}/${props.topic.id}`}
                className="block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-md px-5 py-2.5 text-center "
              >
                Học
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
