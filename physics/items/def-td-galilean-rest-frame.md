---
id: def-td-galilean-rest-frame
kind: definition
title: Galilean inertial charts and the center-of-mass rest frame
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: The Newtonian frame convention and internal-energy split used in this thermodynamic framework, restricted to mechanical models that supply positive mass, center-of-mass data, and Galilean-compatible transformations; no relativistic energy law or dynamical theorem is asserted.
deps: [def-td-si-quantities, def-interval, def-cartesian-product, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-function-space, def-function-limit, def-natural-numbers, def-finite-sum, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-interval: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-function-space: mathematical-premise
  def-function-limit: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: OpenStax, University Physics Volume 3, §5.1 Invariance of Physical Laws
      url: https://openstax.org/books/university-physics-volume-3/pages/5-1-invariance-of-physical-laws
    - title: OpenStax, University Physics Volume 1, §5.2 Newton's First Law
      url: https://openstax.org/books/university-physics-volume-1/pages/5-2-newtons-first-law
dependency_level: 1
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

For this nonrelativistic framework, a Newtonian event-coordinate domain is the Cartesian product $I\times\mathbb R^3$ ([[def-cartesian-product]]), where $I\subseteq\mathbb R$ is an open time interval as in [[def-interval]], measured in seconds, and $\mathbb R^3$ has the Euclidean inner product and norm of [[def-euclidean-inner-product]] (the norm properties follow from [[thm-cauchy-schwarz-and-the-euclidean-norm]]); lengths are measured in metres as in [[def-td-si-quantities]]. A Galilean inertial chart labels events in such a domain by coordinates $(t,\mathbf x)$. If a second chart uses the translated time domain $I'=I+\tau$, the allowed coordinate changes are
$$t'=t+\tau,\qquad \mathbf x'=R\mathbf x+\mathbf a-\mathbf b t,$$
where $\tau$ is a constant time shift measured in seconds, $\mathbf a\in\mathbb R^3$ is a constant spatial translation measured in metres, $\mathbf b\in\mathbb R^3$ is a constant boost velocity measured in metres per second, and $R\in M_{3\times3}(\mathbb R)$ is a dimensionless constant matrix ([[def-matrix-space]]) satisfying $R^{\mathsf T}R=I_3$ using matrix transpose and product ([[def-transpose-of-a-matrix]], [[def-matrix-product-and-identity-matrix]]), with $I_3$ the identity matrix. In the coordinate formula, $(R\mathbf x)_i:=\sum_{k<3}R_{ik}x_k$ for $i<3$. Thus time is absolute in this model and no Lorentzian structure is used. Here “frame” means this coordinate chart, not an observer congruence or a basis/tetrad field.

For a finite point-mass representation with $N\in\mathbb N$ ([[def-natural-numbers]]), $N\ge1$, masses $m_i>0$ in kg at positions $\mathbf x_i\in\mathbb R^3$ in metres for $i<N$, assume $M:=\sum_{i<N}m_i>0$ ([[def-finite-sum]]) and define the center-of-mass coordinates by $X_{\mathrm{cm},j}:=M^{-1}\sum_{i<N}m_i x_{i,j}$ for $j<3$; these three real coordinates form $\mathbf X_{\mathrm{cm}}$. The masses are invariant under the allowed chart changes. Other mechanical models must supply their total mass and center-of-mass map; this thermodynamic item does not construct those quantities for a continuum or field model. Every admitted mechanical model must also supply center-of-mass maps and velocities that transform under the displayed Galilean chart changes by $\mathbf X'_{\mathrm{cm}}(t')=R\mathbf X_{\mathrm{cm}}(t)+\mathbf a-\mathbf b t$ and $\mathbf v'_{\mathrm{cm}}(t')=R\mathbf v_{\mathrm{cm}}(t)-\mathbf b$, where $t'=t+\tau$; these are kinematic compatibility conditions, not dynamical theorems about arbitrary mechanical models. When a model supplies three coordinate functions $X_{\mathrm{cm},j}:I\to\mathbb R$ for $j<3$ as in [[def-function-space]], assemble its center-of-mass position as $\mathbf X_{\mathrm{cm}}(t):=(X_{\mathrm{cm},0}(t),X_{\mathrm{cm},1}(t),X_{\mathrm{cm},2}(t))\in\mathbb R^3$. At a time $t\in I$ where each component limit exists, define the velocity by $v_{\mathrm{cm},j}(t)=\lim_{h\to0}(X_{\mathrm{cm},j}(t+h)-X_{\mathrm{cm},j}(t))/h$ through $H_t:=\{h\in\mathbb R:t+h\in I,\ h\ne0\}$, for each $j<3$, using the scalar limit of [[def-function-limit]]; these three components form $\mathbf v_{\mathrm{cm}}(t)$. A statewise instantaneous center-of-mass rest chart at a specified time $t$ is the Galilean chart obtained by the pure boost $\mathbf b=\mathbf v_{\mathrm{cm}}(t)$ with $R=I_3$, $\mathbf a=0$, and $\tau=0$. Its center-of-mass velocity vanishes at that event, but need not vanish at other times because the boost is constant. For an interval $J\subseteq I$ on which $\mathbf v_{\mathrm{cm}}$ exists at every time, a single Galilean chart has zero center-of-mass velocity throughout $J$ if and only if $\mathbf v_{\mathrm{cm}}$ is constant on $J$: in such a chart $R\mathbf v_{\mathrm{cm}}(t)=\mathbf b$ for every $t\in J$, so $\mathbf v_{\mathrm{cm}}(t)=R^{\mathsf T}\mathbf b$ is constant, and conversely a constant velocity $\mathbf v_0$ is made zero by the pure boost $\mathbf b=\mathbf v_0$. For a fixed closed body with total mass $M>0$ in kg, its separately tracked translational kinetic energy in a selected inertial chart is $K_{\mathrm{cm}}=\tfrac12M\|\mathbf v_{\mathrm{cm}}\|_2^2$ in joules; under a pure boost it is $K'_{\mathrm{cm}}=\tfrac12M\|\mathbf v_{\mathrm{cm}}-\mathbf b\|_2^2$.

In this framework $U$ denotes the scalar internal-energy coordinate evaluated at a state in its statewise instantaneous center-of-mass rest chart. Thus an equilibrium preparation's internal energy is evaluated using the boost selected by its center-of-mass velocity at that preparation; a process using one chart with the center of mass at rest throughout its interval must separately satisfy the constant-velocity condition above. Bulk translational kinetic energy and any separately tracked external-field potential energy are excluded from $U$. For a given state, the model treats $U$ as invariant between its center-of-mass rest charts that differ only by spatial translation or orthogonal orientation, and fixes its numerical zero, including any retained or subtracted constituent rest-energy offsets, consistently across the composition changes it admits. This is a nonrelativistic modeling convention, not a derived energy-transformation law.
