---
id: cor-uniform-fisher-inequality
kind: corollary
title: "A $k$-uniform family on $[n]$ with all pairwise intersections of size $t<k$ has at most $n$ members"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonuniform-fisher-inequality, def-set-family-and-its-incidence-matrix, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $A_1,\dots,A_m$ be distinct subsets of $[n]$, each of size $k$, and suppose

$$\lvert A_i\cap A_j\rvert=t<k\qquad\text{for every }i\ne j.$$

Then $m\le n$.

## Facts & Assumptions

**Given:** a $k$-uniform family $A_1,\dots,A_m\subseteq[n]$ with every pairwise intersection of size $t<k$.

[L1] The nonuniform Fisher inequality gives $m\le n$ for distinct nonempty sets with constant pairwise intersection size ([[thm-nonuniform-fisher-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Every set in the family has size $k>t$, so the hypotheses place the family in the second case of [L1]. [L1, given]

2.1 Applying [L1] to that case gives $m\le n$. [L1, step 1.1] ∎

## Remarks

- This is the design-theoretic reading of Fisher's inequality, stated without importing any block-design terminology onto the page.
