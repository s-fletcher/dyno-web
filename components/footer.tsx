import { FC } from "react";
import { ModeToggle } from "./mode-toggle";

export const Footer: FC = () => {
  return (
    <footer className="w-full text-muted-foreground bg-footer">
      <div className="w-full border border-x-0 border-border flex h-14 items-center px-2">
        <ModeToggle />
      </div>
      <div className="px-6 py-10">
        <p className="text-xs">© 2024 Dyno</p>
      </div>
    </footer>
  );
};
