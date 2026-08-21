---
id: fs-countable-additivity-without-disjointness
kind: false-statement
title: "FALSE: measures are additive on arbitrary countable unions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Definition 2.54"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every measure and every measurable sequence $(E_k)$, whether or not it is pairwise disjoint,

$$\mu\left(\bigcup_kE_k\right)=\sum_k\mu(E_k).$$

## Facts & Assumptions

**Given:** The one-point measurable space $X=\{x\}$ with sigma-algebra $\mathcal P(X)$ and its Dirac probability $\delta_x$.

[L1] Countable additivity in the definition of a measure applies only to pairwise disjoint sequences ([[def-measure]]).

[L2] The Dirac set function assigns $1$ to measurable sets containing $x$ and $0$ otherwise ([[def-dirac-measure]]), and it is a probability measure ([[prop-dirac-measure-is-a-probability-measure]]).

[L3] A nonnegative extended series starts at index $0$ and is the supremum of its partial sums ([[def-nonnegative-extended-series]]).

## Refutation

**Proof technique:** direct.

1.1 Define $E_0=E_1=\{x\}$ and $E_k=\varnothing$ for $k\ge2$. Then $\bigcup_kE_k=\{x\}$. [given]

2.1 The union has Dirac measure $1$, while the term values are $1,1,0,0,\ldots$, whose nonnegative extended sum is $2$. [step 1.1, L2, L3, algebra]

3.1 Since $1\ne2$, the claimed equality fails; the repeated set at indices $0$ and $1$ pinpoints the absent disjointness hypothesis in [L1]. [step 2.1, L1] ∎
