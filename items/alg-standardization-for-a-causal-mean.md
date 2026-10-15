---
id: alg-standardization-for-a-causal-mean
kind: algorithm
title: "Standardization for a causal mean"
status: published
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

Let $Q$ be a probability law for an observed discrete or atomic treatment $A$, a covariate random element $L$, and a real-valued observed outcome $Y$. Fix an atom $a$ with $Q(A=a)>0$, let $\mathcal G=\sigma(L)$, and define
$$I_a=\mathbf 1_{\{A=a\}},\qquad e_a(L)=E_Q[I_a\mid\mathcal G].$$
Assume $e_a(L)>0$ $Q$-almost surely and $I_aY\in L^1(Q)$. Define
$$q_a(L)=E_Q[I_aY\mid\mathcal G],\qquad m_a(L)=\frac{q_a(L)}{e_a(L)}.$$
The **standardization functional** at $a$ is
$$\Psi_{\mathrm{std}}(Q;a)=E_Q[m_a(L)],$$
provided $m_a(L)$ is integrable. The numerator and denominator are conditional-expectation classes; the ratio is defined almost surely because the denominator is positive. In conventional notation $m_a(L)$ is $E_Q[Y\mid A=a,L]$, and the displayed expectation averages that treatment-specific conditional mean over the target law of $L$.

When $L$ has discrete support, this is $\sum_\ell E_Q[Y\mid A=a,L=\ell]\,Q(L=\ell)$. For general $L$ we use the version-free conditional-expectation class above and integrate it under $Q$; no value of a regression function is chosen at a null covariate stratum.

This is a population functional of the observed law and the true conditional treatment probability. It is not an algorithm for estimating a propensity from a finite sample.
