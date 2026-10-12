---
id: rem-gr-einstein-matter-scope-and-conventions
kind: remark
title: "Scope and conventions of the Einstein-and-matter page: presentations, matter sectors and open obligations"
status: draft
origin: session
domain: physics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-classical-gravitational-action, post-gr-einstein-field-law, pthm-gr-adopted-action-and-einstein-equations, pthm-gr-einstein-consistency-and-energy-conditions, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-si-unit-and-coordinate-conventions, def-gr-stress-energy-tensor-field, def-gr-energy-conditions, def-gr-hilbert-stress-energy-tensor]
dependency_roles:
  post-gr-classical-gravitational-action: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  pthm-gr-adopted-action-and-einstein-equations: physical-result
  pthm-gr-einstein-consistency-and-energy-conditions: physical-result
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-field-and-matter-assumptions: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-hilbert-stress-energy-tensor: formulation-prerequisite
physical_scope: "Scope, convention and status note for the field-law and matter-content material of the classical gravitational framework in its smooth oriented branch: the two presentations of the field law, the three matter sectors, the coupling and parameter conventions, the separation between adopted assumptions and conditional deductions, and the obligations deferred to other pages. The note asserts no law, no solution and no empirical fact."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 'Postulates of General Relativity', printed pp. 66-68 (PDF pp. 67-69), and section 9.3 on the energy-momentum tensor, printed pp. 116-118 (PDF pp. 117-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4 'Gravitation': the field equations, the Hilbert action and the energy-momentum tensor, printed pp. 103-120 (PDF pp. 110-127)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Scope, status and conventions

This note fixes the scope of the page's field-law and matter content and the
status of its claims; it proves nothing by itself.

- **Two presentations, one field law.** The framework adopts the classical
  field law in exactly one of two presentations for any given model: the
  action formulation [[post-gr-classical-gravitational-action]] or the
  direct-equation formulation [[post-gr-einstein-field-law]]. The theorem
  [[pthm-gr-adopted-action-and-einstein-equations]] identifies the equation
  form of the two presentations, so they define one classical field law rather
  than two independent premises; a model never adopts both.

- **Adopted versus derived.** The field law, the matter sectors, the
  cosmological parameter and the Hilbert convention are adopted model input.
  The equation form of the action presentation, the conservation and trace
  identities, the parameter-variation identity and the rest-frame readings of
  the energy conditions are conditional deductions recorded in
  [[pthm-gr-adopted-action-and-einstein-equations]] and
  [[pthm-gr-einstein-consistency-and-energy-conditions]]. None of the adopted
  statements is derived from mathematics, symmetry or observation, and none of
  the deductions asserts that the model describes nature.

- **Matter sectors.** The matter content is one of the sectors of clause (iii)
  of [[post-gr-classical-gravitational-action]]: the scalar-field model with a
  supplied action and Hilbert tensor, or the dust and perfect-fluid models with
  prescribed stress-energy tensor and matter equations. The stress-energy
  tensor occupies the slot defined in [[def-gr-stress-energy-tensor-field]];
  its component reading in a $g$-orthonormal frame is in
  $\mathrm J\,\mathrm m^{-3}$, and the coupling satisfies
  $\kappa T\sim\mathrm m^{-2}$ with $\kappa=8\pi G_N/c^4$ in the conventions of
  [[def-gr-si-unit-and-coordinate-conventions]]. The equation of state of a
  fluid sector is a further assumption of that model; the energy conditions of
  [[def-gr-energy-conditions]] are optional additional assumptions, never
  consequences of the field law.

- **Smooth oriented branch.** The material assumes the smooth-branch
  restriction of [[post-gr-spacetime-and-classical-domain]] and
  [[post-gr-field-and-matter-assumptions]] and, for the action and flux
  constructions, an orientation of the model's spacetime. Distributional or
  lower-dimensional sources, boundaries with junction conditions, low-regularity
  fields and quantum matter lie outside this page; they require further
  mathematics and, where physical, further adopted assumptions.

- **Empirical status.** The page contains no experiment, no measured input and
  no empirical premise. Predictions computed from a fully specified model —
  geometry, matter sector and field law — may later be compared with reported
  observations; such a comparison tests the combined model and its auxiliary
  assumptions, and agreement is evidence rather than a proof of any postulate.

- **Deferred obligations.** The conservation of currents and the absence of a
  universal global gravitational energy are treated on the local-and-global
  energy page; the flat and Newtonian limits, the spherical vacuum, the
  homogeneous cosmologies and the linearized wave models are treated on their
  own pages. This page states no existence, uniqueness or propagation theorem
  for solutions of the field equation, and no initial-value or global causal
  claim.
