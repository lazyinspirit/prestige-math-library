---
id: alg-td-zero-prediction
kind: algorithm
title: Tabular TD(0) policy prediction
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-discounted-return-and-value-functions
  - def-policy-bellman-operator
  - lem-policy-value-satisfies-bellman-equation
  - def-episodic-returns-td-errors-and-policy-support
  - thm-ionescu-tulcea-construction-of-a-markov-chain
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§6.1, equation (6.2), TD(0) prediction update; §3.7, policy-value Bellman equation."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.1.2, equations (2.6)–(2.7), TD(0) prediction and its one-step sampled target."

---

## Definition

**Inputs:** A finite MDP with nonempty state set $S$, discount $0\le\gamma<1$, terminal set $S_\dagger\subseteq S$, stationary policy $\pi$, an initial-state rule specifying a distribution on $S$ at each episode boundary (a fixed distribution $\nu$ sampled independently for each episode is a special case), an episode budget $m\in\mathbb N\cup\{\infty\}$, an initial table $V_0:S\to\mathbb R$ with $V_0(s)=0$ on $S_\dagger$, and a step-size rule giving $\alpha_n(S_n)\in[0,1]$ from the available history before the next reward and state are observed. Deterministic per-state sequences $\alpha_k(s)$ indexed by visit count are a special case. Assume the Axiom of Choice for the path laws defining $V^\pi$, and that every episode used reaches $S_\dagger$ almost surely from its start state.

Interpret successive draws on finite discrete transition-record spaces, including a restart record at each episode boundary. Conditional on the full available history and its current state $s$, choose the action using $\pi(a\mid s)$ and the next reward/state using $p(s',\rho\mid s,a)$; the initial-state rule gives the restart kernel. Require all sampling and step-size rules to be measurable with respect to their available histories. The table and counts are computed from these records. Under the stated AC assumption, the history-dependent kernel construction supplies this law, with a fixed stop symbol after a finite budget.

**Output:** The value table after every transition update and after every completed episode. A finite budget returns the final table after those episodes; budget $\infty$ specifies the successive tables indefinitely, with no final output or convergence assertion.

Initialize $V=V_0$ and visit counts $C(s)=0$ for $s\notin S_\dagger$. For each episode allowed by the budget, sample its start state using the initial-state rule. If it is terminal, end that episode without an update. Otherwise, at each current nonterminal state $S_n$, sample $A_n$ from $\pi(\cdot\mid S_n)$, obtain $\alpha_n(S_n)$ from the step-size rule, and then observe $(R_{n+1},S_{n+1})$ from the MDP's joint reward-transition law conditional on the available history and selected pair. For a visit-index schedule use $k=C(S_n)$. Form

$$
\delta_n^V=R_{n+1}+\gamma V_n(S_{n+1})-V_n(S_n),
$$

where the continuation term is zero when $S_{n+1}\in S_\dagger$. Update

$$
V_{n+1}(S_n)=V_n(S_n)+\alpha_n(S_n)\delta_n^V.
$$

Leave every other coordinate unchanged, increment $C(S_n)$, and output the updated table. If $S_{n+1}$ is terminal, end the episode; otherwise continue from $S_{n+1}$. The next episode starts by applying the initial-state rule again, retaining the table and counts; stop after $m$ completed episodes when $m$ is finite. Thus the sampled transitions use the policy whose value is estimated. This is a one-step bootstrapped prediction procedure and makes no convergence claim.

## Definition references

[[thm-ionescu-tulcea-construction-of-a-markov-chain|Under AC, successive history-dependent probability kernels give the sampling law]].

[[def-finite-markov-decision-process|The finite joint reward-transition law and stationary policies]].

[[def-discounted-return-and-value-functions|The discounted return and state value under a stationary policy]].

[[def-policy-bellman-operator|The policy Bellman operator]].

[[lem-policy-value-satisfies-bellman-equation|The policy value is a fixed point of its Bellman operator]].

[[def-episodic-returns-td-errors-and-policy-support|The episodic return and state TD-error conventions]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
