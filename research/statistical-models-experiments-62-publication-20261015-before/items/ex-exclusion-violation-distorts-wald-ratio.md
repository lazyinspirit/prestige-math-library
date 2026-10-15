---
id: ex-exclusion-violation-distorts-wald-ratio
kind: example
title: "A direct encouragement effect changes the Wald ratio"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-instrumental-variable-potential-outcomes
  - def-wald-ratio
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, Technical Point 16.1 and §16.5, printed pp. 210–222"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), exclusion restriction section"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2 and §3.5.4, journal pp. 122–126"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: pass
---

## Example

Let the target population have equally likely types $c,n$ and let $Z$ be an
independent fair binary assignment. Set $(A(0),A(1))=(0,1)$ for type $c$ and
$(0,0)$ for type $n$. Define $Y(a,z)=2a+z$, and observe $A=A(Z)$ and
$Y=Y(A,Z)$. The exclusion restriction fails because changing $z$ changes $Y$
even at fixed $a$; the treatment effect at either fixed $z$ is $2$.

## Facts & Assumptions

**Given:** The two-type population and structural equations in the Example.
Compute the first stage, reduced form and Wald ratio.

[F1] The setup defines consistency, exclusion and the binary event-conditioned
means. ([[def-instrumental-variable-potential-outcomes]])

[F2] The Wald ratio is the reduced-form contrast divided by the first-stage
contrast when the latter is nonzero. ([[def-wald-ratio]])

## Verification

1.1 The product assignment makes $Z$ independent of the type and hence of all potential values; consistency holds by construction. Under $Z=1$, half the population has $A=1$ and the mean outcome is $(3+1)/2=2$; under $Z=0$, $A=0$ for both types and the outcome mean is $0$. Thus $\Delta_A=1/2$ and $\Delta_Y=2$. [given, F1, construct, algebra]

2.1 By [F2], the Wald ratio is $2/(1/2)=4$, although the treatment contrast $Y(1,z)-Y(0,z)$ equals $2$ for every unit and each fixed $z$. The discrepancy comes from the violated exclusion restriction, not treatment-effect heterogeneity. [F1, F2, step 1.1, algebra] ∎

