# Step 3a reader report — batch 70

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: independent reader  
Assignment: batch `70` only

## Scope and opened inventory

The run status was recomputed from `.autopilot/numerical-analysis-remaining-71-2026-10-17`. It reported the run active at `3a-read`, with no worker currently running. I read the batch-70 manifest, reader brief, batch notes, coverage and source evidence, cross-batch dependency record, and batch-70 proof contracts as review context rather than as verdicts.

| Assigned page | Status | Items opened | Verdict |
|---|---|---:|---|
| `semi-lagrangian-characteristic-transport` | draft A page | 12 | Mathematically accurate after the prose repair below. |
| `semi-lagrangian-characteristic-transport-examples` | draft B page | 4 examples | Accurate; no edit. |

The A-page summary and its two page-level prerequisites were opened. The required pages were `curved-mesh-geometry-and-conservative-mesh-transfer` (draft) and `event-location-and-hybrid-trajectory-error` (published). I read their page summaries to check the interfaces used here; this was not a full audit of either prerequisite page.

All 16 assigned items were opened in supplier-before-consumer order:

| Dependency level | Items and independent disposition |
|---:|---|
| 0 | `def-semilagrangian-periodic-grid-and-interpolant` — definition is precise, including periodic wrapping and the one-node case. |
| 0 | `thm-periodic-c1-velocity-has-global-characteristic-flow` — finite-time continuation, equivariance, and displacement estimate follow from the stated periodic C1 hypotheses. |
| 0 | `lem-semilagrangian-transverse-first-hit-error` — repaired singleton-bracket proof case; the nondegenerate proof is supported by the transverse-event supplier. |
| 1 | `alg-semilagrangian-backtracking-on-periodic-grid` — inputs, budget branch, finite loops, foot computation, and interpolation call are specified. |
| 1 | `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` — product weights are nonnegative and sum to one, including wrapped coincident corners. |
| 1 | `lem-periodic-characteristic-map-is-orientation-preserving` — inverse flow, invertible derivative, and determinant sign argument are justified. |
| 2 | `lem-periodic-tensor-interpolation-hessian-error` — one-coordinate remainder and tensor telescoping give the stated bound, including periodic endpoints. |
| 2 | `lem-euler-backward-characteristic-foot-error` — the integral defect yields the stated second-order local bound without a displacement restriction. |
| 2 | `lem-periodic-flow-departure-cells-have-positive-finite-volume` — the periodic lift gives measurable cells; an interior ball gives positive volume and containment in the finite-volume box gives finiteness. |
| 2 | `ex-semilagrangian-constant-speed-crosses-many-cells` — wrapped foot, fraction, and convex update compute to (18/5). |
| 2 | `ex-semilagrangian-fixed-grid-time-refinement-keeps-interpolation-error` — the smooth nodal data, binomial contribution, and positive limit are correct. |
| 2 | `ex-semilagrangian-pointwise-interpolation-can-change-grid-mass` — the smooth data, three feet, interpolation rows, and grid-sum calculation are correct. |
| 3 | `def-characteristic-cell-overlap-remapping` — the open-box measure convention and source-to-departure overlap average are well-defined under the stated hypotheses. |
| 3 | `thm-periodic-semilagrangian-global-error-from-local-defects` — the recurrence and geometric-sum bound are correct; the contractive specialization has the stated (h^2/\Delta t\) consistency condition. |
| 4 | `thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity` — the in-run overlap theorem applies to the finite measurable partitions, and the positive volume ratio preserves positivity and mass. |
| 4 | `ex-conservative-overlap-transfer-under-smooth-deforming-flow` — flow monotonicity, overlap lengths, output averages, and total mass arithmetic are correct. |

