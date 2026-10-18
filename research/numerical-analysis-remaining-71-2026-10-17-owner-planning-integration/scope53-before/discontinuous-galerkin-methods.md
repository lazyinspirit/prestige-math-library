---
page: discontinuous-galerkin-methods
title: "Symmetric interior-penalty discontinuous Galerkin"
status: draft
items:
  - lem-sipdg-physical-simplex-trace-green
  - def-sipdg-jump-average-convention
  - def-sipdg-bilinear-form-and-energy-norm
  - lem-sipdg-discrete-flux-inverse-bound
  - lem-sipdg-energy-seminorm-is-a-norm
  - lem-sipdg-boundedness-augmented-norm
  - thm-sipdg-exact-consistency
  - lem-sipdg-adjoint-consistency-h2
  - thm-sipdg-coercivity-large-penalty
  - thm-sipdg-l2-error-under-adjoint-regularity
  - thm-sipdg-energy-error-estimate
examples: []
---

This page defines the symmetric interior-penalty method for scalar, real, second-order elliptic diffusion on finite matching shape-regular affine simplicial meshes, with a piecewise constant symmetric positive-definite coefficient and homogeneous Dirichlet data imposed weakly. The local inverse-trace result yields a sufficient degree- and shape-dependent penalty threshold; no universal value is claimed. The energy estimate is proved directly from SIP consistency and coercivity. The L2 estimate is conditional on adjoint consistency, dual regularity, and a face-aware approximation bound with exponent $s>1/2$. Equilibrated $H(\operatorname{div})$ flux recovery is outside this interface.
