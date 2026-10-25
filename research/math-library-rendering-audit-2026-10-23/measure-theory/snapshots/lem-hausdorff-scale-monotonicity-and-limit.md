---
id: "lem-hausdorff-scale-monotonicity-and-limit"
kind: "lemma"
title: "The small-scale Hausdorff limit exists"
deps: ["def-hausdorff-content-at-scale-delta", "lem-extended-reals-complete"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264D(d),264K
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

For $A\subseteq B\subseteq X$ and $0<\eta\le\delta\le\infty$,

$$\mathcal H^s_\delta(A)\le\mathcal H^s_\delta(B),\qquad \mathcal H^s_\delta(A)\le\mathcal H^s_\eta(A).$$

For every metric space, every subset $A$, and every finite $s\ge0$,

$$\sup_{0<\delta<\infty}\mathcal H^s_\delta(A)=\lim_{k\to\infty}\mathcal H^s_{2^{-k}}(A)\in[0,\infty].$$

No separability or existence of a countable small-scale cover is assumed.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] The scale value is the infimum of admissible covering costs, with empty infimum $\infty$. [[def-hausdorff-content-at-scale-delta]]

[F2] Every subset of the extended real line has a supremum and infimum in that ordered set. [[lem-extended-reals-complete]]

## Proof

1.1 Every cover of $B$ covers $A$, and every $\eta$-cover is a $\delta$-cover. Infima over the larger families are smaller, including when a family is empty. [F1]

2.1 The dyadic values form a nondecreasing nonnegative sequence. Its supremum $M$ exists; if finite, the definition of supremum gives eventual values above $M-\varepsilon$, and if infinite, eventual values above every real bound. Thus the sequence has extended limit $M$. [F2, step 1.1]

3.1 For each $\delta>0$ there is $k$ with $2^{-k}\le\delta$, so $\mathcal H^s_\delta(A)\le M$. Conversely every dyadic value occurs among the scale values. Their suprema agree. For $A=\varnothing$ all values are zero; no part divided by $s$, so $s=0$ is included. [F1, step 1.1, step 2.1] ∎
