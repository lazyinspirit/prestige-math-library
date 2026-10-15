---
id: lem-mean-measure-and-integrals-of-a-random-point-process
kind: lemma
title: "Mean measures and measurable nonnegative integrals of random measures"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-measure
  - def-nonnegative-lebesgue-integral
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-monotone-convergence-for-the-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $\zeta$ be a random locally finite Borel measure on $S$; in particular,
$\zeta$ may be a point process. Then $\nu(B):=\mathbb E[\zeta(B)]$ is a
measure, and for every nonnegative Borel $f$ the map
$\omega\mapsto\zeta_\omega(f)$ is a measurable extended nonnegative random
variable satisfying $\mathbb E[\zeta(f)]=\int f\,d\nu$. The mean measure
$\nu$ is locally finite if and only if
$\mathbb E[\zeta(K)]<\infty$ for every compact $K$.

## Facts & Assumptions

**Given:** A measurable random element $\zeta$ whose values are locally finite
Borel measures on $S$.

[F1] Each realization $\zeta_\omega$ is a measure, and every evaluation
$\omega\mapsto\zeta_\omega(B)$ is measurable. ([[def-random-measure-and-locally-finite-point-process]])

[F2] Expectation of a nonnegative random variable is its nonnegative integral.
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[F3] Increasing limits pass through the nonnegative integral.
([[thm-monotone-convergence-for-the-integral]])

[F4] Every nonnegative measurable function is the increasing pointwise limit
of nonnegative simple measurable functions.
([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F5] Pointwise limits of measurable extended-real functions are measurable.
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F6] A measure is zero at the empty set and countably additive on pairwise
disjoint measurable sets. ([[def-measure]])

## Proof
**Proof technique:** direct.

1.1 The function $\nu(B)=\mathbb E[\zeta(B)]$ is defined for every Borel set $B$ by [F1] and [F2], and $\nu(\varnothing)=0$ because each measure $\zeta_\omega$ vanishes at $\varnothing$. [given, F1, F2, F6]

1.2 Let $f\ge0$ be Borel and choose $s_n\uparrow f$ as in [F4]. If $s_n$ is simple, its integral against $\zeta$ is a finite nonnegative linear combination of the measurable evaluations in [F1], hence is measurable. For each $\omega$, monotone convergence for the measure $\zeta_\omega$ gives $\zeta_\omega(s_n)\uparrow\zeta_\omega(f)$. The pointwise-limit result [F5] therefore makes $\omega\mapsto\zeta_\omega(f)$ measurable. [given, F1, F4, F5]

2.1 Let $(B_j)_{j\ge1}$ be pairwise disjoint Borel sets. For every $\omega$, $\zeta_\omega(\bigcup_jB_j)=\sum_j\zeta_\omega(B_j)$ by [F1] and [F6]. The finite partial sums increase, so [F3] gives $\nu(\bigcup_jB_j)=\lim_n\sum_{j=1}^n\mathbb E[\zeta(B_j)] =\sum_j\nu(B_j)$. Together with step 1.1 this proves that $\nu$ is a measure. [given, step 1.1, F1, F2, F3, F6]

2.2 For a nonnegative simple $s=\sum_{j=1}^m a_j1_{B_j}$, the definition $\nu(B)=\mathbb E[\zeta(B)]$ and finite linearity give $\mathbb E[\zeta(s)]=\int s\,d\nu$. For the increasing sequence from step 1.2, both $\zeta(s_n)\uparrow\zeta(f)$ pathwise and $\int s_n\,d\nu\uparrow\int f\,d\nu$; applying [F3] to both nonnegative integrals proves the expectation identity. [given, step 1.2, F1, F2, F3, F4]

3.1 For compact $K$, local finiteness of $\nu$ at $K$ means exactly $\nu(K)=\mathbb E[\zeta(K)]<\infty$ by its definition. Requiring this for all compact $K$ proves the final equivalence. [given, step 2.1, F1] ∎