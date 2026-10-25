---
id: def-positivity-for-discrete-treatment
kind: definition
title: "Positivity for discrete treatment"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: [def-axiom-of-choice, def-conditional-expectation-as-an-ae-class]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, 2020 (author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Strong Ignorability, UW–Madison STAT 992 lecture note"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp24/strong_ignorability.html"
---

## Definition

Let $A$ take values in a countable discrete set on a target probability space, and let $L$ be the baseline covariate random element. For a treatment value $a$ of interest, the conditional treatment probability is the almost-sure class

$$e_a=E[\mathbf 1_{\{A=a\}}\mid\sigma(L)],$$

using the conditional-expectation convention of [[def-conditional-expectation-as-an-ae-class]] under the [[def-axiom-of-choice]]. **Positivity for $a$ on the target population** means both $P(A=a)>0$ and $e_a>0$ almost surely under the target law of $L$. Positivity for a contrast is required at every treatment value in that contrast.

The almost-sure condition is relative to the target population: values of $L$ with zero target probability impose no condition. Strict positivity does not mean that $e_a$ is bounded away from zero. The marginal condition makes the observed treatment-stratum law $P(\,\cdot\mid A=a)$ available.
