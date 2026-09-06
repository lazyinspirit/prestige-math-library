---
id: cex-the-cantor-function-fails-luzin-property-n
kind: counterexample
title: "The Cantor function fails Luzin's property $(N)$"
status: draft
origin: pipeline
deps: [def-countable-choice, def-luzin-property-n-on-a-compact-interval, thm-banach-zarecki-characterisation-of-absolute-continuity]
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
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §6.3, Exercise 5"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement refuted

Every continuous function of bounded variation has Luzin's property $(N)$.

## Facts & Assumptions

**Given:** Countable choice and the standard Cantor--Lebesgue function $C:[0,1]\to[0,1]$.

## Counterexample

**Proof technique:** direct.

1.1 $C$ is continuous, nondecreasing, and maps the ternary Cantor set $K$ onto $[0,1]$. [given]

2.1 The set $K$ has Lebesgue measure zero, but $\lambda(C(K))=1$. [step 1.1]

3.1 Thus $C$ fails $(N)$ as defined in [[def-luzin-property-n-on-a-compact-interval]]; Banach--Zarecki confirms it cannot be AC. [step 2.1] ∎
