---
id: lem-zeta-explicit-formula-zero-free-error-balance
title: "Zeta explicit formula zero free error balance"
kind: lemma
status: draft
origin: pipeline
deps: [thm-von-mangoldt-explicit-formula-truncated, thm-riemann-zeta-classical-zero-free-region, lem-zeta-reciprocal-zero-sum-bound, def-half-weighted-chebyshev-psi]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a77.2, proof of Theorem 7.7"
      url: https://kskedlaya.org/ant/part-2-4.html
proof_strategy: direct argument
---

## Statement

For $x\ge2$ and finite $T\ge3$, the classical region and truncated explicit formula give
$$\psi(x)-x=O\left(xe^{-c_0\log x/\log(T+2)}\log^2T+\frac{x\log^2(xT)}{T}+\log x\right).$$
Constants may be enlarged and the positive region constant decreased. The zero sum used in the proof is finite.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-von-mangoldt-explicit-formula-truncated]]: For $x,T\ge2$, $\psi_0(x)-x=-\sum_{|\Im\rho|<T}\frac{x^\rho}{\rho}-\frac{\zeta'(0)}{\zeta(0)}-\frac12\log(1-x^{-2})+O\!\left(\frac{x\log^2(xT)}T+(\log x)\min\{1,\frac{x}{T\langle x\rangle}\}\right),$ where $\langle x\rangle$ is the distance to the nearest prime power other than possibly $x$. The zero sum is finite and counts multiplicities.

[F2] [[thm-riemann-zeta-classical-zero-free-region]]: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

[F3] [[lem-zeta-reciprocal-zero-sum-bound]]: For $T\ge2$, the sum of $1/|\rho|$ over nontrivial zeros with $0<|\operatorname{Im}\rho|\le T$ is $O(\log^2T)$, with multiplicity. Adjoining any real nontrivial zeros preserves the estimate.

[F4] [[def-half-weighted-chebyshev-psi]]: For $x>0$, define $\psi_0(x)=\sum_{n<x}\Lambda(n)+\begin{cases}\Lambda(x)/2,&x\in\mathbb Z_{>0},\\0,&x\notin\mathbb Z_{>0}.\end{cases}$ This differs at prime powers from the right-continuous $\psi(x)=\sum_{n\le x}\Lambda(n)$ of def-chebyshev-psi-function.

## Proof

1.1 For each zero in the finite sum $|\operatorname{Im}\rho|<T$, the region implies $|x^\rho|\le x\exp(-c_0\log x/\log(T+2))$. Summing absolute values and using the reciprocal estimate, including any real zeros, bounds the entire zero sum by the first displayed error. [F2, F3]

2.1 The supplied truncation error is at most $O(x\log^2(xT)/T+\log x)$ because its minimum is at most one. The fixed constant $\zeta'(0)/\zeta(0)$ and $\log(1-x^{-2})$ are bounded for $x\ge2$. Finally $|\psi(x)-\psi_0(x)|\le(\log x)/2$, so replacing the half-weighted value gives the asserted error, including prime-power endpoints. The supplied formula holds for all x,T at these bounds; if a contour construction avoids ordinates, a non-ordinate in [T,T+1] has comparable bounds. [F1, F4, step 1.1] ∎
