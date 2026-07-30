# prestige-math-library — session instructions

`AGENTS.md` is a non-normative adapter for non-Anthropic agents and points here;
this file remains the canonical agent instruction file.

This repo is the **public math library** served at `app.prestige-intelligence.cc/library`
by the Prestige Intelligence app (bind-mount; see README §How serving works).
**Normative docs, read before touching content: `SCHEMA.md` (item/page contract) and
`README.md` (provenance, judge lineup, citation rules).** House style for proofs:
`items/lem-cauchy-bounded.md` is the approved exemplar.

**Mechanism architecture: `ARCHITECTURE.md`** — every gate, ledger, brief and
visual tier, how each works and which failure it prevents. Read it before
adding or changing a mechanism.

**Subagent brief templates: `briefs/`** — the prompt-side half of the workflow
(scaffold, step-6 batch audit, authoring, GLM judge). `LEVELS.md` describes
them; those files are the actual text.

**Per-level build, step 0 to 9: `LEVELS.md`** — the canonical description of
how a dependency level is built (actors, artifacts, the nine gates, the
self-contained-scope rule, the twice-touched escalation). Read it before
starting or resuming a level.

**End-to-end runbook:** `WORKFLOW.md` describes the full workflow (the model
roles, the modified reasoning/disproof engines, the RAG distiller, the
seven-step loop, serving over SSH, publish, and the gotchas). Read it for how to
run a page from prompt to publish; the normative docs above win where they differ.

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`).
2. **Precheck (mechanical, free)** — from the repo root:
   ```
   node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/precheck.mts
   ```
   Bare = all items; or pass specific files. On REPAIR output, adopt the printed
   canonical stratification into the file and re-run until clean (the repo stores
   the strictly stratified form: a step citing phase-k steps sits in phase k+1).
   Record `verification.precheck: pass`.
3. **Cross-family judge** — **RUNS ONCE, AFTER the step-6 Beta/Alpha audit, on
   final text**; authors do not judge. Current session workflow (owner,
   2026-07-30): authoring agents use **GPT 5.6 Terra via the Codex subscription
   plan**, Beta/Alpha use **GPT 5.6 Sol via the Codex subscription plan**, and
   the judge uses **GLM 5.2 via the ofox API**. All run at `xhigh` reasoning.
   GPT-family models are never run through ofox for this workflow.
   `tools/judge.mts` is the GLM judge path and preserves the injection-test
   record.
   **The judge's context unit is the A/B PAIR:** it receives the item's own page
   and `-examples` companion in full, plus exactly the pages the item's own page
   both declares in `requires` and actually cites. Record model/verdict/date in
   `verification.judge`; never record a pass the judge did not give. Commit the
   full verdict ledger at `research/level<n>-judge.jsonl`. A proof refuted or
   repaired more than once escalates per WORKFLOW.md §"Twice-touched proofs".
3b. **Final Alpha-n audit — WHEN PUBLISHING A LEVEL**. Before the owner audit,
   Alpha-n audits the WHOLE level under `LEVELS.md` step 6: Betas verify every
   proof step and in-batch dependency citation, Alpha audits Beta fixes from
   disk, then Alpha audits cross-batch and cross-level citations. Fatal includes
   a title or Statement asserting more than the proof gives — the judge reads
   Statements and cannot see a false title. `LEVELS.md` §"Step 6".
4. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory.
5. **Commit + push** (`main`, conventional-commit style). NO Co-Authored-By
   trailers, ever. GitHub is backup only, never on the serving path.

## Preview

The `/library` renderer is built in the app repo (routes under
`web/app/library/`, reading env `MATH_LIBRARY_DIR`). Local preview: run the app
dev server on `:3001` and SSH-tunnel per `WORKFLOW.md` step 6 (`docs/DEV_WORKFLOW.md`
in the app repo has the tunnel). The signed-in owner sees drafts with a DRAFT
banner; the public sees only `published`.

## Hard rules

- **No shell-permission prompts (owner, 2026-07-30).** This binds the
  orchestrator and every current and future subagent. Run routine repository
  reads, writes, and gates inside the workspace sandbox and choose
  non-escalated command forms. Do not request shell-command approval from the
  owner. On runtimes that expose `dangerouslyDisableSandbox`, pass it on every
  Bash call as the existing unattended-build backstop; on runtimes that do not,
  stay within their already-granted workspace permissions. If an indispensable
  operation truly cannot be expressed without new authority, stop and record a
  blocker instead of raising a permission prompt.

- **Step-3 decisions belong to the orchestrator (owner, 2026-07-30).** In this
  and every future session, the orchestrator verifies each Beta recommendation
  from disk and then **approves or declines it using best judgment**; it does not
  hand routine scaffold adjudication back to the owner. The decision priority
  is: (1) mathematical accuracy and correct citation of dependencies are
  non-negotiable; then (2) minimize forward references; then (3) preserve
  mathematical richness. Investigate uncertainty before deciding and log the
  decision plus rationale.

- **Step-9 fatal-error report (owner, 2026-07-30).** At the end of step 9,
  before the publication pause, the orchestrator gives the owner a concise but
  complete account of every fatal mathematical error encountered and fixed.
  Group errors by defect type (for example invalid inference, incorrect
  dependency citation, false/overstrong definition or theorem, missing
  hypothesis/choice scope, invalid witness) and by location (title/Statement,
  proof/refutation, Facts/dependencies, Remark, or page prose/summary). For every
  error, name the affected id/file and the disposition: dropped/deferred,
  restated, proof repaired/replaced, prose corrected, dependencies corrected, or
  a new lemma/result added. Detailed Beta/Alpha/judge ledgers remain the evidence
  source; concision must not omit a fatal defect.

- **Keep the normative docs current (owner, 2026-07-27).** `CLAUDE.md`,
  `WORKFLOW.md`, `LEVELS.md` and `ARCHITECTURE.md` are normative and are
  updated **in the same commit as the change they describe** — a new or
  retired tool, a new gate error code, a change to the agent hierarchy or a
  brief, a new owner rule, a change to the frontmatter contract, or a
  measured fact about a mechanism. Verify against the code, never from
  memory: when a doc and the code disagree, the code is the truth and the
  doc is the bug.

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.
- **Self-contained scope (owner, 2026-07-27).** No item may rest on a result the
  library has not established. A theorem or example needing out-of-scope
  machinery (measure theory, functional analysis, …) is **DROPPED from the
  scaffold with a note saying why and what would license it**, never authored
  with a ‡ dependency. The sole exception is a foundational axiom already
  adopted — AC, countable choice, dependent choice — and the independence facts
  about those axioms. The ‡ tier and the `deferred-*` catalogue pages STAY; what
  ends is depending on them. Forward-looking: published items are not
  retrofitted. Full rule in `WORKFLOW.md` §"Self-contained scope".
- Generation for this library NEVER goes through the public billed pipelines.
  Current session route: GPT 5.6 Terra authoring and GPT 5.6 Sol Beta/Alpha
  audit through the Codex subscription plan; GLM 5.2 judging through ofox. Do
  not wire a subscription account into the worker service.
- Mathematical content requires the step-6 Alpha/Beta audit before publish, even
  when judged.
- **Scaffold richness (owner, 2026-07-30).** For every A/B pair, Beta decomposes
  long theorem/lemma proofs into focused intermediate lemmas and performs a pass
  for useful, cheaply proved corollaries. The A-page size-warning ceiling is 100
  total items, raised from 60. It is a review ceiling, not a target: never pad,
  and never drop valuable results merely for ergonomics or to stay below it.
- **Source-grounded, dependency-closed scaffolding (owner, 2026-07-30).**
  Before constructing an A/B scaffold, Beta searches reputable mathematical
  sources on the web for the relevant definitions, theorem and corollary
  statements, counterexamples, and proof strategies, and records the sources
  and any convention disagreements in its notes. Beta has read access to the
  full published library and must open every published item it intends to cite.
  Every load-bearing dependency must be established by published content or by
  an earlier item inside the pair; otherwise the result is decomposed,
  rescoped, or dropped under the self-contained-scope rule.
- **Natural mathematical voice and citation fidelity (owner, 2026-07-30).** Do
  not write AI-sounding labels or interpretive filler such as "Null definition:"
  or "the key bridge says". In every `[F#]`, `[A#]`, or `[L#]` dependency fact,
  state the cited definition/theorem itself: quote it exactly when practical, or
  give a concise shortening that preserves its domain, quantifiers, hypotheses,
  conclusion, and direction with maximum fidelity. Never replace the proposition
  with a synthetic summary of what it is "for". This binds the orchestrator and
  every scaffold, author, Beta, Alpha, and judge agent.
- **Page-summary contract (owner, 2026-07-30).** Every A-page summary is exactly
  two nonempty prose paragraphs, each under 150 words. Paragraph 1 gives the
  mathematical background and names definitions and results from declared
  dependencies that the development uses. Paragraph 2 names the main definitions
  and theorems developed on the page and explains their general logical
  progression. A B page has no authored summary body at all. A summaries remain
  bound by SCHEMA §6: no counts, self-ranking, unsupported reading position, or
  survey claims about other pages.

## Presentation (owner-approved 2026-07-24, FROZEN — do not restyle)

The owner has explicitly approved the aesthetics and presentation and asked that
they persist across ALL future sessions. Treat this as a hard constraint: do NOT
change the visual style, layout, colours, spacing, typography, or flowchart look
in EITHER repo without an explicit, in-session owner instruction to restyle. New
content must be authored to SCHEMA.md's layout rules so it renders identically to
what exists; adding content is always fine, restyling is not.

The approved style is implemented by these files (the source of truth — read them
before any rendering change, and preserve their behaviour):

- `web/lib/library-kinds.ts` — the per-kind colour palette (light + dark):
  definition=blue, theorem=violet, lemma/proposition=teal, corollary=violet,
  example=emerald, counterexample=amber, false-statement=rose, remark=slate.
  Colour is ALWAYS paired with the kind label (never colour-alone). Drives both
  the kind chips and the flowchart node fills.
- `web/components/library/ItemBody.tsx` — mechanical proof rendering: sectioned
  Statement / Facts & Assumptions / Proof, a "technique ·" line, one row per
  fact and per step, right-aligned mono step numbers, per-citation tag chips in
  a bounded wrapping end column, collapsible Scratch.
- `web/components/library/badges.tsx` — kind chips (coloured), DRAFT banner,
  provenance + verification chips. The provenance pill shows ONLY the provenance
  label (no "judge N/M" fraction — that reads as failures and is banned here);
  the judge count lives in the verification caption below (see page.tsx).
- `web/components/library/Mermaid.tsx` — flowchart v2: straight thick indigo
  edges (linear curve, 2.75px), 13px squarish (iPhone-like) corners, nodes
  coloured by kind, click-to-enlarge lightbox (Esc/backdrop close), selected
  dark palette (not auto-flip).
- `web/app/library/[...path]/page.tsx` — the five fixed-numbered page sections
  (1 Prerequisites · 2 Summary · 3 Flowchart · 4 Definitions/theorems/proofs ·
  5 Examples/counterexamples/false statements), always rendered, with honest
  empty-state lines. Section 1 Prerequisites is PAGE-level: links to the other
  library pages proving this page's dependency closure, never individual items.
- **Verification caption (owner-approved, keep it): a short always-visible note
  directly under the provenance pill** reads "✓ N results · all verified · K also
  independently AI-judged", then explains every result is machine-checked and
  owner-audited and that the judge is an ADDITIONAL independent AI review, so the
  items not AI-judged were owner-verified, NOT failures. This exists so "judge
  31/34" can never be misread as failures; do not remove it or reintroduce a
  bare judge fraction as the headline.
- **Forward references (owner-authorised addition, 2026-07-25 — ADDITIVE, not a
  restyle; keep it).** The owner allowed forward references on condition that
  they are VISIBLY different from everything else, and that their CONSEQUENCES
  (examples, corollaries, anything downstream) are marked the same way, since
  such a consequence may use the forward reference in its own proof. Implemented
  by `web/lib/library-forward.ts`, which owns the single accent used for all of
  it: **sky, a dashed underline on links, and the ↗ glyph** (sky is used nowhere
  else; the kind palette and the state chips are untouched). Marker text always
  accompanies the colour, as everywhere else here. `web/components/library/
  MathMarkdown.tsx` renders a forward link, and renders it as marked text rather
  than a dead link when the target is not authored yet;
  `web/components/library/badges.tsx` adds `ForwardDependentChip` for an item
  that rests on later material, `direct` or `inherited`. The content side is
  `forward_refs` in item frontmatter (SCHEMA §3) plus `tools/fwdcheck.mjs`.
- **Recorded-but-not-proved, a THIRD tier (owner instruction, 2026-07-25 —
  ADDITIVE; keep it).** The owner asked that the deferred results of
  `DEFERRED.md` be INCLUDED in the library, and that they and their consequences
  be visibly different from everything else INCLUDING ordinary forward references
  and their consequences; that every unproved dependency inside a proof be
  visibly different from every other dependency; and that the reader be reminded
  such a dependency is not developed here. Three ranked tiers result, each
  distinct in colour, underline style AND glyph, so none relies on colour alone:

  | tier | colour | underline | glyph |
  |---|---|---|---|
  | ordinary citation | indigo | solid | none |
  | forward reference | sky | dashed | ↗ |
  | **not proved here** | **fuchsia** | **dotted** | **‡** |

  Fuchsia is used nowhere else, and the bottom tier OUTRANKS the middle one.

  **Content-side policy change, owner 2026-07-27 — the RENDERING below is
  untouched and stays frozen, but the ‡ tier no longer licenses new content.**
  New items may not depend on a `proved_here: false` item at all (see Hard rules
  above); the tier now serves the `deferred-*` catalogue pages, which record
  results the library does not prove, plus the pre-existing choice/independence
  citations. Do not delete this machinery — it is still in use.
  Owned by `web/lib/library-external.ts` (accent + the `unprovedDependence`
  closure, which propagates along `deps` so consequences are marked too);
  `web/components/library/ItemBody.tsx` marks the FACT row carrying an unproved
  dependency and EVERY step tag citing that fact; `badges.tsx` adds
  `UnprovedDependentChip` and `UnprovedDepsNote`, the always-visible reminder in
  the spirit of the verification caption. Content side: `proved_here: false` in
  frontmatter (SCHEMA §3), the `not-proved-here` category, and
  `tools/extcheck.mjs`.
- **Search and issue reporting, owner-commissioned 2026-07-28 — ADDITIVE, not a
  restyle; keep them.** The owner asked for a search box and a way to report
  mathematical inaccuracies. Both are built from the EXISTING vocabulary only —
  the kind palette for result chips, the chip shape of `badges.tsx`, existing
  neutrals — and introduce **no new accent**; sky and fuchsia remain reserved for
  forward references and the ‡ tier. Owned by `web/components/library/SearchBox.tsx`
  (client, mounted in `web/app/library/layout.tsx`), `web/lib/library-search.ts`
  + `web/app/library/search-index/route.ts` (the index), and
  `web/components/library/ReportIssue.tsx` + `web/lib/library-feedback.ts` +
  `web/app/library/feedback/route.ts` (per-item reporting to
  `support@prestige-intelligence.cc`).
  **Two rules here are correctness, not taste.** The search index is
  **published-only for the public** — it is a file in the browser, so shipping
  drafts would publish unpublished mathematics to anyone with devtools; the route
  serves the owner's draft-bearing index as `private, no-store` with
  `Vary: cookie`. And the index is built through `plainTitle()`, never a second
  de-TeX, so a reader typing `sqrt` matches `\sqrt`.
- **Corpus loading is memoised** (`web/lib/library-cache.ts`), which took a page
  view from ~50 ms of re-parsing 1,204 items to 0.50 ms. The DATA is cached and
  the RENDER is not, deliberately: the routes await `auth()` and show drafts to
  the owner only, so caching rendered pages would leak drafts or hide them.
- Flowchart is BIRDS-EYE: only `landmark: true` items are nodes; edges are the
  transitive reduction of nearest-landmark-ancestor. Curate landmarks (main
  theorems, key definitions, key lemmas); do not revert to one-node-per-item.
- **Index page, owner-instructed restyle 2026-07-26 — now itself FROZEN.** The
  owner reopened the `/library` INDEX only (the page and item renderers were not
  touched). Owned by `web/lib/library-categories.ts` (per-group accent, A/B
  pairing, page-level dependency graph), `web/components/library/group.tsx`
  (group card + page row) and `web/app/library/group/[slug]/page.tsx` (the group
  dependency tree). A page's `<name>-examples` companion is listed in a RIGHT-hand
  column on its A page's row, never on a line of its own. Group titles are cards
  with a per-group accent, and no webfont fetch, so the Docker build stays
  hermetic. Sky and fuchsia remain reserved; the single use of fuchsia is the
  `not-proved-here` group, which IS the ‡ tier.
- **Index page, SECOND owner-instructed restyle 2026-07-27 — liquid glass, and
  now itself FROZEN.** The owner reopened the INDEX again (the item and page
  renderers were NOT touched and remain frozen at the 2026-07-24 spec). Cards are
  translucent glass: `backdrop-blur-xl backdrop-saturate-150` over `bg-white/55`
  (`dark:bg-white/[0.055]`), a `1.75rem` radius, a two-layer shadow, and a
  specular top edge. The per-group hue moved from an opaque wash to a
  TRANSLUCENT tint layered over the glass, so it tints rather than paints.
  **The left accent bar is GONE** (owner, 2026-07-27) and the `bar` field was
  removed from `CategoryStyle` with it; colour is still never alone because the
  group title carries the hue and IS the group's name. Masthead and group titles
  use `.font-display-rounded` — `ui-rounded`, which resolves to SF Pro Rounded on
  Apple platforms and degrades to `system-ui` elsewhere. **Naming a family never
  fetches; there is no `@font-face` and the build stays hermetic** — the same
  constraint that made the old display serif a system stack. `.library-ground`
  gives the `/library` layout a subtle vertical gradient, built with `color-mix`
  against `--background` so it themes itself in both modes. Dark tints run at
  `/40` (light `/35`) after the owner reported the first pass looked washed out;
  `prefers-reduced-transparency: reduce` falls back to an opaque surface.
  Owned by `web/app/globals.css`, `web/app/library/layout.tsx`,
  `web/app/library/page.tsx`, `web/components/library/group.tsx` and
  `web/lib/library-categories.ts`.
- **Titles are LaTeX; nothing renders KaTeX inside a mermaid label.** `plainTitle`
  in `web/lib/math-library.ts` is the one de-TeX for every plain-text context
  (flowchart labels, OG cards, metadata): a Unicode symbol table, `\{`/`\}` kept
  as set braces, unknown control words degrading to their own name, and
  all-or-nothing scripts so `a^{1/n}` stays `a^1/n` rather than becoming the
  false-reading `a¹/n`. Do not reintroduce a second, cruder copy.

Global entry point for future sessions: the `/math-library` skill loads this
file first. If a future session is tempted to "improve" the look, STOP — the
look is settled; only the owner reopens it.
