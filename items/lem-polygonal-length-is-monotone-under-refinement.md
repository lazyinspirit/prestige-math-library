---
id: lem-polygonal-length-is-monotone-under-refinement
kind: lemma
title: "Refining a partition cannot decrease its inscribed polygonal length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-norm-and-normed-space, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 5"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be a path with $a<b$ and $n\ge1$. If a partition $Q$ refines a partition $P$, then

$$\ell_P(\gamma)\le\ell_Q(\gamma).$$

## Facts & Assumptions

**Given:** A path and partitions $P\subseteq Q$ in the refinement sense.

[L1] A refinement contains every point of the original partition, possibly with additional points between consecutive old points ([[def-partition-and-refinement]]).

[L2] The Euclidean norm satisfies the triangle inequality ([[def-norm-and-normed-space]], [[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If one point $s$ is inserted between consecutive points $u<v$ of $P$, [L2] gives $\lVert\gamma(v)-\gamma(u)\rVert_2\le\lVert\gamma(s)-\gamma(u)\rVert_2+\lVert\gamma(v)-\gamma(s)\rVert_2$. [L2]

2.1 Every other summand is unchanged, so insertion of one point cannot decrease polygonal length. [step 1.1]

3.1 Because $Q$ is finite and contains $P$, it is obtained by finitely many one-point insertions. Repeated use of step 2.1 gives $\ell_P(\gamma)\le\ell_Q(\gamma)$. [given, L1, step 2.1] ∎
