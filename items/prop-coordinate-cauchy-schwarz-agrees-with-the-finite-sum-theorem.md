---
id: prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem
kind: proposition
title: "On $\\mathbb R^n$, abstract Cauchy–Schwarz is exactly the published finite-sum Cauchy–Schwarz inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-standard-coordinate-inner-products, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-cauchy-schwarz-finite]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For $a,b\in\mathbb R^n$, Cauchy–Schwarz in the standard coordinate inner product is exactly

$$\left|\sum_{k<n}a_kb_k\right|\le\sqrt{\sum_{k<n}a_k^2}\sqrt{\sum_{k<n}b_k^2},$$

with equality exactly when the two lists are proportional in the symmetric sense. This includes $n=0$.

## Facts & Assumptions

**Given:** Real coordinate vectors $a,b\in\mathbb R^n$.

[L1] The standard real coordinate pairing is $\langle a,b\rangle=\sum_{k<n}a_kb_k$, with $\lVert a\rVert^2=\sum_{k<n}a_k^2$ ([[prop-standard-coordinate-inner-products]]).

[L2] Abstract Cauchy–Schwarz has equality exactly for linearly dependent vectors ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[L3] The published finite-sum theorem states the displayed inequality and equality exactly when some $(\lambda,\mu)\ne(0,0)$ satisfies $\lambda a_k=\mu b_k$ for every $k<n$ ([[thm-cauchy-schwarz-finite]]).

## Proof

**Proof technique:** direct.

1.1 Substituting [L1] into [L2] gives the displayed finite-sum inequality term for term. [L1, L2]

2.1 Coordinate vectors are linearly dependent exactly when there is a nonzero scalar pair $(\lambda,\mu)$ with $\lambda a_k=\mu b_k$ for all $k$, so the equality condition agrees with [L3]. For $n=0$, both sides are zero and the empty lists satisfy the symmetric proportionality condition. [L2, L3, algebra] ∎
