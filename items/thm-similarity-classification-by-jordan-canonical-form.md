---
id: thm-similarity-classification-by-jordan-canonical-form
kind: theorem
title: "Split matrices are similar exactly when their Jordan block multisets agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-form-exists-iff-the-characteristic-polynomial-splits, thm-jordan-form-uniqueness-from-ranks-of-powers, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4-5"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Let $A,B\in M_n(F)$ have characteristic polynomials that split over $F$. Then $A$ and $B$ are similar if and only if their Jordan canonical forms have the same multiset of Jordan blocks. The blocks may occur in different orders.

## Facts & Assumptions

**Given:** Matrices $A,B\in M_n(F)$ with split characteristic polynomials.

[L1] A split characteristic polynomial is equivalent to existence of Jordan form over the base field ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[L2] The ranks of shifted powers determine Jordan form uniquely up to block order ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

[L3] Similarity models two ordered-basis matrices of one endomorphism and is an equivalence relation ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ and $B$ are similar, [L3] realises them as matrices of one endomorphism in two bases; [L1] supplies Jordan forms and [L2] makes their block multisets equal. [L1, L2, L3]

1.2 Conversely, enumerate the common block multiset once; after permuting blocks, both block diagonal matrices equal the matrix from that enumeration, and each block permutation is conjugation by a permutation matrix. Each of $A$ and $B$ is therefore similar to that common matrix, so the equivalence-relation clause in [L3] makes $A$ similar to $B$. [L1, L3, construct]

2.1 Steps 1.1 and 1.2 prove both directions, including $n=0$. [step 1.1, step 1.2] ∎
