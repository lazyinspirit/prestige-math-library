---
page: cm05-two-body-central-forces-and-gravitation-examples
title: "Two-body, central forces and gravitation — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm05-gravitational-ellipse-and-period-check
  - ex-cm05-parabolic-and-hyperbolic-branch-check
  - ex-cm05-barycentric-orbits-check
  - ex-cm05-circular-orbit-frequency-check
  - cex-cm05-external-force-breaks-relative-reduction
requires:
  - cm05-two-body-central-forces-and-gravitation
  - cm-math-central
  - cm01-framework-quantities-and-geometry
  - cm02-forces-initial-data-and-newtonian-flow
  - cm03-momentum-work-and-energy-balances
  - cm-math-balances
---

These examples exercise the two-body, central-force and gravitational items
of [[cm05-two-body-central-forces-and-gravitation]] on declared model data
and probe the hypotheses of the reduction theorem. The elliptic check
[[ex-cm05-gravitational-ellipse-and-period-check]] declares masses
$m_1=m_2=2\times10^{24}\,$kg, a declared constant
$G_{\mathrm N}=2.5\times10^{-25}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$ (a datum of
the computation, not the measured value), $J=10^{27}\,$kg$\,$m$^2\,$s$^{-1}$
and conic data $p=10^6\,$m, $e=3/5$, and verifies the energy
$-3.2\times10^{17}\,$J, the semiaxes $a=25\cdot10^6/16\,$m and
$b=5\cdot10^6/4\,$m, the relative period $125\pi\cdot10^9/32\,$s by two
routes, the third-law form $T^2=4\pi^2a^3/(G_{\mathrm N}M)$, the areal rate
$500\,\mathrm{m^2\,s^{-1}}$ and the barycentric semiaxes.
[[ex-cm05-parabolic-and-hyperbolic-branch-check]] checks the zero- and
positive-energy branches on the same data: $E=0$ with $e=1$ and periapsis
$p/2$, and $e=2$ with $E=1.5\times10^{18}\,$J, periapsis $p/3$ and angular
domain $\lvert\theta-\theta_0\rvert<2\pi/3$, together with the barrier bound
that excludes the collision.

The barycentric check [[ex-cm05-barycentric-orbits-check]] uses unequal
masses $m_1=2\times10^{24}\,$kg, $m_2=6\times10^{24}\,$kg and verifies the
scaled conics of both labels about the centre of mass — parameters
$p_1=(m_2/M)p$, $p_2=(m_1/M)p$, semiaxes in the ratio $3:1$, the common
eccentricity, the focus at the centre of mass, the areal rates
$1125\,\mathrm{m^2\,s^{-1}}$ and $125\,\mathrm{m^2\,s^{-1}}$ in the ratio
$(m_2/m_1)^2=9$, and the common period. The circular-orbit check
[[ex-cm05-circular-orbit-frequency-check]] verifies the criterion
$\mu r_0\omega^2=u'(r_0)=3\times10^{12}\,$N at
$r_0=2\times10^6\,$m, the orbital energy $-3\times10^{18}\,$J and the
equality $\omega_{\mathrm{lin}}=\omega=10^{-9}\,$s$^{-1}$ of the linearised
radial frequency and the orbital angular velocity for the inverse-square
potential, together with the two labels' circles about the centre of mass.

The counterexample
[[cex-cm05-external-force-breaks-relative-reduction]] probes the
no-external-force hypothesis of [[pthm-cm05-relative-reduction]]: a
two-label model with the (zero) static central pair potential
$u\equiv0$ and antisymmetric constant external forces
$F_1^{\mathrm{ext}}=\gamma$, $F_2^{\mathrm{ext}}=-\gamma$ has an explicit
motion with $\mu r''=\gamma\neq0$, so the relative coordinate is not a
central-force trajectory for $(\mu,0)$; because the total external force
vanishes, the witness also shows that the centre-of-mass balance alone does
not restore the reduction.
