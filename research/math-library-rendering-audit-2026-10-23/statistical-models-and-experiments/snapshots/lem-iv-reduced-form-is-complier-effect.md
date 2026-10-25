---
id: lem-iv-reduced-form-is-complier-effect
kind: lemma
title: "The monotone IV reduced form is a complier-weighted effect"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - lem-iv-observed-contrasts-equal-potential-outcome-contrasts
  - lem-binary-monotonicity-excludes-defiers
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, Technical Point 16.7, printed pp. 224–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Proof of Identification of the LATE"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Statement

Under consistency, exclusion, joint instrument independence and monotonicity
in the binary IV setup, with $\tau=Y(1)-Y(0)$ and $C=\{A(1)>A(0)\}$,
$$E[Y\mid Z=1]-E[Y\mid Z=0]=E[\mathbf1_C\tau].$$
If $P(C)>0$, the right-hand side is $P(C)E[\tau\mid C]$.

## Facts & Assumptions

**Given:** A binary IV setup with consistency, exclusion and joint instrument
independence, and monotonicity. Prove the reduced-form identity.

[F1] The observed reduced-form contrast equals
$E[(A(1)-A(0))(Y(1)-Y(0))]$ under consistency, exclusion and joint instrument
independence. ([[lem-iv-observed-contrasts-equal-potential-outcome-contrasts]])

[F2] Under monotonicity the defier event is null and
$A(1)-A(0)=\mathbf1_C$ almost surely.
([[lem-binary-monotonicity-excludes-defiers]])

[F3] For an event $C$ of positive probability, the event-conditioned mean is
$E[\tau\mid C]=E[\mathbf1_C\tau]/P(C)$.
([[def-instrumental-variable-potential-outcomes]])

## Proof

1.1 By [F1], the observed reduced-form contrast is $E[(A(1)-A(0))\tau]$. By [F2], replacing the treatment contrast by $\mathbf1_C$ almost surely gives $E[\mathbf1_C\tau]$. [F1, F2, algebra]

2.1 If $P(C)>0$, the definition in [F3] rearranges to $E[\mathbf1_C\tau]=P(C)E[\tau\mid C]$. If $P(C)=0$, then $\mathbf1_C=0$ almost surely, so both sides of the first identity in the Statement are $0$; the conditional mean is simply not asserted in that case. [F3, step 1.1, algebra] ∎

