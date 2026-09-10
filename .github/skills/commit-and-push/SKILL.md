---
name: commit-and-push
description: Commit the current repository changes with a concise message based on the actual diff, then push to the requested branch. Defaults to main.
---

# Commit and push

Use this skill when the user asks to commit and push the current work.

## Workflow

1. Inspect the repository status, current branch, remotes, and both staged and unstaged diffs.
2. Summarize the actual change in a concise imperative commit subject. Mention the main user-visible behavior or feature; do not invent work that is absent from the diff.
3. If the user names a branch, use that branch. Otherwise use `main`.
4. Stage the intended changes. Never stage secrets, credentials, generated files, or unrelated user work.
5. Create one commit with the generated message. Use a body only when it clarifies multiple substantial changes.
6. Push to the selected remote branch without force-pushing.
7. Verify the push succeeded and report the commit hash, branch, and concise change summary.

## Safety rules

- Do not use `git reset --hard`, force-push, or rewrite existing history.
- If the requested branch is missing locally, fetch or create it only when that is unambiguous; otherwise ask the user.
- If there are unrelated changes mixed into the worktree and the intended scope is unclear, ask before staging.
- If tests or validation commands already exist and are relevant, run the smallest targeted check before committing.
- Stop and report the error if commit or push fails; do not claim success.

## Defaults

- Remote: the repository's configured upstream remote, normally `origin`.
- Branch: `main`.
- Commit subject style: imperative, specific, and under 72 characters.
