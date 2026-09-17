# Step 3b — scaffold audit and authoring: `the-ito-integral-with-respect-to-brownian-motion`

- Run `phase-2-remaining-27`, role alpha-high, label
  `step3b-pair-the-ito-integral-with-respect-to-brownian-motion-c91523bdab41cef0`,
  batch 8, output `research/phase-2-remaining-27-batch-8.pages.json`.
- Owned pair: A `the-ito-integral-with-respect-to-brownian-motion` (order 288.137,
  19 items) and B `the-ito-integral-with-respect-to-brownian-motion-examples`
  (order 288.138, 8 items).
- Status: **all 27 items authored and closed; my pair's checks green; sibling
  pair in the shared batch untouched and still unauthored.**

## 1. Read and decide

Authority read before authoring: `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/phase-2-remaining-27-owner-authoring-direction.md` (binding: complete
local proofs from declared suppliers; no new pairs; PT-21 carries no specific
amendment), `research/plan-probability-track.md` §0A.1--§0A.3 (L224--L275), §5
PT-21 (L2052--L2112), §7 obligations 40--42 (L2269--L2271), §8 choice ledger
(L2314--L2315), §9 seam (L2211), `research/plan-spec.json` (pages 288.137/288.138),
`research/phase-2-remaining-27-step3a-pair-the-ito-integral-with-respect-to-brownian-motion.md`
and its `sufficient` receipt, the batch-8 Step-1 notes, coverage, cross-batch
input, and the batch-7 authored items consumed here.

Sources used for the mathematics (as recorded in the batch-8 coverage rows,
fetch-verified in this run): van der Vaart, *Stochastic Integration and
Differential Equations* (Definition 5.1/5.3/5.20/5.25/5.32/5.62/5.79, Lemmas
5.5/5.21--5.23/5.28/5.33/5.45/5.77, Theorems 5.26 and 5.36, §5.8) and Lawler,
*Stochastic Calculus* (§2.8, §3.2.2--3.2.3, Propositions 3.2.1 and 3.2.4,
Theorem 3.2.6, equation (3.8), Exercise 3.8). Exact locators sit in the
coverage rows and in each item's `sources` block; every load-bearing supplier
item was read at statement level, and for the batch-7 items actually consumed
the complete statement or definition section and the exact clauses used were
read (`def-continuous-time-stopping-time`,
`def-natural-and-usual-augmented-brownian-filtrations`,
`thm-brownian-future-path-markov-property`, `cor-law-of-the-brownian-maximum`,
`thm-blumenthal-zero-one-law`, `def-quadratic-variation-along-a-partition-sequence`,
`thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes`,
`cor-brownian-paths-have-infinite-total-variation-on-every-interval`).

## 2. Scaffold audit, decisions and repairs actually made

1. **Repaired a B-page dependency in the scaffold.** The Step-1 row for
   `cor-deterministic-ito-integrals-are-gaussian` declared
   `ex-weak-convergence-of-gaussian-laws-by-parameters` as a supplier. That item
   lives only on the B page `weak-convergence-tightness-and-representation-examples`,
   and B pages are dependency leaves (`depcheck` rule `b-leaf-content`;
   plan §0A.1 invariant 2). Repair: the corollary now proves the limit law by
   characteristic functions, using `lem-characteristic-function-of-a-normal-law`
   (page `central-limit-theorems`), `lem-characteristic-functions-under-affine-maps-and-independent-sums`
   and `thm-uniqueness-of-a-law-from-its-characteristic-function` (page
   `characteristic-functions-inversion-and-continuity`) plus the general
   convergence-in-probability bridge; all these pages lie in the A page's
   `requires` closure. The manifest row's deps were updated accordingly.
2. **Standing hypothesis (H) isolated.** The scaffold's "Brownian motion with
   respect to a filtration" phrase is realized as hypothesis (H) (increments
   independent of the past) in `def-elementary-predictable-brownian-integrand`,
   with the raw and usual augmented natural filtrations supplied by the batch-7
   `thm-brownian-future-path-markov-property`; this removed any silent
   assumption about a general filtration.
3. **Stopping identity supplied locally, before its consumers.** Van der Vaart's
   finite-energy stopping lemma is proved inside `thm-localized-ito-integral` as
   clause 4 (elementary finite-valued case by the defining sums, dyadic-ceiling
   approximation, then L² density), and it is exactly what the localization
   agreement, the characterization and item 17 consume. No item was added to
   the inventory; the clause is part of the localized-integral statement, which
   is the promised "characterized by its stopped square-integrable integrals".
4. **Arbitrary-partition Brownian quadratic variation proved locally.** The
   batch-7 supplier is only dyadic; item 18 proves the centered-increment
   martingale estimate for every deterministic vanishing-mesh partition
   sequence (fourth Gaussian moment, Doob, Chebyshev) and uses the dyadic
   theorem only as a consistency check (`[F6]`), so the ledger row for that
   supplier remains true but is not load-bearing.
