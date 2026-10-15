---
id: alg-k-sample-null-constrained-block-bootstrap
kind: algorithm
title: Null-constrained block bootstrap for independent series
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-moving-block-bootstrap
  - alg-tapered-block-bootstrap
  - alg-overlapping-block-resampling
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 3.2
      url: https://arxiv.org/pdf/1711.01070
dependency_level: 2
---

## Definition

**Input:** a fixed number $K\ge2$ of observed series $Y_{i,1},\ldots,Y_{i,n_i}$ in a real Hilbert space $H$, positive integer sample sizes $n_i$, total size $M=\sum_{i=1}^K n_i$, integer block lengths $1\le b_i\le n_i$, and a mode, moving or tapered. For tapered mode also supply an admissible window with positive block norm at each $b_i$. Put

$$\bar Y_i=\frac1{n_i}\sum_{t=1}^{n_i}Y_{i,t},\qquad \bar Y_P=\frac1M\sum_{i=1}^K n_i\bar Y_i,\qquad R_{i,t}=Y_{i,t}-\bar Y_i.$$

For each series $i=1,\ldots,K$, let $N_i=n_i-b_i+1$ and $k_i=\lceil n_i/b_i\rceil$. For every candidate start $j=1,\ldots,N_i$ and position $r=1,\ldots,b_i$, define the following arrays. In moving mode set $A_{i,j,r}=R_{i,j+r-1}$. In tapered mode set $A_{i,j,r}=a_{b_i}w_{b_i}(r)R_{i,j+r-1}$, with $a_{b_i}$ and $w_{b_i}$ as in [[alg-tapered-block-bootstrap]]. For each $i=1,\ldots,K$ and $s=1,\ldots,k_i$, draw independent uniform starts $J_{i,s}\in\{1,\ldots,N_i\}$, using the index law of [[alg-overlapping-block-resampling]]. For each within-block position define

$$c_{i,r}=\frac1{N_i}\sum_{j=1}^{N_i}A_{i,j,r}.$$

**Output:** for each $i$, a pseudo-series $Y^*_{i,1},\ldots,Y^*_{i,n_i}$. In the order $s=1,\ldots,k_i$, retain the positions $r=1,\ldots,q_{i,s}$, where $q_{i,s}=\min\{b_i,n_i-(s-1)b_i\}$, and set

$$Y^*_{i,(s-1)b_i+r}=\bar Y_P+A_{i,J_{i,s},r}-c_{i,r}.$$

Thus a divisible sample uses $k_i$ complete blocks; otherwise only the first $n_i-b_i\lfloor n_i/b_i\rfloor$ positions of the final block are retained. This centers each resampled residual position by its own conditional average, then gives every pseudo-series the same pooled location $\bar Y_P$. All block starts are conditionally independent across blocks and across series.

## Remarks

The algorithm is a finite-sample null imposition. Its validity for a statistic requires additional process and block-length hypotheses.
