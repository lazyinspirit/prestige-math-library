---
id: ex-dirichlet-process-alpha-null-observation-fiber
kind: example
title: "A base-null observation is a prior-predictive null fiber"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - lem-countable-discrete-space-is-standard-borel
  - prop-dirac-measure-is-a-probability-measure
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - thm-dirichlet-process-posterior-update
  - thm-dirichlet-process-polya-urn-predictive-law
  - def-bayesian-posterior-as-regular-conditional-law
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normalized-gamma construction and posterior result."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Section 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapter 3"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Example

Assume AC. Let $\mathsf X=\{a,b\}$ with the discrete sigma-algebra and let
$\alpha=\delta_a$, so $\alpha(\{b\})=0$. In the model
$G\sim DP(\alpha)$ and $X_1\mid G\sim G$, examine the data event
$\{X_1=b\}$.

Separately, let $(\mathsf Y,\mathcal B)$ be any standard Borel space, let
$\gamma$ be a finite nonzero diffuse measure (meaning
$\gamma(\{z\})=0$ for every $z\in\mathsf Y$), and fix one $y\in\mathsf Y$.
The verification also checks the posterior-version freedom on this fixed
singleton data fiber.

## Facts & Assumptions

**Given:** The finite space and base measure in the Example.

[A1] Assume AC, as required by the process existence and posterior results. [[def-axiom-of-choice]].

[F1] A cell with zero base mass has $G$-mass zero almost surely under $DP(\alpha)$. [[def-dirichlet-process]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]].

[F2] Under AC, for every finite nonzero base measure $\gamma$ on a standard Borel space, the normalized-Gamma theorem defines $DP(\gamma)$ and the one-observation posterior update gives the measurable kernel $z\mapsto DP(\gamma+\delta_z)$ satisfying disintegration. [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]] [[thm-dirichlet-process-posterior-update]] [[def-bayesian-posterior-as-regular-conditional-law]].

[F3] Under AC, in a one-draw model on a standard Borel space with finite nonzero base measure $\beta$, $\Pr(X_1\in A)=\beta(A)/\beta(\mathsf X)$ for every measurable $A$. [[thm-dirichlet-process-polya-urn-predictive-law]].

[F4] In a standard Borel space every singleton is measurable: under a Polish presentation it corresponds to a closed singleton. [[def-standard-borel-space]].

[F5] A probability kernel has probability-measure sections and measurable evaluations; its disintegration identity is checked on measurable rectangles. [[def-measure-kernel-and-probability-kernel]] [[def-probability-measure]] [[def-bayesian-posterior-as-regular-conditional-law]].

[F6] Every nonempty finite discrete space is standard Borel. Dirac set functions are probability measures; [[lem-countable-discrete-space-is-standard-borel]] [[prop-dirac-measure-is-a-probability-measure]].

## Verification

**Given:** The finite two-point model in the Example and, separately, the standard Borel diffuse-base model $(\mathsf Y,\mathcal B,\gamma)$ with fixed $y\in\mathsf Y$.

1.1 The nonempty two-point discrete space $\mathsf X$ is standard Borel by [F6], and $\alpha=\delta_a$ is a probability measure by [F6], hence a finite nonzero base measure of total mass $1$. Thus [F1] applies: $G(\{b\})=0$ almost surely. Since $\Pr(X_1=b\mid G)=G(\{b\})$, integration over the prior gives $\Pr(X_1=b)=0$, also agreeing with [F3]. [A1, F1, F3, F6, given, algebra]

2.1 The formula in [F2] assigns $K(b)=DP(\delta_a+\delta_b)$ at the null data value. Define another kernel by $K'(a)=K(a)$ and $K'(b)=DP(\delta_a)$. Both sections are probability measures, and $K'$ is measurable because $\{b\}$ is measurable in the discrete data space. For any measurable event $C$ in $\mathcal P(\mathsf X)$, the disintegration integrals for $K$ and $K'$ differ only at $b$, which has data-marginal mass zero by step 1.1. Thus both are posterior versions; the update formula at $b$ is a version choice, not evidence-supported learning. [F2, step 1.1, construct]

3.1 In the separate diffuse-base model, [F3] gives data-marginal mass $M(\{y\})=\gamma(\{y\})/\gamma(\mathsf Y)=0$. Let $K(z)=DP(\gamma+\delta_z)$ be the posterior kernel from [F2] and set $K'(z)=K(z)$ for $z\ne y$, $K'(y)=DP(\gamma)$. By [F4], $\{y\}$ is measurable. For every measurable $C\subseteq\mathcal P(\mathsf Y)$, $z\mapsto K'(z,C)=\mathbf1_{\mathsf Y\setminus\{y\}}(z)K(z,C)+\mathbf1_{\{y\}}(z)DP(\gamma)(C)$ is measurable; each section is a probability measure, so [F5] makes $K'$ a probability kernel. The disintegration integrals for $K$ and $K'$ agree on every measurable rectangle because the kernels differ only on $\{y\}$ and $M(\{y\})=0$. Thus $K'$ is also a posterior version, proving that the displayed update value at this fixed null fiber is not uniquely determined. [F2, F3, F4, F5, algebra, construct] ∎
