import { DownloadButton } from "@/components/download-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow bg-primary-foreground flex-col items-center justify-between">
      <div className="bg-background w-full pt-24 pb-40 flex flex-col items-center">
        <div className="flex flex-col gap-2 text-center">
          <h1
            className={cn(
              "font-bold text-6xl",
              "bg-gradient-to-br from-foreground to-foreground/30 py-2 bg-clip-text text-transparent [background-position:left_center] [background-size:100%]"
            )}
          >
            Blazing fast DynamoDB Interface
          </h1>
          <p className="text-lg">
            Explore your DynamoDB data without touching the AWS console, and
            more.
          </p>
        </div>
        <DownloadButton />
      </div>
      <div className="-mt-24 mb-auto">
        <Image
          width={1552}
          height={832}
          alt="App home page, dark"
          src="/app-dark.png"
          priority
          className="max-w-[1000px] w-full height-fit hidden dark:block"
        />
        <Image
          width={1552}
          height={832}
          alt="App home page, light"
          src="/app-light.png"
          priority
          className="max-w-[1000px] w-full height-fit block dark:hidden"
        />
      </div>
    </main>
  );
}
