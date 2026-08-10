# `frontier-10` — run record

Started 2026-08-11. Branch `feat/coverage-harvest-and-frontier-10`, baseline
`2b6e537`. Run under `LEVELS.md` steps 0 to 10.

## The owner's request

> Start building all non-topology A/B pairs, as well as adding orbit stabilizer
> theorem and its consequences and examples to "group actions" A/B pair.

Preceded by a diagnosis the owner asked to be carried forward:

> I am not confident with how Beta agents are instructed to fetch sufficient
> amount of knowledge from the open web. We need textbooks, lecture notes, and
> other rich sources of knowledge, not just wikipedia. Keep this in mind.

Amended mid-run, twice:

> Instruct Beta agents to build all prerequisite definitions and theorems if a
> theorem requires them. Do not take the lazy approach and drop an important
> result; build all necessary machinery. If an A page gets too large (over 60
> items), split it into two or more A pages.

> Make sure this is enforced for all future sessions as well.

## Mechanism changes made BEFORE dispatch (both committed)

`a0614cf` — the omission gate. `tools/coverage-checklist.mjs`, required at steps
2 and 6. Per A page: ≥2 independent treatments, ≥1 textbook/monograph/full note
set, per source the exact range read plus that source's own section and
named-result headings, per heading a disposition. `ARCHITECTURE.md` §3.11b.
Also gave the `beta` and `reader` dispatch lanes `web: true`.

`ed4fb82` — build the machinery; split at 60. `validate-plan.mjs --max-items`
default 100 → 60 and `size` moved from WARN to ERROR.

**Diagnosis behind them, for anyone re-reading this later.** The thin pages were
not caused by bad sources. frontier-9's batch notes cite Sharifi (UCLA), Brosnan
(UMD), Judson, Axler, Diestel. The defect was that a Beta could cite a source
without harvesting it: Brosnan's note titled *Orbits and stabilizers* was logged
as covering "orbit structure" and the orbit–stabiliser theorem never reached the
scaffold. frontier-9 shipped 83 items across 20 pages — about 4 per page.
frontier-9's dispatch transcripts were not retained, so whether its Betas
actually fetched or asserted from memory could not be established either way.

## Scope — 12 pair-units

Eleven new non-topology pairs, from the 15 buildable today (`LEVELS.md` §Step 0
frontier rule, computed from disk). The four topology pairs
(`complete-metrizability-and-baire`, `ascoli-arzela`, `stone-weierstrass-general`,
`covering-spaces-and-lifting`) are **deliberately excluded** by the owner's
"non-topology" scope and remain buildable for a later run.

Two scope readings recorded rather than escalated:
`plane-graphs-euler-and-the-five-colour-theorem` is IN — its category is
`combinatorics` and it is graph theory, notwithstanding the planar-topology
subject matter. `categories-functors-and-natural-transformations` is IN — its
category is `category-theory`.

## Batches — 8, all seam-free

**Zero cross-batch dependency edges.** None of the eleven A pages requires
another, so they are provably mutually independent and any grouping is seam-free
at page level. Grouping is therefore by *shared prerequisite* (one Beta reads one
dependency set twice) and by downstream co-unblocking, not by seam burial.

| batch | A pages | why grouped |
|---|---|---|
| 1 | symmetric-groups-and-the-sign-homomorphism (44), matrices-and-the-matrix-of-a-linear-map (78) | jointly the two blockers of `determinants-of-matrices-over-a-commutative-ring` (82) |
| 2 | the-structure-of-finite-abelian-groups (40), free-products-and-amalgamation (62) | group theory, both level 17 |
| 3 | polynomial-rings-and-roots (52) | solo — ring theory, feeds 4 pending pages |
| 4 | bounded-variation-and-riemann-stieltjes (163), improper-integrals (165) | identical single prerequisite |
| 5 | fubini-and-change-of-variables (237) | solo |
| 6 | ramsey-theory (217), plane-graphs-euler-and-the-five-colour-theorem (357) | both from `graph-colouring` |
| 7 | categories-functors-and-natural-transformations (359) | solo — 8 prerequisites across four subjects |
| 8 | group-actions-and-cayleys-theorem (42) | **ENRICHMENT of a published pair** |

Three solo batches are deliberate, not leftovers. The cap is *at most* two pairs
per Beta, not exactly two, and the owner's complaint is about depth: a Beta
holding one meaty topic can harvest it further than one holding two.

## Batch 8 — the enrichment

`group-actions-and-cayleys-theorem` is `status: published` with **6 items** and
`examples: []`. It has `def-orbit-and-stabilizer`, `lem-stabilizer-is-a-subgroup`
and `thm-orbits-partition-the-set` but **not the orbit–stabiliser theorem
itself**, and no class equation, Cauchy's theorem, Burnside/Cauchy–Frobenius, or
p-group fixed-point results. The B page has no items at all.

