# Step 3a reader report — batch 1

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `1` only

## Opened inventory

Pages:

- A page `cm-math-geometry`: `library/non-relativistic-classical-mechanics-mathematics/cm-math-geometry.md`.
- B page `cm-math-geometry-examples`: `library/non-relativistic-classical-mechanics-mathematics/cm-math-geometry-examples.md`.

All 23 manifest-listed items were opened and reviewed, along with direct dependencies in supplier-before-consumer order as needed to check each claim. The dependency review covered the cited vector-space, quotient, rank-nullity, matrix, determinant, calculus, ODE, cross-product, topology, metric-space, smooth-manifold, measure, and trigonometric statements. No direct cross-batch dependency was present.

Items on `cm-math-geometry`:

- `def-cm-equilibrium-and-lyapunov-stability`
- `def-cm-orbital-and-linear-stability`
- `def-cm-hyperbolic-equilibrium-and-limit-cycles`
- `def-cm-stroboscopic-map`
- `lem-cm-stroboscopic-iterate-identity`
- `def-cm-constrained-configuration-and-mass-metric`
- `lem-cm-mass-metric-positivity`
- `def-cm-material-region-and-density`
- `def-cm-traction-and-stress`
- `def-cm-affine-time-space`
- `lem-cm-adapted-coordinates-exist-and-are-unique`
- `lem-cm-adapted-charts-and-galilean-transformations`
- `lem-cm-moving-frame-acceleration-identity`
- `def-cm-special-orthogonal-group`
- `lem-cm-so3-is-a-matrix-group`
- `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold`
- `lem-cm-rigid-labeling-stabilizer`

Items on `cm-math-geometry-examples`:

- `ex-cm-galilean-boost-coordinate-change`
- `ex-cm-rotating-frame-identity`
- `ex-cm-mass-metric-on-a-sphere`
- `cex-cm-collinear-labeling-admits-a-nontrivial-rotation`
- `ex-cm-closed-one-form-radial-primitive`
- `ex-cm-stroboscopic-map-of-the-plane-oscillator`

## Repairs and evidence

