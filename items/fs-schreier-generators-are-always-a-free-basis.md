---
id: fs-schreier-generators-are-always-a-free-basis
kind: false-statement
title: "FALSE: the raw Schreier generators are always a free basis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-schreier-generator, def-schreier-transversal-and-schreier-system, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
---

## Statement

The full list of Schreier generators attached to a transversal is always a free
basis.

## Facts & Assumptions

**Given:** The false claim above.

[L1] Schreier generators are the elements $s(t,x)=tx\,\overline{tx}^{-1}$ ([[def-schreier-generator]]).

[L2] A Schreier system is a transversal closed under initial segments ([[def-schreier-transversal-and-schreier-system]]).

[L3] Nielsen-Schreier keeps only the nontrivial generators from a Schreier system ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Refutation

**Proof technique:** direct.

1.1 Let $H\le F(a,b)$ be the index-two subgroup consisting of words with even exponent sum in $a$, and use the Schreier system $\mathcal T=\{1,a\}$ for its two right cosets. [L2, given, construct]

2.1 The raw Schreier generators are $s(1,a)=1$, $s(1,b)=b$, $s(a,a)=a^2$, and $s(a,b)=aba^{-1}$. So the full list already contains the identity element. [L1, step 1.1, algebra]

3.1 A free basis cannot contain the identity, whereas [L3] keeps only the nontrivial generators and thereby produces the actual basis $\{b,a^2,aba^{-1}\}$. Hence the raw list is not always a free basis. [L3, step 2.1] ∎
