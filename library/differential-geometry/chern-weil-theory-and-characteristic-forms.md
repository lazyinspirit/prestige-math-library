---
page: chern-weil-theory-and-characteristic-forms
title: "Chern–Weil Theory and Characteristic Forms"
status: draft
requires: [riemann-curvature-and-riemannian-submanifolds,
           lie-groups-invariant-fields-and-the-exponential-map,
           chern-and-pontryagin-classes-by-splitting-and-complexification,
           the-de-rham-theorem-and-degree]
items: [def-invariant-polynomial-on-a-matrix-lie-algebra,
        def-complex-linear-and-compatible-bundle-connections,
        lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles,
        def-evaluation-of-an-invariant-polynomial-on-curvature,
        lem-invariant-polynomials-annihilate-covariant-commutators,
        lem-an-invariant-polynomial-of-curvature-is-closed,
        def-the-chern-weil-homomorphism,
        lem-transgression-between-two-connections-is-exact,
        thm-chern-weil-homomorphism-is-independent-of-connection-and-natural,
        def-chern-pontryagin-and-euler-characteristic-forms,
        lem-second-countable-smooth-manifolds-have-cw-homotopy-type,
        lem-first-chern-form-agrees-with-the-topological-line-class,
        lem-oriented-real-two-plane-splitting-with-injective-real-pullback,
        lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback,
        thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals,
        prop-chern-weil-forms-obey-direct-sum-and-pullback-formulas,
        rem-integral-torsion-is-not-detected-by-real-characteristic-forms]
examples: []
---

This page develops Chern–Weil theory from invariant polynomials on matrix Lie
algebras to characteristic forms on smooth vector bundles. A homogeneous
$G$-invariant polynomial is polarized to a symmetric multilinear form, and
differentiating the invariance identity along a one-parameter subgroup gives
the infinitesimal vanishing identity that drives the cancellations below.
The Pfaffian is admitted only on $\mathfrak{so}(2m)$ in a fixed oriented
orthonormal frame. Because the published connection interface is real, the
page first records smooth complex structures, complex, Hermitian and
Euclidean-compatible connections, and proves that every finite-rank real or
complex bundle admits a compatible metric and connection under full AC.

Curvature evaluation wedges the scalar $2$-form coefficients of the curvature
in argument order with a fixed alternating normalization; $G$-invariance of
the transition matrices makes the local expressions a global form, and matrix
order is retained inside traces, determinants and Pfaffians. Infinitesimal
invariance cancels the covariant-commutator terms in the graded Leibniz rule,
and the second Bianchi identity then makes every invariant curvature form
closed. Passing to cohomology yields the unital multiplicative Chern–Weil
homomorphism, and the affine path between two compatible connections supplies
an explicit transgression form, so the class is independent of the connection
and natural under smooth pullback.

The page then fixes the conventions: the Chern forms as determinant
coefficients of $I-\Omega/(2\pi i)$, the Pontryagin forms by complexification
with $p_j=(-1)^jc_{2j}(\nabla_{\mathbb C})$, and the Pfaffian Euler form in
even rank. Comparison with topology is proved on smooth bases with boundary
through a CW-homotopy-type bridge, a local first-Chern normalization, the
oriented real two-plane splitting lemma and the complex flag splitting lemma.
The resulting theorem identifies the de Rham classes of the characteristic
forms with the real coefficient images of the corresponding topological
classes, and direct sums and pullbacks obey the expected formulas.

The closing remark separates real characteristic forms from integral
information: every integral torsion class maps to zero in real cohomology, so
the forms cannot detect it, with the flat real line bundle over the real
projective plane as witness. Full AC is used only through the compatible
connection suppliers and the comparison machinery; the frame, determinant and
transgression computations are choice-free once the connections are supplied.
See [[chern-weil-theory-and-characteristic-forms-examples]] for explicit
computations and counterexamples.
