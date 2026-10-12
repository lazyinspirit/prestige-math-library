---
id: rem-gr-linearized-wave-scope-and-deferred
kind: remark
title: "Scope, status and deferred material of the linearized-waves page: what the model predicts, what is idealization and what is not covered"
status: draft
origin: session
domain: physics
dependency_level: 16
physical_scope: "Scope and status note for the linearized-waves material: the exact class of families and solutions treated, the conditional character of the polarization and detector-response statements, the idealizations of the detector model, the chart and frame caveats, and the material deferred to other modules. The note asserts no law, no solution, no measurement and no fact about nature."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, lem-gr-tt-screen-projector, lem-gr-plane-wave-gauge-decomposition, thm-gr-tt-plane-wave-solutions, thm-gr-tt-plane-wave-curvature, pthm-gr-linearized-field-equations, pthm-gr-plane-wave-polarizations, pthm-gr-plane-wave-tidal-detector-response, def-gr-linearized-wave-regime-and-detector-coupling, def-gr-flat-linearized-perturbation, def-gr-si-unit-and-coordinate-conventions, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, thm-gr-flat-linearized-curvature-and-gauge]
dependency_roles:
  def-gr-plane-wave-perturbation: formulation-prerequisite
  def-gr-wave-screen-and-tt-projection: formulation-prerequisite
  lem-gr-tt-screen-projector: mathematical-premise
  lem-gr-plane-wave-gauge-decomposition: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  pthm-gr-linearized-field-equations: physical-result
  pthm-gr-plane-wave-polarizations: physical-result
  pthm-gr-plane-wave-tidal-detector-response: physical-result
  def-gr-linearized-wave-regime-and-detector-coupling: formulation-prerequisite
  def-gr-flat-linearized-perturbation: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  post-gr-einstein-field-law: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6: the weak-field and gravitational-radiation discussion with the radiation-by-sources and energy-loss sections, printed pp. 142-163 (PDF pp. 149-170)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.2-5.3: gravitational waves and their sources, with the caution that the waves received by a detector are essentially the waves produced and that small amplitudes require large source energies, printed pp. 209-230 (PDF pp. 216-237)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 7.3-7.6: gravitational waves, the energy in gravitational waves and waves from binary systems, printed pp. 76-100 (PDF pp. 77-101)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Scope, status and deferred material

This note fixes what the physics items of the linearized-waves page do and do
not claim; it proves nothing by itself.

- **What is proved.** [[pthm-gr-linearized-field-equations]] derives the
  linearized field equation, its vacuum branch, the harmonic-gauge wave
  reduction and the quadratic residual bound from the adopted field law
  [[post-gr-einstein-field-law]] for a family of solutions. The mathematical
  existence statement for the vacuum plane waves is
  [[thm-gr-tt-plane-wave-solutions]]: for every pair of bounded smooth
  profiles there is an exact solution of the linearized vacuum equations in
  harmonic gauge, whose exact metric satisfies the vacuum field law only up
  to a residual bounded by a constant times the square of the amplitude on
  compact sets. [[pthm-gr-plane-wave-polarizations]] reads the amplitude
  classification of [[lem-gr-plane-wave-gauge-decomposition]] as the
  statement that the model has two polarizations at fixed null wave covector,
  with the gauge-invariant first-order curvature as their observable content.
  [[pthm-gr-plane-wave-tidal-detector-response]] derives the model's
  relative acceleration of freely falling test bodies and the proper-
  separation strain of the ideal two-body detector of
  [[def-gr-linearized-wave-regime-and-detector-coupling]].

- **What is conditional.** Every physical statement on the page is a
  deduction from the adopted postulates of
  [[post-gr-spacetime-and-classical-domain]],
  [[post-gr-field-and-matter-assumptions]],
  [[post-gr-einstein-field-law]] and
  [[post-gr-ideal-clocks-and-free-fall]], together with the explicit
  hypotheses of the mathematical items. The postulates are adopted model
  assumptions, not derived results; no item on the page establishes the
  postulates, and no item compares a prediction with a measurement. The
  metric family $\eta+\lambda h$ is an exact solution of the field law only
  at zeroth order in the amplitude, so the polarization and response
  statements are statements of the linearized model.

- **Idealizations of the detector.** The "detector" of
  [[def-gr-linearized-wave-regime-and-detector-coupling]] is two freely
  falling test bodies together with the proper separation of their worldlines
  at equal inertial-chart time. It has no rigidity, elasticity, internal
  resonance, readout, noise, light propagation or calibration. The strain
  function is a model quantity; identifying it with a recorded signal of a
  real instrument would require an apparatus model with its own assumptions,
  empirical premises with uncertainties and a statistical analysis, none of
  which occurs on this page. In particular no numerical value of an
  amplitude, frequency, strain or event rate is asserted anywhere in the
  batch.

- **Frame and gauge caveats.** The transverse-traceless form and the
  amplitudes $A_+,A_\times$ are defined with respect to an adapted
  orthonormal frame ([[def-gr-wave-screen-and-tt-projection]],
  [[lem-gr-plane-wave-gauge-decomposition]]); the pair $(A_+,A_\times)$
  transforms under screen rotations as in
  [[lem-gr-tt-screen-projector]] clause (d), and the space of classes, not
  the particular representative, is the frame-independent content. The
  first-order curvature is gauge invariant
  ([[thm-gr-tt-plane-wave-curvature]] clause (b)). The projection to the
  physical screen is two-dimensional; a trace subtraction with the half
  weight of a three- or four-dimensional projector is not the
  transverse-traceless projection
  ([[lem-gr-tt-screen-projector]] remark and the counterexample recorded
  there).

- **What is deferred.** The following are outside this page and are not
  proved, assumed or silently used: the construction of solutions of the
  exact vacuum equations with prescribed initial data or from specified
  sources; the linearization about a non-flat background; radiation from
  localized slow sources, the quadrupole formula, the energy and angular
  momentum carried by waves, asymptotic and ADM-type charges, and the
  far-zone scale separation; the propagation of light in a wave background
  and the optical response of an interferometer; post-Newtonian and
  nonlinear corrections; the existence and properties of exact strong-field
  solutions; quantum aspects of gravitational waves and any gravitational
  quantum theory. Sources and detectors are experiment-level material and
  require retrieved primary reports, apparatus and sampling models,
  uncertainties and a stated statistical inference before any reported
  observation can be recorded in the library.
