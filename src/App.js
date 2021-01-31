import "./App.css"

import DataFetching from "./DataFetching"
import ParentComponent from "./useCallbackEg/ParentComponent"
import logo from "./logo.svg"
import Counter from "./useMemoEg/Counter"
import FocusInput from "./useRefEg/FocusInput"
import HookTimer from "./useRefEg/HookTimer"
import DocTitleOne from "./customHookEg/DocTitleOne"
import DocTitleTwo from "./customHookEg/DocTitleTwo"

function App() {
    return (
        <div className="App">
            {/* <DataFetching /> */}
            {/* <ParentComponent /> */}
            {/* <Counter /> */}
            {/* <FocusInput />   */}
            {/* <HookTimer /> */}
            <DocTitleOne />
            <DocTitleTwo />
        </div>
    )
}

export default App
