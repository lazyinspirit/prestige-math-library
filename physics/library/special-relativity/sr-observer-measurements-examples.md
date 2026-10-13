---
page: sr-observer-measurements-examples
title: "Observer Measurements — Examples"
status: published
library: physics
items: []
examples:
  - ex-sr-radar-round-trip-3-4-5
  - ex-sr-time-dilation-at-beta-three-fifths
  - ex-sr-length-contraction-of-a-moving-rod
  - ex-sr-velocity-transformation-worked
  - ex-sr-rindler-wedge-congruence-worked
  - ex-sr-rigid-rotation-simultaneity-holonomy
  - ex-sr-bell-congruence-fails-born-rigidity
  - cex-sr-born-rigid-motion-need-not-be-killing
  - cex-sr-simultaneity-is-observer-dependent
  - ex-sr-fermi-walker-transport-along-hyperbolic-motion
---

These worked examples and counterexamples exercise the observer-measurement
structures of [[sr-observer-measurements]] on exact rational and hyperbolic
data.

The inertial measurements are computed first. A radar round trip with emission
at chart time $2T/5$, reflection at the event $(cT,3cT/5,0,0)$ and reception at
$8T/5$ has future null legs, radar time $T$ and radar distance $3cT/5$,
matching the chart values; a second reflection at $4cT/5$ gives radar time $T$
and distance $4cT/5$, exhibiting radar simultaneity on the slice
([[ex-sr-radar-round-trip-3-4-5]]). A clock moving at $3c/5$ runs slow by the
exact factor $4/5$, with four-velocity $U=(5c/4,3c/4,0,0)$ and
$\eta(U,U)=-c^{2}$ ([[ex-sr-time-dilation-at-beta-three-fifths]]); a rod of rest
length $5$ at $3c/5$ has measured length $4$ at equal times of the measuring
frame, with the two frames comparing different pairs of endpoint events
([[ex-sr-length-contraction-of-a-moving-rod]]); and the velocity-transformation
formula is checked in the collinear, transverse and null cases, with exact
values $5c/13$, $2c/5$ and the null limit, verifying subluminality
([[ex-sr-velocity-transformation-worked]]).

The accelerated and rotating constructions come next. The Rindler chart
$\Phi(\theta,\rho,y,z)=(\rho\sinh\theta,\rho\cosh\theta,y,z)$ is verified to be
a diffeomorphism onto the right wedge with pullback metric
$-\rho^{2}d\theta^{2}+d\rho^{2}+dy^{2}+dz^{2}$, acceleration
$a=\rho^{-1}\partial_{\rho}$ of magnitude $1/\rho$, Born-rigid irrotational
slices and a non-coordinate tetrad
$[n,\partial_{\rho}]=\rho^{-1}n$
([[ex-sr-rindler-wedge-congruence-worked]]). For rigid rotation at
$\Omega R=3c/5$ the cylinder metric
$-(16/25)c^{2}dt^{2}+(6/5)cR\,dt\,d\varphi+R^{2}d\varphi^{2}$ is computed, the
rest lines have slope $dt/d\varphi=15R/(16c)$ and one-turn holonomy
$\Delta t=15\pi R/(8c)\ne0$, while the ambient rest distribution is nowhere
integrable — the distinction between the global ring obstruction and the local
Frobenius obstruction ([[ex-sr-rigid-rotation-simultaneity-holonomy]]).

The Bell-type translated congruence $x_{\xi}(t)=(ct,\tfrac12\alpha t^{2}+\xi_{1},
\xi_{2},\xi_{3})$ has exact expansion
$\theta(s,s)=\gamma^{3}\alpha^{2}t/c^{3}$, nonzero for every $t\ne0$ while the
labels keep constant separation $|\xi_{1}-\xi_{2}|$; no elasticity or breaking
conclusion is drawn ([[ex-sr-bell-congruence-fails-born-rigidity]]). Along the
uniformly accelerated hyperbolic worldline
$x(\tau)=(c^{2}/\alpha)(\sinh(\alpha\tau/c),\cosh(\alpha\tau/c),0,0)$ both legs
$U/c$ and $X_{1}=(\sinh,\cosh,0,0)$ are Fermi-Walker transported, while
$X_{1}'=(\alpha/c)X_{0}\ne0$ shows that Fermi-Walker transport is not parallel
transport for accelerated motion
([[ex-sr-fermi-walker-transport-along-hyperbolic-motion]]).

Finally the two counterexamples delimit the rigidity and simultaneity claims.
The local construction with $\psi(\lambda)=\lambda^{2}/(2L_{0}^{2})$,
$e_{0}=(\cosh\psi,\sinh\psi,0,0)$, $e_{1}=(\sinh\psi,\cosh\psi,0,0)$ and
$\Phi(\lambda,\xi,y,\zeta)=z(\lambda)+\xi e_{1}(\lambda)+y e_{2}+\zeta e_{3}$
gives a smooth future unit field with $n^{\flat}=-N\,d\lambda$,
$N=1+\lambda\xi/L_{0}^{2}$, which is Born rigid and irrotational yet has
non-closed acceleration form $a^{\flat}=(k/N)d\xi$,
$da^{\flat}=(1/L_{0}^{2}N^{2})d\lambda\wedge d\xi\ne0$; no positive smooth
multiple of it is Killing, refuting the claim that every Born-rigid field is
locally a positive multiple of a Killing field
([[cex-sr-born-rigid-motion-need-not-be-killing]]). And the events
$p=x^{-1}(0,0,0,0)$, $q=x^{-1}(0,1,0,0)$ are simultaneous relative to
$n=e_{0}$ but not relative to $n'=\tfrac54(e_{0}+\tfrac35e_{1})$, since
$\eta(n',q-p)=3/4\ne0$; simultaneity is therefore observer-dependent
([[cex-sr-simultaneity-is-observer-dependent]]).
