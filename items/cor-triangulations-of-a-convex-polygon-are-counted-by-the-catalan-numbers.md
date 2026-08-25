---
id: cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers
kind: corollary
title: "$\\lvert\\mathcal{P}_{n+2}\\rvert=C_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees, cor-binary-trees-are-counted-by-the-catalan-numbers, def-catalan-number, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, Exercise 3.5.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, the set $\mathcal{P}_{n+2}$ of triangulations of
the labelled $(n+2)$-gon is finite and has cardinality

$$\lvert\mathcal{P}_{n+2}\rvert=C_n.$$

## Facts & Assumptions

**Given:** a natural number $n$.

[L1] There is a bijection $\mathcal{T}_n\to\mathcal{P}_{n+2}$ ([[thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees]]).

[L2] $\lvert\mathcal{T}_n\rvert=C_n$ ([[cor-binary-trees-are-counted-by-the-catalan-numbers]]).

[F1] If $A$ is finite and $f:A\to B$ is a bijection, then $B$ is finite and $\lvert A\rvert=\lvert B\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The bijection of [L1] identifies $\mathcal{T}_n$ with $\mathcal{P}_{n+2}$. [L1]

2.1 The set $\mathcal{T}_n$ has cardinality $C_n$ by [L2], so [F1] transports that cardinality along the bijection of step 1.1 and yields $\lvert\mathcal{P}_{n+2}\rvert=C_n$. [L2, F1, step 1.1] ∎

## Remarks

- At $n=4$ this says that the labelled hexagon has $C_4=14$ triangulations. The companion page writes them out in full.
