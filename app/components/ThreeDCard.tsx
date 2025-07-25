"use client";

import { CardBody, CardContainer, CardItem } from "./3d-card";

interface ThreeDCardProps {
  title: string;
  description: string;
  date?: string;
  imgsrc: string;
  delete?: () => void;
}

export function ThreeDCard({ title, description, date, imgsrc, delete: handleDelete }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imgsrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            {date}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            onClick={handleDelete}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer">
            Delete
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
