import { FC } from "react";
import { GiMountaintop } from "react-icons/gi";

export const Navigation: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur opacity-90 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <GiMountaintop className="w-6 h-6" />
            <span className="font-bold">dyno</span>
          </a>
        </div>
      </div>
    </header>
  );
};
