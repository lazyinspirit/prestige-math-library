---
id: ex-hedge-two-experts
kind: example
title: Hedge with two experts over two rounds
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-hedge
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.3.3, Hedge, PDF pp. 33–35."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.7.4, normalized exponential weights for experts, PDF pp. 159–160."
---

## Example

Take two experts and two rounds, use learning rate $\epsilon=\log 2$, and fix the full-information loss vectors in advance as $\ell_1=(0,1)$ and $\ell_2=(1,0)$. Hedge starts from $W_1=(1,1)$, so $x_1=(1/2,1/2)$; after the first vector it has $W_2=(1,1/2)$ and $x_2=(2/3,1/3)$. The expected sampled loss is $1/2+2/3=7/6$. Each fixed expert has total loss $1$, so the expected static regret is $1/6$.

## Example references

[[alg-hedge]]: the weight update and normalized sampling distribution.

[[def-adversary-and-feedback-model]]: full-information loss vectors fixed before learner randomization.

[[def-static-dynamic-and-strongly-adaptive-regret]]: expected static regret against the best fixed expert.

[[def-natural-logarithm]]: $\log 2$ is the exponent whose exponential is $2$.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: bounded measurable losses have finite expectations.

## Facts & Assumptions

**Given:** The two fixed loss vectors and the Hedge learning rate in the Example.

[F1] [[alg-hedge]]: $W_1(i)=1$, $x_t(i)=W_t(i)/\sum_jW_t(j)$, and $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_t(i))$.

[F2] [[def-adversary-and-feedback-model]]: the complete loss vector is revealed after the choice, and the sequence is fixed before randomization.

[F3] [[def-static-dynamic-and-strongly-adaptive-regret]]: expected static regret is the expectation of sampled cumulative loss minus the best fixed expert's cumulative loss.

[F4] [[cor-expectation-of-an-indicator-is-probability]] and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: a finite categorical draw has expected loss equal to its probability-weighted sum, and finite sums commute with expectation.

[F5] [[def-natural-logarithm]] and [[cor-exponential-reciprocal-and-positivity]]: $\exp(\log 2)=2$ and $\exp(-\log 2)=1/2$.

[F6] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is defined for nonnegative or integrable random variables.

[F7] [[def-online-decision-protocol]]: the learner chooses using only its previous history and does not observe the current loss before its choice.

## Verification

1.1 The learner chooses before round-one feedback by [F7]; the displayed loss vectors are fixed in advance by [F2]. Initially $x_1=(1/2,1/2)$. By [F5], the round-one update multiplies expert 2's weight by $1/2$ and expert 1's by $1$, giving $W_2=(1,1/2)$ and $x_2=(2/3,1/3)$. [F1, F2, F5, F7, algebra]

2.1 The mixed losses are $\sum_i x_1(i)\ell_1(i)=1/2$ and $\sum_i x_2(i)\ell_2(i)=2/3$. By [F2], [F4], [F6], and the algorithm's measurable sampling in [F1], these are the expected sampled losses, so the expected cumulative loss is $7/6$. [F1, F2, F4, F6, step 1.1, algebra]

3.1 Expert 1's total loss is $0+1=1$, and expert 2's is $1+0=1$. Hence the best fixed expert has loss $1$ and [F3] gives expected static regret $7/6-1=1/6$; the finite losses are integrable by [F6]. [F3, F6, step 2.1, algebra] ∎
