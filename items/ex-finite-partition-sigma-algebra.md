---
id: ex-finite-partition-sigma-algebra
kind: example
title: "A partition into k nonempty blocks generates a sigma-algebra with 2^k members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sigma-algebra-generated-by-a-countable-partition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Examples 2.4-2.6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Example

If $P_0,\ldots,P_{k-1}$ are the nonempty blocks of a partition of $X$, then

$$\sigma_X(\{P_0,\ldots,P_{k-1}\})=\left\{\bigcup_{i\in S}P_i:S\subseteq k\right\}$$

and this sigma-algebra has $2^k$ members.

## Facts & Assumptions

**Given:** A natural number $k$ and a partition $(P_i)_{i<k}$ of $X$ into nonempty blocks.

[L1] A countable partition generates exactly the unions of its blocks, and the subset-to-union map is a bijection ([[thm-sigma-algebra-generated-by-a-countable-partition]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] to the finite index set $k$ gives the displayed sigma-algebra and a bijection from $\mathcal P(k)$ to it. [L1]

2.1 The finite power set $\mathcal P(k)$ has $2^k$ members. For $k=0$, necessarily $X=\varnothing$ and there is one union; for $k=1$, the two unions are $\varnothing$ and $X$. [step 1.1, algebra] ∎
