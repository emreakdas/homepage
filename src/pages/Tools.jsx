import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import tools from "../data/tools.json";

const TOOLS_CATEGORY = {
  all: "All",
  equipment: "Equipment",
  macOS: "MacOS"
};

function Tools() {
  const [tab, setTab] = useState("all");
  const [data, setData] = useState(tools[tab]);

  useEffect(() => {
    setData(tools[tab]);
  }, [tab]);

  return (
    <>
      <Helmet>
        <title>Tools - Emre AKDAŞ</title>
      </Helmet>
      <p className="mb-20">
        Geliştirme yaparken veya günlük hayatımda sıklıkla kullandığım araçlar,
        uygulamalar, ürünler..
      </p>
      <div>
        <div className="flex items-center space-x-3 mb-10">
          {Object.keys(TOOLS_CATEGORY).map((tool) => (
            <div
              key={tool}
              style={{ backgroundColor: tab == tool ? "#F2F2F2" : "initial" }}
              onClick={() => setTab(tool)}
              className="py-[0.25rem] px-3 rounded-lg border cursor-pointer transition-all hover:!bg-[#F2F2F2]"
            >
              {TOOLS_CATEGORY[tool]}
            </div>
          ))}
        </div>
        <div>
          {data.map((item, key) => (
            <a
              key={key}
              target="_blank"
              href={item.url}
              className="flex items-center space-x-2 px-4 transition-all hover:bg-[#F2F2F2] hover:rounded-lg [&:hover>div]:border-b-transparent [&:has(+:hover)>div]:border-b-transparent"
            >
              <img
                src={item.image}
                className="pointer-events-none mix-blend-multiply"
                width={32}
                height={32}
                alt={item.title}
              />
              <div
                className={`${key !== data.length - 1 && "border-b"} flex-1 ${
                  item.desc ? "py-3" : "py-5"
                } transition-all pointer-events-none`}
              >
                <div className="mb-0.5 text-sm">{item.title}</div>
                {item.desc && (
                  <div className="text-sm text-gray-600">{item.desc}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tools;
