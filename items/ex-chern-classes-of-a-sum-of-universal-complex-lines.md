---
id: ex-chern-classes-of-a-sum-of-universal-complex-lines
kind: example
title: Chern classes of a sum of universal complex lines
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-integral-cohomology-of-bu-n, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, lem-cohomology-ring-of-infinite-complex-projective-space, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Elementary symmetric functions and Chern classes, printed pp.130-132"
---

## Example

Assume AC. On $(\mathbb{CP}^\infty)^n$ let $L_i$ be the pullback of the
universal complex line along the $i$-th projection, let $x_i=c_1(L_i)$, and let
$E=L_1\oplus\cdots\oplus L_n$. Then
$$c(E)=\prod_{i=1}^n(1+x_i),\qquad c_k(E)=e_k(x_1,\dots,x_n),$$
the $k$-th elementary symmetric polynomial, in
$H^*((\mathbb{CP}^\infty)^n;\mathbb Z)=\mathbb Z[x_1,\dots,x_n]$.

## Facts & Assumptions

**Given:** AC, the projections $p_i:(\mathbb{CP}^\infty)^n\to\mathbb{CP}^\infty$ and the pulled-back universal lines $L_i=p_i^*\gamma$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern-class and Kunneth suppliers ([[def-axiom-of-choice]]).

[F1] Chern classes are natural and multiplicative over Whitney sums, and on a line $c(L)=1+c_1(L)$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F2] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with free finitely generated homology in each degree, and the Kunneth cross product is a ring isomorphism for products of such spaces over a PID ([[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] $B\mathbb U(n)=\operatorname{Gr}_n(\mathbb C^\infty)$ is the classifying space of numerable rank-$n$ complex bundles, and the classifying map of a sum of lines is the map induced by the sum construction ([[thm-integral-cohomology-of-bu-n]]).

[F4] Direct sums of complex line bundles are formed fiberwise and are compatible with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Verification

**Proof technique:** direct.

1.1 Each $L_i$ is a complex line bundle and $E=\bigoplus_iL_i$ by [F4]; by multiplicativity and line normalization [F1], $c(E)=\prod_ic(L_i)=\prod_i(1+x_i)$. [F1, F4, given]

2.1 The degree-$k$ part of the product is the $k$-th elementary symmetric polynomial: $c_k(E)=e_k(x_1,\dots,x_n)$ by definition of the elementary symmetric functions as the coefficients of $\prod_i(1+x_i)$. [step 1.1, algebra]

3.1 The classes $x_i$ generate a polynomial ring: by [F2] the Kunneth isomorphism identifies $H^*((\mathbb{CP}^\infty)^n;\mathbb Z)$ with $\mathbb Z[u]\otimes\cdots\otimes\mathbb Z[u]=\mathbb Z[x_1,\dots,x_n]$, so the displayed product expansion is the standard one with no relations among the $x_i$. [F2, step 2.1]

4.1 Consistency with the classifying-space description: by [F3] the bundle $E$ is pulled back from the universal rank-$n$ bundle along the classifying map of the sum, and its Chern classes restrict under $p_i$ to $c_1(\gamma)=x_i$, matching the elementary symmetric description after the substitution of the $A$-page theorem identifying $H^*(B\mathbb U(n);\mathbb Z)$ with $\mathbb Z[c_1,\dots,c_n]$. [F3, step 3.1]

5.1 Boundary cases. For $n=1$ the product is $1+x_1$ and $E=L_1$; for $k>n$ the elementary symmetric polynomial $e_k$ vanishes, matching the rank cutoff. The trivial summand case $L_i=\varepsilon^1$ has $x_i=0$ and contributes a factor $1$. The coefficient ring $\mathbb Z$ is nonzero and the product is finite, so no convergence question arises. AC is used only through [A1]. [A1, F1, step 2.1] ∎

## Source notes

This is the elementary-symmetric computation of Miller's Lecture 35: the Chern classes of a sum of lines are the elementary symmetric functions of the line classes, which is also the mechanism behind $H^*(B\mathbb U(n);\mathbb Z)=\mathbb Z[c_1,\dots,c_n]$.
