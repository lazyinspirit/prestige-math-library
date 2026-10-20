---
id: def-k-means-objective
kind: definition
title: "K-means objective"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
verification:
  precheck: n/a
---

## Definition

Let $n,p$ be positive integers, let $1\le K\le n$, let $x_1,\ldots,x_n\in\mathbb R^p$ be observed vectors, and let $\mu_1,\ldots,\mu_K\in\mathbb R^p$ be centers. A labeling is a vector $z=(z_1,\ldots,z_n)\in\{1,\ldots,K\}^n$, and its $k$th cluster is $C_k(z):=\{i:z_i=k\}$. For $v=(v_1,\ldots,v_p)\in\mathbb R^p$, set $\|v\|_2^2:=\sum_{j=1}^p v_j^2$. The K-means objective is

$$J(z,\mu_1,\ldots,\mu_K):=\sum_{i=1}^n\|x_i-\mu_{z_i}\|_2^2=\sum_{k=1}^K\sum_{i\in C_k(z)}\|x_i-\mu_k\|_2^2.$$

An empty cluster contributes zero to the sum.
