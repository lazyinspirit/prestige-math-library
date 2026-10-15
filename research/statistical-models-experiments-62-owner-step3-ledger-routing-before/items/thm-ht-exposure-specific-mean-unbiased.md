---
id: thm-ht-exposure-specific-mean-unbiased
kind: theorem
title: "Horvitz–Thompson exposure-specific mean is design-unbiased"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-exposure-mapping-under-interference
  - def-potential-outcomes-under-partial-interference
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - lem-finite-sum-laws
  - thm-linearity-of-expectation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Peter M. Aronow and Cyrus Samii, Estimating Average Causal Effects Under General Interference, Lemma 4.1 and Appendix A.2"
      url: "https://arxiv.org/pdf/1305.6156v4"
---

## Statement

Let $\mathcal U=\{(i,j):1\le i\le N,\ 1\le j\le n_i\}$ be a fixed population of $M=\sum_i n_i$ units. Let $\mathbf Z$ have a known finite assignment law $p$ and fixed potential-outcome schedule satisfying partial interference. Fix an exposure label $d$ for which the mapping in [[def-exposure-mapping-under-interference]] is sufficient and $\pi_{ij}(d)>0$ for every $(i,j)\in\mathcal U$. Then
$$\widehat\mu_{HT}(d)=\frac1M\sum_{(i,j)\in\mathcal U}\frac{1\{D_{ij}=d\}Y_{ij}^{\mathrm{obs}}}{\pi_{ij}(d)}$$
is an estimator of the finite-population exposure mean $\mu(d)=M^{-1}\sum_{(i,j)\in\mathcal U}Y_{ij}(d)$ and satisfies $\mathbb E_p[\widehat\mu_{HT}(d)]=\mu(d)$. Therefore, for two labels $d,e$ with the same positivity and sufficiency conditions, $\widehat\mu_{HT}(d)-\widehat\mu_{HT}(e)$ is design-unbiased for $\mu(d)-\mu(e)$. Dependence among units' exposures does not affect these expectation identities.

## Facts & Assumptions

**Given:** A finite assignment space $\mathcal Z$ with weights $p(\mathbf z)$ summing to one, fixed potential outcomes $Y_{ij}(\mathbf z_i)$, a fixed finite population $\mathcal U$, and an exposure label $d$ satisfying the conditions in the Statement.

[F1] [[def-potential-outcomes-under-partial-interference]]: $Y_{ij}(\mathbf z_i)$ is fixed for each allowed group assignment, and $Y_{ij}^{\mathrm{obs}}=Y_{ij}(\mathbf Z_i)$.

[F2] [[def-exposure-mapping-under-interference]]: $D_{ij}=f_{ij}(\mathbf Z_i)$, $\pi_{ij}(d)=\sum_{\mathbf z}p(\mathbf z)1\{f_{ij}(\mathbf z_i)=d\}$, and exposure sufficiency means $Y_{ij}(\mathbf z_i)=Y_{ij}(d)$ whenever $f_{ij}(\mathbf z_i)=d$.

[F3] [[def-finite-probability-space-and-event]]: the allowed assignments form a finite probability space with event probabilities given by their weights.

[F4] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite weighted sum $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$.

[F5] [[def-statistic-and-estimator]]: an estimator is a statistic with the target space of its estimand; here the assignment and observed outcomes form the data, and the displayed formula is a real-valued function of that data.

[F6] [[lem-finite-sum-laws]]: finite sums are additive and scaling distributes over them.

[F7] [[thm-linearity-of-expectation]]: expectation distributes over every finite real linear combination on a finite probability space.

## Proof

1.1 Fix a unit $(i,j)$. Since $\pi_{ij}(d)>0$, the finite sum for the design expectation of its weighted contribution is defined. By [F1], [F2], [F3], and [F4], $\mathbb E_p\!\left[\frac{1\{D_{ij}=d\}Y_{ij}^{\mathrm{obs}}}{\pi_{ij}(d)}\right]=\frac1{\pi_{ij}(d)}\sum_{\mathbf z\in\mathcal Z}p(\mathbf z)1\{f_{ij}(\mathbf z_i)=d\}Y_{ij}(\mathbf z_i).$ For every term with nonzero indicator, [F2] makes the outcome equal to the fixed value $Y_{ij}(d)$; terms with zero indicator vanish. [F1, F2, F3, F4, given]

2.1 The remaining sum in step 1.1 is $Y_{ij}(d)\pi_{ij}(d)/\pi_{ij}(d)=Y_{ij}(d)$ by the definition of $\pi_{ij}(d)$ and its strict positivity. [step 1.1, F2, given, algebra]

3.1 The population has finitely many units. By expectation linearity [F7], distributing the estimator's finite sum and applying step 2.1 to each unit gives $\mathbb E_p[\widehat\mu_{HT}(d)]=M^{-1}\sum_{(i,j)\in\mathcal U}Y_{ij}(d)=\mu(d)$. The displayed map is a statistic with the same real target space as $\mu(d)$, so it is an estimator by [F5]. [step 2.1, F3, F4, F5, F6, F7, given, algebra]

4.1 Applying step 3.1 to each of $d$ and $e$ and distributing the same finite expectation over their difference by [F7] proves the exposure-contrast identity. The argument used only marginal exposure probabilities, so it requires no independence between units' exposures. [step 3.1, F4, F7, given, algebra] ∎