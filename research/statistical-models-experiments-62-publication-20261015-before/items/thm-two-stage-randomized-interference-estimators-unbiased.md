---
id: thm-two-stage-randomized-interference-estimators-unbiased
kind: theorem
title: "Two-stage strategy-specific effect estimators are design-unbiased"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-two-stage-randomized-interference-design-and-effects
  - lem-finite-simple-random-sampling-identities
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-conditional-expectation-given-a-sigma-algebra
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - lem-finite-sum-laws
  - lem-finite-event-conditional-expectation-formula
  - thm-linearity-of-expectation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, Theorems 1–3 and Appendices A.1–A.3"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Statement

Under the two-stage design of [[def-two-stage-randomized-interference-design-and-effects]], for either strategy $s\in\{\phi,\psi\}$, treatment value $z\in\{0,1\}$, and group $i$,
$$\mathbb E[\hat{\bar Y}_i(z;s)\mid S_i=s]=\bar Y_i(z;s),\qquad \mathbb E[\hat{\bar Y}_i(s)\mid S_i=s]=\bar Y_i(s).$$
Consequently,
$$\mathbb E[\hat{\bar Y}(z;s)]=\bar Y(z;s),\qquad \mathbb E[\hat{\bar Y}(s)]=\bar Y(s).$$
By taking the displayed contrasts, the design estimators of $DE(\psi)$, $IE(\phi,\psi)$, $TE(\phi,\psi)$, and $OE(\phi,\psi)$ are unbiased. The proof does not require stratified interference or additive effects.

## Facts & Assumptions

**Given:** The finite two-stage assignment law, fixed potential outcomes under partial interference, and the group and population targets and estimators in [[def-two-stage-randomized-interference-design-and-effects]].

[F1] [[def-two-stage-randomized-interference-design-and-effects]]: exactly $C_s$ groups are assigned to each strategy $s$, and within group $i$ under $s$ exactly $K_i^s$ of its $n_i$ units are chosen uniformly for treatment; the estimators divide by the fixed treatment-arm sizes and fixed group counts.

[F2] [[lem-finite-simple-random-sampling-identities]]: under uniform fixed-size sampling from $n$ units, each unit's inclusion probability is $m/n$, and the sample mean of fixed values has expectation equal to their finite-population mean.

[F3] [[def-finite-probability-space-and-event]] and [[def-expectation-on-a-finite-probability-space]]: all assignment laws here are finite, and their expectations are finite weighted sums.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is measurable with respect to the conditioning sigma-algebra and has the same integrals on its events.

[F5] [[def-statistic-and-estimator]]: a statistic with the target space of an estimand is an estimator of that estimand.

[F6] [[def-estimand-on-a-statistical-model]]: an estimand is a specified function from the model's parameter set to its target-value set.

[F7] [[lem-finite-sum-laws]]: finite sums are additive and scaling distributes over finite sums.

[F8] [[lem-finite-event-conditional-expectation-formula]]: positive-probability event conditioning is the finite conditional weighted sum, and averaging conditional means over a finite partition recovers unconditional expectation.

[F9] [[thm-linearity-of-expectation]]: expectation distributes over finite real linear combinations on a finite probability space.

## Proof

1.1 Fix $i,s,z$. The number $m_{iz}^s$ of units with $Z_{ij}=z$ is fixed and positive under [F1]. Each of the $n_i$ units has conditional probability $m_{iz}^s/n_i$ of receiving $z$. Expanding the positive-probability event conditional mean by [F8] and distributing the finite sum over units by [F9] gives $\mathbb E[\hat{\bar Y}_i(z;s)\mid S_i=s]=\frac1{m_{iz}^s}\sum_{j=1}^{n_i}\mathbb P(Z_{ij}=z\mid S_i=s)\mathbb E[Y_{ij}^{\mathrm{obs}}\mid S_i=s,Z_{ij}=z]=\frac1{n_i}\sum_{j=1}^{n_i}\mathbb E_{i,s}[Y_{ij}(\mathbf Z_i)\mid Z_{ij}=z]=\bar Y_i(z;s).$ All conditioning events have positive probability by the bounds on $K_i^s$. [F1, F3, F4, F7, F8, F9, given]

1.2 By [F3], expectation linearity [F9] and the definition of $\bar Y_i(s)$ give $\mathbb E[\hat{\bar Y}_i(s)\mid S_i=s]=\frac1{n_i}\sum_{j=1}^{n_i}\mathbb E_{i,s}[Y_{ij}(\mathbf Z_i)]=\bar Y_i(s).$ This uses no restriction on how one unit's outcome depends on other assignments within its group. [F1, F3, F7, F9, given]

2.1 Condition on the complete first-stage vector $\mathbf S$. The denominators $C_s$ are fixed, so expectation linearity [F9] and steps 1.1 and 1.2 yield $\mathbb E[\hat{\bar Y}(z;s)\mid\mathbf S]=\frac1{C_s}\sum_{i:S_i=s}\bar Y_i(z;s),\qquad \mathbb E[\hat{\bar Y}(s)\mid\mathbf S]=\frac1{C_s}\sum_{i:S_i=s}\bar Y_i(s).$ [step 1.1, step 1.2, F1, F3, F7, F8, F9, algebra]

3.1 The set of groups assigned strategy $s$ is a uniform $C_s$-element subset of the $N$ fixed groups. By [F2], each group has inclusion probability $C_s/N$, so the expectation of either average on the right of step 2.1 is the corresponding target population average. The finite-partition identity [F8] and expectation linearity [F9] prove the two population-mean identities. [step 2.1, F2, F3, F7, F8, F9]

4.1 Each effect estimator is the same finite linear contrast of estimated means as its target is of the corresponding target means. Distributing expectation over each contrast by [F9] and applying step 3.1 proves unbiasedness of all four effects. By [F5] and [F6], these statistic-valued contrasts are estimators of the displayed estimands. [step 3.1, F3, F5, F6, F9, algebra] ∎

## Remarks

The assignment space and every sum in this proof are finite. The argument is choice-free and uses no conditional-expectation existence theorem on general probability spaces.
