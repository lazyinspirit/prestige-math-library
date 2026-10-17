---
page: pseudo-arclength-continuation-and-fold-certificates
title: Pseudo arclength continuation and fold certificates
status: draft
requires: [the-inverse-function-theorem-completed, nonlinear-equations-and-newton-methods]
items:
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
  - def-simple-fold-complement-splitting-and-projection
  - thm-augmented-residual-contraction-certificate
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - lem-simple-fold-complement-restriction-is-an-isomorphism
  - lem-transverse-hyperplane-selects-unique-local-branch-point
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - thm-pseudo-arclength-local-newton-correction
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
examples: []
---

## Objective

This page develops finite-budget pseudo-arclength continuation for
$F:\mathbb R^{n+1}\to\mathbb R^n$ on an explicit $C^2$ tube, with $C^3$
regularity for the simple-fold curvature expansion. At a regular solution
point, a unit kernel tangent gives the predictor direction, and the
hyperplane section uses the previous tangent as its normal. The bordered
Jacobian is invertible exactly when the normal has nonzero component along
the current tangent; the stated angle margin supplies an inverse-norm bound.
The curve chart gives a quadratic exact-tangent predictor defect, and the
augmented residual receives a local quadratic Newton correction under the
same invariant-ball hypotheses as the exact square-system Newton theorem.

For bounded residual and derivative evaluation errors, a proposed corrected
point is accepted only when the explicit contraction inequalities certify a
unique zero and the ball lies in the local chart. At a simple fold, the page
uses rank $F_x=n-1$, normalized right and nonzero left nullvectors, and the
strict conditions $w^TF_\lambda\ne0$ and
$w^TF_{xx}[v,v]\ne0$. The local Lyapunov–Schmidt chart has
$\lambda'(0)=0$ and
$\lambda''(0)=-w^TF_{xx}[v,v]/(w^TF_\lambda)\ne0$ under the stated
normalization. A finite trace, residual tolerance, or Newton budget does not
certify global branch completeness or an exact zero by itself.
