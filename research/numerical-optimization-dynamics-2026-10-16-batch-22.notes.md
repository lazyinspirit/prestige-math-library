# Batch 22 — Nonlinear boundary-value solvers

Run: `numerical-optimization-dynamics-2026-10-16` · batch 22 · beta.
The dispatch assigns dependency level 1, prerequisite batch 3, and scheduling
input `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`.
The assigned A/B pair is `nonlinear-boundary-value-solvers` and its examples
page. The page manifest, carriers, and scoped evidence are limited to this pair.

## Design comparison and controlling instructions

The current dynamics design section NA-21 (complete section at
`research/plan-numerical-dynamics-track.md` L233 and its mathematical contract
appendix) controls the authoring. The older analysis-track NA-21 section at
`research/plan-numerical-analysis-track.md` L298 is superseded where it
conflicts: it lists NA-19 and NA-09 as required page edges, while the current
`plan-spec.json`, generated batch task, and owner direction specify the two
page prerequisites `picard-lindelof-and-first-order-odes` and
`nonlinear-equations-and-newton-methods`. The current dynamics plan's contract
explicitly removes the NA-19 dependency because Lax equivalence supplies no
stationary BVP inverse or nonlinear branch theorem. The manifest follows the
current two-page interface and still declares the actual ODE item dependencies
used in the proofs. The shared plan and engine state were not edited.

The current contract is preserved: exact single- and multiple-shooting
residuals; C1 flow sensitivity proved by difference quotients on a common
compact tube; exact residual Jacobians; a normalized implicit-midpoint residual;
a proved midpoint discrete inverse and local branch; O(h^2) discretization
error with a normalized algebraic residual budget; finite-budget local Newton;
and separate conditioning, IVP integration, mesh, and algebraic residual terms.
No arbitrary-start, general mesh-convergence, global branch-selection, or
global solver-convergence claim is made.

An older intake amendment mentions consuming a physics-chemistry continuation
interface (`PC-CONT`, later associated with
`pseudo-arclength-continuation-and-fold-certificates`). That interface is not
in the current page `requires`, `plan-spec` row, or current NA-21 claims. This
batch makes no parameter-continuation or fold-certification claim and does not
duplicate such a result. No local item is affected. If the owner intended to
restore a continuation claim, the exact current supplier item and hypotheses
need to be mapped in a plan amendment before a dependent item is added.

## Inventory, dependency levels, and supplier audit

The assigned inventory is 18 A items and 3 B examples, below the 100-item page
cap. The exact `deps` and labels are in
`research/numerical-optimization-dynamics-2026-10-16-batch-22.pages.json` and
are ordered supplier-first. The local A-page levels are:

- Level 0: `def-nonlinear-two-point-bvp-and-boundary-residual`,
  `lem-c1-ode-flow-on-common-tube`.
- Level 1: `def-certified-ivp-approximation-and-sensitivity-interface`,
  `def-linearized-two-point-bvp-operator-and-conditioning`,
  `def-midpoint-collocation-residual-for-bvps`,
  `prop-multiple-shooting-residual-zero-iff-bvp-solution`,
  `prop-shooting-residual-zero-iff-bvp-solution`.
- Level 2: `alg-midpoint-collocation-for-nonlinear-bvps`,
  `lem-midpoint-bvp-discrete-linearized-inverse`,
  `prop-midpoint-residual-zero-is-collocation`,
  `prop-multiple-shooting-residual-block-jacobian`,
  `prop-shooting-residual-derivative`.
- Level 3: `alg-multiple-shooting-for-nonlinear-bvps`,
  `alg-single-shooting-for-nonlinear-bvps`,
  `thm-midpoint-collocation-local-branch-and-error-budget`.
- Level 4: `cor-local-newton-convergence-for-midpoint-bvp-collocation`,
  `cor-local-newton-convergence-for-shooting-bvp-residual`,
  `thm-shooting-residual-error-budget`.
- The B page levels are 3 for `ex-midpoint-collocation-has-two-branches`, 4
  for `ex-unstable-single-shooting-amplifies-error`, and 5 for
  `ex-newton-shooting-fails-from-singular-start`.

The published ODE page and actual supplier bodies were inspected. The IVP
interface uses the published first-order IVP definition, local
Picard–Lindelöf existence/uniqueness, maximal-solution uniqueness, Volterra
equivalence, and Gronwall. The new sensitivity proof does not infer
 differentiability from continuous dependence: it proves a uniform flow bound,
constructs the variational solution, controls the difference-quotient
remainder using uniform continuity of D_y f on the compact tube, and proves
continuity of the derivative. The Heine–Cantor supplier states its proof is
choice-free. The exact zero-residual correspondences use IVP uniqueness; the
approximate evaluator is kept distinct and does not certify an exact root.


The focused `depcheck` also exposes the transitive published-page closure of
the actual supplier items: `monotone-sequences-and-cauchy-completeness`,
`compactness-in-metric-spaces`, `rn-as-a-normed-space`, `the-total-derivative`,
`inverse-and-implicit-function-theorems`, `completeness-and-uniform-continuity`,
and `mixed-partials-taylor-and-extrema`, in addition to the explicit ODE and
Newton pages. These arrive through published item dependencies; the explicit
page prerequisites remain the two current plan/task interfaces. The shared
plan was not expanded.

