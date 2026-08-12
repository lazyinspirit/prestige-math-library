---
id: cor-order-is-the-product-of-composition-factor-orders
kind: corollary
title: "The order of a finite group is the product of the orders of its composition factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-composition-factors-and-length, thm-lagrange, cor-order-of-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

If $G=G_0\triangleright\cdots\triangleright G_n=1$ is a composition series of a finite group, then
$$|G|=\prod_{i=0}^{n-1}|G_i/G_{i+1}|.$$
For the trivial group, $n=0$ and the empty product is $1$.

## Facts & Assumptions

**Given:** A composition series $G=G_0\triangleright\cdots\triangleright G_n=1$ of a finite group.

[F1] The factors of the displayed composition series are $G_i/G_{i+1}$ for $0\le i<n$ ([[def-composition-series-composition-factors-and-length]]).

[L1] If $H$ is a subgroup of a finite group $K$, then $|K|=|H|[K:H]$ ([[thm-lagrange]]).

[L2] If $N\trianglelefteq K$ and $K$ is finite, then $|K/N|=[K:N]$ ([[cor-order-of-a-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 For every $0\le i<n$, [L1] and [L2] give $|G_i|=|G_i/G_{i+1}|\,|G_{i+1}|$. [given, L1, L2]

2.1 Multiplying the identities of step 1.1 and cancelling the intermediate positive integers gives $|G_0|=\bigl(\prod_{i=0}^{n-1}|G_i/G_{i+1}|\bigr)|G_n|$. [step 1.1, algebra]

3.1 Since $G_0=G$ and $G_n=1$, one has $|G_n|=1$, proving the formula. When $n=0$, step 2.1 reads $|1|=1$ by the empty-product convention. [given, step 2.1, F1] ∎
