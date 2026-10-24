---
id: thm-bellman-contraction-and-unique-fixed-point
kind: theorem
title: "Finite-MDP Bellman operators are gamma contractions with unique fixed points"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-bellman-optimality-operator
  - lem-finite-state-sup-norm-space-is-complete
  - thm-banach-fixed-point
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
      locator: "§§3.7–3.8, policy and optimal Bellman equations and uniqueness claim; §4.4, value iteration."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, discounted policy and optimal Bellman equations and uniqueness claims; PDF pp. 4–7."
---

## Statement

Let a finite MDP and a discount $0\le\gamma<1$ be fixed. For $U\in\mathbb R^S$, define $\|U\|_\infty=0$ if $S=\emptyset$, and $\|U\|_\infty=\max_{s\in S}|U(s)|$ otherwise. For every stationary policy $\pi$ and all $V,W\in\mathbb R^S$,

$$ \|T^\pi V-T^\pi W\|_\infty\le\gamma\|V-W\|_\infty. $$

The Bellman optimality operator satisfies the same inequality. Each of $T^\pi$ and $T^*$ has exactly one fixed point in $\mathbb R^S$. The contraction constant is the nonnegative number $\gamma$.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

## Facts & Assumptions

**Given:** A finite MDP, $0\le\gamma<1$, a stationary policy $\pi$, and $V,W\in\mathbb R^S$.

[F1] [[def-finite-markov-decision-process]]: $\pi(\cdot\mid s)$ and $P(\cdot\mid s,a)$ are probability distributions, and $r(s,a)$ is finite.

[F2] [[def-policy-bellman-operator]]: $T^\pi V$ is the policy-weighted finite average of $r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)V(s')$.

[F3] [[def-bellman-optimality-operator]]: $T^*V(s)$ is the maximum of those one-step action values over finite nonempty $A(s)$.

[F4] [[lem-finite-state-sup-norm-space-is-complete]]: the metric $d_\infty$ on $\mathbb R^S$ is complete.

[F5] [[thm-banach-fixed-point]]: a self-map of a nonempty complete metric space with contraction constant $q$ satisfying $0\le q<1$ has exactly one fixed point.

## Proof

1.1 The finite sums in [F2] and [F3] are real, so both formulas define self-maps of $\mathbb R^S$; when $S=\emptyset$ they are the unique empty self-maps. [given, F1, F2, F3]

1.2 For each state $s$, probability weights and the triangle inequality give $$ |(T^\pi V)(s)-(T^\pi W)(s)| \le\sum_a\pi(a\mid s)\gamma\sum_{s'}P(s'\mid s,a)|V(s')-W(s')| \le\gamma\|V-W\|_\infty. $$ Taking the maximum over $s$ proves the policy-operator contraction inequality; when $S=\emptyset$, both sides are $0$. [given, F1, F2, algebra]

1.3 Put $Q_V(s,a)=r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)V(s')$. For every action, [F1] gives $|Q_V(s,a)-Q_W(s,a)|\le\gamma\|V-W\|_\infty$. For two finite lists $(u_a)$ and $(v_a)$, each $u_a\le v_a+\max_b|u_b-v_b|$, so $\max_a u_a\le\max_a v_a+\max_b|u_b-v_b|$; exchanging the lists gives $|\max_a u_a-\max_a v_a|\le\max_a|u_a-v_a|$. Applying this at each $s$ proves the same contraction inequality for $T^*$. [given, F1, F3, algebra]

2.1 The zero function belongs to $\mathbb R^S$, so the common domain is nonempty; [F4] makes its metric complete. By definition, $d_\infty(V,W)=\|V-W\|_\infty$. Steps 1.2 and 1.3 show that each operator is a self-map with contraction constant $q=\gamma$, and the hypothesis $0\le\gamma<1$ is exactly [F5]'s required range. Applying [F5] separately to $T^\pi$ and $T^*$ gives one fixed point for each and uniqueness for each. [step 1.1, step 1.2, step 1.3, F4, F5, construct] ∎
## Remarks

The proof uses $\gamma$ itself as the contraction constant. No absolute-value reinterpretation is needed because the discounted domain already assumes $0\le\gamma<1$.
