---
id: prop-liouville-convolution-square-indicator
kind: proposition
title: "The convolution $\\mathbf 1*\\lambda$ detects perfect squares"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dirichlet-convolution, def-dirichlet-convolution-identity, def-liouville-function, lem-finite-sum-reindexing-and-fubini, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every positive integer $n$,

$$
(\mathbf 1*\lambda)(n)=\begin{cases}1,& n\text{ is a perfect square},\\0,& n\text{ is not a perfect square}.\end{cases}
$$

## Facts & Assumptions

**Given:** A positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 Write $n=\prod_{i<r} p_i^{e_i}$ by [[thm-canonical-prime-factorisation]]. Every positive divisor of $n$ has the form $\prod_{i<r} p_i^{j_i}$ with $0\le j_i\le e_i$, so [[def-dirichlet-convolution]] and [[def-liouville-function]] give $(\mathbf 1*\lambda)(n)=\sum_{d\mid n}\lambda(d)=\prod_{i<r}(\sum_{j=0}^{e_i} (-1)^j)$, where the factorization of the finite sum uses [[lem-finite-sum-reindexing-and-fubini]]. [given, construct]

2.1 For each $i$, the alternating sum $\sum_{j=0}^{e_i}(-1)^j$ equals $1$ when $e_i$ is even and $0$ when $e_i$ is odd. Therefore the product in step 1.1 is $1$ exactly when every exponent $e_i$ is even, and otherwise it is $0$. [step 1.1, algebra]

3.1 By canonical factorization, every exponent $e_i$ is even exactly when $n$ is a perfect square. So step 2.1 is precisely the claimed square-indicator formula. [step 2.1] ∎
