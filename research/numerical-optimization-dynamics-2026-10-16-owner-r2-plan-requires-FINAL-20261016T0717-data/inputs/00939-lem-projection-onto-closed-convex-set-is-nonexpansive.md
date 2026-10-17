---
id: lem-projection-onto-closed-convex-set-is-nonexpansive
kind: lemma
title: Projection onto a closed convex set is nonexpansive
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124, the projection and convex-normal-cone interface for projected dynamical systems.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 302–303, where the projection theorem supplies the variational inequality for a projected step.
---

## Statement

Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $P_C(y)$ denote the unique nearest point in $C$ to $y$. Then
$$\|P_C(u)-P_C(v)\|_2\le\|u-v\|_2\qquad(u,v\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** The set $C$ and points $u,v$ in the Statement.

[F1] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $p=P_C(y)$, then $\langle y-p,z-p\rangle\le0$ for every $z\in C$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle a,b\rangle|\le\|a\|_2\|b\|_2$.

## Proof

1.1 Put $p=P_C(u)$ and $q=P_C(v)$. Applying [F1] first with $(y,z)=(u,q)$ and then with $(y,z)=(v,p)$ gives $\langle u-p,p-q\rangle\ge0$ and $\langle q-v,p-q\rangle\ge0$. Therefore
$$\langle u-v,p-q\rangle=\langle u-p,p-q\rangle+\|p-q\|_2^2+\langle q-v,p-q\rangle\ge\|p-q\|_2^2.$$
[F1, given, algebra]

2.1 By [F2], $\|p-q\|_2^2\le\|u-v\|_2\|p-q\|_2$. If $p=q$ the result is immediate; otherwise divide by the positive number $\|p-q\|_2$. [F2, step 1.1, given, algebra] ∎
