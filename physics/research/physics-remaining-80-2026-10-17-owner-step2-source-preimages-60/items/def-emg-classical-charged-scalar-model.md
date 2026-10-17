---
id: def-emg-classical-charged-scalar-model
kind: definition
title: "Specified classical charged complex-scalar model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
deps:
  - def-emg-charged-scalar-functional
  - def-emg-geometry-units
dependency_roles:
  def-emg-charged-scalar-functional: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
physical_scope: >
  One classical smooth charged complex-scalar matter branch using the stated
  gauge-covariant functional and SI bookkeeping. It makes no quantum,
  statistical, material-response, empirical, or coupled-PDE existence claim.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80), Abelian gauge field coupled to a complex scalar through a covariant derivative. Quantum and material claims are not adopted."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3, PDF pp. 190–193 (printed pp. 183–186), scalar matter action and Hilbert stress in curved spacetime."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147, invariant matter action and stress conventions. The charged scalar formulas are specified by the exact local functional."
---

## Definition

On the smooth Lorentzian geometry and SI convention of
[[def-emg-geometry-units]], choose a fixed smooth bundle sector and the
classical charged-scalar functional $S_\varphi$ of
[[def-emg-charged-scalar-functional]]. A configuration of this model is a
smooth complex scalar section $\varphi$ and the smooth connection and metric
fields in that definition. In the action branch, take this actual functional
as the selected matter action $S_m:=S_\varphi$, with the same fixed-sector
compact variations. The scalar is classical; the dimensionless field
normalization, the positive coefficient $K_\varphi$, the smooth real
potential $V$, and the permitted coupling $\lambda$ are exactly those of
[[def-emg-charged-scalar-functional]].

In its circle-bundle branch, $\lambda\kappa_0=k\in\mathbb Z$ for the selected
representation; in the separate trivial real-potential branch, $\lambda$ may
be any real number. No quantum rest-mass identification, material-response
claim, or existence theorem for the coupled equations is part of this
definition.

