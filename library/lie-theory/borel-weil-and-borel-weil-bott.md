---
page: borel-weil-and-borel-weil-bott
title: "Borel Weil and Borel Weil Bott"
status: draft
requires:
  - smooth-projective-serre-duality-and-flag-variety-line-bundles
items:
  - lem-sections-of-an-associated-line-bundle-as-equivariant-functions
  - prop-left-translation-makes-line-bundle-cohomology-a-g-module
  - lem-a-nonzero-dominant-section-is-determined-on-the-big-cell
  - lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety
  - lem-lowest-weight-space-is-the-nilradical-invariant-line
  - thm-borel-weil
  - lem-rank-one-cohomology-shifts-across-a-simple-wall
  - lem-singular-dot-weights-have-zero-line-bundle-cohomology
  - lem-a-regular-weight-has-a-unique-dominant-dot-translate
  - thm-borel-weil-bott
  - prop-borel-weil-bott-is-compatible-with-serre-duality
  - cor-borel-weil-bott-euler-character-is-the-weyl-character
---

This page computes the cohomology of the Borel-character equivariant line
bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ on the flag variety
$X=G/B$ of a connected simply connected complex semisimple affine algebraic
group. The conversion layer identifies global sections with regular functions
on $G$ satisfying $f(gb)=\lambda(b)f(g)$ and installs the $G$-action on
cohomology induced by the equivariant structure.

Borel-Weil describes degree zero: $H^0(X,\mathcal L_\lambda)$ vanishes unless
$\lambda$ is dominant integral, and then it is the dual $L(\lambda)^*$; higher
cohomology vanishes for dominant weights. Two local ingredients carry the
proof: a $U^-$-invariant section is determined by its value at the identity,
so the space of invariants is at most one-dimensional, and the big-cell
function $u^-b\mapsto\lambda(b)$ extends to a regular function on $G$ exactly
for dominant $\lambda$, by the rank-one pole-sign test along the
codimension-one opposite-Borel Bruhat cells.

Borel-Weil-Bott computes all degrees: crossing a simple wall shifts the
cohomological degree and replaces $\lambda$ by its dot translate
$s_\alpha\cdot\lambda$. Weights with singular $\lambda+\rho$ have vanishing
cohomology; weights with regular $\lambda+\rho$ have a unique dominant dot
translate, and their nonzero cohomology occurs in its Weyl length. The last items record compatibility with Serre duality through the
canonical bundle $K_X\cong\mathcal L_{-2\rho}$ and the Euler-characteristic
identity with the Weyl character formula.

The examples companion exhibits the rank-one table on $\mathbb P^1$, the
sharp singular wall, an $\mathfrak{sl}_3$ weight of degree one, the
top-degree Serre-duality pairing, and the sign-convention counterexample that
enforces $\mathbb C_{-\lambda}$ in the definition of $\mathcal L_\lambda$.
