---
id: thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set
kind: theorem
title: "Every boundary point belonging to a nonempty Euclidean convex set has a supporting hyperplane"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-convex-set-and-closure-have-same-interior-and-boundary, def-supporting-hyperplane-to-a-convex-set, thm-strict-separation-of-a-point-from-a-closed-convex-set, cor-euclidean-closed-balls-and-spheres-are-compact, cor-bolzano-weierstrass-in-rn, thm-metric-sequential-closure, def-metric-interior-closure-boundary, def-axiom-of-choice, def-countable-choice]
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
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §2.5.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 7"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty and convex, and let $a\in C\cap\partial C$. Then there is a nonzero vector $u$ such that $\langle u,z-a\rangle\le0$ for every $z\in C$. Thus the hyperplane through $a$ normal to $u$ supports $C$ ([[def-supporting-hyperplane-to-a-convex-set]]).

## Facts & Assumptions

**Given:** The countable-choice, boundary, and sequential-closure conventions in the Statement ([[def-metric-interior-closure-boundary]], [[thm-metric-sequential-closure]]) and compactness of the Euclidean unit sphere [[cor-euclidean-closed-balls-and-spheres-are-compact]].

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[A2] The Axiom of Countable Choice supplies a choice function for every family of nonempty sets indexed by $\mathbb N$ ([[def-countable-choice]]).

[L0] The closure $\overline C$ is convex, $\operatorname{int}(C)=\operatorname{int}(\overline C)$, and $\partial C=\partial\overline C$ ([[lem-convex-set-and-closure-have-same-interior-and-boundary]]).

[L1] If $x$ lies outside a nonempty closed convex set, then there are $v\ne0$ and $b\in\mathbb R$ such that $\langle v,z\rangle\le b<\langle v,x\rangle$ for every point $z$ of the set ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[L2] For $n\ge1$, every bounded sequence in $\mathbb R^n$ has a convergent subsequence selected by a strictly increasing index map ([[cor-bolzano-weierstrass-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], [A2], and [L0], $a$ remains a boundary point after replacing $C$ by the closed convex set $\overline C$. Since every ball about $a$ meets the complement, the sequence-producing direction of [[thm-metric-sequential-closure]] uses [A2] to choose $x_j\notin\overline C$ with $x_j\to a$. Apply [L1] to each $x_j$ and normalize its separating normal $u_j$ to length one; then $$\langle u_j,z-x_j\rangle<0\qquad(z\in\overline C).$$ [A1, A2, L0, L1, given, choose]

2.1 The unit normals are bounded, so [L2] gives a subsequence converging to a vector $u$ of norm one. For fixed $z\in\overline C$, pass the inequalities of step 1.1 to the limit, using $x_j\to a$, to obtain $\langle u,z-a\rangle\le0$. The unit vector $u$ is nonzero, and the inequality holds in particular for $z\in C$. [step 1.1, L2, algebra] ∎
