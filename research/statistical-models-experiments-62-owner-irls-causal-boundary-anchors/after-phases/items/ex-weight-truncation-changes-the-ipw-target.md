---
id: ex-weight-truncation-changes-the-ipw-target
kind: example
title: "Weight truncation changes the IPW target"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-inverse-probability-weighting-for-a-causal-mean
  - thm-inverse-probability-weighting-identifies-a-causal-mean
  - def-potential-outcomes-and-consistency
  - def-identifiability-of-an-estimand
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

Let $L\in\{0,1\}$ be uniform, with $P(A=1\mid L=0)=1/4$ and $P(A=1\mid L=1)=3/4$. Let $Y^1=2\mathbf1_{\{L=0\}}$, $Y^0=0$, and $Y=Y^A$. Conditional exchangeability and strict positivity hold. Compare the raw population IPW functional with the modified functional obtained by capping each treated weight $1/e_1(L)$ at $c=3/2$.

## Facts & Assumptions

**Given:** The finite-stratum population and weight cap in the Example, with consistency and AC for conditional expectations.

[A1] The point-treatment setup uses the target convention of [[def-potential-outcomes-and-consistency]], with consistency and integrable $Y^1$.

[F1] The population IPW functional uses the untruncated true weight $I_1/e_1(L)$. ([[alg-inverse-probability-weighting-for-a-causal-mean]])

[F2] Under consistency, exchangeability, integrability and positivity, that untruncated functional equals $E[Y^1]$. ([[thm-inverse-probability-weighting-identifies-a-causal-mean]])

## Verification

1.1 The target mean is $E[Y^1]=\tfrac12(2)+\tfrac12(0)=1$. The treated mass in $L=0$ is $1/8$ and the outcome there is $2$, so the untruncated IPW expectation is $(1/8)\cdot4\cdot2=1$, as [F1]–[F2] predict. [given, A1, F1, F2, algebra]

2.1 After capping the functional in [F1], the treated weight in $L=0$ is $3/2$ and the outcome in $L=1$ is zero. The unnormalized capped expectation is therefore $(1/8)(3/2)(2)=3/8$, not the target $1$. [given, A1, F1, step 1.1, algebra]

3.1 If the capped weights are normalized by their population mean, the denominator is $(1/8)(3/2)+(3/8)(4/3)=11/16$, so the normalized capped mean is $(3/8)/(11/16)=6/11\ne1$. Thus both capped versions in this example target a different population quantity from the original mean. [step 2.1, algebra]

4.1 This is a population calculation for known propensities; it does not invoke a finite-sample estimator or an estimated-weight limit. [given, step 3.1] ∎