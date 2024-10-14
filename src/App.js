
import './App.css';
import {
  PetProfileCollection 
 } from './ui-components';

 import {
  NavBarHeader 
 } from './ui-components';

 import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
const NavBarHeader1 = {
Image :{
  src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…WHQkSe-poxgVYcOEqz4Vmg9awAHZrsEbUNg0ZHQw&usqp=CAU" 
}
}

  return (
    <div className="App">
      <header className="App-header">
      <NavBarHeader overrides = {NavBarHeader1} />


      <PetProfileCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);