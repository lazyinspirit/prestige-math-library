---
id: ex-logrank-fisher-randomization-with-unequal-weights
kind: example
title: "An exact logrank randomization p-value with unequal assignment weights"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-logrank-risk-set-score-and-test
  - cor-logrank-fisher-randomization-pvalue-valid
  - def-finite-randomized-treatment-assignment-model
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Fix a follow-up horizon $\tau=3$ and three subjects. For every allowed
assignment $z\in\{e_1,e_2,e_3\}$, where
$\gamma(e_k)_i=1\{i=k\}$ is the binary group map that treats subject $k$,
prescribe the full records
$(U_i(z),\delta_i(z))=(i,1)$ for $i=1,2,3$. Thus the subjects have
uncensored event times $1,2,3$ under every assignment, satisfying the
full-record sharp null. Exactly one subject is treated. The allowed assignments $e_1,e_2,e_3$ treat subject
1, 2, or 3, respectively, with probabilities $1/2,1/3,1/6$. Predeclare unit
weight and the two-sided absolute unweighted logrank score before observing
the assignment. Enumerate all
scores and inclusive assignment-tail p-values and verify superuniformity
under this unequal assignment law.

## Facts & Assumptions

**Given:** The full-record schedule $(U_i(z),\delta_i(z))=(i,1)$ for every $i\in\{1,2,3\}$ and every allowed assignment $z\in\{e_1,e_2,e_3\}$, the binary group map $\gamma(e_k)_i=1\{i=k\}$, horizon $\tau=3$, the declared assignment law, and the predeclared unit-weight absolute logrank ordering in [[def-logrank-risk-set-score-and-test]].

[F1] [[def-logrank-risk-set-score-and-test]]: at each event time, using the binary group map $\gamma(z)$, the score contribution is the treated event count minus the treated fraction of the current risk set.

[F2] [[cor-logrank-fisher-randomization-pvalue-valid]]: under a full-record sharp null, the inclusive assignment-tail p-value uses the actual assignment weights and is superuniform.

[F3] [[def-finite-randomized-treatment-assignment-model]]: assignment weights are nonnegative and sum to one on the finite allowed assignment set.

## Proof

1.1 The prescribed full record for each subject is identical under all three allowed assignments, so the full-record sharp-null hypothesis in [F2] holds. Under the map $\gamma(e_1)$, the event at time 1 contributes $1-1/3=2/3$ and the later risk sets contain no treated subject, so $U(\gamma(e_1))=2/3$. Under $\gamma(e_2)$, time 1 contributes $-1/3$, and time 2 contributes $1-1/2=1/2$, giving $U(\gamma(e_2))=1/6$. Under $\gamma(e_3)$, time 1 contributes $-1/3$, time 2 contributes $-1/2$, and time 3 contributes zero, giving $U(\gamma(e_3))=-5/6$. These are the three distinct scores; their absolute values are $2/3,1/6,5/6$. [F1, F2, given, algebra]

2.1 The inclusive absolute-tail probability at $e_1$ is $1/2+1/6=2/3$, at $e_2$ it is $1$, and at $e_3$ it is $1/6$, because the absolute scores are distinct and the assignment weights are $1/2,1/3,1/6$. Therefore the p-value takes $2/3,1,1/6$ with respective probabilities $1/2,1/3,1/6$. [F2, F3, step 1.1, algebra]

3.1 Its distribution function is $0$ for $0\le u<1/6$, $1/6$ for $1/6\le u<2/3$, $2/3$ for $2/3\le u<1$, and $1$ at $u=1$. On each interval this is at most $u$, including the endpoints. Thus the exact finite assignment calculation is superuniform under the declared unequal-weight law, as in [F2]. [F2, F3, step 2.1, algebra] ∎