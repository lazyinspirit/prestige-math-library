---
id: thm-policy-improvement
kind: theorem
title: "Greedy policy improvement and finite policy-iteration termination"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-countable
  - def-discounted-return-and-value-functions
  - def-axiom-of-choice
  - def-policy-bellman-operator
  - def-bellman-optimality-operator
  - lem-policy-value-satisfies-bellman-equation
  - thm-bellman-contraction-and-unique-fixed-point
  - alg-policy-iteration
  - lem-finite-set-has-max
  - lem-finite-state-sup-norm-space-is-complete
  - thm-banach-fixed-point
  - lem-limit-preserves-order
  - thm-induction-principle
  - thm-product-rule
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.2, deterministic policy-improvement theorem and proof, including its stochastic-policy extension; §4.3, policy iteration and arbitrary-tie cycling warning."
---

## Statement

Let a finite MDP and $0\le\gamma<1$ be fixed, and let $V^*$ denote the unique fixed point of $T^*$. If $S=\emptyset$, the statewise claims below are vacuous and the policy iteration procedure returns the unique empty policy after one evaluation, without Choice. If $S\ne\emptyset$, assume the Axiom of Choice. For a stationary policy $\pi$, let $V^\pi$ be its expected discounted state value. For a deterministic policy $\sigma$, define its associated stationary policy by $\widehat\sigma(a\mid s)=1$ if $a=\sigma(s)$ and $0$ otherwise, and interpret $T^\sigma$ and $V^\sigma$ as $T^{\widehat\sigma}$ and $V^{\widehat\sigma}$.

