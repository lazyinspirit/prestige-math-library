---
id: ex-deterministic-statistic-as-dirac-kernel
kind: example
title: "A deterministic statistic is a Dirac kernel"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-randomized-procedure-as-a-markov-kernel
  - def-measurable-function-between-measurable-spaces
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-sigma-algebra
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Example

Let $T:(\mathcal X,\mathcal A)\to(\mathcal Y,\mathcal B)$ be a statistic in
an experiment. Define
$$K(x,C)=\delta_{T(x)}(C)=\begin{cases}1,&T(x)\in C,\\0,&T(x)\notin C,\end{cases}\qquad C\in\mathcal B.$$
Then $K$ is a randomized procedure that assigns probability one to the
statistic value $T(x)$ after observing $x$.

## Facts & Assumptions

**Given:** Measurable spaces $(\mathcal X,\mathcal A)$ and $(\mathcal Y,\mathcal B)$ in a statistical experiment, and a statistic $T:\mathcal X\to\mathcal Y$.

[F1] A statistic is a measurable map from the observation space to its target measurable space ([[def-statistic-and-estimator]]).

[F2] The Dirac set function at $y$ assigns one to measurable sets containing $y$ and zero to the others ([[def-dirac-measure]]).

[F3] Each Dirac set function is a probability measure ([[prop-dirac-measure-is-a-probability-measure]]).

[F4] A randomized procedure is a probability kernel: each action section is a probability measure and each action-event evaluation is measurable in the data ([[def-randomized-procedure-as-a-markov-kernel]]).

[F5] A measurable map has measurable preimages ([[def-measurable-function-between-measurable-spaces]]).

[F6] A sigma-algebra is closed under complements ([[def-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in\mathcal X$, the set function $C\mapsto K(x,C)$ is the Dirac measure at $T(x)$, so it is a probability measure by [F2] and [F3]. [given, F2, F3]

1.2 Fix $C\in\mathcal B$ and put $E=T^{-1}(C)\in\mathcal A$ by [F1] and [F5]. The evaluation $x\mapsto K(x,C)$ is $1$ on $E$ and $0$ on $\mathcal X\setminus E$, which belongs to $\mathcal A$ by [F6]. For any Borel subset $D\subseteq[0,1]$, its preimage is one of $\varnothing$, $\mathcal X$, $E$, or $\mathcal X\setminus E$, hence is measurable. Thus this evaluation is measurable. [F1, F5, F6]

2.1 Steps 1.1 and 1.2 verify both clauses of [F4], so $K$ is a probability kernel and therefore a randomized procedure. Since each section is the point mass at $T(x)$, it takes the action $T(x)$ with probability one. [F4, step 1.1, step 1.2] ∎
