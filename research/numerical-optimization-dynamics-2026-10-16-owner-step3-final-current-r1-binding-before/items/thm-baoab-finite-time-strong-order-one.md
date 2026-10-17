---
id: thm-baoab-finite-time-strong-order-one
kind: theorem
title: "Finite-time strong order one of BAOAB"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - def-axiom-of-choice
  - alg-baoab-underdamped-langevin-splitting
  - lem-exact-ornstein-uhlenbeck-momentum-substep
  - lem-baoab-one-step-error-moment-bounds
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited through the SDE existence and Itô interfaces in the local-defect supplier; the grid recurrence is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Adam Telatovich and Xiantao Li, Strong Convergence Analysis for Numerical Methods for the Langevin Dynamics Model and Higher-order Operator-splitting Schemes, §§3.1–3.2 and 5.2"
      url: "https://arxiv.org/pdf/1706.04237v2"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Statement

Assume the force and model hypotheses of [[lem-baoab-one-step-error-moment-bounds]]. Let $T>0$, $N\ge1$, $h=T/N\le1$, and let $Z_0$ be a common $\mathcal F_0$-measurable $\mathbb R^{2d}$-valued initial state with $\mathbb E|Z_0|^2<\infty$, independent of $\sigma(W_t-W_0:0\le t\le T)$. Initialize both BAOAB and the exact underdamped Langevin solution at this same $Z_0$. Couple each BAOAB OU draw to the same Brownian path as the exact solution by taking the standardized exact OU integral on that grid interval. If $Z_n^B$ is the BAOAB state and $Z_{t_n}$ the exact state at $t_n=nh$, then a constant $C_T$ independent of $N$ satisfies
$$\max_{0\le n\le N}\mathbb E|Z_n^B-Z_{t_n}|^2\le C_T h^2.$$
Thus the grid-point root-mean-square strong error is $O(h)$ on the fixed finite interval. No invariant-law or long-time error rate is asserted.

## Facts & Assumptions

**Given:** The SDE and force assumptions in [[lem-baoab-one-step-error-moment-bounds]], a common $\mathcal F_0$-measurable initial state $Z_0\in L^2$ independent of $\sigma(W_t-W_0:0\le t\le T)$, initialization of both processes at this state, a fixed horizon $T>0$, $h=T/N\le1$, and the prescribed Brownian coupling.

[F1] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: the exact solution exists globally and has a finite second moment uniformly on $[0,T]$ under the stated globally Lipschitz, linear-growth drift.

[L1] [[lem-baoab-one-step-error-moment-bounds]]: the exact and BAOAB one-step residuals have conditional mean $O(h^2(1+|Z_n|))$ and conditional second moment $O(h^3(1+|Z_n|^2))$; for the same Brownian noise, the BAOAB residual is $Ch$-Lipschitz in the starting state.

[A1] [[def-axiom-of-choice]]: AC is inherited through the SDE and It\^o interfaces in [F1] and [L1]; the error recurrence uses no further choice.

## Proof

**Given:** The assumptions above.

1.1 The exact solution has $\sup_{t\le T}\mathbb E|Z_t|^2<\infty$ by [F1]. Each B or A half-step changes the state by a quantity bounded by $Ch(1+|z|)$, because $F$ has linear growth and $M^{-1}$ is fixed. For the O step, $p\mapsto ap+\eta$ with $0<a<1$, $\mathbb E[\eta\mid\mathcal F_n]=0$, and $\mathbb E|\eta|^2\le Ch$ by [L1], so $\mathbb E[|ap+\eta|^2\mid\mathcal F_n]\le |p|^2+Ch$. Expanding the squares of the finitely many B/A/O stage updates and using $2|x||y|\le h|x|^2+h^{-1}|y|^2$ shows $\mathbb E[1+|Z_{n+1}^B|^2\mid\mathcal F_n]\le(1+Ch)(1+|Z_n^B|^2)+Ch$. Iterating this scalar inequality for $Nh=T$ yields $\max_{n\le N}\mathbb E|Z_n^B|^2\le C_T(1+\mathbb E|Z_0|^2)$. [F1, L1, given, algebra]

1.2 Write $e_n=Z_n^B-Z_{t_n}$. Apply [L1] at the common state $Z_{t_n}$ and at the two actual states, and subtract the two one-step expansions. The result is [F1, L1, given, algebra]
$$e_{n+1}=e_n+h(b(Z_n^B)-b(Z_{t_n}))+\Delta_n+\delta_n,$$
where $\Delta_n=R^B(Z_n^B)-R^B(Z_{t_n})$ and $\delta_n=R^B(Z_{t_n})-R^E(Z_{t_n})$. Let $d_n=\mathbb E[\Delta_n\mid\mathcal F_{t_n}]$ and $M_{n+1}=\Delta_n-d_n$. The residual Lipschitz bound in [L1] gives $|d_n|\le Ch|e_n|$ and $\mathbb E|M_{n+1}|^2\le Ch^2\mathbb E|e_n|^2$. Put $r_n=\mathbb E[\delta_n\mid\mathcal F_{t_n}]$ and $Q_{n+1}=\delta_n-r_n$. Conditional Jensen and [L1], together with the exact-state moment bound from [F1], give $\mathbb E|r_n|^2\le Ch^4$ and $\mathbb E|Q_{n+1}|^2\le Ch^3$. Both $M_{n+1}$ and $Q_{n+1}$ have conditional mean zero. Hence, with $u_n=b(Z_n^B)-b(Z_{t_n})+d_n/h$, the error recurrence is $e_{n+1}=e_n+hu_n+r_n+M_{n+1}+Q_{n+1}$, where $|u_n|\le C|e_n|$ by global Lipschitz continuity of $b$ and the bound on $d_n$. [F1, L1, given, algebra]

2.1 Since $e_n+hu_n+r_n$ is $\mathcal F_{t_n}$-measurable, its cross expectation with the centered sum $M_{n+1}+Q_{n+1}$ is zero. Young's inequality and the bounds in step 1.2 give [F1, L1, A1, step 1.2, algebra]
$$\mathbb E|e_n+hu_n+r_n|^2\le(1+Ch)\mathbb E|e_n|^2+Ch^3,$$
$$\mathbb E|M_{n+1}+Q_{n+1}|^2\le2Ch^2\mathbb E|e_n|^2+2Ch^3\le Ch\mathbb E|e_n|^2+Ch^3.$$
Therefore $\mathbb E|e_{n+1}|^2\le(1+Ch)\mathbb E|e_n|^2+Ch^3$. Starting from $e_0=0$ and iterating gives
$$\mathbb E|e_n|^2\le Ch^3\sum_{j=0}^{n-1}(1+Ch)^j\le C_T h^3N e^{CT}\le C_T h^2$$
for each $n\le N$, because $Nh=T$. Taking the maximum over the finitely many grid indices proves the statement. AC enters only through [A1]. [F1, L1, A1, step 1.2, algebra] ∎
