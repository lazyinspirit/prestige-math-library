---
id: thm-arc-length-is-additive-over-subintervals
kind: theorem
title: "Arc length is additive across every subdivision point and decreases under restriction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn, lem-polygonal-length-is-monotone-under-refinement, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: true
proof_strategy: two-inequalities
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. M. Apostol, Mathematical Analysis, Section 6.10"
      url: "https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be a path, with $n\ge1$, and let $c\in[a,b]$. Then, in the nonnegative extended reals,

$$L_{[a,b]}(\gamma)=L_{[a,c]}(\gamma|_{[a,c]})+L_{[c,b]}(\gamma|_{[c,b]}).$$

Consequently $\gamma$ is rectifiable on $[a,b]$ if and only if both restrictions are rectifiable. The formula includes $c=a$ and $c=b$ through the singleton convention.

## Facts & Assumptions

**Given:** The path and subdivision point $c$.

[L1] Inserting a point into a partition does not decrease polygonal length ([[lem-polygonal-length-is-monotone-under-refinement]]).

[L2] Partitions of adjacent intervals can be concatenated after deleting the repeated common endpoint ([[def-partition-and-refinement]]).

[L3] Arc length is the supremum of polygonal lengths, with singleton length zero ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** two inequalities.

1.1 Concatenating a partition of $[a,c]$ with one of $[c,b]$ gives a partition of $[a,b]$ whose polygonal length is the sum of the two polygonal lengths. [given, L2, L3]

1.2 Given a partition $P$ of $[a,b]$, insert $c$ if necessary. By [L1] the refined length is at least $\ell_P$, and splitting the refined sum at $c$ makes it at most $L_{[a,c]}+L_{[c,b]}$. [given, L1, L2, L3]

2.1 Taking independent suprema in step 1.1 gives $L_{[a,c]}+L_{[c,b]}\le L_{[a,b]}$; if either left summand is infinite, this already forces the total length to be infinite. [step 1.1, L3]

3.1 Taking the supremum over $P$ gives the reverse inequality. Together with step 2.1 this proves equality. [step 1.2, step 2.1, L3]

4.1 If $c$ is an endpoint, one summand is zero by [L3]. The equality also shows that the total is finite exactly when both summands are finite. [step 3.1, L3] ∎
