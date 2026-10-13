---
id: rem-cm05-collision-scope
kind: remark
title: "Scope of the two-body and central-force page: collision and radial exclusions, point-particle and finite-size limits, the empirical parameters and their uncertainty, and the conditional status of the orbit statements"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, pthm-cm05-plane-area, pthm-cm05-effective-potential, pthm-cm05-circular-orbit, pthm-cm05-conic, pthm-cm05-kepler-period, post-cm02-force-superposition, post-cm02-interactions, post-cm01-worldlines, def-cm01-units, def-cm01-configuration, def-cm02-newtonian-flow, def-cm-central-force-trajectory, lem-cm05-radial-potential-gradient, def-countable-choice]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-plane-area: physical-result
  pthm-cm05-effective-potential: physical-result
  pthm-cm05-circular-orbit: physical-result
  pthm-cm05-conic: physical-result
  pthm-cm05-kepler-period: physical-result
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm05-radial-potential-gradient: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and status audit of the two-body, central-force and gravitation page: which items are adopted assumptions, which are conditional deductions, which exclusions (collision, radial motion, finite size, external bodies, relativistic regime) the statements carry, how the empirical parameters $G_{\\mathrm N}$ and the mass identification qualify numerical conclusions, and which claims are deliberately not made. Bookkeeping and scope only; it asserts no law, no measurement and no conclusion beyond the items it cites."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4 footnotes 16-17 and the discussion around Fig. 5, chapter pages 11-12 (PDF pages 44-45): the capture possibility for potentials diverging faster than $1/r^2$, the special role of the exactly radial motion $L_z=0$, and the restriction of the conic solutions to the physically meaningful range"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 32-33 (PDF pp. 38-39): the angular-momentum barrier, the restriction to the plane perpendicular to $L$, and the elliptic/hyperbolic classification of the gravitational two-body problem"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "P. J. Mohr, D. B. Newell, B. N. Taylor, E. Tiesinga et al., CODATA Recommended Values of the Fundamental Physical Constants: 2022, arXiv:2409.03787, Section XIV and Table XXX: the recommended value of $G$ with relative standard uncertainty $2.2\\times10^{-5}$ and the 16 mutually inconsistent input measurements"
      url: "https://arxiv.org/pdf/2409.03787"
---

## Status audit of this page

This remark records the scope of the page's items. It is bookkeeping: every
mathematical statement it repeats is proved in the item cited, and it adds no
law, no observation and no numerical value of its own.

**Adopted assumptions.** The force branch is [[post-cm02-force-superposition]]
with its standing regularity and equation of motion; the interaction
restrictions (external-plus-pair presentation, antisymmetry, centrality, the
potential branch and the gravitational branch) are [[post-cm02-interactions]];
the page's central-force class, the reduced problem, the fixed-centre
idealization and the reading conventions are [[post-cm05-central-model]]; and
the gravitational model with its mass identification and the measured value
of $G_{\mathrm N}$ is [[post-cm05-gravity]]. None of these is proved here.

**Conditional deductions.** The relative reduction, the uniform
centre-of-mass motion and the reconstruction bijection are
[[pthm-cm05-relative-reduction]]; the planarity and area law are
[[pthm-cm05-plane-area]]; the effective one-dimensional problem and its
converse are [[pthm-cm05-effective-potential]]; the circular-orbit criterion
and the linearised radial frequency are [[pthm-cm05-circular-orbit]]; the
conic classification, the barrier and the elliptic geometry are
[[pthm-cm05-conic]]; and the period and third law are
[[pthm-cm05-kepler-period]]. Each is a conditional consequence of the adopted
model and the cited mathematics. The conic and period items assume the Axiom
of Countable Choice ([[def-countable-choice]]); every scope statement below
that invokes their conclusions carries that assumption.

## Exclusions and limits

- **Collision and the domain.** The configuration domain excludes
  $x_1=x_2$, i.e. $r=0$ ([[def-cm01-configuration]],
  [[post-cm05-central-model]] clause (v)); the equations of motion and every
  orbit statement above are undefined at the collision. In the gravitational
  model with $j\ne0$ the barrier of [[pthm-cm05-conic]] clause 2 keeps
  $\lvert r\rvert\ge\rho_{\min}(E)>0$ throughout the motion; no such bound is
  available for the radial case, so the conic, area and period statements
  must not be extended to it.

