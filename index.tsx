import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BookOpenText, Bot } from "lucide-react";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <div>
      <Card className="bg-white   p-20 rounded-none shadow-none mt-16">
        <CardTitle className="text-4xl font-black text-black mb-6">
          Teknologernas bästa vän i tentaperioden
        </CardTitle>
        <CardDescription className="text-xl text-black max-w-2xl">
          Slipp tentaångesten, följ vår beprövade metodik.
        </CardDescription>
      </Card>

      <Card className="bg-white border-none shadow-none grid grid-cols-2 mt-16">
        <div className="bg-[yellow]">
          <CardHeader className="">
            <CardTitle className="font-black">
              Träna på gamla tentor, effektivt
            </CardTitle>
          </CardHeader>

          <CardContent className="max-w-[660px] bg-[red]">
            <li className="flex direction-row">
              <span className="pr-6">
                <BookOpenText size={40} />
              </span>
              På Kollin hittar du så många relevanta övningsuppgifter som du
              behöver. dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddd. dddddd dddddddddddd, På Kollin
              hittar du så många relevanta övningsuppgifter som du behöver.
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddd. dddddd dddddddddddd
            </li>
            <li className="flex direction-row mt-6">
              <span className="pr-6">
                <BookOpenText size={40} />
              </span>
              På Kollin hittar du så många relevanta övningsuppgifter som du
              behöver. dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddd. dddddd dddddddddddd
            </li>
            <li className="flex direction-row">
              <span className="pr-6">
                <BookOpenText size={40} />
              </span>
              På Kollin hittar du så många relevanta övningsuppgifter som du
              behöver. dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddd. dddddd dddddddddddd
            </li>
          </CardContent>
        </div>
        <div>
          <Image
            src="/section_1.webp"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-[400px] object-contain"
          />
        </div>
      </Card>
    </div>
  );
}
