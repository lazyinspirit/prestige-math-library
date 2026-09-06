---
id: thm-absolutely-continuous-functions-have-integrable-derivatives
kind: theorem
title: "Absolutely continuous functions have integrable derivatives"
status: published
origin: pipeline
deps: [def-countable-choice, def-absolutely-continuous-function, thm-c1-lipschitz-ac-bv-hierarchy, thm-jordan-decomposition-for-bv-functions, thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]
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
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Lemma 6.3.7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume the Axiom of Countable Choice. If $F\in AC[a,b]$, then $F'$ exists almost everywhere on $(a,b)$ and belongs to
$L^1[a,b]$.

## Facts & Assumptions

**Given:** Countable choice and an absolutely continuous real function $F$ on $[a,b]$.

## Proof

**Proof technique:** direct.

1.1 The hierarchy [[thm-c1-lipschitz-ac-bv-hierarchy]] makes $F$ continuous and BV. By [[thm-jordan-decomposition-for-bv-functions]], write $F=P-N$ with $P,N$ nondecreasing. [given]

2.1 The monotone derivative theorem [[thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]] gives derivatives $P',N'$ almost everywhere and $P',N'\in L^1$. Hence $F'=P'-N'$ exists almost everywhere and is integrable. [step 1.1, algebra]

3.1 Degenerate intervals have no interior derivative assertion and the zero function in $L^1$, as required. [step 2.1] ∎
