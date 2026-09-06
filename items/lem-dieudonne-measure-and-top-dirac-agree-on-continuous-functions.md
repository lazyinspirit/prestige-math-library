---
id: lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions
kind: lemma
title: "The Dieudonne measure and top-point Dirac mass agree on continuous functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-dieudonne-club-set-function-is-a-borel-measure, lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant, def-dirac-measure]
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

Assume the Axiom of Countable Choice. For the Dieudonne measure $\bar m$ on
$[0,\omega_1]$ and the Dirac measure $\delta_{\omega_1}$,
$$\int f\,d\bar m=f(\omega_1)=\int f\,d\delta_{\omega_1}$$
for every continuous real or complex $f$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the resulting extended club-set
probability measure $\bar m$.

[L1] Continuous functions on $[0,\omega_1]$ are eventually constant. ([[lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant]])

## Proof

**Proof technique:** direct.

1.1 By [L1], $f=c=f(\omega_1)$ on a tail $[\alpha,\omega_1]$. Its intersection with $Y=[0,\omega_1)$ contains a club, so its complement has $\bar m$-measure zero. Thus $f=c$ almost everywhere for $\bar m$. [L1]

2.1 Since both measures are probabilities, $\int f\,d\bar m=c$, while the defining property of a Dirac measure gives $\int f\,d\delta_{\omega_1}=f(\omega_1)=c$. [step 1.1] ∎
