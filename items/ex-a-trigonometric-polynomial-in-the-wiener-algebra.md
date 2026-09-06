---
id: ex-a-trigonometric-polynomial-in-the-wiener-algebra
kind: example
title: "A trigonometric polynomial in the Wiener algebra"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-wiener-algebra-of-the-circle]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $p(x)=2-3e_1(x)+ie_{-2}(x)$, the only nonzero coefficients are $\widehat p(0)=2$, $\widehat p(1)=-3$, and $\widehat p(-2)=i$. Hence $p\in A(\mathbb T)$ and $\|p\|_A=6$.

## Facts & Assumptions

**Given:** The displayed trigonometric polynomial and the definition [[def-wiener-algebra-of-the-circle]].

## Verification

1.1 Character orthogonality extracts exactly the three displayed coefficients and makes all others zero. [given, algebra]

2.1 Their absolute values sum to $2+3+1=6$, so the defining coefficient series is summable. [step 1.1, algebra] ∎
