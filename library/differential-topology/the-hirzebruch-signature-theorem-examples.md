---
page: the-hirzebruch-signature-theorem-examples
title: The Hirzebruch Signature Theorem — Examples
status: draft
requires: [the-hirzebruch-signature-theorem]
items: []
examples: [ex-signature-and-p-one-of-complex-projective-two-space,
        ex-orientation-reversed-complex-projective-plane-has-signature-minus-one,
        ex-signature-of-s-two-times-s-two-is-zero,
        ex-signature-is-multiplicative-on-products-of-projective-spaces,
        cex-euler-characteristic-does-not-determine-signature]
---

The examples test the signature theorem on the smallest closed oriented
manifolds where every number can be written down. The complex projective plane
is the four-dimensional normalization: its middle cohomology is one-dimensional
with $Q(y,y)=1$, so $\sigma(\mathbb{CP}^2)=1$, while $p(T\mathbb{CP}^2)=(1+y^2)^3$
gives $p_1[\mathbb{CP}^2]=3$, so the theorem reads $1=3/3$. Reversing the
orientation negates the fundamental class and hence the form and every
Pontryagin number: $\sigma(-\mathbb{CP}^2)=-1$ with $p_1[-\mathbb{CP}^2]=-3$. The
product $S^2\times S^2$ exhibits the hyperbolic form, with $a\cdot a=b\cdot b=0$
and $a\cdot b=1$, and its zero signature forces $p_1[S^2\times S^2]=0$; the
product $\mathbb{CP}^2\times\mathbb{CP}^2$ exhibits multiplicativity, with both
factors and the product of signature and $L$-genus equal to $1$. The closing
counterexample separates two invariants that are often confused: the complex
projective plane and its orientation reversal have the same Euler
characteristic $3$ but signatures $1$ and $-1$, so the Euler characteristic
does not determine the signature, and the intersection form carries more
information than the Betti-number count.
