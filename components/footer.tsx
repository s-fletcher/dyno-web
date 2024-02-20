import { FC } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="w-full text-muted-foreground bg-footer">
      <div className="w-full border border-x-0 border-border flex h-14 items-center px-2 gap-4">
        <ModeToggle />
      </div>
      <div className="px-6 py-10 flex flex-col gap-1">
        <p className="text-xs">
          Built by{" "}
          <Link
            className="underline font-medium underline-offset-4"
            href="https://samfletcher.me"
          >
            samfletcher
          </Link>
          . Send feedback or questions to{" "}
          <Link
            className="underline font-medium underline-offset-4"
            href="mailto:dyno@samfletcher.me"
          >
            dyno@samfletcher.me
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
