---
id: ex-weak-first-stage-wald-ratio-sensitivity
kind: example
title: "A small first stage magnifies reduced-form changes"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: [def-wald-ratio]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §§16.2 and 16.5, printed pp. 212–222"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), instrument strength and LATE sections"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Example

Consider two hypothetical pairs of observed mean contrasts. In each, the
first-stage contrast is $\Delta_A=0.02$; the reduced-form contrasts are
$\Delta_Y=0.06$ and $\Delta_Y=0.07$. The ratio formula gives $3$ and $3.5$,
respectively. This is arithmetic illustrating the ratio's sensitivity to a
small denominator; it makes no claim about a sampling distribution, estimator
variance, or causal validity.

## Facts & Assumptions

**Given:** $\Delta_A=0.02$ and, in turn, $\Delta_Y=0.06$ or $0.07$. Compute
the two Wald ratios and their difference.

[F1] The Wald ratio is $\Delta_Y/\Delta_A$ when $\Delta_A\ne0$.
([[def-wald-ratio]])

## Verification

1.1 Since $0.02\ne0$, the two ratios are defined by [F1] and equal $0.06/0.02=3$ and $0.07/0.02=3.5$. [given, F1, algebra]

2.1 Their difference is $0.5$, exactly the reduced-form change $0.01$ divided by the common first stage $0.02$. The calculation is a property of the ratio only and implies no sampling or causal conclusion. [given, step 1.1, algebra] ∎

