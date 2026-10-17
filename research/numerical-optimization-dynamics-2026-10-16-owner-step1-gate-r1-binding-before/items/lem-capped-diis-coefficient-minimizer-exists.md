---
id: lem-capped-diis-coefficient-minimizer-exists
kind: lemma
title: Capped DIIS coefficients have a unique minimum-norm least-squares selection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-finite-sum-in-a-commutative-monoid, def-frobenius-matrix-norm, thm-heine-borel-rn, thm-extreme-value-metric]
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

## Proof


1.1 The vector $e_1=(1,0,\ldots,0)$ belongs to $\mathcal C_{s,C}$ because its entries sum to $1$ and its $\ell^1$ norm is $1\le C$. Thus the coefficient set is nonempty. It is closed: the sum constraint is the inverse image of the closed singleton $\{1\}$ under a continuous linear map, and the $\ell^1$ bound is the inverse image of the closed interval $(-\infty,C]$ under the continuous function $c\mapsto\sum_i|c_i|$. It is bounded because $\|c\|_1^2=\sum_i c_i^2+2\sum_{i<j}|c_i||c_j|\ge\|c\|_2^2$ and $\|c\|_1\le C$. Therefore [F2] makes $\mathcal C_{s,C}$ compact. [given, F2]

2.1 The map $c\mapsto\sum_i c_iR_i$ is linear and continuous in finite dimensions, and its squared Frobenius norm is continuous by [F1]. The extreme-value theorem gives a minimum; its minimizer set is closed as the inverse image of the singleton containing that minimum, hence compact as a closed subset of $\mathcal C_{s,C}$. Thus [F2] gives a nonempty compact set $M=\operatorname*{argmin}_{c\in\mathcal C_{s,C}}J(c)$. [step 1.1, F1, F2]

3.1 The set $M$ is convex: $\mathcal C_{s,C}$ is convex, and for matrices $A,B$ the identity $\|(1-t)A+tB\|_F^2=(1-t)\|A\|_F^2+t\|B\|_F^2-t(1-t)\|A-B\|_F^2$ proves convexity of the squared norm. Applying it to $A=\sum_i c_iR_i$ and $B=\sum_i d_iR_i$ shows $J((1-t)c+td)\le(1-t)J(c)+tJ(d)=\min J$, so the convex combination also minimizes. Since $M$ is compact, the continuous function $c\mapsto\|c\|_2^2$ has a minimizer $c_*\in M$. [step 2.1, F1, algebra]

4.1 If distinct $c,d\in M$ both had minimum Euclidean norm, their midpoint would lie in $M$ and satisfy $\left\|\frac{c+d}{2}\right\|_2^2=\frac{\|c\|_2^2+\|d\|_2^2}{2}-\frac{\|c-d\|_2^2}{4}<\frac{\|c\|_2^2+\|d\|_2^2}{2},$ contradicting minimality. Thus $c_*$ is the unique minimum-norm least-squares minimizer. No nonsingularity of the Gram matrix is needed for existence or tie-breaking. [step 3.1, algebra] ∎
