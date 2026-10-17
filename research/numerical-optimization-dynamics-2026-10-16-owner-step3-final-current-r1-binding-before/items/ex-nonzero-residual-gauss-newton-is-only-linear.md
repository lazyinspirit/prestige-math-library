---
id: ex-nonzero-residual-gauss-newton-is-only-linear
kind: example
title: "A nonzero-residual stationary point gives only linear Gauss-Newton convergence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - thm-gauss-newton-local-linear-contraction
  - thm-nonlinear-least-squares-gradient-and-hessian
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed pp. 256–257 and 262 / PDF pp. 275–276 and 281: the local Gauss–Newton factor and large-residual linear-rate caveat."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section An actual bound for Gauss-Newton: the residual-dependent linear factor and zero-residual quadratic special case."
---

## Example

Consider the scalar-parameter residual
$r(x)=(x,\;1/2+x^2/2)^T$. At $x_*=0$, the objective is stationary but the
residual is nonzero. The exact Gauss-Newton update is
$$x_+=x\,\frac{x^2-1}{2(1+x^2)}.$$
For every nonzero $|x|<1$ the iterates converge to $0$, and
$|x_+|/|x|\to1/2$ while $|x_+|/|x|^2\to+\infty$. Thus the local rate is
linear and cannot be quadratic.

## Facts & Assumptions

**Given:** The residual model and exact Gauss-Newton iteration in the Example.

[F1] [[thm-nonlinear-least-squares-gradient-and-hessian]]: $\nabla\phi=J^Tr$.

[F2] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: for a full-column-rank scalar Jacobian, the exact step minimizes the linearized residual norm.

[F3] [[thm-gauss-newton-local-linear-contraction]]: under a controlled residual-curvature bound and a uniform full-rank Jacobian, exact Gauss-Newton steps contract linearly.

## Verification

1.1 Here $J(x)=(1,x)^T$, so $J(x)^TJ(x)=1+x^2>0$ for every $x$. Also $J(x)^Tr(x)=x+\frac12x+\frac12x^3=\frac32x+\frac12x^3$, which vanishes at $x_*=0$ while $r(0)=(0,1/2)^T$ has norm $1/2$. [given, F1, algebra]

2.1 For each $x$, the exact reduced QR supplied to the algorithm is $Q(x)=\frac1{\sqrt{1+x^2}}\begin{bmatrix}1\\x\end{bmatrix}$ and $R(x)=\sqrt{1+x^2}$, so $Q(x)^TQ(x)=1$ and $J(x)=Q(x)R(x)$. The scalar normal equation is $(1+x^2)p=-\frac32x-\frac12x^3$, so $p=-x(3+x^2)/(2(1+x^2))$; the supplied QR branch returns this unique least-squares step. Adding $x$ gives $x_+=x(x^2-1)/(2(1+x^2))$. For $0<|x|<1$, $|x_+|/|x|=(1-x^2)/(2(1+x^2))<1/2$, so every such iterate stays in the interval and converges to zero. [F2, step 1.1, algebra]

2.2 On $B=[-1/10,1/10]$, both $\|J(x)\|_2$ and $\|J(x)^T\|_2$ are at most $11/10$, both are $1$-Lipschitz, and $\|J(x)v\|_2\ge|v|$; also $S(x)=1/2+x^2/2\le101/200$. Thus the local contraction theorem [F3] applies with $R=1/10$, $M=11/10$, $L=1$, $\sigma=1$, $\kappa=101/200$, and $q=123/200<1$. [given, F3, step 1.1, algebra]

3.1 As $x\to0$ through nonzero values, $|x_+|/|x|\to1/2$, whereas $|x_+|/|x|^2=(1-x^2)/(2|x|(1+x^2))\to+\infty$. No finite quadratic error constant can therefore hold near the stationary point. This exact example shows that the linear rate in [F3] cannot generally be strengthened when the residual is nonzero. [F3, step 2.1, step 2.2, algebra] ∎
