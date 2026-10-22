---
page: generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples
title: Generalized Cohomology and the Atiyah Hirzebruch Spectral Sequence — Examples
status: published
items:
  - lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions
  - lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square
  - lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three
  - rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes
examples:
  - ex-complex-k-ahss-for-spheres
  - ex-complex-k-ahss-for-complex-projective-space
  - ex-complex-k-ahss-for-a-closed-oriented-surface
  - ex-complex-k-ahss-for-real-projective-space
  - ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four
---

The computations begin with spheres, where only two columns of the $K$-AHSS are
nonzero and the differentials and extension both vanish, matching the
Bott-periodic sphere groups. Complex projective space collapses for parity
reasons; the truncated polynomial ring is supplied by the projective-bundle
calculation, not inferred from the collapse. The closed oriented surface has
only the first three columns, so its free graded pieces split and give
$K^0\cong\mathbb Z^2$ and $K^1\cong\mathbb Z^{2g}$.

Real projective space exhibits the opposite phenomenon: the page collapses but
the repeated $\mathbb Z/2$ pieces must be assembled, and the complexified
tautological line supplies the relation $\alpha^2=-2\alpha$ that turns them into
one cyclic group of order $2^m$. The local Bockstein lemmas then compute a
nonzero $d_3$ on $\mathbb{RP}^2\times\mathbb{RP}^4$ through
$\beta_{\mathbb Z}Sq^2\rho_2$, without a $K$-theory Künneth theorem. The final
remark records that the proved convergence is finite-CW only and that no
infinite-CW convergence is asserted.
