---
id: rem-cm01-model-limit
kind: remark
title: "Status audit and model limits of the framework page: primitive data, adopted assumptions, derived objects and what is not claimed"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-units, def-cm01-configuration, def-cm01-velocity-acceleration, pthm-cm01-galilean-kinematics, def-cm-affine-time-space, lem-cm-adapted-coordinates-exist-and-are-unique, lem-cm-adapted-charts-and-galilean-transformations, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-cm-constrained-configuration-and-mass-metric]
dependency_roles:
  post-cm01-spacetime: physical-assumption
  post-cm01-frames: physical-assumption
  post-cm01-worldlines: physical-assumption
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A status audit and scope remark for the framework-and-geometry page: which objects are primitive model data, which statements are adopted postulates, which are constructed or proved, and which physical claims are deliberately not made here. Bookkeeping only; it asserts no law, no measurement and no claim about nature beyond the items it cites."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 introductory remarks and Section 1.2, chapter pages 1 and 3 (PDF pages 5 and 7): the notions of kinematics are model-level conventions, and Newton's laws are experimental in nature and cannot be derived from purely theoretical arguments"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.4 'Looking Forwards: The Validity of Newtonian Mechanics', printed page 9 (PDF page 15): the domain limitations of Newtonian mechanics"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
verification:
  precheck: n/a
---

## Status audit

This remark records the status of the notions of the framework page. It is
bookkeeping: it asserts no law and no empirical claim, and every mathematical
statement it repeats is proved in the item cited.

**Primitive data of a model.** The spacetime data
$(V,\tau,g,A,\text{orientation of }K)$ of [[post-cm01-spacetime]]: the affine
event space, the surjective absolute-time covector, the Euclidean spatial
metric on the three-dimensional kernel and the fixed spatial orientation.
These are the primitive geometric data; no equation constrains them. The
particle labels, their worldlines and their positive masses
$m_{1},\dots,m_{N}$ are the primitive material data of
[[post-cm01-worldlines]]. The class of inertial frames is fixed by
[[post-cm01-frames]] as the adapted charts of the spacetime data, with the
adopted Galilean transformations between them.

**Adopted assumptions on this page.** That the primitive data are the
spacetime of a physical model, with absolute simultaneity, Euclidean distance
within slices and no Lorentzian structure, is the postulate
[[post-cm01-spacetime]]. That the model's frames are its adapted charts, that
the changes between them are the Galilean transformations, and that a frame's
stationary congruence is derived from it, is the postulate
[[post-cm01-frames]]. That particles are labels with twice continuously
differentiable worldlines parametrized by frame time and fixed positive
masses is the postulate [[post-cm01-worldlines]]. The unit and dimension
conventions of [[def-cm01-units]] are part of the formulation and assert no
measured value.

**Constructed or proved on this page.** The adapted coordinates and the affine
structure of the simultaneous slices, with existence and uniqueness of
coordinates, are mathematics: [[def-cm-affine-time-space]],
[[lem-cm-adapted-coordinates-exist-and-are-unique]]. The transformation law
between adapted charts and its kinematic consequences are the mathematical
lemma [[lem-cm-adapted-charts-and-galilean-transformations]]; the rotation
group and its group properties are [[def-cm-special-orthogonal-group]] and
[[lem-cm-so3-is-a-matrix-group]]. The coordinate velocity and acceleration and
their frame dependence are the definition
[[def-cm01-velocity-acceleration]]. The configuration domain, its collision
exclusion, its constrained branch with the dimension count and the mass
operator are the definition [[def-cm01-configuration]], whose dimension
statement rests on the established regular-level theorem and whose mass data
are those of [[def-cm-constrained-configuration-and-mass-metric]]. The
frame change laws $w'=Rw+v$, $a'=Ra$, the frame-independence of vanishing
coordinate acceleration and the group structure of the Galilean
transformations are the physics theorem
[[pthm-cm01-galilean-kinematics]], a conditional deduction from the postulates
and the cited mathematics.

**Explicitly not claimed on this page.** No force law and no equation of
motion: nothing here determines the acceleration of any particle, and the
identification of the acceleration term with a force is made on the pages
that introduce dynamics. No conservation law and no selected potential for a
concrete system. Kinetic energy is already defined: for a tangent velocity
$v\in T_qQ$, [[def-cm-constrained-configuration-and-mass-metric]] gives
$T_q(v)=\tfrac12G_q(v,v)$, and [[def-cm01-units]] gives the Cartesian
construction $T=\tfrac12\sum_i m_i\lvert x_i'\rvert^2$ with dimension
$\mu\ell^2\tau^{-2}$. Its value along a motion requires a specified curve.
The conditional mechanical-energy construction $E=T+U$ in the unit
conventions also requires a specified potential $U$; it selects no such
potential, supplies no conserved energy and asserts no measured energy.
No gravitational interaction; gravitation is an optional force model adopted
later with its own coupling parameters. No electromagnetic coupling and no
electromagnetic field: coupling the framework to classical electromagnetism
would require that framework's fields, sources and coupling assumptions and is
not a premise or a consequence here. No relativity: the model contains no
Lorentzian metric, no light cone and no invariant speed; the Galilean
transformations of [[post-cm01-frames]] are not derived as a limit of any
other theory and no Lorentz transformation appears. No quantum correspondence:
replacing a classical coordinate or velocity by an operator is not a
derivation, and no such replacement is made or promised. No thermodynamic or
statistical-mechanical statement: equilibrium, entropy and coarse graining are
not consequences of the kinematic framework. No measured value of any mass,
length, duration or constant, and no observation.

## Scope and empirical status

- **Conditional content.** Every physical conclusion of this pair is
  conditional on the postulates of [[post-cm01-spacetime]],
  [[post-cm01-frames]] and [[post-cm01-worldlines]] and on the stated
  mathematical hypotheses of the cited suppliers. The kinematic theorem
  [[pthm-cm01-galilean-kinematics]] establishes what follows from the model;
  it does not establish that the model describes nature, and it does not by
  itself identify the class $a\equiv0$ with the motion of a physically free
  particle; that identification is the content of a dynamics postulate
  stated on a later page with its own force hypotheses.

- **Regime.** The intended regime is non-relativistic: speeds small compared
  with the speed of light, classical scales, apparatus describable by a
  classical continuum. The framework sets no numerical cutoffs; each
  application states the regime in which the point-particle idealization, the
  chosen frame description and the eventual force law are adequate.

- **Evidence.** This pair records no experiment and no measurement. Any later
  comparison of model predictions with reported observations is evidence
  about a fully specified model, its apparatus assumptions and its analysis;
  agreement is not a proof of these postulates, and disagreement can expose
  the model, an auxiliary assumption, the apparatus description or the
  analysis. Reviewer confidence is not an empirical uncertainty estimate.
