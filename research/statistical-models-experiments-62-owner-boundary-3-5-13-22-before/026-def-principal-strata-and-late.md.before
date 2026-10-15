---
id: def-principal-strata-and-late
kind: definition
title: "Binary-instrument principal strata and LATE"
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
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.4 and Technical Point 16.7, printed pp. 217–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Compliance Types and LATE sections"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: n/a
---

## Definition

In the setup of [[def-instrumental-variable-potential-outcomes]], the four
possible joint values of $(A(0),A(1))$ define the following **principal
strata** (subsets of the target population):

- **Always-takers:** $A(0)=A(1)=1$.
- **Never-takers:** $A(0)=A(1)=0$.
- **Compliers:** $A(0)=0$ and $A(1)=1$; write this event as
  $C=\{A(1)>A(0)\}$.
- **Defiers:** $A(0)=1$ and $A(1)=0$.

When the outcomes $Y(0),Y(1)$ are integrable, the **average treatment effect**
is $\operatorname{ATE}:=E[Y(1)-Y(0)]$. If $P(C)>0$, the **local average
treatment effect** (**LATE**) is
$$\tau_C:=E[Y(1)-Y(0)\mid C].$$
Complier status depends on the joint pair of potential treatments and is not
defined by the single treatment value observed for a unit. Monotonicity excludes
defiers; it does not assert that the LATE equals the population ATE.

