---
page: finite-volume-diffusion-and-mimetic-fluxes
title: Finite-volume diffusion on admissible meshes
status: draft
items:
  - def-fv-admissible-cell-face-mesh
  - def-tpfa-harmonic-face-scheme
  - def-hybrid-mimetic-fv-scheme
  - thm-tpfa-green-coercivity-maximum-principle
  - thm-path-certified-fv-discrete-poincare
  - prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact
  - thm-tpfa-flux-energy-convergence-smooth-interface
  - lem-mimetic-fv-parabolic-limit-identification
examples: []
---

This page defines finite-volume cell-face meshes, isotropic two-point flux approximation (TPFA) on orthogonal center-to-face geometries, and a hybrid mimetic method for anisotropic diffusion on general cells. For positive cellwise-constant coefficients, the harmonic transmissibility is the conductance of the two half-cell resistances. The TPFA balance has a symmetric energy identity, is positive definite when every cell component is anchored to a Dirichlet face, and obeys a discrete minimum principle under nonnegative source and boundary values. A path-certified Poincaré inequality makes the exact geometric condition for a mesh-uniform bound explicit. For smooth piecewise solutions and face-aligned coefficient jumps, the TPFA numerical flux converges in a transmissibility-dual energy norm. The mimetic method is locally coercive, conservative, and affine-exact without center-to-face orthogonality; no maximum principle is claimed for it. Nonlinear parabolic flux identification is conditional on conforming reconstruction, compactness, vanishing weak residual, and an energy limsup, which remain separate obligations for a concrete finite-volume family.
