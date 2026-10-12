---
page: qm-state-geometry-examples
title: "Qm State Geometry — Examples"
status: draft
library: physics
items: []
examples:
  - ex-nrqm-state-geometry-normalization-and-phase-check
  - ex-nrqm-state-geometry-finite-spin-bloch-ball
  - ex-nrqm-state-geometry-fixed-mode-two-level-states
  - ex-nrqm-state-geometry-coherent-versus-mixed-preparation
  - ex-nrqm-state-geometry-nonunique-preparation-ensembles
  - cex-nrqm-state-geometry-zero-vector-is-not-a-preparation
  - rem-nrqm-state-geometry-examples-scope-limits
requires:
  - qm-state-geometry
  - construction-of-r-via-cauchy-sequences
  - qm-framework-and-quantities
  - qm-math-orbital-and-spin
  - qm-math-composites
---

The companion page to [[qm-state-geometry]] records finite worked checks of the
state-space objects and one refutation. The normalization and phase check
[[ex-nrqm-state-geometry-normalization-and-phase-check]] computes norms,
normalized representatives and normalized rank-one operators on the explicit
vectors $(1,i)$ and $(1+i)(1,i)$, verifying that phase-equivalent or rescaled
representatives of one ray give the same pure state. The state space of the
model's two-level finite-spin system is computed in
[[ex-nrqm-state-geometry-finite-spin-bloch-ball]]: the states are exactly the
operators $\frac12(I+r\cdot\sigma)$ with $|r|\le1$, the pure states are the
boundary points $|r|=1$, and each is assigned to the corresponding spin-up ray,
defined there as the ray of a unit eigenvector of $r\cdot\sigma$ with eigenvalue
$+1$. Each boundary state has one-dimensional range.
[[ex-nrqm-state-geometry-fixed-mode-two-level-states]] performs
the corresponding computation for an abstract two-level internal space with a
pair of polarization labels, whose photon reading is deliberately deferred to
the radiation assumptions of the category.

Two comparisons illustrate the state-versus-ensemble structure of the
framework. [[ex-nrqm-state-geometry-coherent-versus-mixed-preparation]] shows
that the relative-phase superposition $(h+iv)/\sqrt2$ and the equal statistical
mixture of the rays $[h]$ and $[v]$ are assigned different states — one pure
with one-dimensional range and one mixed with two-dimensional range. Relative
to $(h,v)$, their off-diagonal
matrix entries are $(-i/2,i/2)$ for the superposition and $(0,0)$ for the
mixture; this is the state-level distinction defined in the linked example.
[[ex-nrqm-state-geometry-nonunique-preparation-ensembles]]
exhibits one mixed two-level state that arises both as an orthonormal ensemble
with unequal weights and as the uniform mixture of two non-orthogonal pure
states, so the state does not determine the ensemble. The counterexample
[[cex-nrqm-state-geometry-zero-vector-is-not-a-preparation]] refutes the claim
that every vector determines a pure preparation with the zero vector as an
empty preparation: the zero vector has no unit representative, the
normalization map is undefined at it, and the zero operator is not a density
operator. A closing audit
([[rem-nrqm-state-geometry-examples-scope-limits]]) records what each check
establishes and that none of them is an experiment, a measurement prediction or
a comparison with data.
