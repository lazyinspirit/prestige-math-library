---
page: qm-state-geometry-examples
title: "Qm State Geometry — Examples"
status: draft
library: physics
items: []
examples: [ex-nrqm-state-geometry-normalization-and-phase-check,
           ex-nrqm-state-geometry-finite-spin-bloch-ball,
           ex-nrqm-state-geometry-fixed-mode-two-level-states,
           ex-nrqm-state-geometry-coherent-versus-mixed-preparation,
           ex-nrqm-state-geometry-nonunique-preparation-ensembles,
           cex-nrqm-state-geometry-zero-vector-is-not-a-preparation,
           rem-nrqm-state-geometry-examples-scope-limits]
requires: ["qm-state-geometry"]
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
boundary points $|r|=1$, and each is the rank-one state of the corresponding
spin-up ray. [[ex-nrqm-state-geometry-fixed-mode-two-level-states]] performs
the corresponding computation for an abstract two-level internal space with a
pair of polarization labels, whose photon reading is deliberately deferred to
the radiation assumptions of the category.

Two comparisons illustrate the state-versus-ensemble structure of the
framework. [[ex-nrqm-state-geometry-coherent-versus-mixed-preparation]] shows
that the relative-phase superposition $(h+iv)/\sqrt2$ and the equal statistical
mixture of the rays $[h]$ and $[v]$ are assigned different states — one pure
of rank one, one mixed of rank two — so that coherence is visible at the level
of the state; and [[ex-nrqm-state-geometry-nonunique-preparation-ensembles]]
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
