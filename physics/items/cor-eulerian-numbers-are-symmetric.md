---
id: cor-eulerian-numbers-are-symmetric
kind: corollary
title: "The Eulerian numbers satisfy $A(n,k)=A(n,n-1-k)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-descents-and-excedances-are-equidistributed, def-eulerian-number-and-eulerian-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

For $n \ge 1$ and $0 \le k \le n-1$,

$$A(n,k)=A(n,n-1-k).$$

## Facts & Assumptions

**Given:** A natural number $n \ge 1$ and the value-complement map $R(\sigma)(i):=n-1-\sigma(i)$ on $S_n$.

## Proof

**Proof technique:** direct.

1.1 For every $0 \le i \le n-2$, one has $R(\sigma)(i)>R(\sigma)(i+1)$ exactly when $\sigma(i)<\sigma(i+1)$. Thus the descent set of $R(\sigma)$ is the complement of the descent set of $\sigma$ in $\{0,\dots,n-2\}$, and $\operatorname{des}(R(\sigma))=n-1-\operatorname{des}(\sigma)$. [given, algebra]

2.1 The map $R$ is a bijection of $S_n$, since applying it twice returns the original permutation. Therefore the number of permutations with $k$ descents equals the number with $n-1-k$ descents, which is exactly the displayed symmetry of the Eulerian numbers. [step 1.1, given] ∎
