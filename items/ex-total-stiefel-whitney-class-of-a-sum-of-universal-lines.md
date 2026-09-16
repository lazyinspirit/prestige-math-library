---
id: ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines
kind: example
title: Total Stiefel–Whitney class of a sum of universal lines
status: draft
origin: pipeline
deps: ["ex-stiefel-whitney-class-of-the-universal-real-line", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Example 3.7 and the symmetric-polynomial discussion, printed pp.82–83"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 symmetric polynomials, printed pp.125–127"
---

## Example

Assume AC and let $n\geq0$. On $(\mathbb{RP}^\infty)^n$ let
$L_i=\operatorname{pr}_i^*\gamma_1$ be the pullback of the universal real line
along the $i$-th projection and put $a_i=w_1(L_i)$. Then
$$H^*((\mathbb{RP}^\infty)^n;\mathbb F_2)=\mathbb F_2[a_1,\ldots,a_n],\qquad L_1\oplus\cdots\oplus L_n\ \text{has}\ w\Bigl(\bigoplus_{i=1}^{n}L_i\Bigr)=\prod_{i=1}^{n}(1+a_i),$$
and $w_k(\bigoplus_iL_i)$ is the $k$-th elementary symmetric polynomial
$\sigma_k(a_1,\ldots,a_n)$; for $n=0$ the product is $1$ on a point.

## Facts & Assumptions

**Given:** AC, $n\geq0$, the product $(\mathbb{RP}^\infty)^n$ with its coordinate projections, and the pullback lines $L_i$.

[F1] $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F2] Under AC, with $R=\mathbb F_2$ a PID and every homology group finite free (each $H_q(\mathbb{RP}^\infty;\mathbb F_2)$ is a copy of $\mathbb F_2$), the cross product is a graded-ring isomorphism $H^*(X)\otimes_{\mathbb F_2}H^*(Y)\to H^*(X\times Y)$ ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] The total class of the universal line is $w(\gamma_1)=1+a$, so $w_1(L_i)=\operatorname{pr}_i^*a=:a_i$ ([[ex-stiefel-whitney-class-of-the-universal-real-line]]).

[F4] Stiefel–Whitney classes are natural and satisfy the Whitney product formula $w(E\oplus F)=w(E)w(F)$ ([[thm-naturality-of-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The cohomology ring is polynomial. By [F2] applied to the $n$-fold product and [F1], the cross product identifies $H^*((\mathbb{RP}^\infty)^n;\mathbb F_2)$ with the $n$-fold graded tensor product of $\mathbb F_2[a]$, which is the polynomial ring $\mathbb F_2[a_1,\ldots,a_n]$ under the identifications $a_i=\operatorname{pr}_i^*a$. The construction is by iterated Künneth over the finite product, and each factor's homology is $\mathbb F_2$ in each degree, so the finite-freeness hypothesis of [F2] holds factor by factor. [F1, F2]

2.1 The total class of the sum. Each $L_i=\operatorname{pr}_i^*\gamma_1$ is a line bundle with $w(L_i)=1+a_i$ by [F3] and naturality [F4]. The Whitney product formula [F4] applied to the finite sum gives $w(L_1\oplus\cdots\oplus L_n)=\prod_{i=1}^{n}(1+a_i)$ in $\mathbb F_2[a_1,\ldots,a_n]$. [F3, F4, step 1.1]

3.1 The individual classes. Expanding the product in the polynomial ring, the coefficient of degree $k$ is the sum of all products of $k$ distinct variables, that is the elementary symmetric polynomial $\sigma_k(a_1,\ldots,a_n)$; the coefficient of degree zero is $1=w_0$. Since the $a_i$ are algebraically independent by step 1.1, each $\sigma_k$ is nonzero for $k\leq n$, which is the standard algebraic-independence input used to see that a rank-$n$ bundle can have all $n$ positive classes nonzero. [step 1.1, step 2.1]

4.1 Boundary cases. For $n=0$ the product is a point, the empty sum of lines is the zero bundle, the empty product is $1$, and $w(0)=1$ by the rank-zero convention. For $n=1$ the statements reduce to $w(\gamma_1)=1+a$ and $\sigma_1=a$. The polynomial ring is commutative, so the order of the factors does not matter, and the displayed class is independent of the chosen ordering of the coordinates. AC is used through Künneth and the Whitney formula, as recorded. [F2, F3, F4, A1, step 2.1] ∎