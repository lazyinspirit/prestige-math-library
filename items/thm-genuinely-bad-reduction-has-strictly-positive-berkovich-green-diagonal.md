---
dependency_level: 11
id: thm-genuinely-bad-reduction-has-strictly-positive-berkovich-green-diagonal
kind: theorem
title: "Genuinely bad reduction forces a strictly positive Berkovich Green diagonal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-good-and-potential-good-reduction-rational-map
  - lem-dynamical-diagonal-positivity-reduces-to-countable-coefficients
  - lem-dynamical-probability-invariance-and-green-normalization
  - lem-berkovich-log-kernel-positive-energy-and-uniqueness
  - lem-berkovich-rooted-tree-finite-retractions-and-laplacian
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-nonnegative-green-kernel-zero-slice-infima-force-good-conjugacy
  - lem-dynamical-potential-is-potential-of-a-probability-measure
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem3.14 and AppendixA, normalization argument; finite-tree adaptation"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §7.5 and §7.7"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be any complete algebraically closed field with a nontrivial nonarchimedean absolute value, and let $\phi$ be a rational map of degree at least two. If $\phi$ has genuinely bad reduction over $L$, then its extended Green kernel satisfies
$$g_\phi(x,x)>0\qquad(x\in\mathbb P^{1,\mathrm{an}}_L).$$
Classical diagonal values are interpreted as $+\infty$. Arbitrary characteristic, residue field, type-IV points and nonmetrizable Berkovich lines are included.

## Statement references

[[def-axiom-of-choice]]

[[def-good-and-potential-good-reduction-rational-map]]

## Facts & Assumptions

**Given:** The field and rational map with genuinely bad reduction in the statement.

[F1] There is a complete algebraically closed nontrivially valued coefficient subfield $L_0$ with a countable dense subfield. Genuine bad reduction descends to it, and $g_{\phi,L}(z,z)\ge g_{\phi,L_0}(rz,rz)$. ([[lem-dynamical-diagonal-positivity-reduces-to-countable-coefficients]])

[F2] On that countable model a representing probability exists and has normalized kernel integral zero and minimizes the Green energy uniquely. ([[lem-dynamical-potential-is-potential-of-a-probability-measure]], [[lem-dynamical-probability-invariance-and-green-normalization]], [[lem-berkovich-log-kernel-positive-energy-and-uniqueness]])

[F3] $J=-\log\delta$ is common root-path length. In particular $J(x,y)\ge\min(J(x,\zeta),J(y,\zeta))$ and both $J(x,\zeta),J(y,\zeta)$ are at most $J(\zeta,\zeta)$ for nonclassical $\zeta$. Kernel slices there are continuous and finite, and classical points are dense. ([[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]], [[lem-berkovich-dynamical-green-kernel-continuous-extension]], [[lem-berkovich-projective-line-compactness-and-classical-density]])

[F4] A nonnegative classical Green kernel with zero infimum in every classical slice has a good Möbius conjugacy. ([[lem-nonnegative-green-kernel-zero-slice-infima-force-good-conjugacy]])

[A1] Full Choice is assumed through the coefficient reduction and measure constructions. ([[def-axiom-of-choice]])

## Proof

1.1 First work over the countable coefficient model $L_0$ of [F1], and let $\mu$ be its normalized probability in [F2]. At any nonclassical $\zeta$, the energy of $\delta_\zeta$ is the finite real value $g_\phi(\zeta,\zeta)$, so [F2] makes it nonnegative. If it is zero, uniqueness gives $\mu=\delta_\zeta$. Normalization then gives $g_\phi(x,\zeta)=0$ for all $x$. The normalized kernel expression in [F2], or solving its two potential terms using these zero slices, yields
$$g_\phi(x,y)=J(x,y)-J(x,\zeta)-J(y,\zeta)+J(\zeta,\zeta).$$
By [F3] this is nonnegative: writing $A=J(x,\zeta)$, $B=J(y,\zeta)$ and $D=J(\zeta,\zeta)$, its value is at least $\min(A,B)-A-B+D=D-\max(A,B)\ge0$. [F2, F3, algebra]

1.2 For any classical $P$, its kernel slice takes value zero at the nonclassical point $\zeta$ and is continuous there by [F3]. Density of classical points therefore gives classical $Q\ne P$ with $g_\phi(P,Q)$ arbitrarily small: use a neighborhood of $\zeta$ disjoint from the closed point $P$. Together with nonnegativity from step1.1, the slice infimum is zero. By [F4], $\phi$ has a good conjugacy over $L_0$, contradicting genuine bad reduction there from [F1]. Hence all its nonclassical diagonal values are strictly positive. Its classical ones are $+\infty$ by [F3]. [F1, F3, F4, step 1.1, algebra]

2.1 Finally for every point $z$ of the full line over $L$, [F1] gives $g_{\phi,L}(z,z)\ge g_{\phi,L_0}(rz,rz)>0$. This includes all larger-field and type-IV points without assuming the larger line is metrizable, and proves the stated theorem. [F1, step 1.2, algebra] ∎
