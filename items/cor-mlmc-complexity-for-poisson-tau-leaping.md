---
id: cor-mlmc-complexity-for-poisson-tau-leaping
kind: corollary
title: "MLMC work bound for bounded finite-state Poisson tau-leaping"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-poisson-tau-leap-weak-order-one-with-exit-bound
  - thm-minimum-intensity-tau-leap-level-variance
  - alg-critical-reaction-binomial-guarded-tau-leaping
  - def-mlmc-hierarchy-and-coupled-corrections
  - lem-mlmc-estimator-moments-and-mse
  - thm-mlmc-complexity-under-rate-assumptions
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David F. Anderson, Desmond J. Higham, and Yu Sun, Complexity of multilevel Monte Carlo tau-leaping"
      url: "https://strathprints.strath.ac.uk/51740/1/Anderson_etal_SIAM_2014_Complexity_of_multilevel_monte_carlo_tau_leaping.pdf"
      locator: "§§2–4, tau-leap coupling, correction variance, and cost model, PDF pp. 3–15 (journal pp. 3108–3120)."
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2015/MLMC_Giles2008.pdf"
      locator: "Theorem 3.1 and its proof, the generic bias/variance/work rate result."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice, and the finite-state hypotheses of
[[thm-poisson-tau-leap-weak-order-one-with-exit-bound]] and
[[thm-minimum-intensity-tau-leap-level-variance]], with bounded payoff $g$.
Use levels $h_\ell=T2^{-\ell}$ and couple adjacent Poisson tau-leap paths by
the shared-minimum construction. Under the work convention that each channel
Poisson draw, propensity evaluation, and stoichiometric update has unit cost,
for each $\ell\ge1$ one correction sample costs at most $C h_\ell^{-1}$:
there are $T/h_\ell$ fine half intervals, each using at most $3R$ shared
and residual Poisson draws and $O(R)$ propensity and update work. The base-level sample uses one path and costs $O(R)$, which
is $O(h_0^{-1})$ for fixed $T$. The level bias is $O(h_L)$ and the
correction variance is $O(h_\ell)$. Therefore, for all
sufficiently small $\epsilon>0$, deterministic sample counts in the generic
multilevel estimator can achieve mean square error at most $\epsilon^2$ with
work
$$O\!\left(\epsilon^{-2}(\log\epsilon^{-1})^2\right).$$
This conclusion applies only to the explicit Poisson leap and the bounded
finite-state hypotheses above. It is not a correctness or error guarantee
for the guarded binomial algorithm
[[alg-critical-reaction-binomial-guarded-tau-leaping]].

## Facts & Assumptions

**Given:** The geometric hierarchy, adjacent-level coupling, finite-state
error hypotheses, and unit-cost convention in the Statement.

[F1] [[thm-poisson-tau-leap-weak-order-one-with-exit-bound]]: the payoff bias
at level $\ell$ is at most $C_bh_\ell$.

[F2] [[thm-minimum-intensity-tau-leap-level-variance]]: the adjacent-level
correction variance is at most $C_vh_\ell$.

[F3] [[def-mlmc-hierarchy-and-coupled-corrections]] and
[[lem-mlmc-estimator-moments-and-mse]]: the finite multilevel estimator
telescopes in expectation and has variance equal to the sum of level
correction variances divided by their sample counts.

[F4] [[thm-mlmc-complexity-under-rate-assumptions]]: if bias is $O(h^\alpha)$,
correction variance is $O(h^\beta)$, and level cost is $O(h^{-1})$, the
stated MLMC work upper bounds apply.

[A1] Countable Choice is assumed through the exact finite-state chain used in
[F1]. [[def-countable-choice]]

[A2] Dependent Choice is assumed through the countable random input stream
used to define that chain. [[def-dependent-choice]]

## Proof

**Given:** Countable Choice, Dependent Choice, and the assumptions above.

1.1 For $\ell\ge1$, the fine and coarse paths use $T/h_\ell$ and $T/h_{\ell-1}$ steps, respectively; both ratios are integers on the dyadic hierarchy. On each fine half interval, each channel uses one shared and two residual Poisson counts, hence at most $3R$ scalar draws and $O(R)$ propensity and update work; the two coarse count vectors are accumulated over each coarse interval. Thus the correction cost is $O(T R/h_\ell)=O(h_\ell^{-1})$ for fixed $T$. At level zero, a single path takes one step and uses $O(R)$ work; since $h_0=T>0$ is fixed, this is also $O(h_0^{-1})$ after changing the constant. [given, algebra]

2.1 By [F1] the bias exponent in [F4] is $\alpha=1$. By [F2], every adjacent-level variance for $\ell\ge1$ is $O(h_\ell)$. At level zero, $\Delta_0=g(Y_T)$, so $\operatorname{Var}(\Delta_0)\le\mathbb E[g(Y_T)^2]\le\|g\|_\infty^2$; since $h_0=T>0$, increasing the variance constant gives the required $O(h_0)$ bound there as well. Thus the variance exponent for all levels is $\beta=1$. Apply [F4] with refinement factor $2$ and these exponents. Its $\beta=1$ case gives $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$ work while controlling the MSE by [F3]. [F1, F2, F3, F4, A1, A2, step 1.1] ∎
