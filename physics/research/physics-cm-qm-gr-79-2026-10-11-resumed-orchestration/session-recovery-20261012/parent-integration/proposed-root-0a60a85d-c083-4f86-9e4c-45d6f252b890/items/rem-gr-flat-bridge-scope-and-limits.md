---
id: rem-gr-flat-bridge-scope-and-limits
kind: remark
title: "Scope and empirical status of the flat and Newtonian bridge page"
status: draft
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-newtonian-comparison-model-and-identification, def-gr-stationary-weak-field-data, thm-gr-weak-field-einstein-stress-hierarchy, lem-gr-weak-field-geodesic-acceleration, thm-gr-weak-field-scaled-trajectory-limit, pthm-gr-uniform-weak-slow-correspondence, pthm-gr-minkowski-vacuum-model, def-gr-si-unit-and-coordinate-conventions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, lem-gr-observer-relative-velocity-expansions, lem-gr-covariant-two-tensor-transformation-law, def-gr-observer-relative-energy-and-momentum]
dependency_roles:
  def-gr-newtonian-comparison-model-and-identification: formulation-prerequisite
  def-gr-stationary-weak-field-data: formulation-prerequisite
  thm-gr-weak-field-einstein-stress-hierarchy: mathematical-premise
  lem-gr-weak-field-geodesic-acceleration: mathematical-premise
  thm-gr-weak-field-scaled-trajectory-limit: mathematical-premise
  pthm-gr-uniform-weak-slow-correspondence: physical-result
  pthm-gr-minkowski-vacuum-model: physical-result
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  post-gr-einstein-field-law: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  lem-gr-observer-relative-velocity-expansions: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
physical_scope: "Scope and status note for the flat and Newtonian bridge material: the status of the flat Minkowski model, the conditional nature of the weak-field correspondence, its hypotheses and error terms, the chart dependence of the displayed spatial form, and the empirical qualifications required before any comparison with reported data. The note asserts no law, no solution, no measurement and no empirical fact."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian correspondence as an asymptotic leading-order statement, with the boundary conditions and source idealizations it requires, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2, including the caution that the isotropic spatial form must be converted before comparison with areal-radius forms, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian module: the Newtonian limit as a restricted model comparison, not an identity of theories"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Scope, status and empirical qualifications

This note fixes what the physics items of this page do and do not claim; it
proves nothing by itself.

- **The flat model is a model.** [[pthm-gr-minkowski-vacuum-model]] shows
  that the flat geometry with $\Lambda=0$ and $T=0$ satisfies the adopted
  field law and what its ideal free-fall and clock readings are. It is one
  solution among many: non-flat solutions, flat solutions with other global
  topology and the semiclassical or observational questions attached to
  "empty space" are outside this page. Statements about the flat model are
  conditional on the adopted postulates of
  [[post-gr-einstein-field-law]] and
  [[post-gr-ideal-clocks-and-free-fall]], and are not claims about nature.

- **The bridge is a controlled comparison of models.** The weak-field results
  of this page — the Einstein and stress hierarchy
  ([[thm-gr-weak-field-einstein-stress-hierarchy]]), the geodesic
  acceleration estimate ([[lem-gr-weak-field-geodesic-acceleration]]) and
  the scaled trajectory convergence
  ([[thm-gr-weak-field-scaled-trajectory-limit]]) — are estimates inside an
  explicitly hypothesized family of stationary metrics
  ([[def-gr-stationary-weak-field-data]]). Their hypotheses are essential: an
  existing Einstein family with the stated derivative bounds, the
  slow-motion condition $|\dot x|\le C\sqrt\varepsilon c$, a common compact
  region, a comparison motion that exists on the whole finite scaled interval
  and a bounded second derivative of the potential. The page does not
  construct the input family from Newtonian initial data, does not prove
  existence of a global Newtonian limit in any gauge, and does not treat
  strong fields, fast motion, long times or non-smooth sources.

- **The correspondence dictionary is adopted, not derived.**
  [[def-gr-newtonian-comparison-model-and-identification]] fixes which
  objects of the two frameworks are compared and in which units, and
  [[pthm-gr-uniform-weak-slow-correspondence]] is conditional on it. The
  Newtonian comparison model is an auxiliary model with its own adopted
  equations; no derivation of either framework from the other is claimed,
  and the identification of the symbols is not an identity of theories.

- **The displayed spatial form is chart-dependent.** The perturbation form
  $g_{00}=-(1+2\Phi/c^2)$, $g_{ij}=(1-2\Phi/c^2)\delta_{ij}$ is a statement
  in the chart of the ansatz. Under a change of chart the components
  transform by the covariant transformation law
  ([[lem-gr-covariant-two-tensor-transformation-law]]), so comparisons of
  spatial coefficients computed in different charts — for instance the
  areal-radius forms used in the spherical model — require the explicit
  coordinate conversion and are not identities; that conversion is deferred
  to the spherical-model page. Similarly, the gauge transformation of the
  flat linearization is a change of perturbation inside a fixed chart and is
  not a change of chart.

- **Kinematics versus dynamics.** The low-velocity expansions
  [[lem-gr-observer-relative-velocity-expansions]] and the observer energy
  and momentum definitions
  ([[def-gr-observer-relative-energy-and-momentum]]) are kinematic: they
  expand the model's energy and momentum readings. The page does not prove
  conservation of any total energy, and the identifications $E\leftrightarrow$
  Newtonian kinetic energy and $\rho_\varepsilon\leftrightarrow$ Newtonian
  density are correspondence statements, not equalities of frameworks.

- **No measured input and no observations.** Nothing on the page uses a
  measured value of $c$, $G_N$ or $\Lambda$; the unit conventions
  [[def-gr-si-unit-and-coordinate-conventions]] fix dimensions and
  normalizations only. A comparison with reported Newtonian, solar-system,
  clock, redshift or gravitational-wave data would require, in addition: the
  measured value of $G_N$ with its uncertainty and calibration, the
  apparatus and sampling model, an identified observable computed from the
  model, and a statistical account distinguishing prediction, observation
  and inference. Agreement of such a comparison would be evidence about the
  combined model and apparatus assumptions, not a proof of the postulates.
  None of that material is supplied on this page; the empirical interface is
  developed, if at all, on the track's later experimental pages with
  source-backed primary reports.
