import useFetchAPI from "./use_fetch_api";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = useFetchAPI<TodoResponse>(url);

  return (
    <>
      <h2>Custom Hook</h2>

      {response.isFetching ? <p>Fetching...</p> : <p>{response.data?.title}</p>}
    </>
  );
};
