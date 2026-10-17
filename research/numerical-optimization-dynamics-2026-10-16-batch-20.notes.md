# Batch 20 authoring notes — Composite quadrature rules

## Controlling plan and conflicts

The controlling design is NA-12 in `research/plan-numerical-linear-track.md`,
read together with its full NA-12 contract in
`research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`.
The binding owner direction routes this category to that plan and audit. The
current `research/plan-spec.json` row and generated batch assignment agree on
the page IDs, order 2324, category, and declared page requirements.

The older NA-12 summary in `research/plan-numerical-analysis-track.md` agrees on
the midpoint, trapezoid, Simpson, error-bound and exactness scope, but omits
`polynomial-interpolation-and-remainder` from its `Requires` list. The controlling
linear plan, `plan-spec.json`, and batch manifest include it. The controlling
sources therefore govern; the generic summary's shorter requirement list is a
recorded conflict, not a basis to edit the shared edge. The pair also reuses the
already-published canonical carriers `def-composite-trapezoidal-rule` and
`thm-composite-trapezoidal-rule-error-bound` instead of creating duplicate
trapezoid items. Their full bodies and proofs were inspected.

The authored scope is exact-real composite midpoint and composite Simpson
quadrature on uniform grids; the midpoint $C^2$ error bound with constant
$1/24$; Simpson exactness through degree three; the Simpson $C^4$ error bound
with constant $1/180$; convex midpoint/integral/trapezoid bracketing; and exact
quadratic and cubic Simpson calculations. Floating-point roundoff is outside
these claims.

## Inventory, direct dependencies and levels

The item inventory and all direct dependency arrays were fixed in the batch
manifest before proof carriers were authored. The manifest arrays match item
frontmatter. In-run level means zero if an item has no direct supplier in this
batch, otherwise one plus the maximum level of its in-batch suppliers; published
dependencies do not increase the level.

| Item | Level | Direct in-batch suppliers |
|---|---:|---|
| `alg-composite-midpoint-rule` | 0 | none |
| `alg-composite-simpson-rule` | 0 | none |
| `lem-composite-midpoint-panel-error-kernel` | 0 | none |
| `thm-composite-midpoint-error-bound` | 1 | midpoint algorithm; midpoint panel kernel |
| `lem-simpson-panel-peano-kernel` | 1 | Simpson algorithm |
| `thm-composite-simpson-exact-through-degree-three` | 2 | Simpson algorithm; Simpson panel kernel |
| `thm-composite-simpson-error-bound` | 2 | Simpson algorithm; Simpson panel kernel |
| `ex-convex-composite-midpoint-and-trapezoid-bracketing` | 1 | midpoint algorithm; midpoint panel kernel |
| `ex-quadratic-exact-for-composite-simpson` | 3 | Simpson algorithm; Simpson exactness theorem |
| `ex-cubic-exact-for-composite-simpson` | 3 | Simpson algorithm; Simpson exactness theorem |

The A page has seven items and the B page has three examples. All direct
external dependencies are recorded in the manifest and the carriers. The
midpoint kernel proof uses the working FTC, integration by parts, integral
additivity/linearity/monotonicity, continuous integrability, Heine–Borel and
extreme value, continuity algebra, the chain rule, and derivative power and
linearity rules. The Simpson kernel uses integration by parts and the FTC,
continuous integrability, continuity/derivative algebra, the chain rule, and
the power rule. The composite error theorems use the finite-sum triangle
inequality; the Simpson bound also establishes the finite maximum of
$|f^{(4)}|$. The convex example uses the second-derivative characterization of
convexity, endpoint-chord definition, integral monotonicity, FTC and explicit
polynomial antiderivatives. The two arithmetic examples verify antiderivatives
and integrability before evaluating the three-node sums.

The formula for each kernel and every polynomial antiderivative is derived in
the local proof. The Simpson Peano kernel's signed mass is computed as
$L^5/2880$; summing over $n/2$ blocks of width $2h$ gives
$(b-a)h^4/180$. The midpoint kernel has mass $h^3/24$ and summing its panel
bounds gives $(b-a)h^2/24$. No choice principle is used.

## Supplier-body inspection and cross-batch reconciliation

The statements and complete proofs of all published direct suppliers used in
the carriers were inspected, including the exact-real finite-sum definition,
finite-sum triangle inequality, working FTC, integration by parts, integral
additivity, monotonicity and linearity, continuous integrability, compactness
and extreme value on real intervals, higher-derivative conventions, convexity
and its second-derivative characterization, the chain rule, power rule, and
derivative linearity. The actual published trapezoid definition was inspected;
the new convex example uses its stated endpoint-half/interior-full weights.
The exactness and error claims do not use an interpolation theorem.