5. **The "preview" example stays local.** `ex-integral-of-brownian-motion-against-itself-preview`
   is proved from left-dyadic sums, the telescoping identity and uniform dyadic
   quadratic variation, with no forward dependency on PT-22; the plan's seam
   (L2211) is preserved.
6. **No item, claim or ID was dropped or added.** All 19 A and 8 B IDs, titles,
   order and promised statements are the scaffold's; only `deps` and provenance
   details were synced to what the proofs actually use.

## 3. Authored items (page order)

A page: A1 `def-continuous-time-adapted-process-and-martingale` (definition);
A2 `def-progressively-measurable-and-predictable-process` (definition, ZF);
A3 `lem-adapted-continuous-processes-are-progressively-measurable` (dyadic
staircase; everywhere-continuous form, with the a.s.-continuity qualification
recorded); A4 `def-elementary-predictable-brownian-integrand` (standing
hypothesis (H), predictability and finite energy computed); A5
`def-ito-integral-of-an-elementary-predictable-process` (finite sums, linearity
on a common refinement, temporary representation dependence); A6
`lem-elementary-ito-integral-is-independent-of-the-step-representation` (common
refinement, Tonelli, conditional centering); A7
`thm-ito-isometry-for-elementary-integrands` (martingale and variance); A8
`lem-cross-ito-isometry` (polarization); A9
`thm-density-of-elementary-predictable-processes-in-predictable-l2` (indicator
lambda-system, Dynkin, simple approximation; AC_omega use isolated); A10
`def-ito-integral-for-square-integrable-predictable-processes` (L² extension and
truncation convention); A11
`lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative`;
A12 `thm-ito-isometry-and-linearity-in-predictable-l2` (linearity, isometry,
cross identity, closed image); A13
`thm-ito-integral-process-has-a-continuous-martingale-version` (summable-error
approximants, discrete Doob, weighted Cauchy--Schwarz series, uniform a.s.
convergence, limsup construction, uniqueness up to indistinguishability, horizon
diagonalization); A14 `thm-doob-maximal-bound-for-the-ito-integral`; A15
`def-locally-square-integrable-predictable-brownian-integrand` (energy process,
canonical times, energy bound); A16 `thm-localized-ito-integral` (finite-energy
stopping identity, overlap agreement, patched process, characterization,
independence of the localizing sequence); A17
`thm-stopping-an-ito-integral`; A18
`thm-quadratic-variation-of-an-ito-integral` (arbitrary-partition Brownian
estimate, block decomposition, L² polarization, localization); A19
`cor-deterministic-ito-integrals-are-gaussian` (characteristic-function route,
multivariate clause by the projection definition).

