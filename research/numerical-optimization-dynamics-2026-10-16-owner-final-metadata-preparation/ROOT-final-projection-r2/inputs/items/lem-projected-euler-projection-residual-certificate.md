---
id: lem-projected-euler-projection-residual-certificate
kind: lemma
title: A certified projection variational residual bounds the projection error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - def-euclidean-inner-product
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
      locator: Section 4.3, pp. 122–124; projection variational inequalities used in projected evolution.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slide 302; projection variational inequality used in a projected step.
---

## Statement

Let $d\in\mathbb N$, including $d=0$. Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex. If $y\in\mathbb R^d$, $\varepsilon\ge0$, and $p\in C$ satisfy
$$\sup_{z\in C}\langle y-p,z-p\rangle\le\varepsilon^2,$$
then $\|p-P_C(y)\|_2\le\varepsilon$.

## Facts & Assumptions

**Given:** The set $C$, input $y$, tolerance $\varepsilon$, and feasible candidate $p$ in the Statement.

[F1] For $d\ge1$, [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: $q=P_C(y)$ satisfies $\langle y-q,z-q\rangle\le0$ for every $z\in C$.

[F2] [[def-euclidean-inner-product]]: $\mathbb R^0=\{0\}$ and its Euclidean norm and inner product are zero.

## Proof

1.1 If $d=0$, then $C=\{0\}$, $y=p=P_C(y)=0$, and the residual supremum is $0\le\varepsilon^2$; the asserted distance is $0\le\varepsilon$. [F2, given]

2.1 Now assume $d\ge1$. Put $q=P_C(y)$ and $d_0=p-q$. The residual bound at $z=q$ gives $\langle y-p,d_0\rangle\ge-\varepsilon^2$. By [F1] with $z=p$, $\langle y-q,d_0\rangle\le0$. Since $y-q=(y-p)+d_0$, this also gives $\langle y-p,d_0\rangle+\|d_0\|_2^2\le0$. [F1, given, algebra]

3.1 Combining the two bounds yields $\|d_0\|_2^2\le\varepsilon^2$. Both sides are nonnegative, so $\|p-P_C(y)\|_2=\|d_0\|_2\le\varepsilon$. This also covers $\varepsilon=0$. [step 2.1, given, algebra] ∎
