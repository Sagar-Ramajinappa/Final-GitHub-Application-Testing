# GitHub Website Automation — Playwright

A beginner-friendly **end-to-end (E2E) web application testing project**. It checks selected public pages and visitor journeys on the real GitHub website using Playwright, JavaScript, Node.js, and Chromium.

> **Safe testing:** This suite is read-only. It does not sign in, enter real credentials, create repositories, or change account data. GitHub is a live website, so its layout or availability can change and occasionally affect a test.

## 1. What is included?

- **20 UI checks** covering the homepage, sign-in/sign-up pages, search, public profiles and repositories, Topics, Trending, Marketplace, Features, Actions, Security, Enterprise, Customer Stories, and Blog.
- **Human-style interaction helpers** for character-by-character typing, pointer hover before clicking, and gradual scrolling. These make selected actions easier to observe; they are not intended to disguise automation or bypass website protections.
- **Screenshots, videos, and traces** are retained when a test fails (where supported by Playwright).
- **HTML report** generated after each run.

## 2. Tools and requirements

| Tool | Purpose |
|---|---|
| Node.js | Runs JavaScript and npm |
| Playwright Test | Browser automation and assertions |
| Chromium | Browser used by the tests |
| VS Code (optional) | Edit and view project files |

Install Node.js LTS first if it is not already installed.

## 3. Setup on Windows

Open PowerShell **inside this project folder** and run:

```powershell
npm.cmd install
npx.cmd playwright install chromium
```

Using `npm.cmd` / `npx.cmd` avoids the PowerShell `npm.ps1` execution-policy issue.

## 4. Run the tests

```powershell
npm.cmd test                 # Run in the background (headless)
npm.cmd run test:headed      # Show Chromium while tests run
```

To run one test file:

```powershell
npx.cmd playwright test tests/github.spec.js
```

To list tests without running them:

```powershell
npx.cmd playwright test --list
```

## 5. View the HTML report

After a test run:

```powershell
npm.cmd run test:report
```

The report is saved at `reports/html-report/index.html`.

## 6. Project structure

```text
GitHub_Website_Testing_Full_Project/
├── tests/
│   ├── github.spec.js       # 20 test cases and assertions
│   └── humanActions.js      # Reusable human-style interaction helpers
├── docs/
│   ├── TEST_CASES.md        # Test case descriptions
│   └── PPT_PROJECT_SUMMARY.md
├── reports/                 # Generated HTML report (after running tests)
├── screenshots/              # Failure screenshots / notes
├── package.json              # Commands and dependency
├── playwright.config.js      # Browser, timeout, and reporter settings
└── README.md                 # This guide
```

## 7. How the tests work

1. Playwright launches Chromium.
2. A test opens a public GitHub page or follows a public visitor journey.
3. Playwright checks the URL, page title, or visible element using assertions.
4. The test is marked passed or failed.
5. The HTML report records the results and failure evidence.

## 8. Limitations

- These are UI checks, not tests of GitHub's internal backend or APIs.
- Public website content and selectors may change; a failing test can mean a UI change, a network issue, or a genuine defect.
- Login is checked only for the presence of form fields. No password is entered and no login is attempted.
- Repository creation is intentionally excluded because it changes a real account; see `docs/TEST_CASES.md` for a manual test idea.
