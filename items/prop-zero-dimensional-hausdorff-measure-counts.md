---
id: "prop-zero-dimensional-hausdorff-measure-counts"
kind: "proposition"
title: "Zero-dimensional Hausdorff measure is counting measure"
deps: ["def-hausdorff-measure", "thm-hausdorff-measure-is-metric-and-borel-measurable", "def-counting-measure", "def-hausdorff-content-at-scale-delta"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264D(b),264G(a)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For every subset $A$ of a metric space, $\mathcal H^0(A)=\#A$ when $A$ is finite and $\mathcal H^0(A)=\infty$ otherwise. Every subset is $\mathcal H^0$-measurable.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] At exponent zero every nonempty covering set costs one; the empty family costs zero. [[def-hausdorff-content-at-scale-delta]]

[F2] The counting set function equals cardinality on finite sets and infinity on infinite sets. [[def-counting-measure]]

## Proof

1.1 For a finite $A$ of size $N$, its singleton cover costs $N$ at every scale, including $N=0$. If $N\ge2$, choose $\delta$ smaller than the minimum distance between distinct points; every cover then has at least $N$ members. For $N=1$ any cover needs one member. Thus $\mathcal H^0(A)=N$. [F1]

2.1 If $A$ is infinite, for each positive integer $N$ it contains an $N$-point subset. The preceding lower bound gives $\mathcal H^0(A)\ge N$ for every $N$, hence infinity. The formula is exactly the counting set function. [F2, step 1.1]

3.1 For any test set $T$ and subset $E$, if $T$ is finite its partition into $T\cap E$ and $T\setminus E$ splits its cardinality. If $T$ is infinite at least one piece is infinite, and both sides of the splitting identity are infinity. This is the Carathéodory criterion for every $E$. [step 1.1, step 2.1] ∎
