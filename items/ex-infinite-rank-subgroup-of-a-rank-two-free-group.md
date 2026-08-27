---
id: ex-infinite-rank-subgroup-of-a-rank-two-free-group
kind: example
title: "A rank-two free group contains an infinite-rank subgroup"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

The rank-two free group $F(a,b)$ contains a subgroup of infinite rank, namely
the kernel of the exponent-sum map $\phi(a)=1$, $\phi(b)=0$.

## Facts & Assumptions

**Given:** The kernel $H=\ker\phi\le F(a,b)$ of the exponent-sum map.

[L1] Nielsen-Schreier makes the nontrivial Schreier generators of a Schreier
system into a free basis ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Verification

**Proof technique:** direct.

1.1 The right cosets of $H$ are $Ha^n$ for $n\in\mathbb Z$, so $\mathcal T=\{a^n:n\in\mathbb Z\}$ is a Schreier system. Its nontrivial Schreier generators are the infinitely many elements $a^n b a^{-n}$ for $n\in\mathbb Z$. [given, construct]

2.1 By [L1], the family in step 1.1 is a free basis of $H$. Since that basis is infinite, $H$ has infinite rank. [L1, step 1.1] ∎
