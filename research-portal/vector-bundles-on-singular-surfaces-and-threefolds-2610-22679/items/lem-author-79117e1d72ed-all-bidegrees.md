---
id: lem-author-79117e1d72ed-all-bidegrees
kind: lemma
title: The exact projective bundle map in every integer bidegree
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-79117e1d72ed-bigraded-ring
  - lem-author-79117e1d72ed-additive-c1
  - lem-author-79117e1d72ed-dual-conventions
  - thm-author-79117e1d72ed-em-complex-pbf
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-79117e1d72ed-bigraded-ring: mathematical-premise
  lem-author-79117e1d72ed-additive-c1: mathematical-premise
  lem-author-79117e1d72ed-dual-conventions: mathematical-premise
  thm-author-79117e1d72ed-em-complex-pbf: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
---

## Statement
Assume the Axiom of Choice. Let $X$ be qcqs over a field, $E$ finite locally free of constant rank $r>0$, $\pi:Q_X(E)\to X$, and $\xi=c_1(\mathcal O_Q(1))$. For all integers $a,b$ the map $\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(Q_X(E))$ given by $(x_m)\mapsto\sum_m\pi^*(x_m)\xi^m$ is an isomorphism, where $H^{a,b}(T)=0$ for $b<0$.

## Statement references
[[lem-author-79117e1d72ed-bigraded-ring]]

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [[math:def-axiom-of-choice]]. In step 1.1 it discharges the explicit AC hypothesis of [[lem-author-79117e1d72ed-dual-conventions]], inherited from the relative-Proj line-quotient representation. No additional geometric hypothesis is imposed.

[F1] [[thm-author-79117e1d72ed-em-complex-pbf]] supplies the complex-level equivalence with components given by the actual pullback and powers of EM’s Definition5.2 class for every nonnegative target weight.

[F2] [[lem-author-79117e1d72ed-dual-conventions]] identifies the relevant projectivizations and tautological lines. [[lem-author-79117e1d72ed-bigraded-ring]] and [[lem-author-79117e1d72ed-additive-c1]] specify precisely the product and Chern class being used.

## Proof
**Given:** AC and $X,E,r,a,b$ as stated.

**Goal:** Obtain the exact contracted map in all bidegrees.

1.1 Regard $X$ as a qcqs scheme over the prime subfield of its base field; this does not change its underlying scheme or the supplied motivic complexes. For $b\geq0$, apply [F1] to $E^\vee$ of rank $r$ and target weight $b$. Using [A1] to discharge the AC hypothesis of the dual-conventions supplier in [F2], transport its target through that identification. Each component remains $\xi^m\pi^*$ for the actual product in [F2]. Taking $H^a$ commutes with this finite direct sum, and $H^a(C_{b-m}[-2m])=H^{a-2m,b-m}(X)$. This gives an isomorphism with those components. [A1, F1, F2]

2.1 The degree of $\xi^m$ is $2m$, even. Graded commutativity therefore identifies $\xi^m\pi^*(x_m)$ with $\pi^*(x_m)\xi^m$ without a sign, giving exactly the displayed map. For $m=0$ the power is the unit, so the component is pullback. [F2, step 1.1]

3.1 For $b<0$, every $b-m<0$ with $m\geq0$. All source groups and the target vanish by the explicit zero convention. The unique homomorphism between these zero groups is an isomorphism, and its formula is the same sum with zero entries. This covers all $a\in\mathbb Z$, including negative cohomological degrees; no truncation was taken. [F2, step 1.1, step 2.1] ∎

## Reading limits
For this repair, read [Elmanto–Morrow, arXiv:2309.08463v1](https://arxiv.org/pdf/2309.08463v1), Definition 5.2 and the convention following (5.2), printed p.34, and the component maps, projectivization convention, Theorem 5.24 and its proof, printed pp.43–44. The complex-level equivalence is imported through the external-input supplier in [F1]. Its cited Annala–Iwasa argument and the earlier trace, syntomic and projective-line foundations were not reconstructed.
