---
id: thm-poisson-tau-leap-weak-order-one-with-exit-bound
kind: theorem
title: "Weak order one for finite-state Poisson tau-leaping with an exit bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - lem-poisson-tau-leap-one-step-weak-defect
  - lem-poisson-count-law-normalization-and-moments
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - thm-finite-state-gillespie-and-next-reaction-exactness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tiejun Li, Analysis of explicit tau-leaping schemes for simulating chemically reacting systems"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2015/mms_6_417_Li.pdf"
      locator: "§4, Theorem 4.3 and the full backward-equation proof, PDF pp. 12–15 (journal pp. 429–432)."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§§3.1 and 3.3, tau-leaping and invalid-population warning, PDF pp. 2–5."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let
$E\subseteq\mathbb Z_{\ge0}^d$ be finite, let
$A=\max_{x\in E}\sum_j a_j(x)<\infty$ for the system
[[def-reaction-network-propensity-system-and-generator]], and assume
$a_j(x)=0$ whenever $x+\nu_j\notin E$. Extend the exact chain by making every
state outside $E$ absorbing, and let $K_h$ be the tau-leap kernel in
[[alg-explicit-poisson-tau-leaping]] with the same absorbing-invalid-state
convention. For $T=Nh$ with $h>0$ and $N\in\mathbb N$, an initial state $x_0\in E$, and
a bounded payoff $g:\mathbb Z^d\to\mathbb R$, run the leap on the uniform grid
with draw budget $B\ge NR$ (or $B=\infty$), so it supplies a terminal state $Y_N$.
Then the leap satisfies
$$\left|\mathbb E_{x_0}g(Y_N)-\mathbb E_{x_0}g(X_T)\right| \le4A^2T h\,\|g\|_\infty.$$
Its probability of ever entering an invalid state by $T$ is at most
$\tfrac12A^2T h$. This separately bounds the absorbing invalid-state branch;
the result makes no claim for unbounded rates.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the finite-state reaction system and
admissibility condition in the Statement, a nonexplosive exact chain with
that channel law, a uniform positive step $h$ with $T=Nh$, draw budget
$B\ge NR$ or $B=\infty$, and bounded $g$.

[F1] [[def-reaction-network-propensity-system-and-generator]]: channel $j$
has rate $a_j(x)$ and update $x+\nu_j$; if the update is outside $E$, its
propensity is zero.

[F2] [[alg-explicit-poisson-tau-leaping]]: with the stated sufficient budget, the tau-leap kernel uses
conditionally independent $\operatorname{Pois}(a_j(x)h)$ counts and freezes
the first invalid endpoint.

[F3] [[lem-poisson-tau-leap-one-step-weak-defect]]: the one-step kernels obey
$\|K_hg-Q_hg\|_\infty\le4A^2h^2\|g\|_\infty$.

[F4] [[lem-poisson-count-law-normalization-and-moments]]: for a Poisson count
with parameter $\theta$, $\mathbb E[K(K-1)]=\theta^2$.

[F5] [[thm-finite-state-gillespie-and-next-reaction-exactness]]: under
Countable Choice and Dependent Choice, the finite system has its specified
exact path law and finitely many events on finite horizons.

[A1] Countable Choice is assumed by [F3] for the exact reaction-chain event
law. [[def-countable-choice]]

[A2] Dependent Choice is assumed by [F5] for the countable input streams.
[[def-dependent-choice]]

## Proof

**Given:** The inputs above, with exact transition kernel $Q_h$ and tau-leap
kernel $K_h$ on the common countable state space.

1.1 At most $NR$ scalar Poisson draws are needed for $N$ steps, so the stated budget never exhausts; absorption or an invalid endpoint instead holds the state through $T$. The terminal leap law is therefore $K_h^N$. Both $K_h$ and $Q_h$ are Markov kernels: they preserve nonnegative functions and constants, so each is a contraction in the supremum norm. Outside $E$, both hold the state fixed by the stated extension. [given, F1, F2, F5, A1, A2]

2.1 The finite algebraic identity $$K_h^N-Q_h^N=\sum_{r=0}^{N-1}K_h^{N-1-r}(K_h-Q_h)Q_h^r$$ follows by cancellation of consecutive terms. Apply it to $g$, use the contraction from step 1.1 and the one-step bound [F3] to obtain $$\|(K_h^N-Q_h^N)g\|_\infty \le N\,4A^2h^2\|g\|_\infty=4A^2T h\|g\|_\infty.$$ Evaluating at $x_0$ proves the weak-order bound. [F3, A1, A2, step 1.1, algebra]

3.1 While the leap state is in $E$, any single channel count produces a state in $E$ by [F1]. Therefore an invalid endpoint requires at least two total channel firings in that step. If $M_n=\sum_jK_{j,n}$, independence [F2] and the factorial moment [F4] give $$\mathbb E[M_n(M_n-1)\mid Y_n] =\sum_j(a_j(Y_n)h)^2+2\sum_{i<j}a_i(Y_n)a_j(Y_n)h^2 =(\lambda(Y_n)h)^2\le(Ah)^2.$$ Since $\mathbf 1_{\{M_n\ge2\}}\le M_n(M_n-1)/2$, the conditional invalid-step probability is at most $A^2h^2/2$. A union bound over $N=T/h$ steps gives $\mathbb P(\text{invalid by }T)\le A^2T h/2$. [F1, F2, F4, algebra] ∎
