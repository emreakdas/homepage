import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import tools from "../data/tools.json";

function Tools() {
  const [tab, setTab] = useState("macOS");
  const [data, setData] = useState(tools[tab]);

  useEffect(() => {
    setData(tools[tab]);
  }, [tab]);

  function handleMouseHover({ target, type }) {
    const element = target.previousElementSibling?.children[1];
    target.children[1].style.borderBottomColor =
      type == "mouseenter" ? "transparent" : "inherit";
    if (element) {
      element.style.borderBottomColor =
        type == "mouseenter" ? "transparent" : "inherit";
    }
  }

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
          <div
            style={{ backgroundColor: tab == "macOS" ? "#F2F2F2" : "initial" }}
            onClick={() => setTab("macOS")}
            href="#!"
            className="py-[0.25rem] px-3 rounded-lg border cursor-pointer transition-all hover:!bg-[#F2F2F2]"
          >
            MacOS
          </div>
          <div
            style={{
              backgroundColor: tab == "equipment" ? "#F2F2F2" : "initial",
            }}
            onClick={() => setTab("equipment")}
            href="#!"
            className="py-[0.25rem] px-3 rounded-lg border cursor-pointer transition-all hover:!bg-[#F2F2F2]"
          >
            Equipment
          </div>
        </div>
        <div>
          {data.map((item, key) => (
            <a
              key={key}
              target="_blank"
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
              href={item.url}
              className="flex items-center space-x-2  px-4 transition-all hover:bg-[#F2F2F2] hover:[&>div]:border-b-transparent hover:rounded-lg"
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
