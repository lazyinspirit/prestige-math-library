---
id: cex-distinct-borel-measures-can-represent-the-same-c-c-functional
kind: counterexample
title: "Distinct Borel measures can represent the same C_c functional"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions, fs-rmk-representing-measure-is-unique-among-all-borel-measures, cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular]
proof_strategy: direct
verification:
  audited: 2026-09-07
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

Without a Radon or regularity hypothesis, a functional on $C_c(X)$ need not determine its Borel representing measure uniquely.

## Facts & Assumptions

**Given:** On $X=[0,\omega_1]$, let $\bar m$ be the Dieudonne measure and let $\delta=\delta_{\omega_1}$.

## Counterexample

**Proof technique:** direct.

1.1 Since $X$ is compact, $C_c(X)=C(X)$. Eventual constancy gives $\int f\,d\bar m=f(\omega_1)=\int f\,d\delta$ for every $f\in C_c(X)$. [given]

2.1 Yet for $Y=[0,\omega_1)$, $\bar m(Y)=1$ and $\delta(Y)=0$. Thus the two Borel measures are distinct representations of the same functional; the missing condition is regularity. [given] ∎