Follows the `freegroups-1` precedent (its D4): both pages are published, and
`depcheck` raises `draft-on-published-page` when a published page lists a
non-published item. So **every new item is authored `status: draft`**, and the
additions to the two pages' `items:`/`examples:` lists are **staged** in
`research/frontier-10-published-amendments.md` and applied only in the single
publishing commit, together with the status flips.

Its manifest lists **only ids the batch mints**; the 7 already-published ids are
recorded under `enrichment_of_published` as context. Listing them as batch items
is what `content-policy.mjs` rejects with `batch-item-already-exists` — that was
the first step-0 failure of this run.

## Mid-run owner instructions (2026-08-11), all landed before step 3

- **`\iota` gone from the free-groups pair**, with rejudge/restamp explicitly
  waived. 12 items, commit `cce8d63`. Full record and the one non-cosmetic spot:
  `research/frontier-10-notation-change.md`.
- **Alpha reviews scaffold breadth and depth at the end of step 3**, standing for
  all future sessions. Alpha now spawns at step 3, not step 4. Commit `fa4448b`;
  `briefs/alpha.md` §"Stage 0", `LEVELS.md` §"Step 3".
  **This binds the current run** — step 3 is not complete until
  `research/frontier-10-alpha-step3-scaffold-review.md` exists and every pair is
  `sufficient`.

## State — step 3 in flight

- **Steps 0, 1, 2 CLEAR.** All 8 Betas exited 0 (36–84 min each). Step-2 gate:
  `validate-plan`, `depsource`, `coverage-checklist` all green.
- **Scaffold totals: 12 A pages, 508 items to author, 39 sources, 720 harvested
  headings, every one disposed** — 508 `included`, 115 `inline`, 26
  `already-published`, 40 `deferred`, 31 `out-of-scope`. The coverage gate's
  first real outing found 0 errors. frontier-9, for comparison, shipped 83 items
  across 20 pages.
- No A page exceeds 60. `categories-functors` is at exactly 60 (see D2).
- **Step 3 half one done** — `research/frontier-10-step3-decisions.md`, D1–D4.
- **Step 3 half two RUNNING** — Alpha dispatched for the breadth/depth review of
  batches 1–8, and **batch 9 Beta dispatched** (see D1).
- **The run is now 14 pair-units, not 12.** D1 spliced
  `gaussian-elimination-and-row-reduction` (80) and
  `determinants-of-matrices-over-a-commutative-ring` (82) as batch 9: Beta-5
  correctly refused to scaffold change-of-variables against a library with no
  determinant, and the owner's build-the-machinery rule says build it.
  **Batch 5 cannot author until batch 9's interfaces exist.**
- Supervision: a 15-minute health monitor is armed (owner request). Its first
  version had a broken staleness detector and gave one false STALE; replaced.
- Permissions: `.claude/settings.local.json` now allows Bash/Edit/Write
  unconditionally with `defaultMode: acceptEdits` (owner, no prompts). Gitignored,
  backup in the session scratchpad. `node tools/gates.mjs --step 0 --run frontier-10` passes
  `validate-plan.mjs` and `content-policy.mjs --manifest-only`.
- 8 manifests at `research/frontier-10-batch-{1..8}.pages.json`.
- Item lists are empty by construction (these pages are unscaffolded in the
  spec), so the **cross-batch seam count cannot be computed from item lists yet**
  — `LEVELS.md` §Step 0 requires saying so rather than reporting 0. The
  *page-level* seam count is a computed 0, above.
- Nothing dispatched yet.

## Exact next action

Await Alpha's step-3 review and batch 9. Resolve every `insufficient` pair with its owning Beta, have Alpha re-check, then step 4: splice all 9 batches into plan-spec.json (adding the two determinant pages to fubini-and-change-of-variables `requires`), then step 5 authoring.
Every Beta must have produced `research/frontier-10-batch-<i>.coverage.json`
alongside its `.pages.json` and `.notes.md`, or step 2 fails `missing-receipt`.
Then step 3: orchestrator adjudicates recommendations, **then dispatch Alpha for
the breadth/depth review** — that half of step 3 is new as of this run and is
mandatory before any step-4 splice.

## Open risks

- The coverage gate is new and has never run against a real Beta's output. Its
  four paths were verified against fixtures only.
- The 60-item ceiling is now a hard error and the build-the-machinery rule pushes
  pages toward it. Expect split proposals at step 2; those are Step-3
  orchestrator decisions and need `plan-spec.json` order insertions at step 4.
- `run-wave.test.mjs` has 2 pre-existing failures at baseline `2b6e537`
  (A10 owner-pause exit code). Untouched by this run; audit driver, not build.