B page: the deterministic step-function example, the stopping-interval
indicator example, the covariance/independence example, the Brownian
self-integral preview (computed without Ito's formula), the $t^3/3$
time-changed quadratic variation example, and the three counterexamples
(nonadapted coefficient, bounded-variation Riemann--Stieltjes failure with the
left/right endpoint limit mismatch, product-measure-versus-pointwise equality).

Choice accounting: every non-ZF item states AC and names its exact use
(conditional-expectation interface, completion, the countable selection of
approximants in the density proof, the least-index approximants in items 13 and
11); the three choice-free items (A2, A3 and the energy definition's generator
computations) say so.

## 4. Registrations

- `items/<id>.md`: 27 files (19 A + 8 B), each with Statement/Definition or
  counterexample heading, Facts & Assumptions, and a complete proof,
  verification or witness.
- `library/probability/the-ito-integral-with-respect-to-brownian-motion.md`
  (19 items) and `library/probability/the-ito-integral-with-respect-to-brownian-motion-examples.md`
  (8 examples).
- `research/phase-2-remaining-27-batch-8.pages.json`: my 27 rows' `deps` and
  provenance synced; the sibling `itos-formula-and-brownian-martingales` rows
  are preserved byte-for-identical in content (only the file's whitespace was
  renormalised to the original one-page-per-line layout).
- `research/phase-2-remaining-27-batch-8.proof-contracts.json`: 27 new v1
  contracts with exact source excerpts (every fact-to-source pair), per-step
  claims and inputs, and the eight-case boundary worksheet. The sibling's 29
  items are not yet contracted; the file's scope is 27 until that dispatch runs.
- `research/phase-2-remaining-27-step3b-review-<id>.json`: 27 non-owner
  `accept` receipts, confidence 1, examined dependency arrays, current hashes.
  All 27 were re-recorded after the last content edits, so every receipt's hash
  is current (editing item 13 invalidated the six receipts whose transitive
  closure contains it; those were refreshed with the same decisions).
- `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json`: 11 new
  verified rows for the batch-7 items consumed by this pair (the pre-existing
  rows and the PT-22 rows are preserved); `tools/frontier-dependency-ledger.mjs
  refresh --run phase-2-remaining-27` was run afterwards.
- `research/phase-2-remaining-27-batch-8.coverage.json`: unchanged; every
  harvested source result still maps to an authored item and
  `coverage-checklist` passes (2 pages, 50 results, 0 errors, 0 warnings).

## 5. Checks actually run (final state)

| Check | Result |
|---|---|
| `tools/tsx-run.mjs tools/precheck.mts <27 item paths>` | 21 checked, 0 failing (6 items have no proof-like body by kind) |
| `node tools/rendercheck.mjs <27 items + 2 pages>` | OK — 29 files, no defects |
| `node tools/content-policy.mjs <pair-filtered manifest>` | 27 scoped items, 0 errors, 0 warnings |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-8.pages.json` | 29 `scope-item-missing` errors, all for the sibling PT-22 items that have no files yet; 0 errors for this pair |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-8.proof-contracts.json --strict` | 0 errors, 0 warnings, 27/27 checked |
| `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-8.pages.json` | 56 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-8.coverage.json --require-destination` | 2 pages, 50 results, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` | exit 0; no unresolved ID, cycle, forward dependency or B-page dependency among the 1138 pages with item lists |
| `node tools/depcheck.mjs <27 item paths>` | no finding on any of my 27 items |
| `node tools/depcheck.mjs` (whole library) | 4 errors, all `b-leaf-content` in other groups' Lie-theory files; none in batch 8 |
| `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final` | 0 open items in this pair; all 27 closed with `accept`, confidence 1, receipts re-recorded after the final edits |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; batch 8 has 36 rows, all `verified`, no orphaned review of my pair |

## 6. Published-item concerns (for the owner; the canonical ledger is not edited here)

1. **`thm-bv-functions-are-differentiable-almost-everywhere`** (published):
   states Countable Choice but its direct `deps` omit `def-countable-choice`
   (recorded in the batch-7/batch-8 Step-1 notes). Confidence high, metadata
   only; no mathematical defect claimed. This pair does not consume it: the
   Riemann--Stieltjes counterexample uses the batch-7 direct total-variation
   corollary. Recommended repair: add the missing dependency in Phase 3.
2. **Suspicion, not a defect:** the two source treatments state the Brownian
   quadratic-variation limit for their own partition families; the uniform
   arbitrary-partition form promised by item 18 is proved locally. If a later
   reviewer finds the local block-decomposition argument incomplete, the
   repair route is the same estimate stated for the induced sub-partitions plus
   the oscillation control; this is the most intricate argument on the page and
   is flagged for close Step-5 reading.
3. **Outside this pair (route to owners, not edited):** `depcheck` reports four
   `b-leaf-content` errors in `lie-subgroups-actions-and-homogeneous-spaces` and
   `semisimple-lie-algebras-cohomology-and-levi-theory` files
   (`cex-zero-euler-class-...`, `prop-classical-types-...`,
   `fs-dynkin-diagrams-...`, `fs-two-connected-lie-groups-...`), and the unified
   frontier ledger reports orphaned cross-batch review rows in batch 2
   (`thm-schauder-compact-adjoint-theorem` and the compact-operator/Fredholm
   consumers of `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`).
   Neither touches batch 8.
4. **No published item consumed by this pair was found mathematically
   defective.** Every published supplier was read at statement level and its
   hypotheses matched before use; the one genuine supplier defect found (the
   B-page supplier of the Gaussian corollary) lies in this run's scaffold, not
   in published content, and was repaired here.

## 7. Open obligations and Step-4 notes

- **Plan splice.** `research/plan-spec.json` still carries empty item lists for
  orders 288.137/288.138; the 19 + 8 items and their `deps` are in the batch-8
  manifest and the two page files, with every dependency pointing backwards.
  The run-wide AC-spine item
  `thm-choice-implies-dependent-implies-countable-choice` is declared on 25 of
  the 27 items even though its page is outside the A page's `requires` closure;
  this is the existing run convention and needs Step 4's confirmation that the
  splice keeps it.
- **Shared batch.** The sibling pair `itos-formula-and-brownian-martingales`
  (21 + 8 items) is still unauthored; until that dispatch lands, the batch-level
  `content-policy` run reports 29 `scope-item-missing` errors and the batch
  contract scope is 27. Nothing in my pair depends on that pair, and no row of
  it was edited.
- **No owner-held escalation for this pair.** No unresolved mathematical
  uncertainty remains; the only uncertainty recorded during authoring (the
  a.s.-continuity caveat in A3 and the arbitrary-partition form in A18) was
  resolved locally and is documented in the items.

## 8. Limits of this work

Item-level proofs, choice accounting and dependency adequacy were established
by my own reading and computation, checked mechanically by precheck,
rendercheck, the strict proof-contract gate, content-policy, coverage-checklist,
manifest-deps, depcheck and validate-plan. They have **not** been independently
reviewed by another agent (that is Step 5). I read the exact statements of every
published supplier used and the complete relevant source passages for the
load-bearing results, but I did not re-verify the internal proofs of published
items; the batch-7 suppliers were read in full only where this pair consumes
their claims.
