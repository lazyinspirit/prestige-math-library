---
page: bochner-inversion-and-plancherel-on-lca-groups-examples
title: "Bochner Inversion and Plancherel on LCA Groups — Examples"
status: draft
items: []
examples: [ex-gelfand-transform-of-l-one-of-an-lca-group, ex-haar-normalisations-on-the-circle-and-the-integers,
           ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual,
           ex-a-character-is-positive-definite,
           cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite,
           cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions]
---

These examples and counterexamples test the conventions and the sharpness of
the companion page. The Haar normalisation examples check that the reciprocal
dual scale selected by inversion reproduces the familiar Fourier-series
conventions: counting measure on $\mathbb Z$ pairs with normalised arc measure
on the circle, so inversion is the Fourier-series statement, while on a finite
abelian group the probability Haar measure pairs with counting measure on the
dual. For the same input $f$, the unitary discrete Fourier transform is
$Uf=|G|^{1/2}\widehat f$; its forward and inverse sums have coefficient
$|G|^{-1/2}$.

The Bochner example records the simplest representation: a character is
positive definite, its nonempty finite test matrices are rank-one positive semidefinite,
and its empty test matrix has rank zero,
and its representing measure is the point mass at that character. The two
counterexamples mark the boundaries of the theory. A continuous function of
modulus at most one need not be positive definite: the trapezoid on the line
that equals $1$ on $[-1,1]$, decreases linearly to $0$ at $\pm2$ and vanishes
outside is continuous with $\phi(0)=1$ and $|\phi|\le1$, yet the three-point
matrix at $0,1,2$ has determinant $-1$, witnessed by the coefficient vector
$(1,-2,1)$ and the value $-2$. On a nondiscrete LCA group, Fourier inversion
cannot recover every arbitrary representative everywhere: changing an $L^1$
function at a single point preserves its class and transform, so the
inversion integral, being determined by the class, cannot recover the altered
pointwise value.

The Fourier/Gelfand example applies the companion page’s convolution algebra and scalar-unitization character-space theorem. Its positive-phase formula conjugates the character parameter in the companion page’s conjugate-phase convention.
