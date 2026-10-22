---
id: def-csm-frontier-stationary-path-entropy
kind: definition
title: Stationary path entropy for a finite-state jump process
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-path-density
  - thm-csm-frontier-finite-rate-forward-equation
  - def-natural-logarithm
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  thm-csm-frontier-finite-rate-forward-equation: mathematical-premise
  def-natural-logarithm: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Sections 4.1–4.3, PDF pp. 6–7, trajectory weights, time reversal and steady-state entropy production.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Sections 2.1–2.2, PDF pp. 3–7, the finite-state jump action and stationary time reversal.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $E$ be a finite nonempty state set, let $q_{xy}\ge0$ be finite time-homogeneous transition rates for distinct $x,y\in E$, and let $Q$ be their row generator. Let $\pi$ be a strictly positive probability row vector with $\pi Q=0$; the forward-equation theorem shows that this is a stationary law when used initially. Assume symmetric support: $q_{xy}>0$ if and only if $q_{yx}>0$. For a sample path on a finite interval $[0,T]$ with successive jump states $x_0,x_1,\ldots,x_n$, define its stationary path entropy by

$$S_T:=\sum_{j=1}^n\log\left(\frac{\pi_{x_{j-1}}q_{x_{j-1}x_j}}{\pi_{x_j}q_{x_jx_{j-1}}}\right).$$

The bounded-rate path-density lemma shows that the process is nonexplosive on every finite horizon. It also gives zero density to every finite path sequence containing a transition $x\to y$ with $q_{xy}=0$. Since there are countably many finite state sequences, the union of those path strata is null. Hence almost surely the path has finitely many jumps and every jump uses a positive-rate edge. Define $S_T$ by the displayed sum on this full-probability set, and set $S_T=0$ on its null complement, including paths with infinitely many jumps. Every logarithm on the full-probability set is defined because $\pi_x>0$ and symmetric support makes both rates in each jump ratio positive. Its Borel preimages are countable unions of measurable path strata indexed by jump number and finite state sequence, together with the null-complement convention, so $S_T$ is a real random variable. The empty sum for a path with no jumps is $0$. The quantity $S_T$ is dimensionless and depends only on the ordered jump states, not on their times. Detailed balance with respect to $\pi$ means $\pi_xq_{xy}=\pi_yq_{yx}$ for every pair $x\ne y$; under this condition each jump contribution is zero, but no detailed-balance condition is part of this definition.

## Definition references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-jump-path-density]]

[[thm-csm-frontier-finite-rate-forward-equation]]

[[def-natural-logarithm]]

## Remarks

$S_T$ is a mathematical log-likelihood-ratio statistic for paths. It is not automatically the physical entropy change of a reservoir or system. A thermodynamic interpretation requires additional physical assumptions, such as a specified relation between each forward/reverse rate ratio and the corresponding reservoir entropy transfer; if a model identifies $k_BS_T$ with an entropy change, its units are $\mathrm{J/K}$.
