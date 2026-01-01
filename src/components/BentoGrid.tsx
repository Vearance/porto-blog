import { cn } from "@/libs/cn";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Skeleton } from "./ui/skeleton";

export const BentoGrid: Component<ComponentProps<"div">> = (props) => {
  return (
    <div
      class={cn(
        "grid sm:auto-rows-[18rem] grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto",
        props.class,
      )}
    >
      {props.children}
    </div>
  );
};

export type BentoGridItemProps = {
  class?: string;
  isPlaceHolder?: boolean;
  icon?: JSX.Element;
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  index?: number;
};

export const BentoGridItem: Component<BentoGridItemProps> = (props) => {
  const isEven = (props.index ?? 0) % 2 === 0;
  
  return (
    <div
      class={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/20 bg-white border border-transparent flex gap-4",
        props.isPlaceHolder && "hidden sm:flex",
        isEven ? "flex-row" : "flex-row-reverse",
        props.class,
      )}
    >
      <div class={cn(
        "shrink-0 flex items-center justify-center w-24 transition-transform duration-200",
        isEven ? "group-hover/bento:rotate-3" : "group-hover/bento:-rotate-12"
      )}>
        {props.header}
      </div>
      <div
        class={cn(
          "flex-1 transition duration-200 flex flex-col justify-between",
          isEven ? "group-hover/bento:translate-x-2" : "pl-4 group-hover/bento:-translate-x-2",
        )}
      >
        <div>
          <div class="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 flex items-center gap-2">
            {props.title}
            {props.icon}
          </div>
          <div class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {props.description}
          </div>
        </div>
        {props.footer}
      </div>
    </div>
  );
};

export const BentoSkeleton: BentoGridItemProps = {
  isPlaceHolder: true,
  header: <Skeleton class="w-full h-full m-auto bg-neutral-200" />,
  title: <Skeleton class="w-24 h-4 bg-neutral-200" />,
  description: <Skeleton class="w-full h-4 bg-neutral-200" />,
  class: "bg-neutral-50",
};

export const BentoSkeletonWide: BentoGridItemProps = {
  isPlaceHolder: true,
  header: <Skeleton class="w-full h-full m-auto bg-neutral-200" />,
  title: <Skeleton class="w-24 h-4 bg-neutral-200" />,
  description: <Skeleton class="w-full h-4 bg-neutral-200" />,
  class: "bg-neutral-50 sm:col-span-2",
};