# Batch 23: review of the finite-cell tangent Euler carrier

Reviewed memo: `research/frontier-41-ha-dt-29-batch-23-tangent-euler-number-finite-cell-carrier.md`. This review changes no canonical item, manifest, receipt or controller state.

## Verdict

The intended theorem and choice bound are mathematically sound. The generic-height argument and the zero-count argument are valid with finite local data. The memo is **conditionally approved as a proof plan**, not as a finished self-contained carrier: its finite-regularity handle adapter, actual finite surface cellulation, and finite Thom construction still contain asserted intermediate results that need local proof. None of these findings calls for full AC or narrowing the claim. They can be repaired within the proposed finite route.

## 1. Generic heights and regularity

The parameter derivative at a critical pair is onto because the embedded tangent plane lies in `u⊥`. The zero manifold has dimension `N−1`, equal to the target sphere dimension, so `C¹` Sard suffices. Its zero manifold is compact: it is a closed subset of `S×S^{N−1}`. Consequently finitely many source/target coordinate charts suffice to apply the Euclidean Sard theorem, avoiding an unrecorded choice of infinitely many charts. A regular parameter makes the Hessian invertible: the tangent equation for the critical incidence locus is `Hess(f_u) ξ+B δu=0`; since `B` is onto, projection to `δu` is onto exactly when the Hessian is onto, hence invertible in dimension two.

The finite critical-point argument, finite bump separation of values, and `C¹` gradient formula are sound. The metric is `C¹`; at a critical point the derivative of its coefficients contributes nothing because `df=0`. Ordinary `C¹` ODE existence/uniqueness and dependence on initial conditions give the claimed flow on a compact regular band, once the field is extended to a neighborhood of that band. The derivative identity `df(Y)=1` bounds the time needed to reach any intermediate level. Only finitely many bands are used.

The memo asserts a `C¹` Morse coordinate normal form for a `C²` function without proving or mapping that finite-regularity theorem. The published `thm-morse-lemma` inspected locally only states the smooth case. Do not treat its citation as a supplier for `C²`. A topological quadratic normal form is sufficient here and can be proved directly in dimension two by the positive radial argument at an extremum and completion of one square plus the implicit-function theorem at a saddle; the separate `batch-23-characteristic-genericity-audit.md` gives that construction. Its coordinate homeomorphism is adequate for a **topological** handle construction, without claiming extra differentiability.

## 2. Finite handles and an actual finite cellulation

There are two uncompleted adapter steps:

1. A local quadratic normal form and flow on regular bands must be combined into the actual sublevel attachment. Specify an isolating quadratic block at the critical point, identify its attaching region with `S^{λ−1}×D^{2−λ}`, and use the regular-band flow outside that block. Merely calling the local sublevel pair a handle is not the construction. This is a standard finite local argument; no generic immersion or smooth corner rounding is required.
2. The proposed rectangle/disk cellulation must match the attaching maps. For each 1-handle, subdivide the existing boundary at its four attaching endpoints, use the actual interval homeomorphisms to parameterize the new boundary edges, and extend the prescribed polygonal boundary parametrization across the handle disk. For a 2-handle, use the existing subdivision of its attaching circle and extend its boundary homeomorphism over the disk by the radial Alexander extension. Finite triangulated disks and rectangles then glue along identical finite boundary cellulations. This supplies a finite **regular** cellulation/homeomorphic finite triangulation, rather than just a CW complex homotopy equivalent to the surface.

The distinction matters because a Morse CW model with one cell per critical point is normally obtained up to homotopy, whereas the bundle construction needs a cellulation of the actual base (or an additional bundle homotopy-invariance adapter). The memo's finite handle triangulation route can give the actual base and should state the two constructions above explicitly.

Once the actual finite cellulation and relative handle attachment have been proved, the alternating rank change `(-1)^λ` and Euler–Poincaré comparison are correct. The listed published Euler–Poincaré theorem was checked: it has no choice premise.

## 3. Finite Thom construction: gap and a short repair

The assertion that a bundle is trivial over every closed cell needs justification. For a general nonregular CW complex, even the phrase “closed cell” is misleading; one instead trivializes the pullback over its characteristic disk. This problem is avoidable for the surface construction: start with its actual finite triangulation, choose a finite bundle-trivializing open cover, and barycentrically subdivide enough times that every closed simplex lies in one trivializing chart. Compactness, the Lebesgue-number argument and uniform continuity of finitely many simplex maps prove such a finite subdivision exists. Thus the required trivializations are supplied by charts, without invoking a general full-choice bundle theorem.

