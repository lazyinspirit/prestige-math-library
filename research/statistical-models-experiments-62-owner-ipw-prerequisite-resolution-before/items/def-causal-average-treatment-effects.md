---
id: def-causal-average-treatment-effects
kind: definition
title: "Average and conditional average treatment effects"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps: [def-axiom-of-choice, def-potential-outcomes-and-consistency, def-conditional-expectation-as-an-ae-class]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, 2020 (author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Strong Ignorability, UW–Madison STAT 992 lecture note"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp24/strong_ignorability.html"
---

## Definition

In a fixed target population with two specified treatment versions $0$ and $1$ and integrable potential outcomes $Y^0,Y^1$ from [[def-potential-outcomes-and-consistency]], the **average treatment effect (ATE)** is the target-population mean contrast $E[Y^1-Y^0]$. For a baseline covariate random element $L$, the **conditional average treatment effect (CATE) given $L$** is the conditional-expectation almost-sure class

$$E[Y^1-Y^0\mid\sigma(L)],$$

using the conditional-expectation convention of [[def-conditional-expectation-as-an-ae-class]] under the [[def-axiom-of-choice]]. Thus a CATE is determined only up to equality almost surely under the target law of $L$; a pointwise value at a null covariate value is not specified by this definition. The ATE is the mean of the individual contrast, not an assertion that both potential outcomes are observed for any unit.
