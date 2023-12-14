import { useState, useEffect } from "react";
import { isError } from "../../../helpers/is_error";

const useTodo = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {
        setIsFetching(false);

        console.log(isError(e) ? e.message : "Unknown error!");
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching };
};
export default useTodo;
