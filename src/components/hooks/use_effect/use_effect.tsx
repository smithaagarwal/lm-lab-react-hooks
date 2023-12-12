import { useEffect, useState } from "react";

// make an api call using useEffect
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

export const APICall = () => {
  const [jsonData, setJsonData] = useState<ToDo | null>(null);

  useEffect(() => {
    const fetchToDo = async () => {
      try {
        const response = await fetch(jsonTypicode);
        const json = await response.json();
        setJsonData(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchToDo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{jsonData ? jsonData.title : "Fetching data..."}</p>
    </>
  );
};
