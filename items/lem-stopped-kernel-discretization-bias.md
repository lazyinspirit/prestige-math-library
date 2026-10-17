---
id: lem-stopped-kernel-discretization-bias
kind: lemma
title: Truncation and total-variation errors for stopped crossings
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-feynman-kac-path-targets-and-normalizers
  - def-finite-budget-stopped-event-kernel
  - lem-finite-budget-stopped-normalizer
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, `3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, Theorem 1.5 and `5"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Statement

Assume AC. In the stopped-event setup of [[def-finite-budget-stopped-event-kernel]], with $(E,\mathcal E)$ standard Borel and initial probability law $\mu$, let $p=P_\mu(\tau_T<\tau_R)$ and let $p_m$ be the finite-budget normalizer of [[lem-finite-budget-stopped-normalizer]]. Then
$
0\le p-p_m=P_\mu(\tau_T<\tau_R,\tau_T>m)\le P_\mu(\tau_T\wedge\tau_R>m).
$
Thus the finite-budget stopped normalizer estimates the truncated event; a rate for its bias requires a tail bound for the stopping time. Separately, assume AC and let both finite-horizon Feynman–Kac models have the same finite horizon $H\in\mathbb N_0$, the same standard Borel state spaces $(\mathsf X_j,\mathcal X_j)$ for $0\le j\le H$, the same initial law $\mu_0$, and the same potentials $G_j:\mathsf X_j\to[0,1]$ for $0\le j\le H$. Let their transition kernels be $M_j,\widetilde M_j:\mathsf X_{j-1}\rightsquigarrow\mathsf X_j$ for $1\le j\le H$, and suppose
$$
\sup_x\|M_j(x,\cdot)-\widetilde M_j(x,\cdot)\|_{\rm TV}\le\epsilon_j,\qquad \epsilon_j\ge0,
$$
where $\|\nu-\nu'\|_{\rm TV}=\sup_B|\nu(B)-\nu'(B)|$. If $Z_H^M$ and $Z_H^{\widetilde M}$ are the normalizers in the common Feynman–Kac setup of [[def-feynman-kac-path-targets-and-normalizers]], then $|Z_H^M-Z_H^{\widetilde M}|\le\sum_{j=1}^H\epsilon_j$. If a grid-detected crossing event $A_h$ is contained in a continuous-time target event $A$, its probability bias is exactly $P(A\setminus A_h)$; no grid-error rate follows without a separate path regularity or crossing-probability bound.

## Facts & Assumptions

**Given:** AC, the standard Borel stopped-event model and its finite-budget probability, and two common finite-horizon Feynman–Kac models with identical initial law, state spaces, and potentials, differing only in transition kernels by the stated total-variation bounds.

[F1] [[def-finite-budget-stopped-event-kernel]]: $\partial$ is the budget-censored outcome and $\kappa_m$ records success only when the target is hit before return by time $m$.

[F2] [[def-measure-kernel-and-probability-kernel]]: A probability kernel has probability-measure rows and measurable evaluations.

[F3] [[def-probability-measure]]: Probability measures have total mass one and are countably additive.

[F4] [[lem-finite-budget-stopped-normalizer]]: The finite-budget hit probability is $p_m=P_\mu(\tau_T<\tau_R,\tau_T\le m)$.

[F5] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a bounded measurable function against a kernel gives a measurable function of the source state.

[F6] [[def-feynman-kac-path-targets-and-normalizers]]: AC and a finite sequence of standard Borel state spaces, one initial law, and the ordered transition kernels and potentials define each finite-horizon Feynman–Kac normalizer.

## Proof

1.1 By [F4], $p_m=P_\mu(\tau_T<\tau_R,\tau_T\le m)$. The events increase to $\{\tau_T<\tau_R\}$, and the omitted part at budget $m$ is $\{\tau_T<\tau_R,\tau_T>m\}\subseteq\{\tau_T\wedge\tau_R>m\}$. Countable additivity [F3] gives the displayed difference and tail bound. [F1, F3, F4, given]

1.2 Replace the transition kernels one at a time and telescope the difference of the two normalizers. For the term replacing $M_j$, the earlier kernels and potentials define a finite measure of mass at most one, because the initial law is a probability and every potential lies in $[0,1]$. The remaining kernel-potential composition is a measurable function $g_j$ with $0\le g_j\le1$, measurable by [F5] and kernel composition. By the layer-cake identity $g_j(y)=\int_0^1\mathbf1_{\{g_j(y)>t\}}\,dt$, the total-variation definition bounds $|M_jg_j(x)-\widetilde M_jg_j(x)|\le\epsilon_j$ for every $x$. Integrating against that finite measure bounds the telescoping term by $\epsilon_j$; summing yields $\sum_j\epsilon_j$. [F2, F3, F5, F6, given, algebra]

2.1 If $A_h\subseteq A$, then $P(A)-P(A_h)=P(A\setminus A_h)$ by finite additivity on disjoint measurable sets. A bound on this value requires an additional estimate for the missed-crossing event; continuity of a path alone does not supply a uniform grid-rate without quantitative regularity. [F3, given, algebra] ∎
