---
id: fs-rmk-representing-measure-is-unique-among-all-borel-measures
kind: false-statement
title: "An RMK functional determines every Borel representing measure uniquely"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-uniqueness-among-radon-measures, lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions]
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

The assertion that equality of all $C_c$ integrals determines an arbitrary Borel representing measure is false without regularity.

## Facts & Assumptions

**Given:** $X=[0,\omega_1]$, the Dieudonne measure $\bar m$, and $\delta_{\omega_1}$.

[L1] These measures have equal integrals on continuous functions. ([[lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions]])

## Refutation

**Proof technique:** counterexample.

1.1 Compactness gives $C_c(X)=C(X)$, so [L1] says that $\bar m$ and $\delta_{\omega_1}$ represent the same functional on $C_c(X)$. [L1]

2.1 They are distinct: for $Y=[0,\omega_1)$, $\bar m(Y)=1$ whereas $\delta_{\omega_1}(Y)=0$. Thus uniqueness holds only in the stated Radon class. [given] ∎
