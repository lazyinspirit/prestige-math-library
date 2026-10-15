---
id: cex-tdmath-bulk-field-pressure
kind: counterexample
title: A volume-sized external field changes ideal-gas pressure
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-factorial-and-falling-factorial
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
dependency_roles:
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.3, PDF pp.10–12: finite-volume grand-canonical normalization; the calculation is derived directly here."
---

## Statement refuted

At fixed activity $z>0$ and inverse temperature $\beta>0$, adding any spatially constant one-particle external energy throughout a continuum ideal-gas region leaves the thermodynamic-limit log grand partition sum per volume unchanged, as would a negligible boundary perturbation.

## Facts & Assumptions

**Given:** $V>0$, $z>0$, $\beta>0$, constant $c\in\mathbb R$, and the $1/N!$-normalized positional grand sum.

[A1] The model has zero pair energy and assigns each $N$-point configuration external energy $cN$.

[F1] [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the product coordinate integral of the constant one over $\Omega^N$ is $V^N$.

[F2] [[def-factorial-and-falling-factorial]], [[def-real-exponential-function-and-e]], and [[thm-exponential-addition-formula]]: the nonnegative exponential series satisfies $\sum_{N\geq0}x^N/N!=e^x$.

## Counterexample

**Given:** $V>0$, $z>0$, $\beta>0$, constant $c\in\mathbb R$, and the $1/N!$-normalized positional grand sum.

For the continuum ideal gas in a bounded measurable region $\Omega$ of volume $V$, use activity $z>0$, inverse temperature $\beta>0$, and no pair interaction. Add a constant external one-particle energy $c$ throughout $\Omega$. This volume-sized field changes the pressure per volume whenever $c\ne0$, so it is not a negligible boundary perturbation.

1.1 The $N$-particle term without the field is $z^NV^N/N!$, by the product volume [F1] and the $1/N!$ convention [given]. Summing over $N\geq0$ gives $\Xi_0=\sum_N(zV)^N/N!=e^{zV}$ by [F2]. [given, A1, F1, F2, algebra]

2.1 With the field, each term is multiplied by $e^{-\beta cN}$, so $\Xi_c=\sum_N(ze^{-\beta c}V)^N/N!=e^{ze^{-\beta c}V}$ by [F2]. Therefore $V^{-1}\log\Xi_0=z$ and $V^{-1}\log\Xi_c=ze^{-\beta c}$. If $c\ne0$, these differ because $z,\beta>0$. [given, A1, F2, step 1.1, algebra] ∎
