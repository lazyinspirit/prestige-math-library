---
id: def-finite-budget-stopped-event-kernel
kind: definition
title: Finite-budget stopped-event kernel with a cemetery outcome
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measurability-of-integration-against-a-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, `3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, `6"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Definition

Let $(E,\mathcal E)$ be a standard Borel space, $M$ a probability kernel on it, and $T,R\in\mathcal E$ disjoint target and return sets. Write $S=E\setminus(T\cup R)$ and let $C=\{\mathtt{hit},\mathtt{return},\partial\}$ have the discrete sigma-algebra; $\partial$ is the cemetery outcome meaning the budget expired before either set was reached.

For budget $m=0$, define
$
\kappa_0(x,\cdot)=
\begin{cases}
\delta_{\mathtt{hit}},&x\in T,\\
\delta_{\mathtt{return}},&x\in R,\\
\delta_{\partial},&x\in S.
\end{cases}
$
For $m\ge0$, define the finite-budget stopped-status kernel recursively by
$
\kappa_{m+1}(x,\cdot)=
\begin{cases}
\delta_{\mathtt{hit}},&x\in T,\\
\delta_{\mathtt{return}},&x\in R,\\
\displaystyle\int_E\kappa_m(y,\cdot)\,M(x,dy),&x\in S.
\end{cases}
$
Thus a target hit at the initial state counts at budget zero; each additional budget unit permits one more transition. The **exact-hitting status kernel**, when used, is the limit law of these statuses and treats nontermination as $\partial$; it is an exact sampler for $P_x(\tau_T<\tau_R)$ only when the requested event is the finite first hit represented by that limit. The budgeted kernel is distinct from an exact-hitting oracle.
