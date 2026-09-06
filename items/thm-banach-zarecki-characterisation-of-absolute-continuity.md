---
id: thm-banach-zarecki-characterisation-of-absolute-continuity
kind: theorem
title: "Banach--Zarecki characterisation of absolute continuity"
status: published
origin: pipeline
landmark: true
deps: [def-countable-choice, def-luzin-property-n-on-a-compact-interval, def-bounded-variation-and-total-variation, thm-jordan-decomposition-for-bv-functions, thm-bv-functions-are-differentiable-almost-everywhere, thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase, thm-absolutely-continuous-functions-have-luzin-property-n, lem-luzin-property-n-gives-an-integral-growth-estimate, thm-absolute-continuity-of-the-integral]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, Theorem 17"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

Assume the Axiom of Countable Choice. A function $F:[a,b]\to\mathbb R$ is
absolutely continuous if and only if it is continuous, has bounded variation,
and has Luzin's property $(N)$.

## Facts & Assumptions

**Given:** Countable choice and a real function $F$ on $[a,b]$.

## Proof

**Proof technique:** direct.

1.1 If $F$ is AC, its defining interval estimate directly gives continuity and bounded variation; it has $(N)$ by [[thm-absolutely-continuous-functions-have-luzin-property-n]]. [given]

1.2 Conversely assume continuity, BV, and $(N)$. The normalized Jordan decomposition [[thm-jordan-decomposition-for-bv-functions]] gives $F=F(a)+P-N$, and [[thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]] gives $F'=P'-N'\in L^1$ wherever both derivatives exist. The BV differentiability theorem [[thm-bv-functions-are-differentiable-almost-everywhere]] makes that a full-measure set. [given, algebra]

2.1 Apply the consequence of [[lem-luzin-property-n-gives-an-integral-growth-estimate]] to each interval $[u_j,v_j]$ in a finite disjoint family. Since continuity makes $F([u_j,v_j])$ an interval, $|F(v_j)-F(u_j)|\le\int_{u_j}^{v_j}|F'|$. The absolute continuity of the integral [[thm-absolute-continuity-of-the-integral]] now gives the finite-family AC condition. [step 1.2, algebra]

3.1 Thus the reverse implication holds; both directions include the singleton interval. [step 2.1] ∎