- **Radial motion.** For $j=0$ the nonzero-angular-momentum polar parametrization and its distinguished plane orthogonal to $j$ are unavailable; a constant polar angle can still be chosen in any plane containing the fixed radial direction. [[pthm-cm05-plane-area]] clauses 2-4,
  [[pthm-cm05-conic]] and [[pthm-cm05-kepler-period]] exclude this case
  explicitly. Clause 1 of [[pthm-cm05-effective-potential]] also assumes
  $J=\lvert j\rvert>0$, so it does not supply the radial equation. Instead,
  angular-momentum conservation in [[pthm-cm05-plane-area]] clause 1 and the
  relative equation of [[pthm-cm05-relative-reduction]] show that, when
  $j=0$, $r'=\lambda r$ with $\lambda=\langle r,r'\rangle/\lvert r\rvert^2$.
  Setting $\rho=\lvert r\rvert>0$ gives $\rho'=\lambda\rho$ and
  $n'=r'/\rho-r\rho'/\rho^2=0$ for $n=r/\rho$; hence the unit direction is
  constant, say $n_0$, and $r=\rho n_0$ with $\rho\in J_0$.
  Substitution into that relative equation yields the scalar equation
  $\mu\rho''=-u'(\rho)$ on $J_0$. No centrifugal term, equal-area, conic or
  period claim is made for radial trajectories.

- **Point particles and finite size.** The model retains only positions and
  fixed masses of the labels ([[post-cm01-worldlines]] clause (vi)); size,
  shape, rotation, deformation, internal structure and mass loss are omitted.
  A real body whose radius, multipole moments, tides or spin matter for the
  question asked is not described by these items, and their applicability
  must be justified separately wherever they are used.

- **External bodies and non-gravitational forces.** The model has no
  external forces by construction ([[post-cm05-central-model]] clause (i)),
  so third bodies, drag, radiation pressure or any other agent are outside
  it; a two-body computation with such influences is a different model,
  not a corollary of this page.

- **Regime.** The meanings of weak-field and non-relativistic use are those
  defined in [[post-cm05-gravity]] clause (iv): for a trajectory segment and
  chosen tolerance $\eta\in(0,1)$, in the fixed comparison inertial frame of that clause, the maximum source-potential ratio
  $\max_i\lvert\Phi_i\rvert/c^2$ and the maximum squared label-speed ratio
  $\max_i\lvert x_i'\rvert^2/c^2$ are each at most $\eta$ throughout the segment. Relativistic corrections
  (for instance the perihelion precession of the inner planets) require the
  general-relativistic framework and are neither derived nor bounded here;
  the inverse-square law itself is an adopted law of the model.

## Empirical status

- **The constant.** Formula-level statements use the symbol $G_{\mathrm N}$
  and are conditional on [[post-cm05-gravity]] clause (i). Any numerical
  application that assigns the CODATA value of clause (iii) — relative
  standard uncertainty $2.2\times10^{-5}$, with the mutual inconsistency of
  the 16 input measurements recorded there — inherits that uncertainty and
  the conditions of every other input actually used. The framework does not
  derive the value of $G_{\mathrm N}$ and does not claim it is exact.

- **The mass identification.** The simplification of the third law to
  $T^{2}=4\pi^{2}a^{3}/(G_{\mathrm N}M)$ in [[pthm-cm05-kepler-period]] clause
  2 uses the empirical identification $m_i^{g}=m_i$ of
  [[post-cm05-gravity]] clause (ii), which is an adopted assumption, not a
  consequence of the equation of motion. Statements that keep the couplings
  $m_i^{g}$ distinct remain valid without it.

- **No local experiment.** No item of this page reports an experiment or
  apparatus record. [[post-cm05-gravity]] clause (iii) does report the
  CODATA 2022 recommended estimate and standard uncertainty for $G_{\mathrm N}$,
  the source's 16 measured input values, and the 3.9 uncertainty-expansion
  factor. Those are source-reported aggregate evidence, not a measurement
  performed or newly reported by this page; the individual experimental
  apparatus records are not reproduced here. The numerical checks on the
  companion examples page use declared model data. Comparing any prediction
  of this page with observations would test the combined model, parameter and
  apparatus assumptions; agreement would be evidence, not a proof of the
  model, and a discrepancy would identify no particular postulate by itself.

## Deliberately not claimed

No global existence of arbitrary central-force trajectories, no nonlinear
stability of circular orbits, no closed-form solution of the general
non-Coulomb central problem, no asymptotes or scattering cross-sections for
the unbounded conic branches, no relativistic or finite-size corrections, and no claim
that any physical system is exactly a model of the adopted class.
