---
id: alg-recursive-bayesian-filter
kind: algorithm
title: Recursive Bayesian filtering under dominated observations
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - def-general-state-space-model-by-kernels
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-bayes-formula-for-dominated-kernels
justified_by:
  - thm-dominated-state-space-filtering-recursion
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
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§2.1–2.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
axiom_use: "AC is assumed through the state-space model and conditional-kernel setup. Once the model kernels and densities are supplied, the recursive integrations, finite-positive normalization, and predictive fillers use no additional choice."
---

## Definition

Assume AC and a finite-horizon model as in
[[def-general-state-space-model-by-kernels]]. For each $1\le t\le T$, suppose
the observation kernel has a supplied product-measurable density
$g_t:E_t\times F_t\to[0,\infty]$ with respect to a sigma-finite measure
$\nu_t$ on $F_t$, normalized so that
$$G_t(x,B)=\int_Bg_t(x,y)\,\nu_t(dy),\qquad\int_{F_t}g_t(x,y)\,\nu_t(dy)=1$$
for every state $x$ and measurable $B\subseteq F_t$.

The procedure takes the initial law $\mu_0$, transition kernels $K_t$,
observation densities $g_t$ and measures $\nu_t$ as inputs. It defines
data-indexed prediction, evidence, and filtering functions on every
observation history as follows.

1. Initialize $\pi_0$ on the singleton empty-history space by
$\pi_0(*,A)=\mu_0(A)$.

2. For $t=1,\ldots,T$, each history $h\in\mathsf F_{1:t-1}$ and each
measurable state set $A\in\mathcal E_t$, form the predictive measure
$$\widehat\pi_t(h,A):=\int_{E_{t-1}}K_t(x,A)\,\pi_{t-1}(h,dx).$$

3. For each $y\in F_t$, calculate the evidence density
$$z_t(h,y):=\int_{E_t}g_t(x,y)\,\widehat\pi_t(h,dx).$$

4. Define the filtering measure at $(h,y)$ by
$$\pi_t(h,y,A):=\begin{cases}\displaystyle\frac{\int_Ag_t(x,y)\,\widehat\pi_t(h,dx)}{z_t(h,y)},&0<z_t(h,y)<\infty,\\[6pt]\widehat\pi_t(h,A),&z_t(h,y)=0\text{ or }z_t(h,y)=\infty.\end{cases}$$
Use $\pi_t$ as the input filtering function at the next time step.

The procedure returns the initialized filter $\pi_0=\mu_0$ and, for every
$1\le t\le T$, $\widehat\pi_t$, $z_t$, and $\pi_t$. It is an exact
measure-valued recursion; it makes no claim that the integrals have closed
forms or can be evaluated with finite computational cost.
[[thm-dominated-state-space-filtering-recursion]] proves that the returned
time-$t$ functions are predictive and filtering kernels for the specified
finite-horizon model.
