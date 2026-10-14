# Batch 27 authoring notes — Splines and Series Methods (MSF-26)

## Design control and conflicts

The owner authoring direction selects `research/plan-mathematical-statistics-track.md`; its MSF-26 row at line 108 controls. It requires B-spline definitions and polynomial reproduction, a local positive-definite tridiagonal proof for distinct-knot natural-cubic interpolation, cubic smoothing-spline reduction, local Sobolev approximation, and the expected empirical training-risk bound and its univariate rate. The companion page must distinguish training loss from independent test risk. Strong arbitrary-knot constants based on Lyche Theorems 41/48 remain excluded until the thinning argument is supplied.

`research/plan-spec.json` agrees with the dispatched page IDs, titles, orders 1896–1897, category, companion relation, and all six A-page requirements. Its empty item arrays are pre-authoring scaffolds, not a conflict. No plan conflict was found; the inventory and claims follow the controlling MSF row. The added A-page local quasi-interpolant definition is the explicit interface required by the approximation proof.

## Inventory, dependencies, and levels

The manifest contains 11 A items and 5 B items. The pair-local dependency graph is acyclic. Levels count only suppliers in this assigned pair; external suppliers do not raise the item level.

The B-spline definition specifies half-open right-cell values at interior knots with no matching condition, and left-limit values at $b$. This fixes pointwise values when an interior knot has multiplicity $p+1$ and makes the cellwise projection specialization well-defined.

| Page | Item | Level | Direct in-pair suppliers |
|---|---|---:|---|
| A | def-b-spline-space-and-basis | 0 | — |
| A | def-natural-cubic-spline | 0 | — |
| A | def-local-spline-quasi-interpolant | 1 | def-b-spline-space-and-basis |
| A | def-natural-cubic-smoothing-spline | 1 | def-natural-cubic-spline |
| A | thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots | 1 | def-natural-cubic-spline |
| A | thm-spline-polynomial-reproduction | 1 | def-b-spline-space-and-basis |
| A | def-series-spline-least-squares | 2 | def-b-spline-space-and-basis; thm-spline-polynomial-reproduction |
| A | thm-natural-cubic-smoothing-spline-exists-uniquely | 2 | def-natural-cubic-smoothing-spline; def-natural-cubic-spline; thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots |
| A | thm-sobolev-spline-quasi-interpolant-rate | 2 | def-local-spline-quasi-interpolant; thm-spline-polynomial-reproduction |
| A | thm-series-training-risk | 3 | def-series-spline-least-squares |
| A | cor-series-spline-sobolev-training-risk-rate | 4 | thm-series-training-risk; thm-sobolev-spline-quasi-interpolant-rate; def-b-spline-space-and-basis; thm-spline-polynomial-reproduction |
| B | cex-one-observation-does-not-identify-a-smoothing-spline | 2 | def-natural-cubic-smoothing-spline |
| B | ex-b-spline-basis-and-polynomial-reproduction | 2 | def-b-spline-space-and-basis; thm-spline-polynomial-reproduction |
| B | ex-natural-cubic-interpolants-on-two-and-three-knots | 2 | def-natural-cubic-spline; thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots |
| B | ex-uniform-mesh-linear-spline-approximation | 3 | def-local-spline-quasi-interpolant; thm-sobolev-spline-quasi-interpolant-rate; thm-spline-polynomial-reproduction |
| B | ex-spline-training-risk-can-differ-from-independent-test-risk | 4 | def-series-spline-least-squares; thm-series-training-risk; def-b-spline-space-and-basis; thm-spline-polynomial-reproduction |

The dispatched batch level is 5 with prerequisite batches 3, 18, and 26. The scheduling input supplied for this dispatch was `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`. Filling this batch's inventory made the shared schedule stale; it was left unchanged for the owner/controller.

## Supplier and prerequisite checks

