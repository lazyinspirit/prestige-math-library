---
id: def-tight-family-of-integrable-functions
kind: definition
title: "A tight family of integrable functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set]
verification:
  precheck: n/a
sources:
  references:
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., Section 5.1"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. A family
$\mathcal F \subseteq L^1(\mu)$ of integrable real-valued functions is
**tight** when for every $\varepsilon>0$ there is a measurable set
$E \in \mathcal A$ with $\mu(E)<+\infty$ such that

$$\sup_{f \in \mathcal F}\int_{X\setminus E}|f|\,d\mu<\varepsilon.$$

On a finite measure space every family is automatically tight by taking
$E=X$, so tightness matters only on infinite spaces.
