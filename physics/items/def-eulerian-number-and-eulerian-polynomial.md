---
id: def-eulerian-number-and-eulerian-polynomial
kind: definition
title: "Eulerian numbers and Eulerian polynomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-descent-set-major-index-excedance-and-fixed-point]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 13"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/13.%20Permutatios%20III/Permutations%20III.pdf"
pipeline_run: null
---

## Definition

For $n \in \mathbb{N}$ and $k \in \mathbb{N}$, the **Eulerian number** $A(n,k)$
is the number of permutations of $S_n$ with exactly $k$ descents:

$$A(n,k) := |\{\,\sigma \in S_n : \operatorname{des}(\sigma)=k\,\}|.$$

Thus $A(n,k)=0$ unless $0 \le k \le n-1$ when $n \ge 1$, and we set
$A(0,0)=1$.

The **Eulerian polynomial** is

$$A_n(t) := \sum_{k=0}^{n-1} A(n,k)t^k \qquad (n \ge 1),$$

with $A_0(t):=1$.
