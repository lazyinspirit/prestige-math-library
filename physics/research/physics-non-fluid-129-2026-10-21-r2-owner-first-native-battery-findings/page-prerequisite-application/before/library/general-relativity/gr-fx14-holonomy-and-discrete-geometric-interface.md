---
page: gr-fx14-holonomy-and-discrete-geometric-interface
title: Holonomy and discrete geometric interfaces
status: draft
library: physics
items:
  - thm-qftx-cw-fundamental-group-presentation
  - def-gr-fx-thin-paths
  - prop-gr-fx-thin-path-quotient-groupoid
  - def-gr-fx-thin-path-groupoid
  - prop-gr-fx-s1-loop-noncontractible
  - prop-gr-fx-connection-path-transport-exists
  - def-gr-fx-connection-path-transport
  - prop-gr-fx-thin-transport-invariance
  - prop-gr-fx-path-functor-and-gauge
  - prop-gr-fx-small-loop-curvature
  - prop-gr-fx-su2-compact
  - def-gr-fx-discrete-holonomy-model
  - prop-gr-fx-discrete-wilson-trace
  - prop-gr-fx-vertex-haar-projection
examples: []
requires:
  - gr-fx13-tetrads-and-lorentz-spin
  - gr-fx12-covariant-phase-space
  - complete-reducibility-for-compact-groups
  - gauge-groups-and-representation-theory-interfaces
  - relations-functions-and-quotients
  - hurewicz-whitehead-freudenthal-and-cw-approximation
  - the-fundamental-group
  - the-fundamental-group-of-the-circle
  - the-seifert-van-kampen-theorem
---

# Holonomy and discrete geometric interfaces

This page develops parallel transport for the local Lorentz connection interface of the preceding tetrad page, with the coframe convention $e'=\Lambda e$ and connection law $\omega'=\Lambda\omega\Lambda^{-1}-d\Lambda\,\Lambda^{-1}$. Paths are piecewise smooth and morphisms are their classes under fixed-endpoint thin homotopy. Transport respects the identity and composition laws of the thin path groupoid. Small-loop transport recovers the curvature with the stated positive-boundary orientation and the sign fixed by $\dot U=-\omega(\dot\gamma)U$.

The finite graph interface uses compact $SU(2)$ variables and finite-dimensional continuous unitary representations. It proves vertex gauge invariance of a Wilson trace and constructs a normalized Haar projection onto finite vertex-invariant tensors under the full Axiom of Choice required by the imported Haar supplier. These are finite kinematic statements. They do not assert a reduction of a general Lorentz connection to $SU(2)$, a continuum limit, a Hamiltonian constraint, a physical Hilbert space, or a physical observable. Normalized probability Haar averaging over noncompact $SL(2,\mathbb C)$ is not used.

The covariant phase-space requirement is retained as a declared page-level interface, but none of the local arguments here uses its dynamical claims. Compact-group reducibility is required at page level as context; the finite $SU(2)$ averaging proof uses its exact compactness and Haar hypotheses instead of assuming a Peter–Weyl decomposition.
