import React, { useState, useMemo } from 'react'

function Factorial() {
    const [num, setNum] = useState(0);
    const factorial = useMemo(()=>{
        let result = 1;
        for(let i = 1; i<=num;i++){
            result*=i
        }
        return result

    },[num]);

    const handleChange = (e)=>{
        setNum(Number(e.target.value));
    }
  return (
    <div>
        <input type="number" value={num} onChange={handleChange}/>
        <p>Factorial number {num} = {factorial}</p>
    </div>
  )
}

export default Factorial