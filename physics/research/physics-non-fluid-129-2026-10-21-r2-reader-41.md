# Step 3a reader report — batch 41

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Date: 2026-10-22

## Scope and opened inventory

Assigned pages: `gr-fx13-tetrads-and-lorentz-spin` and `gr-fx13-tetrads-and-lorentz-spin-examples`.

Assigned items, reviewed in in-batch dependency order:

- Level 0: `def-gr-fx-tetrad-spin-connection`, `lem-gr-fx-sl2c-connected`, `lem-gr-fx-so-plus-connected`, `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`.
- Level 1: `prop-gr-fx-spin-double-cover`, `prop-gr-fx-torsion-free-tetrad-equivalence`.
- Level 2: `def-gr-fx-lorentz-spin-lift`.
- Level 3: `prop-gr-fx-lorentz-clifford-compatibility`.
- Level 4: `ex-gr-fx13-1`, `ex-gr-fx13-2`.

Opened supplier items used to check the definitions and arguments, including relevant statements and proof passages where they support the reviewed inference:

- Lorentzian geometry and tetrads: `def-gr-smooth-lorentzian-objects`, `def-gr-local-frame-and-tetrad-fields`, `lem-gr-tetrad-change-of-basis-is-lorentz`, `thm-gr-local-lorentz-tetrad-existence`, `def-lorentz-map-and-lorentz-group`, `lem-lorentz-map-preserves-metric-and-causal-structure`, `lem-timelike-cone-has-two-convex-components`, `lem-lorentz-lie-algebra-structure`, and `thm-sr-proper-orthochronous-lorentz-algebra`.
- Connection and forms: `def-affine-connection-on-a-smooth-manifold`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-smooth-differential-k-form`, `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`, `def-wedge-product-of-differential-forms`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, `thm-the-exterior-derivative-is-a-graded-derivation`, `thm-the-exterior-derivative-squares-to-zero`, `thm-curvature-two-form-structure-equation`, and `thm-second-bianchi-identity-for-a-bundle-connection`.
- Groups, bundles, and topology: `def-lie-group`, `thm-euclidean-inverse-function-theorem`, `thm-a-regular-level-set-is-an-embedded-submanifold`, `def-smooth-principal-g-bundle`, `def-gauge-group-of-a-smooth-principal-bundle`, `def-oriented-smooth-manifold-and-oriented-chart`, `def-oriented-real-vector-bundle-and-oriented-frame-bundle`, `def-frame-bundle-and-associated-vector-bundle`, `def-principal-g-bundle-and-associated-fiber-bundle`, `prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback`, `def-principal-connection-and-vertical-curvature`, and `def-rpm-h-poincare-charge-space`.
- Linear algebra: `def-determinant-of-a-square-matrix` and `thm-determinant-multiplicative`.

Also opened the ten page prerequisites listed on the assigned A page: `gr-tensors-and-observers`, `gr-connections-and-free-fall`, `gauge-groups-and-representation-theory-interfaces`, `gr-framework-and-geometry`, `riemann-curvature-and-riemannian-submanifolds`, `topological-vector-bundles-and-grassmannian-classification`, `sr-lorentz-transformations`, `lie-groups-invariant-fields-and-the-exponential-map`, `rpm-symmetries-hamilton-jacobi`, and `fibrations-fiber-bundles-and-homotopy-exact-sequences`. The B page's A-page prerequisite was also opened.

## Source checks

I checked the cited sections that bear on the authored claims, rather than treating the source list or author notes as a verdict:

- Carroll, *Lecture Notes on General Relativity*, equations (3.125)–(3.143), printed pp. 88–94 / PDF pp. 95–100: local Lorentz frame changes, the inhomogeneous connection transformation, torsion and curvature forms, and metric compatibility. Source: <https://arxiv.org/pdf/gr-qc/9712019>.
- Tong, *General Relativity*, §3.4.2, HTML lines 1133–1243: tetrads, connection one-forms, local Lorentz transformation, Cartan torsion/curvature formulas, and antisymmetry for the Levi-Civita connection. Section 4.5.6, lines 1252–1305, gives the gamma-matrix and spinor-connection conventions. Sources: <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html> and <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html>.
- Oblak, *From the Lorentz Group to the Celestial Sphere*, §§2.3.1–2.3.3, PDF pp. 23–26: connectedness of `SL(2,C)`, its action on Hermitian matrices, the kernel and image of the Lorentz map, and example rotation/boost matrices. Source: <https://arxiv.org/pdf/1508.00920>.

The source conventions are not identical to the batch's conventions in every displayed basis; the local statements specify their own signature, Pauli matrices, and action, and the local arguments establish the stated formulas. Source reading was limited to these cited sections, not the full source books/papers.

## Independent mathematical review

The local tetrad connection convention is internally consistent: with `e' = Lambda e` and `E' = E Lambda^{-1}`, the displayed connection change has the correct inhomogeneous sign; the torsion and curvature formulas agree with the stated matrix product/wedge convention. The torsion proposition's reduction to tangent-bundle torsion, the Levi-Civita uniqueness argument, and the torsion/curvature transformation calculations are sound under their stated hypotheses.

The `SL(2,C)` path proof's QR/Gram–Schmidt construction and the explicit paths on `SU(2)` and the triangular factor are mathematically sound apart from the omitted continuity justification noted below. The `SO+(1,3)` boost–rotation decomposition is sound in outline; its proof leaves short linear-algebra and coordinate-transfer steps implicit as detailed below. The Hermitian-matrix action in the spin-cover proposition preserves the Lorentz quadratic form, has the stated kernel, and its local-diffeomorphism/open-subgroup argument establishes surjectivity; the covering-neighborhood construction is correct. The Clifford commutator calculation has the coefficient and sign required for the displayed covector derivative. Both explicit example calculations give the stated rotation/boost matrices.

The sole TikZCD diagram is in `def-gr-fx-lorentz-spin-lift`: arrows and labels correctly express `pi^+ o lambda = tilde-pi`; no diagram repair is needed.

## Defects outside reader edit authority

This assignment is read-only, so no carriers were edited. The following defects remain for owner disposition.

1. **`prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`, Proof 1.1 — `unlicensed-inference`, nonfatal.** The proof invokes a “local oriented coordinate frame” without constructing one from the supplied orientation. `def-oriented-smooth-manifold-and-oriented-chart` defines an orientation ray and an oriented chart, but the proof does not state why a suitable chart exists near each point. A one-line construction by reversing one coordinate of an arbitrary chart when needed, followed by shrinking to keep the orientation sign fixed, closes the gap.

2. **`prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`, Proof 1.2 — `unlicensed-inference`, nonfatal.** From `A e_0` being future timelike the proof immediately concludes that `A` preserves the selected future component. It should state that the invertible Lorentz map sends the timelike set homeomorphically to itself, hence sends its connected component containing `e_0` to the component containing `A e_0`. The cited cone decomposition makes this a short closure, but the implication is not written.

3. **`prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`, Proof 2.1 — `unlicensed-inference`, nonfatal.** The proof calls the frame vectors of `u` smooth before the smooth structure on the set `P^+_g(M)` has been constructed. The listed frame-bundle dependency supplies the topological frame bundle, while the smooth-principal-bundle definition requires a smooth total space. The local maps `Psi_E` and the overlap formula in Proof 3.1 can define the atlas directly; the proof needs to say that this atlas/topology is being defined and establish its chart compatibility before using smoothness of frame-coordinate functions.

4. **`lem-gr-fx-sl2c-connected`, Proof 3.1 — `unlicensed-inference`, nonfatal.** The path `R_t` uses `r^t` and `r^{-t}` for `r>0`, but continuity of these functions is neither derived nor supplied by a dependency. State the elementary identity `r^t = exp(t log r)` and its continuity, or cite an exact real-power continuity result.

5. **`lem-gr-fx-so-plus-connected`, Proof 1.1 — `unlicensed-inference`, nonfatal.** The asserted path `t -> B(tu)` requires continuity of `sqrt(1+t^2 |u|^2)`, which is not stated or cited. The step also moves from `B(tu)e_0` lying in the future component to the whole Lorentz map preserving that component without stating the component-mapping argument. Both are short: use continuity of square root and that an invertible Lorentz map is a homeomorphism of the timelike set.

6. **`lem-gr-fx-so-plus-connected`, Proof 3.1 — `unlicensed-inference`, nonfatal.** The axis/rotation argument omits the short justification that an orthogonal `3 x 3` matrix with determinant `1` has eigenvalue `+1` (including the modulus-one fact for a nonreal pair). After choosing an eigenbasis, it also asserts a path ending at the original `R_3` without conjugating the displayed rotation path back to the original coordinates. Add these explicit linear-algebra steps or cite an exact result.

7. **`def-gr-fx-lorentz-spin-lift`, Definition, lines 111–116 — `unlicensed-inference`, nonfatal.** The horizontal-differentiation formula is called a covariant derivative without checking independence of the representative `u` in the fiber. The dependencies provide right invariance of `tilde-H` and equivariance of `f`, but the definition does not combine them. State `tilde-X^H_{ua}=dR_a(tilde-X^H_u)`, differentiate `f(ua)=sigma(a)^{-1}f(u)`, and use the associated-bundle relation to show the class is independent of `u` (and, if “covariant derivative” is intended as a connection, verify its Leibniz rule).

8. **`def-gr-fx-lorentz-spin-lift`, Definition, lines 92–95 — `ill-formed`, fatal.** “Spinor components” and “the defining representation on `C^2`” are used without specifying the representation map or what qualifies as the spinor representation. The missing exact definition is `sigma(a)v = av` for the natural action of the `2 x 2` matrix `a` on column vectors `v in C^2`; the item should state which such representation is being called the spinor representation before asserting the rank-two spinor-bundle conclusion.

9. **`ex-gr-fx13-2`, Statement, lines 47–52 — `ill-formed`, fatal.** The Statement uses `SO(4)` before its set definition appears later in Facts & Assumptions, and it names a `Spin(4) -> SO(4)` “construction”/“covering map” without an exact definition or supplier in this item or its dependency closure. Define the comparison group and map before use, or state only the precise codomain obstruction without invoking an undefined `Spin(4)` object. The phrase “Euclidean group `SO(4)`” should also be made precise as the orientation-preserving orthogonal group for `delta` so it is not confused with the Euclidean isometry group including translations.

10. **`ex-gr-fx13-2`, Statement, lines 53–55 and Verification 3.1 — `missing-hypothesis`, fatal.** The item asserts a uniqueness fact for the “Cartesian Minkowski tetrad” but does not specify the underlying manifold, coordinates, metric, or tetrad. Verification 3.1 uses `e^I = dx^I` without defining its domain. Its Facts & Assumptions only gives abstract quadratic forms and the boost parameter; `ex-gr-fx13-1` is a sibling, not a dependency. State `M = R^4`, its standard coordinates, `g = eta`, and `e^I = dx^I` (with the connection domain), or remove this secondary claim.

## Page verdicts

- `gr-fx13-tetrads-and-lorentz-spin`: **Page placement and scope pass; item-level findings 1–8 remain.** The empty page body follows this run's frontmatter-only A-page policy.
- `gr-fx13-tetrads-and-lorentz-spin-examples`: **Page placement and scope pass; item-level findings 9–10 remain.** The empty page body follows the frontmatter-only B-page policy.
- `gr-tensors-and-observers`: **No page defect observed.** Its tetrad definition, local-existence result, and change-of-basis lemma match the uses checked.
- `gr-connections-and-free-fall`: **No page defect observed.** Its metric-selected connection supplier matches the use checked.
- `gauge-groups-and-representation-theory-interfaces`: **No page defect observed.** Its principal-bundle, connection, and gauge-group interfaces match the uses checked.
- `gr-framework-and-geometry`: **No page defect observed.** Its smooth Lorentzian structure and time-orientation definitions match the uses checked.
- `riemann-curvature-and-riemannian-submanifolds`: **No page defect observed.** Its curvature-form and Bianchi suppliers match the uses checked.
- `topological-vector-bundles-and-grassmannian-classification`: **No page defect observed.** Its orientation, frame-bundle, and associated-bundle interfaces match the uses checked.
- `sr-lorentz-transformations`: **No page defect observed.** Its Lorentz-map/group convention matches the uses checked.
- `lie-groups-invariant-fields-and-the-exponential-map`: **No page defect observed.** Its Lie-group definition matches the uses checked.
- `rpm-symmetries-hamilton-jacobi`: **No page defect observed.** Its Poincare item supplies the matrix Lie-group structure used by the frame-bundle and spin-cover arguments.
- `fibrations-fiber-bundles-and-homotopy-exact-sequences`: **No page defect observed.** Its associated-bundle local-triviality result matches the use checked.

## Edits and blockers

No edits were made because this is a read-only reader assignment. No blocker prevented the scoped review. I did not audit the entire transitive item closure or the full import-hash ledger; review was limited to the assigned items/pages, suppliers needed for their claims, the listed page prerequisites, and the cited external-source sections above.
