---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: cex-no-finite-query-universal-sample-size-infeasibility-detector
kind: counterexample
title: "Finite power-oracle queries cannot universally certify no feasible sample size"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - def-power-and-sample-size-planning-specification
  - def-statistical-experiment
  - def-randomized-test
  - def-test-size-and-power
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-measurable-rejection-function-defines-randomized-test
  - def-natural-numbers
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
dependency_level: 2
---

## Statement refuted

The claim is that there is a deterministic procedure which, for every exact Boolean feasibility oracle on all positive integers, accesses that oracle only through queries of individual sizes, terminates after finitely many queries, and returns the least feasible positive size or $\mathrm{none}$ if there is none. The claim remains false even when the oracle is promised to be nondecreasing. This is a finite-query black-box statement; it does not exclude analytic solutions or additional global certificates for specified model families.

## Facts & Assumptions

**Given:** A purported deterministic, universally terminating procedure of this type. Each oracle query has an exact terminating answer. The procedure has no additional information distinguishing the oracles below.

[F1] A planning specification allows a model at each size and defines power as the rejection probability at the target parameter; its empty feasible set has extensional answer none. [[def-power-and-sample-size-planning-specification]], [[def-test-size-and-power]]

[F2] A statistical experiment is a family of probability laws on a data measurable space, a measurable rejection function defines a randomized test, and the Dirac set function $\delta_x$ is a probability law concentrated at $x$. [[def-statistical-experiment]], [[def-randomized-test]], [[lem-measurable-rejection-function-defines-randomized-test]], [[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]

## Counterexample

1.1 Give the procedure the constant-false oracle $E_0(n)=0$. Correctness forces the output none, and universal termination makes its queried set $Q$ finite. Put $M=1+\sum_{q\in Q}q$, which is a positive integer greater than every queried positive size, including $M=1$ when $Q$ is empty, and define $E_M(n)=\mathbf1\{n\ge M\}$. Both oracles are nondecreasing and answer false at every query in the completed $E_0$ transcript. [given, construct]

2.1 Run the same deterministic procedure with $E_M$. Its initial internal state is the same, and whenever a query is reached along the original transcript, its answer is the same false value. Induction through the finite transcript therefore gives identical internal states, queries and terminal output. It returns none on $E_M$, although $M$ is the least feasible size. This contradicts the claimed correctness. [given, step 1.1, algebra]

3.1 These oracles are realizable as exact power-feasibility inputs: use candidate plans $d_n$ with one allocation count equal to $n$, for every positive integer $n$; at that size take the measurable space $\{0,1\}$ with its full power set, parameters $0,1$, null law $P_{0,n}=\delta_0$, target law $P_{1,n}=\delta_{E(n)}$, and test $\varphi(x)=x$. The full power set makes $\varphi$ measurable, and the proved point-mass and measurable-rejection-function suppliers in [F2] make this an experiment and randomized test. Its null size is zero and target power is $E(n)$, so a size bound zero and target power $1/2$ in [F1] make feasibility equivalent to $E(n)=1$. Use either $E_0$ or $E_M$; hence the distinction is compatible with explicit statistical laws, not a numerical approximation error. [F1, F2, step 1.1, algebra] ∎