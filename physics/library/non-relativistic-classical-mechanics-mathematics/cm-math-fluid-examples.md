---
page: cm-math-fluid-examples
title: Cm Math Fluid — Examples
status: draft
items: []
examples:
  - ex-cm-leray-projection-explicit-computations
  - ex-cm-plane-wave-and-shear-exact-solutions
  - cex-cm-absolute-convergence-fails-in-h-zero
requires:
  - cm-math-fluid
---

Worked checks and one sharpness counterexample for the fluid-analysis layer.
Each item verifies statements proved on [[cm-math-fluid]] on explicit data; none
of them is a prerequisite of any result on that page.

[[ex-cm-leray-projection-explicit-computations]] computes the Leray projection
by hand on three explicit fields: a pure gradient (killed by $P$), a mixed field
whose projection and gradient part can be read off coefficientwise, and a
divergence-free single mode fixed by $P$, verifying the orthogonality and
Pythagorean identities of the decomposition. On the same conventions,
[[ex-cm-plane-wave-and-shear-exact-solutions]] verifies three exact solution
families of the periodic models: the transverse plane waves with their viscous
decay $e^{-4\pi^2\nu|k|^2t}$ and their reduction to a scalar Galerkin equation,
the sheared single mode as its special case, and the Taylor-Green vortex, which
is a steady Euler solution and a globally existing viscous solution with the
pressure scaling $p(t)=e^{-16\pi^2\nu t}p^0$. Finally
[[cex-cm-absolute-convergence-fails-in-h-zero]] refutes the false statement that
every $L^2$ field on the torus has absolutely convergent Fourier coefficients,
exhibiting a square-summable family with $\sum_k|\widehat u(k)|=\infty$; this
locates exactly the role of the hypothesis $\sigma>3/2$ in the embedding
theorem, and no claim is made there about continuity of the witness.

All three items are mathematics, carry `domain: mathematics`, and make no
empirical assertion; the exact solutions are conditional solutions of the
stated model equations.