$$ Q_V(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s'). $$

If a deterministic policy $\pi'$ chooses an action maximizing $Q_{V^\pi}(s,a)$ at every state, then $V^{\pi'}(s)\ge V^\pi(s)$ for every $s$. If $(T^{\pi'}V^\pi)(s)>V^\pi(s)$ at any state, the value inequality is strict at some state.

For exact finite policy iteration, supply an initial deterministic policy and a finite ordered list of the actions at each state; evaluate each policy at its exact Bellman fixed point; retain the current action whenever it is already greedy; otherwise choose the earliest maximizing action in the supplied list. Every changed policy then strictly improves the value at some state and weakly improves it at every state. The procedure makes at most $N_{\rm det}-1$ changes, where $N_{\rm det}$ is the finite number of deterministic policies, and terminates at a deterministic policy whose value is $V^*$; this value dominates the value of every stationary policy.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[[def-axiom-of-choice|Choice for the nonempty-state path-law interpretation of policy values]].

## Facts & Assumptions

**Given:** A finite MDP, $0\le\gamma<1$, a stationary policy $\pi$, and (for policy iteration) the stated exact-evaluation procedure and finite action listings. In the nonempty-state branch, assume the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: Choice is required by the path-space chain construction used for expected discounted values.

[F1] [[def-finite-markov-decision-process]] and [[def-countable]]: $S$ and each $A(s)$ are finite; $\pi(\cdot\mid s)$ and $P(\cdot\mid s,a)$ are probability distributions.

[F2] [[def-discounted-return-and-value-functions]]: $V^\pi(s)$ is the expected discounted return from initial state $s$ under Choice.

[F3] [[lem-policy-value-satisfies-bellman-equation]]: $T^\pi V^\pi=V^\pi$.

[F4] [[def-policy-bellman-operator]] and [[def-bellman-optimality-operator]]: $T^\pi V$ is the $\pi$-weighted average of $Q_V(s,a)$, while $T^*V(s)=\max_{a\in A(s)}Q_V(s,a)$.

[F5] [[thm-bellman-contraction-and-unique-fixed-point]]: every $T^\mu$ and $T^*$ is a contraction with constant $\gamma$ and has a unique fixed point.

[F6] [[lem-finite-state-sup-norm-space-is-complete]]: the metric $d_\infty$ on $\mathbb R^S$ is complete.

[F7] [[thm-banach-fixed-point]]: iterates of each such contraction from any initial value converge to its unique fixed point.

[F8] [[alg-policy-iteration]]: evaluation is exact, the current action is retained whenever it maximizes $Q$, and any other tie is resolved by the supplied finite action list.

[F9] [[lem-finite-set-has-max]]: every nonempty finite set of real action values has an attained maximum.

[F10] [[lem-limit-preserves-order]]: an eventual non-strict inequality between convergent real sequences holds between their limits.

[F11] [[thm-induction-principle]]: a property true at the first index and preserved at each successor holds at all natural indices.

[F12] [[thm-product-rule]]: a finite Cartesian product of finite sets is finite, including the empty product.

## Proof

1.1 If $S=\emptyset$, all statewise inequalities are vacuous and the unique empty policy has no update; assume for the remaining steps that $S\ne\emptyset$. [A1] supplies the choice assumption for the path-law value in [F2], and [F3] gives its Bellman fixed-point identity. For each state $s$, [F3] and [F4] give $$ V^\pi(s)=\sum_{a\in A(s)}\pi(a\mid s)Q_{V^\pi}(s,a) \le \max_{a\in A(s)}Q_{V^\pi}(s,a)=(T^*V^\pi)(s). $$ The inequality holds because a probability-weighted average of finitely many real numbers is at most their attained maximum [F1, F9]. [given, A1, F1, F2, F3, F4, F9, algebra]

1.2 For every stationary policy $\nu$, the operator $T^\nu$ is monotone: if $U(s)\le W(s)$ for every $s$, then each coefficient $\nu(a\mid s)P(s'\mid s,a)$ is nonnegative and $\gamma\ge0$, so $(T^\nu U)(s)\le(T^\nu W)(s)$ for every $s$. [given, F1, F4, algebra]

2.1 If $\pi'$ is greedy, its action attains that maximum at every state, so $(T^{\pi'}V^\pi)(s)=(T^*V^\pi)(s)\ge V^\pi(s)$ for all $s$. [step 1.1, F4]

3.1 Define $U_0=V^\pi$ and $U_{n+1}=T^{\pi'}U_n$. Step 2.1 gives $U_0\le U_1$ pointwise; if $U_n\le U_{n+1}$ then step 1.2 gives $U_{n+1}=T^{\pi'}U_n\le T^{\pi'}U_{n+1}=U_{n+2}$. By [F11], $(U_n)$ is pointwise nondecreasing. [step 2.1, step 1.2, F11, construct]

4.1 The zero function belongs to $\mathbb R^S$, so $(\mathbb R^S,d_\infty)$ is nonempty; [F6] makes it complete. By [F5], $T^{\pi'}$ is a contraction, so Banach iteration [F7] makes $U_n$ converge in $d_\infty$ to its unique fixed point. By [F3] and uniqueness in [F5], that fixed point is $V^{\pi'}$. Since $|U_n(s)-V^{\pi'}(s)|\le d_\infty(U_n,V^{\pi'})$ for every $s$, the convergence is coordinatewise; from $U_n\ge U_0=V^\pi$, [F10] yields $V^{\pi'}\ge V^\pi$ pointwise. This proves the first value comparison. [step 3.1, F3, F5, F6, F7, F10, construct]

4.2 If $(T^{\pi'}V^\pi)(s_0)>V^\pi(s_0)$, then $U_1(s_0)>U_0(s_0)$. Step 3.1 makes $U_n(s_0)\ge U_1(s_0)$ for every $n\ge1$; passing to the limit with [F10] gives $V^{\pi'}(s_0)\ge U_1(s_0)>V^\pi(s_0)$. [step 3.1, F10, algebra]

5.1 Consider one update in the stated policy-iteration procedure. Exact evaluation returns $V^{\pi_k}$ because it is the unique fixed point of $T^{\pi_k}$ by [F3] and [F5]. At each state the updated action maximizes $Q_{V^{\pi_k}}$; if the old action is already a maximizer it is retained, and otherwise its value is strictly below the attained maximum. Therefore $T^{\pi_{k+1}}V^{\pi_k}\ge V^{\pi_k}$ at all states, with strict inequality wherever the policy changed. Steps 4.1–4.2 show that every changed policy weakly improves all state values and strictly improves at least one. [given, F3, F4, F5, F8, F9, step 4.1, step 4.2]

6.1 List the finite states as $s_1,\ldots,s_n$ and each action set as $A(s_i)=\{a_{i,1},\ldots,a_{i,m_i}\}$. A deterministic policy is one tuple of indices $(j_1,\ldots,j_n)$ with $1\le j_i\le m_i$, so the set of such policies is a finite Cartesian product by [F12]; for $S=\emptyset$ it is the singleton empty product. By step 5.1, each changed iteration strictly increases some coordinate and never decreases any, so no policy can recur, since a repeated policy has the same unique exact value vector. Hence at most $N_{\rm det}-1$ changes occur and the procedure terminates. [given, F1, F8, F12, step 5.1]

7.1 At termination, the update leaves every action unchanged, which by [F8] means the terminal deterministic policy is greedy with respect to its exact value $V^\pi$. Thus $T^\pi V^\pi=T^*V^\pi$ by [F4]; with [F3], this says $T^*V^\pi=V^\pi$, so uniqueness in [F5] gives $V^\pi=V^*$. [step 6.1, F3, F4, F5, F8]

8.1 For any stationary policy $\mu$, $T^\mu V^*\le T^*V^*=V^*$ because the former is a probability-weighted average of the same action values. Iterating $W_0=V^*$, $W_{n+1}=T^\mu W_n$, monotonicity as in step 1.2 makes $W_n$ nonincreasing. The domain is nonempty by step 4.1 and complete by [F6], so [F5]–[F7] make these iterates converge to the unique fixed point of $T^\mu$, which equals $V^\mu$ by [F3]. Since $|W_n(s)-V^\mu(s)|\le d_\infty(W_n,V^\mu)$ for every $s$, convergence is coordinatewise; [F10] gives $V^\mu\le V^*$. Therefore the terminal policy's value dominates every stationary policy. [step 7.1, step 1.2, step 4.1, F1, F3, F4, F5, F6, F7, F10] ∎
## Remarks

The path-law interpretation of $V^\pi$ carries the stated Choice assumption. The weighted-average inequalities, finite maxima, and finite policy iteration after action lists are supplied use no additional choice principle.
