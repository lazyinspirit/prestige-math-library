# Step 3a reader report — batch 56

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch `56`

## Opened inventory

Assigned pages:

- A page [`supg-and-residual-based-stabilized-finite-elements`](../library/numerical-pdes-and-spatial-discretization/supg-and-residual-based-stabilized-finite-elements.md).
- B page [`supg-and-residual-based-stabilized-finite-elements-examples`](../library/numerical-pdes-and-spatial-discretization/supg-and-residual-based-stabilized-finite-elements-examples.md).

The two page prerequisites listed by the manifest were also opened: `variational-crimes-and-strang-lemmas` and `energy-stable-incompressible-navier-stokes-discretization`.

Assigned A-page items reviewed in dependency order:

1. `def-supg-one-dimensional-convection-diffusion-model`
2. `def-supg-general-convection-diffusion-reaction-model`
3. `def-supg-pspg-grad-div-stokes-forms`
4. `def-supg-variational-multiscale-block-closure`
5. `def-supg-one-dimensional-residual-form`
6. `def-supg-general-residual-form`
7. `lem-supg-one-dimensional-l2-interpolation-estimate`
8. `lem-supg-general-p1-interpolation-estimate`
9. `thm-supg-pspg-stokes-coercivity`
10. `thm-supg-vms-schur-defect-bound`
11. `lem-supg-one-dimensional-optimal-parameter`
12. `thm-supg-general-p1-error-and-stability`
13. `thm-supg-one-dimensional-consistency-coercivity`
14. `thm-supg-one-dimensional-energy-error`

Assigned B-page items reviewed after their suppliers:

- `ex-supg-q1-equal-order-pressure-checkerboard`
- `ex-supg-grad-div-does-not-fix-pressure-kernel`
- `ex-supg-vms-two-scale-closure-defect-sharp`
- `ex-supg-overlarge-stabilization-smears-solution`
- `ex-supg-convection-boundary-layer-coarse-mesh`

Direct external item suppliers opened were `def-matching-affine-simplicial-meshes`, `lem-affine-simplex-gauss-green-formula`, `def-countable-choice`, and `lem-one-dimensional-p1-interpolation-error`. To check the locally proved Gauss–Green and one-dimensional interpolation suppliers, I also opened the exact statements of their direct dependencies: `lem-affine-pullback-weak-derivatives-and-scaling`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-ftc-second-part`, `thm-monotonicity-of-the-integral`, `thm-extreme-value-r`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, and `thm-lebesgue-measure-of-a-box-of-every-kind`.

## Review and evidence

The scalar definitions, optimal parameter bounds, consistency/coercivity argument, energy estimate, and both two-cell computations are internally consistent. In the multidimensional result, the stated reaction-divergence lower bound supplies coercivity, the chosen `delta_K` controls the reaction cross term, and the proof uses affine-simplex Gauss–Green for the convection identity and strong consistency. The PSPG Stokes identity is positive in the stated gradient-pressure norm; the checkerboard calculation verifies zero divergence coupling and positive PSPG energy. The VMS block formulas and sharp scalar example agree with exact elimination and the displayed defect bound.

Primary source passages consulted:

- Volker John, *Numerical Methods for Scalar Convection-Dominated Problems*, Chapter 5: the table of contents places SUPG in §5.3.2; Example 5.16 gives the one-dimensional P1 fitted parameter (printed pp. 55–56); Definition 5.21 and Theorem 5.22 give the streamline norm and parameter-restricted coercivity (printed p. 57 onward); Theorem 5.26 gives the interpolation/Galerkin-orthogonality error route (printed pp. 59 onward). Source: https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf
- Hans Petter Langtangen, *INF5620: Numerical Methods for Partial Differential Equations*, slides 77–81 (PDF pp. 9–10): artificial diffusion, the exact one-dimensional parameter on slide 80, and streamline-direction diffusion on slide 81. Source: https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf
- Galarce and Pacheco, arXiv:2411.02100v1, §3.1, PDF p. 2, equations (6)–(7): the PSPG momentum residual and the loss of the cell viscous Laplacian for piecewise-linear velocities. Source: https://arxiv.org/pdf/2411.02100
- Hughes, Scovazzi, and Franca, *Multiscale and Stabilized Methods*, §3.2.1, equations (57)–(68), and §3.2.2: residual-driven fine scales, the exact coarse-scale equation, and the fine-scale Green operator. Source: https://www.oden.utexas.edu/media/reports/2004/0418.pdf

## Edits

1. Corrected the John chapter locator from `§5.2` to `§5.3.2` in these six assigned items: `def-supg-general-convection-diffusion-reaction-model` (line 19), `def-supg-pspg-grad-div-stokes-forms` (line 22), `def-supg-variational-multiscale-block-closure` (line 22), `thm-supg-vms-schur-defect-bound` (line 23), `ex-supg-vms-two-scale-closure-defect-sharp` (line 25), and `ex-supg-grad-div-does-not-fix-pressure-kernel` (line 23). The cited results occur in John’s §5.3.2; §5.2 is the Galerkin section. The batch manifest still contains its original locator strings and was not edited.

2. Repaired `thm-supg-general-p1-error-and-stability`, proof step 1.3 (line 57), by explicitly enlarging the interpolation constant to at least one. This preserves the interpolation supplier’s bounds and makes the factor used for the residual term in step 6 valid for the same `C_I`. Regenerated this item’s derivations and citations in `research/numerical-analysis-remaining-71-2026-10-17-batch-56.proof-contracts.json`. The item had no `verification.judge` record to remove.

For the seven changed items, reflow reported unchanged; precheck had zero failures (the three definitions had no proof sections to check; the four proof-bearing items passed). The focused proof-contract check passed: `1/1` item, zero errors and warnings. The required final proof-layout command covered all seven changed paths and reported `7 items, 16 steps, 0 defects`.

## Unedited issues and page verdicts

No mathematical defect remains in assigned item content or assigned page prose. The findings JSON is empty.

The existing proof-contract row for `thm-supg-general-p1-error-and-stability` marks the `one` boundary case as checked by describing a one-dimensional instance, while the theorem and its model require `d >= 2`. This does not change the item’s stated claim. I left the hash-bound boundary-review metadata intact; the owner should reconcile that contract row before later contract closure.

The batch manifest also retains its pre-reader `§5.2` locator strings; the corresponding in-scope item citations are corrected above. The manifest was not edited.

- **A page verdict:** summary is accurate for the separate one-dimensional, multidimensional, PSPG, and VMS branches; no page edit needed.
- **B page verdict:** prose and checkerboard diagram agree with the five verified computations; no page edit needed.
- **Blocker:** none for the mathematical review. The contract/manifest metadata discrepancies are recorded above for owner integration.
