import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emreakdas"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject("Failed articles.");
      })
      .then((json) => setArticles(json.items))
      .catch(() =>
        setArticles([
          {
            title: "JavaScript’de “Hoisting” aslında nedir?",
            link: "https://medium.com/@emreakdas/javascriptde-hosting-asl%C4%B1nda-nedir-a7d446a50290",
          },
        ])
      );
  }, []);

  return (
    <div className="mb-20">
      <span className="mb-4 block">Articles</span>
      <div className="grid gap-2">
        {articles.map((item, key) => (
          <a
            key={key}
            href={item.link}
            target="_blank"
            className="border rounded-md p-3 transition-all hover:bg-[#F2F2F2]"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
