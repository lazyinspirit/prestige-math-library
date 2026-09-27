---
id: ex-a-trigonometric-polynomial-in-the-wiener-algebra
kind: example
title: "A trigonometric polynomial in the Wiener algebra"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-wiener-algebra-of-the-circle]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (ex-a-trigonometric-polynomial-in-the-wiener-algebra). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Assume the Axiom of Countable Choice for the Wiener-algebra convention. For $p(x)=2-3e_1(x)+ie_{-2}(x)$, the only nonzero coefficients are $\widehat p(0)=2$, $\widehat p(1)=-3$, and $\widehat p(-2)=i$. Hence $p\in A(\mathbb T)$ and $\|p\|_A=6$. The finite coefficient calculation itself is choice-free by ordinary Riemann integration.

## Facts & Assumptions

**Given:** Countable Choice, the displayed trigonometric polynomial, and the definition [[def-wiener-algebra-of-the-circle]].

## Verification

1.1 Character orthogonality extracts exactly the three displayed coefficients and makes all others zero. [given, algebra]

2.1 Their absolute values sum to $2+3+1=6$, so the defining coefficient series is summable. [step 1.1, algebra] ∎
