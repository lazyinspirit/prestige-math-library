---
id: ex-zero-training-error-can-have-positive-population-risk
kind: example
title: "Zero training error can coexist with positive population risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-realizable-and-agnostic-pac
  - alg-finite-list-empirical-risk-minimizer
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
---

## Example

Let $\mathcal X=\{a,b\}$ have the discrete sigma-algebra, and let $P$ assign probability $1/2$ to each of $(a,0)$ and $(b,0)$. Let $h_0(a)=h_0(b)=0$ and $h_1(a)=0$, $h_1(b)=1$, so $\mathcal H=\{h_1,h_0\}$ is realizable by $h_0$. Run exact finite-list ERM on the ordered list $(h_1,h_0)$. For every integer $m\ge1$, if $S=((X_1,Y_1),\ldots,(X_m,Y_m))$ is an IID sample from $P$, the event $S=((a,0),\ldots,(a,0))$ has probability $2^{-m}$; on this event $h_1$ has empirical risk zero and population risk $1/2$, and the tie-breaking rule returns $h_1$. Thus zero training error does not imply zero population risk on every sample, even for a realizable finite class; PAC guarantees bound a failure probability over samples.

## Example references

[[def-realizable-and-agnostic-pac]]: defines realizability and the probability-over-samples form of a PAC guarantee.

[[alg-finite-list-empirical-risk-minimizer]]: returns the first exact minimizer in the given order when tolerance is zero.

## Facts & Assumptions

**Given:** The finite instance space, joint law, two classifiers, and ordered list in the Example, with IID samples of size $m\ge1$.

[F1] At tolerance zero, the finite-list algorithm returns the first empirical-risk minimizer. [[alg-finite-list-empirical-risk-minimizer]]

[F2] IID means sample observations are mutually independent and identically distributed. [[def-identically-distributed-and-iid-random-variables]]

[F3] Realizable PAC requires the risk threshold with probability at least $1-\delta$ over the IID sample; it is a probability guarantee, not a pointwise assertion for every sample. [[def-realizable-and-agnostic-pac]]

## Verification

**Given:** The model and ordered finite-list ERM in the Example.

1.1 The classifier $h_1$ errs exactly when $X=b$, so $R_P(h_1)=1/2$, while $h_0$ has zero risk. On the specified all-$a$ sample, each observed pair is $(a,0)$ and both classifiers have empirical risk zero. [given, algebra]

2.1 By [F2], the probability that all $m$ independent inputs equal $a$ is $(1/2)^m=2^{-m}>0$. On that event, [F1] selects $h_1$ first, so the learner returns zero empirical risk with population risk $1/2$. This is a positive-probability sample event and does not contradict the probabilistic form of [F3]. [F1, F2, F3, step 1.1, algebra] ∎
