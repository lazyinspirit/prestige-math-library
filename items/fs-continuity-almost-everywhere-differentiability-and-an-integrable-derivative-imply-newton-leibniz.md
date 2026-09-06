---
id: fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz
kind: false-statement
title: "Continuity, almost-everywhere differentiability, and an integrable derivative imply Newton--Leibniz"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
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

If $F$ is continuous, differentiable almost everywhere, and $F'\in L^1$, then
$F(x)-F(a)=\int_a^xF'$ for every $x$.

## Facts & Assumptions

**Given:** The standard Cantor--Lebesgue function $C:[0,1]\to[0,1]$.

## Refutation

**Proof technique:** direct.

1.1 The function $C$ is continuous, satisfies $C(0)=0$ and $C(1)=1$, and has derivative $0$ almost everywhere; thus $C'\in L^1[0,1]$. [given]

2.1 Its endpoint increment is $1$, whereas $\int_0^1 0=0$. [step 1.1, algebra]

3.1 Thus the asserted every-$x$ reconstruction formula fails without an additional hypothesis such as AC. [step 2.1] ∎
