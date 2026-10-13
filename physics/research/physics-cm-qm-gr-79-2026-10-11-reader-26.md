# Step 3a reader report — batch 26

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader, `reader-26`  
Scope: batch `26` only

## Opened inventory

Pages opened:

- `library/non-relativistic-classical-mechanics/cm10-rigid-body-configuration-and-inertia.md` (A page)
- `library/non-relativistic-classical-mechanics/cm10-rigid-body-configuration-and-inertia-examples.md` (B page)

Assigned items opened in dependency order:

1. `post-cm10-rigid-material`
2. `def-cm10-rigid-body-configuration`
3. `def-cm10-angular-velocity`
4. `def-cm10-inertia-tensor`
5. `pthm-cm10-kinetic-splitting`
6. `pthm-cm10-principal-axes`
7. `pthm-cm10-frame-covariance`
8. `rem-cm10-orientation-charts`
9. `ex-cm10-equilateral-triangle-rotational-inertia`
10. `cex-cm10-degenerate-line-mass-singular-inertia`
11. `ex-cm10-euler-angle-pole-and-orientation`
12. `ex-cm10-parallel-axis-shift-check`

I also opened the current supporting statements needed for the reviewed derivations, including the Newtonian spacetime/frame/worldline items; the unit, affine-time-space, mass-distribution and moment-finiteness items; the rigid-placement, SO(3), stabilizer, chart-change, matrix-derivative and skew/cross-product items; the inertia-matrix and principal-axes suppliers; the kinetic-energy/angular-momentum and parallel-axis suppliers; the Euler-angle and coordinate-rotation items; the quaternion rotation/lift items; and the finite-atomic-measure suppliers. The assigned proof-contract JSON and current batch notes were inspected as evidence, not treated as verdicts.

## Review and findings

No assigned item or page was edited. The uneditable defects recorded in the findings JSON are:

- `rem-cm10-orientation-charts`, lines 63–66: the unqualified statement that no continuous choice of the three angles can pass through a pole is too strong. The companion example extends the same formula to all of `R^3` and gives the continuous path `Phi(0,t,0) = R_y(t)` through the pole. The valid chart claim is that the restricted Euler chart has no coordinate value there and no local inverse across the pole.
- `rem-cm10-orientation-charts`, line 60: it invokes the smooth inverse function theorem to establish a local inverse, but `thm-smooth-inverse-function-theorem-on-manifolds` is absent from this item’s `deps` and `dependency_roles`. I opened the cited published theorem; its smooth-map and tangent-isomorphism hypotheses match the preceding local calculation. The issue is the undeclared prerequisite edge.
- `ex-cm10-euler-angle-pole-and-orientation`, lines 54 and 62–66: the declared map has codomain `M_3(R)`, so its derivative is a map `R^3 -> R^9`; calling that derivative “not invertible” is ill-formed as a square-map claim. The rank calculation does establish noninjectivity, and the intended manifold statement can be written as failure of an isomorphism to the 3-dimensional tangent space of `SO(3)`.
- `def-cm10-rigid-body-configuration`, lines 93–96, and its contract boundary case `one`: the degenerate-labeling clause does not tie `S` to the mass distribution or handle a singleton at the origin. The adopted model permits `nu = m delta_0` with `m>0`; if physical labels are the mass support, `S={0}` and every `R in SO(3)` fixes the placed material point, with no distinguished line stabilizer. Define the physical label set and state its exact stabilizer, including the singleton case.
- The A-page summary, lines 43–44, repeats the same overstrong line-support orientation claim and needs the same qualification.
- The contracts for `def-cm10-angular-velocity` (`boundaries[4]`) and `pthm-cm10-kinetic-splitting` (`boundaries[4]`) claim endpoint coverage by one-sided derivatives. Their adopted time window `I_0` is an open interval, so its endpoints are not part of the domain.

The other computations and conditional identities reviewed were supported by the stated hypotheses and opened suppliers. In particular, the current on-disk `lem-cm-inertia-matrix-properties` and `cor-cm-principal-axes-of-the-inertia-matrix` state the correct line-support/vanishing criteria; the older batch note’s report of an inverted criterion is not a defect in the bytes reviewed here. `pthm-cm10-principal-axes` uses the valid supplier clauses and proves the degeneracy criterion locally.

## Page verdicts

- **A page `cm10-rigid-body-configuration-and-inertia`: hold.** The conditional mechanics and most definitions/proofs check out, but the orientation remark, the degenerate-labeling qualification, and the missing inverse-function-theorem dependency require correction. The page summary repeats the degenerate-labeling overclaim.
- **B page `cm10-rigid-body-configuration-and-inertia-examples`: hold for nonfatal wording.** The finite-atomic calculations, singular line-mass example, Euler-angle rate calculation, and parallel-axis computations check out. The Euler example’s use of “not invertible” for the derivative into the ambient matrix space needs a precise tangent-space or noninjectivity formulation.

## Edits, checks, and blocker

- Edits: none; this was a read-only assignment.
- Formatter/reflow/precheck: not run because no item was edited.
- Blocker: none operational. Findings remain for owner disposition.
- Source limitation: I checked the accessible Likharev Chapter 4 sections and the MIT OCW rigid-body/parallel-axis material relevant to the examples. The Tong PDF was not accessible through the web text extractor, and I did not independently open the Sussman–Wisdom archive; those bibliography entries were not used to resolve a mathematical uncertainty.
