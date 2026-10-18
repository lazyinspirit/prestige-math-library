# Batch 36 authoring notes — Hyperbolic DG and summation-by-parts methods

Run `numerical-analysis-remaining-71-2026-10-17`, role beta, batch 36; A/B pair `hyperbolic-dg-and-summation-by-parts-discretizations` / `hyperbolic-dg-and-summation-by-parts-discretizations-examples` (orders 2626/2627), category `numerical-pdes-and-spatial-discretization`. The assigned batch dependency level is 4 with prerequisite batch 33.

## Controlling plan and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta task and authoring direction, the complete PE04 design in `research/plan-numerical-spatial-track.md`, and the corresponding `plan-spec.json` entry. The detailed design and plan-spec agree on the pair identity, category, page requirements, DG/SBP scope, projection-based error route, affine-mesh restriction, and the limitation that semidiscrete stability does not itself give a fully discrete guarantee. No plan/design conflict was found.

The dispatch supplies scheduling input `a1545c2b00f56a0cdca00bf11b21af62e611f3e819701441e21dc2f917e4ca3f`. The current shared batch dependency artifact records `input_sha256=4e9cbf925e8268ca704d079980b63312b1df8cb6637884cf5181cf12b0c1a8e2`; its row for batch 36 still says level 4 and `requires: [33]`. The hash mismatch is recorded for owner reconciliation; the shared scheduling artifact was not changed.

## Inventory and item levels

The manifest contains 14 A items and 4 B examples/counterexamples, below the 100-item cap. Item dependencies and labels were recorded before carrier authoring and rechecked after the final dependency edit. A current full-run graph calculation over 1,420 in-run items reported zero graph errors; all 18 batch-36 levels match the calculated values. The final whole-run item-level checker also passes for all 1,420 items, with maximum dependency level 12.

