---
id: thm-maxwell-yee-gauss-constraints-propagate
kind: theorem
title: Compatible discrete charge and magnetic divergence propagate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - lem-maxwell-discrete-incidence-identities
  - alg-maxwell-yee-leapfrog-update
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §3.2, printed pp. 30–31, and Chapter 9 §9.3, printed pp. 246–249: staggered Maxwell updates and oriented Yee-grid placement. The discrete continuity proof below is local."
verification:
  precheck: pass
---

## Statement

For the Yee update in [[alg-maxwell-yee-leapfrog-update]], suppose the initial rows satisfy $-G^TM_e e^0=\rho^0$ and $Db^{-1/2}=0$. If the source and charge rows satisfy
$$\rho^{n+1}-\rho^n-\Delta t\,G^T\left(j^{n+1/2}+S\frac{e^{n+1}+e^n}{2}\right)=0$$
at every step, then $-G^TM_e e^n=\rho^n$ and $Db^{n-1/2}=0$ for every later step. This is exact constraint propagation; it does not assert stability for a time step violating the CFL condition.

## Facts & Assumptions


**Given:** A finite incidence complex, the Yee rows, initial charge and magnetic constraints, and the discrete continuity equation above.

[F1] The Yee magnetic row is $b^{n+1/2}=b^{n-1/2}-\Delta t\,Ce^n$ and its electric row is $M_e(e^{n+1}-e^n)/\Delta t+S(e^{n+1}+e^n)/2=C^TM_bb^{n+1/2}-j^{n+1/2}$. ([[alg-maxwell-yee-leapfrog-update]])

[F2] The incidence maps satisfy $CG=0$ and $DC=0$ for the selected periodic or PEC-relative complex. ([[lem-maxwell-discrete-incidence-identities]])

[F3] Discrete charge continuity is the displayed update for $\rho$ and total current $j+S(e^{n+1}+e^n)/2$. ([[def-maxwell-discrete-cochain-and-yee-grid]])

## Proof

1.1 Apply $D$ to the magnetic row in [F1]. Then $Db^{n+1/2}=Db^{n-1/2}-\Delta t\,DCe^n=Db^{n-1/2}$ by [F2]. Starting from $Db^{-1/2}=0$, induction gives $Db^{n-1/2}=0$ at every half step. [given, F1, F2, induction]

2.1 Apply $-G^T$ to the electric row in [F1]. Since $G^TC^T=(CG)^T=0$, this gives $-G^TM_e e^{n+1}+G^TM_e e^n=\Delta t G^T(j^{n+1/2}+S(e^{n+1}+e^n)/2)$. By [F3], the right side equals $\rho^{n+1}-\rho^n$. Thus the physical-charge residual $-G^TM_e e^n-\rho^n$ is constant in $n$ and is initially zero, so it remains zero. [given, F1, F2, F3, algebra] ∎
