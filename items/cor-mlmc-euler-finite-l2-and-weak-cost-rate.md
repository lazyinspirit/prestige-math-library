---
id: cor-mlmc-euler-finite-l2-and-weak-cost-rate
kind: corollary
title: "Finite-L2 strong and conditional weak Euler MLMC cost"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - thm-mlmc-complexity-under-rate-assumptions
  - thm-shared-brownian-euler-level-correction-rates
  - thm-euler-maruyama-weak-order-one-under-backward-regularity
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §§2–3"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
---

## Statement

Assume the Axiom of Choice and the exact finite-$L^2$ SDE, initial-value, coefficient, and nested-grid hypotheses of [[thm-shared-brownian-euler-level-correction-rates]], with $0<T\le1$, fixed integer $M\ge2$, and a globally Lipschitz payoff $\varphi$. For every $\ell\ge0$, set $h_\ell=T M^{-\ell}$ and $P_\ell=\varphi(Y_T^{h_\ell})$ for this same SDE, with target $\mathbb E\varphi(X_T)$. These levels give the infinite compatible family required by [[thm-mlmc-complexity-under-rate-assumptions]]. The finite-$L^2$ contract here is the globally state-Lipschitz and linear-growth coefficient condition, the half-Hölder time modulus, an adapted initial value independent of future Brownian increments, and $\mathbb E|X_0|^2<\infty$. With shared Brownian increments within each fine/coarse pair and independent sample blocks across levels, the strong-route rates are $(\alpha,\beta)=(1/2,1)$ and the MLMC work is $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$.

If, in addition, $\varphi$ is bounded and its backward value function $u(t,x)=\mathbb E[\varphi(X_T^{t,x})]$ solves the backward equation with the mixed derivative and polynomial-growth bounds and the $p\ge2q+8$ moment condition in [[thm-euler-maruyama-weak-order-one-under-backward-regularity]], then the weak bias rate is $\alpha=1$ while $\beta=1$ and the same logarithmic work bound follows. In the strong branch $P_0\in L^2$ by the finite-$L^2$ scheme moment bound and the Lipschitz payoff; in the weak branch it is bounded. The level-zero path has finite work, and because $h_0=T$ is fixed, enlarging the rate constants makes its variance and work satisfy the same bounds. This second branch is conditional on backward regularity; Lipschitz continuity of $\varphi$ alone does not imply it.

## Facts & Assumptions

**Given:** AC; the finite-$L^2$ contract and sequence of levels in the Statement; a globally Lipschitz payoff; and, only for the weak branch, the bounded-payoff backward regularity and moment contract. The level-zero correction is $P_0$.

[F1] [[thm-shared-brownian-euler-level-correction-rates]]: under the finite-$L^2$ SDE contract and common nested Brownian increments, the level-pair correction has variance $O(h_\ell)$, the strong-payoff bias is $O(h_L^{1/2})$, and one coupled path-pair sample costs $O(h_\ell^{-1})$; the stated backward regularity improves only the bias to $O(h_L)$.

[F2] [[thm-euler-maruyama-weak-order-one-under-backward-regularity]]: the weak-rate conclusion requires a bounded payoff, a solution of the stated backward equation with mixed derivatives through two time and four space derivatives of polynomial growth, and the specified moment bound; under those premises, the weak bias is $O(h)$.

[F3] [[thm-mlmc-complexity-under-rate-assumptions]]: with $\gamma=1$, the case $\beta=1$ gives work $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$ for either $\alpha=1/2$ or $\alpha=1$.

[A1] This corollary assumes AC, as do the exact Euler rate suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Under the strong-route part of [F1], the positive-level bias exponent is $\alpha=1/2$, the correction-variance exponent is $\beta=1$, and the cost exponent is $\gamma=1$. At level $0$, the finite-$L^2$ scheme moment bound and Lipschitz payoff give $P_0\in L^2$, while the single Euler path has finite work. Since $h_0=T$ is fixed, enlarge the constants so the level-zero variance and work satisfy the same rate bounds. Thus the all-level rates meet $\alpha\ge1/2$ and the hypotheses of [F3], which gives MSE at most $\epsilon^2$ with work $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$. [A1, F1, F3, given]

2.1 Under the additional bounded-payoff and backward-regularity premises of [F2], its weak error result gives $\alpha=1$. The shared-level result [F1] leaves the positive-level variance and work exponents at $\beta=\gamma=1$. At level $0$, $P_0$ is bounded in this branch, and the one-step path has finite work; since $h_0=T$ is fixed, enlarging constants includes both in the theorem's rate assumptions. Thus [F3] gives the same logarithmic work bound. The proof uses the supplier's backward regularity premise and does not infer it from the payoff being Lipschitz. [A1, F1, F2, F3, step 1.1, given] ∎