I opened the direct published suppliers used by these proofs: `def-linear-transport-equation-and-its-characteristic-flow`, `thm-picard-lindelof-local-existence-and-uniqueness`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-mean-value-inequality-for-total-derivatives`, `def-hybrid-mode-guard-reset-system`, `lem-hybrid-guard-derivative-along-mode`, `lem-transverse-hybrid-event-time-error`, `lem-transport-characteristics-depend-c-one-on-initial-position`, `thm-chain-rule-for-total-derivatives`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, `thm-intermediate-value`, `thm-lagrange-interpolation-remainder`, `thm-exponential-product-limit`, `def-countable-choice`, `thm-borel-sets-are-lebesgue-measurable`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-measure-monotonicity`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-holder-inequality-for-integrals`, and `thm-linearity-of-the-lebesgue-integral-on-l-one`. I checked the claims and proof passages needed for the assigned inferences; I did not re-audit every transitive prerequisite of each already-published supplier.

The two current-run batch-63 draft suppliers were read in full and their bytes remained unchanged through this split:

- `def-intersection-volume-conservative-remapping` — SHA-256 `87b849eddecec6b5895dfaf8ae76c6c447b12205e9d1b8882b3057a5ad07bb73`.
- `thm-overlap-remap-l2-projection-conservation-positivity` — SHA-256 `988ec6d959243b3f44319f98096826cfb3f03a33047feee48bdae4addcd6d9b1`.

Their finite measurable partition hypotheses, exact overlap weights, positivity, and total-mass identity match the batch-70 use. Both remain draft suppliers; this review found no defect in either current body.

## Mathematics and source review

The main periodic branch is internally supported. Periodic C1 boundedness supplies local ODE continuation; the interpolation proof is independent of foot displacement; the backward Euler defect uses the time and space derivative bounds; and the global recurrence sums interpolation and foot defects separately. The exact overlap branch consistently carries Countable Choice and positive finite-volume partition assumptions. The pointwise interpolation example is explicitly only a grid-sum diagnostic and is not used as a conservation theorem.

The event-time supplier requires a nondegenerate bracket (a<b), while the assigned item permits (J=[a,b]) to be a singleton. This was the only proof defect found. The repair handles (a=b) directly: both times equal (a), and the state error bound gives the trace estimate. The event-time supplier is then applied only in the (a<b) branch.

I checked the relevant passages of the cited sources directly:

- The [ECMWF *Numerical Methods* lecture notes](https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf), §§5.1–5.2 (printed pp. 49–51), describe departure-point backtracking, interpolation at the foot, and the one-dimensional linear-interpolation stability calculation. Section 5.7 (printed pp. 56–57) describes a separate implicit iterative trajectory calculation and notes that its fixed three-iteration practice has no convergence test; batch 70 uses explicit Euler instead and proves its own local error.
- Einkemmer and Ostermann, [“On the error propagation of semi-Lagrange and Fourier methods for advection problems”](https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/), §2.1, Eq. (2), states a worst-case (C(h^q+h^q/\tau)) bound for its analytical-characteristic model and explains the per-step interpolation accumulation. Section 4, Eqs. (6)–(7) and the surrounding discussion, computes the linear-interpolation average error and notes that pointwise interpolation is generally not conservative. Batch 70 proves its own variable-velocity witness and global bound.
- For the batch-63 background citations, the [Powell–Abel arXiv abstract](https://arxiv.org/abs/1412.4941) describes exact integration over intersections of convex polyhedral cells, and the [Zhang publisher record](https://www.global-sci.com/cicp/article/view/5434) identifies a one-dimensional L2-projection moving-mesh remap that preserves mass. These citations are bibliographically accurate and relevant context; the local finite-measurable-partition claims are proved in the current item bodies rather than inferred from those abstracts.

## Edits and validation

1. In `lem-semilagrangian-transverse-first-hit-error`, I added the singleton-bracket case and renumbered the nondegenerate event-time and trace steps to `1.2` and `2.1`. The proof contract now maps its citations and derivations to the current steps and records the updated singleton, zero-error, and grazing boundary evidence. The item had no `verification.judge` record to remove.
   - `node tools/tsx-run.mjs tools/reflow.mts items/lem-semilagrangian-transverse-first-hit-error.md` — passed; unchanged.
   - `node tools/tsx-run.mjs tools/precheck.mts items/lem-semilagrangian-transverse-first-hit-error.md` — passed.
   - `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-70.proof-contracts.json --strict --items lem-semilagrangian-transverse-first-hit-error` — 1/1 checked, 0 errors, 0 warnings.
   - `node tools/proof-layout.mjs items/lem-semilagrangian-transverse-first-hit-error.md` — 1 item, 3 steps, 0 defects.

2. On the assigned A page, I removed temporary Step 1 and cross-batch draft-status commentary from the mathematical summary. I retained the actual Countable Choice and finite-partition hypotheses, the separation between pointwise and overlap remapping, and the local-only boundary-error caveat. No item or B-page prose was changed beyond the item repair above.

No batch-wide gates or unrelated tests were run.

## Uneditable defects and page verdicts

- Uneditable defects: none found. No finding remains for a batch-63 in-run dependency or a published dependency.
- A-page `semi-lagrangian-characteristic-transport`: pass after the prose cleanup; its periodic error and conservative-density summaries preserve the mathematical hypotheses and limitations.
- B-page `semi-lagrangian-characteristic-transport-examples`: pass; all four examples are accurately summarized.
- Blocker: none.

## Coverage limitations

I reviewed every assigned item and page, each direct supplier needed for the assigned claims, the two page-level prerequisite summaries, and the cited literature passages listed above. I did not re-audit unrelated transitive dependencies of published items, read the full Powell–Abel or Zhang articles, or run the full-batch gate suite. No conclusion in this report relies on those unperformed checks.
