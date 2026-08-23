---
id: cor-sums-of-two-squares-closed-under-products
kind: corollary
title: "Sums of two squares are closed under products"
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
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, §5.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

The product of two nonnegative integers representable as sums of two squares is again representable as a sum of two squares ([[def-sum-of-two-squares-representation]]).

## Facts & Assumptions

**Given:** Nonnegative integers $m,n$, each representable as a sum of two squares.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] For all integers $a,b,c,d$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2$ ([[lem-brahmagupta-fibonacci-two-square-identity]]).

## Proof

**Proof technique:** direct.

1.1 Choose integers $a,b,c,d$ with $m=a^2+b^2$ and $n=c^2+d^2$. [given, F1, choose]

2.1 Then $mn=(ac-bd)^2+(ad+bc)^2$ by the two-square identity. [step 1.1, L1, algebra]

3.1 The displayed integer pair represents $mn$ by [F1]. This also covers a zero factor, for which the pair $(0,0)$ represents zero and the same formula gives the zero product. [step 2.1, F1] ∎
