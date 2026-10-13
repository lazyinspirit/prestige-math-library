---
page: qm-many-body-and-equilibrium-models
title: Qm Many Body And Equilibrium Models
status: published
library: physics
items:
  - lem-nrqm-many-body-one-body-reduction-trace-law
  - lem-nrqm-many-body-two-level-thermal-formulas
  - lem-nrqm-many-body-cc-bounded-spatial-realization
  - lem-nrqm-many-body-finite-spin-product-identification
  - lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion
  - lem-nrqm-many-body-spectral-mean-and-defined-trace-product
  - def-nrqm-many-body-framework-declared-fixed-n-model
  - def-nrqm-many-body-framework-one-body-reduced-operator
  - def-nrqm-many-body-framework-entropy-and-free-energy
  - post-nrqm-many-body-canonical-equilibrium-ensemble
  - pthm-nrqm-many-body-noninteracting-sector-diagonalization
  - pthm-nrqm-many-body-one-body-readout-law
  - pthm-nrqm-many-body-exchange-energy-splitting
  - pthm-nrqm-many-body-thermal-equilibrium-characterization
  - pthm-nrqm-many-body-thermal-occupation-predictions
  - pthm-nrqm-many-body-unitary-evolution-preserves-entropy
  - rem-nrqm-many-body-scope-and-empirical-status
examples: []
requires:
  - qm-controlled-approximations
  - qm-identical-particles-and-exclusion
  - order-zorn-and-the-axiom-of-choice
  - square-integrable-kernels-and-hilbert-schmidt-compactness
  - qm-math-composites
  - qm-math-fock-and-equilibrium
  - qm-massive-particle-kinematics
  - qm-observables-and-born-probabilities
  - qm-autonomous-dynamics
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-math-oscillator
---
The local mathematical prerequisites make the realization and integrability scope explicit: [[lem-nrqm-many-body-cc-bounded-spatial-realization]] treats the bounded spatial operator on its full finite-component H² domain under Countable Choice; [[lem-nrqm-many-body-finite-spin-product-identification]] supplies the complete finite spin-component unitary and permutation action; [[lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion]] treats supplied countably infinite modes at fixed positive particle number; and [[lem-nrqm-many-body-spectral-mean-and-defined-trace-product]] separates spectral first moments from identities for literal defined trace-class products. These are local conditional mathematical results; their actual hypotheses remain those of the item Statements.

The declared Coulomb branch uses couplings $g$ and $\kappa$ in $\mathrm J\,\mathrm m$. Its one-particle energy includes the bounded plus singular external potential $V_{\mathrm{ext}}^b-g/|x|$ through the supplied one-particle self-adjoint realization; the pair part is $\kappa/|x_i-x_j|$. Non-interacting means $W=0$ in every realization, with the equivalent condition $\kappa=0$ confined to this Coulomb branch. The occupation observables in [[pthm-nrqm-many-body-thermal-occupation-predictions]] have the dimensionless particle-count unit.
