---
id: ex-positivity-failure-nonidentification
kind: example
title: "Positivity failure leaves the target unsupported"
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
  - def-identifiability-of-an-estimand
  - thm-discrete-treatment-potential-outcome-mean-identification
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
generation:
  role: example
---

## Example

Let $\Omega=\{0,1\}$ with each point having probability $1/2$, and set $L=A=\omega$. Consider two full-data laws on this same observed space. In both, $Y^0=0$ and $Y=Y^A$. In law $Q_1$, set $Y^1=1$ everywhere; in law $Q_2$, set $Y^1=L$. Both laws give the same observed distribution: $(L,A,Y)=(0,0,0)$ or $(1,1,1)$ with probability $1/2$ each. Both satisfy consistency and conditional exchangeability given $L$, but positivity fails. Their ATEs are respectively $1$ and $1/2$, so the observed law and conditional exchangeability alone do not identify the ATE.

## Verification

**Given:** The two full-data laws described above; the definitions of potential outcomes, conditional exchangeability, positivity, ATE and identifiability; and the theorem's positivity hypothesis.

[A1] Choice is assumed for the library's conditional-expectation classes. [[def-axiom-of-choice]]

[F1] Consistency requires $Y=Y^A$ almost surely. [[def-potential-outcomes-and-consistency]]

[F2] Conditional exchangeability is conditional independence of potential outcomes and treatment given $L$. [[def-conditional-exchangeability-of-potential-outcomes]]

[F3] Conditional independence holds when one of its sigma-algebras is contained in the conditioning sigma-algebra. [[def-conditional-independence-given-a-sigma-algebra]]

[F4] Positivity for a contrast requires positive treatment probability in each treatment arm almost surely on the target covariate law. [[def-positivity-for-discrete-treatment]]

[F5] The ATE is $E[Y^1-Y^0]$. [[def-causal-average-treatment-effects]]

[F6] Identifiability means the estimand is constant across parameter values with the same observed law. [[def-identifiability-of-an-estimand]]

[F7] The displayed standardization theorem assumes positivity for each treatment value in the contrast. [[thm-discrete-treatment-potential-outcome-mean-identification]]

1.1 In both laws, when $L=0$ one has $A=0,Y=Y^0=0$, and when $L=1$ one has $A=1,Y=Y^1=1$. Thus the observed law is identical in $Q_1,Q_2$, and consistency [F1] holds in each. [given, F1, algebra]

1.2 In each law the potential-outcome vector is $\sigma(L)$-measurable and $A=L$ is $\sigma(L)$-measurable. By [F3], conditional exchangeability [F2] holds. However, $P(A=1\mid L=0)=0$ and $P(A=0\mid L=1)=0$, so [F4] fails despite $P(A=0)=P(A=1)=1/2$. Hence the hypotheses of [F7] are not met. [A1, F2, F3, F4, F7, algebra]

2.1 Under $Q_1$, $E[Y^1-Y^0]=1$. Under $Q_2$, $E[Y^1-Y^0]=E[L]=1/2$. The same observed law therefore corresponds to two target values, so [F6] says the ATE is not identifiable under consistency and conditional exchangeability without positivity. [F5, F6, step 1.1, algebra] ∎