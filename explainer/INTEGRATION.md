# Serving the explainers from `/library`

There are two, and each is a **self-contained document**: one file, no build
step, no dependencies, no network fetches (no webfont, no CDN, no external
image). They live in this repo rather than in the app repo for the same reason
the items do — this directory is bind-mounted into the app container read-only,
so editing an animation and saving it is the deploy. No rebuild, no restart.

| file | route | subject |
|---|---|---|
| `build-workflow.html` | `/library/workflow` | a whole level, step 0 to 10, at low magnification |
| `authoring-and-repair.html` | `/library/workflow/proof` | one real item at high magnification: authored, stratified, judged, adjudicated, repaired, rejudged |

They share a palette and a set of conventions deliberately: one hue per role,
matte black ground, one annotation line at a time. The second is the first one's
step 5 to 8, opened up — and it is timed to 56 seconds so it can also be filmed
(see *Filming a page* below).

Three small changes are needed in **`prestige-intelligence`**, and only one of
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

## 2. The second route — the same file, one constant changed

Create `web/app/library/workflow/proof/route.ts` as a copy of the above with
`"build-workflow.html"` replaced by `"authoring-and-repair.html"`. Keep them as
two literal routes rather than one `[slug]` route reading a filename from the
URL: a fixed path has no traversal surface, and that property is worth more here
than the duplication costs.

## 3. The link — one line on the index page

The index page (`web/app/library/page.tsx`) is the only existing file that
changes. Build the link out of the vocabulary already there:

```tsx
<Link
  className="text-indigo-700 underline underline-offset-2 dark:text-indigo-300"
  href="/library/workflow"
>
  How a level is built — step 0 to 10
</Link>
<Link
  className="text-indigo-700 underline underline-offset-2 dark:text-indigo-300"
  href="/library/workflow/proof"
>
  Authoring a proof, and repairing one
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

Dependency-free; serves this directory only. `/` and any unknown path fall back
to `build-workflow.html`, so `/library/workflow` resolves locally exactly as it
will in the app; the second page is at `/authoring-and-repair.html`.

## Filming a page

`authoring-and-repair.html` is built to be captured as well as browsed. Under
`?film=1` it drops the page chrome, pins the canvas at exactly 1920×1080, stops
the animation loop and exposes `window.__film = { duration, seek(t) }`. Every
visual in it is a pure function of `t` — no wall clock, no randomness — so
walking the timeline frame by frame reproduces the same pixels every run, and a
re-render after an edit differs only where the edit did.

```
npm i puppeteer ffmpeg-static            # anywhere; NOT in this repo
RENDER_MODULES=<that dir> node explainer/render-video.mjs \
  --page explainer/authoring-and-repair.html \
  --out ~/Downloads/prestige-authoring-and-repair.mp4
```

Output is H.264 High / yuv420p / 30 fps in MP4 with `+faststart` and a silent
AAC track — the profile X accepts. `--stills 12,26,43` writes PNGs at those
seconds instead, which is the fast way to check a layout change. The renderer
resolves puppeteer and ffmpeg from `--modules` (or `$RENDER_MODULES`) precisely
so that **this repository stays dependency-free**: it is bind-mounted onto the
serving path, and nothing on that path may acquire a `node_modules`.

Two constraints if you retime the film: keep it **under 60 seconds**, which is
comfortably inside every social-video limit and is why the run is 56, and keep
body type at or above **26 world units** — at 1920 wide, that is the floor for
legibility once a phone downscales the frame.

## Editing the animations

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

`authoring-and-repair.html` follows the same discipline in a 1920×1080 world
with no camera at all, and adds one thing worth knowing before editing it: the
proof is not drawn from a table of frames. `stratify()` is a working
transcription of `layerRepair` in `worker/src/precheck.ts`, and it is run twice
at load — once on the draft, once on the repaired list. Every label, row
position, graph node and bracket tag in the film is read out of those two
results. So if the checker's rule changes, change `stratify()` and the film
re-derives itself; and if you edit a step's `cites`, the phases move on their
own, exactly as they would on disk.

**The judge lanes.** Both pages name them **DeepSeek V4 Pro** and **GPT 5.6
Terra** (owner instruction, 2026-08-05). Note that this is `JUDGE_LINEUP=`
`deepseek+terra`, one of the three lineups `tools/judge.mts` and
`tools/judge-sweep.mjs` support, but *not* their current default, which is
`deepseek+sonnet`. If the default moves, the lanes are named in one place each:
`M.laneA` / `M.laneB` plus the step-7 narration in `build-workflow.html`, and
`actorSlot()` plus `finding()` in `authoring-and-repair.html`.
