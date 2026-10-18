---
id: thm-newton-kleinman-exact-global-and-local-quadratic-convergence
kind: theorem
title: "Exact Newton-Kleinman iteration preserves stability, decreases cost
  matrices, and converges quadratically locally"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-finite-budget-newton-kleinman-policy-iteration
  - thm-care-stabilizing-psd-solution-and-value
  - thm-continuous-lyapunov-integral-and-positivity
  - lem-hurwitz-matrix-exponential-decay-bound
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 28–29, Newton-Kleinman iteration"
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node116.html"
      locator: "§6.2.2–6.2.4, value and stability identities"
verification:
  precheck: pass
---

## Statement

Assume the continuous stabilizability and detectability hypotheses of [[thm-care-stabilizing-psd-solution-and-value]]. From a supplied stabilizing $K_0$, define the infinite exact recurrence, for every $j\ge0$, by
$A_j=A-BK_j,\qquad A_j^*X_j+X_jA_j=-(Q+K_j^*RK_j),\qquad K_{j+1}=R^{-1}B^*X_j.$
These exact Lyapunov solutions exist uniquely. Every closed loop $A_j=A-BK_j$ is Hurwitz, every exact Lyapunov matrix $X_j$ is positive semidefinite, and $X_{j+1}\preceq X_j$. The sequence converges to the unique stabilizing CARE solution $X_*$. Once $j$ is sufficiently large, there is a finite constant $C$ such that
$$\|X_{j+1}-X_*\|_F\le C\|X_j-X_*\|_F^2.$$
Every successful exact update of [[alg-finite-budget-newton-kleinman-policy-iteration]] agrees with this recurrence, so a finite call returns only a prefix, possibly shortened by a solver failure. Convergence and the eventual quadratic estimate concern the infinite recurrence; no such guarantee is asserted for arbitrary inexact solves.

## Facts & Assumptions

**Given:** Continuous CARE data, continuous stabilizability/detectability, a stabilizing $K_0$, and the infinite exact Lyapunov recurrence in the Statement.

[F1] [[alg-finite-budget-newton-kleinman-policy-iteration]]: $A_j=A-BK_j$, $A_j^*X_j+X_jA_j=-(Q+K_j^*RK_j)$, and $K_{j+1}=R^{-1}B^*X_j$.

[F2] [[thm-care-stabilizing-psd-solution-and-value]]: there is a unique Hermitian positive-semidefinite stabilizing solution $X_*$.

[F3] [[thm-continuous-lyapunov-integral-and-positivity]]: a Hurwitz Lyapunov equation with positive-semidefinite forcing has its unique positive-semidefinite integral solution.

[F4] [[lem-hurwitz-matrix-exponential-decay-bound]]: a Hurwitz matrix exponential is bounded by a polynomial times a decaying exponential.

[F5] [[def-standard-continuous-and-discrete-riccati-equations]]: $G=BR^{-1}B^*$ and the CARE residual is $A^*X+XA-XGX+Q$.

## Proof

1.1 Suppose $A_j$ is Hurwitz. By [F3], the exact solution $X_j$ of the policy Lyapunov equation is $X_j=\int_0^\infty e^{tA_j^*}(Q+K_j^*RK_j)e^{tA_j}\,dt\succeq0.$ For $\Delta_j=K_{j+1}-K_j$, expansion using $B^*X_j=RK_{j+1}$ gives $A_{j+1}^*X_j+X_jA_{j+1}+Q+K_{j+1}^*RK_{j+1}=-\Delta_j^*R\Delta_j.$ If $A_{j+1}v=\lambda v$ with $\operatorname{Re}\lambda\ge0$, the quadratic form of the left side is $2\operatorname{Re}(\lambda)v^*X_jv+v^*Qv+(K_{j+1}v)^*R(K_{j+1}v)\ge0,$ while the right side is nonpositive. Equality forces $K_{j+1}v=0$ and $\Delta_jv=0$, hence $K_jv=0$ and $A_jv=Av=\lambda v$, contradicting that $A_j$ is Hurwitz. Starting from $K_0$, induction proves every $A_j$ Hurwitz and every $X_j\succeq0$. [F1, F3, F5, given, induction, contradiction]

2.1 Subtracting the Lyapunov equations for $X_j$ and $X_{j+1}$ after expressing both under $A_{j+1}$ gives $A_{j+1}^*(X_j-X_{j+1})+(X_j-X_{j+1})A_{j+1}=-\Delta_j^*R\Delta_j.$ The Lyapunov integral [F3] therefore yields $X_j-X_{j+1}\succeq0$. The decreasing sequence is bounded below by zero, so each quadratic form converges. Evaluating at $e_i$, $e_i+e_j$, and $e_i+\mathrm i e_j$ shows convergence of every matrix entry to a Hermitian limit $X_\infty\succeq0$. Since $K_{j+1}=R^{-1}B^*X_j$, the gains also converge. Passing to the limit in the policy Lyapunov equation gives the CARE for $X_\infty$; [F2] identifies this positive-semidefinite root as $X_*$. [F1, F2, F3, step 1.1, algebra]

3.1 Let $E_j=X_j-X_*$ and $A_*=A-BR^{-1}B^*X_*$. Put $D_j=K_{j+1}-K_*=R^{-1}B^*E_j$. Subtract the CARE identity at $X_*$ from the policy Lyapunov equation under $A_{j+1}$ to obtain $A_{j+1}^*E_{j+1}+E_{j+1}A_{j+1}=-D_j^*RD_j.$ By [F2], $A_*$ is Hurwitz. Choose $W=\int_0^\infty e^{tA_*^*}Ie^{tA_*}\,dt\succ0$ using [F3], so $A_*^*W+WA_*=-I$. Since $A_{j+1}\to A_*$, for all large $j$ one has $A_{j+1}^*W+WA_{j+1}\preceq-\tfrac12I$. Along $\dot x=A_{j+1}x$, differentiation gives $\frac{d}{dt}(x^*Wx)\le-\frac12\|x\|_2^2\le-\frac{1}{2\|W\|_2}x^*Wx.$ Consequently $\|e^{tA_{j+1}}\|_2\le M e^{-\alpha t}$ with $M=(\|W\|_2/\lambda_{\min}(W))^{1/2}$ and $\alpha=1/(4\|W\|_2)$, uniformly for all sufficiently large $j$. Applying the Lyapunov integral to the error equation yields $\|E_{j+1}\|_F\le\left(\int_0^\infty M^2e^{-2\alpha t}\,dt\right)\|R\|_2\|R^{-1}B^*\|_2^2\|E_j\|_F^2.$ The integral is finite and supplies the stated local quadratic constant. [F1, F2, F3, F4, step 2.1, algebra] ∎
