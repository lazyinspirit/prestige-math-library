---
id: ex-offline-ope-weighted-and-clipped-estimators-can-be-biased
kind: example
title: "Self-normalization and clipping can introduce finite-sample bias"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-trajectory-importance-sampling-ope
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
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
      locator: "§5.5, printed p. 129, equations (5.4)–(5.5) and the single-return weighted-estimator discussion."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF p. 3, equations (6)–(7); WIS is described as biased."
---

## Example

Assume AC and take horizon $H=1$, discount $\gamma=\tfrac12$, states $s_0,z$, actions $a,b$ at $s_0$, and action $c$ at $z$. Every action moves to $z$; action $a$ gives reward $0$, action $b$ gives reward $1$, and action $c$ gives reward $0$. The target policy chooses $b$ at $s_0$; both policies choose $c$ at $z$. The behavior policy chooses $a$ and $b$ each with probability $\tfrac12$. For $n\ge1$ independent behavior trajectories, let $W_i$ be the ordinary trajectory weight and $G_i$ the return. The ordinary estimate is $n^{-1}\sum_iW_iG_i$. The self-normalized estimate is $\sum_iW_iG_i/\sum_iW_i$ when its denominator is positive and $0$ when it is zero. The clipped estimate at threshold $1$ is $n^{-1}\sum_i\min\{W_i,1\}G_i$. The target value is $1$; the ordinary estimator has expectation $1$, the self-normalized estimator has expectation $1-2^{-n}$, and the clipped estimator has expectation $\tfrac12$.

## Example references

[[def-offline-reinforcement-learning-dataset|The finite-horizon trajectory data and target-value conventions.]]

[[alg-trajectory-importance-sampling-ope|Ordinary and self-normalized trajectory importance-sampling formulas.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

## Facts & Assumptions

**Given:** AC, the horizon-one MDP and policies in the Example, $n$ independent behavior trajectories, and the stated estimator conventions.

[F1] [[def-offline-reinforcement-learning-dataset]]: the target value is the expectation of the finite-horizon return, and the logged trajectories are independent with the behavior-policy law.

[F2] [[alg-trajectory-importance-sampling-ope]]: an ordinary trajectory weight is the product of the action-propensity ratios; WIS returns $0$ when its normalizing denominator is zero.

## Verification

1.1 For one trajectory, $W_i=2$ and $G_i=1$ when action $b$ is observed, an event of probability $\tfrac12$; when action $a$ is observed, $W_i=0$ and $G_i=0$. Thus $W_iG_i$ equals $2$ or $0$ with equal probability and has expectation $1$. Linearity gives expectation $1$ for the ordinary sample average. [given, F1, F2, algebra]

2.1 Let $K$ be the number of $b$ actions in the $n$ independent episodes. If $K>0$, the WIS numerator is $2K$ and its denominator is $2K$, so the estimate is $1$; if $K=0$, its estimate is $0$ by convention. Independence gives $P(K=0)=2^{-n}$. Hence its expectation is $1-2^{-n}$, and its bias relative to target value $1$ is $-2^{-n}$. [given, F1, F2, step 1.1, algebra]

3.1 For each trajectory, $\min\{W_i,1\}G_i$ equals $1$ when $b$ is observed and $0$ when $a$ is observed. Its expectation is $\tfrac12$, so the clipped sample average also has expectation $\tfrac12$ by linearity. Its bias is $-\tfrac12$. [given, F1, F2, algebra] ∎
