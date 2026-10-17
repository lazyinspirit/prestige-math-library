---
id: thm-shooting-residual-error-budget
kind: theorem
title: "Shooting error separates IVP integration and nonlinear residual error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
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

Let the exact shooting residual $R(s)=B(s,\phi(b;s))$ have a root $s^*$ whose trajectory is a BVP solution. Suppose $R$ is $C^2$ near $s^*$ (twice continuously differentiable), $DR(s^*)$ is invertible, and $DR$ is $L_R$-Lipschitz on the closed ball $\overline B_2(s^*,r)$, where $\sigma:=\|DR(s^*)^{-1}\|_{\rm op}^{-1}>0$ and $(L_R/2)r\le\sigma/2$. Assume a certified evaluator from [[def-certified-ivp-approximation-and-sensitivity-interface]] succeeds on this ball with uniform trajectory error $\delta_{\rm IVP}$, and that $B$ is $L_B$-Lipschitz in its terminal-state argument between the exact and approximate endpoints there. For any candidate $\widehat s\in\overline B_2(s^*,r)$ with computed residual $\|B(\widehat s,\widetilde\Phi(\widehat s))\|_2\le\tau_{\rm root}$,

$$\|\widehat s-s^*\|_2\le\frac{2}{\sigma}(\tau_{\rm root}+L_B\delta_{\rm IVP}).$$

If $f$ is $L$-Lipschitz in state on a convex tube containing the exact trajectories from $s^*$ and $\widehat s$, then the approximate trajectory from $\widehat s$ differs uniformly from the exact BVP trajectory by at most

$$\delta_{\rm IVP}+e^{L(b-a)}\|\widehat s-s^*\|_2.$$

The integration and root-residual terms remain separate; the theorem makes no global solver-success claim.

## Facts & Assumptions

**Given:** The BVP, exact shooting root $s^*$, regularity and inverse bound, radius $r$, certified evaluator with error $\delta_{\rm IVP}$, terminal Lipschitz constant $L_B$, candidate $\widehat s$ and computed residual tolerance $\tau_{\rm root}$, and a common state-Lipschitz tube with constant $L$ for the trajectory estimate.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: $R(s)=B(s,\phi(b;s))$ is the exact endpoint residual.

[F2] [[def-certified-ivp-approximation-and-sensitivity-interface]]: $\widetilde\Phi(s)=\widetilde\phi(b;s)$ and $\sup_t\|\widetilde\phi(t;s)-\phi(t;s)\|_2\le\delta_{\rm IVP}$.

[F3] [[prop-shooting-residual-zero-iff-bvp-solution]]: an exact shooting zero gives the corresponding BVP trajectory.

[F4] [[alg-single-shooting-for-nonlinear-bvps]]: the computed root-tolerance status is only the residual bound for $B(s,\widetilde\Phi(s))$.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: the Taylor remainder for a C2 map with $L_R$-Lipschitz derivative has norm at most $(L_R/2)\|s-s^*\|_2^2$ on the ball.

[F6] [[thm-gronwall-integral-inequality]]: a difference bound $u(t)\le u(a)+L\int_a^t u$ yields $u(t)\le e^{L(t-a)}u(a)$.

[F7] [[lem-c1-ode-flow-on-common-tube]]: exact solutions on a common compact tube satisfy their Volterra integral equations; the lemma also provides local differentiability of their flow.

## Proof

1.1 Put $e=\widehat s-s^*$. Taylor's formula [F5] and $R(s^*)=0$ give $R(\widehat s)=DR(s^*)e+q$ with $\|q\|_2\le(L_R/2)\|e\|_2^2$. Since $\|e\|_2\le r$ and $\|DR(s^*)e\|_2\ge\sigma\|e\|_2$, the radius condition yields $\|R(\widehat s)\|_2\ge\sigma\|e\|_2-(\sigma/2)\|e\|_2=(\sigma/2)\|e\|_2$. [given, F1, F5, algebra]

2.1 The exact and computed residuals have the same first boundary argument. By the stated terminal-state Lipschitz bound and [F2], $\|R(\widehat s)-B(\widehat s,\widetilde\Phi(\widehat s))\|_2\le L_B\delta_{\rm IVP}$. The computed residual assumption therefore gives $\|R(\widehat s)\|_2\le\tau_{\rm root}+L_B\delta_{\rm IVP}$. Combining with step 1.1 proves the initial-state estimate. If the candidate is the algorithm's root-tolerance output, [F4] supplies exactly the needed residual premise; other statuses supply no such premise. [given, F2, F4, step 1.1, algebra]

3.1 Let $u(t)=\|\phi(t;\widehat s)-\phi(t;s^*)\|_2$. The Volterra equations from [F7] and the common-tube Lipschitz bound give $u(t)\le\|e\|_2+L\int_a^t u(r)dr$. Applying [F6] yields $u(t)\le e^{L(b-a)}\|e\|_2$ for every $t\in[a,b]$. The evaluator error [F2] and the triangle inequality add at most $\delta_{\rm IVP}$, giving the displayed trajectory estimate. By [F3], $\phi(\cdot;s^*)$ is the exact BVP trajectory. [given, F2, F3, F6, F7, step 2.1, algebra] ∎
