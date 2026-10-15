---
id: ex-same-observed-law-different-intervention-law
kind: example
title: "The same observed law can have different intervention laws"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-parametric-statistical-model
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-1, pp. 674–675"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, §6.1, pp. 71–74"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Example

Let $U\sim\mathrm{Bernoulli}(1/2)$. In SCM 1 set $A=U$ and $Y=A$; its graph
is $U\to A\to Y$. In SCM 2 set $A=U$ and $Y=U$; its graph is
$U\to A$ and $U\to Y$. Degenerate independent exogenous errors at $A$ and
$Y$ complete both Markovian SCMs.

## Facts & Assumptions

**Given:** The two binary SCMs in the Example.

[F1] Observational equivalence means equality of the induced sampling laws.
[[def-parametric-statistical-model]], [[def-observational-equivalence]]

[F2] An estimand is identifiable only if it is constant over parameter values
with the same observed law. [[def-estimand-on-a-statistical-model]],
[[def-identifiability-of-an-estimand]]

[F3] Under an intervention only the named structural equation is replaced.
[[def-recursive-structural-causal-model-and-dag]]

## Verification
**Proof technique:** compare the finite observational laws and then compute both truncated structural systems.

**Given:** [F1]–[F3] and the two SCMs in the Example.

1.1 In either model, $A=Y=U$, so the observed joint law assigns probability $1/2$ to $(A,Y)=(0,0)$ and $1/2$ to $(A,Y)=(1,1)$, and zero to the other pairs. The parameter values representing the two SCMs are observationally equivalent by [F1]. [given, F1, algebra]

2.1 Under $do(A=a)$ in SCM 1, the equation $Y=A$ remains and gives $Y=a$ with probability one. Under $do(A=a)$ in SCM 2, the equation $Y=U$ remains and $U$ is unchanged, so $Y$ is Bernoulli$(1/2)$. Thus for $a=0$ the interventional success probabilities are respectively $0$ and $1/2$; the intervention-law estimand is not constant on the observational-equivalence class in step 1.1. It is therefore not identifiable on the two-model statistical model by [F2]. [step 1.1, F2, F3, algebra] ∎
