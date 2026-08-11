# frontier-11 — RESUME

Written at the step-2/step-3 boundary. **Verify disk state before trusting any
line here.** Run prefix is `frontier-11`, not `level<n>`.

## Objective

Owner instruction, 2026-08-11: **build the next set of non-topology A/B pairs.**
Orchestrate steps 0 → 10 and stop at the step-10 owner pause. Nothing here
publishes. Owner also asked for a stuck-check roughly every 15 minutes.

## Current step

**Step 2 complete, all gates green. Step 3 not yet started.**

## State

- Branch `main`. HEAD at write time: `893b9ca5` + one docs commit; scaffolds and
  the decisions/brief files are **uncommitted** — commit them once batches 4 and
  5 exit.
- Baseline before this run: `fffbace9`.
- `preflight.mjs --judges` = **READY**. Both judge lanes validated with a real
  call. `DEEPSEEK_API_KEY` lives in `/Users/ianx/Projects/prestige-intelligence/.env`
  (owner supplied it at 23:20; it was absent when the run started). `katex` and
  `yaml` were installed into the app repo — without them **`rendercheck` skips
  silently** rather than failing.

## Owner policy changes made this session

1. **Permission rule broadened (owner).** Web-search permissions named
   explicitly, and the rule binds a **compound command as a whole — no segment of
   an `&&` chain may prompt.** Applied to `CLAUDE.md` §Operating and propagated
   into all 8 `briefs/*.md` plus both run briefs. CLAUDE.md is now **39,642
   chars** against the 40,000 ceiling — ~358 free.
2. **D1, the ℂ relocation (owner, approved).** See below.

Practical note: `.claude/settings.local.json` is rewritten by the runtime, so a
blanket allow-list written from inside the session does **not** persist. Avoid
`cd` and `&&`; one command per Bash call, absolute paths.

## The 9 pairs and 5 batches

| batch | A pages (order) | A+B items |
|---|---|---|
| 1 | field-extensions-and-the-complex-numbers (54), conjugacy-and-simplicity-in-the-symmetric-groups (64) | 16+7, 18+8 |
| 2 | the-fundamental-theorems-of-calculus (239), arc-length-and-rectifiable-curves (181) | 8+6, 13+6 |
| 3 | formal-power-series (193), extremal-graph-theory (219) | 22+9, 20+7 |
| 4 | the-determinant-of-a-linear-operator (84), the-integral-logarithm-and-its-characterisations (178.1) | 18+6, 19+5 |
| 5 | universal-properties-and-the-yoneda-lemma (361) | 20+14 |

**222 items, 350 harvested source headings, 0 coverage errors.** Page-level
cross-batch seams: **0**. Item-level seams were **not** reported as 0 at step 0 —
they were not yet computable, per `LEVELS.md` §0.4.

Topology deliberately excluded (owner scope): orders 277, 285, 287, 293. Two
`not-proved-here` catalogue drafts (orders 2, 4) are on the disk frontier but are
not content builds.

## Gate results so far

`node tools/gates.mjs --step 2 --run frontier-11 --json` → **all pass**:
`validate-plan.mjs`, `depsource.mjs`, `coverage-checklist.mjs` (9 pages, 348
harvested, 0 errors, 0 warnings).

## Decisions — `research/frontier-11-step3-decisions.md`

- **D1 (OWNER, approved): relocate 4 published ℂ items** —
  `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws` — from
  `the-complex-exponential-and-eulers-formula` (order 189, level 23) to
  `field-extensions-and-the-complex-numbers` (order 54, level 19). Ids unchanged,
  so all **20** citing items keep resolving. Order 189 goes 32→28 items and gains
  `field-extensions-and-the-complex-numbers` in `requires` (no cycle). **Applied
  by Alpha at step 4** with a `touchlog` baseline taken BEFORE the first edit,
  then `impact-audit` resolving all 20 consumers. Cause: a level-19 page cannot
  cite a level-23 page, so order 54 had no legal route to the existing ℂ.
- **D2** approve adding `roots-and-rational-powers` to order 54's `requires`.
- **D3** routed to Alpha: the transcendental-extension / `F(x)` decline (batch 1
  called it their only whole-subject omission) and the composite-of-subfields
  deferral to `splitting-fields`.
- **D4** approve batch 2's three integration-theory declines (Lebesgue FTC,
  Banach–Zarecki, Henstock–Kurzweil) — each needs a whole absent subject area,
  the licensed use of `deferred`.
- **D5** routed to Alpha: the **8-item FTC page** that states neither fundamental
  theorem (14 headings were `already-published` on order 161), and arc-length's
  textbook-free sourcing.
- **D6** approve batch 4's local cofactor/adjugate/Cramer machinery. **My
  dispatch brief was wrong** — order 82 does NOT own them; Beta verified per item.
- **D7** approve the rank-one route to adjugate similarity-equivariance (avoids a
  fraction field that does not exist yet).
- **D8** approve RA-27b's B-page citation being replaced by its A-page source
  (`thm-log-one-plus-x-power-series`); a B page may not be a formal dependency.
  **Deviation from the letter of the owner's RA-27b design — flag at step 10.**
- **D9** approve batch 5's prose-scaffold amendments, incl. replacing a CT-2
  clause that is **false as written** (`Nat(F,G)` a set for arbitrary functors
  between locally small categories).

## Standing scope obligation

`the-integral-logarithm-and-its-characterisations` (178.1/178.2) is in **batch
4**. `LEVELS.md` §0.5 requires **all three** RA-27b gaps to close — integral-first
`L(x) := \int_1^x dt/t` with no `exp` in its proofs, the functional-equation
characterisation, and the equivalence theorem. **Two of three does not discharge
it.** Strike the obligation from `LEVELS.md` in the same commit that publishes.

## Exact next action

1. Wait for batches 4 and 5 to exit (`research/frontier-11-dispatch/beta-batch-{4,5}.result.json`).
2. Commit scaffolds + `frontier-11-step3-decisions.md` + `frontier-11-brief-alpha.md`.
3. Dispatch Alpha at step 3:
   `node tools/dispatch.mjs --role alpha --brief research/frontier-11-brief-alpha.md --label step3 --run frontier-11 --timeout 10800 --json`
   Alpha writes `research/frontier-11-alpha-step3-scaffold-review.md` with a
   `sufficient`/`insufficient` verdict per pair. Route findings to owning Betas,
   Alpha re-checks, then step 4 splices.

## Roles for the rest of the run

Betas = GPT 5.6 Sol, xhigh, 1M, workspace-write, web on, lane cap 5. Alpha =
Claude Opus 5 `claude-opus-5[1m]`, xhigh, cap 1. Step-6 readers and Alpha's
refuters = Sol (refuters read-only). Judges = DeepSeek V4 Pro + GPT 5.6 Terra,
`JUDGE_LINEUP=deepseek+terra`, pools 16 each / 32 combined.

Run briefs: `research/frontier-11-brief-beta.md`,
`research/frontier-11-brief-alpha.md`. Per-batch dispatch tasks:
`research/frontier-11-beta-<i>.task.md`. A run brief must not contain a literal
`<n>`/`<k>` — `dispatch.mjs` refuses it.

## Open risks

- Step 4's splice **hard-fails on id clash**; batch 1's order-54 scaffold claims
  the four ℂ ids, so D1 must be applied before or during the splice.
- Batch 2 is the weak batch and may come back `insufficient`.
- `run-wave.test.mjs` A10 failure is **pre-existing** on a clean tree; not caused
  by this run.
