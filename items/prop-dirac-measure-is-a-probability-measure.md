---
id: prop-dirac-measure-is-a-probability-measure
kind: proposition
title: "A Dirac set function is a probability measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dirac-measure, def-probability-measure, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Example 1.4.29"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

For $x_0\in X$, the Dirac set function $\delta_{x_0}$ is a probability measure on every sigma-algebra on $X$.

## Facts & Assumptions

**Given:** A sigma-algebra $\mathcal A$ on a nonempty set $X$ and a point $x_0\in X$.

[L1] The Dirac set function has value $1$ exactly on the measurable sets containing $x_0$, and value $0$ otherwise ([[def-dirac-measure]]).

[L2] A probability measure is a measure whose value on the whole space is $1$ ([[def-probability-measure]]).

[L3] A nonnegative extended series is the supremum of its finite partial sums, with the empty sum equal to $0$ ([[def-nonnegative-extended-series]]).

## Proof

**Proof technique:** direct.

1.1 One has $\delta_{x_0}(\varnothing)=0$ and $\delta_{x_0}(X)=1$. [given, L1]

1.2 If $(E_k)$ is pairwise disjoint, then $x_0$ belongs to at most one $E_k$. If it belongs to none, both $\delta_{x_0}(\bigcup_kE_k)$ and $\sum_k\delta_{x_0}(E_k)$ are $0$; if it belongs to the unique $E_r$, both are $1$. [given, L1, L3]

2.1 Step 1.2 proves countable additivity and step 1.1 gives the empty-set and total-mass conditions, so $\delta_{x_0}$ is a probability measure. [step 1.1, step 1.2, L2] ∎

