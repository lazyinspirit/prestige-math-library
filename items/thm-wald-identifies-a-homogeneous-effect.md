---
id: thm-wald-identifies-a-homogeneous-effect
kind: theorem
title: "A constant additive effect is identified by the Wald ratio"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - lem-iv-observed-contrasts-equal-potential-outcome-contrasts
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §16.3 and Technical Point 16.3, printed pp. 214–216"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), IV assumptions and LATE sections"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2, journal pp. 122–123"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: pass
---

## Statement

Let $\Theta$ be a nonempty set of full-data laws satisfying the binary IV
setup, consistency, exclusion and joint instrument independence. Each
$\theta\in\Theta$ induces an observed-data law $P_\theta$ for $(Z,A,Y)$, and
let $\psi_{\rm ATE}(\theta)=E_\theta[Y(1)-Y(0)]$. Suppose relevance holds and
there is a constant $\tau_0\in\mathbb R$ such that
$Y(1)-Y(0)=\tau_0$ almost surely under every $\theta\in\Theta$. Then
$$\psi_W(P_\theta)=\frac{E_\theta[Y\mid Z=1]-E_\theta[Y\mid Z=0]}{E_\theta[A\mid Z=1]-E_\theta[A\mid Z=0]}=\tau_0=\psi_{\rm ATE}(\theta).$$
Consequently, the ATE is identifiable in the induced observed-data model.
Monotonicity is not assumed.

## Facts & Assumptions

**Given:** The IV setup with consistency, exclusion, joint instrument
independence, relevance, and a constant additive treatment effect
$\tau=Y(1)-Y(0)=\tau_0$ almost surely. Prove the Wald formula identifies the
population ATE.

[A1] The individual treatment effect is the same constant $\tau_0$ almost
surely under each law in $\Theta$.

[F1] The outcome and treatment observed contrasts equal their potential-outcome
contrasts under consistency, exclusion and joint instrument independence.
([[lem-iv-observed-contrasts-equal-potential-outcome-contrasts]])

[F2] The Wald ratio is the observed outcome contrast divided by the nonzero
observed treatment contrast. ([[def-wald-ratio]])

[F3] An estimand is a function from the model's parameter set to a target
space. ([[def-estimand-on-a-statistical-model]])

[F4] Identifiability means equal observed sampling laws force equal target
values. ([[def-identifiability-of-an-estimand]])

[F5] The integral of an integrable sum or scalar multiple is the corresponding
sum or scalar multiple of the integrals.
([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

1.1 By [F1], the reduced-form contrast is $E[(A(1)-A(0))\tau]$ and the first-stage contrast is $E[A(1)-A(0)]$. No monotonicity condition is used in these identities. [given, F1]

2.1 By [A1] and linearity of expectation [F5], $E[(A(1)-A(0))\tau]=\tau_0E[A(1)-A(0)]$. [A1, F5, step 1.1, algebra]

3.1 Relevance makes $E[A(1)-A(0)]\ne0$, so division in [F2] gives $\psi_W=\tau_0$. Also $E[Y(1)-Y(0)]=E[\tau_0]=\tau_0$, proving the displayed ATE equality. [given, A1, F2, step 2.1, algebra]

4.1 For any $\theta,\eta\in\Theta$ with $P_\theta=P_\eta$, the observed contrasts and hence the observed-data functional $\psi_W$ agree. Step 3.1 identifies each ATE with that same ratio, so $\psi_{\rm ATE}(\theta)=\psi_{\rm ATE}(\eta)$. By [F3] and [F4], this is identifiability of the ATE on the induced observed-data model. [F2, F3, F4, step 3.1] ∎

