---
id: def-wald-ratio
kind: definition
title: "Binary-instrument Wald ratio"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps: [def-instrumental-variable-potential-outcomes]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.2, printed pp. 212–214"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Proof of Identification of the LATE"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2, journal pp. 122–123"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: n/a
---

## Definition

For a setup of [[def-instrumental-variable-potential-outcomes]] with integrable
observed outcome $Y$, define the reduced-form outcome contrast and first-stage
treatment contrast by
$$\Delta_Y:=E[Y\mid Z=1]-E[Y\mid Z=0],\qquad \Delta_A:=E[A\mid Z=1]-E[A\mid Z=0].$$
Whenever $\Delta_A\ne0$, the **Wald ratio** is the observed-data functional
$$\psi_W:=\frac{\Delta_Y}{\Delta_A}.$$
This definition alone does not assert that the ratio equals a treatment effect.

