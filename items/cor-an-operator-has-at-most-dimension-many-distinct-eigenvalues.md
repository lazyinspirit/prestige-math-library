---
id: cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues
kind: corollary
title: 'An endomorphism of an $n$-dimensional space has at most $n$ distinct eigenvalues'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent, thm-dimension-of-a-linear-subspace]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

If $V$ is an $n$-dimensional vector space and $T:V\to V$ is linear, then $T$ has at most $n$ distinct eigenvalues.

## Facts & Assumptions

**Given:** An $n$-dimensional $F$-vector space $V$ and an endomorphism $T$.

[L1] Eigenvectors belonging to pairwise distinct eigenvalues are linearly independent ([[thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]]).

[L2] Every linearly independent subset of a finite-dimensional vector space is contained, without Choice, in a basis of that space ([[thm-dimension-of-a-linear-subspace]], clause 3).

## Proof

**Proof technique:** direct.

1.1 From any finite set of distinct eigenvalues, choose one eigenvector belonging to each; this is a finite sequence of individual choices. [given, choose]

2.1 The chosen vectors are linearly independent by [L1], so [L2] extends them to a basis of $V$. Every basis of the $n$-dimensional space has $n$ elements, so the chosen family, and hence the set of chosen eigenvalues, has at most $n$ elements. [step 1.1, L1, L2, algebra]

3.1 There cannot be $n+1$ distinct eigenvalues. Equivalently, $T$ has at most $n$ distinct eigenvalues; when $n=0$, no eigenvector exists and the bound is still valid. [step 2.1] ∎
