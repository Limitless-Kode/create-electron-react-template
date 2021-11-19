import {ReactReduxContext} from "react-redux";
import {useContext, useState} from "react";
import * as types from '../helpers/types';

function App() {
    const { store } = useContext(ReactReduxContext)
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        store.dispatch({ type: types.COUNTER_INCREMENTED, payload: {data: 2} });
        setCounter(store.getState().sampleReducer.value);
    }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
            <p className="text-gray-500">You have {counter} new messages!</p>
            <button className="bg-blue-500 p-3 rounded text-white my-3" onClick={increaseCounter}>Increase Messages</button>
        </div>
        </div>
    </div>
  );
}

export default App;