- `def-cm-affine-time-space`: added the quotient-space and first-isomorphism prerequisites and made the dimension calculation explicit using rank-nullity and the one-dimensional image of the time functional.
- `def-cm-constrained-configuration-and-mass-metric`: declared the smooth-map and $C^k$-closure prerequisites and added the missing smooth-dependence calculation for the coordinate matrix $J_X^{\mathsf T}MJ_X$.
- `def-cm-material-region-and-density`: made the integral type-correct by defining the trace sigma algebra and restricted measure on (B); the density is measurable and integrable on that measured subspace. Added the corresponding measurable-space, Borel, sigma-algebra, measure, and integrability prerequisites. No extension across the boundary is assumed.
- `def-cm-orbital-and-linear-stability`: defined closure explicitly and stated the equivalence between membership in the closure and zero distance, using the Euclidean distance definition already cited.
- `def-cm-hyperbolic-equilibrium-and-limit-cycles`: defined the complex-linear extension used for eigenvalues of real matrices, required an open domain for the total derivative of a map, and defined a periodic orbit as the image of a nonconstant periodic solution.
- `def-cm-stroboscopic-map`: removed the unsupported implication from hyperbolicity of the time-period map to hyperbolicity of a continuous-time periodic solution; the item now says the differentiability domain needed for that application is not established here.
- `def-cm-special-orthogonal-group`: supplied matrix/group prerequisites and justified orthogonal-group closure and inverses; clarified that columns give an orthonormal triple and that orientation is relative to the standard orientation.
- `def-cm-traction-and-stress`: removed the undefined body-force-density and acceleration assertion and limited the example to a mathematical normal-dependent map, without a constitutive or force-balance claim.
- `lem-cm-adapted-charts-and-galilean-transformations`: stated regularity for the actual first-chart coordinate curve, proved the determinant-one step from determinant identities and positivity, and differentiated the affine coordinate formulas componentwise rather than applying an open-domain chain rule to an arbitrary interval.
- `lem-cm-moving-frame-acceleration-identity`: added the determinant criterion needed for matrix inversion, proved $RR^{\mathsf T}=I$, and stated that the angular-velocity vector is $C^1$ under the $C^2$ rotation hypothesis. Its four direct consumers (`def-cm06-moving-frame`, `ex-cm01-rotating-basis-of-a-free-motion`, `ex-cm06-rotating-chart-inertial-terms`, and `pthm-cm06-inertial-forces`) were checked; their $C^2$ hypotheses supply the required regularity.
- `lem-cm-rigid-labeling-stabilizer`: added the determinant, transpose, standard-basis, and exchange prerequisites; proved linear independence of the constructed triple and invertibility of the stabilizing rotation before using them. The stabilizer is now specified pointwise.
- `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold`: corrected the regular-level map's codomain to the six-dimensional symmetric-matrix space and supplied the missing nonempty-level, inverse, determinant-sign, smoothness, and derivative arguments. This closes the stated codimension and tangent-space deductions under the regular-level-set theorem.
- `lem-cm-stroboscopic-iterate-identity`: proved that the shifted solution satisfies the same periodic ODE on the second interval, including the endpoint derivative match needed for gluing.
- `ex-cm-galilean-boost-coordinate-change`: specified the domain and codomain of the curve as \(\gamma:\mathbb R\to A\).
- `ex-cm-rotating-frame-identity`: distinguished the scalar frequency from the angular-velocity vector, stated the time domain, and specified the domains and $C^2$ regularity of the test curves.
- `ex-cm-mass-metric-on-a-sphere`: supplied smoothness, differential, and embedded-inclusion prerequisites; derived the derivative directly from its quadratic remainder and connected ambient derivative columns to the manifold differential.
- `ex-cm-stroboscopic-map-of-the-plane-oscillator`: replaced the unsupported local-Lipschitz assertion with an explicit global Lipschitz estimate for the oscillator vector field and supplied the Euclidean inner-product prerequisite.

For the eight proof-bearing items materially repaired, the batch proof contracts were synchronized to the current facts, proof steps, actual citations, and boundary evidence. No changed item contained a stale `verification.judge` record. No published item, B-page prose, plan specification, or other batch was edited.

Direct-consumer checks were made where a definition or lemma clarification affected how downstream items can be read. The adapted-chart lemma's consumers already specify the coordinate-curve regularity they use. The moving-frame lemma's four consumers are listed above and assume $C^2$ data. Consumers of the hyperbolicity definition in this batch do not infer continuous-time periodic-orbit hyperbolicity from a time-period map; the stroboscopic definition's remark was corrected accordingly. Ten direct consumers of the material-region definition were checked against its trace-measure convention; their region and mass integrals remain type-correct, or use separately defined global densities.

## Page verdicts

- `cm-math-geometry` — pass after an A-page summary correction. The summary had incorrectly described a separate draft special-relativity affine-space definition as a dependency. The actual prerequisite graph has no such dependency: the affine structure used here is restated locally, while the external prerequisites are published mathematics items. The current page requirements cover the needed dependency home pages.
- `cm-math-geometry-examples` — pass. Its summary is consistent with the reviewed examples. The reverse-dependency check found no consumers outside the assigned pair of pages for its six example items.

## Validation and remaining issues

- Reflow and precheck were run for all 17 changed items. All reflows were unchanged; the eight definition items reported zero proof-bearing checks, and all nine proof-bearing items passed direct precheck.
- The strict proof-contract check passed for all eight updated contracts: 0 errors and 0 warnings.
- The required proof-layout command covered all 17 changed items and 40 proof steps: 0 defects.
- No confirmed or suspected defect remained outside the allowed edit scope. No blocker remains.

Coverage limitation: I reviewed both assigned pages, all 23 assigned items, and the direct supplier statements and facts needed to check the assigned claims. I did not independently audit the complete transitive imported-mathematics closure (868 items).
