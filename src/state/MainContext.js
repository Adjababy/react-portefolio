import React, { useState,useEffect} from 'react';
export const MainContext=React.createContext()
const MainProvider=({children})=>{
const [state, setState] = useState(localStorage.getItem('state')||'light')
  function changeDarkMode() {
    if (state==='light') {
      
      setState('dark')
      document.getElementById("dark-light-mode").innerHTML = "Light mode";
    } else {
      
      setState('light')
      document.getElementById("dark-light-mode").innerHTML = "Dark mode";
    }
  };
  useEffect(() => {
    localStorage.setItem('state', state)
    document.body.className=state;
  }, [state])
  return (
    <MainContext.Provider value={changeDarkMode}>
        {children}
    </MainContext.Provider>
  )
}
export default MainProvider
  