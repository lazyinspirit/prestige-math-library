---
page: qm-framework-and-quantities-examples
title: "Qm Framework And Quantities — Examples"
status: draft
library: physics
items: []
requires:
  - qm-framework-and-quantities
  - qm-math-magnetic-and-detection
  - qm-math-composites
  - qm-math-orbital-and-spin
  - cm-math-geometry
  - qm-math-fock-and-equilibrium
examples:
  - ex-nrqm-framework-dimension-bookkeeping
  - ex-nrqm-framework-quantity-type-checks
  - cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit
  - cex-nrqm-framework-quadratic-shear-is-not-galilean
  - cex-nrqm-framework-mean-position-can-fail-to-exist
  - rem-nrqm-framework-examples-scope-limits
---

The companion page to [[qm-framework-and-quantities]] records worked checks of
the framework's conventions and refutations of specific statements about them.
The dimension bookkeeping of [[ex-nrqm-framework-dimension-bookkeeping]] checks
the coordination, wave-function, operator, commutator, Hamiltonian,
Schroedinger-equation, current and boost-phase quantities against the unit
conventions of the framework page, and the type checks of
[[ex-nrqm-framework-quantity-type-checks]] verify on finite-dimensional data
that a pure preparation is a unit ray and a rank-one density operator, that a
mixture of orthogonal pure preparations is a density operator that is not pure,
that a local observable acts on product states through its tensor factor, and
that a finite-spectrum outcome law is a probability measure rather than a
number.

Three counterexamples then refute precise statements.
[[cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit]] refutes the
specified strong action limit on every Schwartz state together with a finite
free-frequency limit at fixed nonzero wave number: one explicit normalized
compactly supported smooth state has diverging kinetic-operator norm, and
every fixed normalized operator-domain state with nonzero momentum second
moment has divergent kinetic expectation. Its model root-mean-square speed
depends on mass and is not held fixed as mass tends to zero. This does not
decide other notions of convergence or rule out independently specified
massless models.
[[cex-nrqm-framework-quadratic-shear-is-not-galilean]] exhibits a smooth
time-dependent translation chart of the arena that is not a Galilean
transformation and assigns nonzero coordinate acceleration to a curve of zero
coordinate acceleration in the standard chart.
[[cex-nrqm-framework-mean-position-can-fail-to-exist]] displays a normalized
state in a one-dimensional P1/P2 instance whose first absolute and second
position moments both diverge, so its mean position exists only under the
moment condition recorded in the framework's quantity conventions. A closing scope audit
([[rem-nrqm-framework-examples-scope-limits]]) records what each check
establishes and that none of them reports or predicts a measured outcome.
