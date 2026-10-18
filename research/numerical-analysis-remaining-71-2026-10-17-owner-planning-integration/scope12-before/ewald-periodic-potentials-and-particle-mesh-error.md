---
page: ewald-periodic-potentials-and-particle-mesh-error
title: "Ewald periodic potentials and particle mesh error"
status: draft
items:
  - def-ewald-causal-cardinal-spline-window
  - def-ewald-three-dimensional-periodic-source-data
  - lem-ewald-screened-coulomb-kernel-and-self-limit
  - def-ewald-pme-cardinal-assignment-model
  - lem-ewald-gaussian-poisson-periodization
  - lem-ewald-lattice-shell-gaussian-tail-controllers
  - lem-ewald-smooth-torus-fourier-pairing
  - lem-ewald-pme-spline-alias-and-dft-normalization
  - thm-ewald-neutral-periodic-poisson-green-function
  - lem-ewald-pme-derivative-window-alias-bound
  - thm-ewald-alpha-independent-energy-and-potential
  - thm-ewald-pme-reciprocal-energy-force-error-bound
  - thm-ewald-real-reciprocal-cutoff-error-bounds
  - thm-ewald-total-pme-error-certificate
  - alg-ewald-certified-particle-mesh-evaluator
examples: []
---

## Summary

This page defines the neutral mean-zero Poisson problem on an arbitrary full-rank three-dimensional torus and proves the Gaussian Ewald split, its renormalized self term, and uniform real and reciprocal tail bounds. It then defines a causal periodic cardinal-spline assignment with a negative-sign unitary mesh transform. Exact signed aliases, deconvolution normalization, derivative-window bounds, and the $P=2$ knot branch feed a deterministic pointwise PME potential, energy, and force certificate. The total error keeps real cutoff, reciprocal cutoff, omitted modes, assignment aliases, force differentiation, self correction, and certified arithmetic enclosures as separate terms. Point-source potential claims are made only away from source images.
