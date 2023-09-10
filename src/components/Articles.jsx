import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emreakdas")
    .then(response => response.json())
    .then(json => setArticles(json.items));
}, []);

  return (
    <div className="mb-20">
        <span className="mb-4 block">Articles</span>
        <div className="grid gap-2">
          {articles.map((item, key) => (
            <a key={key} href={item.link} target="_blank" className="border rounded-md p-3 transition-all hover:bg-[#F2F2F2]">
              {item.title}
            </a>
          ))}
        </div>
    </div>
  )
}