---
id: thm-separating-hyperplane-theorem-for-disjoint-convex-sets
kind: theorem
title: "Disjoint nonempty Euclidean convex sets have a separating hyperplane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-strict-separation-of-a-point-from-a-closed-convex-set, thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set, lem-convex-set-and-closure-have-same-interior-and-boundary, def-supporting-hyperplane-to-a-convex-set, def-convex-subset-of-euclidean-space, def-metric-interior-closure-boundary, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §2.5.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 7"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and let $C,D\subseteq\mathbb R^n$ be nonempty, disjoint, and convex. Then there is $a\ne0$ such that

$$\langle a,c\rangle\le\langle a,d\rangle\qquad(c\in C,\ d\in D).$$

Thus $C$ and $D$ are separated by a hyperplane in the sense of [[def-supporting-hyperplane-to-a-convex-set]]. The inequality need not be strict when the two sets have distance zero.

## Facts & Assumptions

**Given:** The sets and choice principles in the Statement, convexity as in [[def-convex-subset-of-euclidean-space]], and the boundary convention [[def-metric-interior-closure-boundary]].

[A1] AC and $\mathrm{AC}_\omega$ supply the choice functions asserted in [[def-axiom-of-choice]] and [[def-countable-choice]].

[L1] A point outside a nonempty closed convex set can be strictly separated from it ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[L2] Every boundary point of a nonempty convex set has a supporting hyperplane ([[thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set]]).

[L3] The closure of a nonempty convex subset of $\mathbb R^n$ is convex ([[lem-convex-set-and-closure-have-same-interior-and-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Put $E=C-D=\{c-d:c\in C,d\in D\}$. It is nonempty and convex and omits zero because $C\cap D=\varnothing$. By [L3], $\overline E$ is convex. Either $0\notin\overline E$, or $0\in\overline E\setminus E$ and therefore $0\in\partial E$, since an interior point of $E$ would belong to $E$. [L3, given, algebra]

2.1 In the first case, apply [L1] to $0$ and $\overline E$; in the second, [A1] licenses the hypotheses of [L2], which applies to $E$ at zero. Each branch gives a nonzero $a$ with $\langle a,e\rangle\le0$ for every $e\in E$. Substituting $e=c-d$ gives $\langle a,c\rangle\le\langle a,d\rangle$ for all $c\in C,d\in D$. [step 1.1, A1, L1, L2, algebra] ∎
