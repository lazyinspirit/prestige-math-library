---
id: lem-peyre-alpha-integral-finite
kind: lemma
title: "Finiteness of the Peyre alpha integral"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-peyre-admissibility-conditions
  - def-effective-cone-of-divisors
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §3.3"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §4"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
verification: {}
---

## Statement

Let $V$ be a real vector space of finite dimension $\rho\ge1$, let $C\subseteq V$ be a closed, full-dimensional, pointed convex cone, and let $a\in\operatorname{int}(C)$. Let $C^\vee:=\{y\in V^*: \langle x,y\rangle\ge0\text{ for all }x\in C\}$ be its dual cone, assume $C^\vee$ is full-dimensional, and give $V^*$ any translation-invariant Haar measure. Then
$$
\int_{C^\vee} e^{-\langle a,y\rangle}\,dy
$$
is finite and strictly positive. In particular, the integral in Peyre's alpha factor converges under the cone hypotheses in the Peyre admissibility conditions.

## Statement references

[[def-peyre-admissibility-conditions]]

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$, a closed full-dimensional pointed cone $C$, an interior point $a$, its full-dimensional dual cone, and Haar measure on $V^*$.

[F1] The effective cone in this construction is a closed convex cone in the finite-dimensional space $\operatorname{Pic}(X)\otimes\mathbb R$. ([[def-effective-cone-of-divisors]])

[F2] The admissibility conditions state that this cone is full-dimensional and pointed and that $-K_X$ lies in its interior. ([[def-peyre-admissibility-conditions]])

## Proof

1.1 Choose a norm on $V^*$ and its dual norm on $V$. Since $a$ is an interior point, there is $\epsilon>0$ such that $a+u\in C$ for every $u\in V$ with $\|u\|\le\epsilon$. If $y\in C^\vee$, then $\langle a+u,y\rangle\ge0$ for all such $u$. Taking a dual unit vector $u$ with $\langle u,y\rangle=-\epsilon\|y\|$ gives $\langle a,y\rangle\ge\epsilon\|y\|$. [given, construct]

1.2 Therefore $0<e^{-\langle a,y\rangle}\le e^{-\epsilon\|y\|}$ on $C^\vee$. In linear coordinates there is $c>0$ with $\|y\|\ge c\sum_{j=1}^{\rho}|y_j|$, so the comparison integral on all of $V^*$ is at most the finite product $\prod_{j=1}^{\rho}\int_{\mathbb R}e^{-\epsilon c|t|}\,dt=(2/(\epsilon c))^\rho$. Since $C^\vee$ has nonempty interior, it contains an open ball on which the integrand is continuous and positive, so its integral is also strictly positive. [given, step 1.1, algebra] ∎
