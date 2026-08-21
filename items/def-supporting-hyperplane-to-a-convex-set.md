---
id: def-supporting-hyperplane-to-a-convex-set
kind: definition
title: "Supporting and strictly separating hyperplanes in Euclidean space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-inner-product, def-convex-subset-of-euclidean-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §2.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 6"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Definition

Let $a\ne0$ in $\mathbb R^n$ and $b\in\mathbb R$. The set

$$H(a,b)=\{x\in\mathbb R^n:\langle a,x\rangle=b\}$$

is an affine **hyperplane**, with inner product as in [[def-euclidean-inner-product]]. It **supports** a set $C$ at $p\in C$ when $p\in H(a,b)$ and either $\langle a,z\rangle\le b$ for every $z\in C$ or the reverse inequality holds for every $z\in C$.

A point $x\notin C$ is **strictly separated** from $C$ when there are $a\ne0$ and $b$ such that

$$\langle a,z\rangle\le b<\langle a,x\rangle\qquad(z\in C).$$

Two nonempty sets $C,D$ are **separated by a hyperplane** when some $a\ne0$ satisfies $\langle a,c\rangle\le\langle a,d\rangle$ for every $c\in C$ and $d\in D$. No convexity is part of these definitions; it is a hypothesis of the existence theorems below ([[def-convex-subset-of-euclidean-space]]).