The current batch-4 manifest now lists seven A-page item IDs, and the relevant
`thm-lagrange-interpolation-remainder` body is present as a draft. Its stated
hypotheses are $n\in\mathbb N$, $n\ge0$, $a<b$, ordered distinct nodes
$x_0<\cdots<x_n$ in $[a,b]$, $f\in C^{n+1}([a,b])$, and a query point
$x\in[a,b]$; at a node the error is zero, and otherwise the theorem claims a
remainder point in $(\min\{x,x_0\},\max\{x,x_n\})$. The statement and proof,
along with the cardinal-polynomial definition and interpolant theorem, were
inspected. The relevant body remains `status: draft`; no supplier readiness or
acceptance is inferred. The exact page edge, all currently listed supplier IDs,
the required interface, and its affected page claims are recorded in
`batch-20.cross-batch-dependencies.json`.

No authored quadrature item directly depends on the interpolation remainder.
The midpoint and Simpson estimates are proved locally by kernel identities,
and the convex example only needs the published trapezoid definition. The
published composite-trapezoid error theorem already supplies the interpolation
based result for the planned trapezoid bound. Therefore the current NA-10 page
requirement gates the page-level readiness edge but appears mathematically
redundant for these carriers. The owner should reconcile the shared requirement
after checking batch 4; this batch does not edit the plan, global dependency
ledger, batch 4 files, or owner verdicts.

## Source reading and dispositions

Two independent full-text textbook treatments were read for both pages. Art B.
Owen's author-hosted *Monte Carlo Theory, Methods and Examples*, Chapter 7,
was retrieved after the initial browser PDF open timed out. The timeout's exact
timestamp was not preserved and is recorded that way in coverage; searches and
the one successful full-text recovery attempt are recorded there as well. The
complete 36-page extraction and reading evidence are in the same coverage file.
Its midpoint theorem and proof
support the midpoint rule/bound; its trapezoid derivation and convex bracketing
are already represented by a published definition/theorem and the new local
example; it states Simpson's composite formula and exactness/error results but
does not prove the exact Simpson error constant. The new local Peano-kernel
proof supplies that missing argument.

The complete Driscoll–Braun *Fundamentals of Numerical Computation* §5.6
online section (all 896 lines) was read. It supports the uniform-grid and
trapezoid formulas, gives an $O(h^2)$ trapezoid discussion, and derives Simpson
by extrapolation with fourth-order behavior. It does not prove the exact
fourth-derivative constant used here. Both sources' per-result dispositions,
locators, search/retrieval history, and source-fetch stamps are recorded in
`batch-20.coverage.json`. No literature statement substitutes for the local
proofs.

## Scoped checks and readiness

The final checks passed for the assigned pair:

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 20`: pass. Its recorded receipt reports 8/8 proof prechecks, rendercheck on all 10 items and both pages, content policy on 10 items, and strict proof contracts on 8 proof-bearing items, with zero errors or warnings.
- `node tools/proof-layout.mjs` on the 10 changed items and both changed pages: 12 files, 26 proof steps, 0 defects.
- Scoped `dependencyLevels` on the two batch-20 manifest pages: 10 items, levels `0,0,0,1,1,2,2,1,3,3`, 0 errors; `manifest-deps`: 10 items, 0 missing arrays, 0 errors.
- `coverage-checklist`: 2 pages and 20 harvested results, 0 errors and 0 warnings. Final `source-fetch-check` confirmed 4/4 source records fetch-verified; the earlier `--stamp` pass stamped all four A/B page-source records.
- Focused `depcheck`, `fwdcheck`, and `extcheck` over this batch's item/page selection: all passed with no dependency-cycle, forward-reference, or unproved-supplier errors.
- Ten `step1-decisions` records were written as `escalated`, all with `owner: false`, direct examined item dependencies plus the relevant NA-10 remainder item ID, and the exact page-level blocker. A final read-only hash audit found that all ten stored SHA-256 values no longer match the current dependency closures after subsequent edits to the in-progress supplier chain and one local proof. The decisions remain escalated and open, so no readiness is claimed; per instruction, none of those escalations was overwritten and no `--owner` option was used. The stored hashes are not current-content receipts.

The scoped item levels recompute successfully. The pure cross-batch graph recomputation also confirms Batch 20 remains level 1 with prerequisite batch 4. The run-wide `node tools/batch-dependency-levels.mjs write --run numerical-optimization-dynamics-2026-10-16` could not refresh the derived run input hash: its full-run source scan stops on unrelated malformed YAML at `items/ex-affine-triangle-and-parallelogram-maps.md:18` (`locator: §§8.1–8.2, printed pp. 83–88: affine reference maps for simplicial meshes.`). This is outside batch 20 and was left untouched. The current run-wide dependency-level artifact therefore still needs an owner-side refresh after that metadata is repaired.

These authoring records do not constitute independent mathematical approval.
The run remains owner-controlled; this pair does not advance the autopilot
stage or alter published content.
