---
id: rem-cm15-model-boundaries
kind: remark
title: "Scope of the scattering and impulse items: model boundaries, branch and cutoff qualifications, and the claims deliberately not made"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm15-asymptotic-data,
       def-cm15-cross-section,
       pthm-cm15-central-scattering,
       pthm-cm15-rutherford-model,
       post-cm15-impulse,
       pthm-cm15-impact-balance,
       pthm-cm15-control-volume-balance,
       post-cm05-central-model,
       rem-cm05-collision-scope,
       def-cm01-units]
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
provenance:
  statement: ai-altered
  proof: not-applicable
forward_refs: [cex-cm15-deflection-need-not-decrease]
physical_scope: "A scope remark recording which claims the page's scattering, impact and open-flow items make, which model assumptions they adopt, and which claims they deliberately do not make: no monotonicity or completeness of the deflection map, no counting or probability interpretation of the cross-section, no contact scattering as a smooth-potential theorem, no measured values or electromagnetic identification of the Coulomb parameter, no laboratory-frame statement without the boost, no attractive capture, screening, radiation, inelastic, relativistic or quantum modifications, and no constitutive or boundary law for the open flow. The remark adds no claim of its own beyond the qualifications it records."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.5, Eqs. (3.70)-(3.74) and the following discussion: the cross-section as a statistic of many incident particles with uniform-flux and analysis caveats, the Rutherford formula, the forward divergence and the warnings about inelastic and quantum scattering"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §§6.4-6.5: the centre-of-mass scattering construction, the hard-sphere example, the Rutherford cross-section, the total-cross-section divergence, and the separate laboratory-frame treatment"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §§11.4-11.5: the coefficient of restitution as a pair property between 0 and 1 and the split of collisions into elastic, inelastic and semi-elastic cases"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall 2008/2009), Lecture L14 'Variable Mass Systems: The Rocket Equation': the variable-mass accounting and its documented limitations"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
---

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
records the model's deflections the outgoing angular measure has the
cross-section density $b|b'/|\sin\theta$. [[pthm-cm15-rutherford-model]]
specialises this to the repulsive $\kappa/r$ potential and adds the explicit
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

- **No counting or probability interpretation.** The cross-section is a
  model quantity of the adopted uniform-incident preparation
  ([[def-cm15-asymptotic-data]] clause (iv),
  [[def-cm15-cross-section]] clause (iv)): it is not a count of detected
  events, not a probability per incident label, and not a property of any
  apparatus. No experiment is authored on this page, and no measured rate,
  uncertainty or statistical claim about nature is made here. A comparison
  would require a specified apparatus, sampling model and analysis, as
  [[rem-cm05-collision-scope]] requires of the collision claims of the
  preceding page.

- **Contact scattering is a separate rule.** The hard-sphere and refracting
  models of the examples page are contact (impulse) models: their
  trajectories are piecewise linear and their interface laws are adopted
  from [[post-cm15-impulse]], not instances of the $C^2$ finite-range
  hypothesis of [[pthm-cm15-central-scattering]]. In particular the finite
  total cross-section $\pi a^2$ of the hard-sphere contact model is a
  property of that contact rule and does not contradict the forward
  divergence of the ideal Coulomb branch.

- **No electromagnetic, screening, radiative or quantum content.** The
  Coulomb item treats $\kappa$ as a parameter of the mechanical model and
  does not identify it with $q_1q_2/(4\pi\varepsilon_0)$ or any other
  electromagnetic quantity; it asserts no screening law for a medium of
  scatterers, no inelastic or radiative loss, and no relativistic or
  quantum modification. Attractive Coulomb capture, for which suitable data
  do allow capture, lies outside its statement.

- **No laboratory-frame statement without the boost.** All angles and
  densities are relative-frame (centre-of-mass) quantities; the individual
  labels' directions obey $x_1=X+\frac{m_2}{M}r$ and
  $x_2=X-\frac{m_1}{M}r$ ([[def-cm15-asymptotic-data]] clause (v)) and
  generally differ from the relative direction and from one another, so no
  statement of this page is a statement about a laboratory frame without an
  explicit further computation.

## What the impact and open-flow items assert and adopt

[[post-cm15-impulse]] adopts three extensions of the force branch: the
isolated reciprocal impulse, the collinear restitution contact law with
$e\in[0,1]$, and the open-body material accounting.
[[pthm-cm15-impact-balance]] proves their conditional consequences —
momentum continuity across the impulse, the smooth-force exclusion, the
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
