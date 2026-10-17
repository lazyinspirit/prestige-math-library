---
id: def-state-space-filtering-laws
kind: definition
title: Filtering, predictive, and smoothing laws in a finite-horizon state-space model
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-parametric-statistical-model
  - def-standard-borel-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - def-conditional-law-given-a-random-element
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
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
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§2.1–2.3"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
axiom_use: "Assume AC as in the finite-horizon model contract for the path law. This definition adds no choice; existence of the conditional kernels is stated separately."
---

## Definition

Assume AC and fix a finite horizon $T\ge0$ with a state-space model by
probability kernels as in
[[def-general-state-space-model-by-kernels]]. If $T=0$, put $\Omega_T=E_0$;
otherwise put $\Omega_T=E_0\times E_1\times F_1\times\cdots\times E_T\times
F_T$. Let $\mathcal Z_T$ be the corresponding finite-product sigma-algebra
and write $(\Omega_T,\mathcal Z_T,P_T)$ for its finite-horizon probability
space. The law $P_T$ is the unique law supplied by
[[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]. Let $X_t$ and
$Y_t$ be the coordinate random elements taking values in $E_t$ and $F_t$. For
$t\ge1$, write $Y_{1:t}:=(Y_1,\ldots,Y_t)$ and
$\mathsf F_{1:t}:=F_1\times\cdots\times F_t$ with its finite-product
sigma-algebra; let $\mathsf F_{1:0}$ be a singleton and $Y_{1:0}$ its constant
map. The factors are standard Borel, meaning measurably isomorphic to Polish
spaces ([[def-standard-borel-space]]), and their finite products are standard
Borel ([[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]).

The **initial filtering kernel** $\pi_0:\mathsf F_{1:0}\to E_0$ assigns
$\mu_0$ to the unique empty history; it is the conditional law of $X_0$ given
the trivial history. For $1\le t\le T$, a **filtering kernel at time $t$** is
a probability kernel $\pi_t:\mathsf F_{1:t}\to E_t$ such that
$\omega\mapsto\pi_t(Y_{1:t}(\omega),\cdot)$ is a regular conditional
distribution of $X_t$ given $\sigma(Y_{1:t})$. For $1\le t\le T$, a
**predictive kernel at time $t$** is a probability kernel
$\pi_{t|t-1}:\mathsf F_{1:t-1}\to E_t$ whose composition with $Y_{1:t-1}$
is a regular conditional distribution of $X_t$ given
$\sigma(Y_{1:t-1})$. A **finite-horizon smoothing kernel** is a probability
kernel $\psi_T:\mathsf F_{1:T}\to E_0\times\cdots\times E_T$ whose
composition with $Y_{1:T}$ is a regular conditional distribution of the full
state path $(X_0,\ldots,X_T)$ given $\sigma(Y_{1:T})$. Here a regular
conditional distribution is an everywhere probability kernel satisfying the
conditional event identities in
[[def-regular-conditional-distribution]], and a conditional law given a
random element is its data-indexed kernel form in
[[def-conditional-law-given-a-random-element]].

These kernels are versions: their values can be changed on a measurable set
of observation histories of probability zero without changing the conditional
identities. No density is assumed in these definitions. The state-space model
here is one fixed law. A parametric statistical model is instead a map
$\theta\mapsto P_\theta$ from a parameter set to probability laws; its
measurability is not asserted without a parameter sigma-algebra
([[def-parametric-statistical-model]]).
