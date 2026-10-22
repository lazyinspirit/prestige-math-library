---
id: rem-emg-fx-stationary-spacetime-obligations
kind: remark
title: "What remains before a stationary electrovacuum uniqueness theorem"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-emg-fx-matrix-harmonic-problem
  - lem-emg-fx-mazur-comparison
  - def-emg-fx-stationary-axisymmetric-setup
  - thm-emg-fx-local-charged-birkhoff
  - lem-emg-sphere-flux-holonomy
  - def-emg-local-potentials-and-circle-data
dependency_roles:
  def-emg-fx-matrix-harmonic-problem: mathematical-premise
  lem-emg-fx-mazur-comparison: mathematical-premise
  def-emg-fx-stationary-axisymmetric-setup: mathematical-premise
  thm-emg-fx-local-charged-birkhoff: mathematical-premise
  lem-emg-sphere-flux-holonomy: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
reference: research/plan-einstein-maxwell-models-frontier-expansion-track.md#reduced-stationary-uniqueness-and-explicit-research-boundaries
sources:
  references:
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, Living Reviews in Relativity 15 (2012), article 7, arXiv:1205.6112v1"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Sections 3.3.2–3.4, PDF pp. 15–18; §§6.4 and 7.1, pp. 35–37; §§8.1 and 8.4.1–8.4.2, pp. 41–47: hypotheses, symmetry/circularity issues, reduction target and boundary control."
    - title: "Markus Heusler, Black Hole Uniqueness Theorems, Cambridge Lecture Notes in Physics 6, Cambridge University Press (1996)"
      url: https://ru.djvu.online/file/ooXRsSuiVzYAO
      locator: "Chapter 10, §§10.1–10.3, printed pp. 166–174: the matrix comparison and the separate axial, circular, horizon, axis and asymptotic boundary arguments in the restricted Kerr–Newman theorem."
    - title: "Pawel O. Mazur, Black Hole Uniqueness Theorems, arXiv:hep-th/0101012v1 (2000; based on the 1986 GR11 plenary lecture)"
      url: https://arxiv.org/pdf/hep-th/0101012
      locator: "Sections II and V, PDF pp. 2–3 and 18–21: stationary versus axial reduction, ergoregion signature, and the global divergence argument with black-hole boundary hypotheses."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Remarks

The positive-matrix theorem on this page is an abstract Euclidean boundary result. Its matrices and Dirichlet boundary do not encode a spacetime, a horizon, or a global Einstein–Maxwell solution. The geometry terms used for any possible application have the exact local conventions of the stationary-axisymmetric setup defined earlier on this page. In particular, the stationary field is specified and is required to be timelike on its declared nonempty open subset, with no causal character asserted elsewhere; the axial symmetry is a specified periodic isometric $U(1)$ action; and circularity, as defined on this page, is the integrability of the rank-two distribution orthogonal to the two supplied generators on $U_*$. A spacetime application must separately establish that those generators commute.

The draft local charged Birkhoff theorem is conditional on $\mathrm{AC}_\omega$ and the exact spherical Einstein–Maxwell–$\Lambda$ datum of the spherical-quotient definition on its connected, simply connected orbit patch. It requires $dr$ and $z:=q^{-1}(dr,dr)$ to be nowhere zero on that patch. Its conclusion is local: the charged mass is constant and around each point the quotient fields have the stated RN–(A)dS coordinate form. Constant-radius patches, null-gradient patches, global extensions and stationary-axisymmetric uniqueness are outside its Statement. It is a separate spherical result, not the missing global orbit-space theorem.

The published sphere-winding lemma's product-circle calculation has zero curvature and nontrivial principal holonomy for a nonintegral parameter, while the published local-potential definition allows chartwise potentials and records their transition data. Thus a future reduction must state each one-form whose primitive is used, prove the required local or global exactness, or retain the relevant bundle sectors. This includes scalar functions conventionally used in Ernst and twist reductions; their specific differential definitions and existence conditions must be stated before use. Stationarity alone does not supply global scalar potentials.

The source treatments show why the matrix identity cannot be transferred by name alone. The general comparison identity can be written before imposing a second symmetry, but the black-hole uniqueness application also needs the axial reduction and positivity conditions. Reduction using a stationary Killing field can change the target signature where that field becomes null or spacelike; the positive Hermitian representation therefore needs proof on the actual domain. A spacetime argument must separately establish symmetry inheritance (for example, invariance of the Maxwell two-form under both specified generators), commutation, circularity, the global smooth quotient and its boundary structure, regularity on the axis and any selected null horizon, and the falloff conditions on any declared asymptotic end. It must then control the boundary terms in the comparison argument under those exact hypotheses. The 1996 textbook presents a uniqueness argument for a restricted Kerr–Newman class with its own axis, horizon and infinity analysis; that argument is not imported here. The 2012 review distinguishes the local identity from the global boundary step and warns in Section 8.4.1 that complete derivative control at the singular axis and horizon had not been supplied in the literature it reviewed; Section 8.4.2 discusses a distance-function alternative. These are dated source assessments, not current-status claims.

This page asserts no stationary electrovacuum uniqueness theorem, no dynamical stability result, and no cosmic-censorship conclusion. It makes no blanket current-status claim about broader uniqueness or stability questions.

## Remarks references

[[def-emg-fx-matrix-harmonic-problem]]

[[lem-emg-fx-mazur-comparison]]

[[def-emg-fx-stationary-axisymmetric-setup]]

[[thm-emg-fx-local-charged-birkhoff]]

[[def-emg-fx-spherical-quotient]]

[[lem-emg-sphere-flux-holonomy]]

[[def-emg-local-potentials-and-circle-data]]

[[def-emg-causal-solution-and-horizon-vocabulary]]
