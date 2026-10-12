---
id: rem-cm15-model-boundaries
kind: remark
title: "Scope of the scattering and impulse items: model boundaries, branch and
  cutoff qualifications, and the claims deliberately not made"
status: draft
origin: session
domain: physics
dependency_level: 19
deps:
  [
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    pthm-cm15-central-scattering,
    pthm-cm15-rutherford-model,
    post-cm15-impulse,
    pthm-cm15-impact-balance,
    pthm-cm15-control-volume-balance,
    post-cm05-central-model,
    rem-cm05-collision-scope,
    def-cm01-units,
    def-countable-choice
  ]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  pthm-cm15-central-scattering: formulation-prerequisite
  pthm-cm15-rutherford-model: formulation-prerequisite
  post-cm15-impulse: formulation-prerequisite
  pthm-cm15-impact-balance: formulation-prerequisite
  pthm-cm15-control-volume-balance: formulation-prerequisite
  post-cm05-central-model: formulation-prerequisite
  rem-cm05-collision-scope: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
forward_refs: [ cex-cm15-deflection-need-not-decrease ]
physical_scope: "Assuming countable choice for the scattering measures and
  vocabulary, a scope remark recording which claims the page's scattering,
  impact and open-flow items make, which model assumptions they adopt, and which
  claims they deliberately do not make: no monotonicity or completeness of the
  deflection map, no counting or probability interpretation of the
  cross-section, no contact scattering as a smooth-potential theorem, no
  measured values or electromagnetic identification of the Coulomb parameter, no
  individual-label angular distribution without reconstructing the labels in a
  specified inertial chart, no attractive capture, screening, radiation,
  inelastic, relativistic or quantum modifications, and no constitutive or
  boundary law for the open flow. The remark adds no claim of its own beyond the
  qualifications it records."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.70)-(3.74) and
        the following discussion: the cross-section as a statistic of many
        incident particles with uniform-flux and analysis caveats, the
        Rutherford formula, the forward divergence and the warnings about
        inelastic and quantum scattering"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §§6.4-6.5: the centre-of-mass scattering construction, the hard-sphere
        example, the Rutherford cross-section, the total-cross-section
        divergence, and the separate laboratory-frame treatment"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State
        University, 2nd ed.), Engineering LibreTexts, §§11.4-11.5: the
        coefficient of restitution as a pair property between 0 and 1 and the
        split of collisions into elastic, inelastic and semi-elastic cases"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_M\
        ap_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A\
        _Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall
        2008/2009), Lecture L14 'Variable Mass Systems: The Rocket Equation':
        the variable-mass accounting and its documented limitations"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c690\
        7052499e7a98_MIT16_07F09_Lec14.pdf"
---

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the scattering measures.

This remark records the boundaries of the page's claims. It adds no
statement of its own and no empirical content; each clause refers to the
items that do.

## What the scattering items assert

[[pthm-cm15-central-scattering]] is a conditional deduction inside the
two-label central model class of [[post-cm05-central-model]] with a
finite-range $C^2$ potential and a simple outer turning point: the relative
motion extends to all of time, its asymptotic velocities and impact
parameter are computed, the half-angle advance is a quadrature, the
asymptotic directions satisfy the deflection relation with angle
$\pi-2\Delta$ when $0<\Delta<\pi/2$, and on a smooth deflection branch that
records the model's deflections the outgoing angular measure has that
branch's cross-section contribution $b|b'|/\sin\theta$.
[[def-cm15-cross-section]] sums contributions from disjoint incident
intervals, including where their angular images overlap.
[[pthm-cm15-rutherford-model]]
treats the separate long-range repulsive $\kappa/r$ potential and adds the explicit
deflection map, the Rutherford density, the finite truncated band values and
the divergence of the ideal total.

## What the scattering items do not assert

