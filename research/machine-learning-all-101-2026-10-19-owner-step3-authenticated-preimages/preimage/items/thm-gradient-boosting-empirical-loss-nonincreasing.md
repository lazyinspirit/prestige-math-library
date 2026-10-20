---
id: thm-gradient-boosting-empirical-loss-nonincreasing
kind: theorem
title: "Gradient tree boosting does not increase empirical loss"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
dependency_level: 5
deps:
  - alg-gradient-boosting
  - def-empirical-decision-tree
  - thm-cart-greedy-split-is-best-listed-split-and-terminates
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

For any finite run of the defined gradient tree boosting algorithm for which the initial constant and every leaf line minimizer are attained, let $L_m=\sum_{i=1}^N\ell(y_i,f_m(x_i))$. At every completed round $m$, $L_m\le L_{m-1}$, and hence $L_M\le L_0$. This is a finite-step empirical-loss statement only; it asserts no convergence or generalization result.

## Statement references

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §10.10.3, Algorithm 10.3, printed p. 361](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** One completed finite boosting round, the finite training sample, and the attained leafwise minimizers.

[F1] [[alg-gradient-boosting]]: The tree's terminal regions determine the update, and each $\gamma_{jm}$ attains the minimum of the corresponding leaf loss over all real offsets.

[F2] [[def-empirical-decision-tree]]: A finite tree has nonempty terminal sample sets that partition the training indices, and each training observation follows its unique leaf path.

[F3] [[thm-cart-greedy-split-is-best-listed-split-and-terminates]]: With finite depth, the CART procedure returns a finite tree with nonempty children at every split.

## Proof

1.1 Fix a completed round $m$. By [F2] and [F3], its leaf index sets $I_{jm}=\{i:x_i\in R_{jm}\}$ are finitely many nonempty sets whose disjoint union is $\{1,\ldots,N\}$. [given, F2, F3]

2.1 For every leaf $j$, its attained minimizer $\gamma_{jm}$ has loss no greater than the admissible offset $0$, so $\sum_{i\in I_{jm}}\ell\bigl(y_i,f_{m-1}(x_i)+\gamma_{jm}\bigr)\le\sum_{i\in I_{jm}}\ell\bigl(y_i,f_{m-1}(x_i)\bigr)$. [F1, step 1.1, given]

3.1 By the update rule, each training score $f_m(x_i)$ uses the offset for its unique leaf. Summing the inequalities in step 2.1 over the partition in step 1.1 gives $L_m=\sum_j\sum_{i\in I_{jm}}\ell\bigl(y_i,f_{m-1}(x_i)+\gamma_{jm}\bigr)\le\sum_j\sum_{i\in I_{jm}}\ell\bigl(y_i,f_{m-1}(x_i)\bigr)=L_{m-1}$. Applying this to each of the finitely many rounds yields $L_M\le L_0$. [F1, F2, step 1.1, step 2.1, algebra] ∎
