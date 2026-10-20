---
id: lem-bandit-reward-table-has-fixed-conditional-laws
kind: lemma
title: "The independent reward-stack model has the prescribed conditional arm laws"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-stochastic-bandit-and-pseudo-regret, def-adversary-and-feedback-model, def-independent-random-elements, thm-independent-random-elements-have-product-joint-law, lem-measurable-functions-preserve-independence, thm-expectation-of-products-of-independent-random-variables, cor-expectation-of-an-indicator-is-probability, cor-expectation-linearity-monotonicity-and-modulus-bound, def-expectation-of-a-nonnegative-or-integrable-random-variable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§4.6, PDF p. 74 / printed p. 65: independent reward stacks, the reward-stack model, and Exercise 4.4 on equivalence with the sequential interaction model."
---

## Statement

In the finite reward-stack model, fix a round $t\in[n]$, an arm $i\in[k]$, an event $B\in\mathcal H_{t-1}$ with $B\subseteq\{A_t=i\}$, and a Borel set $C\subseteq\mathbb R$. Then
$$
\mathbb P(B\cap\{Y_t\in C\})=\mathbb P(B)P_i(C),\qquad \mathbb E[Y_t\mathbf 1_B]=\mu_i\mathbb P(B).
$$
In particular, the reward stack satisfies the fixed conditional reward-law and conditional-mean interface for finite-arm stochastic environments.

## Statement references

[[def-stochastic-bandit-and-pseudo-regret]]: the table entries are mutually independent, a policy uses only the revealed history and independent learner randomness, and each pull reveals the next unused entry of the chosen arm's stack.

[[def-adversary-and-feedback-model]]: the fixed conditional arm-law and conditional-mean identities required by the sequential stochastic reward model.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §4.6, PDF p. 74 / printed p. 65; Exercise 4.4.

## Facts & Assumptions

**Given:** A finite reward-stack model, a non-anticipating policy, a round $t\in[n]$, an arm $i\in[k]$, and an event $B\in\mathcal H_{t-1}$ contained in $\{A_t=i\}$.

[F1] The policy uses only $U$ and the previously revealed actions and rewards; on a fixed action history, the observed rewards are exactly the corresponding initial entries of the arm stacks ([[def-stochastic-bandit-and-pseudo-regret]]).

[F2] The learner randomization and all table entries form a finite independent family ([[def-independent-random-elements]]), whose joint law is the finite product of its marginal laws ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] For each arm $i$, every table entry has law $P_i$ and finite first absolute moment, with mean $\mu_i$ ([[def-stochastic-bandit-and-pseudo-regret]]).

[F4] Measurable functions of independent random elements remain independent ([[lem-measurable-functions-preserve-independence]]).

[F5] Expectations of finite products of mutually independent integrable real random variables factor ([[thm-expectation-of-products-of-independent-random-variables]]), and $\mathbb E[\mathbf 1_E]=\mathbb P(E)$ ([[cor-expectation-of-an-indicator-is-probability]]).

[F6] Expectation is the Lebesgue integral and is linear on integrable real random variables ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

1.1 Partition $B$ by the finitely many past action strings $\alpha=(a_1,\ldots,a_{t-1})\in[k]^{t-1}$. Let $c_j(\alpha)$ be the number of times arm $j$ occurs in $\alpha$, and write $B_\alpha=B\cap\{(A_1,\ldots,A_{t-1})=\alpha\}$. By the recursive non-anticipating policy rule, each $B_\alpha$ is measurable with respect to $U$ and the table entries $X_{s,j}$ with $s\le c_j(\alpha)$: along that fixed action string, those and only those stack entries have been revealed. [given, F1, construct]

2.1 If $B_\alpha$ is nonempty then $A_t=i$ on it, and the next reward is $Y_t=X_{c_i(\alpha)+1,i}$. This table entry is distinct from every coordinate determining $B_\alpha$. By [F2] it is independent of the vector of those coordinates, so the event $B_\alpha$ is independent of $\{X_{c_i(\alpha)+1,i}\in C\}$ for every Borel $C$. Its law is $P_i$, hence $\mathbb P(B_\alpha\cap\{Y_t\in C\})=\mathbb P(B_\alpha)P_i(C)$. [given, F1, F2, step 1.1]

3.1 The events $B_\alpha$ partition $B$. Summing the identity in step 2.1 over the finite set $[k]^{t-1}$ gives $\mathbb P(B\cap\{Y_t\in C\})=\mathbb P(B)P_i(C)$ for every Borel $C$. [given, step 2.1, algebra]

4.1 For each $\alpha$, the indicator $\mathbf 1_{B_\alpha}$ is a measurable function of the exposed-coordinate vector. By [F2] and [F4], it is independent of $X_{c_i(\alpha)+1,i}$. Both are integrable by [F3], so [F5] and [F6] give $\mathbb E[Y_t\mathbf 1_{B_\alpha}]=\mu_i\mathbb P(B_\alpha)$. Summing over the finite action strings yields $\mathbb E[Y_t\mathbf 1_B]=\mu_i\mathbb P(B)$. [given, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
