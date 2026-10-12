---
id: rem-cm02-open-system-warning
kind: remark
title: "Status audit and model boundaries of the force page: open systems, frame selection, breakdown and empirical scope"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm02-drag, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, ex-cm02-uniform-field, def-cm01-configuration, def-cm01-units, post-cm01-frames]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  post-cm02-drag: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  pthm-cm02-continuation: physical-result
  ex-cm02-uniform-field: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and status audit of the force page: which objects are adopted model data, which statements are conditional deductions, which computations are examples, and which claims are deliberately not made; the boundary between the declared particle labels and their environment in an open-system description; the frame-selection content of external fields and apparatus; the empirical status of force-law parameters, drag regimes and model comparisons. Bookkeeping and scope only; it asserts no law, no measurement and no claim about nature beyond the items it cites."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter pages 3-4 (PDF pages 7-8): the force law and its parameters as model input, with gravity an additional law and the weak-equivalence identification an empirical footnote; Section 5.1, chapter pages 1-3 (PDF pages 87-89), Eqs. (5.1)-(5.9) and footnote 4: the fluctuation condition for the damped harmonic oscillator"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, printed pages 5-9 (PDF pages 11-15): external force decomposition, the weak and strong forms of the third law, and the warning that momentum exchange with an omitted field is not covered by the particle system's pair structure"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.4 'Looking Forwards: The Validity of Newtonian Mechanics', printed page 9 (PDF page 15): the domain limitations of the Newtonian description"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
verification:
  precheck: n/a
---

## Status audit of this page

This remark records the status of the notions of the force page. It is
bookkeeping: it asserts no law and no empirical claim, and every mathematical
statement it repeats is proved in the item cited.

**Adopted assumptions.** The force branch is the postulate
[[post-cm02-force-superposition]]: the force map with its standing continuity
and state-local-Lipschitz hypotheses, the equation of motion
$m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$, the additive composition of declared
force contributions, and the transformation rule under a change of inertial
frame. The restricted interaction models — external-plus-pair decompositions,
the optional antisymmetry and centrality assumptions, potential forces and the
gravitational pair-potential branch with its coupling parameters — are the
postulate [[post-cm02-interactions]]. The linear drag model, with its declared
coefficient and its regime and fluctuation qualifications, is the postulate
[[post-cm02-drag]].

**Defined objects.** The associated first-order system, motions, initial data,
maximal motions and the Newtonian flow are the definition
[[def-cm02-newtonian-flow]]; the configuration domain, the mass operator and
the collision exclusion are [[def-cm01-configuration]], and the units and
dimensions read throughout are [[def-cm01-units]].

**Conditional deductions.** Local existence, uniqueness and the existence of
the maximal motion are [[pthm-cm02-ivp]]; the maximal-extension and breakdown
criterion, including the autonomous trapping statement, is
[[pthm-cm02-continuation]]. Both are conditional on the adopted force branch
and the cited mathematical ODE theorems; neither asserts that any physical
system realizes the model.

**Computed examples.** The uniform-force model with its explicit quadratic
motion, its uniqueness and its frame covariance is
[[ex-cm02-uniform-field]]. The companion page carries the worked model checks,
the projectile computation, the terminal-velocity computation and the two
counterexamples (nonuniqueness under a merely continuous force, and a singular
collision with finite breakdown time).

**Deliberately not claimed on this page.** No conservation law (momentum,
angular momentum, energy) is asserted: such statements require their own
hypotheses on the interaction structure and belong to later pages. No
constraint reactions and no constrained dynamics are adopted. No global
existence theorem for all force maps is claimed; the maximal interval may end
at a finite time. No measured value of any mass, field strength, drag
coefficient or gravitational coupling is asserted, and no comparison with
reported data is performed.

## Model boundaries and open systems

- **The declared labels are a modelling choice.** A model of the force branch
  names a finite set of labels; every force exerted by a body outside that set
  is an external force of the model, and the environment's state is not
  modelled. Splitting a physical situation into "the system" and "the
  environment" is part of the formulation, and different splits give different
  models with different external forces.

- **Pair structure does not survive the boundary.** The antisymmetry and
  centrality options of [[post-cm02-interactions]] are properties of the pair
  forces between declared labels. For a proper subsystem, the forces to the
  omitted labels appear as external forces that need satisfy no such
  antisymmetry; the subsystem's mechanical momentum is exchanged with the
  environment and need not be conserved. This is the open-system warning: the
  balance laws of later pages are statements about stated closed or specified
  systems, not automatic properties of an arbitrary collection of labels.

- **External fields and apparatus select frames.** The equation of motion is
  kinematically covariant under changes of inertial frame
  ([[post-cm02-force-superposition]] clause (vi)), but a concrete external
  field or apparatus can single out the frames in which its description is
  simple: the uniform-force model of [[ex-cm02-uniform-field]] uses a frame in
  which its parameter is a constant vector, and an external inverse-square
  center singles out its own location. The Galilean frames of
  [[post-cm01-frames]] remain the frames in which the force branch is
  formulated, but the model's external data can privilege a subclass for the
  description of an experiment.

- **The particle idealization is per application.** The worldlines of the
  model are those of labels with no size, spin or internal structure; a
  concrete body is described by such a label only when those omissions are
  immaterial to the question asked, and the model must state that regime where
  it matters.

## Regularity, breakdown and empirical scope

- **Hypotheses are used, not decorative.** The standing regularity of
  [[post-cm02-force-superposition]] clause (iii) is exactly the hypothesis of
  the local existence and uniqueness theorem [[pthm-cm02-ivp]]; the companion
  counterexample on the examples page exhibits a continuous force map with two
  distinct motions through one datum, so continuity alone cannot replace the
  Lipschitz clause.

- **Finite-time breakdown is not a flaw of the formulation.** By
  [[pthm-cm02-continuation]], at a finite right endpoint the full time-state
  graph leaves every compact subset of $D=I_{0}\times U$. If that endpoint is
  the finite right boundary of the prescribed open time window, the time
  coordinate alone can leave every such compact set while the state remains
  bounded and away from the excluded configurations. The state-escape reading
  is asserted in clause 4 when $I_{0}=\mathbb R$: then the state leaves every
  compact subset of $U=Q\times\mathbb R^{3N}$, by becoming unbounded or by
  approaching the excluded configurations. The companion singular-collision
  counterexample exhibits both state-space alternatives at once for an
  inverse-square external model.

- **Empirical status.** The force maps, potentials, coefficients and constants
  of this page are model data. A drag coefficient or a field strength taken
  from measurement is an empirical premise carrying its conditions and
  uncertainty. The drag postulate omits fluctuations as an idealization;
  Likharev's energy criterion is specific to the damped harmonic oscillator
  in Section 5.1 and does not impose an energy condition on the free-particle
  drag model, which defines no corresponding $E$, $T$ or $\omega_{0}$
  ([[post-cm02-drag]]). A realistic field is uniform only as an approximation.
  Agreement between a computed motion and a reported observation tests the
  combined model, apparatus and calibration assumptions and is evidence about
  them, never a proof of the model. This page records no observation at all.
