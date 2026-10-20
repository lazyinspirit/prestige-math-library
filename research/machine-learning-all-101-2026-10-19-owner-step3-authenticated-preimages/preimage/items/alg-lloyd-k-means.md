---
id: alg-lloyd-k-means
kind: algorithm
title: "Lloyd's k-means algorithm with explicit tie handling"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-k-means-objective
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

**Input.** Let $n,p$ be positive integers, let $1\le K\le n$, let $x_1,\ldots,x_n\in\mathbb R^p$, and supply initial centers $\mu_1^{(0)},\ldots,\mu_K^{(0)}\in\mathbb R^p$.

**Initialization.** Assign each $x_i$ to a nearest initial center, choosing the smallest center index in a tie. Denote these labels by $z_i^{(0)}$.

**Iteration.** For $t=0,1,2,\ldots$:

1. With the current centers fixed, assign each $x_i$ to a nearest center. If its current label $z_i^{(t)}$ is among the nearest-center indices, retain $z_i^{(t)}$; otherwise choose the smallest nearest-center index. Call the resulting labels $z_i^{(t+1)}$.
2. For each nonempty cluster $C_k^{(t+1)}:=\{i:z_i^{(t+1)}=k\}$, set
   $$\mu_k^{(t+1)}:=\frac{1}{|C_k^{(t+1)}|}\sum_{i\in C_k^{(t+1)}}x_i.$$
   If $C_k^{(t+1)}$ is empty, set $\mu_k^{(t+1)}:=\mu_k^{(t)}$.
3. If both $z^{(t+1)}=z^{(t)}$ and $\mu^{(t+1)}=\mu^{(t)}$, return these labels and centers. Otherwise continue with the updated labels and centers.

The procedure makes no global-minimization claim. Its termination under these tie rules is proved separately.
