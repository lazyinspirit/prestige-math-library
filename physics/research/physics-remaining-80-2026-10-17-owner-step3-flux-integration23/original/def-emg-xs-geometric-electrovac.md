---
id: def-emg-xs-geometric-electrovac
kind: definition
title: Geometric electrovac equations and flux normalization
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  lem-emg-lorentz-hodge-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.112), printed pp. 201-202 (PDF pp. 207-208): source-free Einstein-Maxwell equations and the electric/magnetic two-form conventions"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): RN starting solution and direct Einstein-Maxwell verification of its KN extension"
physical_scope: null
---


## Definition

Let $(M,g,N,o)$ be a smooth oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$; $o$ is the manifold orientation, $N$ is a smooth future timelike field, and the metric volume form is chosen to agree with $o$. Let $\nabla$ be the metric-selected connection, let $\mathcal F$ be a smooth real two-form on $M$, and use the curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$.
Define
$$Q_{ab}(\mathcal F):=\mathcal F_{ac}\mathcal F_b{}^c-\frac14 g_{ab}\mathcal F_{cd}\mathcal F^{cd},$$
where both raised indices use $g^{-1}$. A **geometric electrovac datum with zero cosmological constant** is the tuple $(M,g,N,o,\mathcal F)$ satisfying
$$d\mathcal F=0,\qquad d(\star_g\mathcal F)=0,\qquad \operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F)$$
at every point of $M$. Here $\star_g$ is the Lorentzian Hodge map determined by $g$ and $o$; on two-forms $\star_g^2=-1$. No material current, matter tensor, global potential, asymptotic flatness, positive mass, horizon, or extension condition is part of this definition.

For an oriented embedded sphere $S$ on which the integrals converge, define its geometric electric and magnetic flux parameters by
$$q_e(S):=\frac1{4\pi}\int_S\star_g\mathcal F,\qquad q_m(S):=\frac1{4\pi}\int_S\mathcal F.$$
When $M$ and the coordinates have length units, these parameters have units of length. A magnetic flux need not have a global potential; no flux quantization is included. The background Lorentzian geometry and Hodge conventions carry the countable-choice assumption $\mathrm{AC}_\omega$ of their named suppliers; the algebraic identities in this definition require no additional choice principle.

