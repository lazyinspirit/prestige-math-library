---
id: def-stationary-point-process-and-intensity
kind: definition
title: "Stationarity, finite intensity, and spatial ergodicity"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-spatial-recentering-action
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, §§8.1 and 8.5, PDF pp.81–82 and 89–92: stationarity, intensity, and the translation-invariant sigma-field."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: stationary point-process conventions and intensity."
verification:
  precheck: n/a
---

## Definition

Work with a point process $\eta$ on $\mathbb R^d$ and its law $P_\eta$ on the evaluation-measurable configuration space from [[def-random-measure-and-locally-finite-point-process]]. Recentering $\theta_x$ is as in [[def-spatial-recentering-action]]. The process is **stationary** if $\theta_x\eta$ has law $P_\eta$ for every $x\in\mathbb R^d$.

Put $Q=[0,1)^d$. Its **intensity** is $\rho:=\mathbb E[\eta(Q)]$. It has **finite positive intensity** when $0<\rho<\infty$. The item [[thm-stationary-point-process-intensity-measure-is-rho-lebesgue]] proves that its mean measure is $\rho\lambda_d$ under the stated measure-theoretic assumptions.

The **translation-invariant sigma-algebra** is
$$\mathcal I_\eta:=\{A\text{ in the configuration sigma-algebra}: P_\eta(\theta_x^{-1}A\mathbin{\triangle}A)=0\text{ for every }x\in\mathbb R^d\}.$$
It is a sigma-algebra because symmetric-difference nullity is preserved by complements and countable unions. The stationary point process is **ergodic under translations** if every $A\in\mathcal I_\eta$ has $P_\eta(A)\in\{0,1\}$. This is the full $\mathbb R^d$ action convention, not ergodicity of one selected unit shift.

**Axiom convention.** This item carries AC and Countable Choice through the transitive well-definedness dependencies of the point-process supplier; stationarity and the scalar intensity definition themselves use no choices.
