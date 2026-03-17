import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Account from "./pages/Account"
import Auth from "./pages/Auth"
import Onboarding from "./pages/Onboarding"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth/:pathname" element={<Auth />} />
            <Route path="/account/:pathname" element={<Account />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
