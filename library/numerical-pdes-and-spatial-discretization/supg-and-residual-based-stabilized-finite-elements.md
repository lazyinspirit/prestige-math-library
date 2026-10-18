---
page: supg-and-residual-based-stabilized-finite-elements
title: "SUPG, residual stabilization and variational multiscale methods"
status: published
items:
  - def-supg-one-dimensional-convection-diffusion-model
  - def-supg-general-convection-diffusion-reaction-model
  - def-supg-pspg-grad-div-stokes-forms
  - def-supg-variational-multiscale-block-closure
  - def-supg-one-dimensional-residual-form
  - def-supg-general-residual-form
  - lem-supg-one-dimensional-l2-interpolation-estimate
  - lem-supg-general-p1-interpolation-estimate
  - thm-supg-pspg-stokes-coercivity
  - thm-supg-vms-schur-defect-bound
  - lem-supg-one-dimensional-optimal-parameter
  - thm-supg-general-p1-error-and-stability
  - thm-supg-one-dimensional-consistency-coercivity
  - thm-supg-one-dimensional-energy-error
examples: []
---

This page keeps the homogeneous stationary one-dimensional P1 branch and its exact cell parameter $\tau=\frac{h}{2|b|}(\coth(\mathrm{Pe})-\mathrm{Pe}^{-1})$ separate from a multidimensional P1 branch with $c-\frac12\nabla\cdot b\ge\omega>0$ and an explicit small-parameter condition. The multidimensional result proves consistency, coercivity in a streamline norm, discrete solvability, and a mesh-dependent C2 error estimate. It does not extend the one-dimensional optimal parameter to general meshes.

PSPG, grad-div, and VMS are treated by separate definitions and arguments. The P1 Stokes PSPG result proves coercivity only in a norm that contains the pressure-gradient stabilization; it does not assert a mesh-uniform pressure estimate. The VMS result is finite-dimensional Schur elimination with a quantified residual-closure defect, not a universal PDE turbulence claim.
