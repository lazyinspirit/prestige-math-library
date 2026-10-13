---
page: compact-kahler-hodge-foundations
title: "Compact Kahler Hodge Foundations"
status: published
items:
- def-compact-kahler-manifold-and-hodge-polarization-conventions
- lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
- lem-de-rham-top-integral-is-fundamental-class-evaluation
- lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
- lem-kahler-commutators-and-laplacian-type-preservation
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
examples: []
---

This page fixes the conventions and proves the foundational theorems of Hodge
theory on a compact Kähler manifold. The opening definition sets the
fundamental form in the orientation convention $\omega=\sum_j e_j\wedge f_j$
for a metric-adapted coframe, the normalisation $\omega^n/n!=dV$, the
complex-valued forms and the operators $L,\Lambda,\partial,\bar\partial,d$
with their formal adjoints and Laplacians, and the rational pure Hodge
structures with Weil operator, polarization, sub-structures and Tate shift that
the type decomposition below produces. It also records the standing Axiom of
Choice of the page, used by the analytic and cohomological suppliers and
propagated item by item; the definitional content itself is choice-free.

Pointwise, the Hermitian exterior algebra carries an $\mathfrak{sl}_2$-action:
$[L,\Lambda]=H$, $H=(k-n)$ on degree $k$, the primitive decomposition, the
factorial formula for $\Lambda^sL^r$ on primitives, the hard-Lefschetz
isomorphism $L^{n-k}$ below the middle degree, and the Weil operator identity
$W=\epsilon(k)J\star$, with the primitive star formula as its consequence. The
global consequences are the Kähler identities
$[\Lambda,\partial]=i\bar\partial^*$, $[\Lambda,\bar\partial]=-i\partial^*$,
$[\bar\partial^*,L]=i\partial$, $[\partial^*,L]=-i\bar\partial$, the vanishing
of the mixed anticommutators, $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$,
and the preservation of each bidegree by the Laplacian.

Two comparison results prepare the global theorem. On a compact smooth manifold
the natural coefficient maps
$H^k(X;\mathbb Q)\otimes_{\mathbb Q}F\to H^k(X;F)$ are isomorphisms for every
characteristic-zero field $F$, finite-dimensional in each degree, natural and
multiplicative; for $F=\mathbb R,\mathbb C$ this identifies singular
cohomology with de Rham cohomology and supplies the rational structure. On a
compact oriented boundaryless manifold the integral of a top form equals the
fundamental-class evaluation of its de Rham class, which is the pairing used
for polarizations.

The main theorem then gives every de Rham class a unique smooth harmonic
representative, decomposes $H^k(X;\mathbb C)$ into the bidegrees
$H^{p,q}(X)$ with conjugation symmetry, identifies them with the sheaf
cohomology $H^q(X,\Omega_X^p)$, and proves that the holomorphic-degree
filtration of the de Rham complex induces the Hodge filtration with
$E_1^{p,q}=H^q(X,\Omega_X^p)$ and degenerates at $E_1$. Pullback along
holomorphic maps and the cup product preserve Hodge type, so every
$H^k(X;\mathbb Q)$ is a functorial rational pure Hodge structure. The elliptic
and sheaf-theoretic inputs, and the countable-choice consequences they require,
are propagated explicitly in the dependency records.
