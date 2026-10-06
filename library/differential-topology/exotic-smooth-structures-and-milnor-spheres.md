---
page: exotic-smooth-structures-and-milnor-spheres
title: "Exotic Smooth Structures and Milnor Spheres"
status: draft
requires: [intersection-pairings-self-intersection-and-euler-classes, smooth-cobordism-relations-groups-and-rings, thom-spaces-normal-data-and-collapse-maps, the-hirzebruch-signature-theorem, the-smooth-h-cobordism-theorem, fibrations-fiber-bundles-and-homotopy-exact-sequences, hurewicz-whitehead-freudenthal-and-cw-approximation, topological-vector-bundles-and-grassmannian-classification, leray-hirsch-thom-isomorphism-and-gysin-sequences, stiefel-whitney-and-euler-classes-by-universal-constructions, chern-and-pontryagin-classes-by-splitting-and-complexification, vector-field-index-euler-characteristic-and-poincare-hopf]
items: [def-exotic-smooth-structure-and-exotic-sphere,
        def-smooth-homotopy-sphere,
        lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice,
        lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere,
        lem-theta-n-connected-sum-operation-is-well-defined,
        lem-orientation-reversal-is-inverse-in-theta-n,
        def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres,
        thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five,
        lem-parallelizable-boundaries-form-a-subgroup,
        def-b-p-n-plus-one-subgroup-of-homotopy-spheres,
        rem-homotopy-spheres-stable-parallelizability-recorded-not-proved,
        def-quaternionic-clutching-bundles-xi-h-j-over-s-four,
        lem-euler-number-is-the-clutching-degree,
        lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two,
        lem-degree-four-characteristic-numbers-add-under-clutching-product,
        lem-euler-and-first-pontryagin-classes-of-xi-h-j,
        def-milnor-sphere-bundle-m-h-j,
        thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere,
        lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected,
        cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres,
        lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six,
        lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick,
        cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven,
        lem-relative-kronecker-evaluation-is-well-defined-and-natural,
        lem-relative-middle-cup-products-are-symmetric,
        lem-relative-cap-evaluation-identity,
        lem-collared-gluing-has-relative-excision-and-evaluation-maps,
        lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology,
        lem-integral-middle-cohomology-vanishing-implies-real-vanishing,
        lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator,
        lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting,
        def-boundary-middle-form-and-signature,
        lem-boundary-middle-form-is-well-defined-and-glues,
        lem-disk-bundle-intersection-form-and-signature-for-xi-h-j,
        lem-relative-pontryagin-square-equals-mixed-evaluation,
        lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j,
        def-milnor-lambda-candidate-from-a-filling,
        lem-relative-pontryagin-square-glues-across-a-seven-boundary,
        thm-milnor-lambda-invariant-is-well-defined-modulo-seven,
        thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven,
        rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved,
        rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic,
        rem-none-of-the-high-dimensional-exotic-sphere-results-settle-the-smooth-four-dimensional-poincare-problem]
examples: []
---

This page constructs the quaternionic clutching bundles $\xi_{h,j}$ over $S^4$
and proves that their unit sphere bundles $M_{h,j}$ are smooth manifolds homeomorphic to $S^7$ when the Euler number $h+j$
equals $\pm1$. For $h+j=1$, the congruence $(h-j)^2\not\equiv1\pmod7$
proves exoticness; the standard Hopf bundle is included among the remaining
cases. The construction
starts from the explicit clutching maps $g_{h,j}(a)v=a^hva^j$ in the fixed
fibre orientation $(1,i,j,k)$, computes $e(\xi_{h,j})=(h+j)u$ and
$p_1(\xi_{h,j})=2(h-j)u$, and uses the integral Gysin sequence, the
fibration homotopy sequence and the finite-CW homology Whitehead theorem to
identify the total spaces as homotopy seven-spheres. A separate topological
route through the two-disk complement, the smooth h-cobordism theorem and the
radial Alexander extension proves that the same manifolds are homeomorphic to
$S^7$, so their exoticness is a genuine smooth phenomenon.

The page also develops the smooth detector. Since the signature is defined on
closed manifolds, the boundary middle form of a compact oriented eight-manifold
is defined and proved nondegenerate locally, the relative Pontryagin square is
compared with the closed eight-dimensional signature formula on the glued
closed manifold, and the resulting invariant $\lambda(M)=2q(W)-\sigma(W)$
modulo seven is proved independent of the supplied filling and negated by
orientation reversal. The final theorem computes $\lambda(M_{2,-1})\equiv1$
and $\lambda(M_{1,0})=0$, exhibiting a seven-sphere homeomorphic but not
diffeomorphic to the standard one. [[rem-homotopy-spheres-stable-parallelizability-recorded-not-proved|Stable parallelizability of homotopy spheres]] and the
[[rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved|Kervaire-Milnor order-28 calculation]]
are recorded as sourced remarks whose proofs are not supplied here. They orient
the examples without serving as prerequisites for these local results.

All choice assumptions are stated on the items that use them: full choice for
the characteristic-class, Gysin, Thom and signature suppliers, and countable
choice for the collar, handle and h-cobordism constructions.
