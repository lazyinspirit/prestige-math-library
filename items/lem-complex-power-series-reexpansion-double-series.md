---
id: lem-complex-power-series-reexpansion-double-series
kind: lemma
title: "The binomial double series for re-expanding a complex power series is absolutely convergent and may be regrouped"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-power-series-reexpansion-double-series, lem-binomial-theorem-over-complex-numbers, thm-absolute-convergence-of-complex-series]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power-series re-expansion notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $\sum c_n(z-a)^n$ have radius $R$. If $|b-a|+|h|<R$, then
$$\sum_{n\ge0}\sum_{k=0}^n\binom nk |c_n|\,|b-a|^{n-k}|h|^k<\infty,$$
and the complex binomial double series may be regrouped by powers of $h$.

## Facts & Assumptions

**Given:** A complex power series and points $b,h$ satisfying $|b-a|+|h|<R$.

[L1] The corresponding nonnegative real binomial double series converges and licenses regrouping ([[lem-power-series-reexpansion-double-series]]).

[L2] For complex $z,w$ and $n\in\mathbb N$, $(z+w)^n=\sum_{k\le n}\binom nk z^kw^{n-k}$ ([[lem-binomial-theorem-over-complex-numbers]]).

[L3] Every absolutely convergent complex series converges, and every rearrangement has the same sum ([[thm-absolute-convergence-of-complex-series]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the real coefficient sequence $|c_n|$ and the nonnegative numbers $|b-a|,|h|$; this gives the displayed finite total majorant. [L1]

2.1 By [L2], $c_n((b-a)+h)^n$ is the finite sum over $k\le n$ of the corresponding complex terms, each bounded by the majorant term in step 1.1. [step 1.1, L2]

3.1 Absolute convergence now permits regrouping by $k$ under [L3]. The cases $h=0$ and $b=a$ merely make some terms vanish and are included. [step 1.1, step 2.1, L3] ∎
