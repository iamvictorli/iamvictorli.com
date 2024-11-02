interface GitHubCommit {
  commit: {
    committer: {
      date: string
    }
    message: string
  }
  sha: string
}

interface GitHubError {
  message: string
  documentation_url?: string
}

async function fetchCommits({ owner, repo, path }: { owner: string, repo: string, path: string }) {
  // https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#list-commits
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`,
  )

  if (!response.ok) {
    const error = (await response.json()) as GitHubError
    throw new Error(`GitHub API Error: ${error.message}`)
  }

  const commits = (await response.json()) as GitHubCommit[]
  return commits
}

export async function getDatesForFile(file: string) {
  const filePath = `src/content/blog/${file}`
  const commits = await fetchCommits({
    owner: 'iamvictorli',
    repo: 'iamvictorli.com',
    path: encodeURIComponent(filePath),
  })

  if (commits.length === 0) {
    throw new Error('No commits found for this file')
  }

  return {
    publishedDate: commits[commits.length - 1].commit.committer.date,
    lastModifiedDate: commits[0].commit.committer.date,
  }
}
