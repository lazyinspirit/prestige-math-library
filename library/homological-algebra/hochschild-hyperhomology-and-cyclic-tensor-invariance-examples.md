---
page: hochschild-hyperhomology-and-cyclic-tensor-invariance-examples
title: "Hochschild Hyperhomology and Cyclic Tensor Invariance — Examples"
status: draft
order: 728
category: homological-algebra
companion: hochschild-hyperhomology-and-cyclic-tensor-invariance
requires:
  - hochschild-hyperhomology-and-cyclic-tensor-invariance
items: []
examples:
  - ex-hochschild-bicomplex-total-and-separate-degrees
  - ex-cyclic-tensor-coinvariants-of-matrix-bimodules
  - ex-double-bar-rotation-sign-in-two-complex-degrees
---

These examples distinguish the separate Hochschild and cochain indices from
their total degree, then illustrate cyclic tensor comparison in two settings.
For $R=k[x]$ with $\deg_{\mathrm{int}}x=2$ and the zero-differential complex
$F^0=R$, $F^1=R\{4\}$, the four nonzero termwise groups have internal shifts
$0,2,4,6$ and total degrees $0,-1,1,0$. The resulting hyperhomology is
$R\oplus R\{6\}$ in degree $0$, $R\{2\}$ in degree $-1$, and $R\{4\}$ in
degree $1$. Here the spectral sequence collapses because the coefficient
differential is zero and only two cochain columns occur; this example does not
assert general degeneration.

For the row and column modules between $k$ and $M_n(k)$, the tensor products
identify with $k$ and $M_n(k)$, and the trace identifies the latter's
degree-zero coinvariants with $k$ in every characteristic. The cyclic rotation
matches the scalar row-column pairing with the trace of a matrix unit. The
example then invokes the page's derived-cyclicity claim for higher Hochschild
degrees.

Finally, for $A=B=\mathbb Q$ and both coefficient complexes equal to
$\mathbb Q$ in cochain degree $1$, the tensor total is concentrated in degree
$2$. Both the hyperhomology and termwise rotation formulas give the sign
$(-1)^{1\cdot1}=-1$ on the unique bar-degree-zero summand; applying the rotation
twice gives $+1$. These are draft examples attached to the companion page's
claims.
