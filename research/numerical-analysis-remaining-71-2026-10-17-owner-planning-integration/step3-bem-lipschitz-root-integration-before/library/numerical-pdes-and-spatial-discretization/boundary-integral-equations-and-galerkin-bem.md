---
page: boundary-integral-equations-and-galerkin-bem
title: Boundary-integral equations and Galerkin BEM
status: draft
items:
  - def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
  - def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling
  - lem-bem-half-order-bessel-slobodeckij-equivalence
  - def-bem-newtonian-kernel-in-three-dimensions
  - lem-bem-plane-poisson-kernel-fourier-transform
  - def-pe18-exterior-helmholtz-problem
  - def-bem-smooth-helmholtz-combined-field-operator
  - lem-bem-surface-fractional-norm-equivalence
  - lem-bem-lipschitz-trace-and-lifting
  - def-bem-surface-mesh-and-piecewise-constant-density-space
  - thm-bem-logarithmic-capacity-homothety-and-layer-scale
  - lem-bem-newtonian-kernel-is-fundamental-solution
  - thm-bem-helmholtz-layer-jumps-match-laplace-jumps
  - lem-bem-smooth-trace-and-helmholtz-layer-extension
  - lem-bem-exterior-energy-trace-bound
  - def-bem-laplace-layer-potentials-and-energy-spaces
  - lem-bem-p0-negative-half-order-approximation
  - lem-pe18-spherical-harmonic-structure-and-density
  - lem-pe18-spherical-hankel-radial-identities
  - lem-bem-helmholtz-double-layer-conormal-jump
  - thm-bem-smooth-helmholtz-operator-compact-perturbation
  - def-bem-double-layer-transmission-space
  - thm-bem-single-layer-transmission-mapping-and-coercivity
  - lem-pe18-outgoing-spherical-mode-expansion
  - lem-bem-polyhedral-edge-kernel-representation
  - thm-bem-double-layer-transmission-jumps-and-bounds
  - def-bem-calderon-boundary-operators
  - thm-bem-single-layer-galerkin-wellposed-and-quasioptimal
  - thm-bem-exterior-helmholtz-dirichlet-uniqueness
  - lem-bem-far-panel-quadrature-residual
  - thm-bem-combined-field-conditional-invertibility
  - thm-bem-calderon-mapping-and-jump-identities
  - cor-bem-p0-galerkin-rate-for-h1-density
  - thm-bem-hypersingular-ellipticity-and-stabilized-formulation
  - lem-bem-panel-pair-duffy-certificates
  - alg-bem-certified-inexact-matrix-assembly
  - thm-bem-matrix-perturbation-transfer
examples: []
---

## Scope and conventions

This page develops three-dimensional Laplace boundary integral equations on a bounded connected domain with a closed, connected, orientable Lipschitz polyhedral boundary and connected exterior. The unit normal points from the interior to the exterior and is defined almost everywhere on the planar faces. Boundary integrals use face area. The chartwise $H^{1/2}(\Gamma)$ convention uses the negative-sign $2\pi$ Fourier transform; $H^{-1/2}(\Gamma)$ is its real dual. Countable Choice is part of the declared trace-space context, and the homogeneous Sobolev and variational branches state their additional Axiom of Choice uses explicitly.

The smooth Helmholtz branch later on this page has a separate connected $C^2$ obstacle hypothesis. No smooth-boundary theorem is used to widen the polyhedral trace or edge statements.

## Laplace kernels and transmission

The three-dimensional kernel is $G_3(x,y)=1/(4\pi|x-y|)$, with its distributional fundamental-solution identity proved in [[lem-bem-newtonian-kernel-is-fundamental-solution]]. The two-dimensional logarithmic kernel is treated separately: [[def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling]] fixes its length convention, and [[thm-bem-logarithmic-capacity-homothety-and-layer-scale]] proves how capacity and the layer's constant mode change under rescaling. The two-dimensional scaling result does not assert the three-dimensional coercivity or invertibility conclusions.

The chart and chordal fractional norms, trace and lift, exterior energy bound, and weak layer-energy spaces are supplied by [[lem-bem-half-order-bessel-slobodeckij-equivalence]], [[lem-bem-surface-fractional-norm-equivalence]], [[lem-bem-lipschitz-trace-and-lifting]], [[lem-bem-exterior-energy-trace-bound]], and [[def-bem-laplace-layer-potentials-and-energy-spaces]]. The single layer has a common trace and interior-minus-exterior conormal jump equal to its density; its weak energy form is bounded and coercive. The double layer is constructed by a finite-energy transmission problem. [[lem-bem-polyhedral-edge-kernel-representation]] proves that its off-surface kernel representation holds for every global $H^{1/2}$ density, including compatible facewise smooth data that take nonzero values at edges. These are Sobolev trace identities; no pointwise half-jump formula is asserted at an edge or vertex. The weak jump and common conormal results, their mapping bounds, and the Calderón operators appear in [[thm-bem-single-layer-transmission-mapping-and-coercivity]], [[def-bem-double-layer-transmission-space]], [[thm-bem-double-layer-transmission-jumps-and-bounds]], [[def-bem-calderon-boundary-operators]], and [[thm-bem-calderon-mapping-and-jump-identities]]. The hypersingular operator is defined weakly, not by an ordinary absolutely convergent boundary integral; [[thm-bem-hypersingular-ellipticity-and-stabilized-formulation]] proves its quotient ellipticity and constant-mode stabilization.

## Conforming P0 Galerkin method

A conforming shape-regular triangulation supports the piecewise-constant subspace $X_h\subset H^{-1/2}(\Gamma)$ from [[def-bem-surface-mesh-and-piecewise-constant-density-space]]. [[lem-bem-p0-negative-half-order-approximation]] gives its negative-half-order approximation estimate. The coercive single-layer equation has a unique conforming Galerkin solution and a quasi-optimal energy bound in [[thm-bem-single-layer-galerkin-wellposed-and-quasioptimal]], with the $H^1$-density rate in [[cor-bem-p0-galerkin-rate-for-h1-density]].

The inexact assembly interface certifies only the three-dimensional Laplace P0 single-layer entries. [[lem-bem-panel-pair-duffy-certificates]] reduces coincident, edge-sharing, vertex-sharing, and separated panel pairs to smooth reference-triangle amplitudes and certifies nested quadrature error. [[lem-bem-far-panel-quadrature-residual]] supplies the positive centroid residual for disjoint panels. [[alg-bem-certified-inexact-matrix-assembly]] requires an explicit per-pair certificate, the physical $1/(4\pi r)$ normalization, and separately charged arithmetic radii; it uses the single-cluster FMM theorem only under $R>a+b$ and makes no global tree-complexity claim. The fixed $H^{-1/2}$ bilinear defect then enters the Galerkin estimate through [[thm-bem-matrix-perturbation-transfer]], illustrated by the finite ledger [[ex-bem-inexact-assembly-error-ledger]].

## Smooth-boundary Helmholtz extension

For a connected $C^2$ obstacle, the outgoing kernel uses the $e^{-i\omega t}$ time convention and $k>0$. The combined potential is $D_k-i\eta S_k$ with real $\eta\ne0$. [[lem-bem-smooth-trace-and-helmholtz-layer-extension]] proves the separate $C^2$ trace, lift, layer-extension, Green, and radiation statements; [[thm-bem-helmholtz-layer-jumps-match-laplace-jumps]] and [[lem-bem-helmholtz-double-layer-conormal-jump]] establish the signed Sobolev jumps and the double-layer common conormal. [[thm-bem-smooth-helmholtz-operator-compact-perturbation]] proves compactness locally, and [[thm-bem-exterior-helmholtz-dirichlet-uniqueness]] proves outgoing uniqueness for the stated general $C^2$ geometry. It uses the four spherical model and mode foundations [[def-pe18-exterior-helmholtz-problem]], [[lem-pe18-spherical-harmonic-structure-and-density]], [[lem-pe18-spherical-hankel-radial-identities]], and [[lem-pe18-outgoing-spherical-mode-expansion]] only outside an enclosing sphere; the spherical obstacle theorem is not substituted for general-obstacle uniqueness. The fixed-frequency, bounded-inverse conclusion is [[thm-bem-combined-field-conditional-invertibility]]; no frequency-uniform bound is asserted.

The required interface pages are [[variational-crimes-and-strang-lemmas]], [[singular-and-infinite-interval-quadrature]], [[fast-multipole-expansions-and-error]], [[stable-special-function-recurrences-and-certified-evaluation]], and [[discrete-de-rham-complexes-and-edge-elements]]. Their actual hypotheses are kept visible in the dependent proofs above.
