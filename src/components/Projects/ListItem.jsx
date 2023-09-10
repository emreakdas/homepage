export default function ListItem({slug, description, star, url, language}) {
    const languageColors = {
        "JavaScript": "#f1e05a",
        "TypeScript": "#3178c6",
        "PHP": "#4F5D95"
    }

    return (
        <div className="border rounded-md p-3 flex flex-col">
            <div className="flex items-center space-x-1 mb-2">
            <svg className="shrink-0" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <a href={url} target="_blank" className="text-blue-600 font-medium transition-all hover:underline whitespace-nowrap overflow-hidden text-ellipsis">
                {slug} 
            </a>
            </div>
            <p className="text-gray-800/70 mb-4 text-sm">{description}</p>
            <div className="flex items-center space-x-6 mt-auto">
                <div className="flex items-center space-x-1">
                <span style={{backgroundColor: languageColors[language] || "#000"}} className="w-[12px] h-[12px] rounded-full"></span>
                <span className="text-gray-800/70 text-xs">{language || "Text"}</span>
                </div>
                <div className="flex items-center space-x-1">
                <svg className="fill-gray-800/70" aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                <span className="text-gray-800/70 text-xs">{star}</span>
                </div>
            </div>
        </div>
    )
}