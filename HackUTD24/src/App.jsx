import { SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import './App.css';
export default function App() {
  return (
    <><img src={"assets/SWOT.jpg"} alt="Logo" className='logo' /><header>
      <SignedOut>
        <SignInButton>Sign in Here!</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>Sign in Here!</UserButton>
      </SignedIn>
    </header></>
  );
}
