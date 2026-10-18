# Same-cycle foundation and interface completion

This continues first-cycle research only. Root's disposition after reading the full report and four proposed carriers was: “owner settles controlling 'after boundary correction' phrase as explicit SEPARATE full and relative families, preserves approved downstream need/full projection and strengthens L2/convergence, no single-family L2-preservation claim.” This disposition is now recorded in the report. It grants no proof acceptance, native coverage, or gate exemption. The original full graph-bounded projection claim and the required homogeneous downstream complex are retained by their explicit separate families. The proposed theorem continues to use a bounded contractible Lipschitz polyhedron in dimension three and arbitrary matching shape-regular tetrahedral grading.

The four proposed carriers were updated locally; canonical sources remain untouched. No additional helper item is proposed. No validator, formatter, hash, test, gate, readiness or runtime operation was performed.

## Explicit finite interface

The averaged-moment lemma now defines a form as a finite vector of coefficient functions indexed by increasing coordinate tuples, its coefficient L2 norm, alternating wedges, and the finite signed distributional-derivative formula for `d`. It spells out the degree-one, degree-two and degree-three vector conventions and their grad/curl/div signs. The degree-two increasing coefficients are `(v3,-v2,v1)`, retaining the usual vector norm.

Pullback is defined explicitly by the sum of coefficient compositions multiplied by the appropriate tangent-Jacobian minors. Oriented integration is the integral of the top pullback coefficient in the standard affine simplex coordinates, with point evaluation only in degree zero. For L2 inputs the joint averaged parameter integral is the definition; no fixed-surface trace is imported. The first estimate proves representative independence and integrability. Restriction of the piecewise affine local mesh size to any one simplex is affine, so the required tangent derivative is common across neighboring cells even when ambient derivatives jump.

The smooth pullback and Stokes identities are imported only on smooth parameter maps. Stokes on each prism is reduced to finitely many standard simplices, with internal-face cancellation. Weak commutation remains a local proof through coefficient mollification and change of variables. In particular, the proof does not assume each coefficient of an Hcurl or Hdiv field has all first weak derivatives in L2: the exterior derivative is the stated finite sum, and distributional convolution commutes with that sum.

## Actual prerequisite bindings

The following actual local carriers were inspected for their relevant hypotheses and argument. They are context suppliers with existing homes; no rehome or unrelated audit is requested.

| Actual local supplier | Exact use |
| --- | --- |
| `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-heine-borel-rn` | Geometry lemma's finite boundary-cover construction: finitely many explicit bumps, their positive sum, normalization, and a compact-set cutoff extend the inward field smoothly. These suppliers state choice-free finite constructions. The broad arbitrary-cover partition theorem is not imported. |
| `thm-local-coordinate-formula-for-the-exterior-derivative` | The finite signed coordinate formula defining the graph differential agrees with the existing smooth exterior derivative. |
| `thm-the-exterior-derivative-commutes-with-pullback` | Smooth chain rule for coefficient/minor pullbacks before weak passage. |
| `def-integral-of-a-form-over-a-smooth-singular-simplex`, `lem-stokes-theorem-for-the-standard-simplex` | Oriented affine-simplex integral, positive zero-simplex convention, and all-degree Stokes; finite prism triangulation supplies the homotopy identity locally. |
| `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set` | Coefficient L2 density on an arbitrary open set, used in smooth-neighborhood graph approximation and strong projection convergence. Its Statement explicitly assumes Countable Choice. |
| `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `cor-cauchy-schwarz-inequality-for-l-two` | Completeness of the finite coefficient L2 product, and norm control when passing the finite coefficient weak identities to limits. The Hilbert supplier explicitly assumes Countable Choice. The finite-element Neumann series additionally uses only completeness of its finite-dimensional target, not an unproved abstract inverse theorem. |
| `lem-distributional-derivatives-commute-with-convolution-against-test-functions`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-local-smooth-approximation-in-wkp` | Coefficient smoothing and commutation with distributional d; the last theorem is used **only at k=0, p=2**, for each existing L2 coefficient of u and du, not to assert Hcurl is H1. The smoothness/local-convergence interfaces assume Countable Choice. |
| `cor-c-one-change-of-variables-for-l-one-functions`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` | Translation/scaling in the moment parameter; smooth cellwise shift change of variables; and the smooth constant-scale shifts used in density. The C1 change-of-variables supplier explicitly assumes Countable Choice. The smooth inverse supplier is choice-free. |
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence` | Exchange of the finite simplex, ball and prism parameter integrals, representative/null-set passage, and averaged homotopy limits. All relevant domains have finite measure, and the moment/inverse estimates supply the absolute integrable majorants. |
| `def-countable-choice` | Explicit inherited foundational hypothesis in the averaged-moment lemma, correction/convergence lemma and original projection theorem. |

The geometry lemma stays choice-free: its boundary cover is finite, its bumps are explicit, and the normalized finite partition is displayed. It no longer simply invokes a smooth partition of unity without an interface.

No general Lipschitz change-of-variables or area formula is silently imported. The variable mesh-size shifts are smooth on each open tetrahedron, have invertible Jacobians, and are globally injective. Their open cell images are disjoint. The proof explains why images of mesh faces are volume-null by an explicit square-cover estimate, then sums the existing C1 formula over the finite cells. Constant-scale smooth shifts have the ordinary C1 inverse directly.

The density smoothing now also exhibits its coefficient formula: with `psi_t(x)=x+t b(x)`, it is `psi_t^*(check_rho_(tr) * zero_extension(u))`. The Jacobian minors are independent of the averaging parameter at constant scale. Its smoothness therefore follows from the existing coefficient convolution theorem and finite composition, not an unspecified parameter differentiation theorem. The inward clearance ensures this formula uses only original interior values. Relative zero extensions are used only after their distributional boundary cancellation or the defining homogeneous closure has been proved.

## Choice and consumer inheritance

Countable Choice is carried because the actual local L2 density/completeness, coefficient smoothing and Lebesgue substitution suppliers explicitly require it. No arbitrary-index selection is used by this construction, and no regular-decomposition or global cohomology theorem is used as a premise. Consequently the projection proposal needs CC, rather than inheriting the regular-decomposition supplier's separate AC assumption.

The actual compactness consumer already explicitly assumes AC with its CC/DC consequences, so this inherited CC requirement is satisfied by its existing foundational scope. Its focused proof repair still must select the relative family and the exact gradient/curl/projection identities. Future Maxwell proof carriers invoking the projection must carry CC or an explicitly stronger axiom already in their hypotheses. The currently read Maxwell definitions do not assert this theorem or a resulting rate, so they do not acquire an unsupported projection premise through this addendum.

Original-Statement changes now include the explicit separate-family interface, L2/convergence strengthening, and the inherited CC declaration. I retain the same-reviewer duty to inspect and repair every actual current old/new direct and indirect consumer after the genuine native continuation writer drain, in root's sequential cycle-two order. That future check has not occurred.

## Remaining obligations

No additional substantial mathematical supplier is currently identified as missing in the projection branch: the finite geometry, local-scale bounds, weak-density/zero-extension passage, homotopy estimate, inverse correction and convergence are written in the candidates, with the above actual context bindings. This is a candidate proof assessment, not acceptance. Exact current-source review after the native writer drain, genuine independent mathematical review, metadata/dependency-level reconciliation, proof contracts, page placement and ordinary native checks remain owed. This same-cycle addendum does not spend a second owner review/repair cycle.
