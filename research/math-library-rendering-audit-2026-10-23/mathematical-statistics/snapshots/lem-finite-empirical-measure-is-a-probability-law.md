---
id: lem-finite-empirical-measure-is-a-probability-law
kind: lemma
title: A finite empirical measure is a probability law
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-dirac-measure
  - def-probability-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.3, PDF pp. 13–14"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 15 and 18"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Statement

Let $(X,\mathcal A)$ be a measurable space, let $n\ge1$, and let $x_1,\ldots,x_n\in X$. Define

$$P_n(A):=\frac1n\sum_{i=1}^n\delta_{x_i}(A),\qquad A\in\mathcal A.$$

Then $P_n$ is a probability measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal A)$, an integer $n\ge1$, points $x_1,\ldots,x_n\in X$, and the displayed set function $P_n$.

[F1] [[def-dirac-measure]]: $\delta_x(A)=1$ when $x\in A$ and $0$ otherwise.

[F2] [[def-probability-measure]]: a probability measure is a countably additive measure of total mass one.

## Proof

**Proof technique:** direct.

1.1 Each summand in $P_n(A)$ is nonnegative, $P_n(\varnothing)=0$, and $P_n(X)=n^{-1}\sum_{i=1}^n1=1$ by [F1]. [given, F1, algebra]

1.2 Let $(A_j)_{j\ge1}$ be pairwise disjoint. For each $j$, let $I_j:=\{i\in\{1,\ldots,n\}:x_i\in A_j\}$. The sets $I_j$ are pairwise disjoint, and at most $n$ of them are nonempty, because each index $i$ belongs to at most one $I_j$. Their union is $\{i:x_i\in\bigcup_jA_j\}$. Hence the number of sample indices in $\bigcup_jA_j$ is $\sum_j\#I_j$, and dividing by $n$ gives $P_n(\bigcup_jA_j)=\sum_jP_n(A_j)$. [given, F1, algebra]

2.1 Steps 1.1–1.2 show that $P_n$ is a nonnegative countably additive set function with total mass one; by [F2] it is a probability measure. [step 1.1, step 1.2, F2] ∎

