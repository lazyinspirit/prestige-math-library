---
id: ex-offline-ope-full-support-and-missing-support
kind: example
title: "Full action support permits reweighting while missing support does not"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-trajectory-importance-sampling-ope
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - thm-offline-coverage-impossibility-example
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
      locator: "§5.5, printed pp. 128–129, action coverage and trajectory importance ratios."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF pp. 2–3, trajectory importance sampling under behavior-policy support."
---

## Example

Assume AC and take horizon $H=1$, discount $\gamma=\tfrac12$, states $s_0,z$, actions $a,b$ at $s_0$, and action $c$ at $z$. Every action moves to $z$; action $a$ gives reward $0$, action $b$ gives reward $1$, and action $c$ gives reward $0$. The target policy chooses $b$ at $s_0$, and both policies choose $c$ at $z$. With behavior probabilities $\mu(a\mid s_0)=\mu(b\mid s_0)=\tfrac12$, full trajectory coverage holds: the single-trajectory ordinary importance-sampling score is $2$ when action $b$ is observed and $0$ when action $a$ is observed, and its expectation is the target value $1$. If instead $\mu(a\mid s_0)=1$, the target action has no behavior support. Two processes that agree on the logged action $a$ and its reward $0$, but give action $b$ rewards $1$ and $-1$, respectively, have identical logged-data laws and different target values; the behavior data cannot identify which value is correct.

## Example references

[[def-offline-reinforcement-learning-dataset|Finite-horizon trajectory laws and the target-value convention.]]

[[alg-trajectory-importance-sampling-ope|Ordinary trajectory importance sampling and its weight formula.]]

[[thm-offline-coverage-impossibility-example|A proof that logged data can fail to identify value without coverage.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

## Facts & Assumptions

**Given:** AC, the horizon-one MDP and policies in the Example, one behavior trajectory at a time, and the corresponding target value.

[F1] [[def-offline-reinforcement-learning-dataset]]: $P^\sigma_H$ is the finite-horizon path law and the target value is the expectation of the discounted return.

[F2] [[alg-trajectory-importance-sampling-ope]]: for $H=1$, the ordinary score is the observed return multiplied by $\pi(A_0\mid s_0)/\mu(A_0\mid s_0)$.

[F3] [[thm-offline-coverage-impossibility-example]]: two behavior-indistinguishable finite MDPs can have different target values when the target action is absent from behavior support.

## Verification

1.1 Under $\mu(b\mid s_0)=\tfrac12$, the ratio for an observed $b$ is $1/(\tfrac12)=2$; its return is $1$. The ratio for an observed $a$ is $0/(\tfrac12)=0$; its return is $0$. Thus the OIS score is $2$ with probability $\tfrac12$ and $0$ with probability $\tfrac12$, so its expectation is $1$, equal to the target value. Since $H=1$, PDIS has the same score. [given, F1, F2, algebra]

2.1 Under $\mu(a\mid s_0)=1$, the target trajectory taking $b$ has target probability $1$ and behavior probability $0$, so the full-coverage premise fails and its likelihood ratio is undefined. The two reward choices $r(b)=1$ and $r(b)=-1$ yield the same deterministic logged trajectory but target values $1$ and $-1$. [given, F1, F3, algebra] ∎
