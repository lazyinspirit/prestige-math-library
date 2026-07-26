---
id: def-cesaro-mean
kind: definition
title: "The Cesaro means $\\sigma_n = (x_0 + \\dots + x_n)/(n+1)$ and $(C,1)$-summability"
status: draft
origin: session
deps: [def-sequence, def-finite-sum, def-real-limit, lem-of-naturals-positive, lem-limit-unique, def-complete-ordered-field]
forward_refs: [ex-cesaro-means-of-alternating]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 1 and Ch. 5"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with finite sums as in
[[def-finite-sum]]. For $n \in \mathbb{N}$ the **$n$-th Cesaro mean** of
$(x_k)$ is

$$\sigma_n \;:=\; \frac{1}{n+1}\sum_{k=0}^{n} x_k \;=\; \frac{x_0 + x_1 + \dots + x_n}{n+1},$$

where $n+1$ denotes the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$.

**This is well defined.** The only thing that could fail is the division: since
$n + 1 \ge 1$, the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is strictly
positive ([[lem-of-naturals-positive]]), hence nonzero by trichotomy
([[def-complete-ordered-field]]), hence invertible. The sum
$\sum_{k=0}^{n} x_k$ is the finite sum $\sum_{k < n+1} x_k$ of
[[def-finite-sum]], a single well-determined real for each $n$. So
$(\sigma_n)_{n \in \mathbb{N}}$ is again a sequence of reals.

The sequence $(x_k)$ is **$(C,1)$-summable to $L \in \mathbb{R}$**, or
**Cesaro summable to $L$**, when the sequence of Cesaro means converges to $L$
([[def-real-limit]]). Limits of real sequences are unique
([[lem-limit-unique]]), so such an $L$ is unique when it exists, and we write it
$\lim_n \sigma_n$.

## Remarks

- **The indexing starts at $0$ and the denominator is $n+1$, not $n$.**
  Sequences here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
  ([[def-sequence]]), so $\sigma_n$ averages the $n+1$ terms
  $x_0, \dots, x_n$. Writing $\sigma_n = (x_1 + \dots + x_n)/n$, as texts
  indexing from $1$ do, would leave $\sigma_0$ undefined and would not be a
  sequence on $\mathbb{N}$ at all. The convention chosen here is also what makes
  the Cesaro matrix $c_{n,k} = 1/(n+1)$ for $k \le n$ a genuine
  $\mathbb{N} \times \mathbb{N}$ summability matrix
  ([[def-summability-matrix]], [[cor-cesaro-matrix-is-regular]]).

- **$(C,1)$-summability is strictly weaker than convergence.** Every convergent
  sequence is $(C,1)$-summable to its limit ([[thm-cesaro-mean-theorem]]), and
  the converse fails ([[fs-cesaro-converse]]): the Cesaro means of the
  alternating sequence converge to $0$ while the sequence itself diverges
  ([[ex-cesaro-means-of-alternating]]). That is the entire point of the notion:
  it assigns a value to some divergent sequences, consistently with the ordinary
  limit wherever the ordinary limit exists.

- **Nothing here sums a series.** The object averaged is the sequence $(x_k)$
  itself, not its partial sums, and $\sum_{k=0}^{n} x_k$ is a finite sum in the
  sense of [[def-finite-sum]]. Applied instead to the partial sums of a series,
  the same definition gives the classical Cesaro summation of divergent series;
  series are not available until the next page of this track and nothing above
  presupposes them.
