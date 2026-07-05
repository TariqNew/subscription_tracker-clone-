# Contributing

Thank you for taking the time to contribute!

We welcome contributions that improve the project. To maintain a clean, consistent, and high-quality codebase, please follow the guidelines below.

---

# Contribution Workflow

Every contribution should follow this workflow:

```text
Issue
   ↓
Create Feature Branch
   ↓
Implement Changes
   ↓
Commit Changes
   ↓
Push Branch
   ↓
Open Pull Request
   ↓
Code Review
   ↓
Approval
   ↓
Merge into main
```

**Important**

- Never commit directly to the `main` branch.
- Every change must be associated with a GitHub Issue.
- All changes must be submitted through a Pull Request.

---

# Starting a Task

Before writing any code:

1. Check if an Issue already exists.
2. If not, create a new Issue describing the work.
3. Wait until the Issue is assigned to you.
4. Create a branch using the project's naming convention.

---

# Branch Naming Convention

Create branches using the appropriate prefix.

| Type          | Format                                    |
| ------------- | ----------------------------------------- |
| Feature       | `feature/<issue-number>-<feature-name>`   |
| Bug Fix       | `bugfix/<issue-number>-<bug-description>` |
| Documentation | `docs/<issue-number>-<description>`       |
| Tests         | `test/<issue-number>-<description>`       |
| Refactoring   | `refactor/<issue-number>-<description>`   |
| Hotfix        | `hotfix/<issue-number>-<description>`     |

## Examples

```text
feature/15-add-refresh-tokens
bugfix/21-fix-payment-validation
docs/3-add-contributing-guide
test/2-setup-unit-testing
refactor/17-clean-auth-service
```

---

# Commit Message Convention

This project follows the Conventional Commits specification.

## Format

```text
<type>(<scope>): <short description>
```

## Examples

```text
feat(auth): implement refresh token rotation
fix(payment): resolve webhook verification bug
docs(readme): improve project documentation
test(auth): add login service unit tests
refactor(user): simplify user service
chore(deps): update project dependencies
```

### Common Types

| Type     | Purpose                                      |
| -------- | -------------------------------------------- |
| feat     | New feature                                  |
| fix      | Bug fix                                      |
| docs     | Documentation                                |
| test     | Tests                                        |
| refactor | Code restructuring without changing behavior |
| chore    | Maintenance tasks                            |
| style    | Formatting changes                           |
| perf     | Performance improvements                     |

---

# Pull Request Guidelines

Before opening a Pull Request:

- Ensure your branch is up to date with `main`.
- Keep the PR focused on a single issue.
- Write a clear PR title.
- Describe what changed.
- Reference the related Issue.

Example PR description:

```text
## Summary

Implemented centralized logging using Winston.

Closes #2
```

---

# Code Review

All Pull Requests must be reviewed before merging.

During review:

- Respond to review comments promptly.
- Push requested changes to the same branch.
- Keep discussions respectful and constructive.

Only repository maintainers are responsible for approving and merging Pull Requests.

---

# Coding Standards

Please follow these practices:

- Write clean and readable code.
- Follow the existing project structure.
- Use meaningful variable and function names.
- Avoid duplicated logic.
- Handle errors appropriately.
- Remove unused code before submitting.

---

# Testing

Whenever applicable:

- Add unit tests for new functionality.
- Ensure all existing tests continue to pass.
- Run tests before opening a Pull Request.

Example:

```bash
pnpm test
```

---

# Documentation

If your change affects:

- API behavior
- Project setup
- Configuration
- Environment variables

please update the relevant documentation (`README.md`, API docs, or other documentation files).

---

# Reporting Issues

When creating an Issue, include:

- Clear title
- Description
- Expected behavior
- Current behavior
- Steps to reproduce (if applicable)
- Screenshots or logs (if helpful)

---

# Questions

If anything is unclear before you begin working, please ask in the related GitHub Issue before starting implementation.

---

Thank you for helping improve this project!
