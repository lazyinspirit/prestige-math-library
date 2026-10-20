---
id: ex-separable-hard-margin-svm
kind: example
title: A one-dimensional separable hard-margin SVM
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-hard-and-soft-margin-support-vector-machines
  - ex-linear-and-polynomial-kernels
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.2, printed pp. 417–421; the finite two-point calculation is supplied locally.'
---

## Example

Take $X=\mathbb R$, $\mathcal H=\mathbb R$, $\phi(x)=x$, and $k(x,z)=xz$. For the sample $(-1,-1),(1,+1)$, the hard-margin SVM is feasible and its minimum objective value is $1/2$, attained at $w=1$, $b=0$. The score is $s(x)=x$, and both training points have signed margin $1$.

## Example references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §12.2](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[[def-hard-and-soft-margin-support-vector-machines]]

[[ex-linear-and-polynomial-kernels]]

## Facts & Assumptions

**Given:** The feature map, kernel, two labeled points, and the hard-margin definition.

[F1] The hard-margin problem minimizes $\frac12\|w\|^2$ subject to $y_i(\langle w,\phi(x_i)\rangle+b)\ge1$ when the sample is margin-separable ([[def-hard-and-soft-margin-support-vector-machines]]).

[F2] The linear kernel $k(x,z)=xz$ on $\mathbb R$ is positive semidefinite ([[ex-linear-and-polynomial-kernels]]).

## Verification




1.1 The feature map realizes the stated kernel directly: $\langle\phi(x),\phi(z)\rangle=xz=k(x,z)$; [F2] also verifies that this kernel is positive semidefinite. With $w,b\in\mathbb R$, the two hard-margin constraints are $w-b\ge1$ and $w+b\ge1$. Adding them gives $w\ge1$. [given, F1, F2, algebra]


2.1 Hence every feasible objective satisfies $\frac12w^2\ge\frac12$. The candidate $w=1,b=0$ satisfies both constraints with equality and has objective $1/2$, so it attains the minimum. [step 1.1, F1, algebra]


3.1 For this minimizer, $s(x)=wx+b=x$. Thus the signed margins at $(-1,-1)$ and $(1,+1)$ are both $1$, as stated. [step 2.1, given, algebra] ∎

