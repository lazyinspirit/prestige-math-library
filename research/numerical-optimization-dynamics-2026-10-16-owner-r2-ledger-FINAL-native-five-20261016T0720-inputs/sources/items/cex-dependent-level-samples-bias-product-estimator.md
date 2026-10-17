---
id: cex-dependent-level-samples-bias-product-estimator
kind: counterexample
title: Correct level marginals do not justify a dependent product
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nested-rare-event-levels
  - alg-independent-fixed-level-splitting
  - thm-independent-splitting-product-moments-and-work
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: n/a
---

## Statement refuted

Correct marginal success probabilities at every level suffice for the product of level sample means to be unbiased when the level samples are dependent.

## Facts & Assumptions

**Given:** Let $\Omega=\{1,2,3,4\}$ with uniform $P$, $A_1=\{1,2\}$, $A_2=\{1\}$, and use one sample at each level.

[F1] [[def-nested-rare-event-levels]]: The level probabilities are $p_1=P(A_1)$, $p_2=P(A_2)/P(A_1)$, and the target is $P(A_2)=p_1p_2$.

[F2] [[alg-independent-fixed-level-splitting]]: The two-level product estimator is the product of the two level indicator means; the prescribed algorithm requires independent level arrays.

[F3] [[thm-independent-splitting-product-moments-and-work]]: Under level independence, the product estimator has expectation $p_1p_2$.

## Counterexample

1.1 Let $U,V$ be independent Bernoulli$(1/2)$. Construct the level-one sample by $X_1=1+V$ if $U=1$, and $X_1=3+V$ if $U=0$; then $X_1\sim P$. Construct $X_2=1$ if $U=1$, and $X_2=2$ if $U=0$; then $X_2\sim P(\cdot\mid A_1)$. [F1, given, construct]

2.1 The correct marginal success probabilities are $P(X_1\in A_1)=1/2$ and $P(X_2\in A_2)=1/2$. But the two indicators both equal $U$, so their product has expectation $1/2$, while $P(A_2)=1/4$. Thus dependence biases the product despite both correct marginals, and it violates the independence condition in [F2]. [F1, F2, step 1.1, algebra]

3.1 The unbiasedness conclusion in [F3] has the stated independence hypothesis; it cannot be applied to this coupling. The target counterexample refutes the proposed implication. [F2, F3, step 2.1] ∎
