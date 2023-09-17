import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <main className="flex items-center justify-center h-[calc(100dvh-8rem)]">
      <Helmet>
        <title>404! - Emre AKDAŞ</title>
      </Helmet>
      <span className="text-2xl pr-2 mr-2 border-r border-r-black">404!</span>
      <span className="text-gray-500">Not Found.</span>
    </main>
  )
}

export default NotFound