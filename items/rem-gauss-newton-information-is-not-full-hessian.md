---
id: rem-gauss-newton-information-is-not-full-hessian
kind: remark
title: "The Gauss–Newton information term omits residual curvature from the full Hessian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-nonlinear-least-squares-gradient-and-hessian
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition, Ch. 10, §§10.1 and 10.3"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "The complete second-edition book was retrieved; §10.1 equations (10.3)–(10.5) and §10.3 equations (10.23)–(10.27) were read."
---

## Remark

For a $C^2$ residual map $r:U\to\mathbb R^m$ on an open $U\subseteq\mathbb R^n$, with $m,n\ge1$, consider the unweighted nonlinear least-squares objective $\phi(\theta)=\tfrac12\|r(\theta)\|_2^2$. Then the matrix $J(\theta)^TJ(\theta)$ is the Gauss–Newton term of the Hessian. The exact identity is
$$\nabla^2\phi(\theta)=J(\theta)^TJ(\theta)+\sum_i r_i(\theta)\nabla^2r_i(\theta)$$
by [[thm-nonlinear-least-squares-gradient-and-hessian]]. Thus the two matrices agree at zero residual, but the information matrix defined in [[def-nonlinear-experimental-design-and-local-identifiability]] is not asserted to be the full Hessian at a nonzero-residual point.

