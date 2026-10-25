---
id: ex-small-margin-sample-does-not-fix-population-error
kind: example
title: "A small empirical margin loss does not determine population error"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-spectral-network-complexity
  - def-multiclass-margin-ramp-loss
  - thm-spectral-margin-bound-for-multiclass-networks
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Bartlett, Foster, and Telgarsky, Spectrally-normalized margin bounds for neural networks, Theorem 1.1"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Example

Assume the axiom of choice and take confidence level $\delta=1/2$. Let the input always be $x=1$ and let the label distribution assign probability $0.6$ to class $1$ and $0.4$ to class $2$. Use one identity-activation layer with $A_1=(1,0)^\top$ and reference $M_1=0$. For a sample of size $n=1$, at margin threshold $\gamma=1/2$ the event that the sampled label is class $1$ has probability $0.6$, has empirical margin loss zero, while the network's population zero-one error is $0.4$. The simultaneous theorem still permits this event because its $8/n$ term alone is $8$; the example shows that one zero empirical margin-loss observation does not itself determine population error.

## Example references

[[def-spectral-network-complexity]]: defines the network map and norm conventions.

[[def-multiclass-margin-ramp-loss]]: defines the population zero-one error and empirical margin loss.

[[def-population-and-empirical-risk]]: defines population expectation and empirical averages.

[[thm-spectral-margin-bound-for-multiclass-networks]]: supplies the finite-sample bound including the additive $8/n$ term.

## Facts & Assumptions

**Given:** The two-point label distribution, deterministic input, one-layer network, sample size, and margin threshold in the Example.

[F1] The network uses the zero-bias recurrence with an identity activation, and the operator norm is induced by the Euclidean norm. [[def-spectral-network-complexity]]

[F2] The margin is true score minus the maximum competing score; empirical margin loss counts margins at most $\gamma$ and population zero-one error is the probability of a wrong predicted label. [[def-multiclass-margin-ramp-loss]]

[F3] The theorem's upper bound includes the additive $8/n$ correction. [[thm-spectral-margin-bound-for-multiclass-networks]]

## Verification

**Proof technique:** direct.

1.1 The scores at $x=1$ are $(1,0)$. For label $1$ the margin is $1-0=1$; for label $2$ it is $0-1=-1$. Thus the network predicts class $1$ on both possible labeled outcomes. [F1, F2, given, algebra]

2.1 By the label probabilities in the Example and [F2], the population zero-one error is $0.4$. If the sample label is class $1$, which occurs with probability $0.6$, its only margin is $1>1/2$, so its empirical margin loss is $0$. [F2, step 1.1, given, algebra]

3.1 For $n=1$, [F3] contributes $8/n=8$ to the theorem's right-hand side, already exceeding the population error $0.4$; all other displayed terms are nonnegative. Therefore the stated sample event is consistent with the theorem and demonstrates why empirical margin loss alone is not a population-error guarantee. [F3, step 2.1, given, algebra] ∎
