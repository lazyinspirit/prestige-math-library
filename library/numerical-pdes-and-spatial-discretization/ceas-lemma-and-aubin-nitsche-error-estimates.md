---
page: ceas-lemma-and-aubin-nitsche-error-estimates
title: "Céa and Aubin–Nitsche error estimates"
status: published
items:
  - lem-galerkin-orthogonality-for-conforming-galerkin-approximations
  - thm-adjoint-problem-for-bounded-coercive-variational-forms
  - cor-poisson-adjoint-h2-estimate-from-global-regularity
  - lem-two-cell-hat-and-quadratic-functions-lie-in-h10
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - cor-symmetric-galerkin-best-approximation-in-energy-norm
  - thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
  - cor-shape-regular-affine-fe-primal-energy-approximation
  - cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation
examples: []
---

For a common bounded coercive form and a conforming finite-dimensional
subspace, Lax–Milgram gives the continuous and discrete solutions, Galerkin
orthogonality gives Céa's $M/\alpha$ quasi-optimality bound, and Hermitian
symmetry improves this to exact best approximation in the energy norm.

For an $L^2$ error, the adjoint equation turns the squared error into a form
pairing with the primal error. Orthogonality then leaves only the adjoint
approximation error. If primal and dual approximation orders are $r$ and $s$,
the resulting rate is $h^{r+s}$; the $h^{r+1}$ case requires the full $s=1$
dual regularity and matching interpolation hypotheses. The global $H^2$
supplier used here has a bounded $C^2$ domain and coefficient assumptions,
retains an $L^2$ solution term, and does not assert $H^2$ regularity on arbitrary
Lipschitz domains.

The affine finite-element interpolation estimate assumes an exactly fitted
matching affine simplicial mesh and a globally conforming, boundary-preserving
interpolant. This page does not infer such an affine mesh approximation for a
curved $C^2$ boundary; consumers must supply a compatible geometry argument.
