import { useState, useEffect } from "react";

// useGitHubFetch is a custom hook that:
// - Fetches data from a given GitHub API URL
// - Returns data, loading, and error states
export function useGitHubFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]); // re-run when URL changes

  return { data, loading, error };
}