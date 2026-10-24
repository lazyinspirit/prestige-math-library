---
id: def-finite-window-pseudolikelihood
kind: definition
title: "Finite-window point-process pseudolikelihood"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-window-spatial-observation
  - def-papangelou-conditional-intensity
  - lem-deletion-of-one-point-is-measurable
  - def-nonnegative-lebesgue-integral
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "Countable Choice is inherited through the window's Lebesgue measure; the definition uses no further choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.9, Definition 4.3 and Examples 4.12/4.15, PDF pp. 72–73: pseudolikelihood, its Poisson case, and Strauss formula."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, Theorem 4.1 and finite-intensity proof, PDF pp. 39–43: the conditional-intensity identity used as input."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $W$ and $\mathcal C(W)$ be as in
[[def-finite-window-spatial-observation]]. Fix an observed configuration
$\eta\in\mathcal C(W)$ and a boundary convention $b$ (a specified exterior
configuration held fixed, or no exterior configuration). When a model supplies
a Papangelou conditional intensity $\lambda_\theta(u;\zeta,b)$, define its
**finite-window pseudolikelihood criterion** by
$$\operatorname{PL}_{W,b}(\theta;\eta):=\left(\prod_{x\in\eta}\lambda_\theta(x;\eta-\delta_x,b)\right)\exp\left\{-\int_W\lambda_\theta(u;\eta,b)\,\ell_W(du)\right\}.$$
The finite product counts multiplicities, the empty product is $1$, and one
occurrence is deleted in each event factor. The criterion is used only when
the displayed intensity values and integral are finite; a zero event factor
makes the criterion zero. The exterior pattern $b$ is fixed throughout the
calculation. This criterion is not asserted to be a joint likelihood, and its
definition supplies no consistency or asymptotic guarantee.
