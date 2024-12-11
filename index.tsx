import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div>
      <Card className="bg-white border-none shadow-none grid grid-cols-2">
        <div>
          <Image
            src="/section_1.webp"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-[400px] object-contain"
          />
        </div>

        <div>
          <CardHeader className="">
            <CardTitle className="">Träna på gamla tentor, effektivt</CardTitle>
          </CardHeader>
          <CardContent className="min-w-[400px]">
            <li>d</li>
            <li>d</li>
            <li>d</li>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
