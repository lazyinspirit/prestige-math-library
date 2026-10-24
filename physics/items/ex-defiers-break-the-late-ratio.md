---
id: ex-defiers-break-the-late-ratio
kind: example
title: "Defiers can make the Wald ratio differ from the complier effect"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - lem-iv-observed-contrasts-equal-potential-outcome-contrasts
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
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Compliance Types and LATE proof"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Example

Take a population with type probabilities $0.2$ always-takers, $0.3$
never-takers, $0.4$ compliers, and $0.1$ defiers. Independently randomize
$Z$ with probabilities $1/2,1/2$. Let $Y(0)=0$ for all types and let
$Y(1)=0,0,1,3$ for always-takers, never-takers, compliers and defiers,
respectively. Set $Y(a,z)=Y(a)$ and observe by consistency. Exclusion and
instrument independence hold, but monotonicity fails.

## Facts & Assumptions

**Given:** The finite type distribution in the Example. Compute the two
observed contrasts, the Wald ratio and the complier mean effect.

[F1] Consistency, exclusion, joint instrument independence, event-conditioned
means and the four principal strata are defined in the IV setup.
([[def-instrumental-variable-potential-outcomes]], [[def-principal-strata-and-late]])

[F2] The observed outcome contrast equals the expectation of the potential
outcome difference weighted by $A(1)-A(0)$ under the core IV assumptions.
([[lem-iv-observed-contrasts-equal-potential-outcome-contrasts]])

[F3] The Wald ratio divides the outcome contrast by the first-stage contrast.
([[def-wald-ratio]])

## Verification

1.1 The first-stage contrast is $P(C)-P(D)=0.4-0.1=0.3$. By [F2], the outcome contrast is $E[(A(1)-A(0))(Y(1)-Y(0))]=0.4\cdot1-0.1\cdot3=0.1$; always-takers and never-takers contribute zero. [given, F1, F2, algebra]

2.1 The Wald ratio is $0.1/0.3=1/3$ by [F3]. The complier effect is $1$, whereas the defier contribution enters the numerator with a negative sign. Thus the LATE conclusion cannot be used without monotonicity. [F1, F3, step 1.1, algebra] ∎

