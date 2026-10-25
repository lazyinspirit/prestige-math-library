---
page: fredholm-determinants-and-the-lidskii-trace-formula-examples
title: "Fredholm Determinants and the Lidskii Trace Formula: Examples"
status: published
items: []
examples:
  - cex-invariant-subspace-need-not-reduce-an-operator
  - ex-volterra-square-has-zero-trace
  - ex-diagonal-trace-class-fredholm-determinant
  - ex-fredholm-determinant-of-a-finite-rank-operator
---

These examples test the local determinant and trace results on concrete
operators. The finite-rank example works on an arbitrary Hilbert space and
reduces the determinant to an ordinary finite-dimensional determinant. For
$F(x)=\langle x,v\rangle u$, the one-dimensional restriction gives
$D_H(I+zF)=1+z\langle u,v\rangle$ under the library's linear-first convention.

The diagonal example uses $Te_0=0$ and $Te_n=2^{-n}e_n$ for $n\ge1$ on
$\ell^2(\mathbb N,\mathbb C)$. Its trace norm and trace are $1$, its determinant
is $\prod_{n\ge1}(1+z2^{-n})$, and its zeros are exactly $-2^n$, each simple.
The Volterra example proves that $V^2$ is a nonzero quasinilpotent trace-class
operator with trace zero and determinant identically $1$.

The counterexample at the start records the reason the trace decomposition
uses an invariant quotient: an invariant subspace of an operator need not
reduce it. Together, the examples distinguish finite-rank determinant
calculations, spectral products with infinitely many factors, and trace
cancellation for a nonzero operator.
