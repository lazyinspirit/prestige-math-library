---
id: post-emg-selected-matter-action
kind: postulate
title: "Selected invariant matter-action contract"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 5
deps:
  - def-emg-geometry-units
  - def-gr-hilbert-stress-energy-tensor
  - lem-emg-matter-noether-exchange
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  lem-emg-matter-noether-exchange: formulation-prerequisite
physical_scope: >
  One actually selected smooth classical matter functional with compact
  variations in a fixed connection sector. Its Hilbert tensor and current are
  defined by the stated first-variation convention. No existence claim is made
  for arbitrary matter, and no measured matter model or coupled PDE solution is
  asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.2–§4.5.3, PDF pp. 190–193 (printed pp. 183–186), Hilbert stress and scalar/Maxwell matter examples. The action and compact variation assumptions here are stated explicitly."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147 (printed pp. 137–140), the on-shell diffeomorphism-invariance argument for stress conservation. The charged connection term is separately conditional here."
verification:
  precheck: n/a
---

## Postulate

For the action-based Einstein–Maxwell branch, choose one actual smooth matter
configuration space $\mathcal C$ on the spacetime and bundle sector of
[[def-emg-geometry-units]], and a real differentiable functional
$S_m[g,A,\Psi]$ on its declared domain, where $\Psi\in\mathcal C$ and $A$ is a
connection on the fixed smooth bundle. The field class, transition data and
compact variation class must be specified for the chosen matter model. The
functional is required to be invariant under compactly supported gauge
transformations and orientation-preserving diffeomorphisms, with the
connection and matter fields transported together.

Adopt matter-field stationarity as part of this selected model:
$\delta_\Psi S_m=0$ for every admissible compactly supported matter variation.
For compactly supported inverse-metric variations $q^{ab}=\delta g^{ab}$ and
fixed-sector compact connection variations $\alpha\in\Omega^1(M)$, require the
remaining first variation to have the form

$$\delta S_m=-\frac1{2c}\int_M T^m_{ab}q^{ab}\,\mathrm{vol}_g +\frac1c\int_M j^a\alpha_a\,\mathrm{vol}_g,$$

where $T^m$ is a smooth symmetric covariant two-tensor, the Hilbert
stress-energy tensor in the convention of
[[def-gr-hilbert-stress-energy-tensor]], and $j$ is a smooth vector current.
The normalization, connection variation, and invariance hypotheses are the
formulation interface used by [[lem-emg-matter-noether-exchange]]; that
conditional mathematical result does not assert that such an action exists
for arbitrary proposed matter.

This postulate selects a differentiable action branch and its variation
conventions. It does not determine a unique action, assert a local or global
solution of its Euler–Lagrange equations, extend the model to singular sources,
or establish empirical validity. The separate equation-based model does not
depend on this action assumption.
