import { useState } from "react";
import Counter from "./Counter";



interface CounterTypes {
  id: number;
  count: number;
}

const Counters4: CounterTypes[] = [
{ id: 1, count: 2},
{ id: 2, count: 3},
{ id: 3, count: 1},
{ id: 4, count: 0}, 
];

function HomeCounter (){
  const [counters, setCounters] = useState<CounterTypes[]>(Counters4);
  return (
  <div>
     {counters.map ((counter) => (
        <Counter key= {counter.id} count={counter.count}/>
     ))}
  </div>
  );
}
 
export default HomeCounter;