---
id: def-generalized-bayes-loss-update-and-temperature
kind: definition
title: "Generalized Bayes loss update and temperature"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-standard-borel-space
  - def-probability-measure
  - def-measure-with-density
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-exponential-is-strictly-increasing
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $(\Theta,\mathcal T)$ be a standard Borel parameter space
([[def-standard-borel-space]]). Let $\mathsf X$ be a set of possible observations,
and let $\ell:\Theta\times\mathsf X\to\mathbb R$ be a **loss** whose section
$\ell_x(\theta):=\ell(\theta,x)$ is $\mathcal T$-measurable for every
$x\in\mathsf X$. A **prior** is a probability measure $\pi$ on
$(\Theta,\mathcal T)$ ([[def-probability-measure]]). A **temperature** is a
fixed scalar $w>0$ that multiplies the observed loss.

For $x\in\mathsf X$, define the normalizer
$$Z_w(\pi,x):=\int_\Theta \exp\{-w\ell_x(\theta)\}\,\pi(d\theta).$$
The integrand is measurable by continuity of the exponential and composition
of measurable maps ([[thm-exponential-is-strictly-increasing]],
[[thm-composition-with-borel-functions-preserves-measurability]]). When
$0<Z_w(\pi,x)<\infty$, the **generalized Bayes loss update** (or **Gibbs loss
update**) is the set function
$$G_{w,\pi,x}(A):=\frac{1}{Z_w(\pi,x)}\int_A\exp\{-w\ell_x(\theta)\}\,\pi(d\theta),\qquad A\in\mathcal T.$$
It is a positive scalar multiple of the measure with density
$\exp\{-w\ell_x\}$ relative to $\pi$
([[def-measure-with-density]]).
If the normalizer is zero or infinite, this definition supplies no update.

## Remarks

- This is a fixed-observation update from a supplied probability prior. It does
  not specify a sampling model or claim that the loss is a likelihood.
- The standard Borel assumption is the scope adopted by the BCS-19 design; the
  fixed-fiber normalization formula itself uses only the stated measurable
  space and probability prior.
