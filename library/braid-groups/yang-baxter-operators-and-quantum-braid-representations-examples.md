---
page: yang-baxter-operators-and-quantum-braid-representations-examples
title: "Yang–Baxter Operators and Quantum Braid Representations — Examples"
status: published
requires: [yang-baxter-operators-and-quantum-braid-representations]
items: []
examples: [cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group,
           ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces,
           ex-a-noninvolutive-one-dimensional-yang-baxter-operator,
           ex-the-flip-operator-gives-the-permutation-representation,
           cex-a-braiding-alone-does-not-define-a-link-trace,
           cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant,
           ex-writhe-normalization-cancels-a-ribbon-kink]
---

These entries test the definitions and theorems of the companion page against
small explicit models. The zero endomorphism of a one-dimensional space solves
the cubic equation but is not invertible, showing that invertibility in the
definition of a Yang–Baxter operator is not redundant and that the braid group
cannot act through a non-invertible matrix. On graded vector spaces the diagonal
operator $R(e_g\otimes e_h)=\chi(g,h)e_h\otimes e_g$ is an invertible
Yang–Baxter operator for an arbitrary coefficient function
$\chi:G\times G\to k^{\times}$, with
involutivity exactly when $\chi(g,h)\chi(h,g)=1$; the one-dimensional operator
$R=2$ over $\mathbb Q$ is the basic non-involutive example, with one-dimensional
braid characters that do not factor through the symmetric groups, while the
flip operator on $k^n$ produces the place-permutation representation.

The last three entries turn to the trace and its normalization. A braiding
alone is shown not to define a link trace, since the closure needs duality and
the pivotal comparison $j=u\theta$. Over a field $k$ of characteristic
$\ne2$, in the super vector spaces with the sign
braiding and the parity twist the odd line has twist eigenvalue $-1$, so the
unnormalized trace takes different values on a one-braid and its positive
stabilization even though both close to the unknot; multiplying by
$\lambda^{-w}$ cancels the kink and restores the invariant predicted by the
writhe-normalized theorem.
