---
id: alg-dagger
kind: algorithm
title: Dataset Aggregation (DAgger)
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-imitation-learning-and-expert-surrogate-loss
  - def-online-decision-protocol
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
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Algorithm 3.1, §3, PDF p. 3; expert mixing and follow-the-leader interpretation, pp. 3–4."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Chapter 6 DAgger pseudocode and interactive expert-label procedure, PDF pp. 4–6 / printed pp. 57–59."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9 Algorithm 1 and dataset aggregation discussion, PDF pp. 51–53 / note pages 47–48."
---

## Definition

Let a finite-horizon imitation-learning problem have the finite MDP, initial state distribution, positive integer horizon $T$, deterministic expert $\pi^*$, learner class $\{\pi_\theta:\theta\in K\}$, and expert surrogate loss $\ell(s,\theta)$ defined previously. Let $N\ge1$ and $m\ge1$ be integers giving the number of training rounds and trajectories per round, let $\beta_1,\ldots,\beta_N\in[0,1]$ be expert-use probabilities, supply an initial parameter $\theta_1\in K$, and supply a deterministic selector for attained minimizers of the cumulative losses. Require that each cumulative training-loss function below attains a minimum on $K$; when the minimizer is unique the selector returns it.

Initialize the aggregated training dataset as the empty multiset $\mathcal D_0=\varnothing$.

For each round $i=1,\ldots,N$:

1. Set $\hat\pi_i=\pi_{\theta_i}$. For the rollout policy, at each decision time of every trajectory, independently draw an expert-use coin with success probability $\beta_i$. At current state $s$, if the coin succeeds, execute $\pi^*(s)$; otherwise sample an action from $\hat\pi_i(\cdot\mid s)$ and execute it. This per-decision stochastic policy is $\pi_i=\beta_i\pi^*+(1-\beta_i)\hat\pi_i$.
2. Run $m$ trajectories of length $T$ from the specified initial distribution using $\pi_i$. At every visited state $S_{ij t}$, for $1\le j\le m$ and $0\le t<T$, query and record the expert label $\pi^*(S_{ij t})$. Append these labeled pairs to $\mathcal D_{i-1}$, with multiplicity, to form $\mathcal D_i$. The expert label is recorded for training and is not executed unless the mixture in step 1 selected the expert.
3. Define the empirical round loss on every candidate parameter by

   $$\hat L_i(\theta)=\frac1{mT}\sum_{j=1}^m\sum_{t=0}^{T-1}\ell(S_{ij t},\theta).$$

4. Update by Follow-the-Leader on the cumulative empirical loss: set $\theta_{i+1}$ to the supplied selector's choice from $\arg\min_{\theta\in K}\sum_{r=1}^i\hat L_r(\theta)$.

The finite-sample output is the sequence $\hat\pi_1,\ldots,\hat\pi_N$ and the aggregated labeled multiset $\mathcal D_N$. The population-loss idealization replaces each empirical $\hat L_i$ by $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$; it is used only for the infinite-sample theorem. The procedure requires an interactive expert capable of labeling learner-visited states.

## Definition references

[[def-imitation-learning-and-expert-surrogate-loss]]: specifies the finite MDP, normalized state occupancy, deterministic expert, learner class, task/surrogate losses, and DAgger round losses.

[[def-online-decision-protocol]]: the learner selects its current policy from earlier feedback before collecting current-round trajectories and labels.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Algorithm 3.1, §3, PDF p. 3.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 4–6 / printed pp. 57–59.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): PDF pp. 51–53 / note pages 47–48.
