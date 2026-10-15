---
id: ex-heterogeneous-effects-late-differs-from-ate
kind: example
title: "With heterogeneous effects, LATE can differ from ATE"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - thm-wald-identifies-the-complier-average-effect
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §§16.3–16.4 and Technical Point 16.7, printed pp. 214–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), LATE and ATE discussion"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Example

Take four equally likely types: an always-taker with treatment effect $4$, a
never-taker with effect $4$, and two compliers with effects $1$ and $3$. Let
all $Y(0)=0$, let $Y(1)$ equal those effects, and let $Z$ be an independent fair
binary assignment. The model has consistency, exclusion, instrument
independence, relevance and monotonicity.

## Facts & Assumptions

**Given:** The four equally likely types and randomized assignment described in
the Example. Verify LATE, ATE and the Wald ratio.

[F1] ATE and the complier event-conditioned mean are defined from the potential
outcomes and principal strata. ([[def-principal-strata-and-late]])

[F2] Under the stated IV assumptions, the Wald ratio equals the complier
average effect. ([[thm-wald-identifies-the-complier-average-effect]])

## Verification

1.1 The complier event has probability $1/2$ and its two effects are $1$ and $3$, so $\operatorname{LATE}=2$. Averaging all four effects gives $\operatorname{ATE}=(4+4+1+3)/4=3$. [given, F1, algebra]

2.1 The always-taker and never-taker outcomes do not change across instrument arms. The two compliers each have probability $1/4$, so their treatment effects give reduced-form contrast $\tfrac14\cdot1+\tfrac14\cdot3=1$; the first-stage contrast is $1/2$. The Wald ratio is therefore $2$, equal to the LATE by [F2] but not to the population ATE. [F2, step 1.1, algebra] ∎

