---
id: ex-calibrated-coarsened-risk-score-is-low-information
kind: example
title: "A calibrated coarsened risk score loses information"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-probability-calibration
  - cor-any-feature-induces-calibrated-forecast
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Proposition 1"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
    - title: "Tilmann Gneiting and Adrian E. Raftery, Strictly Proper Scoring Rules, Prediction, and Estimation, Section 1"
      url: "https://web.archive.org/web/20170811030502id_/http://www.eecs.harvard.edu/cs286r/courses/fall12/papers/Gneiting07.pdf"
---

## Example

Give $X\in\{a,b,c\}$ and the binary label $Y\in\{0,1\}$ their full power-set sigma-algebras. Let $X$ be uniform on $\{a,b,c\}$ and let the conditional probabilities be $P(Y=1\mid X=a)=0.1$, $P(Y=1\mid X=b)=0.9$, and $P(Y=1\mid X=c)=0.75$. Coarsen the feature by $T(a)=T(b)=u$ and $T(c)=v$, and forecast $G=(P(Y=1\mid T),P(Y=0\mid T))$. Then $G(a)=G(b)=(0.5,0.5)$ and $G(c)=(0.75,0.25)$. This forecast is fully reliable, although it cannot distinguish $a$ from $b$, whose conditional label laws differ.

## Example references

[[def-probability-calibration]]: full reliability is the event-integral identity for every forecast-simplex event.

[[cor-any-feature-induces-calibrated-forecast]]: conditioning on a coarsened feature yields a fully reliable forecast.

## Facts & Assumptions

**Given:** The finite feature-label law, coarsening map, and forecast stated in the example.

[F1] Conditioning on any measurable feature gives a fully reliable forecast. [[cor-any-feature-induces-calibrated-forecast]]

[F2] The calibration condition uses the forecast itself as the conditional probability vector given the forecast. [[def-probability-calibration]]

## Verification

1.1 The probability of $T=u$ is $2/3$, and the conditional probability of $Y=1$ there is $(0.1+0.9)/2=0.5$; at $T=v$ it is $0.75$. Thus the forecast is exactly the conditional label distribution given $T$, and [F1] implies full reliability. Directly, each forecast value identifies $T$, so the conditional distribution of $Y$ given $G=(0.5,0.5)$ is $(0.5,0.5)$ and given $G=(0.75,0.25)$ is $(0.75,0.25)$, which is [F2]. [F1, F2, given, algebra]

2.1 The original feature values $a$ and $b$ have different conditional label laws, with success probabilities $0.1$ and $0.9$, but both map to the same forecast. Hence observing the forecast does not determine which of those feature values occurred, so the forecast discards information about $X$ while remaining calibrated. [given, step 1.1, algebra] ∎
