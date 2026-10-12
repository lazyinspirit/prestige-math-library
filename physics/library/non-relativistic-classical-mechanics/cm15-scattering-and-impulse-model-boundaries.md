---
page: cm15-scattering-and-impulse-model-boundaries
title: "Scattering and impulse model boundaries"
status: draft
library: physics
items:
  - def-cm15-asymptotic-data
  - def-cm15-cross-section
  - pthm-cm15-central-scattering
  - pthm-cm15-rutherford-model
  - post-cm15-impulse
  - pthm-cm15-impact-balance
  - pthm-cm15-control-volume-balance
  - rem-cm15-model-boundaries
examples: []
requires:
  - cm-math-continuum
  - cm05-two-body-central-forces-and-gravitation
  - cm-math-central
  - cm01-framework-quantities-and-geometry
  - cm03-momentum-work-and-energy-balances
  - cm-math-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm-math-geometry
---

The scattering measures assume countable choice; the model rates are conditional on that mathematical foundation. This page treats scattering and impact inside the adopted model class of
[[post-cm05-central-model]] and marks the boundaries at which that description
stops. Two ingredients are fixed first. [[def-cm15-asymptotic-data]] defines
the physical reading of the scattering data of a central scattering model: the
reduced problem of the two-label class, the scattering motion on all of time,
its energy and angular momentum, the asymptotic velocities, the impact
parameter as an asymptotic perpendicular-distance limit (the exact affine extension of a free incoming tail in the finite-range case), the polar
advance and the deflection conventions, the adopted uniform-incident
preparation with normalized density $b/(\pi b_{\max}^2)$, fixed energy and varying $J(b)=\sqrt{2\mu E}\,b$, its flux and units, and the reading conventions that define angles from the relative coordinate rather than individual label trajectories. [[def-cm15-cross-section]]
defines the differential cross-section of a deflection branch as the
area-pushforward density $b(\theta)\lvert b'(\theta)\rvert/\sin\theta$, its
finite-family sums for disjoint incident intervals even when angular images
overlap, and Borel cross-section measures through nonnegative Lebesgue
integrals, agreeing with compact Riemann integrals and monotone interval
truncations. It also defines the uniform-incident rate reading and its
empirical qualifications: a model rate is not a count of detected
events and its comparison with data requires a specified apparatus, sampling
model and analysis.

On that vocabulary the page's first physics theorem,
[[pthm-cm15-central-scattering]], transfers the finite-range scattering theory
of [[cm-math-central]] to the model: under a finite-range $C^2$ potential and a
simple outer turning point, the relative coordinate of a model motion extends
uniquely to all of time, with a single apsis and two monotone branches; the
asymptotic velocities exist with speed $\sqrt{2E/\mu}$; beyond the range the
motion is exactly free and the incoming and outgoing lines have perpendicular
distance $b=J/\sqrt{2\mu E}$; the half-angle advance is the quadrature
$\Delta=\int_{r_*}^{\infty}J\,\mathrm dr/(r^2\sqrt{2\mu(E-V)})$ and the
asymptotic directions satisfy the deflection relation with angle
$\pi-2\Delta$ when $0<\Delta<\pi/2$; and on a smooth deflection branch that
records the model's deflections the outgoing angular measure carries the
cross-section density, with the uniform-incident rate reading attached. Its
scope clause records that no monotonicity, injectivity or completeness of the
deflection map is asserted.
[[pthm-cm15-rutherford-model]] separately treats the long-range the repulsive $\kappa/r$
potential: the effective potential is strictly decreasing, every stated
relative motion extends without collision to all of time, the deflection map
is the single $C^1$ branch $2\arctan(\kappa/(2Eb))$ with inverse
$(\kappa/2E)\cot(\theta/2)$, the differential cross-section is the Rutherford
density $(\kappa/4E)^2\csc^4(\theta/2)$, every angular band has the finite
truncated total $\pi(b(\theta_1)^2-b(\theta_2)^2)$, and the ideal total
diverges at forward angles. The parameter $\kappa$ is a model datum of the
mechanical model and is not identified with any electromagnetic quantity.

The second half of the page marks the impact and open-flow boundaries.
[[post-cm15-impulse]] adopts three extensions of the force branch: an isolated
reciprocal impulse (equal and opposite finite momentum jumps at one time, the
regular dynamics retained away from it), a collinear restitution contact law
with coefficient $0\le e\le1$, and an open-body material accounting for matter
entering and leaving a body at given rates with given inertial velocities.
[[pthm-cm15-impact-balance]] proves the conditional consequences: the total
momentum is continuous across the impulse; a motion of the smooth-force branch
with continuous forces cannot carry a nonzero impulse, so the jump is a genuine
model extension; the collinear contact has the restitution velocities and the
kinetic-energy change $-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$, is
dissipative for $e<1$ and identifies the deficit with no measured quantity;
momentum balance alone leaves a one-parameter family of outcomes, so the
contact law is an independent datum; and the open-body accounting yields
$mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$
with the rocket thrust as the special case.
[[pthm-cm15-control-volume-balance]] states the adopted smooth open-flow model,
localises its material balances to the field equations, and derives the
moving-control-region mass and momentum rates with the boundary speed $w$ and
the relative-velocity flux; it records the material and fixed special cases and
decomposes the boundary flux into inlet and outlet rates with flux-averaged
inertial velocities, reproducing the lumped open-body law of the impact
postulate. The closing remark [[rem-cm15-model-boundaries]] records what the
page does not claim: no monotonicity or completeness of the deflection map, no
counting or probability interpretation of the cross-section, no contact
scattering as a smooth-potential theorem, no measured values and no
electromagnetic identification, no individual-label angular distribution
without applying the two-label reconstruction in a specified inertial chart,
and no constitutive or boundary law for the open flow.

Worked checks on declared data are collected on
[[cm15-scattering-and-impulse-model-boundaries-examples]].
