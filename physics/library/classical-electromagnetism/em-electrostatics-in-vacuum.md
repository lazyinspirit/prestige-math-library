---
page: em-electrostatics-in-vacuum
title: "Electrostatics in vacuum"
status: published
library: physics
items: [lem-em-newtonian-far-field-gradient, lem-em-distributional-gradient-smooth-off-a-point, lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains, def-em-electrostatic-regime, pthm-em-electrostatic-potential, pthm-em-coulomb-solution, pthm-em-electrostatic-work, pthm-em-electrostatic-field-energy, pthm-em-point-self-energy-divergence]
examples: []
---

This page fixes the static and pure electrostatic reading of the vacuum Maxwell
equations in one named inertial laboratory frame and develops the standard
solutions from it. [[def-em-electrostatic-regime]] states what it means for the
fields and sources to be time independent, reduces the smooth Maxwell equations
to $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$ in the
pure case, fixes the fixed-time spatial reading of every object, and records the
static-to-distributional dictionary, including the stationary point charge as the
fixed-time reading of the framework's weak point source.
[[pthm-em-electrostatic-potential]] constructs the scalar potential on a
star-shaped region, proves the Poisson equation and the uniqueness up to an
additive constant. [[pthm-em-coulomb-solution]] solves the problem for compact
smooth and compact $L^1$ sources with the localised Newtonian potential, proves
the decaying uniqueness statement, and states the distributional identities of
the idealised point charge. [[pthm-em-electrostatic-work]] gives the work
identity and path independence for a prescribed path in a prescribed field, with
the external-coupling reading; [[pthm-em-electrostatic-field-energy]] proves that
the finite field energy, the assembly integral and the symmetric double-kernel
energy of a compact $C^1$ source agree; and
[[pthm-em-point-self-energy-divergence]] records the divergence of the truncated
point-charge field energy together with the explicit limits of the mass
inference. Three mathematical prerequisites local to this page certify the
distributional gradient of a locally integrable function smooth off one point
([[lem-em-distributional-gradient-smooth-off-a-point]]), the far-field gradient
and decay of the compactly supported Newtonian potential
([[lem-em-newtonian-far-field-gradient]]), and the membership of Euclidean balls,
annuli and spheres in the bounded $C^1$ domain and compact embedded hypersurface
classes ([[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]]).

The companion page [[em-electrostatics-in-vacuum-examples]] carries the worked
infinite-line and uniform-ball examples, including the logarithmic potential and
energy divergence of the line and the finite energy of the ball.
