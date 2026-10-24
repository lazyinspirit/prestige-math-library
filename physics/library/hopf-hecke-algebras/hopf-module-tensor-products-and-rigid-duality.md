---
page: hopf-module-tensor-products-and-rigid-duality
title: "Hopf Module Tensor Products and Rigid Duality"
status: published
items: [def-hh-module-category-and-tensor-action,
        thm-hh-bialgebra-module-tensor-coherence,
        def-hh-left-dual-of-a-finite-hopf-module,
        thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities,
        lem-hh-right-dual-and-bidual-conditions]
examples: []
---

For a bialgebra $H$, the coproduct gives every tensor product of left modules a diagonal action, and the counit gives the unit module. This page defines these operations, checks the associator and unit maps, and recovers the bialgebra axioms from regular modules. It then constructs duals for finite-dimensional modules over a Hopf algebra.

The left-dual construction uses the antipode $S$ and does not require $S$ to be bijective. The right-dual construction uses $S^{-1}$ and therefore assumes bijectivity. Evaluation and coevaluation orientations are stated in each definition. The ordinary vector-space map $V\to V^{**}$ is twisted by $S^2$ on modules; an involutive antipode or a specified group-like pivot supplies an $H$-linear identification. No symmetry or braiding on $H\text{-}\mathrm{Mod}$ is asserted.

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], and [[hopf-ideals-finite-duals-and-basic-constructions]]. Their item-level interfaces are recorded in the batch evidence; unavailable bodies remain explicit readiness blockers. The companion [[hopf-module-tensor-products-and-rigid-duality-examples]] works out a bialgebra without antipode, the finite-group contragredient, and a Taft module dual.
