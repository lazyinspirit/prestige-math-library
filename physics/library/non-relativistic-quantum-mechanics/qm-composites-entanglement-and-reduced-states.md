---
page: qm-composites-entanglement-and-reduced-states
title: Qm Composites Entanglement And Reduced States
status: draft
library: physics
items:
  - lem-nrqm-composites-local-pvm-tensor-extension
  - lem-nrqm-composites-pure-state-separability-criterion
  - def-nrqm-composites-separable-and-entangled-states
  - def-nrqm-composites-framework-composite-systems-and-local-readouts
  - def-nrqm-composites-framework-reduced-preparations
  - pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement
  - pthm-nrqm-composites-local-readout-laws-and-reduced-preparations
  - pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations
  - pthm-nrqm-composites-local-instruments-and-no-signalling
  - def-nrqm-composites-marker-model-and-fringe-visibility
  - pthm-nrqm-composites-marker-overlap-and-visibility-bound
  - rem-nrqm-composites-scope-and-empirical-status
examples: []
requires:
  - qm-angular-momentum-and-spin
  - qm-measurement-and-instruments
  - compactness
  - qm-math-composites
  - qm-state-geometry
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-massive-particle-kinematics
---

This page fixes the framework's reading of the composition clause of P1 for
two distinguishable subsystems and develops the entanglement and reduced-state
theory of pure composite preparations, the local statistics of one factor, and
the marker model of a two-component interference arrangement. The vocabulary
is fixed in
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]]:
a declared composite assigns the completed tensor product of the two factor
spaces, the product basis convention, the local readout
$E_{A}(\cdot)\otimes I_{K}$ of an assigned sharp observable of one factor, and
the local effects and local instruments of one factor alone; and in
[[def-nrqm-composites-framework-reduced-preparations]], which defines the
subsystem preparations $\rho_{A}=\operatorname{Tr}_{K}\rho$ and reads them as
the states of the factors.

The supporting mathematics precedes every physical use.
[[lem-nrqm-composites-local-pvm-tensor-extension]] proves that tensoring a
projection-valued measure with the identity of the other factor gives a
projection-valued measure, identifies its bounded integrals, proves strong
continuity of tensoring with the identity, and proves regularity, so that the
converse spectral theorem supplies the self-adjoint local readout.
[[def-nrqm-composites-separable-and-entangled-states]] defines product and
non-product vectors, the separable states as the explicitly declared
trace-norm closed convex hull of the pure product states, and the entangled
states as its complement.

The physical results are conditional on P1, P2, P3 and the cited mathematics.
[[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]] proves the
Schmidt expansion of a pure composite preparation, the reduction formulae for
the two factors, and the criterion that the preparation is a product
preparation exactly when a reduced preparation is pure.
[[pthm-nrqm-composites-local-readout-laws-and-reduced-preparations]] proves
that every local readout law of a factor equals the corresponding law in the
reduced preparation and, conversely, that the reduced preparation is
determined by the family of local readout laws; it also computes the
conditional and discarded reductions of a declared ideal sharp measurement of
one factor. [[pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations]]
proves that local statistics factorize for every product preparation and
exhibits explicit local effects whose joint law fails to factorize for a
non-product pure preparation.
[[pthm-nrqm-composites-local-instruments-and-no-signalling]] proves that a
declared finite or countable instrument on one factor leaves the reduced
preparation of the other factor unchanged once its record is discarded, while
the conditional reductions average back to it.
[[def-nrqm-composites-marker-model-and-fringe-visibility]] fixes the declared
marked two-component model with its path components, marker states, phase
family, detection weights and fringe visibility, and
[[pthm-nrqm-composites-marker-overlap-and-visibility-bound]] proves that the
marker overlap contracts the cross term, computes the phase-family extremes
and bounds the visibility by $|\langle e_{1},e_{2}\rangle|$.
[[rem-nrqm-composites-scope-and-empirical-status]] records the adopted
readings, the derived conditional results and the empirical status of the
model computations.
