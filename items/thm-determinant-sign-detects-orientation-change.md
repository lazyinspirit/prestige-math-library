---
id: thm-determinant-sign-detects-orientation-change
kind: theorem
title: "A real linear isomorphism preserves or reverses orientation according to the sign of its determinant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orientation-of-a-finite-dimensional-real-vector-space, cor-the-top-exterior-power-acts-by-the-determinant]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.2"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

Let $T:V\to V$ be a linear isomorphism of an oriented real vector space with $\dim V=n\ge1$. If $\det T>0$, then $T$ carries every positively oriented basis to a positively oriented basis; if $\det T<0$, then $T$ carries every positively oriented basis to a negatively oriented one. Thus the sign of $\det T$ is exactly whether $T$ preserves or reverses the orientation.

## Facts & Assumptions

**Given:** A linear isomorphism $T$ of an oriented $n$-dimensional real vector space, $n\ge1$, and a positively oriented ordered basis $\mathcal B$.

[L1] An orientation is an equivalence class of ordered bases, with two bases equivalent exactly when the determinant of their change-of-basis isomorphism is positive; a nonzero real determinant is positive or negative ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[L2] The top exterior power acts by the determinant: $\Lambda^nT=\det(T)\cdot\operatorname{id}$ ([[cor-the-top-exterior-power-acts-by-the-determinant]]).

## Proof

**Proof technique:** direct.


1.1 Fix a positively oriented ordered basis $\mathcal B=(b_1,\ldots,b_n)$; the transported list $T(\mathcal B)=(T(b_1),\ldots,T(b_n))$ is again an ordered basis because $T$ is an isomorphism, and the change-of-basis map from $\mathcal B$ to $T(\mathcal B)$ is $T$ itself. [given, L1]

1.2 By [L1], $T(\mathcal B)$ is positively oriented exactly when $\det T>0$, and negatively oriented exactly when $\det T<0$; both cases are exhaustive because $T$ invertible has $\det T\ne0$. [L1]

2.1 The top exterior action of [L2] records the same sign: $T(b_1)\wedge\cdots\wedge T(b_n)=\Lambda^nT(b_1\wedge\cdots\wedge b_n)=\det(T)\,b_1\wedge\cdots\wedge b_n$, so the transported basis belongs to the class of $\mathcal B$ precisely when the scalar is positive. [L2, step 1.1]

3.1 Steps 1.2 and 2.1 prove both the preservation and the reversal claims, and the orientation class of the transported basis is independent of the positively oriented basis chosen. [step 1.2, step 2.1] ∎
