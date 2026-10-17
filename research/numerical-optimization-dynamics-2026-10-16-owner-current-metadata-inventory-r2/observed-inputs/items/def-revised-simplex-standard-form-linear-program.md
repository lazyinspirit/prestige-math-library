---
id: def-revised-simplex-standard-form-linear-program
kind: definition
title: "Revised simplex standard-form linear program"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§2.3 and 3.1–3.2"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§1.2–2.3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Definition

Let $m,n$ be nonnegative integers, $A\in\mathbb R^{m\times n}$, $b\in\mathbb R^m$, and $c\in\mathbb R^n$. The standard-form minimization linear program with data $(A,b,c)$ is
$$\min\{c^{\mathsf T}x:Ax=b,\ x\ge0\}.$$
Its feasible set is $P(A,b)=\{x\in\mathbb R^n:Ax=b,\ x_j\ge0\text{ for every }j\}$, and a feasible $x$ is optimal if $c^{\mathsf T}x\le c^{\mathsf T}z$ for every $z\in P(A,b)$. The notation $x\ge0$ is componentwise. The revised-simplex basis algorithms on this page require a full-row-rank matrix, meaning $\operatorname{rank}(A)=m$; a rank-deficient raw system must first be reduced by exact row operations, with inconsistent rows reported as infeasible. For $m=0$, the empty system has its usual zero-dimensional interpretation.

A vector $q\in\mathbb R^m$ satisfying $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$ is called a **Farkas infeasibility certificate** for this sign convention. Indeed, any feasible $x\ge0$ would give $b^{\mathsf T}q=x^{\mathsf T}A^{\mathsf T}q\ge0$.
