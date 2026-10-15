---
id: thm-bh-fdr-control-under-prds
kind: theorem
title: "BH controls FDR under PRDS"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-benjamini-hochberg-step-up-procedure
  - def-statistical-experiment
  - def-prds-on-true-null-coordinates
  - lem-bh-prds-null-contribution-bound
  - def-null-valid-p-value-and-fwer-fdr
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yoav Benjamini and Daniel Yekutieli, The Control of the False Discovery Rate in Multiple Testing under Dependency, The Annals of Statistics 29(4) (2001), Theorem 1.2 and Section 4, PDF pp. 4 and 13–16"
      url: "https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency"
    - title: "Yoav Benjamini, Discovering the False Discovery Rate, full 75-slide lecture, slides 33–35"
      url: "https://sites.uclouvain.be/IAP-Stat-Phase-V-VI/PhaseV/download/Leoven1.pdf"
---

## Statement

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment, let $m\ge1$, and fix a finite family of null hypotheses $H_{01},\ldots,H_{0m}$ with p-value statistics $p_1,\ldots,p_m$ valid for their respective nulls. For each $\theta$, write

$$I_0(\theta):=\{i:\theta\in H_{0i}\},\qquad m_0(\theta):=|I_0(\theta)|.$$

Assume the Axiom of Choice as required for the regular conditional-law interface in [[def-prds-on-true-null-coordinates]]. Suppose that, under every $P_\theta$, the p-value vector $(p_1(X),\ldots,p_m(X))$ is PRDS on $I_0(\theta)$. Then for every $q\in(0,1)$, the ordinary BH procedure in [[alg-benjamini-hochberg-step-up-procedure]] satisfies

$$\operatorname{FDR}_\theta\le\frac{m_0(\theta)}m q\le q.$$

The PRDS assumption is imposed only on the true-null coordinates; no independence assumption is made.

## Facts & Assumptions

**Given:** A finite family of valid p-values, $q\in(0,1)$, and under each $P_\theta$ the PRDS condition on the true-null set $I_0(\theta)$. The PRDS regular conditional-law convention uses the Axiom of Choice as recorded in [[def-prds-on-true-null-coordinates]].

[F1] [[def-null-valid-p-value-and-fwer-fdr]]: $I_0(\theta)$ is the true-null index set, $V_\theta$ counts rejected true nulls, and $\operatorname{FDR}_\theta=E_\theta[V_\theta/(R\vee1)]$.

[F2] [[alg-benjamini-hochberg-step-up-procedure]]: BH takes the largest $R$ with $p_{(R)}\le Rq/m$ and rejects exactly ranks $1,\ldots,R$.

[F3] [[def-prds-on-true-null-coordinates]]: for each $i\in I_0(\theta)$, every increasing Borel event has a conditional-probability version nondecreasing in $p_i$ on its support.

[F4] [[lem-bh-prds-null-contribution-bound]]: under validity and PRDS on $I_0(\theta)$, each true-null contribution satisfies $E_\theta[I_i/(R\vee1)]\le q/m$.

[F5] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on finite sums of integrable random variables.

[F6] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is integration with respect to the specified law.

[A1] Every p-value is valid under its own null, so each $i\in I_0(\theta)$ meets the superuniformity hypothesis of [F4].

[A2] Under every $P_\theta$, the vector of all p-values is PRDS on the full set $I_0(\theta)$, not merely pairwise positively correlated.

[A3] The standard-Borel regular conditional-law existence interface assumes the Axiom of Choice ([[def-axiom-of-choice]]) as stated in [[def-prds-on-true-null-coordinates]].

## Proof

**Proof technique:** sum the true-null contributions.

**Given:** The experiment, the fixed family and validity assumptions in the Statement, $q\in(0,1)$, and the PRDS condition for every true-null set.

1.1 Fix $\theta\in\Theta$. Let $I_i$ be the indicator that the BH rule [F2] rejects hypothesis $i$. By [F1], $V_\theta=\sum_{i\in I_0(\theta)}I_i$ and $\operatorname{FDR}_\theta=E_\theta[V_\theta/(R\vee1)]$. The ratio is bounded by one, so it is integrable by [F6]; finite linearity [F5] gives $\operatorname{FDR}_\theta=\sum_{i\in I_0(\theta)}E_\theta[I_i/(R\vee1)]$. [F1, F2, F5, F6, given, construct]

2.1 If $I_0(\theta)=\varnothing$, step 1.1 is an empty sum and FDR is zero. Otherwise, for each $i\in I_0(\theta)$, [A1] gives validity and [A2] gives PRDS on a set containing $i$ under the AC-based conditional-law interface [A3], so [F4] bounds its contribution by $q/m$. Summing step 1.1 gives $\operatorname{FDR}_\theta\le |I_0(\theta)|q/m=(m_0(\theta)/m)q\le q$. Only the designated true-null coordinates are needed; independence is not assumed. [F1, F2, F3, F4, A1, A2, A3, step 1.1, algebra] ∎

## Remarks

The Axiom of Choice enters through the standard-Borel regular conditional-law interface that gives the stated PRDS condition its kernel formulation. The finite sum of null contributions uses no additional choice. Pairwise covariance information alone does not supply the hypothesis; the companion examples include a valid-p-value witness.
