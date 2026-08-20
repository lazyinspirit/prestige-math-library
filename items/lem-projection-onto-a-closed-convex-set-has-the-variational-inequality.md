---
id: lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
kind: lemma
title: "Metric projection onto a closed convex set satisfies the variational inequality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nearest-point-in-a-nonempty-closed-convex-set, def-convex-subset-of-euclidean-space, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex, let $x\in\mathbb R^n$, and let $p\in C$. Then $p$ is the nearest point of $C$ to $x$ if and only if

$$\langle x-p,z-p\rangle\le0\qquad(z\in C).$$

## Facts & Assumptions

**Given:** The Euclidean inner product [[def-euclidean-inner-product]] and convexity of $C$ [[def-convex-subset-of-euclidean-space]].

[L1] There is a unique $p\in C$ such that $\|x-p\|_2\le\|x-z\|_2$ for every $z\in C$ ([[thm-nearest-point-in-a-nonempty-closed-convex-set]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, let $p$ be the nearest point and take $z\in C$. For $0<t\le1$, convexity puts $p+t(z-p)$ in $C$. Comparing its squared distance with the minimum in [L1] and expanding gives $$2\langle x-p,z-p\rangle\le t\|z-p\|_2^2.$$ If the left inner product were positive, a sufficiently small $t>0$ would violate this inequality, so it is nonpositive. [L1, given, algebra]

2.1 For the reverse implication, suppose the displayed variational inequality holds. Expanding gives $$\|x-z\|_2^2=\|x-p\|_2^2+\|z-p\|_2^2-2\langle x-p,z-p\rangle\ge\|x-p\|_2^2.$$ Thus $p$ satisfies the nearest-point condition of [L1]. [L1, algebra] ∎