Batch 3 prerequisite carriers were read in full. The exact dependencies are
`alg-finite-budget-newton-for-vector-residuals`,
`alg-newton-correction-for-vector-residuals`, and
`thm-updated-jacobian-newton-local-quadratic-convergence`. Their current
contracts respectively require a C1 square map and distinguish residual
`tolerance` from exact zero, return a singular status when the correction map
is not invertible, and give updated-Jacobian quadratic convergence only for a
simple root with a Lipschitz Jacobian in a local ball. The BVP Newton
corollaries apply those exact hypotheses; no fixed-inverse contraction result
is substituted for updated-Jacobian Newton. Cross-batch evidence is in the
matching JSON file; inspected draft bodies do not constitute acceptance.

## Source coverage and retrieval history

`research/numerical-optimization-dynamics-2026-10-16-batch-22.coverage.json`
records source URLs, exact locators, supported items, and each result's
included/inline disposition. The complete Verfürth lecture notes and the full
FNC chapter pages were inspected as independent treatments. Hairer–Wanner
§VI.3 is recorded for the exact Newton result; the actual batch-3 supplier
body remains the proof interface.

The plan's Ascher–Mattheij–Russell candidate URL
`https://external.dandelon.com/download/attachments/dandelon/ids/DE004E07F38339D438A04C125794800445DF3.pdf`
supplied only 11 pages of front matter/contents, not the needed chapters. It is
not used for any item; the complete Verfürth notes and FNC chapters supply the
methods context, and every local claim has a complete proof. The complete de
Boor–Swartz article was inspected through the web reader, but its Gaussian
spline scheme and hypotheses differ from this batch's midpoint residual. The
publisher PDF and direct ResearchGate fetch returned HTTP 403; the UNT
alternative was only a bibliography entry. Since no local proof uses its
results, its contextual references were removed from the carriers. The fetch
history remains in coverage `source_history`; no mathematical claim or proof
obligation was removed or left unresolved.

No Axiom of Choice is used in the authored arguments. The sensitivity proof
uses the choice-free Heine–Cantor result and fixed-interval estimates. The
transitive item metadata includes Choice-related definition nodes through the
generic metric-continuity definitions; the actual Heine–Cantor and
Lebesgue-number statements explicitly say their proofs are choice-free, and
the Euclidean-completeness proof assembles unique coordinate limits and finite
least indices. No Choice axiom is an assumption of a new item or a premise in a
proof step. The finite-dimensional contraction proof uses the iterative Banach
fixed-point supplier; no arbitrary-family selection is made. The midpoint
theorem's contraction ball and the exact/approximate BVP branches are local and
explicitly separated.

## Scoped checks and handoff

- Scoped dependency recomputation over batches 3 and 22: pass, 32 items,
  including all 21 assigned items; no cycles, level-label mismatches, or
  manifest/carrier dependency drift. Batch 22 levels are 0–4 on A and 3–5 on B.
- `node tools/proof-layout.mjs` on the 21 changed items: pass, 47 steps, 0
  defects. Scoped `precheck`: pass, 14 proof-bearing items, 0 failures; the
  seven definitions/algorithms have `precheck: n/a`.
- `proof-contract.mjs --strict`: pass, 21/21 items, 47 proof steps, 63 exact
  supplier citations, 0 warnings. `citation-fidelity`: no missing quotes and
  no widening candidates.
- `rendercheck.mjs`: pass, 23 scoped files (21 items and 2 pages); renderer
  YAML and KaTeX parsing pass.
- `content-policy`: 21 scoped items, 0 errors and 0 warnings. Focused
  `depcheck`, `fwdcheck`, and `extcheck` pass; no forward-reference, dependency,
  or recorded-unproved defects.
- Final `source-fetch-check --stamp`: 5/5 retained source URLs fetch-verified;
  the contextual retrieval histories are documented in coverage, and no
  retained citation depends on the unavailable contextual source.
- Run-wide `item-dependency-levels.mjs check` remains outside this pair's scope:
  it reports 150 empty inventories in other assigned batches and six existing
  level mismatches (`def-na-dct-ii-and-dst-i-even-odd-extension`,
  `thm-na-dct-ii-orthogonality-inverse-and-dft-extension`,
  `thm-na-dst-i-orthogonality-inverse-and-dft-extension`,
  `thm-na-dct-ii-chebyshev-coefficient-extraction`,
  `ex-na-three-sample-dct-chebyshev-coefficients`, and
  `lem-stopping-time-ito-step-interval-sum`). The scoped batch-3/batch-22 check
  has no assigned-item error; those other manifests were not edited.

The active `.autopilot` status was inspected read-only: the run is paused at
`1-drift-apply` with no workers in flight; this pair was dispatched manually.
The build driver owns every transition, and its state was not edited. No tests
were run. No published item, shared plan, engine state, or verdict was changed.
Step 1 readiness records are written separately for all 21 assigned items;
they record author readiness, not independent approval.
