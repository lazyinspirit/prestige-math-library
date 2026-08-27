---
id: ex-kernel-of-the-exponent-sum-map
kind: example
title: "The kernel of an exponent-sum map in a free group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-schreier-transversal-and-schreier-system, thm-nielsen-schreier-with-an-explicit-basis]
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

Let $\phi:F(a,b)\to\mathbb Z$ send $a\mapsto1$ and $b\mapsto0$, and let
$H=\ker\phi$. Then the family

$$\{a^n b a^{-n}:n\in\mathbb Z\}$$

is a free basis of $H$.

## Facts & Assumptions

**Given:** The kernel $H=\ker\phi$ of the exponent-sum map above.

[L1] A Schreier system is a family of reduced right-coset representatives
closed under initial segments ([[def-schreier-transversal-and-schreier-system]]).

[L2] Nielsen-Schreier promotes the nontrivial Schreier generators of such a
system to a free basis ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Verification

**Proof technique:** direct.

1.1 The right cosets of $H$ are $Ha^n$ for $n\in\mathbb Z$, so $\mathcal T=\{a^n:n\in\mathbb Z\}$ is a Schreier system by [L1]. [L1, given, construct]

2.1 For every $n\in\mathbb Z$, one has $s(a^n,a)=1$ and $s(a^n,b)=a^n b a^{-n}$. Thus the nontrivial Schreier generators are exactly the displayed conjugates. [step 1.1, algebra]

3.1 By [L2], those generators form a free basis of $H$. [L2, step 2.1] ∎