| Level | Item | Declared dependencies |
|---:|---|---|
| 0 | `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials` | — |
| 1 | `def-pe04-diagonal-norm-sbp-element-data` | `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials`, `def-matching-affine-simplicial-meshes` |
| 1 | `def-pe04-upwind-dg-transport-discretization` | `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials`, `def-matching-affine-simplicial-meshes`, `def-broken-and-conforming-polynomial-spaces` |
| 2 | `alg-pe04-first-order-upwind-forward-euler` | `def-pe04-upwind-dg-transport-discretization` |
| 2 | `def-pe04-cellwise-l2-projection` | `def-pe04-upwind-dg-transport-discretization`, `def-measure-space`, `def-calligraphic-l-p-on-a-measure-space` |
| 2 | `def-pe04-upwind-sbp-sat-transport-discretization` | `def-pe04-diagonal-norm-sbp-element-data`, `def-pe04-upwind-dg-transport-discretization` |
| 2 | `thm-pe04-upwind-dg-l2-energy-stability` | `def-pe04-upwind-dg-transport-discretization`, `def-matching-affine-simplicial-meshes`, `lem-affine-simplex-gauss-green-formula`, `lem-oriented-facet-cancellation-on-matching-meshes`, `def-countable-choice` |
| 3 | `def-pe04-flux-differencing-sbp-systems` | `def-pe04-upwind-dg-transport-discretization`, `def-pe04-diagonal-norm-sbp-element-data`, `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `def-matching-affine-simplicial-meshes`, `def-broken-and-conforming-polynomial-spaces` |
| 3 | `lem-pe04-cellwise-l2-projection-exists-best-approximation` | `def-pe04-cellwise-l2-projection`, `cor-cauchy-schwarz-inequality-for-l-two` |
| 3 | `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy` | `alg-pe04-first-order-upwind-forward-euler`, `def-pe04-upwind-dg-transport-discretization`, `lem-affine-simplex-gauss-green-formula`, `def-countable-choice` |
| 3 | `thm-pe04-upwind-sbp-sat-l2-energy-stability` | `def-pe04-upwind-sbp-sat-transport-discretization`, `def-pe04-diagonal-norm-sbp-element-data` |
| 4 | `thm-pe04-dg-smooth-solution-l2-error-bound` | `def-pe04-upwind-dg-transport-discretization`, `def-pe04-cellwise-l2-projection`, `lem-pe04-cellwise-l2-projection-exists-best-approximation`, `def-matching-affine-simplicial-meshes`, `lem-affine-simplex-gauss-green-formula`, `lem-oriented-facet-cancellation-on-matching-meshes`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `def-countable-choice` |
| 4 | `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability` | `def-pe04-flux-differencing-sbp-systems`, `def-pe04-diagonal-norm-sbp-element-data`, `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `lem-oriented-facet-cancellation-on-matching-meshes` |
| 4 | `thm-pe04-ssprk33-first-order-upwind-entropy-preservation` | `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy`, `alg-pe04-first-order-upwind-forward-euler`, `alg-ssprk33`, `prop-ssprk33-third-order-and-convex-preservation`, `def-convex-subset-of-euclidean-space`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-countable-choice` |
| 2 | `cex-pe04-underintegrated-burgers-collocation-entropy-growth` | `def-pe04-diagonal-norm-sbp-element-data` |
| 2 | `ex-pe04-central-versus-upwind-periodic-transport` | `def-pe04-upwind-dg-transport-discretization` |
| 2 | `ex-pe04-upwind-transport-with-inflow` | `def-pe04-upwind-dg-transport-discretization` |
| 4 | `ex-pe04-sbp-inflow-sat-energy-identity` | `def-pe04-upwind-sbp-sat-transport-discretization`, `thm-pe04-upwind-sbp-sat-l2-energy-stability` |

Levels are based only on dependencies whose suppliers are in this run: no in-run supplier gives level 0; otherwise the item level is one plus the maximum in-run supplier level. All batch-36 A items appear on the A page in ascending level order; the four B items appear on the B examples page. No dependency cycle was found.

## Supplier inspection and mathematical scope

The complete current bodies of the direct suppliers were checked against their consumer facts and proofs. Batch 33's current PE03 page remains a draft, but the two used definitions are present and their exact conventions were read: `def-pe03-system-entropy-pair-and-potential` fixes the open convex state domain, entropy compatibility, column entropy variable and potential; `def-pe03-tadmor-entropy-conservative-flux` requires continuity, symmetry, consistency and the exact jump identity, while making no existence claim. PE04 states these as supplied conditional data and does not claim every system has such a flux. PE03's semidiscrete entropy theorem is a finite-volume result and is not imported as a DG/SBP theorem.

The published NA28 supplier defines matching affine simplicial meshes only for `d>=2`; the new oriented interval definition supplies the separate one-dimensional partition, trace and jump convention. The NA28 broken-space, matching-facet cancellation and affine-simplex Green statements were checked in their actual bodies. The Green supplier explicitly assumes Countable Choice; its uses are declared in the DG energy, error, forward-Euler and inherited SSPRK records. No AC or DC branch is used.

The published NA15 `alg-ssprk33` and `prop-ssprk33-third-order-and-convex-preservation` bodies were checked. The fully discrete result is limited to the degree-zero scalar periodic upwind map proved to be a convex average under the cellwise face CFL; SSPRK(3,3) transfers only that bound. No fully discrete entropy, positivity or nonlinear stability statement is made for the high-order flux-differencing method.

The flux-differencing interface flux is explicitly fixed as the directional entropy-conservative normal flux minus `alpha/2` times the entropy-variable jump, with `alpha>=0` shared under orientation reversal. Its Tadmor defect is exactly `alpha/2 ||[v]||^2`; paired-face summation gives the stated semidiscrete balance. The physical boundary flux remains subject to the stated nonnegative boundary entropy contribution. Curved elements are excluded.

The DG error theorem is an exact projection-trace residual estimate, not an asymptotic order claim. Its proof establishes Lebesgue full support on each nondegenerate simplex, imports the cellwise projection existence lemma, derives the exact smooth weak equation, and cancels volume projection residuals. At inflow both exact and discrete numerical fluxes use `g`, so there is no inflow projection-trace residual; the interior residual sign is `+ (beta dot n) eta_up [theta]` on the right-hand side. The final estimate leaves the actual trace residual and endpoint projection error visible.

The B-page Burgers witness uses the exact three-node GLL SBP matrices and gives `dE/dt=2/3>0` for the naively collocated strong form. It does not contradict the entropy-stable flux-differencing result because that result uses an entropy-conservative two-point volume flux.

## Source evidence

Four complete PDFs were fetched and the full relevant sections were inspected. The source URLs, locators, supported items, harvested-result dispositions, local cache paths and SHA-256 hashes are in `batch-36.coverage.json` and `batch-36.source-evidence.json`.

- Cockburn, *An Introduction to the DG Method for Convection-Dominated Problems*, complete CIME lecture notes, §§3.2–3.6, §3.16 and §4.2.
- Cockburn and Shu, *Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems*, §§1.1, 2.1–2.5 and 3.1.
- Fisher and Carpenter, NASA/TM-2013-217971, §2.3.2, §§3.1–3.2, §2.5 and §4.2.3.
- Tadmor, *Entropy Stable Schemes*, §§4.1–4.3 and §5.1.

`source-fetch-check --stamp` verified and resolved 4/4 active sources, with 0 newly stamped; the coverage checklist reports 23 harvested results, 0 errors and 0 warnings. An optional Gassner candidate returned HTTP 403 from the publisher and a fetched MPIM alternate was a different paper after title-page inspection. It was not an active required source; its attempts/search are preserved in coverage retrieval history. The SBP claims are proved locally and covered by the complete Fisher–Carpenter and Tadmor treatments; no active source was dropped.

## Scoped checks

- Strict proof contracts: 18/18, 0 errors and 0 warnings. Contracts include exact supplier excerpts, per-step claims/inputs, boundary dispositions, applicable finite checks, and the explicit Countable Choice use branch.
- `proof-layout`: 18 items, 36 steps, 0 defects.
- `precheck.mts`: 18 files, 11 proof-bearing items checked, 0 failures; 7 definitions/algorithm not applicable.
- `rendercheck`: 20 changed files (18 items and both pages), 0 errors and 0 warnings.
- Focused `depcheck`: 18 selected items and their prerequisite closure, 0 errors and 0 warnings.
- Focused `fwdcheck`: 18 items and their prerequisite closure, 0 errors and 0 warnings.
- Focused `extcheck`: 18 items, 0 errors and 0 warnings.
- `content-policy`: 18 scoped items, 0 errors and 0 warnings.
- `manifest-deps`: 18 manifest items, 0 missing dependency arrays and 0 errors.
- Whole-run item-level check: 1,420 items across 142 pages, maximum level 12. The batch-36 comparison has 0 level mismatches and the full dependency graph has 0 structural errors.
- Coverage checklist with destination requirement: 23 harvested results, 0 errors and 0 warnings.
- Source fetch check: 4/4 active sources fetch-verified and resolved, 0 newly stamped.

The whole-run batch schedule check remains blocked outside this pair. `batch-dependency-levels.mjs check --run ...` cannot parse `items/alg-na-finite-control-howard-policy-iteration.md`: the YAML parser stops at line 18, column 14, where the `Wang He, Reinforcement Learning: A Mathematical Introduction` bibliography title contains an unquoted colon. This item is outside batch 36 and was not edited. The current shared artifact still lists batch 36 at level 4 with prerequisite batch 33, but its recorded input hash `4e9cbf925e8268ca704d079980b63312b1df8cb6637884cf5181cf12b0c1a8e2` differs from the dispatch input `a1545c2b00f56a0cdca00bf11b21af62e611f3e819701441e21dc2f917e4ca3f`; the shared batch-level artifact was not edited.

## Step-1 records

Each current item is marked `ready` only after its actual suppliers, A/B placement, item level and strict proof contract were checked. These are author-readiness records, not acceptance of draft PE03 content or independent proof approval. No escalation was overwritten and `--owner` was not used.
