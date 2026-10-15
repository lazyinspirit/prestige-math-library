---
id: def-potential-outcomes-and-consistency
kind: definition
title: "Potential outcomes and consistency"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
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

Fix a target population with probability law $P$, a real outcome, and a nonempty countable discrete set $\mathcal A$ of treatment versions. A treatment version $a\in\mathcal A$ is a specified intervention protocol, not just a treatment label. The **potential outcome** $Y^a$ is the real random variable giving the outcome for a unit in the target population under version $a$. Write $A$ for the observed treatment assignment or receipt, with values in $\mathcal A$, and $Y$ for the observed outcome. The **observed potential outcome** is the measurable random variable

$$Y^A=\sum_{a\in\mathcal A}\mathbf 1_{\{A=a\}}Y^a,$$

where the countable sum has at most one nonzero summand at each sample point. **Consistency** is the assumption $Y=Y^A$ $P$-almost surely. It links the observed outcome to the potential outcome for the received version; it does not assert that treatment assignment is unconfounded.

The **full-data law** is the joint law of the potential-outcome family, $A$, any baseline covariate random element $L$, and $Y$. The **observed-data law** is its marginal law of $(A,L,Y)$. A target population, outcome, intervention protocol, and contrast must be fixed before the associated causal target is specified. If interference between units matters, the version or treatment regime must include the relevant assignment or exposure of other units; the notation $Y^a$ by itself does not assert no interference.
