---
id: lem-poisson-integral-moment-identities
kind: lemma
title: "First and second moments of a Poisson random integral"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, Proposition 2.7 and proof, printed pp. 13-14 (PDF pp. 25-26), and Chapter 3, Theorem 3.6, printed pp. 21-22 (PDF pp. 33-34): first moment and independent Poisson counts. The second-moment extension is proved locally."
verification:
  precheck: pending
---

## Statement

Let $\eta$ be a Poisson point process with locally finite intensity measure
$\nu$. For every nonnegative Borel function $f$,
$$\mathbb E[\eta(f)]=\nu(f),\qquad \mathbb E[\eta(f)^2]=\nu(f^2)+\nu(f)^2,$$
as identities in $[0,\infty]$. Here $\eta(f)=\int f\,d\eta$ and
$\nu(f)=\int f\,d\nu$.

## Facts & Assumptions

**Given:** A Poisson point process $\eta$ with locally finite intensity
measure $\nu$ and a nonnegative Borel function $f$.

[F1] Counts on disjoint Borel sets are independent and have Poisson laws with
their intensity means; an infinite-mean count equals $+\infty$ almost surely.
([[def-poisson-and-cox-point-process]])

[F2] For $N\sim\operatorname{Pois}(a)$ with finite $a$, $\mathbb E N=a$ and
$\mathbb E N^2=a+a^2$. ([[def-scalar-poisson-count-law]],
[[lem-poisson-count-law-normalization-and-moments]])

[F3] Nonnegative Borel functions admit increasing simple approximations, and
increasing limits pass through nonnegative integrals.
([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]],
[[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 First let $s=\sum_{j=1}^m c_j1_{B_j}$ be a nonnegative simple function with disjoint Borel sets $B_j$ and coefficients $c_j>0$, after discarding zero coefficients. Write $a_j=\nu(B_j)$. If some $a_j=\infty$, [F1] gives $\eta(s)=\infty$ almost surely and both displayed right-hand quantities are infinite. If all $a_j<\infty$, [F1]-[F2] give $\mathbb E\eta(s)=\sum_jc_ja_j=\nu(s)$ and $\mathbb E\eta(s)^2=\sum_jc_j^2(a_j+a_j^2)+2\sum_{i<j}c_ic_ja_ia_j=\nu(s^2)+\nu(s)^2$. The zero simple function also satisfies both identities. [given, F1, F2, algebra]

2.1 For arbitrary $f\ge0$, choose simple $s_n\uparrow f$ by [F3]. Then $\eta(s_n)\uparrow\eta(f)$, $\eta(s_n)^2\uparrow\eta(f)^2$, $\nu(s_n)\uparrow\nu(f)$, and $\nu(s_n^2)\uparrow\nu(f^2)$. Applying monotone convergence [F3] to the two expectation integrals and to the two measure integrals, and using step 1.1 for each $s_n$, yields both asserted identities, including the extended-infinite cases. [given, step 1.1, F3] ∎