---
id: ex-positivity-failure-prevents-standardization-and-ipw-identification
kind: example
title: "Positivity failure prevents standardization and IPW identification"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-standardization-for-a-causal-mean
  - alg-inverse-probability-weighting-for-a-causal-mean
  - lem-conditional-treatment-indicator-factorization
  - def-potential-outcomes-and-consistency
  - def-identifiability-of-an-estimand
  - def-estimand-on-a-statistical-model
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Let $L\in\{0,1\}$ with $P(L=0)=P(L=1)=1/2$. In both full-data models, set $P(A=1\mid L=0)=0$ and $P(A=1\mid L=1)=1/2$, and set $Y^0=0$ everywhere and $Y^1=1$ when $L=1$. In model $P_0$, also set $Y^1=0$ when $L=0$; in model $P_2$, set $Y^1=2$ when $L=0$. Treatment assignment at $L=1$ is independent of these deterministic potential outcomes, so conditional exchangeability holds in each model. Define the observed outcome by consistency, $Y=Y^A$.

## Facts & Assumptions

**Given:** The two specified full-data laws, consistency, and the potential-outcome conventions of [[def-potential-outcomes-and-consistency]]. The target is the population mean $E[Y^1]$.

[A1] Treatment assignment has zero probability of treatment $1$ at $L=0$ in both models; the point-treatment setup is as in [[def-potential-outcomes-and-consistency]].

[F1] The standardization and IPW functionals require the conditional probability $e_1(L)$ to be positive almost surely. ([[alg-standardization-for-a-causal-mean]], [[alg-inverse-probability-weighting-for-a-causal-mean]])

[F2] Conditional treatment-indicator factorization gives $E[\mathbf1_{\{A=1\}}Y^1\mid\sigma(L)]=e_1(L)E[Y^1\mid\sigma(L)]$ under conditional exchangeability. ([[lem-conditional-treatment-indicator-factorization]])

[F3] Identifiability requires equal observed laws to imply equal target values. ([[def-identifiability-of-an-estimand]])

## Verification

1.1 In both models the observed law assigns probability $1/2$ to $(L,A,Y)=(0,0,0)$, probability $1/4$ to $(1,1,1)$, and probability $1/4$ to $(1,0,0)$. The unobserved value of $Y^1$ at $L=0$ does not enter any observed outcome because $A=0$ there. [given, A1, construct]

2.1 The target means differ: $E_{P_0}[Y^1]=\tfrac12$ while $E_{P_2}[Y^1]=\tfrac32$. Since the observed laws in step 1.1 coincide, [F3] shows that $E[Y^1]$ is not identified in this model class. [F3, step 1.1, algebra]

3.1 Here $e_1(0)=0$, so the observed treated conditional mean at $L=0$ is unavailable and both $q_1(0)/e_1(0)$ and the treated weight $I_1/e_1(L)$ are undefined. Also [F2] gives $E[I_1Y^1\mid L=0]=0\cdot E[Y^1\mid L=0]=0$ in both models, leaving the differing target-stratum means unrecovered. [A1, F1, F2, step 2.1] ∎