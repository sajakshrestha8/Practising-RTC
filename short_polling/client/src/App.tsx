import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [displayCount, setDisplayCount] = useState<number | null>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:8080/count").then((data) => {
        setDisplayCount(data.data);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [displayCount]);

  console.log({ displayCount });

  return (
    <>
      <div>Your count will be displayed over here</div>
      <div>{displayCount}</div>
    </>
  );
}

export default App;
