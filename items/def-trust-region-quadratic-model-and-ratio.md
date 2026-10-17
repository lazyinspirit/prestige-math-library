---
id: def-trust-region-quadratic-model-and-ratio
kind: definition
title: "Quadratic trust-region models and the actual-to-predicted reduction ratio"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - def-induced-matrix-p-norm
  - def-matrix-product-and-identity-matrix
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.0, printed pp. 68–70 / PDF pp. 86–88: quadratic local models, trust-region ball, predicted reduction, actual reduction, and their ratio."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 12–13: quadratic model, Euclidean trust-region subproblem, and actual-to-predicted reduction ratio."
---

## Definition

Let $n\ge1$, let $f:\mathbb R^n\to\mathbb R$ be differentiable at
$x\in\mathbb R^n$, and put $g:=\nabla f(x)$ using the gradient convention of
[[def-jacobian-matrix-and-gradient]]. Let $B\in\mathbb R^{n\times n}$ be a
symmetric matrix and let $\Delta>0$. A quadratic model at $x$ is

$$m(p):=f(x)+\langle g,p\rangle+\tfrac12 p^TBp,\qquad p\in\mathbb R^n,$$

with the Euclidean inner product and norm of [[def-euclidean-inner-product]]
and matrix products as in [[def-matrix-product-and-identity-matrix]]. The
trust-region ball is $\mathcal B_\Delta:=\{p:\|p\|_2\le\Delta\}$. The
predicted reduction of a feasible step $p\in\mathcal B_\Delta$ is
$\operatorname{pred}(p):=m(0)-m(p)$. Its actual reduction is
$\operatorname{ared}(p):=f(x)-f(x+p)$. When $\operatorname{pred}(p)>0$, the
actual-to-predicted reduction ratio is

$$\rho(p):=\frac{\operatorname{ared}(p)}{\operatorname{pred}(p)}.$$

The quantity $\|B\|_2$ means the matrix norm induced by the Euclidean vector
norm, namely the $p=2$ case of [[def-induced-matrix-p-norm]]. It is not required
that $B=\nabla^2f(x)$ in this definition; exact Hessians and symmetric model
approximations are both admitted. The ratio is undefined when predicted
reduction is nonpositive, so an algorithm must use a separately justified
fallback or return a failure status in that case.
