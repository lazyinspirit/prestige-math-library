---
id: thm-hausdorff-gauge-mass-distribution-principle
kind: theorem
title: "Mass distribution principle for Hausdorff gauge measures"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-hausdorff-dimension-function-and-gauge-measure
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, Lemma 2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
---

## Statement

Let $(X,d)$ be a metric space, let $f$ be a dimension function, and let $E\subseteq X$ be Borel. Suppose a Borel probability measure $\mu$ satisfies $\mu(E)=1$ and $\mu(B(x,r))\le C f(r)$ for every ball of sufficiently small radius. Then $\mathcal H^f(E)\ge C^{-1}$, where $\mathcal H^f$ is the ball-cover gauge measure.

## Facts & Assumptions

**Given:** A Borel set $E$ of full probability mass and a uniform upper bound on the measure of every sufficiently small ball.

## Proof

1.1 Let $\delta$ be smaller than the radius threshold and let $(B_i)_i$ be any countable $\delta$-ball cover of $E$. Countable subadditivity and $\mu(E)=1$ give $1\le\sum_i\mu(B_i)\le C\sum_i f(r(B_i))$. [given, algebra]

2.1 Taking the infimum over all such covers yields $\mathcal H^f_\delta(E)\ge C^{-1}$. The bound holds for every sufficiently small $\delta$, so its limit gives $\mathcal H^f(E)\ge C^{-1}$. [step 1.1, algebra] ∎

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, Lemma 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)
