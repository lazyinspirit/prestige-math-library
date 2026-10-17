# Batch 5 — Step 1 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta · batch: 5 · assigned pair: `linear-scheme-stability-and-lax-equivalence`

## Plan control and conflict record

The controlling plan-spec row is order 2294, whose `scaffold` is
`research/plan-numerical-spatial-track.md` and whose category is
`numerical-pdes-and-spatial-discretization`. Its companion is order 2295. The
row requires `countability-and-uncountability` and
`the-baire-principles-of-functional-analysis` and leaves the item inventory
empty for this scaffold.

The assigned task names both numerical-analysis §NA-19 (line 270) and spatial
§NA-19 (line 69). The plan-spec scaffold field makes spatial §NA-19 and its
`spatial-audit.md` controlling; the numerical-analysis pointer is redundant
and non-controlling. The sections agree on the assigned scope: a common
Banach-space norm, dense invariant consistency core, Duhamel argument, explicit
DC qualification for uniform boundedness, uniform projection/reconstruction
comparison, and the stable, unstable, and mesh-norm examples. No substantive
plan-spec conflict or page-capacity issue was found. The plan cap is 100 items;
the A/B pair contains 5 and 3 items.

## Inventory, logical dependencies, and levels

The exact direct dependency arrays are in
[`numerical-optimization-dynamics-2026-10-16-batch-5.pages.json`](/home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-5.pages.json).
In-run edges and recomputed levels are:

| Item | Level | In-run suppliers |
|---|---:|---|
| `def-common-space-linear-scheme-interface` | 0 | — |
| `thm-diagonal-heat-semigroup-on-c-zero` | 0 | — |
| `def-finite-grid-common-space-lift` | 1 | common-space interface |
| `thm-lax-equivalence-for-common-banach-space-schemes` | 1 | common-space interface |
| `lem-grid-stability-transfers-under-uniform-norm-comparison` | 2 | common-space interface; finite-grid lift |
| `ex-stable-explicit-grid-heat-step` | 2 | common-space interface; heat semigroup; finite-grid lift; Lax theorem |
| `ex-consistent-unstable-explicit-grid-heat-step` | 2 | common-space interface; heat semigroup; finite-grid lift |
| `ex-mesh-grid-norm-hides-common-space-instability` | 3 | common-space interface; finite-grid lift; grid-stability transfer lemma |

The batch-5 dependency input hash is
`ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`. Scoped
recomputation agrees with every declared level. The cross-batch dependency
inventory is empty; batch 5 has dependency level 0 and no prerequisite batch.

## Mathematical and supplier review

- The common-space definitions fix the same norm for consistency, stability,
  and convergence. The consistency bound is uniform over exact grid-time
  orbits; this is the hypothesis used by the Duhamel estimate.
- The Lax proof verifies the finite telescoping identity. Stability gives the
  forward error bound on the dense invariant subspace, then density extends it
  to all of (X). In the reverse direction, convergence gives pointwise
  boundedness of the powers on every finite time interval; the proof forms the
  set-family using Separation and Replacement before applying UBP.
- DC is explicit in the Lax theorem and the stable heat example. The actual UBP
  statement assumes DC, and its proof invokes the Baire theorem; the Baire
  supplier also declares DC. No choice assumption is silent.
- The Lax item lists the natural numbers, Cartesian product, Separation, and
  Replacement used to form its admissible index set and operator family. The
  diagonal heat semigroup, grid lift, and transfer lemma have complete local
  arguments. The examples verify their operators, maps, norms, consistency,
  and stability conclusions directly.
- The heat examples use (m=\nu+1) (and the mesh-norm example uses
  (m=\nu+2)) so their families match the interface convention
  (\mathbb N=\{0,1,\dots\}). The mesh-dependent example proves grid
  power-stability and common-space instability explicitly.
- Actual supplier bodies were inspected for the semigroup, bounded/operator
  norms, (c_0) completeness and density, exponential facts, induction, DC,
  Baire/UBP, Cartesian product, Separation, and Replacement. The UBP
  dependency nuance above is recorded rather than inferred from frontmatter
  alone.

## Sources and retrieval resolution

The A-page harvest records 15 named results from Trefethen Chapter 4 §4.2 and
LeVeque Chapter 12 §§12.1–12.5.1. The B-page harvest records four results from
Trefethen §4.1 and LeVeque §§12.3–12.5.1. All 19 have explicit dispositions
and reasons. `coverage-checklist` reports one advisory: 3/15 A-page results are
marked scaffolded and asks Alpha to confirm the inline/out-of-scope declines.
The scope declines are detailed in the coverage file and include global
accuracy, perturbation, stiffness, and PDE-versus-ODE results outside this
pair's plan scope.

Both full texts were inspected in the browser. The required initial
`source-fetch-check --stamp` nevertheless exhausted the checker's initial
request plus five retries for each of the two cited URLs, repeated on both
pages: Oxford returned connection timeouts and the LeVeque mirror returned
HTTP 403. Searches found an HMC full-book Trefethen copy and full-text
LeVeque note mirrors; their relevant text was also inspected. The retry budget
was not restarted. Each of the four source records now has a `source_resolution`
entry that drops it from fetch-backed evidence only, preserves all six exact
attempts and search results, and supplies local alternative arguments with
declared dependencies for every included/inline result. No harvested result
or mathematical claim was dropped.

The final `source-fetch-check --stamp` result is **0/4 fetch-stamped, 4/4
resolved through documented source drops**. It is not recorded as a successful
source fetch. The source-resolution records and complete local proofs are the
fallback evidence for Alpha's source review.

## Scoped checks

- `precheck`: 6 proof-bearing items pass.
- `proof-layout`: 8 items, 28 numbered steps, 0 defects.
- `proof-contract --strict`: 8/8 items, 0 errors and 0 warnings.
- `rendercheck`: all 8 items and 2 pages pass.
- `content-policy`: 8 scoped items, 0 errors and 0 warnings.
- `depcheck`: selected items and prerequisite/page cycle checks pass, with no
  warnings after removing the non-load-bearing forward link.
- `fwdcheck`: selected items and forward-dependency checks pass.
- `extcheck`: 8 items, no recorded-not-proved or external fallback records.
- Scoped item-level dependency recomputation: all 8 declared levels match.
- `coverage-checklist`: 2 pages and 19 harvests, 0 errors; the single low-yield
  advisory above remains for Alpha.
- `author-check`: batch fingerprint recorded with all four component gates
  passing; see `numerical-optimization-dynamics-2026-10-16-author-check-5.json`.

The final per-item readiness records are the eight
`numerical-optimization-dynamics-2026-10-16-step1-<item-id>.json` files. These
record authoring readiness only and are not independent mathematical approval.
