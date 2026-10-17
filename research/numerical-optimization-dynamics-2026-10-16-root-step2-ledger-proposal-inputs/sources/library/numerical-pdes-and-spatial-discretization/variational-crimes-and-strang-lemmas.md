---
page: variational-crimes-and-strang-lemmas
title: "Variational crimes and Strang lemmas"
status: draft
items:
  - def-variational-crime-error-framework
  - lem-discrete-form-perturbation-preserves-coercivity
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - thm-second-strang-lemma-for-nonconforming-galerkin
  - def-geometry-lift-and-tensor-discrepancy
  - lem-geometry-tensor-gap-bounds-cellwise-form-defect
  - cor-perturbed-conforming-galerkin-bound-from-cea
  - lem-one-dimensional-p1-interpolation-error
  - lem-one-dimensional-zero-boundary-poincare
  - lem-midpoint-quadrature-defect-for-p1-stiffness
  - cor-midpoint-quadrature-strang-error-for-p1
  - cor-shape-regular-fe-strang-error-bound
examples: []
---

The first Strang estimate treats conforming Galerkin spaces with perturbed forms and loads. Its discrete coercivity is a separate hypothesis, and its form and load defects remain explicit; the load term includes source approximation and data oscillation. The second estimate uses the common comparison space $V+V_h$ and requires a bounded extension of the discrete form there. That extension is not assumed to exist for every penalty or discontinuous Galerkin method.

For curved-domain lifts, the transformed diffusion tensor records the Jacobian and inverse-map factors. Cellwise tensor discrepancies give a form-defect bound. Stability follows only after a separate quantitative smallness condition and on a Hilbert trial space whose norm is the gradient norm; a lift alone gives no geometry rate. The one-dimensional midpoint P1 result combines a direct quadrature defect with interpolation and obtains coercivity from the positive sampled coefficient. The shape-regular affine P1 result assumes bounded reference nodal functionals and keeps the interpolation contribution separate from geometry, quadrature and load defects. Quadrature exactness by itself is not used as a mesh-uniform stability argument.
