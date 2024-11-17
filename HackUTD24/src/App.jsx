import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './App.css';
import logo from './assets/SWOT.jpg';


export default function App() {
  return (
    <><img src={logo} alt="Logo" className='logo'style="width: 200vh; height: 80%;" /><header>
      <SignedOut>
        <SignInButton>Sign in Here!</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>Sign in Here!</UserButton>
      </SignedIn>
    </header></>
  );
}
