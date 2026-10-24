---
id: lem-power-map-on-unipotent-groups-is-bijective
kind: lemma
title: Power maps with exponent prime to the characteristic are bijective on unipotent groups
dependency_level: 8
deps:
  - def-axiom-of-choice
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
  - def-unipotent-algebraic-group
  - lem-field-valued-points-of-schemes
  - thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Lemma 15.2 and its proof, printed p. 303, with Proposition 14.21, printed pp. 284-285
---
## Statement

Assume the Axiom of Choice for the field-point functor. Let $k$ be a field, let $U$ be an affine unipotent algebraic group over $k$, and let $e\ge1$ be an integer with $e\cdot1_k\ne0$ (every positive integer in characteristic zero, and precisely those prime to $p$ in characteristic $p>0$). Then the map $x\mapsto x^e$ is a bijection from $U(k^{\mathrm a})$ to itself.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, an affine unipotent algebraic group $U$ over $k$, and an integer $e\ge1$ with $e\cdot1_k\ne0$.

[F1] $U$ has a central series $U=U_0\supseteq U_1\supseteq\dots\supseteq U_r=1$ of closed subgroup schemes with successive quotients isomorphic to closed subgroup schemes of $\mathbf G_a$. ([[thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients]])

[F2] For a closed subgroup scheme $N\subseteq\mathbf G_a$ over an algebraically closed field $K$, multiplication by $e$ is bijective on $N(K)$ when $e$ is prime to the characteristic. In positive characteristic $p$, choose integers $d,m$ with $de=1+mp$; multiplication by $d$ preserves every additive subgroup and is its inverse. In characteristic zero, a proper closed subgroup has finitely many points, and the additive group has no nontrivial finite subgroup, so $N(K)$ is either $0$ or all of $K$, where division by $e$ is valid. ([[lem-field-valued-points-of-schemes]])

[F3] An fppf quotient of finite-type groups has nonempty finite-type fibres, and over an algebraically closed field each such fibre has a rational point. Thus its sequence on rational points is exact. This allows nonsmooth groups and infinitesimal kernels. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** The Axiom of Choice, a field $k$, an affine unipotent $U$, and $e\ge1$ with $e\cdot1_k\ne0$.

1.1 Put $K=k^{\mathrm a}$ and induct on the length of the central series in [F1], deleting repetitions. The group $1$ has a unique $e$-th root of its only point. Otherwise let $N$ be the last nontrivial term of the series, so $N$ is central in $U$ and embeds in $\mathbf G_a$; its power map on $K$-points is bijective by [F2]. The quotient $Q=U/N$ inherits a shorter central series, and [F3] gives the exact sequence $1\to N(K)\to U(K)\to Q(K)\to1$. By induction the power map on $Q(K)$ is bijective. [F1, F2, F3, induction]

2.1 For $x\in U(K)$, take the unique $e$-th root $\bar y$ of its image in $Q(K)$ and lift it to $y\in U(K)$ using [F3]. Then $a=x y^{-e}\in N(K)$. Choose the unique $n\in N(K)$ with $n^e=a$. Centrality gives $(yn)^e=y^e n^e=x$, proving existence. If $z^e=y^e$ for two points of $U(K)$, quotient uniqueness gives $z=yn$ for some $n\in N(K)$; centrality then gives $z^e=y^e n^e$, so $n^e=1$ and kernel uniqueness forces $n=1$. Thus the power map on $U(K)$ is injective as well as surjective, completing the induction. No assertion that a power map is a homomorphism on a noncommutative group is used. [F2, F3, step 1.1, discharge-induction] ∎
