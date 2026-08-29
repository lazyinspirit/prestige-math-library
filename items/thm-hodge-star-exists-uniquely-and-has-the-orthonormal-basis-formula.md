---
id: thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula
kind: theorem
title: "The Hodge star exists uniquely and is given by the complementary-basis formula in an oriented orthonormal basis"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hodge-star-on-an-oriented-inner-product-space, thm-gram-inner-product-on-exterior-powers-is-positive-definite, def-oriented-unit-volume-form, thm-increasing-basis-wedges-form-a-basis]
aliases: []
landmark: true
short: "Existence and basis formula for $\\star$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

Let $V$ be an oriented finite-dimensional real inner product space of dimension $n$. For every degree $0\le k\le n$ there is a unique linear map $\star:\Lambda^kV\to\Lambda^{n-k}V$ satisfying

$$\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\,\omega\qquad\text{for all }\alpha,\beta\in\Lambda^kV,$$

where $\omega$ is the oriented unit volume form of [[def-oriented-unit-volume-form]]. If $(e_1,\ldots,e_n)$ is a positively oriented orthonormal basis and $I=\{i_1<\cdots<i_k\}$ has complement $I^c=\{i^c_1<\cdots<i^c_{n-k}\}$, let $\varepsilon_I$ be the sign of the permutation $(i_1,\ldots,i_k,i^c_1,\ldots,i^c_{n-k})\mapsto(1,\ldots,n)$; then

$$\star e_I=\varepsilon_I\,e_{I^c}.$$

## Facts & Assumptions

**Given:** An oriented $n$-dimensional real inner product space $V$, its unit volume form $\omega$, a degree $k$, and a positively oriented orthonormal basis $(e_1,\ldots,e_n)$.

[L1] The Hodge star is characterized by $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$ ([[def-hodge-star-on-an-oriented-inner-product-space]]).

[L2] The Gram pairing on the exterior powers is a positive-definite, hence nondegenerate, inner product ([[thm-gram-inner-product-on-exterior-powers-is-positive-definite]]).

[L3] The unit volume form is $\omega=e_1\wedge\cdots\wedge e_n$ for the positively oriented orthonormal basis, with $\langle\omega,\omega\rangle=1$ ([[def-oriented-unit-volume-form]]).

[L4] The wedges $e_I$ form a basis of $\Lambda^kV$ and the wedges $e_{I^c}$ a basis of $\Lambda^{n-k}V$ ([[thm-increasing-basis-wedges-form-a-basis]]).

## Proof

**Proof technique:** direct.


1.1 By [L3] and [L4], the positively oriented orthonormal basis exists and yields the wedge bases $(e_I)_I$ of $\Lambda^kV$ and $(e_J)_J$ of $\Lambda^{n-k}V$. [L3, L4]

2.1 Define a linear map $\star:\Lambda^kV\to\Lambda^{n-k}V$ by $\star e_I:=\varepsilon_I\,e_{I^c}$ on the basis of step 1.1. [step 1.1]

3.1 For subsets $I,J$ of sizes $k$ and $k$, one has $e_J\wedge e_{I^c}=0$ unless $J=I$: if $J\ne I$ some index occurs twice, and if $J=I$ then $e_I\wedge e_{I^c}=\varepsilon_I\,e_1\wedge\cdots\wedge e_n=\varepsilon_I\omega$ by the definition of $\varepsilon_I$ and [L3]. The Gram pairing of [L2] on the orthonormal basis satisfies $\langle e_J,e_I\rangle=1$ for $J=I$ and $0$ otherwise, so $e_J\wedge\star e_I=\varepsilon_I\,e_J\wedge e_{I^c}=\langle e_J,e_I\rangle\omega$ for all $I,J$. [L2, L3, step 1.1, step 2.1]

4.1 Both sides of the relation of [L1] are bilinear in $(\alpha,\beta)$, so step 3.1 extends from basis wedges to the identity $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$ for all $\alpha,\beta\in\Lambda^kV$. [step 3.1, algebra]

5.1 Uniqueness: if $\star'$ also satisfies [L1], then $\alpha\wedge(\star\beta-\star'\beta)=0$ for all $\alpha$; pairing with $\omega$ through the Gram inner product of [L2] gives $\langle\alpha,\star(\star\beta-\star'\beta)\rangle=0$ for all $\alpha$, so nondegeneracy forces $\star(\star\beta-\star'\beta)=0$; the map $\star$ of step 2.1 permutes a basis up to sign, hence is bijective, so $\star\beta=\star'\beta$. [L1, L2, step 2.1, step 4.1]

6.1 Steps 2.1 and 4.1 prove existence with the complementary-basis formula, and step 5.1 proves uniqueness. [step 2.1, step 4.1, step 5.1] ∎
