---
id: ex-truncation-iteration-for-a-recursive-specification
kind: example
title: "Iterating a recursive specification to determine coefficients through degree $6$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-order-raising-recursive-specifications-have-unique-solutions, cor-plane-trees-satisfy-t-equals-z-over-one-minus-t]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the plane-tree equation

$$T=\frac{x}{1-T},$$

start with $T_0:=0$ and define $T_{j+1}:=x/(1-T_j)$, truncating modulo $x^7$.
The iterates are

$$T_1=x,$$

$$T_2=x+x^2+x^3+x^4+x^5+x^6,$$

$$T_3=x+x^2+2x^3+4x^4+8x^5+16x^6,$$

$$T_4=x+x^2+2x^3+5x^4+13x^5+34x^6,$$

$$T_5=x+x^2+2x^3+5x^4+14x^5+41x^6,$$

$$T_6=x+x^2+2x^3+5x^4+14x^5+42x^6.$$

So the coefficients through degree $6$ are $1,1,2,5,14,42$.

## Facts & Assumptions

**Given:** The plane-tree series is the unique fixed point of $Y \mapsto x/(1-Y)$ ([[cor-plane-trees-satisfy-t-equals-z-over-one-minus-t]]), and order-raising recursion converges coefficientwise by successive truncation ([[thm-order-raising-recursive-specifications-have-unique-solutions]]).

## Verification

**Proof technique:** direct.

1.1 Substituting each displayed iterate into $x/(1-Y)$ and truncating modulo $x^7$ gives the next one in the list. [given, algebra]

2.1 By the sixth iterate, every coefficient through degree $6$ has stabilized, so the unique fixed point begins $T(x)=x+x^2+2x^3+5x^4+14x^5+42x^6+\cdots$. [step 1.1, given] ∎
