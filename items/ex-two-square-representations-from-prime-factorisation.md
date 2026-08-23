---
id: ex-two-square-representations-from-prime-factorisation
kind: example
title: "Prime factorisation gives two representations of $221$ as a sum of two squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-brahmagupta-fibonacci-two-square-identity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.II.3(a)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The factorisation $221=13\cdot17$ and the two sign variants in the two-square identity give

$$221=10^2+11^2=14^2+5^2.$$

## Facts & Assumptions

**Given:** The integers $13$, $17$, and their product $221$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] For all integers $a,b,c,d$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2$ ([[lem-brahmagupta-fibonacci-two-square-identity]]).

## Verification

**Proof technique:** direct.

1.1 Directly, $13=2^2+3^2$ and $17=1^2+4^2$. [F1, algebra]

2.1 The first sign variant in [L1] gives $221=(-10)^2+11^2=10^2+11^2$, since $2\cdot1-3\cdot4=-10$ and $2\cdot4+3\cdot1=11$. [step 1.1, L1, algebra]

2.2 The second sign variant gives $221=14^2+5^2$, since $2\cdot1+3\cdot4=14$ and $2\cdot4-3\cdot1=5$. [step 1.1, L1, algebra]

3.1 Both pairs satisfy [F1]. They are essentially different because the unordered absolute-coordinate sets $\{10,11\}$ and $\{5,14\}$ differ. [step 2.1, step 2.2, F1, algebra] ∎
