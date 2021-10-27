import { useState, useEffect } from "react";

import { Country } from "../types/types";

export default function useFetch(url: string): [Country[], boolean, unknown] {
  const [data, setData] = useState<Country[]>([]);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return [data, loading, error];
}