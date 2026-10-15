---
id: alg-inverse-probability-weighting-for-a-causal-mean
kind: algorithm
title: "Inverse probability weighting for a causal mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-conditional-probability-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, updated 2026 author-hosted edition, Chapter 2, Technical Points 2.2–2.3"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "The Mathematics of Indirect Treatment Comparisons, Chapters 9–10, adjustment formulas and proofs"
      url: "https://choxos.github.io/Mathematics-of-ITC/chapters/part2/10-adjustment-methods.html"
---

## Definition

Let $Q$ be a probability law for an observed discrete or atomic treatment $A$, a covariate random element $L$, and a real-valued observed outcome $Y$. Fix an atom $a$ with $Q(A=a)>0$, let $\mathcal G=\sigma(L)$, and set
$$I_a=\mathbf 1_{\{A=a\}},\qquad e_a(L)=E_Q[I_a\mid\mathcal G].$$
Assume $e_a(L)>0$ $Q$-almost surely and $I_aY/e_a(L)\in L^1(Q)$. The **inverse-probability-weighted functional** at $a$ is
$$\Psi_{\mathrm{IPW}}(Q;a)=E_Q\!\left[\frac{I_aY}{e_a(L)}\right],$$
provided the displayed weighted variable is integrable. Its weight is the true population propensity $e_a(L)$, not an estimate.

The instructions are: form the event indicator $I_a$; take its conditional expectation given $\sigma(L)$ to obtain $e_a(L)$; divide $I_aY$ by this positive random variable; and integrate under $Q$. This defines a population functional only. It makes no assertion about finite-sample behavior, estimated propensities, or truncated weights.
