---
id: thm-floater-hormann-no-real-poles
kind: theorem
title: Floater–Hormann interpolants have no real poles
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - lem-floater-hormann-weight-and-blend-identity
  - lem-floater-hormann-gap-partial-sums-positive
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Theorem 1
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement

For any $n\ge1$, any distinct ordered real nodes $x_0<\cdots<x_n$, any real
data $f_0,\ldots,f_n$, and any integer $0\le d<n$, the exact
Floater–Hormann rational function in
[[def-floater-hormann-interpolant]] has no real poles.

## Facts & Assumptions

**Given:** Ordered real nodes $x_0<\cdots<x_n$, real data, and $0\le d<n$.

[F1] [[lem-floater-hormann-weight-and-blend-identity]]: clearing the node factors in the barycentric denominator gives $(-1)^{n-d}s(x)$, where
$s(x)=\sum_{i=0}^{n-d}\mu_i(x)$ and
$\mu_i(x)=\prod_{j<i}(x-x_j)\prod_{k>i+d}(x_k-x)$.

[F2] [[lem-floater-hormann-gap-partial-sums-positive]]: in every open node gap the nonempty partial sums from the three index blocks $I_1,I_2,I_3$ are positive.

## Proof

1.1 At a node $x=x_\alpha$, a term $\mu_i(x_\alpha)$ vanishes if
$i>\alpha$ or $i+d<\alpha$. Otherwise every factor in $\mu_i(x_\alpha)$ is
strictly positive. The index set
$\max(0,\alpha-d)\le i\le\min(\alpha,n-d)$ is nonempty, so
$s(x_\alpha)>0$. [given, F1, F2, construct]

1.2 Suppose $x_\alpha<x<x_{\alpha+1}$. By [F2], every nonempty block sum
over $I_1,I_2,I_3$ is positive. Their index sets partition
$\{0,\ldots,n-d\}$, so $s(x)>0$ throughout each interior node gap.
[given, F1, F2, algebra]

2.1 If $x<x_0$, then $\mu_0>0$ and the terms in increasing index order
alternate in sign with decreasing magnitudes, since
$\mu_{i+1}/\mu_i=(x-x_i)/(x_{i+d+1}-x)<0$ and
$|\mu_{i+1}/\mu_i|=(x_i-x)/(x_{i+d+1}-x)<1$. Pairing from the first term
gives $s(x)>0$. If $x>x_n$, then $\mu_{n-d}>0$ and reading backward gives
alternating decreasing magnitudes: $\mu_{i-1}/\mu_i=(x_{i+d}-x)/(x-x_{i-1})<0$
and $|\mu_{i-1}/\mu_i|=(x-x_{i+d})/(x-x_{i-1})<1$. Pairing from the last
term again gives $s(x)>0$. [given, F1, algebra]

2.2 The cleared polynomial denominator of the barycentric quotient is a
nonzero constant multiple of $s$ by [F1]. Steps 1.1, 1.2, and 2.1 show that
this polynomial has no real zero. Cancelling common polynomial factors cannot
create a real denominator zero, so the reduced rational function has no real
poles. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎
