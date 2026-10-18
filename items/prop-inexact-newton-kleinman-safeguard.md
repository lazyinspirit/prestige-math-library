---
id: prop-inexact-newton-kleinman-safeguard
kind: proposition
title: "Verified Lyapunov residual, descent, and stability checks make an
  inexact Newton-Kleinman step safe"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-finite-budget-newton-kleinman-policy-iteration
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-continuous-lyapunov-integral-and-positivity
  - thm-sylvester-unique-solvability-spectral-separation
  - def-verified-linear-residual-certificate-data
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
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

Consider a trial gain $K_t$ in the safeguarded-inexact branch of [[alg-finite-budget-newton-kleinman-policy-iteration]], with $A_t=A-BK_t$. Suppose outward certificates give $W\succ0$, $\mu>0$, $A_t^*W+WA_t\preceq-\mu I$, an inverse bound $\kappa\ge\|\mathcal L_{A_t}^{-1}\|_{F\to F}$, a residual bound $r$ for a Hermitian approximation $\widetilde P$ to
$$A_t^*P+PA_t+Q+K_t^*RK_t=0,$$
and an upper bound $\eta\ge\lambda_{\max}(\widetilde P-X_j)$ with $\eta+\kappa r\le0$. Then $A_t$ is Hurwitz, its exact cost matrix $P_t$ exists and is positive semidefinite, and $P_t\preceq X_j$. Thus every accepted line-search step preserves stability and does not increase the exact closed-loop cost matrix.

## Facts & Assumptions

**Given:** The current exact cost matrix $X_j$, trial gain, residual data, and verified bounds in the statement.

[F1] [[alg-finite-budget-newton-kleinman-policy-iteration]]: a trial is accepted only if its Lyapunov margin, inverse bound, residual bound, and descent upper bound satisfy the stated tests.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: $Q=C^*C\succeq0$ and $R\succ0$.

[F3] [[thm-continuous-lyapunov-integral-and-positivity]]: for Hurwitz $A_t$, the solution of $A_t^*P+PA_t+S=0$ is the unique integral $\int_0^\infty e^{tA_t^*}Se^{tA_t}\,dt$, and is positive semidefinite for $S\succeq0$.

[F4] [[thm-sylvester-unique-solvability-spectral-separation]]: when $A_t$ is Hurwitz, the Lyapunov operator $E\mapsto A_t^*E+EA_t$ is invertible.

[F5] [[def-verified-linear-residual-certificate-data]] specifies bounds for an approximate-inverse defect and a preconditioned linear residual, with a usable certificate requiring $q<1$. The raw Lyapunov residual bound $r$ and inverse-norm bound $\kappa$ in this proposition are separate hypotheses of the Statement.

## Proof

1.1 If $A_tv=\lambda v$ with $v\ne0$, the certificate gives $2\operatorname{Re}(\lambda)v^*Wv=v^*(A_t^*W+WA_t)v\le-\mu\|v\|_2^2<0.$ Because $W\succ0$, every eigenvalue has negative real part, so $A_t$ is Hurwitz. [F1, given, algebra]

2.1 Let $P_t$ be the exact solution of the Lyapunov equation; it exists uniquely by [F3] and [F4], and $P_t\succeq0$ by [F2]–[F3]. If $R_t$ denotes the exact residual of $\widetilde P$, then $\mathcal L_{A_t}(\widetilde P-P_t)=R_t$. The Statement's certified inverse and raw residual bounds give $\|\widetilde P-P_t\|_F\le\kappa r$; these are distinct from the certificate quantities described in [F5]. For each unit vector $v$, $v^*(P_t-X_j)v\le v^*(\widetilde P-X_j)v+\|P_t-\widetilde P\|_2\le\eta+\kappa r\le0.$ Thus $P_t\preceq X_j$. [given, F1, F2, F3, F4, F5, step 1.1, algebra] ∎
