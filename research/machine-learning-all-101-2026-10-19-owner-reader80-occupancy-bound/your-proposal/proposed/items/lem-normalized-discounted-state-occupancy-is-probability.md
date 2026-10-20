---
id: lem-normalized-discounted-state-occupancy-is-probability
kind: lemma
title: "Normalized discounted occupancy is a probability distribution"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - def-finite-markov-decision-process
  - def-normalized-discounted-state-occupancy
  - lem-bounded-discounted-return-converges
  - thm-induction-principle
  - thm-geometric-series
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, supplementary material"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf"
      locator: "Appendix 10.1.1, equations (17)–(18), PDF p. 1."
    - title: "Eitan Altman, Constrained Markov Decision Processes"
      url: "https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf"
      locator: "Chapter 3 §3.1, discounted occupation measure, printed pp. 27–29 (PDF pp. 34–36)."
---

## Statement

Let a finite discounted CMDP, a stationary policy $\pi$, its finite-time state-mass vectors $\mu_t^\pi$, its normalized discounted occupancy $d^\pi$, and the expected discounted signal $J_g^\pi(\mu)$ be as defined above. Each $\mu_t^\pi$ is a probability distribution, $d^\pi$ is a probability distribution, and for every real $B\ge0$ and every transition signal $g:\mathcal X\to\mathbb R$ satisfying $|g(s,a,\rho,s')|\le B$ for all $(s,a,\rho,s')\in\mathcal X$, the series defining $J_g^\pi(\mu)$ converges absolutely and satisfies $|J_g^\pi(\mu)|\le B/(1-\gamma)$.

## Statement references

[[def-constrained-markov-decision-process|The initial state distribution and recursive finite-time state masses.]]

[[def-normalized-discounted-state-occupancy|The normalized occupancy formula.]]

[[def-discounted-cost-constraint|The finite-sum formula for expected discounted transition signals.]]

[[lem-bounded-discounted-return-converges|Absolute convergence and the uniform geometric bound for every bounded signal sequence.]]

## Facts & Assumptions

**Given:** A finite CMDP with initial distribution $\mu$, discount $0\le\gamma<1$, a stationary policy $\pi$, and the recursive state masses and occupancy defined in the linked items. For the signal bound, fix a real $B\ge0$ and a transition signal $g:\mathcal X\to\mathbb R$ with $|g(s,a,\rho,s')|\le B$ for every $(s,a,\rho,s')\in\mathcal X$.

[F1] [[def-constrained-markov-decision-process]]: $\mu_0^\pi=\mu$ and $\mu_{t+1}^\pi(s')=\sum_{s,a,\rho}\mu_t^\pi(s)\pi(a\mid s)p(s',\rho\mid s,a)$.

[F2] [[def-finite-markov-decision-process]]: for each admissible $(s,a)$, the joint next-state/reward masses are nonnegative and $\sum_{s',\rho}p(s',\rho\mid s,a)=1$.

[F3] [[def-finite-markov-decision-process]]: a stationary Markov policy has $\pi(a\mid s)\ge0$ and $\sum_{a\in A(s)}\pi(a\mid s)=1$.

[F4] [[def-normalized-discounted-state-occupancy]]: $d^\pi(s)=(1-\gamma)\sum_{t\ge0}\gamma^t\mu_t^\pi(s)$.

[F5] [[def-discounted-cost-constraint]]: $J_g^\pi(\mu)$ is the series of finite sums of the time-$t$ transition masses multiplied by $g(s,a,\rho,s')$ and $\gamma^t$.

[F6] [[thm-geometric-series]]: for $0\le\gamma<1$, $\sum_{t=0}^{\infty}\gamma^t=1/(1-\gamma)$.

[F7] [[lem-bounded-discounted-return-converges]]: every real sequence bounded in absolute value by $B$ has an absolutely convergent $\gamma$-discounted series whose absolute value is at most $B/(1-\gamma)$.

[F8] [[thm-induction-principle]]: a property holding at $0$ and preserved from each natural number to its successor holds for every natural number.

## Proof

1.1 The initial vector $\mu_0^\pi=\mu$ is nonnegative and sums to one. If $\mu_t^\pi$ is a probability distribution, then the recurrence and [F2]–[F3] give nonnegative next masses and $\sum_{s'}\mu_{t+1}^\pi(s')=\sum_s\sum_{a\in A(s)}\mu_t^\pi(s)\pi(a\mid s)\sum_{s',\rho}p(s',\rho\mid s,a)=\sum_s\mu_t^\pi(s)=1$. By [F8], every $\mu_t^\pi$ is a probability distribution. [F1, F2, F3, F8, given, algebra]

2.1 By step 1.1, $0\le\mu_t^\pi(s)\le1$ for every $s,t$, so each coordinate series in [F4] converges by comparison with the geometric series [F6]. Since $S$ is finite, its coordinate series can be summed termwise, giving $d^\pi(s)\ge0$ and $\sum_s d^\pi(s)=(1-\gamma)\sum_{t=0}^{\infty}\gamma^t\sum_s\mu_t^\pi(s)=(1-\gamma)\sum_{t=0}^{\infty}\gamma^t=1$ by [F6]. Thus $d^\pi$ is a probability distribution. [F4, F6, step 1.1, algebra]

3.1 For each $t$, the finite transition weights $\mu_t^\pi(s)\pi(a\mid s)p(s',\rho\mid s,a)$ are nonnegative and sum to one by step 1.1 and [F2]–[F3]. Hence their weighted sum of $g$ has absolute value at most $B$. Apply [F7] to this bounded sequence of time-$t$ signal sums; the series in [F5] converges absolutely and its absolute value is at most $B/(1-\gamma)$. [F2, F3, F5, F7, step 1.1, given] ∎
