---
id: thm-fixed-mesh-forward-euler-error-for-compressible-sbp
kind: theorem
title: Conditional fixed-grid forward-Euler error bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
aliases: []
deps:
  - alg-positive-tube-forward-euler-for-compressible-sbp
  - def-periodic-sbp-compressible-viscous-scheme
  - lem-ideal-gas-entropy-conservative-flux-properties
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - lem-positive-tube-forward-euler-loop-terminates
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 1, Example 1.1, printed pp. 4–5 (PDF pp. 5–6): explicit Euler context. The conditional fixed-grid estimate is proved locally."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Sections 4–5, printed pp. 477–487: distinction between semidiscrete stability and additional fully discrete time-step arguments."
---

## Statement

Fix the finite SBP grid of [[def-periodic-sbp-compressible-viscous-scheme]] and its semidiscrete vector field $L_h$. Let $T>0$, let $\mathcal C\Subset\mathcal G$ be compact, and suppose the exact semidiscrete solution $\bar U:[0,T]\to\mathcal G^{|\mathcal I|}$ starts from $U^0$ and satisfies $\bar U_i(t)\in\operatorname{int}\mathcal C$ for every node and every $t\in[0,T]$. For any finite step count $N\ge1$ with $N\Delta t\le T$, the guarded algorithm [[alg-positive-tube-forward-euler-for-compressible-sbp]] completes all $N$ steps for sufficiently small $\Delta t$, and

$$\max_{0\le n\le N}\|U^n-\bar U(n\Delta t)\|\le C_{h,T}\Delta t.$$

Here the norm is Euclidean on the finite nodal state vector. The constant may depend on the fixed grid, coefficient parameters, tube, and exact trajectory; no mesh-uniform estimate is asserted.

## Facts & Assumptions

**Given:** A fixed finite periodic SBP grid; $L_h$ from the semidiscrete equation; a compact tube $\mathcal C\Subset\mathcal G$; a continuously differentiable exact trajectory $\bar U$ that remains in its interior; exact initial data $U^0=\bar U(0)$; $T>0$, $N\ge1$, and $N\Delta t\le T$.

[F1] [[def-periodic-sbp-compressible-viscous-scheme]]: $L_h$ is a finite sum of the two-point fluxes $F_j^{\mathrm{ec}}$, entropy-variable gradients, and state-dependent blocks $K_{jk}(U)$ on the fixed node set.

[F2] [[lem-ideal-gas-entropy-conservative-flux-properties]]: each two-point flux is locally Lipschitz on $\mathcal G\times\mathcal G$.

[F3] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: the block entries of $K(U)$ are formed from smooth functions $u(U)$ and $T(U)>0$ and the fixed coefficients $\mu,\zeta,\kappa$.

[F4] [[alg-positive-tube-forward-euler-for-compressible-sbp]]: the algorithm uses $U^{n+1,*}=U^n+\Delta tL_h(U^n)$ and accepts a candidate exactly when every node lies in $\mathcal C$.

[F5] [[lem-positive-tube-forward-euler-loop-terminates]]: for a finite budget $N$, the algorithm returns after at most $N$ candidate evaluations.

[F6] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v=(c_v\gamma-s-\beta|u|^2/2,\beta u,-\beta)$, where $\beta=c_v\rho/\varepsilon=1/T$.

## Proof


1.1 The formula [F6] is smooth on $\mathcal G$: $u=m/\rho$, $\varepsilon=E-|m|^2/(2\rho)$, $s=c_v\log((\gamma-1)\varepsilon/\rho^\gamma)+s_0$, and $\beta=c_v\rho/\varepsilon$ have positive denominators and logarithm arguments there. Thus $v$ is locally Lipschitz. Together with [F2] and [F3], this makes every term in the finite sum [F1] locally Lipschitz on the open finite-dimensional domain $\mathcal G^{|\mathcal I|}$, so $L_h$ is locally Lipschitz and continuous there. Compactness of $\mathcal C^{|\mathcal I|}$ gives a bound $M_h=\sup_{Y\in\mathcal C^{|\mathcal I|}}\|L_h(Y)\|<\infty$. Cover this compact set by finitely many smaller balls whose doubled balls lie in local Lipschitz neighborhoods, and let $\delta_0>0$ be the smallest smaller-ball radius. Any pair at distance less than $\delta_0$ lies together in one of those larger balls, so its Lipschitz quotient is bounded by the largest local constant. For pairs at distance at least $\delta_0$, boundedness gives quotient at most $2M_h/\delta_0$. Thus a finite Lipschitz constant $L_h^*$ holds on $\mathcal C^{|\mathcal I|}$. [F1, F2, F3, F6, given]

2.1 For an exact time $t_n=n\Delta t$ and $t_{n+1}\le T$, the integral equation and the bound in step 1.1 give the one-step defect $r_n=\bar U(t_{n+1})-\bar U(t_n)-\Delta tL_h(\bar U(t_n))$, with $\|r_n\|\le\frac12L_h^*M_h(\Delta t)^2$. Indeed, $r_n=\int_0^{\Delta t}(L_h(\bar U(t_n+s))-L_h(\bar U(t_n)))\,ds$, while $\|\bar U(t_n+s)-\bar U(t_n)\|\le M_hs$. [given, step 1.1, algebra]

3.1 The unguarded Euler recurrence, as long as each preceding candidate has been accepted, therefore satisfies $e_{n+1}\le(1+L_h^*\Delta t)e_n+\frac12L_h^*M_h(\Delta t)^2$, where $e_n=\|U^n-\bar U(t_n)\|$ and $e_0=0$. Summing the geometric bound and using $(1+L_h^*\Delta t)^n\le e^{L_h^*T}$ yields $e_n\le C_{h,T}\Delta t$ with, for example, $C_{h,T}=\frac12M_h(e^{L_h^*T}-1)$ when $L_h^*>0$ and $C_{h,T}=0$ when $L_h^*=0$. [F4, step 2.1, algebra]

4.1 The continuous exact trajectory is compactly contained in $\operatorname{int}\mathcal C$ over the compact time interval, so there is a positive minimum distance $\delta$ from every nodal exact state to $\mathbb R^{d+2}\setminus\mathcal C$. Choose $\Delta t$ so small that $C_{h,T}\Delta t<\delta$. Inductively, after an accepted stage the recurrence in step 3.1 bounds the next candidate's distance from the exact next state by less than $\delta$, so every candidate node remains in $\mathcal C$ and [F4] accepts it. This proves all $N$ steps are accepted; [F5] confirms finite return within the stated budget. The estimate in step 3.1 then holds for every returned stage. [F4, F5, step 3.1, given] ∎
