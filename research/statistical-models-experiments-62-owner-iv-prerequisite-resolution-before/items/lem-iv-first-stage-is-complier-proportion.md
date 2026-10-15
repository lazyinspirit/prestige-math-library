---
id: lem-iv-first-stage-is-complier-proportion
kind: lemma
title: "The monotone IV first stage is the complier proportion"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-principal-strata-and-late
  - def-instrumental-variable-potential-outcomes
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
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Compliance Types and LATE proof"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
verification:
  precheck: pass
---

## Statement

Under consistency, joint instrument independence and monotonicity in the binary
IV setup,
$$E[A\mid Z=1]-E[A\mid Z=0]=P(C),$$
where $C=\{A(1)>A(0)\}$ is the complier event. If the instrument is relevant,
then $P(C)>0$.

## Facts & Assumptions

**Given:** A binary IV setup with consistency, joint instrument independence,
monotonicity and relevance. Prove the first-stage identity and positivity of
the complier stratum.

[A1] Relevance means the observed first-stage contrast is nonzero.
([[def-instrumental-variable-potential-outcomes]])

[F1] The observed first-stage contrast equals $E[A(1)-A(0)]$ under consistency
and joint instrument independence. ([[lem-iv-observed-contrasts-equal-potential-outcome-contrasts]])

[F2] Under monotonicity the defier event is null, and $A(1)-A(0)$ is $1$ on
$C$ and $0$ on the other principal strata.
([[lem-binary-monotonicity-excludes-defiers]], [[def-principal-strata-and-late]])

## Proof

1.1 On the complier event $C$, $(A(0),A(1))=(0,1)$, so $A(1)-A(0)=1$; on the always-taker and never-taker events the difference is $0$. The defier event is null by [F2]. Hence $A(1)-A(0)=\mathbf1_C$ almost surely. [given, F2]

2.1 Taking expectations in step 1.1 gives $E[A(1)-A(0)]=E[\mathbf1_C]=P(C)$. The first identity in [F1] therefore gives the claimed observed first-stage formula. [F1, step 1.1, algebra]

3.1 Relevance [A1] says this first-stage contrast is nonzero. Since $P(C)$ is nonnegative, step 2.1 implies $P(C)>0$, so the event-conditioned LATE is well-defined. [A1, step 2.1] ∎

