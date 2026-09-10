---
id: ex-euclidean-borel-spaces-are-standard-borel
kind: example
title: "Euclidean borel spaces are standard borel"
status: draft
origin: pipeline
deps: [def-standard-borel-space, def-polish-space, thm-reals-cauchy-complete, thm-rationals-countable, lem-rat-embeds-dense, lem-metrics-on-rn, thm-product-of-countable]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

For each finite $n\ge0$, $(\mathbb R^n,\mathcal B(\mathbb R^n))$ is standard Borel. For $n\ge1$ use $d_\infty(x,y)=\max_{i<n}|x_i-y_i|$; $\mathbb R^0$ is a singleton.

## Facts & Assumptions

**Given:** A finite integer $n\ge0$ and the Borel measurable space $\mathbb R^n$.

[F1] The maximum-coordinate formula is a metric for n>=1. ([[lem-metrics-on-rn]])

[F2] Every real Cauchy sequence converges. ([[thm-reals-cauchy-complete]])

[F3] Q is countable. ([[thm-rationals-countable]])

[F4] The product of two countable sets is countable without choice. ([[thm-product-of-countable]])

[F5] Rational points approximate every real coordinate. ([[lem-rat-embeds-dense]])

[F6] A separable space with a complete compatible metric is Polish. ([[def-polish-space]])

[F7] The Borel space of a Polish space is standard Borel. ([[def-standard-borel-space]])

## Verification

**Proof technique:** direct.

1.1 For $n\ge1$, [F1] supplies the metric. A d-infinity Cauchy sequence is Cauchy in each coordinate since $|x_i-y_i|\le d_\infty(x,y)$. The coordinate limits exist by [F2]. For a fixed tolerance take the maximum of the finitely many coordinate convergence thresholds; beyond it all coordinate errors are below that tolerance, so the vectors converge in d-infinity. This metric induces the usual Euclidean topology: $d_\infty\le d_2\le\sqrt n\,d_\infty$ follows by bounding each squared coordinate by the maximum squared. [F1, F2]

1.2 Induction using [F3]–[F4] makes $\mathbb Q^n$ countable. Given a vector x and positive epsilon, [F5] gives a rational in each of its finitely many coordinate intervals of radius epsilon; the resulting vector q satisfies $d_\infty(x,q)<\varepsilon$. Hence Q to the nth power is dense. For instance in dimension two, $d_\infty((0,1),(1/3,4/3))=1/3$. [F3, F4, F5]

2.1 Steps 1.1–1.2 and [F6] show R to the nth power is Polish. The identity is the presentation of [F7]. For n=0 there is just the empty tuple, with zero metric and itself as a finite dense set; it is complete and Polish. No maximum over an empty index set is used. [step 1.1, step 1.2, F6, F7] ∎

## Source notes

Durrett Theorem 2.1.22, printed pp.53–54. The explicit complete Euclidean metric and rational density give the Polish presentation directly.
