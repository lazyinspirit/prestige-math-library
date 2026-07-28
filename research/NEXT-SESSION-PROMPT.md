# NEXT SESSION — read this and do it

*Written 2026-07-29, immediately after `frontier-1` published. If a build has
happened since, this file is stale: check `git log` and
[the current-state memory] before trusting it.*

---

## The task

1. **Regenerate the pair table, then show me the whole thing.**

   ```
   node tools/rounds.mjs --pairs --md > research/BUILD-LEVELS.md
   ```

   It is **generated — never hand-edit it.** The spec moves under it every time a
   track is spliced or a level publishes.

2. **Build the next set of buildable A/B pairs**, chosen by the **"blocked on"**
   column being empty — *not* by the level column. As of 2026-07-29 that is
   **eleven pairs**; confirm the set yourself from disk rather than trusting this
   number, because publishing changes it.

3. **Work autonomously through step 10 and PAUSE at the rundown. Do not publish.**
   `verification.audited` is the owner's field alone.

4. Use `dangerouslyDisableSandbox: true` on every Bash call — an overnight run was
   once lost to sandbox-escalation prompts.

## THE WORKFLOW CHANGED ON 2026-07-28/29 — do not run it from memory

`LEVELS.md` is the authority. Read it. The seven changes, all owner-approved:

- **Execution order is `0 → 1 → 2 → 3 → 4 → 5 → 9 → 6 → 7 → 10`.** The step
  numbers are **stable names, not the running order** — they were deliberately not
  renumbered, because renumbering an identifier leaves dangling references
  everywhere it is quoted.
- **Authors do NOT judge.** An author is finished when its gates are clean.
- **The judge runs ONCE, after step 9, on final text.** Step 7's actor is the
  **orchestrator**: a rejection now lands on audited text, so a sweeper verifies
  and reports, never fixes.
- **Step 8 is retired**, merged into step 9 as one **fanned-out** audit — dispatch
  readers, re-verify every finding from disk, and keep **one scaffolder-authored
  reader per batch**.
- **Nine gates**, including the new `prosecheck.mjs`.
- **Four prose rules** bind every actor (no counts in prose; no positional claim
  not derived from the spec; scope denials scoped to *this page's declared
  prerequisites*, never "the library"; summaries describe the mathematics and
  Remarks justify rather than survey).
- **`--batch` takes only the pages an item's page BOTH requires and cites**,
  computed mechanically — not every A-page slug.

**Preflight the judge account before any sweep:**

```
npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/judge.mts --preflight
```

Exit 3 means the account cannot pay: **stop, it is terminal, and it needs an owner
top-up.** It is not a dropped verdict.

## Three obligations this build INHERITS — discharge them, do not rediscover them

1. **`compactness` (order 255) owes an agreement.** `frontier-1` minted
   `def-locally-compact-metric-space` as a *metric special case* because general
   topological compactness did not exist. When 255 defines it in general, it must
   record the agreement in the dictionary style of `def-metrizable-space`, or the
   library acquires two notions under one name.

2. **`uniform-convergence-of-functions` (order 169) is a live two-notions risk.**
   `frontier-1` minted `def-topology-of-uniform-convergence`,
   `thm-uniform-limit-theorem` and `thm-dini` at order **283**, so the plan's
   *earlier* home is the *later* build. Nothing is false today. There is a
   **BINDING note in `research/plan-realanalysis-pages.md` §RA-23** — read it
   before scaffolding that page.

3. **A plan defect sits at 255.** `plan-topology-track.md` §T5 plans "compact
   Hausdorff ⇒ normal" on the compactness page, but normality is defined at
   **261**. As planned that is a forward reference on the spine, which `fwdcheck`
   forbids outright on a theorem. Its only legal home is a page above both.
   Recorded in `research/frontier-1-RESUME.md`.

**Two of these land in this very build** — `compactness` and
`uniform-convergence-of-functions` are both in the buildable set. That is good
timing: discharge them while the reasoning is still on record.

## Run the Sonnet 5 authoring pilot

Owner-approved, protocol fixed in advance in `LEVELS.md` §Step 5. One A/B pair
authored by **Sonnet 5**, one comparable pair by **Opus 5**, in this build, under
the identical brief. **Do not tell the step-9 readers which is which** — an
unblinded audit measures the expectation, not the model. Decision rule, two-part:
switch the bulk only if Sonnet matches on **proof defects AND on scaffold errors
caught**.

## Size note

Eleven pairs is roughly double `frontier-1`'s six, so expect ~4 batches and a
larger step-9 fan-out. The pairs are **mutually independent**, so any subset is
legal — if the owner wants a smaller build, the two that close the seams above are
the highest-value choices.

## What to read first

`CLAUDE.md` → `LEVELS.md` → `SCHEMA.md` → `research/frontier-1-RESUME.md` (the
previous build's full decision log) → `research/workflow-efficiency-audit-2026-07-28.md`
(why the workflow is shaped this way).
