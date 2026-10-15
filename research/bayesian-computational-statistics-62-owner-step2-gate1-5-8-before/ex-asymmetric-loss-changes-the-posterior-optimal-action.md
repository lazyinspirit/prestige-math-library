---
id: ex-asymmetric-loss-changes-the-posterior-optimal-action
kind: example
title: Asymmetric loss can change the posterior-optimal action
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-posterior-risk-and-bayes-action
  - thm-finite-class-maximal-mass-is-zero-one-bayes-action
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §9.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Example

Let $\Theta=A=\{0,1\}$ and let $\Pi(\{1\})=0.7$. Under zero–one loss the maximal-mass action is $1$. Under the asymmetric loss with false-positive cost $3$ and false-negative cost $1$, the unique Bayes action is instead $0$.

## Facts & Assumptions

**Given:** The posterior masses are $\Pi(\{1\})=0.7$ and $\Pi(\{0\})=0.3$; the actions are $0,1$; false-positive loss is $L(0,1)=3$, false-negative loss is $L(1,0)=1$, and correct classifications have loss zero.

[F1] Posterior risk is the posterior integral of the loss when finite. [[def-posterior-risk-and-bayes-action]]

[F2] Under finite-class zero–one loss, a maximal-posterior-mass class minimizes posterior risk. [[thm-finite-class-maximal-mass-is-zero-one-bayes-action]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 Under zero–one loss, the risks are $1-\Pi(\{0\})=0.7$ for action $0$ and $1-\Pi(\{1\})=0.3$ for action $1$. Thus action $1$ is the unique zero–one Bayes action, in agreement with [F2]. [given, F1, F2, algebra]

1.2 Under the asymmetric loss, the risk of action $1$ is $3\Pi(\{0\})=0.9$, while the risk of action $0$ is $\Pi(\{1\})=0.7$. Both risks are finite and the lower one is attained uniquely by action $0$. [given, F1, algebra]

2.1 The two loss functions therefore select different actions under the same posterior: zero–one loss selects $1$, while the stated asymmetric loss selects $0$. This demonstrates that posterior modes alone do not determine a Bayes action without a specified loss. [step 1.1, step 1.2, algebra] ∎
