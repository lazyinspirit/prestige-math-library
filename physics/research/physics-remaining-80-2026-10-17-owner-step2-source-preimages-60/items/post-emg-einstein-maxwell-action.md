---
id: post-emg-einstein-maxwell-action
kind: postulate
title: "Interior stationary Einstein–Maxwell–matter action"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-emg-geometry-units
  - def-emg-lorentzian-forms
  - lem-emg-einstein-action-variation
  - lem-emg-maxwell-action-variation
  - post-em-stationary-action-model
  - post-emg-selected-matter-action
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-einstein-action-variation: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  post-em-stationary-action-model: formulation-prerequisite
  post-emg-selected-matter-action: formulation-prerequisite
physical_scope: >
  A separately adopted interior variational formulation for smooth fields in a
  fixed bundle sector and one selected matter action. Only compactly supported
  variations, or variations vanishing near a physical boundary, are used.
  Boundary variational principles, singular self-fields, existence or
  uniqueness of coupled solutions, and empirical validity are not asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.1, PDF pp. 148–151 (printed pp. 141–144), Einstein–Hilbert variation; §3.2.5, PDF pp. 120–124 (printed pp. 113–117), Maxwell action; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), matter and electromagnetic Hilbert tensors. The coefficients are restated in SI."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.54)–(4.72), PDF pp. 120–125, gravitational action, metric variation, and matter normalization; source normalizations are not imported."
verification:
  precheck: n/a
---

## Postulate

Use the smooth oriented, time-oriented Lorentzian four-manifold, curvature
convention and SI constants of [[def-emg-geometry-units]] and
[[def-emg-lorentzian-forms]]. Let $F$ be the curvature two-form of a smooth
connection in one fixed bundle sector. Choose the actual matter functional
$S_m$ of [[post-emg-selected-matter-action]]. For configurations where the
action is finite, or for compactly supported action differences on a
noncompact manifold, adopt

$$S_{\mathrm{tot}}[g,A,\Psi] =\frac{c^3}{16\pi G_N}\int_M(R-2\Lambda)\,\mathrm{vol}_g -\frac1{4\mu_0c}\int_M F_{ab}F^{ab}\,\mathrm{vol}_g +S_m[g,A,\Psi].$$

Adopt that a configuration is dynamically admissible in this branch exactly
when the first variation of this total action vanishes independently for
every smooth compactly supported symmetric inverse-metric variation, every
smooth compactly supported fixed-sector connection one-form variation, and
every admissible compactly supported matter-field variation. If $M$ has a
physical boundary, only variations vanishing on a neighbourhood of that
boundary are included. This makes no claim about a Gibbons–Hawking–York or
other boundary action.

The earlier postulate [[post-em-stationary-action-model]] concerns its stated
flat electromagnetic and prescribed-potential particle sectors. It supplies
no unified matter–gravity action or coupled-solution theorem; the functional
above is an additional, explicitly adopted model. An equation-based
Einstein–Maxwell formulation is a separate alternative, not a premise of this
action branch.

All displayed coefficients are model parameters with the units and
interpretations in [[def-emg-geometry-units]]. Compact support is essential:
the Einstein–Hilbert and Maxwell integrations by parts have boundary terms in
general. The postulate asserts neither that its stationary configurations exist
nor that the action describes nature.
