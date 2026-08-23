---
id: ex-two-essentially-different-representations-force-compositeness
kind: example
title: "The representations $221=5^2+14^2=11^2+10^2$ recover the factors $13$ and $17$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-two-essentially-different-two-square-representations-factor-an-odd-integer]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.I.3 and Example E.II.3(a)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The normalized representations

$$221=5^2+14^2=11^2+10^2$$

feed the factorisation construction and recover $221=13\cdot17$.

## Facts & Assumptions

**Given:** The displayed representations of $221$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] For an odd integer, two essentially different normalized representations force a factorisation $N=PQ$ with $P,Q>1$ ([[lem-two-essentially-different-two-square-representations-factor-an-odd-integer]]).

## Verification

**Proof technique:** direct.

1.1 Both equalities are direct, and $(5,14)$ and $(11,10)$ are positive odd-even normalized pairs with $0<5<11$. [F1, algebra]

2.1 In the notation of [L1], the values $e=2$, $f=3$, $g=4$, $h=1$ give $eg-fh=5$, $fg+eh=14$, $eg+fh=11$, and $fg-eh=10$. [step 1.1, L1, algebra]

3.1 The resulting factors are $e^2+f^2=13$ and $g^2+h^2=17$, and $13\cdot17=221$. [step 2.1, F1, algebra] ∎
