import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function DocsPager() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href="#" className={buttonVariants({ variant: "outline" })}>
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        Prev Page Title
      </Link>
      <Link
        href="#"
        className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
      >
        Next Page Title
        <ChevronRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
