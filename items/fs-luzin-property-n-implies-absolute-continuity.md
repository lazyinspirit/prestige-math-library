---
id: fs-luzin-property-n-implies-absolute-continuity
kind: false-statement
title: "Luzin's property $(N)$ implies absolute continuity"
status: draft
origin: pipeline
deps: [def-luzin-property-n-on-a-compact-interval, thm-c1-lipschitz-ac-bv-hierarchy]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.4"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

A function with Luzin's property $(N)$ is absolutely continuous.

## Facts & Assumptions

**Given:** Define $F(0)=0$ and $F(x)=x\sin(1/x)$ for $0<x\le1$.

## Refutation

**Proof technique:** direct.

1.1 The function $F$ is $C^1$ on every interval $[1/(n+1),1/n]$, hence Lipschitz there. These intervals and the singleton $\{0\}$ form a countable cover, so $F$ maps every null set to a null set and has property $(N)$ as in [[def-luzin-property-n-on-a-compact-interval]]. [given, algebra]

2.1 Since $F'(x)=\sin(1/x)-\cos(1/x)/x$ for $x>0$, alternating subintervals give infinite variation. Thus $F$ is not BV. [step 1.1, algebra]

3.1 Every absolutely continuous function on a compact interval is BV by [[thm-c1-lipschitz-ac-bv-hierarchy]]. Hence this property-$(N)$ function is not AC. [step 2.1] ∎
