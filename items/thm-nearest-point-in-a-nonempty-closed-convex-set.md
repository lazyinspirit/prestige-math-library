---
id: thm-nearest-point-in-a-nonempty-closed-convex-set
kind: theorem
title: "Every point has a unique nearest point in a nonempty closed Euclidean convex set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-subset-of-euclidean-space, thm-extreme-value-metric, thm-heine-borel-rn, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §2.5.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 6"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex, and let $x\in\mathbb R^n$. Then there is a unique $p\in C$ such that $\|x-p\|_2\le\|x-z\|_2$ for every $z\in C$.

## Facts & Assumptions

**Given:** The set and point in the Statement. Closedness and convexity have the meanings of [[def-metric-interior-closure-boundary]] and [[def-convex-subset-of-euclidean-space]], and distances come from [[def-euclidean-inner-product]].

[L1] For $n\ge1$, a subset of $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L2] A continuous real function on a nonempty compact metric space attains a maximum and a minimum ([[thm-extreme-value-metric]]).

[L3] The Euclidean norm satisfies the parallelogram law ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** contradiction.

1.1 Choose $c_0\in C$ and put $R=\|x-c_0\|_2$. The set $K=C\cap\overline B(x,R)$ is nonempty, closed, and bounded, hence compact by [L1]. The continuous distance $z\mapsto\|x-z\|_2$ attains a minimum at some $p\in K$ by [L2]. Points of $C\setminus K$ have distance greater than $R$, so $p$ minimizes distance over all of $C$. [L1, L2, given, choose]

2.1 Suppose distinct $p,q\in C$ both minimize the squared distance at $d^2$. Convexity puts $(p+q)/2$ in $C$, while [L3] gives $$\left\|x-\frac{p+q}{2}\right\|_2^2=d^2-\frac14\|p-q\|_2^2<d^2,$$ contradicting minimality. Thus the nearest point is unique. [step 1.1, L3, given, assume-contra, algebra, discharge-contradiction] ∎
