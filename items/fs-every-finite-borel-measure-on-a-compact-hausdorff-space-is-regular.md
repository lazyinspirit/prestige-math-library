---
id: fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular
kind: false-statement
title: "Every finite Borel measure on a compact Hausdorff space is regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-dieudonne-club-set-function-is-a-borel-measure, thm-ordinal-spaces-and-compactness, def-regular-borel-measure-on-an-lch-space]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assuming the Axiom of Countable Choice, the assertion “every finite Borel
measure on a compact Hausdorff space is regular” is false.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and $X=[0,\omega_1]$ with the
resulting Dieudonne probability measure $\bar m$.

## Refutation

**Proof technique:** counterexample.

1.1 The space $X$ is compact Hausdorff and $\bar m(X)=1$. For the open Borel set $Y=[0,\omega_1)$, one has $\bar m(Y)=1$, while every compact $K\subseteq Y$ is bounded and has $\bar m(K)=0$. [given]

2.1 Hence $\bar m$ is not even inner regular on the open set $Y$, and therefore is not regular. [step 1.1] ∎
