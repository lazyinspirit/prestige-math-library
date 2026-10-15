---
id: def-adaptive-mcmc-containment
kind: definition
title: Containment for adaptive MCMC
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-diminishing-adaptation
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§6, definition of the convergence-time function and Theorem 13, pp. 13–14."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "Slides 22–23: convergence-time function and containment."
axiom_use: "No choice axiom is used in this definition."
---

## Definition

Use the adaptive MCMC setup of [[def-diminishing-adaptation]]. For
$\epsilon>0$, a state $x\in\mathsf X$, and a fixed parameter $\gamma\in\Gamma$,
define the convergence time
$$M_\epsilon(x,\gamma):=\inf\{m\in\mathbb N:m\ge1,\ \lVert P_\gamma^m(x,\cdot)-\pi\rVert_{\rm TV}\le\epsilon\},$$
with $\inf\varnothing=+\infty$. The power $P_\gamma^m$ is the $m$-fold
composition of the fixed kernel $P_\gamma$; it is not the adaptive transition
law. Assume $M_\epsilon(X_n,\Gamma_n)$ is measurable for each $n$ and
$\epsilon>0$.

For a specified initial probability law $\mu_0$ of $(X_0,\Gamma_0)$, the
adaptive process has **containment** if for every $\epsilon,\delta>0$ there is
an integer $N=N(\epsilon,\delta)$ such that
$$\mathbb P_{\mu_0}\!\left(M_\epsilon(X_n,\Gamma_n)\le N\right)\ge1-\delta\quad\text{for every }n\ge0.$$
A process initialized at the fixed pair $(x_*,\gamma_*)$ is the special case
$\mu_0=\delta_{(x_*,\gamma_*)}$. Thus containment says that
the fixed-kernel convergence times, evaluated at the current state and
parameter, form a sequence bounded in probability under the specified initial
law. It does not assert a uniform deterministic bound for every possible
state and parameter.