The shifted relative cellular cochain claim is mathematically correct for an oriented bundle, but its incidence calculation is only asserted. It is more than this theorem needs. Replace it with the following degree-two skeletal proof.

Let `T_k` be the Thom quotient of the disk bundle over the base `k`-skeleton, with the entire sphere bundle collapsed to its basepoint. Finite trivialized characteristic disks attach one relative cell of dimension `k+2`, using the product pair displayed in the original memo. Its boundary goes either to the sphere-bundle basepoint or to the lower base skeleton. This constructs a finite CW Thom quotient, even though a separate CW structure on the entire sphere bundle has not been provided.

At the 0-skeleton, `H²(T_0,*;Z)=Z^v`; assign `+1` to every oriented fiber generator. Adding one base edge attaches one 3-cell. In the cohomology pair sequence, the obstruction map from the two endpoint fiber coefficients to that cell's `Z` is their difference: orient the product edge×fiber disk and its two end faces; their signs are opposite, and an oriented fiber transition has degree `+1`. Thus the all-ones class extends across every edge. Uniqueness follows because the new relative group in degree two is zero. At all base cells of dimension at least two, the new relative group lies in degree at least four; the pair sequence therefore makes restriction in degree two an isomorphism. The resulting class is unique with prescribed positive normalization on vertex fibers. Over an arbitrary point, transport inside its oriented trivialization identifies its fiber restriction with that at a vertex along a path in the simplex. Hence normalization holds on every fiber.

This proves precisely the finite normalized Thom existence/uniqueness required here without asserting an entire shifted cochain complex or Thom isomorphism. The cell quotient/cohomology identification must be spelled out using the relative cellular pair or the good-pair quotient theorem. Metric construction by a finite partition of unity is sound and has no full-choice premise.

## 4. Zero count

Conditional on the normalized Thom class just constructed, the zero-count argument is valid. The inclusion `S(E)⊂D(E)\0` induces an isomorphism in relative cohomology because radial deformation retracts the complement onto the sphere bundle and the disk-bundle term is unchanged. Thus the class `U_0` is the unique inverse image of `U`; it is not a new arbitrary choice.

The scale factor exists by compactness and positivity of the finite fiber metric. The section pullback is a map of pairs, while its straight-line homotopy to the zero section proves the equality only for the **absolute images** of the classes. The original memo correctly makes that distinction.

Choose finitely many disjoint oriented coordinate disks about the zeros and trivialize over them. In one such disk, homotope the base coordinate of `(x,s(x))` to its center inside the trivialization, retaining the fiber vector `s(x)`. This is a homotopy of pairs since the fiber vector stays nonzero away from the zero. The Thom class now restricts to its oriented fiber generator. Naturality of the pair boundary maps identifies its coefficient with the circle degree of `s/|s|`. This is the missing explanatory sentence behind the memo's local coefficient assertion; it requires no embedded section image. Excision and the checked compact-orientation-class lemma give the sum formula with no AC premise.

For the gradient, the determinant sign is `(-1)^λ`; a sufficiently small-circle homotopy from the field to its invertible derivative is nonvanishing by differentiability. The index computation and final equality with the alternating Morse count are valid.

## 5. Choice bound and limits of integration

All choices after the given ambient embedding are finite: charts, cells, regular height direction, bump coefficients, trivializations and excision disks. The generic-height Sard calculation uses finitely many charts because its incidence manifold is compact. No full AC is needed. The existing `AC_ω` ambient embedding supplier therefore controls the stated strength.

This review does not construct a finite CW structure for the separate 3-dimensional region `W`. The integration paragraph is correctly conditional on one. It must remain conditional until that region's regularity, boundary collar and finite topology construction are proved. Once finite normalized Thom classes exist on the two bases, the proposed pullback/naturality argument is valid by fiber normalization and uniqueness; no general full-AC Euler naturality theorem is needed.

Actionable closure order: finite `C²` planar normal form; local topological sublevel handle attachment; actual finite cellulation with matching boundary maps; subordinate bundle subdivision; degree-two finite Thom skeletal proof; local section coefficient comparison; tangent-Euler corollary. The last two stages are short and already mathematically supported above. Do not issue a finished-carrier readiness receipt before the first four are packaged as local suppliers.
