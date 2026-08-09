import { useGitHubFetch } from "./FetchingDataThreejs";

// GitHubRepoCount demonstrates:
// - Using a custom hook for data fetching
// - Keeping component logic simple and focused on UI
function GitHubRepoCount({ username }) {
  const url = `https://api.github.com/users/${username}`;
  const { data, loading, error } = useGitHubFetch(url);

  if (loading) {
    return <div className="fetch-box">Loading repo count...</div>;
  }

  if (error) {
    return <div className="fetch-box">Error: {error}</div>;
  }

  return (
    <div className="fetch-box">
      <h2>GitHub Repo Count</h2>
      <p>User: {data.login}</p>
      <p>Public repos: {data.public_repos}</p>
    </div>
  );
}

export default GitHubRepoCount;