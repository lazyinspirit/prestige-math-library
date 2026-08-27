---
id: ex-index-two-subgroup-of-a-rank-two-free-group
kind: example
title: "An index-two subgroup of a rank-two free group has rank three"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-nielsen-schreier-with-an-explicit-basis, thm-schreier-index-rank-formula]
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

Let $H\le F(a,b)$ be the subgroup of reduced words with even exponent sum in
$a$. Then $H$ has index $2$ and free basis

$$\{b,\ a^2,\ aba^{-1}\}.$$

Consequently $\operatorname{rank}(H)=3$.

## Facts & Assumptions

**Given:** The subgroup $H\le F(a,b)$ of words with even exponent sum in $a$.

[L1] Nielsen-Schreier identifies a free basis from the nontrivial Schreier
generators of a Schreier system
([[thm-nielsen-schreier-with-an-explicit-basis]]).

[L2] The index-rank formula gives $\operatorname{rank}(H)=1+[F(a,b):H]$
([[thm-schreier-index-rank-formula]]).

## Verification

**Proof technique:** direct.

1.1 The two right cosets are $H$ and $Ha$, so $\mathcal T=\{1,a\}$ is a Schreier system. Its nontrivial Schreier generators are $s(1,b)=b$, $s(a,a)=a^2$, and $s(a,b)=aba^{-1}$, while $s(1,a)=1$. [given, construct]

2.1 By [L1], the three nontrivial generators from step 1.1 form a free basis of $H$. Since $[F(a,b):H]=2$, [L2] also gives $\operatorname{rank}(H)=1+2(2-1)=3$, agreeing with the computed basis. [L1, L2, step 1.1] ∎
