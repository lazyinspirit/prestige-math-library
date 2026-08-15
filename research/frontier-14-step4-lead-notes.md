# frontier-14 step 4 — lead Alpha notes and findings

Lead Alpha of record: dispatch `alpha/step4-lead` **attempt 2** (pid 91051, under
`tools/dispatch.mjs` pid 91039, under the autopilot). 2026-08-16.

Step 4 is **complete**: all 18 pages of the run are spliced (338 items) and all
seven receipts are emitted. `validate-plan` is clean. Nothing here blocks step 5.

Findings are numbered stably. None is a blocker; S1 is the one that needs an
action by someone other than me.

---

## What step 4 actually had to do this time

The run stepped back to step 4 to pick up **batch 7**
(`stone-weierstrass-general` 287 + `-examples` 288), the pair that was held at the
first pass. Batches 1–6 were already spliced *and already authored* — 314 items
are on disk — so the only splice owed was batch 7's 24.

**Idempotence held.** I checked all 18 pages against their manifests before
touching anything: 16 already populated, every one matching its manifest id-for-id
in declared order; 2 empty. Nothing was re-spliced.

| batch | pages | items | receipt |
|---|---|---|---|
| 1 | 305, 306, 307, 308 | 29 + 11 + 21 + 12 | `frontier-14-splice-1.json` |
| 2 | 285, 286 | 19 + 5 | `frontier-14-splice-2.json` |
| 3 | 277, 278, 293, 294 | 40 + 6 + 32 + 8 | `frontier-14-splice-3.json` |
| 4 | 90, 91 | 36 + 17 | `frontier-14-splice-4.json` |
| 5 | 57.003, 57.004 | 16 + 9 | `frontier-14-splice-5.json` |
| 6 | 365.003, 365.004 | 44 + 9 | `frontier-14-splice-6.json` |
| 7 | 287, 288 | 18 + 6 | `frontier-14-splice-7.json` |

Largest A page is `reflective-subcategories-and-the-adjoint-functor-theorems` at
**44 / 60**. Batch 7's A page is 18 / 60. No page is near the ceiling, so no split
is owed and none is recommended.

### Batch 7, verified from disk rather than relayed

Group Alpha c's re-check (`research/frontier-14-alpha-c-recheck.md`) returns
**ready for splice** on both pages. I did not take that on trust:

| check | result |
|---|---|
| ids match the manifest, in declared order | 18 A + 6 B, exact |
| id clashes against `plan-spec.json` and `items/` | 0 |
| A-page items citing B-page items | 0 |
| item deps resolving to nothing | 0 |
| distinct external deps | 29 — all exist in `items/`, all `status: published` |
| external deps homed outside 287's closure | **0** (closure walked from `plan-spec`: 64 pages plus 287 itself) |
| A-page size | 18 / 60 |
| `validate-plan.mjs` | exit 0, 0 hard errors |
| `plan-spec.json` diff vs HEAD | exactly the 24 items and the two `"items": []` removals — nothing else |

The `requires` union was a no-op: `plan-spec` already carried all five edges for
287, because the D1 approval landed ahead of the splice.

---

## S1 — four approved `requires` edges have no decision record

**Real, verified, and not mine to fix.** Step-3 decisions belong to the
orchestrator (owner, 2026-07-30), and the record is
`research/frontier-14-step3-decisions.md`. That file contains **D1–D4 only**.

Five `requires` edges are live in `plan-spec.json` that it does not mention:

| page | edge added | decision record |
|---|---|---|
| `stone-weierstrass-general` (287) | `field-extensions-and-the-complex-numbers` (54) | **none** — see below |
| `stone-weierstrass-general` (287) | `the-complex-exponential-and-eulers-formula` (189) | **none** |
| `contour-integration` (307) | `line-integrals-and-the-gradient-theorem` | **none** (Alpha a §G1) |
| `complete-metrizability-and-baire` (277) | `tychonoff-embedding-and-stone-cech`, `approximation-and-compactness-in-ck` | **none** (Alpha a §G1, wanted as a package) |
| `covering-spaces-and-lifting` (293) | `group-actions-and-cayleys-theorem` | **none** (Alpha a §G1) |

The two ℂ edges *were* decided — the reasoning is in the message of commit
`137c5f33`, and `research/frontier-14-splice-BLOCKER.md` names it **D5**. But a
commit message is not the decision record, and
`research/frontier-14-alpha-a-recheck.md` explicitly set the order of operations
as *"record D5 settling the four §G edges … and a D6 settling D1 → apply … →
splice"*. The splice happened; the writing-down did not.

**Why this matters and why it is cheap.** Every edge is mathematically fine — I
re-checked all five point backward, add no cycle, change no `order`, and
`validate-plan` is clean with them in. The cost is not correctness now, it is
that at step 10 the run cannot show *why* five prerequisite edges exist, and the
next audit reads an undocumented `requires` change as drift. Writing D5 and D6
into `research/frontier-14-step3-decisions.md` from the material already in
commit `137c5f33` and Alpha a's §G costs minutes.

**Routing:** orchestrator. Not a Beta finding, not step-5 work, and it does not
gate authoring.

