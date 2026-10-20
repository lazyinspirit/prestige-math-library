---
id: def-empirical-decision-tree
kind: definition
title: "Empirical axis-aligned binary decision trees"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 0
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–15'
      url: 'https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Fix a finite labeled sample $(x_i,y_i)_{i=1}^n$ with $n\ge1$, $x_i\in\mathbb R^p$ and $p\ge1$. In regression, $y_i\in\mathbb R$. In classification, the labels lie in a fixed ordered finite set $\mathcal C=\{c_1<\cdots<c_K\}$ with $K\ge1$. A finite empirical axis-aligned binary decision tree has root sample-index set $I_{\mathrm{root}}=\{1,\ldots,n\}$. Each internal node $v$ stores a coordinate $j\in\{1,\ldots,p\}$ and threshold $t\in\mathbb R$; its left and right child sample sets are $I_v^L=\{i\in I_v:x_{ij}\le t\}$ and $I_v^R=\{i\in I_v:x_{ij}>t\}$, and both are required to be nonempty. A leaf is a terminal node. The leaf sample sets partition $\{1,\ldots,n\}$, and each node's feature region is the intersection of its path inequalities. Every input feature vector follows the unique path determined by the stored comparisons.

For a regression leaf with sample set $I$, put $N_I=|I|$, $\bar y_I=N_I^{-1}\sum_{i\in I}y_i$, and $Q_I=N_I^{-1}\sum_{i\in I}(y_i-\bar y_I)^2$; its prediction is $\bar y_I$ and its total squared-error loss is $N_IQ_I$. For a classification leaf, put $p_{Ik}=N_I^{-1}|\{i\in I:y_i=c_k\}|$ and predict the class $c_k$ with largest $p_{Ik}$, choosing the least index in a tie. Its optional impurities are misclassification $Q_I^{\mathrm{mis}}=1-\max_k p_{Ik}$, Gini $Q_I^{\mathrm{Gini}}=1-\sum_{k=1}^Kp_{Ik}^2$, and entropy $Q_I^{\mathrm{ent}}=-\sum_{k=1}^Kp_{Ik}\log p_{Ik}$, where $\log$ is the natural logarithm and $0\log0=0$. A chosen classification criterion determines $Q_I$ and the corresponding total leaf impurity is $N_IQ_I$.

## Definition references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.1–9.2.3, printed pp. 305–310](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 14–15](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf)
