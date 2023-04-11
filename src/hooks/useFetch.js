import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        accept: "application/json",
        "x-api-key":
          "Jts6VzYtgtPxxHmNPrWhjgXSUgfDATmu6jUpJtZ0jzaxGwTV4my5olGa7eGIhx98",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data source");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.result);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(null);
        setError(error.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
