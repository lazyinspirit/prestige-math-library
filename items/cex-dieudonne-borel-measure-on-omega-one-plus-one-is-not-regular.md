---
id: cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular
kind: counterexample
title: "The Dieudonne Borel measure on [0, omega_1] is not regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-dieudonne-club-set-function-is-a-borel-measure, thm-ordinal-spaces-and-compactness, fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular]
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

## Statement refuted

Assuming the Axiom of Countable Choice, a finite Borel measure on a compact
Hausdorff space need not be regular.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $X=[0,\omega_1]$, and the resulting
Dieudonne Borel probability measure $\bar m$.

## Counterexample

**Proof technique:** direct.

1.1 The space $X$ is compact Hausdorff and $\bar m(X)=1$. The open Borel subset $Y=[0,\omega_1)$ contains a club, so $\bar m(Y)=1$. [given]

2.1 Every compact $K\subseteq Y$ is bounded below $\omega_1$, hence contains no club and has $\bar m(K)=0$. Therefore $Y$ cannot be approximated from within by compact sets, and $\bar m$ is not regular. [given] ∎
