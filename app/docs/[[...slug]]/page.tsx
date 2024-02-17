import { TableOfContents } from "@/lib/toc";

import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { DocsPager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function DocPage() {
  const toc: TableOfContents = {
    items: [
      {
        title: "Topic 1",
        url: "#",
      },
      {
        title: "Topic 2",
        url: "#",
      },
      {
        title: "Topic 3",
        url: "#",
        items: [
          {
            title: "Subtopic 3-1",
            url: "#",
          },
          {
            title: "Suptopic 3-2",
            url: "#",
          },
        ],
      },
    ],
  };

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">Doctitle</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            Document title
          </h1>
          <p className="text-lg text-muted-foreground">
            <Balancer>This is a document description.</Balancer>
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
          >
            Docs
            <ExternalLinkIcon className="h-3 w-3" />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
          >
            API Reference
            <ExternalLinkIcon className="h-3 w-3" />
          </Link>
        </div>
        <div className="pb-12 pt-8">Mdx content goes here</div>
        <DocsPager />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <DashboardTableOfContents toc={toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
