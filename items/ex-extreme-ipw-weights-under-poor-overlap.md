---
id: ex-extreme-ipw-weights-under-poor-overlap
kind: example
title: "Extreme IPW weights under poor overlap"
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

For each $\varepsilon\in(0,1/2)$, let $P(L=0)=P(L=1)=1/2$, let $P(A=1\mid L=0)=\varepsilon$ and $P(A=1\mid L=1)=1/2$, and set $Y^1=\mathbf1_{\{L=0\}}$, $Y^0=0$, and $Y=Y^A$. The potential outcomes are deterministic given $L$, so conditional exchangeability holds. For every $\varepsilon>0$, positivity holds; as $\varepsilon$ decreases, the treated weight in stratum $L=0$ grows.

## Facts & Assumptions

**Given:** The finite-stratum family in the Example, consistency, and AC for the conditional-expectation conventions.

[A1] $Y^1$ is integrable in the point-treatment setup of [[def-potential-outcomes-and-consistency]], and the true treatment probability is $e_1(L)=P(A=1\mid L)$.

[F1] The IPW functional uses the population weight $I_1/e_1(L)$ and its expectation, when integrable. ([[alg-inverse-probability-weighting-for-a-causal-mean]])

[F2] Under the stated causal assumptions and positive propensity, the population IPW mean equals $E[Y^1]$. ([[thm-inverse-probability-weighting-identifies-a-causal-mean]])

## Verification

1.1 The event $\{L=0,A=1\}$ has probability $\varepsilon/2$ and there the IPW summand $W=I_1Y/e_1(L)$ equals $1/\varepsilon$. Everywhere else $W=0$. Hence $E[W]=(\varepsilon/2)(1/\varepsilon)=1/2=E[Y^1]$, consistently with [F2]. [given, A1, F1, F2, algebra]

2.1 The second moment and variance are $E[W^2]=\frac{\varepsilon}{2}\frac{1}{\varepsilon^2}=\frac{1}{2\varepsilon}$ and $\operatorname{Var}(W)=\frac{1}{2\varepsilon}-\frac14$. As $\varepsilon\downarrow0$, the realized treated weight $1/\varepsilon$ and this population variance diverge, although the exact population identity remains valid at each $\varepsilon>0$. [step 1.1, algebra]

3.1 Thus strict positivity at each model does not impose a uniform weight or variance bound across models; the example makes no claim about finite-sample estimator consistency. [given, step 2.1] ∎