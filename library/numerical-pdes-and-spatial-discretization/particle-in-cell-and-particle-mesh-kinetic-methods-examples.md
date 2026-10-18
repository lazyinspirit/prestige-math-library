---
page: particle-in-cell-and-particle-mesh-kinetic-methods-examples
title: Particle in cell and particle mesh kinetic methods — Examples
status: published
items: []
examples:
  - ex-periodic-high-frequency-pic-sampling-alias
  - cex-periodic-nonneutral-source-has-no-poisson-solution
  - ex-periodic-one-dimensional-pic-cic-charge-deposition
  - ex-cold-two-stream-stipulated-pic-experiment
  - ex-periodic-smooth-density-poisson-grid-force-error
  - ex-periodic-pic-leapfrog-energy-drift-for-a-harmonic-mode
companion: particle-in-cell-and-particle-mesh-kinetic-methods
requires:
  - particle-in-cell-and-particle-mesh-kinetic-methods
---

The examples compute a one-particle periodic CIC deposition, its neutralized mean and adjoint potential pairing, and the derivative jump in a CIC weight at a grid crossing. A nonneutral source fails the periodic Poisson compatibility condition. A manufactured positive smooth density gives its regularized Fourier field and the explicit fixed-$\varepsilon$ mesh bound. The cold two-stream entry fixes a reproducible finite initial state and parameters without claiming physical validation or a growth rate.

The high-frequency example uses the Fourier-collocation supplier to show that mode $6$ on five nodes aliases to mode $1$; it is separate from the main page's centered-difference PIC solve. The harmonic test is an abstract canonical diagnostic: its reversible symplectic leapfrog step changes the oscillator's exact Hamiltonian. It is not represented as a trajectory of the periodic electrostatic potential. The main page's semidiscrete conservation theorem remains specific to its separately defined variational force.
