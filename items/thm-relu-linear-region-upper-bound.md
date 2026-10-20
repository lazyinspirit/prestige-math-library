---
id: thm-relu-linear-region-upper-bound
kind: theorem
title: "Rank-sensitive upper bound for ReLU linear regions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-relu-linear-region, lem-relu-rank-sensitive-region-recursion, lem-hyperplane-arrangement-region-count]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, Theorem 1"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "Theorem 1 and proof, pp. 3–4; exact rank-sensitive width formula."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Let $n_0,L,n_1,\ldots,n_L\ge1$ be integers and consider a standard adjacent-layer ReLU network with input dimension $n_0$ and $L$ hidden layers of widths $n_1,\ldots,n_L$. Define $J$ to be the set of integer tuples $(j_1,\ldots,j_L)$ satisfying $$0\le j_\ell\le\min\{n_0,n_1-j_1,\ldots,n_{\ell-1}-j_{\ell-1},n_\ell\}\qquad(1\le\ell\le L),$$ where for $\ell=1$ the terms between $n_0$ and $n_\ell$ are absent. The number of full-dimensional activation-pattern regions is at most $$\sum_{(j_1,\ldots,j_L)\in J}\prod_{\ell=1}^L\binom{n_\ell}{j_\ell}.$$ For one hidden layer, the bound is attained by hyperplanes in general position.

## Statement references

[Serra et al., Theorem 1 and proof: exact ReLU region upper bound](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The layer widths and region convention in the statement, and the recursion in [[lem-relu-rank-sensitive-region-recursion]].

[F1] Starting from an affine image of dimension $n_0$, the continuation count satisfies the recurrence defining $R_1(n_0)$ ([[lem-relu-rank-sensitive-region-recursion]]).

[F2] An arrangement of $n_1$ hyperplanes in general position in dimension $n_0$ has exactly $\sum_{j=0}^{\min(n_0,n_1)}\binom{n_1}{j}$ regions ([[lem-hyperplane-arrangement-region-count]]).

## Proof

1.1 Expand [F1]'s recurrence successively for $\ell=1,\ldots,L$. At layer $\ell$, the prior choices have reduced the available affine dimension to at most $\min(n_0,n_1-j_1,\ldots,n_{\ell-1}-j_{\ell-1})$, so the allowed next indices are exactly those in $J$. Each term contributes the factor $\binom{n_\ell}{j_\ell}$, and the terminal continuation is $1$. This gives the displayed sum. [given, F1, algebra]

2.1 If $L=1$, the first layer is an arrangement of $n_1$ affine hyperplanes in the input space. By [F2], a general-position choice attains the sum, proving tightness for one hidden layer. [F2, step 1.1] ∎
