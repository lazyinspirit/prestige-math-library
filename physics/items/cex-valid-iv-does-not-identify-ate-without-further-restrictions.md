---
id: cex-valid-iv-does-not-identify-ate-without-further-restrictions
kind: counterexample
title: "Core IV conditions alone do not identify the population ATE"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-instrumental-variable-potential-outcomes
  - def-principal-strata-and-late
  - def-wald-ratio
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, Technical Points 16.2 and 16.7, printed pp. 212 and 224–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), LATE and ATE discussion"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2–§3.5.4, journal pp. 122–126"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: pass
---

## Statement refuted

The binary-IV core conditions—consistency, joint instrument independence,
exclusion and relevance—by themselves identify the population ATE, without
monotonicity or a homogeneity restriction.

## Facts & Assumptions

**Given:** Two full-data laws with the same induced observed law, both satisfying
the core IV conditions, but with different ATEs. Verify that this is a
counterexample to identifiability.

[F1] Consistency, exclusion, joint instrument independence and relevance are
the IV conditions defined in the setup.
([[def-instrumental-variable-potential-outcomes]])

[F2] The population ATE is $E[Y(1)-Y(0)]$.
([[def-principal-strata-and-late]])

[F3] An estimand is a target function on the model, and identifiability means
equal observed laws force equal target values.
([[def-estimand-on-a-statistical-model]], [[def-identifiability-of-an-estimand]])

[F4] The Wald ratio is the observed outcome contrast divided by the
first-stage contrast. ([[def-wald-ratio]])

## Counterexample

Let the unit type probabilities be $0.2$ always-takers, $0.3$ never-takers,
$0.4$ compliers and $0.1$ defiers. Independently assign fair binary $Z$ by
taking the product of this type law with a fair Bernoulli law. In both models
use treatment pairs $(A(0),A(1))=(1,1),(0,0),(0,1),(1,0)$ for those four types,
and let $Y(a,z)=Y(a)$.

Specify potential outcome pairs $(Y(0),Y(1))$ as follows:

- Model $M_0$: always $(0,5)$, never $(0,0)$, complier $(0,1)$, defier $(0,3)$.
- Model $M_1$: always $(10,5)$, never $(0,10)$, complier $(0,1)$, defier $(0,3)$.

In both models set $A=A(Z)$ and $Y=Y(A,Z)$. No monotonicity or constant
treatment effect is imposed.

1.1 In the product law, $Z$ is independent of all type-specific potential values, and both assignment atoms have positive probability. The observed treatment and outcome satisfy consistency by construction; $Y(a,z)=Y(a)$ is exclusion. The first-stage contrast is $E[A\mid Z=1]-E[A\mid Z=0]=(0.2+0.4)-(0.2+0.1)=0.3\ne0$, so relevance holds in both models. [given, F1, construct, algebra]

2.1 For $Z=0$, both models give the same observed pairs: always-takers have $(A,Y)=(1,5)$, never-takers and compliers have $(0,0)$, and defiers have $(1,3)$. For $Z=1$, both give $(1,5)$ to always-takers, $(0,0)$ to never-takers and defiers, and $(1,1)$ to compliers. Since type probabilities and the law of $Z$ also agree, the entire observed laws of $(Z,A,Y)$ agree. [given, step 1.1, construct]

3.1 The reduced-form contrast in either model is $\Delta_Y=(0.2\cdot5+0.4\cdot1)-(0.2\cdot5+0.1\cdot3)=0.1$. Thus the common Wald ratio is $0.1/0.3=1/3$ by [F4]. However, $\operatorname{ATE}(M_0)=0.2\cdot5+0.3\cdot0+0.4\cdot1+0.1\cdot3=1.7$, whereas $\operatorname{ATE}(M_1)=0.2\cdot(-5)+0.3\cdot10+0.4\cdot1+0.1\cdot3=2.7$. Therefore [F2] has different values at two parameters with the same observed law, and [F3] shows the ATE is not identifiable under only these core conditions. [F2, F3, F4, step 2.1, algebra] ∎

