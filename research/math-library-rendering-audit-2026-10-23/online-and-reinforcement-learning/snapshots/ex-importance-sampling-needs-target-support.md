---
id: ex-importance-sampling-needs-target-support
kind: example
title: An unseen target action cannot be importance sampled from behavior data
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-markov-decision-process
  - def-episodic-returns-td-errors-and-policy-support
  - alg-monte-carlo-policy-evaluation
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
      locator: "§5.5, importance-sampling coverage requirement and target-action support."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.1, support condition for off-policy importance sampling."

---

## Example

Assume the Axiom of Choice for the policy path laws and fix $0\le\gamma<1$. Let the state set be $\{s,d\}$, with $A(s)=\{a,b\}$ and $A(d)=\{c\}$. Action $a$ at $s$ gives reward $0$ and transitions to terminal state $d$; action $b$ gives reward $1$ and also transitions to $d$. At $d$, action $c$ gives reward $0$ and returns to $d$, but episodes stop upon first reaching $d$. Let the behavior policy choose $a$ with probability $1$ at $s$ and the target policy choose $b$ with probability $1$. The formal ordinary first-visit importance-sampling estimator is evaluated here outside the Monte Carlo algorithm's target-support admissibility condition, to show why that condition is needed. Every behavior episode observes $a$, whose action ratio is $\pi(a\mid s)/\mu(a\mid s)=0$, so the estimate is always $0$, while the target value is $1$. The target-support condition fails because $\mu(b\mid s)=0<\pi(b\mid s)$.

## Example references

[[def-finite-markov-decision-process|The finite joint reward-transition model]].

[[def-episodic-returns-td-errors-and-policy-support|The behavior-to-target action ratio and support condition]].

[[alg-monte-carlo-policy-evaluation|The ordinary first-visit importance-sampling estimator]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** The one-decision finite MDP, its terminal set, $0\le\gamma<1$, the Axiom of Choice for the policy path laws, the deterministic behavior and target policies, and the formal ordinary first-visit estimator evaluated as stated in the Example.

[F1] [[def-finite-markov-decision-process]]: the two actions have the deterministic reward and terminal-transition laws stated in the Example.

[F2] [[def-episodic-returns-td-errors-and-policy-support]]: the observed-path likelihood ratio is the product of target action probabilities divided by behavior action probabilities, and target support is needed for the ratio identity.

[F3] [[alg-monte-carlo-policy-evaluation]]: the ordinary estimator averages the likelihood-ratio-weighted first-visit returns over observed visits.

## Proof

1.1 Every behavior episode has the single action $a$, reward $0$, and a first visit to $s$ at time $0$. Its ratio is $0/1=0$ by [F2], so each weighted return is zero and the ordinary estimate in [F3] equals $0$ for every positive sample count. [given, F1, F2, F3, algebra]

2.1 The target policy instead chooses $b$ with probability $1$, receives reward $1$, and terminates immediately; hence its return and value at $s$ are $1$. The ordinary behavior estimate is therefore not the target value. The failed premise is exactly target support, since $\pi(b\mid s)=1$ but $\mu(b\mid s)=0$. [given, F1, step 1.1, algebra] ∎
