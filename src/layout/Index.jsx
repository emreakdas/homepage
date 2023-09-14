import Header from "./Header";
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Index