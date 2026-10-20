---
id: lem-finite-horizon-mdp-policy-occupancy
kind: lemma
title: Finite-horizon MDP policy occupancy is a probability distribution
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-sum-over-a-finite-index-set
  - lem-finite-sum-laws
  - lem-a-double-sum-over-finite-index-sets-may-be-interchanged
  - thm-induction-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite recursion and natural-number induction are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.6, finite MDP transition probabilities and policy-induced state distributions, printed pp. 67–69."
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "§2, PDF p. 1, definition of the finite-horizon average state occupancy d_pi."
---

## Statement

Let a finite Markov decision process have a nonempty finite state set $S$ and finite nonempty action sets $A(s)$, with state transition probabilities $P(s'\mid s,a)$ obtained by summing its joint reward-transition law over rewards. Let $T\ge1$ be an integer, let $\mu_0:S\to[0,1]$ satisfy $\sum_{s\in S}\mu_0(s)=1$, and let $\pi(a\mid s)$ be a stationary Markov policy. Define recursively

$$\mu_{t+1}(s')=\sum_{s\in S}\sum_{a\in A(s)}\mu_t(s)\pi(a\mid s)P(s'\mid s,a),\qquad 0\le t<T.$$

Then each $\mu_t$ is a probability vector on $S$, and the finite-horizon average occupancy

$$d_\pi(s)=\frac1T\sum_{t=0}^{T-1}\mu_t(s)$$

is also a probability vector. This construction uses only finite sums and does not require an infinite-path probability extension.

## Statement references

[[def-finite-markov-decision-process]]: the finite state/action sets, row-normalized joint reward-transition law, derived $P(s'\mid s,a)$, and stationary Markov policy.

[[def-sum-over-a-finite-index-set]]: finite-index sums are well-defined and independent of enumeration.

[[lem-finite-sum-laws]]: finite sums preserve nonnegativity, add termwise, and commute with scalar multiplication.

[[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]: finite sums over two finite index sets may be interchanged.

[[thm-induction-principle]]: a property proved at $0$ and preserved by successors holds for every natural index.

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf): §3.6, printed pp. 67–69.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): §2, PDF p. 1.

## Facts & Assumptions

**Given:** A nonempty finite MDP state set $S$, finite nonempty action sets $A(s)$, a normalized initial vector $\mu_0$, a stationary Markov policy $\pi$, and an integer horizon $T\ge1$.

[A1] $\mu_0$ is nonnegative with finite sum one, and $T$ is a positive integer.

[L1] At a successor step $t<T$, assume $\mu_t$ is nonnegative and $\sum_s\mu_t(s)=1$.

[F1] [[def-finite-markov-decision-process]]: the joint masses $p(s',\rho\mid s,a)$ are nonnegative and sum to one over $(s',\rho)$; $P(s'\mid s,a)=\sum_\rho p(s',\rho\mid s,a)$; and each policy row $\pi(\cdot\mid s)$ is a probability vector.

[F2] [[def-sum-over-a-finite-index-set]]: sums over finite index sets are the enumeration-independent finite sums.

[F3] [[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]: the order of two finite sums may be interchanged.

[F4] [[lem-finite-sum-laws]]: finite sums preserve nonnegative inequalities, add termwise, and satisfy $\sum_i c a_i=c\sum_i a_i$.

[F5] [[thm-induction-principle]]: a property of $t\in\mathbb N$ holds for every $t$ if it holds at zero and the successor step preserves it.

## Proof

1.1 At $t=0$, $\mu_0$ is nonnegative and has sum one by [A1]. [A1]

1.2 Fix $t<T$ and assume [L1]. Every term in the recursion for $\mu_{t+1}(s')$ is nonnegative by [F1]. For each admissible $(s,a)$, [F1] and finite-sum interchange [F3] give $\sum_{s'\in S}P(s'\mid s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)=1$. Interchange the finite state sums and factor constants using [F2]–[F4]: $\sum_{s'\in S}\mu_{t+1}(s')=\sum_{s'\in S}\sum_{s\in S}\sum_{a\in A(s)}\mu_t(s)\pi(a\mid s)P(s'\mid s,a)=\sum_{s\in S}\mu_t(s)\sum_{a\in A(s)}\pi(a\mid s)\sum_{s'\in S}P(s'\mid s,a)=\sum_{s\in S}\mu_t(s)\sum_{a\in A(s)}\pi(a\mid s)=\sum_{s\in S}\mu_t(s)=1$. The calculation and nonnegativity prove that $\mu_{t+1}$ is a probability vector. [L1, F1, F2, F3, F4, algebra]

2.1 Step 1.1 proves the base case and step 1.2 proves the successor case, so [F5] gives nonnegative normalized vectors $\mu_t$ for every $0\le t\le T$. [F5, step 1.1, step 1.2]

3.1 Every term in $d_\pi(s)$ is nonnegative. Summing over $s$ and using the finite-sum scaling law [F4] gives $\sum_s d_\pi(s)=T^{-1}\sum_{t=0}^{T-1}\sum_s\mu_t(s)=T^{-1}\sum_{t=0}^{T-1}1=1$, because there are exactly $T$ indices and $T\ge1$. Hence $d_\pi$ is a probability vector. [A1, F2, F4, step 2.1, algebra] ∎
