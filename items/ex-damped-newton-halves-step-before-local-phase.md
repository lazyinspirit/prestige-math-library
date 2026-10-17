---
id: ex-damped-newton-halves-step-before-local-phase
kind: example
title: "A damped Newton step precedes the local quadratic phase"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-damped-newton
  - cor-mean-value-theorem
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-damped-newton-global-phase-and-local-quadratic-rate
  - thm-heine-borel-rn
  - thm-newton-local-quadratic-convergence-under-lipschitz-hessian
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
---

## Example

The strongly convex objective $f(x)=\tfrac12x^2+10\sqrt{1+x^2}$ makes a Newton step from $x_0=2$ increase the objective, while its half-step passes Armijo. With a small positive decrement tolerance, the global-to-local theorem then ensures a finite damped phase followed by unit Newton steps whenever the decrement test continues to permit updates.

## Facts & Assumptions

**Given:** $f(x)=\tfrac12x^2+10\sqrt{1+x^2}$ on $\mathbb R$, $x_0=2$, Armijo parameter $a=1/100$, shrink factor $b=1/2$, and decrement tolerance $\varepsilon=10^{-16}$.

[F1] [[thm-damped-newton-global-phase-and-local-quadratic-rate]]: with global bounds $m,M$, local radius $\rho$, and $\varepsilon<m^2\rho^2/(2M)$, the method reaches the local ball in finitely many updates; later attempted steps are unit and quadratic.

[F2] [[alg-damped-newton]]: the method computes $p=-H(x)^{-1}\nabla f(x)$ and $\lambda^2=\nabla f(x)^TH(x)^{-1}\nabla f(x)$, stops before line search when $\lambda^2/2\le\varepsilon$, and otherwise starts backtracking at $t=1$.

[F3] [[thm-newton-local-quadratic-convergence-under-lipschitz-hessian]]: with a positive-definite critical Hessian and a Lipschitz Hessian on a ball, there are local constants such that every generated iterate stays in the ball and every attempted Newton update not stopped by the decrement test accepts a unit step with a quadratic error bound.

[F4] [[cor-mean-value-theorem]]: a differentiable scalar function whose derivative is bounded in absolute value by $L$ on an interval is $L$-Lipschitz there.

[F5] [[thm-heine-borel-rn]]: a closed and bounded subset of the real line is compact.

[F6] [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]]: the gradient is the first derivative and the Hessian is the second derivative in the one-dimensional coordinate.

[F7] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: on a segment in an open convex domain, the second-order Taylor remainder is one half the Hessian at an interior point times the squared step.

## Verification
1.1 Differentiation gives $g(x)=x+10x/\sqrt{1+x^2}$, $H(x)=1+10/(1+x^2)^{3/2}$, and $H'(x)=-30x/(1+x^2)^{5/2}$. Thus $1\le H(x)\le11$, $g(x)$ has the sign of $x$, and $x^*=0$ is the unique minimizer. Also $|H'(x)|\le30$, since $|x|\le1+x^2\le(1+x^2)^{5/2}$; [F4] makes $H$ globally $30$-Lipschitz. The initial sublevel set is closed by continuity and bounded because $f(x)\ge x^2/2$, hence compact by [F5]. [F4, F5, F6, given, algebra]

1.2 At $x_0=2$, $g=2+4\sqrt5$, $H=1+2/\sqrt5$, and the Newton direction is $p=-g/H=30-16\sqrt5$. Its decrement is $\lambda^2=g^2/H=260-88\sqrt5>62$, since $5<81/16$ gives $\sqrt5<9/4$; hence the positive tolerance test does not stop before the first line search. [F2, F6, given, algebra]

2.1 Step 1.1 gives $g(0)=0$, $H(0)=11>0$, and a $30$-Lipschitz Hessian on $B(0,1)$, so [F3] applies there; we directly verify the local radius $\rho=10^{-6}$ and constant $C=10$. For $0<|x|\le\rho$, $H(x)\ge1$ and $|g(x)|\le11|x|$, so the Newton direction $p=-g(x)/H(x)$ satisfies $|p|\le11|x|$. Every point $\xi$ between $x$ and $x+p$ therefore satisfies $|H(\xi)-H(x)|\le30|p|\le330\rho$. Since $330\rho=33/100000<49/50=1-2a$ and $H(x)\ge1$, we have $H(\xi)\le H(x)+330\rho\le2(1-a)H(x)$. Taylor's formula [F7] and $g(x)p=-H(x)p^2$ now give $f(x+p)-f(x)-ag(x)p=-(1-a)H(x)p^2+H(\xi)p^2/2\le0$, so the full step passes Armijo. Also $x+p=(xH(x)-g(x))/H(x)=-10x^3/((1+x^2)^{3/2}H(x))$, hence $|x+p|\le10|x|^3\le10|x|^2$ because $|x|\le\rho<1$, and $|x+p|\le10\rho^2|x|<\rho$ since $10\rho^2=10^{-11}<1$. Thus $C=10$ and this $\rho$ give a directly verified invariant local ball and quadratic bound whenever the decrement test permits an update. [F3, F4, F7, given, step 1.1, algebra, choose]

2.2 The full-step point is $x_1=32-16\sqrt5$, whose absolute value exceeds $2$ because $289/64<5$ gives $\sqrt5>17/8$. The objective is even and strictly increasing as a function of $|x|>0$, so $f(x_1)>f(2)$; its Armijo threshold $f(2)+agp=f(2)-a\lambda^2$ is smaller than $f(2)$, and the unit step fails. [F2, step 1.2, algebra]

2.3 The half-step point is $x_{1/2}=17-8\sqrt5=-r$, where $0<r=8\sqrt5-17<1$: indeed $289/64<5<324/64$ implies $17/8<\sqrt5<9/4$. Thus $f(x_{1/2})=r^2/2+10\sqrt{1+r^2}<1/2+10\sqrt2<31/2$, using $2<9/4$ and so $\sqrt2<3/2$, while $f(2)=2+10\sqrt5>22$ because $\sqrt5>2$. The objective drop exceeds $13/2$. The half-step Armijo decrease required is $q/200$, where $q=\lambda^2<84$ because $\sqrt5>2$, so $q/200<21/50<13/2$. Hence $t=1/2$ passes, and it is accepted after the failed unit trial. [F2, step 1.2, algebra]

3.1 Choose $V=\mathbb R$, which contains every trial segment and $B(0,1)$. By step 1.1 the global Hessian bounds are $m=1$, $M=11$, and the decrement threshold in [F1] is $m^2\rho^2/(2M)=10^{-12}/22$. The chosen $\varepsilon=10^{-16}$ is smaller, since $22<10^4$ gives $10^{-16}<10^{-12}/22$, so the decrement test cannot stop outside $B(0,\rho)$. The first accepted step was the damped half-step in step 2.3; [F1] now gives finite entry into the local ball, followed by unit quadratic updates whenever the decrement test does not stop. [F1, step 2.3, step 2.1, given, algebra] ∎
