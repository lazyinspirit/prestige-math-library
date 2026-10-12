---
id: rem-cm03-conservation-scope
kind: remark
title: "Status audit and scope of the balance page: conditional conservation, open systems, frames, potential normalization and empirical boundaries"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm03-centre-of-mass-and-momenta, pthm-cm03-centre-of-mass-and-kinetic-splitting, pthm-cm03-momentum-balance, pthm-cm03-angular-momentum-balance, pthm-cm03-work-energy, def-cm03-potential-and-mechanical-energy, pthm-cm03-energy-balance, pthm-cm03-frame-transformations, post-cm02-force-superposition, post-cm02-interactions, post-cm02-drag, def-cm02-newtonian-flow, pthm-cm02-continuation, rem-cm02-open-system-warning, def-cm01-units, def-euclidean-inner-product]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-centre-of-mass-and-kinetic-splitting: physical-result
  pthm-cm03-momentum-balance: physical-result
  pthm-cm03-angular-momentum-balance: physical-result
  pthm-cm03-work-energy: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  pthm-cm03-frame-transformations: physical-result
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  post-cm02-drag: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-continuation: physical-result
  rem-cm02-open-system-warning: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and status audit of the balance page: which objects are defined, which statements are conditional deductions from the force and interaction posts, which hypotheses each conservation statement needs, and which claims are deliberately not made; the frame dependence of the conserved quantities, the open-system boundary, the normalization of a potential, the local-versus-global potential distinction and the empirical status of model parameters. Bookkeeping and scope only; it asserts no law, no measurement and no conservation beyond the items it cites."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, chapter pages 8-10 (PDF pages 12-14): the caution that the conservation laws are first integrals of the equations of motion and introduce nothing new dynamically, and the central-force condition for the angular-momentum statement"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, printed pages 5-9 (PDF pages 11-15): the third-law hypotheses behind the momentum and angular-momentum statements, the caution about momentum carried by omitted fields, and the conservative-force conditions behind energy conservation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Status audit of this page

This remark records the status of the notions of the balance page. It is
bookkeeping: it asserts no law and no empirical claim, and every mathematical
statement it repeats is proved in the item cited.

**Adopted assumptions.** The force branch is the postulate
[[post-cm02-force-superposition]]: the force map with its standing continuity
and state-local-Lipschitz hypotheses, the equation of motion
$m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$ in every inertial frame, the additive
composition of declared force contributions and the transformation rule of a
force law under a change of inertial frame. The restricted interaction models
are the postulate [[post-cm02-interactions]]: the external-plus-pair
presentation, the optional antisymmetry and centrality clauses, the potential
branch and the gravitational branch. The linear drag model is the postulate
[[post-cm02-drag]].

**Defined objects.** The total mass, total momentum, centre of mass, relative
positions, angular momentum about a reference curve, total and external
torques, internal torque sum, kinetic energy, power and work are defined in
[[def-cm03-centre-of-mass-and-momenta]]; potential presentations, potential
and mechanical energy, the closed/exact distinction for time- and
velocity-independent force fields and equipotential level sets are defined in
[[def-cm03-potential-and-mechanical-energy]]. Motions and maximal motions are
[[def-cm02-newtonian-flow]].

**Conditional deductions.** The splitting of the kinetic sum and
$P=MV$ are [[pthm-cm03-centre-of-mass-and-kinetic-splitting]]. The momentum
balance and the centre-of-mass equation, under the antisymmetric
external-plus-pair presentation, are [[pthm-cm03-momentum-balance]]. The
angular-momentum balance about fixed and moving reference points, with the
centrality case, is [[pthm-cm03-angular-momentum-balance]]. The power identity
and the work-energy theorem are [[pthm-cm03-work-energy]]. The mechanical
energy balance and conservation for a static potential without residual
forces are [[pthm-cm03-energy-balance]]. The transformation laws of all these
quantities under a change of inertial frame are
[[pthm-cm03-frame-transformations]].

**Computed examples.** The companion page checks the laws on explicit data:
the two-body Hooke model with an exact circular relative motion (momentum,
angular momentum including the moving-origin correction, kinetic splitting,
energy conservation and the kinetic boost law), a driven one-dimensional
model with a time-dependent potential and a residual force (the balance, the
integrated work form and the normalization ambiguity), and the two
counterexamples recorded below.

**Deliberately not claimed on this page.** No conservation law holds without
its stated hypotheses: momentum conservation needs the antisymmetric pair
presentation and the vanishing of the total external force; angular-momentum
conservation needs a fixed reference point and the vanishing of the total
torque, with centrality only one sufficient condition (the companion
counterexample exhibits non-central pair forces whose torque sum cancels
identically); mechanical-energy conservation needs a global potential
presentation with a time-independent representative and no residual forces.
No theorem of this page asserts that any interaction of nature has the
required structure. No constraint reactions, no impulsive forces, no
variable-mass models and no measurements appear.

## Hypotheses and counterexamples

- **The hypotheses are used, not decorative.** Antisymmetry is exactly what
  cancels the internal forces in [[pthm-cm03-momentum-balance]]; centrality is
  a sufficient condition in clause 3 of
  [[pthm-cm03-angular-momentum-balance]], and a model with non-central pairs
  can still conserve angular momentum when the pair torques cancel. The
  companion counterexample makes the two situations concrete.

- **Closed is not exact.** The potential branch requires a global potential;
  a merely closed field on a non-star-shaped domain need not have one, and
  the companion counterexample exhibits this on the complement of a line,
  with nonzero circulation around a loop. On every star-shaped subdomain a
  local potential and a local mechanical energy exist
  ([[def-cm03-potential-and-mechanical-energy]] clause (e)).

- **Energy can be removed by residual forces.** A residual force such as the
  linear drag term of [[post-cm02-drag]] has power
  $\langle -c\,v,v\rangle=-c\lVert v\rVert_{2}^{2}\le0$ along the model's
  motions, by bilinearity of the Euclidean inner product
  ([[def-euclidean-inner-product]]); the balance
  [[pthm-cm03-energy-balance]] then reports a strictly negative residual
  contribution whenever $v\neq0$ and $c>0$. This is a statement about the
  declared model, not about nature.

## Frames, open systems and empirical boundaries

- **Conservation is frame-relative.** Under a change of inertial frame the
  values of $P$, $K$, $J_{o}$ and $E$ change by the affine laws of
  [[pthm-cm03-frame-transformations]]; a statement that a quantity is
  constant on an interval is a statement in a fixed frame, and the
  transformed quantity is constant with a different value (for $P$ and $K$
  the transformation is time-affine because the boost parameters are
  constant). No conservation law of this page asserts a frame-independent
  numerical value.

- **Open systems.** The pair structure, antisymmetry and centrality are
  properties of the declared labels; for a proper subsystem the forces to
  omitted labels enter as external forces that need satisfy no such
  property, and the subsystem's momentum, angular momentum and energy are
  exchanged with the environment. This continues the boundary recorded in
  [[rem-cm02-open-system-warning]]; the balance theorems are statements about
  the specified system, not about an arbitrary collection of bodies.

- **Empirical status.** Masses, force parameters, potentials, residual-force
  coefficients and the choice of potential representative are model data; a
  numerical value taken from measurement is an empirical premise with its
  conditions and uncertainty, and the pages of this pair record no
  observation. Agreement of a computed motion with a reported observation
  would test the combined model, apparatus and calibration assumptions, and
  would be evidence about them, not a proof of the model. Finite-time
  breakdown of a maximal motion remains possible by
  [[pthm-cm02-continuation]] and does not affect the balance identities,
  which hold on every interval on which the motion is defined.
