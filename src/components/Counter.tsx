import { useState } from "react";


interface counterProps {
    count: number;
}

const Counter = (props: counterProps) => {
  const [count, setCount] = useState<number>(props.count);
  return(
     <div>
        <button
         className="btn btn-primary m-2"
         onClick={() => setCount(count - 1)}
         >
         Decrement
         </button>

         <span className="btn btn-warning">{count}</span>
         <button 
          className="btn btn-primary m-2"
          onClick={() => setCount (count + 1)}
          >
            Increment
          </button>
    </div>
  );
};
export default Counter;