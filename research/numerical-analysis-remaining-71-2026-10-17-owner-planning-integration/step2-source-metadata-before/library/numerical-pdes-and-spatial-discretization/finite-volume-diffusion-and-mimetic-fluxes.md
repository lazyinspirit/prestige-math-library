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
  - def-fv-regular-simplicial-companion-family
  - lem-fv-conforming-companion-and-test-recovery
  - thm-tpfa-discrete-rellich-and-physical-gradient-closure
  - lem-mimetic-fv-parabolic-limit-identification
  - lem-hybrid-mimetic-backward-euler-energy-and-compactness
  - thm-hybrid-mimetic-parabolic-weak-flux-limit
examples: []
---

This page defines finite-volume cell-face meshes, isotropic two-point flux approximation (TPFA) on orthogonal center-to-face geometries, and a hybrid mimetic method for anisotropic diffusion on general cells. For positive cellwise-constant coefficients, the harmonic transmissibility is the conductance of the two half-cell resistances. The TPFA balance has a symmetric energy identity, is positive definite when every cell component is anchored to a Dirichlet face, and obeys a discrete minimum principle under nonnegative source and boundary values. A path-certified Poincaré inequality makes the exact geometric condition for a mesh-uniform bound explicit. For smooth piecewise solutions and face-aligned coefficient jumps, the TPFA numerical flux converges in a transmissibility-dual energy norm. The mimetic method is locally coercive, conservative, and affine-exact without center-to-face orthogonality; no maximum principle is claimed for it. On the explicitly defined regular simplicial companion families, the page proves discrete Rellich compactness and identifies physical TPFA weak gradients; the separate face-copy gradient remains an energy bookkeeping device. For the defined monotone p-growth hybrid backward-Euler method, uniformly positive bounded stabilization, the strict Sobolev exponent range, convergent L2 initialization, and vanishing maximum time step give finite-step existence and mesh-uniform energy and time-derivative bounds. Conforming companions and mean test recovery then prove strong computed-state convergence, vanishing weak residuals, the required energy limsup, and Minty identification of both constitutive and reconstructed numerical fluxes. The geometry hypotheses are finite subdivision and vertex-star checks, include uniform cubical refinements in every dimension, and permit skew cells. No mesh/time coupling is imposed. The original conditional limit-identification lemma is retained as a separate general result on bounded open domains; its conforming hypotheses are supplied after the independent computed-scheme convergence proof by an explicitly distinguished limit recovery.
