---
id: ex-standardization-and-ipw-two-strata-calculation
kind: example
title: "A two-stratum standardization and IPW calculation"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - alg-standardization-for-a-causal-mean
  - alg-inverse-probability-weighting-for-a-causal-mean
  - thm-standardization-identifies-a-causal-mean
  - thm-inverse-probability-weighting-identifies-a-causal-mean
  - def-potential-outcome-model-and-causal-estimand
  - def-causal-identification-and-partial-identification
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

Let $L\in\{0,1\}$ with equal probabilities, let $P(A=1\mid L=0)=1/4$ and $P(A=1\mid L=1)=3/4$, and set $Y^1=1+2L$ and $Y^0=0$. Generate $A$ using the stated conditional law and define $Y=Y^A$. Because both potential outcomes are functions of $L$, conditional exchangeability holds; positivity holds in both strata.

## Facts & Assumptions

**Given:** The finite probability law and potential outcomes in the Example, with consistency and AC for the conditional-expectation conventions.

[A1] The example uses the point-treatment potential-outcome convention of [[def-potential-outcome-model-and-causal-estimand]].

[F1] Standardization averages the treatment-specific observed mean over the law of $L$. ([[alg-standardization-for-a-causal-mean]])

[F2] IPW averages $I_aY/e_a(L)$ under the observed population law. ([[alg-inverse-probability-weighting-for-a-causal-mean]])

[F3] Under the stated consistency, exchangeability, integrability and positivity assumptions, the standardization functional equals $E[Y^a]$. ([[thm-standardization-identifies-a-causal-mean]])

[F4] Under the same assumptions, the IPW functional equals $E[Y^a]$. ([[thm-inverse-probability-weighting-identifies-a-causal-mean]])

## Verification

1.1 The two propensity values are $e_1(0)=1/4$ and $e_1(1)=3/4$. Since $Y^1=1+2L$, the observed treated means are $m_1(0)=1$ and $m_1(1)=3$. Thus [F1] gives $\Psi_{\mathrm{std}}=\tfrac12(1)+\tfrac12(3)=2$. [given, A1, F1, algebra]

1.2 The treated joint masses are $P(L=0,A=1)=1/8$ and $P(L=1,A=1)=3/8$. Therefore [F2] gives $\Psi_{\mathrm{IPW}}=\frac18\frac{1}{1/4}+\frac38\frac{3}{3/4}=\frac12+\frac32=2$. [given, A1, F2, algebra]

2.1 The target mean is $E[Y^1]=\tfrac12(1)+\tfrac12(3)=2$. Consequently the two displayed population functionals agree with the target, as asserted by [F3] and [F4]. [given, A1, F3, F4, step 1.1, step 1.2] ∎
