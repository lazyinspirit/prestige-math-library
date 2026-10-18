---
id: lem-floater-hormann-gap-partial-sums-positive
kind: lemma
title: Floater–Hormann blend partial sums are positive in each node gap
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - lem-floater-hormann-weight-and-blend-identity
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, proof of Theorem 1
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement

Let $x_0<\cdots<x_n$ and $0\le d<n$, and use the $\mu_i$ and
$s=\sum_{i=0}^{n-d}\mu_i$ of
[[lem-floater-hormann-weight-and-blend-identity]]. For
$x_\alpha<x<x_{\alpha+1}$, partition the indices into
$$I_1=\{i\le\alpha-d\},\quad I_2=\{\alpha-d+1\le i\le\alpha\},\quad I_3=\{i\ge\alpha+1\},$$
intersecting each set with $\{0,\ldots,n-d\}$. Each nonempty partial sum
$\sum_{i\in I_k}\mu_i(x)$ is positive. More precisely, if $I_3$ is nonempty,
its terms alternate starting positive with strictly decreasing magnitudes; if
$I_1$ is nonempty, its terms have the same property when read backward from
$i=\alpha-d$. If $d\ge1$, every term in $I_2$ is positive.

## Facts & Assumptions

**Given:** Ordered distinct nodes $x_0<\cdots<x_n$, $0\le d<n$, and a query point in one open node gap.

[F1] [[lem-floater-hormann-weight-and-blend-identity]]: $\mu_i(x)=\prod_{j<i}(x-x_j)\prod_{k>i+d}(x_k-x)$.

## Proof

1.1 If $i\in I_2$, every factor in $\mu_i(x)$ is positive: left indices lie strictly below $x_\alpha<x$, and right indices lie strictly above $x<x_{\alpha+1}$. Thus all terms in a nonempty $I_2$ are positive. If $d=0$, $I_2$ is empty. [given, F1, algebra]

1.2 If $I_3$ is nonempty, its first index is $\alpha+1$ and $\mu_{\alpha+1}(x)>0$. For $\alpha+1\le i<n-d$, $$\frac{\mu_{i+1}(x)}{\mu_i(x)} =\frac{x-x_i}{x_{i+d+1}-x}<0,\qquad \left|\frac{\mu_{i+1}(x)}{\mu_i(x)}\right|<1.$$ The numerator is negative and its magnitude is smaller than the positive denominator because $x_i<x_{i+d+1}$. Consecutive terms therefore alternate with strictly decreasing magnitudes. Pairing from the first positive term gives a positive sum, including when one positive term remains. [given, F1, algebra]

1.3 If $I_1$ is nonempty, its last index is $\alpha-d$ and $\mu_{\alpha-d}(x)>0$. Read backward. For $i\le\alpha-d$ with $i>0$, $$\frac{\mu_{i-1}(x)}{\mu_i(x)} =\frac{x_{i+d}-x}{x-x_{i-1}}<0,\qquad \left|\frac{\mu_{i-1}(x)}{\mu_i(x)}\right|<1.$$ Here $x_{i+d}\le x_\alpha<x$ and $x_{i-1}<x_i\le x_{i+d}$, so the numerator is negative and its magnitude is smaller than the positive denominator. Pairing backward from the first positive term proves the $I_1$ sum is positive. [given, F1, algebra] ∎

