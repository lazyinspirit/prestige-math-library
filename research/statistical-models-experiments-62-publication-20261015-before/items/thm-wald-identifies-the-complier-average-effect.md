---
id: thm-wald-identifies-the-complier-average-effect
kind: theorem
title: "The Wald ratio identifies the complier average treatment effect"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - lem-iv-first-stage-is-complier-proportion
  - lem-iv-reduced-form-is-complier-effect
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.4 and Technical Point 16.7, printed pp. 217–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Compliance Types, LATE and its complete proof"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2–§3.5.4, journal pp. 122–126"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: pass
---

## Statement

Let $\Theta$ be a nonempty class of full-data laws satisfying the binary IV
setup, consistency, exclusion, joint instrument independence, relevance and
monotonicity. Each $\theta\in\Theta$ induces the observed-data law $P_\theta$
of $(Z,A,Y)$. Define the estimand
$\psi_C(\theta)=E_\theta[Y(1)-Y(0)\mid C]$, where
$C=\{A(1)>A(0)\}$. Then the Wald ratio is defined and
$$\psi_W(P_\theta)=\frac{E_\theta[Y\mid Z=1]-E_\theta[Y\mid Z=0]}{E_\theta[A\mid Z=1]-E_\theta[A\mid Z=0]}=\psi_C(\theta).$$
Thus the LATE is identifiable in the induced observed-data model. This does
not assert that the LATE equals the population ATE.

## Facts & Assumptions

**Given:** The binary IV setup with consistency, exclusion, joint instrument
independence, relevance and monotonicity. The observed law is the law of
$(Z,A,Y)$ induced by each full-data law in $\Theta$. Prove the Wald equality
and identifiability of $\psi_C$.

[F1] The first-stage contrast equals $P(C)$ under monotonicity and is strictly
positive under relevance. ([[lem-iv-first-stage-is-complier-proportion]])

[F2] The reduced-form contrast equals $P(C)E[Y(1)-Y(0)\mid C]$ when
$P(C)>0$. ([[lem-iv-reduced-form-is-complier-effect]])

[F3] The Wald ratio is the reduced-form contrast divided by the nonzero
first-stage contrast. ([[def-wald-ratio]])

[F4] An estimand is a function from a model parameter set to a target space.
([[def-estimand-on-a-statistical-model]])

[F5] Identifiability means equal observed sampling laws force equal target
values. ([[def-identifiability-of-an-estimand]])

## Proof

1.1 By [F1], $\Delta_A=P(C)>0$. By [F2], $\Delta_Y=P(C)E[Y(1)-Y(0)\mid C]$. [given, F1, F2]

2.1 Dividing the second identity in step 1.1 by the positive first identity gives $\Delta_Y/\Delta_A=E[Y(1)-Y(0)\mid C]$. By [F3], this quotient is the Wald ratio, so it equals the LATE. [F3, step 1.1, algebra]

3.1 If $P_\theta=P_\eta$, then both observed contrasts, and therefore their ratio, are equal for $\theta$ and $\eta$. Step 2.1 identifies each LATE with that common ratio, so $\psi_C(\theta)=\psi_C(\eta)$. By [F4] and [F5], the LATE is identifiable in this observed-data model. [F3, F4, F5, step 2.1] ∎

