---
id: ex-forward-euler-local-error-for-scalar-linear-ode
kind: example
title: "Forward Euler on the scalar linear equation $y'=y$"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-one-step-ode-method-local-defect-order-and-stability
  - thm-forward-euler-one-step-consistency-and-local-error
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, Section III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Julia Edition, Section 6.2.1"
      url: "https://fncbook.com/euler/"
---

## Example

For the IVP $y'=y$, $y(0)=1$, the exact solution is $y(t)=e^t$. The forward Euler map is $\Psi_h(t,z)=z+hz$. Its local defect from the exact value is

$$\delta_h(t;y)=e^t(1+h-e^h).$$

For every fixed finite interval $[0,T]$, this defect is $\Theta(h^2)$ uniformly in $t\in[0,T-h]$ as $h\downarrow0$, so the local order is exactly one. The one-step stability factor is $1+h$.

## Verification

**Given:** $h>0$, $y(t)=e^t$, and the Euler map $\Psi_h(t,z)=z+hz$. Verify the defect and its order.

[F1] [[def-one-step-ode-method-local-defect-order-and-stability]]: the local defect is $\Psi_h(t,y(t))-y(t+h)$, and order one requires a uniform $O(h^2)$ bound.

[F2] [[thm-forward-euler-one-step-consistency-and-local-error]]: under its continuous-partial-derivative and uniform-bound hypotheses, Euler has a componentwise $O(h^2)$ local defect and one-step bound $1+Lh$.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a $C^2$ scalar function, Taylor's formula through degree one has a second-derivative Lagrange remainder at an interior point of the segment.

1.1 Fix $T>0$, let $R:=e^T(1+T)+1$, and take $V=(-1,T+1)\times(-R,R)$ and $K=[0,T]\times[-R+1,R-1]$. These are an open domain with convex state fibers and a compact subset $K\subset V$. For $f(t,z)=z$, the bounds in [F2] hold throughout $V$ with $F_1=R$, $M_{t,1}=0$, $M_{11}=1$, and $L=1$. The function $y(t)=e^t$ solves the IVP, its graph on $[0,T]$ lies in $K$, and for every $0<h\le T-t$ the Euler output state $e^t(1+h)$ lies between $0$ and $e^T(1+T)=R-1$, so its input and output pairs lie in $K$. Starting from $e^t$, Euler returns $e^t(1+h)$ and the exact endpoint is $e^{t+h}=e^te^h$. Therefore [F1] gives $\delta_h(t;y)=e^t(1+h-e^h)$. [given, F1, F2, algebra]

2.1 Apply [F3] to $s\mapsto e^s$ at $0$ with increment $h$: there is $\theta_h\in(0,h)$ with $e^h=1+h+\tfrac12 e^{\theta_h}h^2$. Thus $|\delta_h(t;y)|=\tfrac12 e^{t+\theta_h}h^2$. [given, F3, step 1.1, algebra]

3.1 Since $0<\theta_h<h$, for $0\le t\le T-h$ we have $\tfrac12h^2\le |\delta_h(t;y)|\le \tfrac12e^T h^2$. The lower and upper bounds establish uniform $\Theta(h^2)$ error, hence order exactly one under [F1]. [F1, step 2.1, algebra]

4.1 For any scalar inputs $u,v$, $|\Psi_h(t,u)-\Psi_h(t,v)|=|(1+h)(u-v)|=(1+h)|u-v|$. This verifies the stated stability factor; it also agrees with [F2] for $f(t,z)=z$ and $L=1$. [F2, algebra] ∎

## Remarks

The exact calculation is local: it does not turn a local defect estimate into a global trajectory bound. The Taylor formula here is used only for this smooth scalar example.
