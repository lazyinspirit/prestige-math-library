---
id: ex-unstable-single-shooting-amplifies-error
kind: example
title: "Single shooting amplifies an initial-slope error on a decaying-mode BVP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - alg-single-shooting-for-nonlinear-bvps
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pass
---

## Example

For $\lambda>0$, consider $u''=\lambda^2(u+1)$ on $[0,1]$ with $u(0)=-1$ and $u(1)=0$. In first-order form the state is $x=(u,v)$ with $u'=v$, $v'=\lambda^2(u+1)$, and the square boundary map is $B(x_0,x_1)=(u_0+1,u_1)$. The scalar solution component $u$ stays in $[-1,0]$, but changing the unknown initial slope by $\delta$ changes the terminal value by $\delta\sinh(\lambda)/\lambda$. The factor exceeds one for every $\lambda>0$ and is unbounded as $\lambda$ increases, so a small initial-slope error can be strongly amplified by single shooting.

## Verification

**Given:** $\lambda>0$, first-order state $x=(u,v)$, boundary map $B(x_0,x_1)=(u_0+1,u_1)$, and an exact IVP evaluator so that the shooting residual is the exact terminal boundary residual.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: the BVP is a first-order system with a square endpoint residual.

[F2] [[def-certified-ivp-approximation-and-sensitivity-interface]]: an exact flow can be used as an endpoint evaluator with error bound zero.

[F3] [[alg-single-shooting-for-nonlinear-bvps]]: single shooting applies finite-budget Newton to the endpoint residual when this evaluator is used.

1.1 The substitution $w=u+1$ gives $w''=\lambda^2w$ with $w(0)=0$ and $w(1)=1$. Solving this constant-coefficient equation gives $w(t)=\sinh(\lambda t)/\sinh\lambda$, so $u(t)=w(t)-1\in[-1,0]$ because $\sinh(\lambda t)$ increases from $0$ to $\sinh\lambda$. Its initial slope is $s^*=w'(0)=\lambda/\sinh\lambda$. [given, F1, algebra]

2.1 If the initial slope is $s^*+\delta$ while $u(0)=-1$ remains fixed, linearity of the equation for $w$ gives $w_\delta(t)=(s^*+\delta)\sinh(\lambda t)/\lambda$. Subtracting the exact shot yields $w_\delta(1)-w(1)=\delta\sinh\lambda/\lambda$. [step 1.1, algebra]

3.1 Since $\sinh\lambda-\lambda$ has value zero at $0$ and derivative $\cosh\lambda-1>0$ for $\lambda>0$, we have $\sinh\lambda/\lambda>1$. Also the derivative of $q(\lambda)=\sinh\lambda/\lambda$ has numerator $g(\lambda)=\lambda\cosh\lambda-\sinh\lambda$, where $g(0)=0$ and $g\prime(\lambda)=\lambda\sinh\lambda>0$; hence $q$ is increasing. For $\lambda\ge2$, $\sinh\lambda\ge e^{\lambda-1}/2$, so $q(\lambda)\ge e^{\lambda-1}/(2\lambda)\to\infty$. The perturbed terminal boundary residual vector changes by $(0,\delta\sinh\lambda/\lambda)$, while [F2]–[F3] identify this as the endpoint residual evaluated by exact single shooting. [F2, F3, step 2.1, algebra] ∎
