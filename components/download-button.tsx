"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { BsApple } from "react-icons/bs";
import yaml from "js-yaml";
import { useRouter } from "next/navigation";

type Latest = {
  version: string;
  files: { url: string; sha512: string; size: number }[];
  path: string;
  sha512: string;
  releaseDate: string;
};

export const DownloadButton: FC = () => {
  const router = useRouter();
  const onClick = async () => {
    const response = await fetch(
      "https://dyno-releases.s3.us-east-1.amazonaws.com/latest-mac.yml"
    ).then((res) => res.text());
    const latest = yaml.load(response) as Latest;
    router.push(
      `https://dyno-releases.s3.us-east-1.amazonaws.com/${latest.path}`
    );
  };

  return (
    <Button onClick={onClick} size="lg" className="mt-8 rounded-2xl">
      <BsApple className="mr-2" /> Download
    </Button>
  );
};
