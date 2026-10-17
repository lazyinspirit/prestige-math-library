---
id: thm-shooting-residual-error-budget
kind: theorem
title: "Shooting error separates IVP integration and nonlinear residual error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - alg-single-shooting-for-nonlinear-bvps
  - lem-c1-ode-flow-on-common-tube
  - prop-shooting-residual-derivative
  - prop-shooting-residual-zero-iff-bvp-solution
  - thm-gronwall-integral-inequality
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
verification:
  precheck: pass
---

## Statement

Let the exact shooting residual $R(s)=B(s,\phi(b;s))$ have a root $s^*$ whose trajectory is a BVP solution. For some $r>0$, suppose $R$ is $C^2$ on an open neighborhood of $\overline B_2(s^*,r)$ (twice continuously differentiable), $DR(s^*)$ is invertible, and $DR$ is $L_R$-Lipschitz on this ball, where $\sigma:=\|DR(s^*)^{-1}\|_{\rm op}^{-1}>0$ and $(L_R/2)r\le\sigma/2$. Assume a certified evaluator from [[def-certified-ivp-approximation-and-sensitivity-interface]] succeeds on this ball with uniform trajectory error $\delta_{\rm IVP}$, and that $B$ is $L_B$-Lipschitz in its terminal-state argument between the exact and approximate endpoints there. For any candidate $\widehat s\in\overline B_2(s^*,r)$ with computed residual $\|B(\widehat s,\widetilde\Phi(\widehat s))\|_2\le\tau_{\rm root}$,

$$\|\widehat s-s^*\|_2\le\frac{2}{\sigma}(\tau_{\rm root}+L_B\delta_{\rm IVP}).$$

If, in addition, $f$ is $C^1$ on an open field domain $\Omega$, and there are an open neighborhood $U\supseteq\overline B_2(s^*,r)$ and a compact convex $K\subseteq\Omega$ such that for every $s\in U$ the IVP has a unique solution $\phi(\cdot;s)$ on $[a,b]$ with graph in $K$, and

$\|f(t,y)-f(t,z)\|_2\le L\|y-z\|_2\quad\text{whenever }(t,y),(t,z)\in K,$

then the approximate trajectory from $\widehat s$ differs uniformly from the exact BVP trajectory by at most

$$\delta_{\rm IVP}+e^{L(b-a)}\|\widehat s-s^*\|_2.$$

The integration and root-residual terms remain separate; the theorem makes no global solver-success claim.

## Facts & Assumptions

**Given:** The BVP, exact shooting root $s^*$, regularity and inverse bound, radius $r$, certified evaluator with error $\delta_{\rm IVP}$, terminal Lipschitz constant $L_B$, candidate $\widehat s$ and computed residual tolerance $\tau_{\rm root}$, and, when the trajectory estimate is used, the open set $U$, common compact convex tube $K$, $C^1$ field, and state-Lipschitz bound $L$ from the Statement.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: $R(s)=B(s,\phi(b;s))$ is the exact endpoint residual.

[F2] [[def-certified-ivp-approximation-and-sensitivity-interface]]: $\widetilde\Phi(s)=\widetilde\phi(b;s)$ and $\sup_t\|\widetilde\phi(t;s)-\phi(t;s)\|_2\le\delta_{\rm IVP}$.

[F3] [[alg-single-shooting-for-nonlinear-bvps]]: the computed root-tolerance status is only the residual bound for $B(s,\widetilde\Phi(s))$.

[F4] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: apply its estimate on the convex ball with its evaluation point $x=s^*$ and its other point $x_*=s$. Since $R(s^*)=0$, this gives $R(s)=DR(s^*)(s-s^*)+q$ with $\|q\|_2\le(L_R/2)\|s-s^*\|_2^2$.

[F5] [[thm-gronwall-integral-inequality]]: a difference bound $u(t)\le u(a)+L\int_a^t u$ yields $u(t)\le e^{L(t-a)}u(a)$.

[F6] [[lem-c1-ode-flow-on-common-tube]]: under the common-tube hypotheses in the Statement, exact solutions satisfy their Volterra integral equations.

## Proof

1.1 Put $e=\widehat s-s^*$. The vector remainder estimate [F4] and $R(s^*)=0$ give $R(\widehat s)=DR(s^*)e+q$ with $\|q\|_2\le(L_R/2)\|e\|_2^2$. Since $\|e\|_2\le r$ and $\|DR(s^*)e\|_2\ge\sigma\|e\|_2$, the radius condition yields $\|R(\widehat s)\|_2\ge\sigma\|e\|_2-(\sigma/2)\|e\|_2=(\sigma/2)\|e\|_2$. [given, F1, F4, algebra]

2.1 The exact and computed residuals have the same first boundary argument. By the stated terminal-state Lipschitz bound and [F2], $\|R(\widehat s)-B(\widehat s,\widetilde\Phi(\widehat s))\|_2\le L_B\delta_{\rm IVP}$. The computed residual assumption therefore gives $\|R(\widehat s)\|_2\le\tau_{\rm root}+L_B\delta_{\rm IVP}$. Combining with step 1.1 proves the initial-state estimate. If the candidate is the algorithm's root-tolerance output, [F3] supplies exactly the needed residual premise; other statuses supply no such premise. [given, F2, F3, step 1.1, algebra]

3.1 Let $u(t)=\|\phi(t;\widehat s)-\phi(t;s^*)\|_2$. The common-tube $C^1$ hypothesis makes the flows satisfy the Volterra equations by [F6], and the tube's Lipschitz bound gives $u(t)\le\|e\|_2+L\int_a^t u(r)dr$. Applying [F5] yields $u(t)\le e^{L(b-a)}\|e\|_2$ for every $t\in[a,b]$. The evaluator error [F2] and the triangle inequality add at most $\delta_{\rm IVP}$, giving the displayed trajectory estimate. The given root trajectory is the exact BVP trajectory. [given, F2, F5, F6, step 2.1, algebra] ∎
