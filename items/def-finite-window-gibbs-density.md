---
id: def-finite-window-gibbs-density
kind: definition
title: "Finite-window Gibbs density relative to a Poisson reference"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-window-spatial-observation
  - def-poisson-and-cox-point-process
  - def-measure-with-density
  - def-probability-measure
  - def-nonnegative-lebesgue-integral
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "Countable Choice is inherited through the window's Lebesgue measure; the density definition uses no further choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §§4.4–4.6, PDF pp. 62–69: point-process densities relative to a Poisson reference, finite Gibbs models, and Strauss examples."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, finite-intensity construction and law, PDF pp. 33–34: the finite Poisson reference measure."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $W$ and $\mathcal C(W)$ be as in
[[def-finite-window-spatial-observation]], and let $Q$ be a specified
finite-window Poisson probability measure on that space. For each parameter
$\theta$, let $\mathcal S_\theta\subseteq\mathcal C(W)$ be a measurable
admissible support and let $H_\theta:\mathcal S_\theta\to\mathbb R$ be
measurable. Extend the weight by zero off $\mathcal S_\theta$:
$w_\theta(\eta)=e^{-H_\theta(\eta)}$ on $\mathcal S_\theta$ and $0$
elsewhere. Put
$$Z_\theta:=\int_{\mathcal C(W)}w_\theta(\eta)\,Q(d\eta).$$
Only when $0<Z_\theta<\infty$ do these data define the finite-window Gibbs
law, with density
$$\frac{dP_\theta}{dQ}(\eta)=Z_\theta^{-1}w_\theta(\eta).$$
The support and normalizer are part of the model specification. No general
existence, mixing, consistency, or asymptotic result is included in this
definition.
