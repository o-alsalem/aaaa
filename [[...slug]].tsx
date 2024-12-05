import RenderBlocks from "@/utils/RenderBlocks";
import React from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

interface Page {
  layout: any[];
  slug: string;
  id: string;
}

interface PageProps {
  page: Page;
}

export default function Page({ page }: PageProps) {
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await axios("/api/pages?limit=100");
  const pageData = pageReq.data;
  const returnObj = {
    paths: pageData.docs.map(({ slug, id }: { slug: string; id: string }) => {
      return {
        params: { slug: slug !== "index" ? slug.split("/") : false },
      };
    }),
    fallback: false,
  };
  return returnObj;
};

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const slug = ctx.params?.slug || "index";
  const preview = ctx.preview || false;
  // fetch Page
  const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`); // Fixed template string syntax
  let pageData = pageReq.data.docs[0];
  return {
    props: {
      page: pageData,
    },
  };
};
