---
id: rem-cm08-external-symmetry-breaking
kind: remark
title: "Scope of the symmetry-conservation statements: force laws that break kinematic symmetries, residual forces, moving coordinates and the empirical boundary"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, pthm-cm08-point-noether, pthm-cm08-general-noether, pthm-cm08-time-energy, pthm-cm08-translation, pthm-cm08-rotation, pthm-cm08-boost-boundary, pthm-cm08-moving-chart-energy-function, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, pthm-cm03-energy-balance, def-cm02-newtonian-flow]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  pthm-cm08-point-noether: physical-result
  pthm-cm08-general-noether: physical-result
  pthm-cm08-time-energy: physical-result
  pthm-cm08-translation: physical-result
  pthm-cm08-rotation: physical-result
  pthm-cm08-boost-boundary: physical-result
  pthm-cm08-moving-chart-energy-function: physical-result
  def-cm03-potential-and-mechanical-energy: physical-assumption
  post-cm02-force-superposition: physical-assumption
  pthm-cm03-energy-balance: physical-result
  def-cm02-newtonian-flow: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope audit of the symmetry and conservation statements of the pair: the symmetry criteria are conditions on the model's declared Lagrangian and potential, not on the kinematic framework; force laws with external or confining potentials break the corresponding charges, with the failure rates computed by the sharpness clauses; residual forces destroy conservation of a symmetry charge unless they pair to zero with the generator along the motion; in a moving coordinate description the conserved chart energy function need not be the inertial mechanical energy; time-dependent potentials break energy conservation; and no converse from an observed conservation to a symmetry of a model, and no empirical claim, is asserted. The remark adds no new physical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 2.4-2.4.1, printed pages 23-26 (PDF pages 29-32): conservation laws as consequences of symmetries of the Lagrangian, with the warning that the example symmetries are properties of the model"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 7.3: invariant transformations and Noether's theorem, with the warning that the invariance must be verified for the actual Lagrangian"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-8 (PDF pages 26-27): a conserved Hamiltonian function that differs from the mechanical energy in a time-dependent (moving) description"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Symmetries are properties of the model, not of the kinematics.** The
  symmetry criteria of this page are identities imposed on the model's
  declared mechanical Lagrangian $L=K-U$ and its residual forces
  ([[def-cm08-symmetry-of-the-mechanical-lagrangian]]); the affine structure
  of the spacetime, the availability of every inertial frame and the Galilean
  transformation law of the description are kinematic facts of the framework
  and do not by themselves make any potential invariant. Concretely, for the
  uniform-force model of the framework with potential
  $U=-\sum_{i}m_{i}\,\mathbf g\cdot x_{i}$ one has
  $\sum_{i}\nabla_{x_{i}}U=-M_{\mathrm{tot}}\mathbf g$, so the translation
  condition of [[pthm-cm08-translation]] holds exactly for directions
  $a\perp\mathbf g$; for every such model the momentum component along a
  direction with $a\cdot\mathbf g\ne0$ is not conserved, and the sharpness
  clauses of [[pthm-cm08-translation]] and [[pthm-cm08-boost-boundary]] locate
  the failure at the maximal motion through any state with $a\cdot\nabla U\ne0$.
  Likewise a confining external potential such as
  $U=\tfrac{k}{2}\sum_{i}\lvert x_{i}-x_{i}^{0}\rvert^{2}$ fails the
  translation condition at every configuration whose centre of mass differs
  from the reference configuration, and both the momentum and the boost charge
  of [[pthm-cm08-boost-boundary]] are then unavailable.

- **Rotation is not translation.** The rotation condition of
  [[pthm-cm08-rotation]] is compatible with a confining central potential: for
  $U$ depending only on the labels through rotation-invariant combinations the
  angular-momentum charge may be conserved even when the translation charges
  are not. The conservation statements are therefore separate conditional
  claims, one per symmetry datum, and no global "conservation of everything"
  is available: a model can possess one charge and fail another.

- **Residual forces destroy charges at a computable rate.** With
  $d\not\equiv0$ the charge of a strict symmetry is conserved exactly when the
  residual force pairs to zero with the generator along the motion
  ([[pthm-cm08-point-noether]] clause 2), and for a general datum with time
  reparametrisation the rate is the residual force paired with
  $\xi-v\tau$ ([[pthm-cm08-general-noether]] clause 3). A friction force along
  a translation generator, for instance, removes the corresponding momentum
  charge whatever symmetries the potential part has. The balance theorems of
  the force page, in particular [[pthm-cm03-energy-balance]], remain valid in
  those situations and carry the residual contribution explicitly; the
  Noether charges and the balance identities are different deductions, and
  neither replaces the other.

- **Moving coordinates and the mechanical energy.** In a time-dependent
  coordinate description the chart energy function of
  [[pthm-cm08-moving-chart-energy-function]] differs from the inertial
  mechanical energy by the pairing of the chart's explicit time dependence
  with the mass-operator velocity, and the chart energy can be conserved while
  that difference is nonzero; the phrase "the Hamiltonian is conserved" is
  therefore not by itself a statement about the inertial mechanical energy.
  Similarly, a potential with $\partial_{t}U\not\equiv0$ satisfies the
  time-translation identity of [[pthm-cm08-time-energy]] exactly when its
  explicit time dependence vanishes, and the sharpness clause of that item
  exhibits a motion whose mechanical energy changes at the rate
  $\partial_{t}U$ evaluated along it.

- **No converse and no empirical claim.** The results of this page are
  conditional deductions inside the force model: symmetry hypotheses on the
  declared presentation imply conservation of the stated charges along the
  motions. No converse is asserted — conservation of a quantity along the
  computed motions does not establish that the model has the corresponding
  symmetry datum — and no observational content is introduced. If a
  conservation statement is used in an empirical analysis, the model
  assumptions, the representative of the potential and any measured inputs
  enter that analysis as additional premises with their own qualifications;
  an observation consistent with a conservation law is evidence about the
  combined model and apparatus, not a proof of either.

- **Not asserted.** The page does not treat discrete symmetries, Noether's
  second theorem, field-theoretic charges, gauge families whose generators
  fail to be $C^{2}$, global existence of the transformation families, or the
  question whether any physical interaction is invariant under the families
  considered; those are separate mathematical and empirical developments.
