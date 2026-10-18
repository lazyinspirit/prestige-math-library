---
id: thm-maxwell-periodic-yee-smooth-solution-error
kind: theorem
title: Finite-time Yee error for smooth homogeneous periodic Maxwell fields
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-maxwell-discrete-cochain-and-yee-grid
  - alg-maxwell-yee-leapfrog-update
  - thm-maxwell-yee-strict-cfl-modified-energy
  - lem-maxwell-periodic-yee-consistency
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 7 §7.4, printed pp. 164–168, gives the second-order dispersive relation; Chapter 9 §9.3 gives the 3D update. The finite-time residual-to-error estimate is proved locally."
verification:
  precheck: pass
---

## Statement

Assume the hypotheses and residual bounds of [[lem-maxwell-periodic-yee-consistency]] on $[0,T]$. Write $\delta_{tt}u^n=(u^{n+1}-2u^n+u^{n-1})/\Delta t^2$. Let $e_h^n,b_h^{n+1/2}$ be a lossless, source-free periodic Yee solution, with $S=0$ and $j^{n+1/2}=0$ at every step, and let $e_*^n,b_*^{n+1/2}$ be the exact samples. Set $w^n=e_h^n-e_*^n$ and $z^{n+1/2}=b_h^{n+1/2}-b_*^{n+1/2}$. Suppose the initial electric rows are compatible with the Yee equations and satisfy
$$\|w^0\|_{M_e}+\|Cw^0\|_{M_b}+\|w^1\|_{M_e}+\|Cw^1\|_{M_b}+\left\|\frac{w^1-w^0}{\Delta t}\right\|_{M_e}+\|z^{1/2}\|_{M_b}\le C_0(h^2+\Delta t^2).$$
Let $\lambda_{\max}$ be the largest generalized curl-curl eigenvalue in [[thm-maxwell-yee-strict-cfl-modified-energy]]. If the strict spectral margin obeys $\gamma:=1-\Delta t^2\lambda_{\max}/4\ge\gamma_0>0$, then for every integer $n\ge0$ with $t_{n+1}\le T$,
$$\|e_h^n-e_*^n\|_{M_e}+\|b_h^{n+1/2}-b_*^{n+1/2}\|_{M_b}+\|C(e_h^n-e_*^n)\|_{M_b}\le C(h^2+\Delta t^2),$$
where $C$ is independent of the grid counts and time step. The statement is for the smooth homogeneous periodic branch and compatible starts; it makes no Taylor error claim across material jumps or an unspecified PEC boundary stencil.

## Facts & Assumptions


**Given:** A homogeneous periodic grid, exact smooth source-free Maxwell samples, the lossless source-free Yee rows, a strict CFL margin, and the stated initial-error bound.

[F1] With $S=0$ and $j^{n+1/2}=0$ at every step, eliminating the magnetic half-step from the Yee rows gives the electric recurrence $M_e\delta_{tt}e^n+C^TM_bCe^n=0$ and the Faraday half-step row. ([[alg-maxwell-yee-leapfrog-update]])

[F2] The generalized Rayleigh maximum $\lambda_{\max}$ gives $\|Cv\|_{M_b}^2\le\lambda_{\max}\|v\|_{M_e}^2$ for every electric cochain $v$. The strict spectral margin is $1-\Delta t^2\lambda_{\max}/4$. ([[thm-maxwell-yee-strict-cfl-modified-energy]])

[F3] Exact samples satisfy $\|r_h^n\|_{M_e^{-1}}\le C_T(h^2+\Delta t^2)$ and the unscaled Faraday-row residual satisfies $\|s_h^n\|_{M_b}\le C_T\Delta t^3$. ([[lem-maxwell-periodic-yee-consistency]])

[F4] $M_e$ is positive definite, and $\|r\|_{M_e^{-1}}^2=r^TM_e^{-1}r$ is the dual norm to $\|\cdot\|_{M_e}$. ([[def-maxwell-discrete-cochain-and-yee-grid]])

## Proof

1.1 Subtract the exact-sample equations with residuals from the numerical rows. With $K=C^TM_bC$, this gives $M_e\delta_{tt}w^n+Kw^n=-r_h^n,\qquad z^{n+1/2}-z^{n-1/2}=-\Delta t\,Cw^n-s_h^n.$ The sign convention for $s_h^n$ is the one in the consistency statement. [F1, F3, algebra]

