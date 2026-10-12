---
id: def-cm-likelihood-function
kind: definition
title: "Likelihood functions for a dominated parametric family"
status: draft
origin: pipeline
domain: mathematics
deps: [def-measurable-function-between-measurable-spaces, def-measurable-space, def-measure, def-measure-with-density, def-nonnegative-lebesgue-integral]
dependency_roles:
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-measurable-space: mathematical-premise
  def-measure: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 9.3 and Definition 9.7; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
    - title: "S. Greenland, S. J. Senn, K. J. Rothman, J. B. Carlin, C. Poole, S. N. Goodman and D. G. Altman, 'Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations', European Journal of Epidemiology 31 (2016), 337–350, section 'Uncertainty, probability, and statistical significance'"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/"
verification:
  precheck: n/a
---

## Definition

Let $(S,\mathcal S)$ be a measurable space, the **data space**
([[def-measurable-space]]), let $\nu$ be a measure on it ([[def-measure]]),
let $\Theta$ be a nonempty set, the **parameter set**, and let
$$\theta\longmapsto p_\theta,\qquad p_\theta:S\to[0,+\infty],$$
be a family of measurable functions
([[def-measurable-function-between-measurable-spaces]]) such that
$$\int_S p_\theta\,d\nu=1\qquad\text{for every }\theta\in\Theta$$
([[def-nonnegative-lebesgue-integral]]). Each $p_\theta$ is the **density**
of a probability measure $\mathbb P_\theta$ with respect to $\nu$,
$$\mathbb P_\theta(A)=\int_A p_\theta\,d\nu,\qquad A\in\mathcal S$$
([[def-measure-with-density]]); the fixed measure $\nu$ is the **dominating
measure** of the family.

For an observed datum $s\in S$ the **likelihood function** is
$$L_s:\Theta\longrightarrow[0,+\infty],\qquad L_s(\theta):=p_\theta(s),$$
and the **log-likelihood function** is
$$\ell_s:\Theta\longrightarrow[-\infty,+\infty],\qquad \ell_s(\theta):=\begin{cases}\log L_s(\theta),&L_s(\theta)>0,\\ -\infty,&L_s(\theta)=0.\end{cases}$$

### Well-definedness and conventions

For fixed $s$ the value $p_\theta(s)$ is a well-defined element of
$[0,+\infty]$ for each $\theta$, so $L_s$ and $\ell_s$ are defined as
functions on $\Theta$; no measurability or integrability in $\theta$ is
asserted, and no topology on $\Theta$ is assumed. The densities $p_\theta$
and the dominating measure $\nu$ are data of the model: a likelihood claim
must name the pair $(\nu,(p_\theta)_{\theta\in\Theta})$ it uses, since the
same family of probability measures can be represented by different pairs.

The value $L_s(\theta)$ is the density of the observed datum under the
parameter $\theta$; it is not a probability of the parameter value $\theta$,
and no distribution on $\Theta$ is part of this definition.
