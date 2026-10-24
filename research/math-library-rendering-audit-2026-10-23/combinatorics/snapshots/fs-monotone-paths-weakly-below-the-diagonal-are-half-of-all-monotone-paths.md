---
id: fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths
kind: false-statement
title: "FALSE: the monotone paths from $(0,0)$ to $(n,n)$ staying weakly below the diagonal are exactly half of all monotone paths"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-monotone-and-diagonal-lattice-paths-correspond, cor-catalan-closed-formula, def-catalan-number, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §§10.2–10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

**False claim:** among the monotone paths from $(0,0)$ to $(n,n)$, exactly half
stay weakly below the diagonal $y=x$.

## Facts & Assumptions

**Given:** the case $n=2$.

[L1] Replacing $U$ by $N$ and $D$ by $E$ gives a bijection in which diagonal height is $y-x$ for the corresponding monotone path ([[lem-monotone-and-diagonal-lattice-paths-correspond]]).

[L2] The total number of monotone paths from $(0,0)$ to $(n,n)$ is $\binom{2n}{n}$ ([[thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]]).

[L3] $(n+1)C_n=\binom{2n}{n}$ ([[cor-catalan-closed-formula]]).

## Refutation

**Proof technique:** direct.

1.1 At $n=2$ there are $\binom{4}{2}=6$ monotone paths from $(0,0)$ to $(2,2)$ by [L2]. [L2]

1.2 The weakly-below ones are exactly `EENN` and `ENEN`, so there are $2$ of them. [given]

2.1 Half of the total would be $3$, not $2$, so the claim is false already at $n=2$. The general reason is that some monotone paths cross the diagonal and therefore belong to neither weak half-plane, so the naive symmetry "below equals above equals half of all paths" breaks down. [step 1.1, step 1.2, L1, L3] ∎

## Remarks

- The true count is $C_n$, not $\binom{2n}{n}/2$. At $n=2$ that is $C_2=2$, exactly as the two listed paths show.