- **No monotonicity or completeness of the deflection map.**
  [[pthm-cm15-central-scattering]] clause 5 states explicitly that the map
  $b\mapsto\theta_{\mathrm s}$ is not asserted to be decreasing, injective or
  free of stationary points, and that the branch images are not asserted to
  cover $(0,\pi)$. The counterexample
  [[cex-cm15-deflection-need-not-decrease]] shows that global strict decrease
  fails even in the smooth finite-range class because the deflection has a
  constant free tail; its separate adopted contact comparison also has an
  increasing branch. The cross-section formula of
  [[def-cm15-cross-section]] therefore applies to specified invertible
  branches rather than assuming a global inverse.
  For a finite family of branches with disjoint incident intervals, the
  total density at an angle is the sum of all branch contributions whose
  images contain that angle; this total is distinct from any one branch's
  density.

- **Cross-section and probability are distinct.** The cross-section is a
  model quantity of the adopted uniform-incident preparation
  ([[def-cm15-asymptotic-data]] clause (iv),
  [[def-cm15-cross-section]] clause (iv)): it is not a count of detected
  events, not a probability per incident label, and not a property of any
  apparatus. Under the cutoff preparation, the associated probability is the incident preimage area divided by $\pi b_{\max}^2$, with fixed energy and $J(b)=\sqrt{2\mu E}\,b$. No experiment is authored on this page, and no measured rate,
  uncertainty or statistical claim about nature is made here. A comparison
  would require a specified apparatus, sampling model and analysis, as
  [[rem-cm05-collision-scope]] requires of the collision claims of the
  preceding page.

- **Contact scattering uses separate example rules.** The hard-sphere and
  refracting-shell models of the examples page adopt their fixed-wall and
  interface rules locally; neither full rule is supplied by
  [[post-cm15-impulse]], whose restitution law covers a finite-mass collinear
  two-label contact. These contact trajectories are not instances of the
  $C^2$ finite-range hypothesis of [[pthm-cm15-central-scattering]]. In
  particular the finite total cross-section $\pi a^2$ of the hard-sphere
  contact model is computed from its locally defined uniform incident-area
  pushforward under the separately adopted reflection rule and
  does not contradict the forward divergence of the ideal Coulomb branch.

- **No electromagnetic, screening, radiative or quantum content.** The
  Coulomb item treats $\kappa$ as a parameter of the mechanical model and
  does not identify it with $q_1q_2/(4\pi\varepsilon_0)$ or any other
  electromagnetic quantity; it asserts no screening law for a medium of
  scatterers, no inelastic or radiative loss, and no relativistic or
  quantum modification. Attractive Coulomb capture, for which suitable data
  do allow capture, lies outside its statement.

- **Relative data do not give label angles.** The scattering angles and
  cross-section densities are computed from the reduced relative coordinate
  and its asymptotic velocities, as defined by
  [[def-cm15-asymptotic-data]]. The two-label reconstruction
  $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$ shows that individual-label
  directions generally differ from the relative direction and from each
  other; this page asserts no individual-label angle.

## What the impact and open-flow items assert and adopt

[[post-cm15-impulse]] adopts three extensions of the force branch: the
isolated reciprocal impulse, the collinear restitution contact law with
$e\in[0,1]$, and the open-body material accounting.
[[pthm-cm15-impact-balance]] proves their conditional consequences —
momentum continuity across the impulse, exclusion of a nonzero impulse for a
candidate motion that also satisfies the smooth-force branch, the
restitution velocities, the kinetic-energy change and the open-body and
rocket laws — and records that momentum balance alone does not fix the
outcome. [[pthm-cm15-control-volume-balance]] derives the
moving-control-region identities from adopted material balances and
identifies the lumped accounting of the impact postulate as their
inlet/outlet specialisation.

These items assert no law of nature and no measured value: $e$, the impulse,
the contact direction and the mass rates and velocities are model data
([[def-cm01-units]] for the dimensions). They exclude contacts outside
$0\le e\le1$, simultaneous or tangential contacts, friction, rotation and
deformation modes, and — for the open flow — constitutive laws, boundary
conditions and incompressibility, which are separate models. Their empirical
reading (for instance that a particular pair of bodies has a particular
coefficient) requires a separately specified experiment, sampling model and
uncertainty analysis, and obtains evidence about the model-plus-apparatus
assumptions rather than a proof of the model.
