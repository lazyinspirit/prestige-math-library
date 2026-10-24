---
id: ex-randomized-encouragement-late-calculation
kind: example
title: "A finite randomized encouragement example"
status: published
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
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.4 and Technical Point 16.7, printed pp. 217–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), randomized encouragement example and LATE proof"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Example

Take four equally likely unit types: one always-taker with $(A(0),A(1))=(1,1)$
and $(Y(0),Y(1))=(0,4)$; one never-taker with $(0,0)$ and $(0,4)$; and two
compliers with $(0,1)$ and outcome pairs $(0,1)$ and $(0,3)$. Independently
assign $Z$ with probabilities $1/2,1/2$, impose consistency and exclusion, and
let $A=A(Z)$ and $Y=Y(A)$. The model has no defiers, but the effects vary by
type.

## Facts & Assumptions

**Given:** The finite law described in the Example. Verify its first stage,
reduced form, LATE, ATE and Wald ratio.

[F1] The binary IV setup defines consistency, exclusion, independence,
relevance, the event-conditioned means, and the four principal strata.
([[def-instrumental-variable-potential-outcomes]], [[def-principal-strata-and-late]])

[F2] Under the stated relevance, exclusion, independence, consistency and
monotonicity assumptions, the Wald ratio equals the complier mean effect.
([[thm-wald-identifies-the-complier-average-effect]])

## Verification

1.1 On the product of the four equally likely types and the fair assignment, $Z$ is independent of the potential values. The two compliers have effects $1$ and $3$, while the always-taker and never-taker both have treatment effect $4$; thus $P(C)=1/2$, $\operatorname{LATE}=(1+3)/2=2$, and $\operatorname{ATE}=(4+4+1+3)/4=3$. [given, F1, construct, algebra]

2.1 The treatment rate is $3/4$ under $Z=1$ and $1/4$ under $Z=0$, so $\Delta_A=1/2$. The outcome mean is $2$ under $Z=1$ and $1$ under $Z=0$, so $\Delta_Y=1$. Therefore $\psi_W=1/(1/2)=2$, agreeing with the LATE in [F2] and differing from the ATE. [F1, F2, step 1.1, algebra] ∎

