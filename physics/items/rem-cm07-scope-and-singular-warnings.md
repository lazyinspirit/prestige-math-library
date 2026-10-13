---
id: rem-cm07-scope-and-singular-warnings
kind: remark
title: "Scope of the stationary-action formulation: no minimisation, regular mechanical Lagrangians, no general velocity-constraint equivalence and empirical status"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, rem-cm-scope-of-stationarity, def-cm-legendre-map-in-a-time-dependent-chart, prop-cm-mechanical-chart-lagrangian-is-hyperregular, def-cm-nonholonomic-velocity-constraint-law, cex-cm-dalembert-and-vakonomic-evolutions-differ]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  rem-cm-scope-of-stationarity: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  cex-cm-dalembert-and-vakonomic-evolutions-differ: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope audit of the stationary-action formulation of the force model: stationarity is not minimisation; the mechanical Lagrangians of this framework are regular and the chart Legendre map is hyperregular, so the second-order equations determine accelerations, while degenerate Lagrangians are excluded; unrestricted-action and d'Alembert dynamics are not generally equivalent for velocity constraints, as the cited counterexample shows for its specified model and data; and the stationary-action equivalence is a conditional theorem of the model, not empirical evidence. The remark asserts no new physical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): 'principle of least action' is a misnomer and the Lagrangian encodes the equations of motion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.1 and 6.2: stationary versus extremal values and the mechanical Lagrangian T - U"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.10: nonholonomic constraints and the failure of stationary augmented-action to reproduce d'Alembert's equations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: n/a
---
## Remarks

- **Stationarity is not minimisation.** The defining condition of
  [[def-cm07-action-and-mechanical-lagrangian]] is the vanishing of the first
  variation for all fixed-endpoint variations, and
  [[pthm-cm07-euler-lagrange-equations]] identifies it with the potential-part
  equation, and with the full model equation when $d\equiv0$. It is not claimed that a stationary curve minimises the action, and
  no second-variation or convexity hypothesis is imposed on this page:
  [[rem-cm-scope-of-stationarity]] records the explicit quadratic model in
  which stationary curves are not local minima, and the verification page of
  this pair checks the analogous phenomenon for an oscillator of the model
  class.

- **The mechanical branch is regular.** For the mechanical Lagrangians of this
  page the velocity Hessian in a chart is the kinetic matrix
  $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ (or $\mathsf M$ in Cartesian data),
  which is symmetric positive definite because $DX(q)$ is injective and
  $\mathsf M$ is; [[prop-cm-mechanical-chart-lagrangian-is-hyperregular]]
  proves that such a chart Lagrangian is hyperregular with the explicit
  Legendre inverse, so no failure of invertibility of the Legendre map
  [[def-cm-legendre-map-in-a-time-dependent-chart]] occurs on this branch and
  the Euler-Lagrange equations determine the coordinate accelerations. A
  singular velocity Hessian — for which the Legendre map has no $C^{1}$ local
  inverse and the second-order equations need not determine accelerations —
  is outside the regular mechanical branch described here; the admissible
  coordinate maps of the generalized-coordinate definition of this page
  exclude it by injectivity of $DX$ and positive definiteness of $\mathsf M$.

- **There is no general action equivalence for velocity constraints.** The
  reduction theorem of this page applies to ideal *holonomic* constraints. For
  a genuine velocity constraint, the unrestricted stationary-action or
  augmented-action prescription can differ from the d'Alembert equation of
  the preceding page:
  [[def-cm-nonholonomic-velocity-constraint-law]] defines both prescriptions
  for the normalized relation $z_{s}=xy_{s}$ (corresponding physically to
  $\dot r_{z}=(r_{x}/L_{0})\dot r_{y}$ with a declared length scale) and
  [[cex-cm-dalembert-and-vakonomic-evolutions-differ]] proves that their
  evolutions differ for the specified constraint and initial data. Therefore
  that model branch is not obtained by "imposing a constraint inside the
  action", and the examples page quantifies this discrepancy. The claim is
  that equivalence does not hold in general; identifying the prescriptions in
  another model requires its own justification.

- **Empirical status.** The equivalence of the stationary-action condition with
  the model's equation of motion is a conditional theorem of the adopted force
  branch, the declared potential presentation and the cited mathematics: it
  does not establish that nature extremises or stationarises an action, and it
  adds no empirical content beyond the force model and its potential
  presentation. When the presentation has residual forces, the equation in
  generalized coordinates retains the transformed residual term defined by
  [[def-cm07-generalized-coordinates-and-forces]], while the pure action
  reading gives only the potential-part equation; comparing predictions with observations
  tests the force law and the apparatus, not the variational reformulation.
  [[def-cm03-potential-and-mechanical-energy]] clause (c) supplies the further
  reminder that the potential and the Lagrangian are defined only up to the
  declared normalization, so no numerical value of the action is a model
  prediction without fixing that convention.

- **Not asserted.** No global existence of stationary curves, no theory of
  minimisers in function spaces, no further criteria for extrema, no free- or
  variable-endpoint problems, and no field-theoretic
  or infinite-dimensional actions are part of this page; the boundary-value
  non-uniqueness of the oscillator, for instance, is recorded in the
  verification page of the mathematics track, not here.
