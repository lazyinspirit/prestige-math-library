---
id: lem-finite-index-bootstrap-sample-is-conditionally-iid
kind: lemma
title: Finite-index bootstrap draws are conditionally IID from the empirical law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-iid-empirical-bootstrap-sample
  - lem-empirical-bootstrap-law-is-a-probability-measure
  - lem-measurable-functions-preserve-independence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §2"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §2"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Statement

For fixed data $x_1,\ldots,x_n\in\mathbb R^d$, the coordinates of the finite-index bootstrap sample in [[def-iid-empirical-bootstrap-sample]] are independent and each has law $P_n$.

## Facts & Assumptions

**Given:** The fixed data, empirical law, and finite product index space in the definition.

[F1] The bootstrap index tuple is uniform on $\{1,\ldots,n\}^n$, and $X_j^*=x_{I_j}$. [[def-iid-empirical-bootstrap-sample]]

[F2] $P_n$ is a probability measure. [[lem-empirical-bootstrap-law-is-a-probability-measure]]

[F3] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

## Proof

1.1 For subsets $C_1,\ldots,C_n\subseteq\{1,\ldots,n\}$, the product-uniform index law gives $\mathbb P^*(I_1\in C_1,\ldots,I_n\in C_n)=\frac{\prod_{j=1}^n|C_j|}{n^n} =\prod_{j=1}^n\frac{|C_j|}{n}.$ Thus the coordinate indices are independent and each is uniform on $\{1,\ldots,n\}$. [F1, given, algebra]

2.1 For each $j$, the map $i\mapsto x_i$ from the finite discrete index set to $\mathbb R^d$ is measurable, and its pushforward of the uniform law assigns $A\in\mathcal B(\mathbb R^d)$ mass $n^{-1}\sum_i1\{x_i\in A\}=P_n(A)$. Applying [F3] to the independent indices shows the values $X_j^*=x_{I_j}$ are independent; their common law is $P_n$, which is a probability law by [F2]. [F1, F2, F3, given] ∎
