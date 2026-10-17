---
id: lem-capped-diis-coefficient-minimizer-exists
kind: lemma
title: Capped DIIS coefficients have a unique minimum-norm least-squares selection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [lem-of-triangle-inequality, lem-of-abs-value, def-finite-sum-in-a-commutative-monoid, def-frobenius-matrix-norm, thm-heine-borel-rn, thm-extreme-value-metric]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Thorsten Rohwedder, An analysis for some methods and algorithms of quantum chemistry, Chapter 4 §4.1
      url: https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download
verification:
  precheck: pending
---

## Statement

Let $s\ge1$, let $R_1,\ldots,R_s$ be complex matrices of one fixed shape,
and let $C\ge1$. Define
$$\mathcal C_{s,C}:=\{c\in\mathbb R^s:\sum_{i=1}^s c_i=1,\ \sum_{i=1}^s|c_i|\le C\}$$
and $J(c):=\|\sum_{i=1}^s c_iR_i\|_F^2$. Then $J$ attains a minimum on
$\mathcal C_{s,C}$. Among all minimizers there is a unique vector of minimum
Euclidean norm. This rule defines the exact capped DIIS coefficient vector even
when the least-squares Gram matrix is singular.

## Facts & Assumptions
**Given:** A positive integer $s$, matrices $R_i$ of the same finite shape, and a real cap $C\ge1$.

[F1] The Frobenius norm is a norm on the finite-dimensional matrix space ([[def-frobenius-matrix-norm]]).

[F2] A closed bounded subset of $\mathbb R^s$ is compact ([[thm-heine-borel-rn]]), and a continuous real function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F3] Real absolute values satisfy $|a+b|\le|a|+|b|$ and $|ab|=|a||b|$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof


1.1 The vector $e_1=(1,0,\ldots,0)$ belongs to $\mathcal C_{s,C}$ because its entries sum to $1$ and its $\ell^1$ norm is $1\le C$. Thus the coefficient set is nonempty. For $c,d\in\mathbb R^s$, each $|c_i-d_i|\le\|c-d\|_2$, and [F3] gives $\bigl||c_i|-|d_i|\bigr|\le|c_i-d_i|$; hence both $c\mapsto\sum_i c_i$ and $c\mapsto\sum_i|c_i|$ are continuous. Their closed level sets show that $\mathcal C_{s,C}$ is closed. It is bounded because $\|c\|_1^2=\sum_i c_i^2+2\sum_{i<j}|c_i||c_j|\ge\|c\|_2^2$ and $\|c\|_1\le C$. Therefore [F2] makes $\mathcal C_{s,C}$ compact. [given, F2, F3]

2.1 Put $T(c)=\sum_i c_iR_i$. By the triangle inequality and homogeneity of the Frobenius norm, $\|T(c)-T(d)\|_F\le\sum_i|c_i-d_i|\|R_i\|_F\le\|c-d\|_2\sum_i\|R_i\|_F$, so $T$ is continuous; the reverse triangle inequality then makes $c\mapsto J(c)=\|T(c)\|_F^2$ continuous. By [F2], $J$ attains a minimum $m$ on the nonempty compact set $\mathcal C_{s,C}$. The set $M=\mathcal C_{s,C}\cap J^{-1}(\{m\})$ is closed and bounded in $\mathbb R^s$, hence compact by [F2], and it is nonempty by attainment. [step 1.1, F1, F2]

3.1 For $c,d\in\mathcal C_{s,C}$ and $0\le t\le1$, the coefficients $e=(1-t)c+td$ satisfy $\sum_i e_i=(1-t)\sum_i c_i+t\sum_i d_i=1$. By [F3], $\sum_i|e_i|\le(1-t)\sum_i|c_i|+t\sum_i|d_i|\le C$, so $\mathcal C_{s,C}$ is convex. Expanding each complex matrix entry gives $\|(1-t)A+tB\|_F^2=(1-t)\|A\|_F^2+t\|B\|_F^2-t(1-t)\|A-B\|_F^2$ for real $t$. Applying this identity to $A=T(c)$ and $B=T(d)$ shows $J((1-t)c+td)\le(1-t)J(c)+tJ(d)=m$ when $c,d\in M$; since the combination is feasible and $m$ is the minimum, it also lies in $M$. Thus $M$ is convex. The function $c\mapsto\|c\|_2^2=\sum_i c_i^2$ is continuous, so compactness of $M$ gives a minimizer $c_*\in M$. [step 2.1, F1, F3, algebra]

4.1 If distinct $c,d\in M$ both had minimum Euclidean norm, their midpoint would lie in $M$ and satisfy $\left\|\frac{c+d}{2}\right\|_2^2=\frac{\|c\|_2^2+\|d\|_2^2}{2}-\frac{\|c-d\|_2^2}{4}<\frac{\|c\|_2^2+\|d\|_2^2}{2},$ contradicting minimality. Thus $c_*$ is the unique minimum-norm least-squares minimizer. No nonsingularity of the Gram matrix is needed for existence or tie-breaking. [step 3.1, algebra] ∎
