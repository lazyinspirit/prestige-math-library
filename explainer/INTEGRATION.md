# Serving the explainer from `/library`

`build-workflow.html` is a **self-contained document**: one file, no build step,
no dependencies, no network fetches (no webfont, no CDN, no external image). It
lives in this repo rather than in the app repo for the same reason the items do
— this directory is bind-mounted into the app container read-only, so editing
the animation and saving it is the deploy. No rebuild, no restart.

Two small changes are needed in **`prestige-intelligence`**, and only one of
them touches an existing file.

---

## 1. The route — a new file, so it cannot conflict on merge

Create `web/app/library/workflow/route.ts`:

```ts
// The build-workflow explainer is a standalone document authored in the math
// library repo (explainer/build-workflow.html) and read through the same bind
// mount as the content, so editing it there is the deploy. It is served as its
// own document rather than as a page.tsx because it carries its own <style> and
// must not inherit the /library chrome.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { libraryDir } from "@/lib/math-library";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const html = await readFile(join(libraryDir(), "explainer", "build-workflow.html"), "utf8");
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        // The mount is live; never let a proxy pin an old copy.
        "cache-control": "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
```

`libraryDir()` is already exported from `web/lib/math-library.ts` and resolves
`MATH_LIBRARY_DIR` at call time, so this needs no new configuration.

The page is **public and contains no library content** — no item text, no draft
mathematics, no provenance data. It reads a fixed path, so there is no traversal
surface, and it needs no `auth()` call.

## 2. The link — one line on the index page

The index page (`web/app/library/page.tsx`) is the only existing file that
changes. Build the link out of the vocabulary already there:

```tsx
<Link
  className="text-indigo-700 underline underline-offset-2 dark:text-indigo-300"
  href="/library/workflow"
>
  How a level is built — step 0 to 10
</Link>
```

Two constraints from the frozen presentation, both of which this respects:

- **No new accent.** Indigo is the ordinary link colour. **Sky** and **fuchsia**
  are reserved for forward references and the ‡ not-proved-here tier and must
  not be borrowed for a nav link.
- **Additive only.** Adding a row or a line is fine; restyling the index is not.
  If the link becomes a card, it must reuse `group.tsx`'s existing glass card
  and one of the existing per-group hues rather than introducing another.

Suggested placement: a single line under the masthead paragraph, above the
category groups — the explainer is about how the library is *made*, so it reads
as a preface to the taxonomy rather than as an entry in it.

---

## Checks worth doing once on the VPS

- **Inline script.** The page carries its CSS and JS inline. As of this writing
  the app sets no `Content-Security-Policy` anywhere (no middleware, no
  `next.config` headers, no proxy header). If one is ever added, this page needs
  `script-src`/`style-src` to allow `'unsafe-inline'` on that path, or a nonce
  threaded through the route.
- **`output: "standalone"`.** The route reads from `MATH_LIBRARY_DIR` at
  request time, not from the bundle, so the standalone build needs no extra
  asset copying.
- **Theme.** The page is matte black in both themes (owner, 2026-08-05) and has
  no toggle: the palette carries meaning — orange orchestrator, blue Beta, violet
  Alpha, cyan reader, yellow and green the two judge lanes, red a fatal — and a
  light inversion would break that mapping. It does not read the app's theme
  cookie, so it can be opened directly.

## Local preview without the app

```
node explainer/serve.mjs            # http://localhost:3000/
node explainer/serve.mjs --port 8080
```

Dependency-free; serves this directory only. Any unknown path falls back to the
animation, so `/library/workflow` resolves locally exactly as it will in the app.

## Editing the animation

Everything is in `build-workflow.html`, in numbered sections: palette, helpers,
the mesh, node renderers, the run, camera, board, player, frame loop.

**It is one continuous run, not eleven clips** (owner, 2026-08-05). The mesh is
laid out once and lives for the whole runtime; the camera pans across it and
nothing is ever torn down. A step is one entry in `STEPS` — narration (`body`,
`mech`), duration, and a camera anchor `camx`. There is no `enter()` and no
per-scene reset, because **every piece of state is a pure function of the
clock**: `activity(t)` for agents, `itemState(it, t)` for items, `A/win/pulse`
for everything else. That is what makes the rail legal — seeking is evaluating
the same functions at another `t`, so step 7 looks identical whether you played
into it or jumped.

If you add state, add it as a function of `t`. A mutable variable that a step
writes on entry is exactly what this rewrite removed.

Two things to keep in mind when changing the layout:

- **Type size is the constraint.** The stage is a 1600×820 world scaled to fit
  its box, so a world unit lands at roughly 0.85 CSS px. Canvas sizes are
  therefore ~2.5× what they would be in CSS — body text is 22–26 world units,
  never below 20 — and the amount on screen is cut to match. If you add
  material, take some away.
- **The bands are disjoint on purpose.** Batch panels occupy y 240–690, the
  published corpus 704–752, and y 761–811 is `NOTE_Y`, reserved for the single
  annotation line. Annotations are sequenced in time through `win(t, from, to)`
  rather than stacked in space, so only one is ever on screen.
