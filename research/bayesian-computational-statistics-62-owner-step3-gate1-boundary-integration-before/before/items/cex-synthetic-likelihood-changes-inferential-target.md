---
id: cex-synthetic-likelihood-changes-inferential-target
kind: counterexample
title: "A Gaussian synthetic likelihood can change an exact posterior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-estimand-on-a-statistical-model
  - def-exact-inferential-target-and-approximation-chain
  - def-identifiability-of-an-estimand
  - def-measurable-function-between-measurable-spaces
  - def-observational-equivalence
  - def-parametric-statistical-model
  - def-probability-measure
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-synthetic-likelihood
  - def-total-variation-distance-for-probability-laws
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed through the ideal Gaussian synthetic-likelihood definition. All finite probability, moment, posterior, and total-variation calculations are explicit."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
      locator: "§1, PDF pp. 1–2, Gaussian summary likelihood definition and finite-simulation distinction."
    - title: "Christopher C. Drovandi, Clara Grazian, Kerrie Mengersen, and Christian Robert, Approximating the Likelihood in Approximate Bayesian Computation, Handbook of Approximate Bayesian Computation (2020)"
      url: "https://arxiv.org/pdf/1803.06645"
      locator: "§2, PDF pp. 2–3; Gaussian approximation to a summary law and its distinction from the exact summary distribution."
    - title: "David T. Frazier, David J. Nott, Christopher Drovandi, and Robert Kohn, Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, 2019 arXiv preprint arXiv:1902.04827"
      url: "https://arxiv.org/pdf/1902.04827"
      locator: "Complete 8-page 2019 preprint, pp. 1–8; definition and motivation only, no asymptotic theorem imported."
---

## Statement refuted

An identifiable discrete summary model's Gaussian synthetic likelihood need not preserve the exact posterior, even when the ideal Gaussian uses the exact first two summary moments.

## Facts & Assumptions

**Given:** Let $\Theta=\{0,1\}$ with equal prior mass and let the summary/data space be $\{0,1,2,3\}$ with its power-set sigma-algebra. Regard the identity summary as a map into $(\mathbb R,\mathcal B(\mathbb R))$. Define the two sampling laws by
$$\begin{array}{c|rrrr}y & 0&1&2&3 \\ P_0(y)&6/24&6/24&6/24&6/24 \\ P_1(y)&5/24&9/24&3/24&7/24\end{array}$$
and observe $y=1$. Define the exact posterior from this likelihood, and define the synthetic-likelihood posterior by normalizing the ideal Gaussian synthetic likelihood against the same prior.

[F1] An exact target is $\Pi_x(A)=Z_x^{-1}\int_A\ell_x\,d\Pi_0$ for an explicitly measurable likelihood and finite positive evidence. [[def-exact-inferential-target-and-approximation-chain]]

[F2] A statistic is a measurable map to a declared measurable target, and the ideal synthetic likelihood is the Gaussian density at the observed summary using the exact summary mean and covariance when that covariance is positive definite. [[def-statistic-and-estimator]] [[def-measurable-function-between-measurable-spaces]] [[def-borel-sigma-algebra]] [[def-synthetic-likelihood]]

[F3] The identity estimand is identifiable when equal sampling laws imply equal parameter values. [[def-parametric-statistical-model]] [[def-observational-equivalence]] [[def-identifiability-of-an-estimand]]

[F4] Under the Axiom of Choice, positive-definite summary covariance supplies the ideal Gaussian density; no equality with the exact summary law is part of that definition. [[def-axiom-of-choice]] [[def-synthetic-likelihood]]

[F5] Total variation is the event-probability supremum. [[def-total-variation-distance-for-probability-laws]]

## Counterexample

**Given:** The finite model and prior in Facts & Assumptions.

1.1 Each row is nonnegative and sums to one. The laws differ because $P_0(\{1\})=1/4$ whereas $P_1(\{1\})=3/8$; hence the identity estimand is identifiable by [F3]. The finite identity summary is measurable because the source and target carry their stated power-set and Borel sigma-algebras. [given, F2, F3, algebra]

1.2 Under $P_0$, $E[S]=(0+1+2+3)/4=3/2$ and $E[S^2]=(0+1+4+9)/4=7/2$. Under $P_1$, the corresponding weighted sums are $(9+6+21)/24=3/2$ and $(9+12+63)/24=7/2$. Thus both variances equal $7/2-(3/2)^2=5/4>0$, so the one-dimensional covariance is positive definite and the ideal Gaussian synthetic likelihood is defined by [F2], [F4]. [F2, F4, given, algebra]

2.1 The exact likelihoods at $y=1$ are $1/4$ and $3/8$, so the equal-prior exact posterior mass at $\theta=1$ is $(3/8)/(1/4+3/8)=3/5$. The ideal Gaussian synthetic likelihoods coincide because their means and variances coincide. Their common positive value cancels in normalization against the equal prior, so the synthetic-likelihood posterior has mass $1/2$ at $\theta=1$. [F1, F2, step 1.2, algebra]

3.1 The two posterior measures differ on event $\{1\}$ by $|3/5-1/2|=1/10$, so their total-variation distance is at least $1/10$ by [F5]. Thus matching the first two moments does not remove this posterior target bias. [F5, step 2.1, algebra] ∎

