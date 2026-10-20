---
id: ex-one-nearest-neighbor-has-unit-deletion-instability
kind: example
title: "A nearest-neighbor rule can have unit deletion instability and zero training loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-uniform-algorithmic-stability
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $\mathsf X=\mathbb R$ with its Borel sigma-algebra and distance $d(x,x')=|x-x'|$, and let $\mathsf Y=\mathsf A=\{0,1\}$ with the discrete sigma-algebra. Let $P$ be any probability measure on $(\mathsf X\times\mathsf Y,\mathcal B(\mathbb R)\otimes 2^{\{0,1\}})$, let $\mathcal F$ be the class of all Borel-measurable predictors $h:\mathsf X\to\mathsf A$, and use the zero-one loss $\ell(a,y)=\mathbf 1\{a\ne y\}$, so $L(h,(x,y))=\ell(h(x),y)$. Define a deterministic one-nearest-neighbor rule that predicts the majority label among all sample points at minimum distance from $x$, resolving a tie by predicting $0$; on the empty sample it predicts $1$ everywhere. For a fixed finite sample, each nearest-index region is specified by finitely many distance comparisons and is Borel, so the resulting predictor belongs to $\mathcal F$. This rule is permutation-invariant. For any $m\ge2$, let $S$ contain one observation $(0,0)$ and $m-1$ copies of $(10,1)$. Its empirical risk is zero. At the test point $(1,1)$ the full rule predicts $0$ and incurs loss $1$, while the rule after deleting $(0,0)$ predicts $1$ and incurs loss $0$. Since the loss is bounded by $1$, the uniform deletion-stability coefficient at size $m$ is exactly $1$.

## Example references

Uniform deletion stability is defined by [[def-uniform-algorithmic-stability]].

The supervised sample and loss setting is specified by [[def-supervised-learning-problem]].

Empirical risk is the finite sample average by [[def-population-and-empirical-risk]].

## Facts & Assumptions

**Given:** The metric feature space, binary labels, zero-one loss, permutation-invariant nearest-neighbor rule, sample $S$, and test point $(1,1)$ in the Example.

[F1] A supervised prediction problem includes measurable instance and label spaces, predictors, a joint sample law, and a measurable loss. [[def-supervised-learning-problem]]

[F2] The empirical risk of a length-$m$ sample is the average of the $m$ loss values. [[def-population-and-empirical-risk]]

[F3] The stability coefficient is the supremum of the deletion loss change over all samples, indices, and test observations. [[def-uniform-algorithmic-stability]]

[A1] The displayed sample contains exactly one point at feature $0$ with label $0$ and $m-1$ copies at feature $10$ with label $1$.

## Verification

1.1 For a fixed finite sample, nearest-index regions are finite Boolean combinations of Borel distance comparisons, so the prediction map is measurable. The tie rule depends only on the multiset of labels at the minimum distance, so reordering the training sample leaves every prediction unchanged. At feature $0$ the unique nearest label is $0$, and at feature $10$ all nearest labels are $1$; hence the rule predicts every training label correctly and [F2] gives empirical risk $0$. At feature $1$, the distances to $0$ and $10$ are $1$ and $9$, so the unique nearest label is $0$ and the loss at $(1,1)$ is $1$. [A1, F1, F2, given, algebra]

2.1 After deleting the unique point $(0,0)$, every remaining training point has feature $10$ and label $1$, so the nearest-neighbor rule predicts $1$ at feature $1$ and has test loss $0$. The deletion loss change for this sample, deleted index, and test point is therefore $1$, so [F3] gives a stability coefficient at least $1$. [A1, F3, step 1.1, algebra]

3.1 Every zero-one loss difference has absolute value at most $1$, so every term in the supremum [F3] is at most $1$. Step 2.1 attains this value for every $m\ge2$, hence the coefficient is exactly $1$. [F3, step 2.1, algebra] ∎
