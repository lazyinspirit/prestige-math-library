---
id: lem-author-cf6ede58b450-cover-intersections
kind: lemma
title: Covering sieves admit common refinements
status: draft
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
On a small site, the intersection of two covering sieves on the same object is covering. Every sieve containing a covering sieve is covering.

## Facts & Assumptions
[F1] The topology axioms and pullback of a sieve are as in [[def-author-cf6ede58b450-site-plus-data]].

## Proof
**Given:** Covering sieves R and S on X, and a sieve T containing R.

**Goal:** Prove that R ∩ S and T cover X.

1.1 For each f in R, the pullback f*S covers dom f by stability. Since R is a sieve, f*(R ∩ S) = f*S. Transitivity applied to R shows that R ∩ S covers X. [F1, given]

2.1 For every f in R, f*T is maximal and hence covering. Transitivity applied to R shows that T covers X. Thus both assertions hold. [F1, given] ∎
