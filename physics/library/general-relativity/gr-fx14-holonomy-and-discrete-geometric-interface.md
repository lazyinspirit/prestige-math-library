---
page: gr-fx14-holonomy-and-discrete-geometric-interface
title: Holonomy and discrete geometric interfaces
status: published
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
  - complete-reducibility-for-compact-groups
  - gauge-groups-and-representation-theory-interfaces
  - relations-functions-and-quotients
  - hurewicz-whitehead-freudenthal-and-cw-approximation
  - the-fundamental-group
  - the-fundamental-group-of-the-circle
  - the-seifert-van-kampen-theorem
  - the-zfc-axioms-and-basic-set-constructions
  - categories-functors-and-natural-transformations
  - free-groups-and-presentations
  - hilbert-space-geometry-and-riesz-representation
  - unitary-representations-positive-type-and-gns
  - haar-measure-existence-and-uniqueness
  - bounded-linear-operators-and-quotient-spaces
  - characters-and-the-orthogonality-relations
  - uniform-spaces
---

# Holonomy and discrete geometric interfaces

This page develops parallel transport for the local Lorentz connection interface of the preceding tetrad page, with the coframe convention $e'=\Lambda e$ and connection law $\omega'=\Lambda\omega\Lambda^{-1}-d\Lambda\,\Lambda^{-1}$. Paths are piecewise smooth and morphisms are their classes under fixed-endpoint thin homotopy. For a tetrad frame map $E_x:\mathbb R^4\to T_xM$, the path-functor arrow from $T_xM$ to $T_yM$ is $E_yU_\gamma(1)E_x^{-1}$; transport respects identity and composition in the thin path groupoid. Small-loop transport for a $C^2$ $M_q(\mathbb R)$-valued connection recovers curvature with the stated positive-boundary orientation and the sign fixed by $\dot U=-\omega(\dot\gamma)U$, using $q=4$ for the tetrad connection.

The finite graph interface uses compact $SU(2)$ variables and finite-dimensional continuous unitary representations. It proves vertex gauge invariance of a Wilson trace and constructs a normalized Haar projection onto finite vertex-invariant tensors under the full Axiom of Choice required by the imported Haar supplier. These are finite kinematic statements. They do not assert a reduction of a general Lorentz connection to $SU(2)$, a continuum limit, a Hamiltonian constraint, a physical Hilbert space, or a physical observable. Normalized probability Haar averaging over noncompact $SL(2,\mathbb C)$ is not used.

The compact-group page supplies the weak Haar averaging definition and the theorem projecting bounded operators onto intertwiners, applied here to maps from the trivial representation on $\mathbb C$ into each vertex space. The character-theory page supplies the tensor-product and dual-representation definitions for arbitrary groups; no finite-group character theorem is used. The uniform-spaces page supplies the topological-group definition used to establish compact Hausdorff $SU(2)$.
