---
id: def-imitation-learning-and-expert-surrogate-loss
kind: definition
title: Finite-horizon imitation learning and expert-surrogate loss
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-online-decision-protocol
  - lem-finite-horizon-mdp-policy-occupancy
justified_by: []
aliases: []
forward_refs: []
axiom_use: "No choice axiom is used; state occupancies are defined by finite recursion."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "§2, PDF pp. 1–2: finite-horizon occupancy, task cost, surrogate loss, and behavior-cloning state distribution."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Chapter 6, PDF pp. 1–5 / printed pp. 53–58: imitation learning, behavior cloning, covariate shift, and interactive expert labels."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9, PDF pp. 50–53 / note pages 46–47: imitation-learning loss under learner-induced states and DAgger aggregation procedure."
---

## Definition

Fix a finite Markov decision process with nonempty finite state set $S$ and finite nonempty action set $A(s)$ at each state, a positive integer horizon $T$, and an initial probability vector $\mu_0$ on $S$. A **policy** is a stationary Markov policy $\pi(a\mid s)$; a **deterministic expert** is a function $\pi^*:S\to\bigcup_{s\in S}A(s)$ with $\pi^*(s)\in A(s)$. For a policy $\pi$, let $\mu_t^\pi$ and $d_\pi$ be the finite-horizon state and average-occupancy probability vectors defined by the finite recursion in the preceding lemma.

Let $c_t(s,a)\in[0,1]$ be the task cost at time $t$ for $0\le t<T$. Define the total expected task cost by

$$J(\pi)=\sum_{t=0}^{T-1}\sum_{s\in S}\mu_t^\pi(s)\sum_{a\in A(s)}\pi(a\mid s)c_t(s,a).$$

Define the expert cost-to-go recursively by $V_T^*(s)=0$ and, for $0\le t<T$,

$$Q_t^*(s,a)=c_t(s,a)+\sum_{s'\in S}P(s'\mid s,a)V_{t+1}^*(s'),\qquad V_t^*(s)=Q_t^*(s,\pi^*(s)).$$

For a learner policy $\pi_\theta$ indexed by a parameter $\theta$ in a nonempty set $K$, define its expert-action disagreement probability at $s$ by $e(s,\theta)=\sum_{a\in A(s):a\ne\pi^*(s)}\pi_\theta(a\mid s)$. An **expert surrogate loss** is a function $\ell:S\times K\to[0,1]$ satisfying $\ell(s,\theta)\ge e(s,\theta)$ for every $s\in S$ and $\theta\in K$. The average surrogate loss under a policy's own state occupancy is $\mathbb E_{s\sim d_{\pi_\theta}}[\ell(s,\theta)]=\sum_s d_{\pi_\theta}(s)\ell(s,\theta)$.

**Behavior cloning** fits a learner policy using expert labels on states sampled from $d_{\pi^*}$. **DAgger** (Dataset Aggregation) is the interactive alternative: at iteration $i$, it rolls out a mixture $\pi_i=\beta_i\pi^*+(1-\beta_i)\hat\pi_i$, where $\hat\pi_i=\pi_{\theta_i}$ is the current learner with parameter $\theta_i\in K$ and $\beta_i\in[0,1]$ is the expert-use probability at each decision, queries the expert on the visited states, aggregates those labeled states with prior data, and updates the learner. For a positive integer $N$ of iterations, in the infinite-sample analysis define $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$. When the minimum is attained, define $\epsilon_N=\min_{\theta\in K}N^{-1}\sum_{i=1}^N L_i(\theta)$ and the learner's average regret $\gamma_N=N^{-1}\sum_{i=1}^N L_i(\theta_i)-\epsilon_N$. Fixed demonstrations do not in general provide expert labels for every learner-visited state; if they cover those states, their labels can be reused without new expert interaction.

## Definition references

[[def-finite-markov-decision-process]]: the finite state/action sets, joint reward-transition masses, derived state transition probabilities, and stationary Markov policies.

[[lem-finite-horizon-mdp-policy-occupancy]]: finite recursion gives probability vectors $\mu_t^\pi$ and their normalized average occupancy $d_\pi$ without an infinite-path construction.

[[def-online-decision-protocol]]: the learner chooses from past history before receiving current-round feedback.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): §2, PDF pp. 1–2.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 1–5 / printed pp. 53–58.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): PDF pp. 50–53 / note pages 46–47.
