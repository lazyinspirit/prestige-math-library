---
id: alg-finite-budget-newton-kleinman-policy-iteration
kind: algorithm
title: "Finite-budget exact or safeguarded inexact Newton-Kleinman policy iteration"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
proof_strategy: direct
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-bartels-stewart-sylvester-equation
  - thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
  - def-verified-linear-residual-certificate-data
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems, Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 28–29, Newton-Kleinman iteration"
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node116.html"
      locator: "§6.2.2–6.2.4, value and stability identities"
---

## Definition

Inputs are CARE data with $Q=C^*C\succeq0$, $R\succ0$, a supplied stabilizing gain $K_0$, a finite outer budget $N$, and either exact or safeguarded-inexact solve mode. At iteration $j$, put $A_j=A-BK_j$.

In exact mode, use [[alg-bartels-stewart-sylvester-equation]] to solve
$$A_j^*X_j+X_jA_j=-(Q+K_j^*RK_j).$$
If it does not return success, stop with its status. Otherwise set $K_{j+1}=R^{-1}B^*X_j$ and continue, stopping after at most $N$ updates.

In safeguarded-inexact mode, take a proposed Hermitian approximate Lyapunov solution $\widetilde P_j$, define $\widetilde K_j=R^{-1}B^*\widetilde P_j$, and inspect the finite line-search list $\theta_\ell=2^{-\ell}$, $0\le\ell\le L$. For each trial $K_\ell=K_j+\theta_\ell(\widetilde K_j-K_j)$, let $A_\ell=A-BK_\ell$ and obtain outward-verified data: $W_\ell\succ0$, $\mu_\ell>0$ with
$$A_\ell^*W_\ell+W_\ell A_\ell\preceq-\mu_\ell I,$$
an inverse bound $\kappa_\ell\ge\|\mathcal L_{A_\ell}^{-1}\|_{F\to F}$, a residual bound $r_\ell$ for
$$\mathcal L_{A_\ell}(\widetilde P_j)+Q+K_\ell^*RK_\ell,$$
and an outward upper bound $\eta_\ell\ge\lambda_{\max}(\widetilde P_j-X_j)$. Accept the first trial satisfying $\eta_\ell+\kappa_\ell r_\ell\le0$. If none passes, return safeguard-inconclusive without changing $K_j$. The verifier uses the residual-certificate convention of [[def-verified-linear-residual-certificate-data]] and the finite-DAG enclosure guarantee of [[thm-outward-rounded-operations-are-isotone-and-dag-sound]].

After at most $N$ outer updates return the accepted gain sequence, solve residuals, cost-matrix data, and terminal status. An arbitrary approximate Lyapunov solve is never accepted without the separate stability and descent checks above.

## Facts & Assumptions

**Given:** CARE data, a supplied stabilizing $K_0$, finite outer and line-search budgets, and the solver/verifier interfaces in the Definition.

[F1] [[alg-bartels-stewart-sylvester-equation]]: a Lyapunov policy equation is solved by the finite Bartels–Stewart procedure.

[F2] [[thm-bartels-stewart-finite-status-and-local-pivot-uniqueness]]: each admitted solve terminates with a declared status; success returns the unique exact equation solution.

[F3] [[def-verified-linear-residual-certificate-data]]: reported residual and inverse bounds are upper bounds on the exact quantities they certify.

[F4] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: each finite outward-rounded DAG result encloses exact node values; a non-finite status makes no enclosure claim.

[F5] [[def-standard-continuous-and-discrete-riccati-equations]]: the CARE data and feedback convention used by both modes are fixed there.

## Proof

1.1 Exact mode performs at most $N$ policy evaluations. Each call to [F1] returns a finite success or failure status by [F2]; failure stops immediately, and success is followed by one finite gain update. Thus exact mode always stops within the declared budget and returns its declared status. [given, F1, F2, F5, algebra]

2.1 In safeguarded-inexact mode each outer pass tests at most $L+1$ gains. The finite controller and outward checks return enclosures or their explicit failure statuses by [F3]–[F4]. A trial either satisfies the stated certified acceptance inequality or is rejected; if all trials fail, the routine returns safeguard-inconclusive. With at most $N$ outer passes, the routine terminates. This proves finite status behavior only; it makes no convergence claim for arbitrary inexact proposals. [given, F3, F4, algebra] ∎