1.2 Put $V^n=(w^{n+1}-w^n)/\Delta t$, $\bar w^n=(w^{n+1}+w^n)/2$, and $\mathscr E^{n+1/2}=\tfrac12\|V^n\|_{M_e}^2+\tfrac12\langle Cw^{n+1},Cw^n\rangle_{M_b}.$ Expanding about $C\bar w^n$ gives $\mathscr E^{n+1/2}=\frac12\|V^n\|_{M_e}^2+\frac12\|C\bar w^n\|_{M_b}^2-\frac{\Delta t^2}{8}\|CV^n\|_{M_b}^2$. The generalized Rayleigh bound in [F2] yields $\mathscr E^{n+1/2}\ge\tfrac{\gamma_0}{2}\|V^n\|_{M_e}^2+\tfrac12\|C\bar w^n\|_{M_b}^2.$ The initial assumptions therefore give $\mathscr E^{1/2}\ge0$ and $\sqrt{\mathscr E^{1/2}}\le C(h^2+\Delta t^2)$. [F2, given, algebra]

2.1 The kinetic-energy increment is $\Delta t\langle(V^n+V^{n-1})/2,M_e\delta_{tt}w^n\rangle$, and the curl-potential increment is $\Delta t\langle(V^n+V^{n-1})/2,Kw^n\rangle$. Substituting step 1.1 gives $\mathscr E^{n+1/2}-\mathscr E^{n-1/2}=-\Delta t\left\langle\frac{V^n+V^{n-1}}2,r_h^n\right\rangle.$ By [F4] and Cauchy–Schwarz, the absolute value is at most $\Delta t\|r_h^n\|_{M_e^{-1}}(\|V^n\|_{M_e}+\|V^{n-1}\|_{M_e})/2$. [F4, step 1.1, algebra]

3.1 Coercivity in step 1.2 bounds both velocities by the square roots of their adjacent energies times $\sqrt{2/\gamma_0}$. Factoring the difference of squares and summing (with the zero-energy case obtained by continuity, or by first replacing each square root by $\sqrt{\mathscr E+\delta}$ and letting $\delta\downarrow0$) gives $\max_n(\|V^n\|_{M_e}+\|C\bar w^n\|_{M_b})\le C\left(\sqrt{\mathscr E^{1/2}}+\sum_n\Delta t\|r_h^n\|_{M_e^{-1}}\right)\le C_T(h^2+\Delta t^2).$ The sum has at most $T/\Delta t$ terms, so [F3] gives the final inequality. [F2, F3, step 1.2, step 2.1, algebra]

4.1 Since $w^n=w^0+\Delta t\sum_{m<n}V^m$, the initial bound and step 3.1 imply $\max_n\|w^n\|_{M_e}\le C_T(h^2+\Delta t^2)$. For $n\ge1$, $Cw^n=C\bar w^{n-1}+\Delta t CV^{n-1}/2$ and $\Delta t\|CV^{n-1}\|_{M_b}\le\Delta t\sqrt{\lambda_{\max}}\|V^{n-1}\|_{M_e}\le2\|V^{n-1}\|_{M_e}$ by the strict CFL condition. Thus the same order holds for $\|Cw^n\|_{M_b}$ for $n\ge1$; the $n=0$ curl bound is part of the initial assumptions. [F2, given, step 1.2, step 3.1, algebra]

5.1 Summing the second equation in step 1.1 from the controlled start $z^{1/2}$ gives $\|z^{n+1/2}\|_{M_b}\le\|z^{1/2}\|_{M_b}+\Delta t\sum_{m=1}^{n}\|Cw^m\|_{M_b}+\sum_{m=1}^{n}\|s_h^m\|_{M_b}.$ The curl sum is bounded by $T\max_m\|Cw^m\|_{M_b}$, and the residual sum is at most $(T/\Delta t)C_T\Delta t^3=C_TT\Delta t^2$ by [F3]. The initial bound and step 4.1 therefore bound both terms by $C_T(h^2+\Delta t^2)$. Combining the electric, curl and magnetic bounds proves the claim. [F3, given, step 1.1, step 4.1, algebra] ∎
