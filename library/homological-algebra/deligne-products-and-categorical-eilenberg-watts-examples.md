---
page: deligne-products-and-categorical-eilenberg-watts-examples
title: "Deligne Products and Categorical Eilenberg–Watts — Examples"
status: draft
items: []
examples: [ex-deligne-product-of-finite-vector-space-categories, cex-left-to-right-exact-equivalence-need-not-preserve-the-identity, ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules, cex-a-deligne-kernel-need-not-be-one-external-tensor-factor]
---

These examples test the claims of the companion page on the smallest
non-trivial objects. The first computes a Deligne product in the vector-space
case: with $R=S=k$ the tensor-product algebra is $k\otimes_kk\cong k$, so
$\mathbf{vect}\boxtimes\mathbf{vect}$ is again $\mathbf{vect}$ and the universal
bifunctor is the ordinary tensor product.

The two counterexamples separate two constructions that might be conflated. For
the upper triangular algebra $A_0$ the Nakayama functor
$N^{r}\cong A_0^{*}\otimes_{A_0}-$ takes the one-dimensional projective module
$A_0e_1$ to a two-dimensional space, so $N^{r}$ is not naturally isomorphic to
the identity and the Lex-to-Rex equivalence of the triangle does not preserve
the identity functor; and the same algebra shows that a Deligne kernel in
$\mathcal A^{\mathrm{op}}\boxtimes\mathcal B$ need not be a single external
tensor factor $\bar a\boxtimes b$.

The final example distinguishes the regular bimodule $A$ from the co-regular
bimodule $A^{*}$: the kernel end of the identity functor is $A$ while its kernel
coend is $A^{*}$, and for $A_0$ these are non-isomorphic, so an end and a coend
of the same functor need not agree.
