---
id: alg-cart-greedy-split
kind: algorithm
title: "Greedy axis-aligned CART growth on a finite sample"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 2
deps:
  - def-empirical-decision-tree
  - thm-node-mean-minimizes-squared-error
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2–9.2.3'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–16'
      url: 'https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

The inputs are observations $(x_i,y_i)_{i=1}^n$ with $n\ge1$ and $x_i\in\mathbb R^p$ for an integer $p\ge1$, a response mode (regression with $y_i\in\mathbb R$ or classification with labels in a fixed finite ordered class set), a fixed classification impurity criterion when in classification mode, and a finite integer maximum depth $d_{\max}\ge0$. The root has sample set $\{1,\ldots,n\}$ and depth $0$. At a current leaf with nonempty sample set $I$ and depth $d<d_{\max}$, perform the following procedure.

1. For each coordinate $j\in\{1,\ldots,p\}$, sort the distinct observed values in that coordinate as $u_1<\cdots<u_r$. For each $k=1,\ldots,r-1$, form the candidate threshold $t=(u_k+u_{k+1})/2$ and its child sets $I_L=\{i\in I:x_{ij}\le t\}$ and $I_R=\{i\in I:x_{ij}>t\}$. These are the finite candidates at the node; if no coordinate has at least two distinct values, the candidate set is empty.

2. For each candidate, compute its child score. In regression the score is $\sum_{i\in I_L}(y_i-\bar y_{I_L})^2+\sum_{i\in I_R}(y_i-\bar y_{I_R})^2$. In classification it is $|I_L|Q_{I_L}+|I_R|Q_{I_R}$ for the fixed chosen impurity criterion. Select the candidate with the smallest score; when scores tie, select the least pair $(j,k)$ by comparing coordinate first and cut index second.

3. Store the selected coordinate and threshold at the current node, create its left and right children, and apply this procedure to the left child and then the right child at depth $d+1$. If $d=d_{\max}$ or the candidate set is empty, leave the current node as a leaf.

The output is the finite tree whose leaves use the regression means or classification majority labels from the empirical decision-tree definition. No strictly positive loss reduction is required for a split below the depth cap, and the returned tree is not asserted to be globally optimal among all trees.

## Definition references

[[def-empirical-decision-tree|Empirical tree structure, leaf means, and classification impurities]]

[[thm-node-mean-minimizes-squared-error|Least-squares optimality of the regression leaf mean]]

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2–9.2.3, printed pp. 307–310](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–16](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf)

