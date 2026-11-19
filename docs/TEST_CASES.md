# GitHub Website Testing - Test Cases (20)

| ID | Test | Expected result |
|---|---|---|
| TC01 | Homepage | Loads and title mentions GitHub |
| TC02 | Sign in navigation | Link points to login |
| TC03 | Sign up navigation | Link points to signup |
| TC04 | Pricing | Page loads |
| TC05 | Explore | Page loads |
| TC06 | Login username/email field | Field is visible |
| TC07 | Login password field | Field is visible |
| TC08 | Signup page | Opens |
| TC09 | Repository search | Search URL/page opens |
| TC10 | Microsoft profile | Public profile opens |
| TC11 | Microsoft Playwright repository | Public repository opens |
| TC12 | Topics | Directory opens |
| TC13 | Trending | Page opens |
| TC14 | Marketplace | Page opens |
| TC15 | Features | Page opens |
| TC16 | GitHub Actions | Page opens |
| TC17 | Security | Page opens |
| TC18 | Enterprise | Page opens |
| TC19 | Customer stories | Page opens |
| TC20 | Blog | Page opens |

All automated tests are public/read-only checks. They do not enter credentials, submit login forms, or create repositories.

## Manual authenticated test: Create a repository

Repository creation changes your GitHub account, so it is intentionally not run automatically.
1. Sign in to your own account in a browser.
2. Click **+** (top-right) → **New repository**.
3. Enter a unique repository name and choose Public or Private.
4. Click **Create repository** only if you intend to create it.
5. Confirm the repository appears on your profile.
6. Delete the test repository afterward only if you no longer need it (Settings → Danger Zone).

Do not put your password, personal access token, or other secrets in test files or screenshots.
