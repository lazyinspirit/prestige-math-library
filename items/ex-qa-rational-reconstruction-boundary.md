---
id: ex-qa-rational-reconstruction-boundary
kind: example
title: Denominator-bounded reconstruction at the strict boundary
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-rational-phase-reconstruction
  - lem-qa-finite-rational-legendre-criterion
  - lem-qa-rational-reconstruction-candidate-uniqueness
  - def-convergents-of-regular-continued-fraction
  - thm-rational-continued-fraction-termination
justified_by: []
axiom_use: "None; all values are exact integers and rationals."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§5, PDF pp. 16–19; exact rational approximation window"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; continued-fraction period extraction"
---

## Example

Take $N=2$, $Q=17$, and $y=9$. The reconstruction hypothesis holds because $17>4(2)^2=16$. The normalized continued fraction is
$$\frac9{17}=[0;1,1,8],$$
with convergents $0/1,1/1,1/2,9/17$. For $p/q=1/2$, the exact comparison is
$$2|yq-pQ|=2|18-17|=2=q,$$
so the candidate is accepted at equality. The integer comparison has no tolerance parameter.

## Facts & Assumptions

**Given:** The exact candidate test from [[def-qa-rational-phase-reconstruction]], the finite rational criterion, and the uniqueness result.

[F1] A candidate has reduced denominator $1\le q\le N$ and passes exactly when $2|yq-pQ|\le q$ ([[def-qa-rational-phase-reconstruction]]).

[F2] A rational has a terminating continued-fraction algorithm, and each finite convergent is the recurrence-defined fraction $p_j/q_j$ ([[thm-rational-continued-fraction-termination]], [[def-convergents-of-regular-continued-fraction]]).

[F3] For $Q>4N^2$, at most one reduced fraction with denominator at most $N$ passes this test ([[lem-qa-rational-reconstruction-candidate-uniqueness]]).

[F4] The finite-rational Legendre criterion assumes the strict inequality $|A/D-p/q|<1/(2q^2)$ ([[lem-qa-finite-rational-legendre-criterion]]).

## Proof

1.1 The Euclidean divisions $17=1\cdot9+8$, $9=1\cdot8+1$, and $8=8\cdot1$ give the displayed normalized expansion and its convergents by [F2]. The denominator-$2$ convergent $1/2$ satisfies the exact equality in [F1], so it passes. [given, F1, F2, algebra]

2.1 The other denominator-$1$ convergents fail: for $0/1$, $2|9|=18>1$; for $1/1$, $2|9-17|=16>1$. The terminal fraction has denominator $17>N$ and is excluded. Thus $1/2$ is the only candidate; this also follows from [F3]. The algorithm's weak inequality accepts the tie, while [F4] uses a separate strict approximation hypothesis and is not invoked to turn equality into strictness. [F1, F2, F3, F4, step 1.1, algebra] ∎