- The current MSF-22 page is present and lists `def-fixed-design-projection-estimator`. I read its actual definition and confirmed it identifies the fixed-design least-squares fitted vector with the orthogonal projection even for rank-deficient designs. The page placement is now verified; its page and item remain drafts, and no acceptance is claimed.
- The current MSF-25 A page and `def-regression-target-version` body are present. The definition supplies AC, integrability, a chosen regular conditional law, and a selected Borel conditional-mean version; smoothness remains a separate hypothesis and is stated in the corollary. Its existing Step-1 record is still escalated because the MSF-25 page has an unresolved `nonparametric-density-estimation-and-kernels` prerequisite and the planned `def-density-target-and-kernel-density-estimator` has no carrier. The record also cited a missing losses-risk page; that page is now present and `def-loss-function-and-risk` has a ready record. I left the other pair's record unchanged. This remaining MSF-25 edge is recorded as open and affects the A-page prerequisite and companion-page readiness.
- The current MSF-03 page and `def-loss-function-and-risk` body are present, and the item has a Step-1 ready record. Its parameter/action sampling risk is not the empirical training-prediction criterion. The latter is defined locally and is not identified with independent test risk.
- The published weak-derivative/Sobolev page, Sobolev-space definition, one-dimensional absolutely-continuous representative corollary, trace/zero-boundary page, and inner-product/orthogonality page were inspected. The local proofs use Sobolev classes and representatives, orthogonal projection and Gram–Schmidt. No trace or zero-boundary theorem is used.
- The generic series-risk theorem takes an explicit Borel conditional-law kernel and a supplied measurable conditional-mean version. It constructs and verifies the finite product kernel locally, including rectangle generation and Dynkin-system extensions, so this branch is choice-free. The Sobolev-rate corollary keeps the separate AC/RCD/selected-version/smoothness branch.
- The cubic smoothing and local Sobolev-approximation arguments explicitly assume AC. The representative and Sobolev interfaces' Countable/Dependent Choice uses are recorded through the published AC implication. The natural-cubic interpolant proof is choice-free. No proof uses its own replacement theorem.

The A page has 11 of the permitted 100 items; the B page has 5 examples/counterexamples. Both page inventories, carrier dependencies, dependency levels, provenance, source references, and proof contracts are synchronized.

## Sources and dispositions

All source locators, harvested results and dispositions, source URLs, and fetch stamps are in `mathematical-statistics-foundations-37-batch-27.coverage.json`. The full PDFs were retrieved, and I inspected the complete relevant reasoning units in three independent treatments: Lyche–Manni–Speleers' CIME spline notes (local Marsden identity, basis/continuity, and the full Theorem 32 proof); Newey's MIT course notes (Proposition 3 and its conditional-residual/projection/trace proof); and Tibshirani's Berkeley notes (natural-cubic conventions, smoothing objective, interpolation system and reduction). Each A and B page has three primary sources with precise locators. The six coverage entries are fetch-verified; all three URLs succeeded on their first recorded retrieval and no source was dropped.

The source's arbitrary-knot Theorem 41/48 thinning constant is dispositioned out-of-scope because the detailed thinning proof is absent and the controlling plan excludes it. Tibshirani's interpolation dimension-count step is not used as an existence proof; the local theorem proves positive definiteness of the tridiagonal system. The one-observation smoothing example evaluates the objective formula explicitly outside the definition's two-distinct-input domain. Newey's result is kept as a training-design bound; the B example computes a distinct independent-test risk.

## Scoped checks

- `source-fetch-check --stamp`: 6/6 source entries fetch-verified, 0 newly stamped, 0 drops.
- `coverage-checklist`: 2 pages, 24 harvested results, 0 errors and 0 warnings.
- `proof-layout`: 16 assigned carriers, 37 steps, 0 defects.
- Normative `precheck`: 11 proof-bearing carriers, 0 failures or repairs.
- Strict proof-contract validation: 16/16 items, 0 errors and 0 warnings. Contracts contain exact supplier excerpts, current step claims and inputs, all eight boundary dispositions, and the applicable finite example checks.
- Focused `depcheck`: 16 item checks; selected page and prerequisite-cycle closure covered 1,136 items and 212 pages, with 0 warnings and no errors.
- `content-policy`: 16 items, 0 errors and 0 warnings. `manifest-deps`: 16 items, 0 missing dependency lists or errors.
- Scoped item dependency calculation: all 16 items, 0 mismatches or cycles.
- The run-wide item-dependency check reports 18 errors elsewhere in the run; none names a batch-27 item. `batch-dependency-levels check` reports the shared schedule stale after this inventory change. Neither shared file was modified.

## Readiness and owner reconciliation

I attempted the required `step1-decisions record` using the ordinary tool, without `--owner`. The run-wide loader stops before writing any batch-27 record because `research/mathematical-statistics-foundations-37-batch-30.pages.json` lists `lem-finite-dimensional-functional-convolution-bound` twice (lines 30 and 56). I did not alter batch 30 or bypass the loader; no batch-27 readiness records were created. With the MSF-25 required-page edge still open, the pair is not reported ready; after the run-wide loader is repaired, the affected items should be recorded as escalated until that supplier edge is reconciled.

The refreshed Autopilot status remains at `1-scaffold`, with no workers in flight. Its current owner blocker is `stage-stalemate` for unit 26: the unit is covered but artifact-incomplete and no longer running. The exact blocker is in `research/mathematical-statistics-foundations-37-step1-blockers.json`. This aligns with the open MSF-25 supplier edge above. The pair's claims, carriers, page placement, proof contracts and scoped checks are complete, but Step-1 readiness remains unrecorded until the run-wide duplicate is reconciled; the owner must also complete batch 26 and refresh the shared dependency schedule before the next transition. These authoring results do not constitute independent approval.
