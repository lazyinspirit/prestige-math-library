---
id: ex-weighted-importance-sampling-finite-sample-bias
kind: example
title: A one-sample weighted importance-sampling estimate can be biased
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-markov-decision-process
  - def-episodic-returns-td-errors-and-policy-support
  - alg-monte-carlo-policy-evaluation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
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
      locator: "§5.5, weighted importance-sampling estimator and finite-sample bias."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.1, target support, trajectory likelihood ratios, and the ordinary importance-sampling estimator; the weighted estimator and its bias are covered by the Sutton–Barto §5.5 citation."

---

## Example

Assume the Axiom of Choice for the policy path laws. Let the state set be $\{s,d\}$, with actions $A(s)=\{a,b\}$ and $A(d)=\{c\}$. The discount is $\gamma=0$, and episodes stop on first reaching terminal state $d$. At $s$, both actions transition to $d$; action $a$ gives reward $1$ and action $b$ gives reward $0$. At $d$, action $c$ returns to $d$ with reward $0$. Let the target policy choose $(a,b)$ with probabilities $(3/4,1/4)$ and the behavior policy choose them with probabilities $(1/4,3/4)$; both choose $c$ at $d$. Target support holds. For one behavior episode, the self-normalized weighted importance-sampling estimate is the observed reward, so its expectation is $1/4$, whereas the target value is $3/4$. Its finite-sample bias is $-1/2$.

## Example references

[[def-finite-markov-decision-process|The finite joint reward-transition model]].

[[def-episodic-returns-td-errors-and-policy-support|The episodic return, target support, and likelihood ratio]].

[[alg-monte-carlo-policy-evaluation|The self-normalized first-visit importance-sampling estimator]].

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation as a finite probability-weighted sum in this example]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** The one-decision finite MDP, its terminal state, $\gamma=0$, the Axiom of Choice for the policy path laws, target and behavior action probabilities, and the one-sample weighted estimator.

[F1] [[def-finite-markov-decision-process]]: action $a$ produces reward $1$ and action $b$ produces reward $0$, with both transitioning to $d$.

[F2] [[def-episodic-returns-td-errors-and-policy-support]]: the likelihood ratio for the one-step episode is $\pi(A_0\mid s)/\mu(A_0\mid s)$; both possible behavior actions have positive target probability.

[F3] [[alg-monte-carlo-policy-evaluation]]: the weighted estimate is $\sum_i W_iG_i/\sum_iW_i$ when the denominator is positive.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: for a finite-valued variable, expectation is the sum of its values weighted by their probabilities.

## Proof

1.1 If the observed action is $a$, its importance weight is $(3/4)/(1/4)=3$ and its return is $1$; if it is $b$, its weight is $(1/4)/(3/4)=1/3$ and its return is $0$. In either case the one-sample weighted estimator in [F3] reduces to $W_1G_1/W_1=G_1$, and the denominator is strictly positive. [given, F2, F3, algebra]

2.1 Under behavior, action $a$ occurs with probability $1/4$ and action $b$ with probability $3/4$, so [F4] and step 1.1 give expected one-sample estimate $E_\mu[G_1]=(1/4)1+(3/4)0=1/4$. Under the target policy, the state value is $V^\pi(s)=(3/4)1+(1/4)0=3/4$. Their difference is $1/4-3/4=-1/2$, proving finite-sample bias. [given, F1, F4, step 1.1, algebra] ∎
