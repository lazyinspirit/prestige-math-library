---
id: ex-randomized-treatment-identification
kind: example
title: "Randomized treatment identifies the target mean contrast"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-potential-outcomes-and-consistency
  - def-causal-average-treatment-effects
  - def-conditional-exchangeability-of-potential-outcomes
  - def-conditional-independence-given-a-sigma-algebra
  - def-positivity-for-discrete-treatment
  - thm-discrete-treatment-potential-outcome-mean-identification
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: example
---

## Example

Take $\Omega=\{u_0,u_1\}\times\{0,1\}$ with the uniform law. Let $U$ and $A$ be the first and second coordinates, let $L$ be constant, and set $Y^0=0$, $Y^1=\mathbf1_{\{U=u_1\}}$, and $Y=Y^A$. Then random assignment is independent of the potential outcomes, both treatment values have probability $1/2$, and the target ATE is $1/2$. The conditional means among the two treatment groups recover the same contrast.

## Verification

**Given:** The finite probability space above; the definitions of potential outcomes and consistency, conditional exchangeability, positivity, and ATE; and the discrete-treatment identification theorem.

[A1] Choice is the axiom used by the library's conditional-expectation convention. [[def-axiom-of-choice]]

[F1] Potential outcomes are indexed by treatment versions and consistency means $Y=Y^A$ almost surely. [[def-potential-outcomes-and-consistency]]

[F2] Conditional exchangeability is conditional independence of the potential-outcome family and $A$ given $L$. [[def-conditional-exchangeability-of-potential-outcomes]]

[F3] Conditional independence given the trivial sigma-algebra is ordinary independence, using the bounded-product identity. [[def-conditional-independence-given-a-sigma-algebra]]

[F4] Positivity requires positive marginal and conditional probability for each treatment value in the contrast. [[def-positivity-for-discrete-treatment]]

[F5] The ATE is $E[Y^1-Y^0]$. [[def-causal-average-treatment-effects]]

[F6] Under consistency, conditional exchangeability and positivity, the potential-outcome mean equals the target-covariate integral of the observed treatment-stratum mean. [[thm-discrete-treatment-potential-outcome-mean-identification]]

1.1 Each of the four points $(u_i,a)$ has probability $1/4$. By definition $Y=Y^A$, so consistency [F1] holds; $Y^0,Y^1$ are bounded and hence integrable. [given, F1, algebra]

1.2 For $i,a\in\{0,1\}$, $P(U=u_i,A=a)=1/4=P(U=u_i)P(A=a)$. The pair $(Y^0,Y^1)$ is a function of $U$, so it is independent of $A$; since $L$ is constant, [F2] and [F3] give conditional exchangeability. Also $P(A=0)=P(A=1)=1/2$, and conditioning on constant $L$ leaves these probabilities unchanged, so [F4] holds. [A1, F2, F3, F4, algebra]

2.1 Under $P_0$, $U$ remains uniform and $Y=Y^0=0$, so $m_0=0$. Under $P_1$, $U$ remains uniform and $Y=Y^1$, so $m_1=1/2$. As $P_L$ is a point mass, [F6] gives $E[Y^0]=0$ and $E[Y^1]=1/2$; hence the identified ATE is $1/2$, agreeing with [F5]. [F5, F6, algebra] ∎
