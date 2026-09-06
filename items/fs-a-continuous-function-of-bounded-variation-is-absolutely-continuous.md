---
id: fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous
kind: false-statement
title: "A continuous function of bounded variation is absolutely continuous"
status: draft
origin: pipeline
deps: [def-countable-choice, thm-absolutely-continuous-functions-have-luzin-property-n]
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
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Exercise 5"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Every continuous function of bounded variation on a compact interval is
absolutely continuous.

## Facts & Assumptions

**Given:** Countable Choice, the standard Cantor--Lebesgue function $C:[0,1]\to[0,1]$, and the ternary Cantor set $K$.

## Refutation

**Proof technique:** direct.

1.1 The function $C$ is continuous and nondecreasing, hence has bounded variation, and $C(K)=[0,1]$. [given]

2.1 It maps the null Cantor set onto $[0,1]$, so it fails property $(N)$. [step 1.1]

3.1 Absolute continuity would imply $(N)$ by [[thm-absolutely-continuous-functions-have-luzin-property-n]]. Therefore $C$ is a continuous BV function that is not AC, refuting the statement. [step 2.1] ∎
