---
page: csm-full-phase-local-equivalence
title: "Conditional entropy chain and disjoint-block bounds"
status: published
library: physics
requires:
  - csm-gibbs-lattice
  - td-math-interacting-ensemble-geometry
  - minimax-lower-bounds-and-information-theoretic-methods
  - stationary-markov-chains-and-ergodic-limits
items:
  - lem-csm-kl-chain-disjoint
  - lem-csm-gaussian-mark-moments
  - lem-csm-information-contraction-pinsker
  - def-csm-full-marked-model
  - def-csm-marked-periodic-continuation
  - lem-csm-gaussian-marked-lift-existence
  - thm-csm-total-canonical-window
  - post-csm-fullphase-interacting-preparations
  - thm-csm-uniform-phase-shell-entropy
  - thm-csm-full-shell-positional-minimizer
  - thm-csm-local-mark-kl-bound
  - thm-csm-local-full-phase-equivalence
  - thm-csm-local-momentum-moments
  - pthm-csm-full-interacting-phase-equivalence
examples: []
---

This page proves the finite conditional relative-entropy chain and its
disjoint-block bound, then develops the Gaussian momentum reference, marked
configuration law, and marked periodic local-restriction convention used for a
specified superstable regular pair model. Under
the stated interior-density, differentiability, choice, and uniqueness
hypotheses, a constructed periodic energy band has vanishing relative-entropy
density from the canonical law. A gap construction transfers its positional
law to the singleton variational state; conditional mark entropy then gives
fixed-region convergence and the named kinetic-energy and momentum moments.

The physical preparation remains an adopted assumption. The deductions concern
the constructed energy window and specified observables; they assert no
equilibration, universal shell-width result, finite-volume grand convergence,
or experimental measurement.