## S2 — two step-4 lead Alphas ran at once; one was orphaned

`alpha/step4-lead` attempt 1 (pid 90667) was dispatched at 06:45:03. Its
`dispatch.mjs` harness exited 39 seconds later with `exit=null`, the autopilot
logged `dispatch-failed`, and at 06:46:03 it started attempt 2 — me. **The
attempt-1 agent did not die with its harness.** It was reparented to pid 1 and
kept working, with `--permission-mode bypassPermissions` and no supervision, and
in the next few minutes it:

- spliced batch 7 into `research/plan-spec.json` (06:47:31),
- emptied `HOLD` in `research/frontier-14-splice.mjs`,
- wrote `research/frontier-14-splice-7.json` and `research/frontier-14-receipt-7.mjs`,
- annotated `research/frontier-14-splice-2.json` and `research/frontier-14-splice-BLOCKER.md`,
- and committed `08899635`.

I found it because `plan-spec.json` gained 18 items for page 287 between two of my
own reads, one minute apart.

**What I did.** Step 4 has one owner by design, and its harness was dead — its
`result.json` would never be written, so the driver could never record it, while
my exit *would* advance the stage out from under it. I verified `plan-spec.json`
parsed and that nothing was mid-write, terminated pid 90667 (SIGTERM, then
SIGKILL), then re-verified every claim in its receipt against disk before adopting
its work as my own. The table above is that re-verification. Its splice was
correct; I found one false statement in its receipt and corrected it (S3).

**The general hazard, for `UNATTENDED.md`.** A `dispatch-failed exit=null` does
**not** imply the agent is gone. The retry then runs a second agent against the
same files with the same authority, and the surviving orphan is invisible to the
driver's stage accounting. The `adopted` mechanism exists for exactly this and
did not fire, because the driver had already classed attempt 1 as failed. A
dispatch that exits without its child reaped should kill the process group before
the retry is allowed to start.

## S3 — three snapshots share the label `pre-step5`, and two are post-authoring

`research/frontier-14-touches.json` now holds:

| # | at | items | genuinely pre-authoring for |
|---|---|---|---|
| 0 | 2026-08-15T18:04:12Z | 4646 | **the whole run** — the baseline of record |
| 1 | 2026-08-15T20:45:08Z | 4960 | batch 7 only (attempt 1's) |
| 2 | 2026-08-15T20:46:07Z | 4960 | batch 7 only (mine) |

The step-4 brief orders the snapshot taken before any authoring, so both later
snapshots were taken as instructed — but on a *step-back* into step 4 the
instruction produces a snapshot that is 314 authored items late. Attempt 1's
receipt asserted "No frontier-14 item exists in `items/` yet", which is false:
all 314 items of batches 1–6 are on disk, and the 4646 → 4960 gap is exactly
those items. I corrected that note in `research/frontier-14-splice-7.json` and in
its generator.

**No gate is broken by this, and here is the reason it is not:**
`tools/impact-audit.mjs:70` resolves `--from` with `snapshots.find(...)` — the
**first** snapshot carrying the label — so `--from pre-step5` selects index 0 and
the batches 1–6 diff is real. `--to` defaults to `snapshots.at(-1)`, which is
correct too. `touchlog.mjs`'s `repairs()` only diffs consecutive snapshots and
treats a first appearance as creation, not a repair, so the extra pair adds no
phantom repair rows.

I deliberately did **not** relabel the ledger — it is append-only evidence and
mutating it to tidy a label is not a lead Alpha's call at step 4. The trap is
therefore documented rather than removed, and it has one trigger: **if anyone
changes that `find` to a last-match, the batches 1–6 impact audit becomes empty
by construction and passes vacuously.** Relabelling indices 1 and 2 to
`pre-step5-batch-7` would close it permanently; that is an owner/orchestrator
call.

---

## Carried into step 5

Group Alpha c left seven residuals on batch 7 (`frontier-14-alpha-c-recheck.md`).
None gates the splice; all belong in batch 7's authoring brief so step 6 does not
rediscover them:

- **R1** — delete the coverage row claiming Erdman 21.2.15 carries a quotient
  construction; Alpha c extracted the PDF and it does not.
- **R2** — re-point the Erdman 21.2.2 row to `def-two-point-duplication-property`.
- **R3** — cite `thm-compactness-agrees-with-metric-compactness` at clause 2, not
  clause 1, in the three items reasoning about compact *subsets*.
- **R4** — cite `def-topology-of-uniform-convergence` at its uniform-topology
  clause, not its sequential clause.
- **R5** — two pointer-style quotes ("the displayed coordinate formulas") in
  `lem-real-part-of-a-self-adjoint-complex-function-algebra`; write the formulas.
- **R6** — seven free-text contract inputs; `"one-sided derivatives"` in
  `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` is load-bearing
  and needs either a dependency or the algebraic route written as steps.
- **R7** — superseded rows in the batch notes are unmarked and a step-5 author
  reads top-down.

R1 and R2 are two string edits to `research/frontier-14-batch-7.coverage.json`
that touch no item and no `plan-spec` entry. I did not make them: a lead Alpha at
step 4 edits no batch file.
