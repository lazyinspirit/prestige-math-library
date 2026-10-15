---
id: def-papangelou-conditional-intensity
kind: definition
title: "Papangelou conditional intensity on a finite window"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: ["def-finite-window-spatial-observation","def-probability-measure","def-expectation-of-a-nonnegative-or-integrable-random-variable","def-nonnegative-lebesgue-integral","def-extended-real-valued-measurable-function","def-product-sigma-algebra-and-finite-product-sigma-algebras","lem-deletion-of-one-point-is-measurable","thm-measurability-of-integration-against-a-kernel"]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "Countable Choice is inherited through the window's Lebesgue measure; the defining identity uses no further choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.5, PDF pp. 64–67: the finite-window conditional-intensity identity and density-ratio formula."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, Theorem 4.1 and proof, PDF pp. 39–41: the Mecke equation and its add-one convention."
verification:
  precheck: n/a
---

## Definition

Let $W$, $\ell_W$, and $\mathcal C(W)$ be as in
[[def-finite-window-spatial-observation]]. Let $P_{\theta,b}$ be a specified
probability law on $\mathcal C(W)$; $b$ denotes a fixed exterior configuration
when the model uses a boundary condition, and is omitted when it does not. For
this fixed boundary convention, a jointly measurable function
$\lambda_\theta:W\times\mathcal C(W)\to[0,+\infty]$ is a
**Papangelou conditional intensity relative to $\ell_W$** for this law and
boundary convention; the notation $\lambda_\theta(u;\eta,b)$ displays the
fixed boundary label but $b$ is not an additional variable in its measurable
domain. Omit $b$ when there is no exterior condition or when the fixed
convention is clear from context. The defining identity holds when, for every
nonnegative product-measurable
$h:W\times\mathcal C(W)\to[0,\infty]$,
$$\mathbb E_{\theta,b}\left[\sum_{x\in\eta}h(x,\eta-\delta_x)\right]=\mathbb E_{\theta,b}\left[\int_W h(u,\eta)\lambda_\theta(u;\eta,b)\,\ell_W(du)\right].$$
The sum runs over atom occurrences, so $\eta-\delta_x$ deletes one
occurrence; if $b$ is used, it is fixed on both sides. The identity is the
definition of the Papangelou intensity used on this page. It does not assert
that every finite-window law has such a function.

The deletion operation and the resulting measurable random sum use
[[lem-deletion-of-one-point-is-measurable]]. On the occurrence domain, the
deletion-composition is measurable; extend it by zero off that measurable
domain and integrate against the evaluation kernel $K(\eta,B)=\eta(B)$. This
integral is the displayed sum, and its measurability follows from the
deletion map and [[thm-measurability-of-integration-against-a-kernel]], as
used in the deletion lemma.
