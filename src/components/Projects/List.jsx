import { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function List() {
    const ignoreRepos = ["emreakdas"];
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/emreakdas/repos")
        .then(response => response.json())
        .then(json => {
            const filteredRepos = json.filter(item => !(ignoreRepos.includes(item.name)));
            setRepos(filteredRepos);
        });
    }, []);

    return (
        <div className="mb-20">
        <span className="mb-4 block">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((item) => (
            <ListItem
            key={item.id} 
            slug={item.name}
            description={item.description}
            url={item.html_url}
            star={item.stargazers_count}
            language={item.language}
            />
        ))}
        </div>
    </div>
  )
}
