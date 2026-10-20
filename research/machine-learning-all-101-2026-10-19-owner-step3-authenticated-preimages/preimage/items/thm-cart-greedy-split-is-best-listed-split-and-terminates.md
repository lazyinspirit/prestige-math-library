---
id: thm-cart-greedy-split-is-best-listed-split-and-terminates
kind: theorem
title: "Greedy CART minimizes the listed split loss and terminates"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 3
deps:
  - def-empirical-decision-tree
  - thm-node-mean-minimizes-squared-error
  - alg-cart-greedy-split
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2–9.2.3'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–15'
      url: 'https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Fix a finite labeled sample, response mode, classification impurity criterion when needed, and finite maximum depth as in greedy CART growth. At any node where the procedure splits, its selected coordinate and midpoint threshold minimize the declared child-weighted empirical loss among all nonempty coordinate-threshold partitions of that node's sample, with the specified lexicographic tie rule. The procedure produces a finite tree of depth at most the maximum depth, with nonempty children at every split. This is a nodewise candidate-optimality result only; it gives no global tree-optimality claim.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2–9.2.3, printed pp. 307–310](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–15](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf)

## Facts & Assumptions

**Given:** A finite labeled sample with $n\ge1$, a regression or classification mode, the fixed classification impurity criterion when applicable, and a finite integer maximum depth $d_{\max}\ge0$.

[F1] [[def-empirical-decision-tree]]: Each split compares the nonempty child sample sets formed by one coordinate threshold; regression leaf loss is the sum of squared deviations from its sample mean, and classification leaf loss is sample count times the selected impurity.

[F2] [[thm-node-mean-minimizes-squared-error]]: On a nonempty regression leaf, the unique constant minimizing the sum of squared errors is the sample mean.

[F3] [[alg-cart-greedy-split]]: At each eligible node, the algorithm forms midpoint thresholds between adjacent distinct observed coordinate values and selects the least child score, resolving score ties by coordinate and cut-index order.

## Proof

1.1 At a node with finite nonempty sample set $I$, each coordinate has finitely many distinct observed values. Arrange them in increasing order $u_1<\cdots<u_r$. For every $k<r$, the midpoint between $u_k$ and $u_{k+1}$ gives two nonempty children. Conversely, any real threshold with two nonempty children has a unique gap $u_k\le s<u_{k+1}$ and induces the same partition as that midpoint. Thus the algorithm's candidate list is finite and contains every nonempty partition produced by one coordinate threshold. [F1, F3, construct]

2.1 For each candidate the child score is a finite real sum. If the candidate list is nonempty, repeatedly comparing its finite list of scores produces a minimum, and the coordinate/cut-index order selects a unique first minimizer among ties. By [F2], the regression child means attain the least squared error on each child; by [F1], the classification score is the declared weighted impurity. The chosen candidate therefore minimizes the declared child loss over all such partitions. [F1, F2, F3, step 1.1, algebra, choose]

3.1 Every recursive call increases depth by one, and calls at depth $d_{\max}$ stop. Each split creates two disjoint nonempty sample sets from its parent, so every terminal leaf contains at least one of the $n$ sample indices. Each split increases the number of leaves by one; hence there are at most $n-1$ splits. The recursion terminates with depth at most $d_{\max}$ and all created children nonempty. [F1, F3, step 1.1, algebra] ∎

