---
id: lem-gauge-fixed-dilation-and-small-gauge-regimes
kind: lemma
title: "Fixed gauge dilations and the small-gauge regime"
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
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, proof of Theorem 2"
      url: "https://arxiv.org/pdf/1703.10015v2"
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, proof of Theorem 2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
---

## Statement

Let $k\ge1$, let $f$ be a dimension function, and suppose $h(r):=r^{-k}f(r)$ is monotonic for all sufficiently small $r>0$. Then $L:=\lim_{r\downarrow0}h(r)$ exists in $[0,\infty]$. If $L=0$, every bounded subset of $\mathbb R^k$ has zero ball-cover gauge measure $\mathcal H^f$. If $L>0$, then for every fixed $C\ge1$ there are $C'<\infty$ and $r_*>0$ such that $f(Cr)\le C'f(r)$ for all sufficiently small $r$. For every fixed $0<c\le1$, there are $c_*>0$ and $r_{**}>0$ such that $f(cr)\ge c_*f(r)$ for all sufficiently small $r$.

## Facts & Assumptions

**Given:** A monotone ratio $h(r)=r^{-k}f(r)$ and the ball-cover definition of $\mathcal H^f$.

## Proof

1.1 Monotonicity of $h$ on a punctured interval implies that its limit as $r\downarrow0$ exists as an extended nonnegative real number. [given, algebra]

2.1 If $L=0$, fix a bounded ball of radius $R$ and let $r\downarrow0$. Partition a containing cube into cubes of side $r/\sqrt{k}$. At most $C_k(R/r)^k$ cubes meet it, and each such cube lies in a radius-$r$ ball. The total $f$-cost is at most $C_kR^k r^{-k}f(r)=C_kR^k h(r)\to0$. Thus its $\mathcal H^f$ measure is zero. A bounded set lies in a bounded ball, so monotonicity gives the same conclusion for it. [step 1.1, algebra]

2.2 If $0<L<\infty$, then $h(Cr)/h(r)\to1$ for each fixed $C>0$, so $f(Cr)/f(r)=C^k h(Cr)/h(r)$ is bounded above and below by positive constants. If $L=\infty$, monotonicity forces $h$ to be nonincreasing as $r$ increases near zero. For $C\ge1$, this gives $f(Cr)\le C^k f(r)$; for $0<c\le1$, it gives $f(cr)\ge c^k f(r)$. These prove both claimed bounds whenever $L>0$. [step 1.1, algebra]

3.1 The alternatives $L=0$ and $L>0$ exhaust $[0,\infty]$ and give the two conclusions. [step 2.1, step 2.2] ∎

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, proof of Theorem 2](https://arxiv.org/pdf/1703.10015v2)

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, proof of Theorem 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)
