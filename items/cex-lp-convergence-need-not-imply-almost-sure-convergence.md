---
id: cex-lp-convergence-need-not-imply-almost-sure-convergence
kind: counterexample
title: "$L^p$ convergence need not imply almost-sure convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables, def-convergence-in-lp-for-random-variables]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Section 1.3"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

$L^p$ convergence need not imply almost-sure convergence, for any fixed $1\le p<\infty$.

## Facts & Assumptions

**Given:** Lebesgue probability space $(0,1)$ and, for $m\ge0$, the $2^m$ dyadic intervals $I_{m,j}=[j2^{-m},(j+1)2^{-m})$, listed block by block; let $X_n$ be their indicators in that order.

[L1] $L^p$ convergence is vanishing of the $p$th moment of the difference ([[def-convergence-in-lp-for-random-variables]]).

[L2] Almost-sure convergence requires pointwise convergence off a null set ([[def-almost-sure-convergence-of-random-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 In the block of level $m$, every $X_n$ has $\mathbb E|X_n|^p=2^{-m}$. As the block level tends to infinity with $n$, $\|X_n\|_p=2^{-m/p}\to0$; hence $X_n\to0$ in $L^p$ by [L1]. [L1]

2.1 Every non-dyadic $x\in(0,1)$ belongs to exactly one interval in each level-$m$ block, but misses all the other intervals in that block. Thus $X_n(x)$ equals both $1$ and $0$ infinitely often. The exceptional dyadic endpoints are null, so [L2] rules out almost-sure convergence. [step 1.1, L2] ∎
