# Responsive Hero & Navigation Web Task

A production-ready responsive home page and navigation bar built with **React 19**, **TypeScript**, and **Vite**, adhering strictly to the candidate design specification without third-party UI component libraries.

---

## Tech Stack & Core Decisions

* **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) for compile-time type safety and robust component contracts.
* **Routing**: [React Router v7](https://reactrouter.com/) implementing a root layout shell pattern (`<RootLayout />` with `<Outlet />`).
* **Styling (No UI Libraries)**: 
  * **Design Tokens**: Centralized CSS custom properties in `:root` (`src/styles/main.css`) capturing all color palettes (`#111827`, `#6366F1`, `#818CF8`, `#D1D5DB`, etc.) and typography scales.
  * **Component Scoping**: **CSS Modules** (`*.module.css`) providing native view encapsulation with zero runtime overhead or CSS namespace collisions.
* **Typography**: Google Font **Inter** (weights 400, 500, 800) with preconnect optimization.

---

## Architectural Highlights

```text
src/
├── assets/                  # Brand assets (logo, menu, close, chevron, hero illustration)
├── components/
│   ├── common/
│   │   └── Container/       # Responsive max-width container (Task 4.1)
│   └── layout/
│       ├── Navbar/          # Desktop navigation & mobile trigger
│       │   ├── MobileDrawer/# Animated slide-down drawer & backdrop overlay (Tasks 1.2 & 1.3)
│       │   └── Navbar.data.ts # Single source of truth for navigation links
│       └── RootLayout/      # Layout shell rendering <Navbar /> and <Outlet />
├── features/
│   └── hero/
│       └── components/
│           ├── CalloutBadge/# "WE'RE HIRING" callout pill with chevron
│           ├── HeroHeading/ # Display headline & supporting copy
│           ├── HeroForm/    # Responsive email input, submit button & legal copy
│           └── HeroSection/ # Two-column layout & scaling illustration container
├── pages/
│   └── HomePage/            # Home page composition
├── router/                  # createBrowserRouter route tree definition
├── services/
│   └── trial.service.ts     # Angular-style TrialService class & root singleton
├── styles/
│   └── main.css             # Global tokens, box-sizing reset, and base styles
├── App.tsx                  # Root RouterProvider configuration
└── main.tsx                 # Application entrypoint & DOM mount
```

---

## Responsive Breakpoints & Specification Alignment

The application strictly implements the 4 responsive breakpoint states:

| Breakpoint | Layout Behavior | Specifications Enforced |
| :--- | :--- | :--- |
| **Mobile (`376px`)** | Single column (stacked) | Logo `35×32px` at 16px gutter; `40×40px` tap-target hamburger; full-width stacked form; illustration below content; slide-down white menu drawer with whitish overlay. |
| **Tablet (`834px`)** | 2-column layout | Content left, illustration right; full horizontal nav with 32px link gap; container flush to edges. |
| **Laptop (`1080px`)** | 2-column layout | Content `492px`, Illustration `492px`; horizontal form row (max 576px); centered container. |
| **Desktop (`1358px`)**| 2-column layout | Content `592px`, Illustration `592px`; inner container capped at `1280px` max-width with `39px` side padding (Task 4.1). |

---

## Motion & Interaction Specifications

* **Mobile Menu Open (Task 1.1 $\rightarrow$ 1.2)**: 
  * Slides down into view from top (`translateY(0)`).
  * Opacity fades from `0` to `1` with `ease-in-out` in **`500ms`**.
* **Mobile Menu Close**:
  * Slides up out of view (`translateY(-100%)`).
  * Opacity fades from `1` to `0` with `ease-in-out` in **`300ms`**.
* **Backdrop Overlay (Task 1.3)**:
  * Full-bleed semi-transparent whitish wash behind the drawer.
  * Tapping the overlay or any navigation link automatically closes the menu.
* **Illustration Container**:
  * Fixed height of `624px` with `overflow: clip`, scaling fluidly with column width.

---

## Bonus: GraphQL Mutation & Service Architecture

The "Start free trial" action is implemented using a GraphQL mutation connected to the dummy endpoint (`https://graphqlzero.almansi.me/api`):

* **Service Class Pattern (`TrialService`)**: Modeled after Angular's injectable service architecture (`src/services/trial.service.ts`). Encapsulates the `createUser` GraphQL mutation (`POST` request with typed variables) and exposes a root singleton instance `trialService`.
* **Zero External Dependencies**: Implemented using native `fetch` rather than adding bulky client libraries (Apollo / URQL).
* **State Management & Feedback**: Handles reactive `idle`, `loading`, `success`, and `error` states with accessible status announcements (`role="status"` and `role="alert"`). The submit button disables during network dispatch and displays dynamic status text (`"Loading..."`).
* **Header & Drawer CTA Linking**: Clicking "Start free trial" in the desktop Navbar or the Mobile Drawer smoothly scrolls and focuses the Hero email input field.

---

## Getting Started

### Prerequisites
* Node.js `20.19+` or `22.12+` (required by Vite 8; Node.js `20.18+` will run with a compatibility warning)
* npm `10+`

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Type Check & Production Build
```bash
npm run build
```

### Linter
```bash
npm run lint
```
