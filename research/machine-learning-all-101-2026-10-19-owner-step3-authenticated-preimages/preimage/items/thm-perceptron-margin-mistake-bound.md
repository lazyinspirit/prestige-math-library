---
id: thm-perceptron-margin-mistake-bound
kind: theorem
title: The perceptron makes at most R squared over gamma squared mistakes
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-cyclic-perceptron
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Cornell CS4780 Spring 2018, Lecture 3: The Perceptron"
      url: "https://www.cs.cornell.edu/courses/cs4780/2018sp/lectures/lecturenote03.html"
---

## Statement

Let $((x_i,y_i))_{i=1}^n$ be a finite ordered sample with $n\ge1$, $x_i\in\mathbb R^d$, and $y_i\in\{-1,+1\}$. Put $\widetilde x_i=(x_i,1)\in\mathbb R^{d+1}$, with Euclidean inner product $\langle u,v\rangle=u^Tv$ and norm $\|u\|_2=(u^Tu)^{1/2}$. Suppose $\|\widetilde x_i\|_2\le R$ for every $i$ and there is a unit vector $u\in\mathbb R^{d+1}$ and $\gamma>0$ such that $y_i\langle u,\widetilde x_i\rangle\ge\gamma$ for every $i$. The zero-initialized cyclic procedure that visits the sample in the stated order and updates $w\leftarrow w+y_i\widetilde x_i$ whenever $y_i\langle w,\widetilde x_i\rangle\le0$ makes at most $R^2/\gamma^2$ updates and stops after a finite pass with no updates. At each visit, before its update, the procedure predicts $+1$ if $\langle w,\widetilde x_i\rangle>0$ and $-1$ otherwise; a prediction mistake is a visit on which this prediction differs from $y_i$. The total number of such mistakes before termination is at most $R^2/\gamma^2$. The returned weight vector has strictly positive signed margin on every sample point.

## Statement references

[[alg-cyclic-perceptron]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[Hastie, Tibshirani, and Friedman, ESL, §4.5.1 and Exercise 4.6](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cornell CS4780 Spring 2018, Lecture 3, “Perceptron Convergence”](https://www.cs.cornell.edu/courses/cs4780/2018sp/lectures/lecturenote03.html)

## Facts & Assumptions

**Given:** A finite ordered sample, the augmented vectors $\widetilde x_i$, the bounds $\|\widetilde x_i\|_2\le R$, a unit separator $u$ with signed margin at least $\gamma>0$, and the zero-initialized cyclic procedure in the Statement.

[F1] The algorithm initializes $w=0$, predicts $+1$ when $\langle w,\widetilde x_i\rangle>0$ and $-1$ otherwise, updates $w\leftarrow w+y_i\widetilde x_i$ exactly when $y_i\langle w,\widetilde x_i\rangle\le0$, and stops after a full pass with no updates. [[alg-cyclic-perceptron]]

[F2] In a real inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

## Proof

1.1 After each update on point $i$, the separator progress changes by $\langle u,w+y_i\widetilde x_i\rangle-\langle u,w\rangle=y_i\langle u,\widetilde x_i\rangle\ge\gamma$. Starting at zero, after $M$ updates $\langle u,w_M\rangle\ge M\gamma$. [given, F1, algebra]

1.2 At an update, [F1] gives $y_i\langle w,\widetilde x_i\rangle\le0$ and $y_i^2=1$, so $\|w+y_i\widetilde x_i\|_2^2=\|w\|_2^2+2y_i\langle w,\widetilde x_i\rangle+\|\widetilde x_i\|_2^2\le\|w\|_2^2+R^2$. Since $w_0=0$, after $M$ updates $\|w_M\|_2^2\le MR^2$. [F1, given, algebra]

2.1 If $M=0$, the bound is immediate. If $M>0$, [F2] and $\|u\|_2=1$ give $M\gamma\le\langle u,w_M\rangle\le\|w_M\|_2\le\sqrt{M}R$, whence $M\le R^2/\gamma^2$. Thus only finitely many updates occur. [step 1.1, step 1.2, F2, given, algebra]

3.1 At a visit to point $i$, if $y_i=+1$ and the classifier is wrong, its score is at most zero; if $y_i=-1$ and the classifier is wrong, its score is positive. In either case $y_i\langle w,\widetilde x_i\rangle\le0$, so every prediction mistake triggers an update by [F1]. Thus the number of mistakes is at most the number of updates and is bounded by step 2.1. An infinite run would complete infinitely many passes, each with at least one update; that would contradict the finite update bound. Therefore a pass with no updates occurs, and during that pass every point has strictly positive signed margin because the update test is $\le0$. The algorithm stops and returns a training-separating weight vector. [F1, step 2.1, algebra] ∎
