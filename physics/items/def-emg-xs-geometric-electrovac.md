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
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-smooth-embedding
  - def-pullback-of-a-differential-form
  - prop-integration-over-an-oriented-embedded-submanifold
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - def-compactly-supported-differential-form
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
dependency_roles:
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-embedding: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-integration-over-an-oriented-embedded-submanifold: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  def-compactly-supported-differential-form: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
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

For flux integration, an **oriented embedded smooth sphere** means a compact smooth two-dimensional manifold $S$ without boundary, homeomorphic to the unit sphere $\{x\in\mathbb R^3:x\cdot x=1\}$, with a specified orientation in the sense of [[def-oriented-smooth-manifold-and-oriented-chart]] and a smooth inclusion $i:S\hookrightarrow M$. Here smooth embedding means an injective immersion that is a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]); identify $S$ with that image. The sphere orientation is specified independently of the spacetime orientation; for coordinate spheres used below it is the stated outward orientation.

For a smooth two-form $\eta$ on a neighborhood of $i(S)$, use the pullback convention of [[def-pullback-of-a-differential-form]],
$$(i^*\eta)_p(v,w)=\eta_{i(p)}(di_pv,di_pw),\qquad p\in S,\quad v,w\in T_pS.$$
By [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]], this is a smooth top form on $S$. Its support is the closure in $S$ of its nonzero locus ([[def-compactly-supported-differential-form]]), hence is closed in compact $S$ and compact by [[thm-closed-subspace-of-a-compact-space-is-compact]]. Thus $i^*\eta\in\Omega_c^2(S)$.

Write $\mathcal I_S$ for [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]: for a subordinate smooth partition $(\rho_j)$ and connected charts $\phi_j$, it sets $\mathcal I_S(\omega)=\sum_j I_{\phi_j}(\rho_j\omega)$, where $I_{\phi_j}$ is the signed chart integral of the compactly supported coefficient. Only finitely many terms are nonzero. The value is independent of charts, partition and refinement by [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]. Define the surface notation by
$$\int_S\eta:=\mathcal I_S(i^*\eta).$$
This agrees with [[prop-integration-over-an-oriented-embedded-submanifold]]; a reparametrization here means an orientation-preserving diffeomorphism $F:T\to S$ of oriented smooth two-manifolds (a smooth bijection with smooth inverse and orientation-preserving differential). For such $F$, the same value is $\mathcal I_T((iF)^*\eta)$.
The integration definition and its independence theorem assume $\mathrm{AC}_\omega$, already retained in the geometric background below. For $\eta=\mathcal F$ and $\eta=\star_g\mathcal F$, smoothness of the given field and Hodge map makes both pulled-back top forms admissible; their integrals are finite real numbers. Define the geometric electric and magnetic flux parameters by
$$q_e(S):=\frac1{4\pi}\int_S\star_g\mathcal F,\qquad q_m(S):=\frac1{4\pi}\int_S\mathcal F.$$
When $M$ and the coordinates have length units, these parameters have units of length. A magnetic flux need not have a global potential; no flux quantization is included. The background Lorentzian geometry and Hodge conventions carry the countable-choice assumption $\mathrm{AC}_\omega$ of their named suppliers; the algebraic identities in this definition require no additional choice principle.

