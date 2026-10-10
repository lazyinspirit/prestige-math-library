---
page: sr-energy-momentum
title: "Energy Momentum"
status: draft
library: physics
items: [def-sr-observed-energy-momentum-and-kinetic-energy, lem-sr-energy-momentum-observer-identities, lem-sr-four-momentum-in-inertial-frame, def-sr-proper-time-derivative-and-four-force, lem-sr-four-force-and-work-energy-identities, def-sr-total-four-momentum-and-invariant-mass, lem-sr-finite-future-causal-sums, lem-sr-center-of-momentum-frame, def-sr-collision-datum-and-conservation, lem-sr-collision-necessary-conditions, post-sr-massive-particle-dynamics, post-sr-ideal-massless-particle-momentum, pthm-sr-momentum-and-four-force]
examples: []
---

This page develops the four-momentum, energy and momentum of relativistic
particles on the affine Minkowski model, first as mathematics and then under
the model's adopted physical premises. [[def-sr-observed-energy-momentum-and-kinetic-energy]]
fixes the observer energy $E_n(P)=-c\,\eta(P,n)$, the spatial momentum
$q_n(P)=h(P)$, the invariant mass $m(P)=\sqrt{-\eta(P,P)}/c$, the rest energy
$mc^2$ and the kinetic energy $T_n(P)=E_n(P)-mc^2$, together with the unique
decomposition $P=(E_n(P)/c)n+q_n(P)$. [[lem-sr-energy-momentum-observer-identities]]
proves positivity of $E_n$, the mass-shell identity
$E_n^2=m^2c^4+c^2|q_n|^2$, the null relation $E_n=c|q_n|$ and the
velocity formulas $E_n=mc^2\gamma$, $q_n=m\gamma w$; the mass $m(P)$ is a
function of the scalar $\eta(P,P)$ alone.

[[lem-sr-four-momentum-in-inertial-frame]] reads the components in an inertial
frame, where $P=(E/c,\mathbf p)$ with $E=m\gamma_wc^2$ and
$\mathbf p=m\gamma_w\mathbf w$, proves the passive-boost transformation law of
the components and the frame independence of $E^2-c^2|\mathbf p|^2$. The
proper-time derivative and the four-force are introduced by
[[def-sr-proper-time-derivative-and-four-force]], and
[[lem-sr-four-force-and-work-energy-identities]] proves $\eta(P,F)=0$, $F=mA$,
$F=\gamma(\mathbf f\cdot\mathbf w/c,\mathbf f)$ and the work–energy relation
$dE/dt=\mathbf f\cdot\mathbf w$, with the variable-mass identity
$\eta(P,F)=-mc^2\,dm/d\tau$ as a separate clause.

For systems, [[def-sr-total-four-momentum-and-invariant-mass]] defines the
total four-momentum and the invariant mass $M$ of a future timelike total, and
[[lem-sr-finite-future-causal-sums]] shows that finite sums of nonzero future
causal vectors are nonzero future causal, additive in the observer quantities
and timelike as soon as one summand is timelike.
[[lem-sr-center-of-momentum-frame]] constructs the center-of-momentum frame
with $e_0=Q/(Mc)$, proves uniqueness up to origin choice and spatial rotations and shows
that a nonzero future null total has no such frame.
[[def-sr-collision-datum-and-conservation]] fixes the collision-data
vocabulary, and [[lem-sr-collision-necessary-conditions]] derives the
necessary conditions: $M$ dominates each side's mass sum with a specific
equality case, a null total forces parallel massless legs, and the two-leg
projectile–target configuration obeys the displayed threshold inequalities.

The adopted physical premises are [[post-sr-massive-particle-dynamics]]
(constant positive mass with $P=mU$, the measurement identification, isolated
collision balance, and the equation of motion for a stipulated force) and
[[post-sr-ideal-massless-particle-momentum]] (ideal massless particles as
nonzero future null momenta, with no four-velocity, proper time or rest
frame). [[pthm-sr-momentum-and-four-force]] assembles these into the
conditional physical conclusions, including the necessary collision
thresholds; it uses no empirical premise. Worked computations, including the
$\beta=3/5$ four-momentum, a boost to rest, the head-on collective mass, the
null pair, the stationary-target threshold and the non-uniqueness of the final
state, are on [[sr-energy-momentum-examples]].
