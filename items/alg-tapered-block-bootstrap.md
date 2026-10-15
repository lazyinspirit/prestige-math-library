---
id: alg-tapered-block-bootstrap
kind: algorithm
title: Tapered block bootstrap
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [alg-overlapping-block-resampling, def-resampling-sampling-unit-contract]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.3, Assumption 2"
      url: https://arxiv.org/pdf/1711.01070
---

## Definition

**Input:** observations $Y_1,\ldots,Y_n$ in a real Hilbert space $H$, an integer $1\le b\le n$, and a window $w:\mathbb R\to[0,1]$ that vanishes off $[0,1]$, is positive on a neighbourhood of $1/2$, satisfies $w(1-u)=w(u)$, and is nondecreasing on $[0,1/2]$. Put $w_b(r)=w((r-\tfrac12)/b)$ for $1\le r\le b$, $W_b=(\sum_{r=1}^bw_b(r)^2)^{1/2}$, and $a_b=\sqrt b/W_b$. The procedure is admissible only when $W_b>0$.

**Center and taper:** set $\bar Y_n=n^{-1}\sum_{t=1}^nY_t$ and $R_t=Y_t-\bar Y_n$. For each start $j\in\{1,\ldots,n-b+1\}$, form the block

$$\bigl(a_bw_b(1)R_j,\ldots,a_bw_b(b)R_{j+b-1}\bigr).$$

**Resample:** use the independent uniform block starts from [[alg-overlapping-block-resampling]], multiply each selected centered observation by its within-block taper and the factor $a_b$, concatenate in draw order, and retain the first $n$ entries. The conditional bootstrap mean is centered by its own conditional expectation when used to approximate the sampling law of $\sqrt n\,\bar Y_n$.

The factor $a_b$ compensates for the window's squared-weight sum in the block-sum variance calculation; this definition alone gives no bootstrap validity result.

For a dependent time series, the selected length-$b$ consecutive run is the resampling unit under [[def-resampling-sampling-unit-contract]]. The taper changes each unit record's within-block weight but the whole block is selected and resampled together; validity remains a separate theorem.
