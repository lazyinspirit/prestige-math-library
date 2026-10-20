---
id: def-learned-mdp-model
kind: definition
title: "Finite learned transition and reward models"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - lem-finite-set-has-max
  - lem-of-abs-value
  - lem-of-triangle-inequality
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition-in-progress"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "Chapter 8 §§8.1–8.3, printed pp. 195–205: model/sample-model conventions and deterministic Dyna-Q model."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.1, PDF pp. 3–4: finite MDP transition and reward model; §5.1, PDF pp. 25–26: learned-model distribution shift."
---

## Definition

Let the true environment be a finite Markov decision process with nonempty finite state set $S$, nonempty finite action sets $A(s)$, a finite reward alphabet contained in $[0,1]$, and joint next-state/reward probabilities $p(s',\rho\mid s,a)$. Write $D=\{(s,a):s\in S,\ a\in A(s)\}$, and let $r(s,a)$ and $P(s'\mid s,a)$ be the expected reward and next-state probabilities obtained by summing this joint law. A finite learned model on the same state and action sets consists of estimates $\hat r:D\to[0,1]$ and probability distributions $\hat P(\cdot\mid s,a)$ on $S$ for every $(s,a)\in D$. The estimated transition table is a probability kernel on the finite discrete spaces.

For each $(s,a)\in D$, define the reward error $e_r(s,a)=|r(s,a)-\hat r(s,a)|$ and transition error

$$e_P(s,a)=\frac12\sum_{s'\in S}|P(s'\mid s,a)-\hat P(s'\mid s,a)|.$$

For any subset $C\subseteq D$, define $\epsilon_r(C)=\max_{(s,a)\in C}e_r(s,a)$ and $\epsilon_P(C)=\max_{(s,a)\in C}e_P(s,a)$ when $C\ne\emptyset$, and set both quantities to $0$ when $C=\emptyset$. These are uniform expected-reward and total-variation errors on $C$; the learned model definition makes no accuracy assertion.

## Definition references

[[def-finite-markov-decision-process|The true finite MDP has finite states, state-specific finite nonempty actions, and a joint next-state/reward law whose marginals define the expected reward and transition probabilities.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel assigns a probability measure to every input and has measurable event sections; finite discrete tables satisfy this condition.]]

[[def-total-variation-distance-for-probability-laws|Total variation of two probability laws is the supremum of their event-probability difference, with no half-factor in that supremum convention.]]

[[lem-total-variation-half-l1-formula-on-a-countable-space|On a finite or countable discrete space, total variation equals one half of the sum of the absolute singleton-mass differences.]]

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Levine, Kumar, Tucker, and Fu, *Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems*](https://arxiv.org/pdf/2005.01643).

## Facts & Assumptions

**Given:** A finite MDP with nonempty finite $S$ and $A(s)$, reward alphabet contained in $[0,1]$, joint masses $p(s',\rho\mid s,a)$, and proposed estimates $\hat r$ and $\hat P$ satisfying the Definition.

[F1] [[def-finite-markov-decision-process]]: each joint row $p(\cdot,\cdot\mid s,a)$ is a probability mass function; $r(s,a)=\sum_{s',\rho}\rho p(s',\rho\mid s,a)$ and $P(s'\mid s,a)=\sum_\rho p(s',\rho\mid s,a)$.

[F2] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-measure sections and measurable event sections; on finite discrete input and output spaces every event section is measurable.

[F3] [[def-total-variation-distance-for-probability-laws]] and [[lem-total-variation-half-l1-formula-on-a-countable-space]]: total variation is the event-supremum distance and, on finite discrete $S$, equals $\tfrac12\sum_{s'}|P(s')-Q(s')|$.

[F4] [[lem-finite-set-has-max]]: every nonempty finite set of real numbers has an attained maximum.

[F5] [[lem-of-triangle-inequality]]: for real $u,v$, $|u+v|\le |u|+|v|$.

[F6] [[lem-of-abs-value]]: $|u|\ge0$ and $|-u|=|u|$ for every real $u$.

## Verification

**Given:** The finite MDP, the estimated transition and reward table, and the definitions and finite-set hypotheses in the Definition.

1.1 For each pair $(s,a)$, $P(s'\mid s,a)\ge0$ and $\sum_{s'}P(s'\mid s,a)=\sum_{s',\rho}p(s',\rho\mid s,a)=1$ by [F1]. Thus every true transition row is a probability law. The proposed $\hat P$ rows have this property by the Given condition. Since the spaces are finite and discrete, [F2] makes both transition tables probability kernels. The reward alphabet lies in $[0,1]$, so its probability-weighted finite sum $r(s,a)$ also lies in $[0,1]$, as does $\hat r(s,a)$ by assumption. [given, F1, F2, algebra]

2.1 For each pair, $|P(s'\mid s,a)-\hat P(s'\mid s,a)|\le P(s'\mid s,a)+\hat P(s'\mid s,a)$ by [F5] and [F6]. Summing over $s'$ gives at most $2$, so $0\le e_P(s,a)\le1$; also $0\le e_r(s,a)\le1$ because both rewards lie in $[0,1]$. By [F3], the displayed half-sum is exactly the library total-variation convention on $S$. The set $D$ and each $C\subseteq D$ are finite; therefore [F4] gives attained maxima when $C$ is nonempty, and the empty-set convention defines the remaining case. All model errors in the Definition are consequently well-defined. [given, F3, F4, F5, F6, step 1.1, algebra] ∎
