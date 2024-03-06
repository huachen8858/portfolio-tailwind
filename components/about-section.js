import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tab-button";
import TAB_DATA from "@/data/tab-data";

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <seciton className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about-image.png"
          alt="about-image"
          className="w-[500px] h-[500px]"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl from-bold text-white mb-4 mt-2">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, React, Next.js, Node.js, Express, MySQL, HTML, CSS and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          {/* 顯示 Tab 對應內容 */}
          <div className="mt-8 text-white">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </seciton>
  );
}
