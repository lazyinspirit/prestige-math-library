---
id: def-positive-linear-functional-on-c-c
kind: definition
title: "Positive linear functionals on $C_c(X)$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.2"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

A real-linear map $\Lambda:C_c(X;\mathbb R)\to\mathbb R$ is **positive** if
$f\ge0$ pointwise implies $\Lambda(f)\ge0$. This is a real $C_c$ notion; no
global uniform-norm bound is part of the definition. The bounded complex
$C_0(X)$ result is stated separately below.
