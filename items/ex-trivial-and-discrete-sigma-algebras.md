---
id: ex-trivial-and-discrete-sigma-algebras
kind: example
title: "The trivial and discrete sigma-algebras are the two extremes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Example 2.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.10"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

For every set $X$, the **trivial sigma-algebra** is $\{\varnothing,X\}$ and the
**discrete sigma-algebra** is $\mathcal P(X)$. Every sigma-algebra on $X$ lies
between them under inclusion. If $X=\varnothing$, the two extremes coincide.

## Facts & Assumptions

**Given:** A set $X$.

[L1] A sigma-algebra contains the empty set and is closed under complements and countable unions ([[def-sigma-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The family $\{\varnothing,X\}$ satisfies the axioms in [L1]; when $X=\varnothing$, it is the one-member family $\{\varnothing\}$. [L1, algebra]

1.2 The power set $\mathcal P(X)$ satisfies the axioms in [L1]. [L1, algebra]

2.1 Every sigma-algebra contains $\varnothing$ and hence $X$, and every one is a subfamily of $\mathcal P(X)$. Thus the two verified families are the extremes, coinciding when $X=\varnothing$. [step 1.1, step 1.2, L1] ∎
