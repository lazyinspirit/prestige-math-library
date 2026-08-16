---
id: ex-jacobi-symbol-by-the-euclidean-algorithm
kind: example
title: "Computing $(1111/8093)$ by the Euclidean Jacobi algorithm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-algorithm-for-jacobi-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 10, Example 1.6"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

The Euclidean Jacobi algorithm ([[thm-euclidean-algorithm-for-jacobi-symbol]]) evaluates

$$\left(\frac{1111}{8093}\right)=-1$$

without factoring $8093$. Its states $(\varepsilon,A,N)$ are

$$ (1,1111,8093),\ (1,8093,1111),\ (-1,1111,79),\ (-1,79,5),\ (-1,5,1). $$

## Facts & Assumptions

**Given:** The initial pair $(1111,8093)$ with odd positive denominator.

[L1] The Euclidean Jacobi algorithm terminates and returns $\left(\frac an\right)$ without factoring the odd denominator $n$ ([[thm-euclidean-algorithm-for-jacobi-symbol]]).

## Verification

**Proof technique:** direct.

1.1 The divisions and sign updates are $8093=7\cdot1111+316$, $316=2^2\cdot79$, $1111=14\cdot79+5$, $79=15\cdot5+4$, and $4=2^2$. The first swap has no sign change, removing either square power of $2$ has no sign change, and the swap of $79$ and $1111$ changes the sign because both are $3$ modulo $4$; the next denominator is $1$. After each complete update, these calculations give exactly the displayed state sequence. [L1, given, algebra]

2.1 The terminal sign is $-1$, and [L1] identifies it with $\left(\frac{1111}{8093}\right)$. No factorisation of $8093$ occurs in step 1.1. [step 1.1, L1] ∎
