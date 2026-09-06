---
id: ex-point-evaluation-functional-is-represented-by-a-dirac-measure
kind: example
title: "Point evaluation is represented by a Dirac measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral]
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

## Example

For $x\in X$, the functional $L_x:C_c(X)\to\mathbb R$ defined by $L_x(f)=f(x)$ is positive and is represented by the Dirac measure $\delta_x$.

## Facts & Assumptions

**Given:** $X$ is LCH and $x\in X$.

## Verification

**Proof technique:** direct.

1.1 Evaluation is linear, and $f\ge0$ implies $f(x)\ge0$, so $L_x$ is positive. [given]

1.2 For a nonnegative simple function $s$, the definition of its integral [given]
and the set formula for $\delta_x$ give $\int s\,d\delta_x=s(x)$. Increasing
simple approximation and monotone convergence extend this identity to every
nonnegative measurable function, and positive/negative parts extend it to
every integrable real function. In particular,
$\int_Xf\,d\delta_x=f(x)=L_x(f)$ for every $f\in C_c(X)$. [given]

2.1 The measure $\delta_x$ is finite on compact sets. If a Borel set $E$ [step 1.2]
contains $x$, every open superset has $\delta_x$-measure one; if it does not,
the open set $X\setminus\{x\}$ contains $E$ and has measure zero. Thus
$\delta_x$ is outer regular. Likewise an open set containing $x$ contains the
compact set $\{x\}$, while the empty compact set suffices otherwise, so
$\delta_x$ is inner regular on opens. Hence $\delta_x$ is Radon, and RMK
uniqueness identifies it as the representing measure. [step 1.2] ∎
