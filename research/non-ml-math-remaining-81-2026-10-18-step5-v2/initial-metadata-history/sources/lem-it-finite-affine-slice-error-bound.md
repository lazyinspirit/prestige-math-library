---
id: lem-it-finite-affine-slice-error-bound
kind: lemma
title: Error bound for a finite simplex and affine slice
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [thm-nearest-point-in-a-nonempty-closed-convex-set, lem-projection-onto-a-closed-convex-set-has-the-variational-inequality, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; there are finitely many support patterns, and every nearest point is uniquely determined.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_obligations:
  - Prove a finite constant exists for every nonempty affine slice of the probability simplex, without invoking a general Hoffman theorem.
  - Use the projection variational inequality on each realized support face and handle the whole-simplex slice.
sources:
  references:
    - title: D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 6
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Lecture 6, pp. 32–33; existence and variational characterization of Euclidean projections.
---

## Statement

Let $d\ge1$, let $\Delta_d=\{p\in\mathbb R^d:p_i\ge0,\sum_i p_i=1\}$, let $M:\mathbb R^d\to\mathbb R^r$ be linear, and let $F=\{q\in\Delta_d:Mq=b\}$ be nonempty. There is a finite $H$ such that
$$\operatorname{dist}_2(p,F)\le H\|Mp-b\|_2\qquad(p\in\Delta_d).$$

## Facts & Assumptions

**Given:** The finite-dimensional simplex, linear map, and nonempty affine slice in the Statement.

[F1] [[thm-nearest-point-in-a-nonempty-closed-convex-set]]: every point of Euclidean space has a unique nearest point in a nonempty closed convex set.

[F2] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $q$ is the nearest point in a closed convex set to $p$, then $\langle p-q,z-q\rangle\le0$ for every point $z$ in that set.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: closed bounded subsets of finite-dimensional Euclidean space are compact, and continuous real functions attain minima on nonempty compact sets.

## Proof

1.1 For each support set $J\subseteq\{1,\ldots,d\}$ realized as $J=\operatorname{supp}q$ by some $q\in F$, define $C_J=\{v:\sum_i v_i=0,\ v_i\ge0\ (i\notin J),\ \langle v,w\rangle\le0\text{ for every }w\text{ with }\sum_iw_i=0,\ Mw=0,\ w_i\ge0\ (i\notin J)\}.$ This is a closed cone, being an intersection of closed linear constraints and closed half-spaces. If $v\in C_J$ and $Mv=0$, then $v$ is an allowed $w$ in its defining inequality, hence $\|v\|_2^2\le0$ and $v=0$. [given, algebra]

1.2 The set $F=\Delta_d\cap M^{-1}\{b\}$ is nonempty, closed, and convex: in coordinates it is given by finitely many closed linear inequalities and affine equations. Thus [F1] applies. Suppose $p\notin F$ and let $q$ be its nearest point in $F$. Put $J=\operatorname{supp}q$ and $v=(p-q)/\|p-q\|_2$. Then $\sum_i v_i=0$ and $v_i\ge0$ outside $J$, because $p_i\ge0=q_i$ there. [F1, given, construct]

2.1 For each realized $J$, the set $C_J\cap\{v:\|v\|_2=1\}$ is compact by [F3]. If nonempty, the continuous function $v\mapsto\|Mv\|_2$ has a positive minimum $c_J$: a zero would contradict step 1.1. There are finitely many $J$, so the minimum $c$ of these positive $c_J$ is positive whenever any such unit section is nonempty. If all are empty, suppose $p\notin F$ and take its nearest point $q\in F$ by [F1]. With $J=\operatorname{supp}q$ and $v=(p-q)/\|p-q\|_2$, every vector $w$ in the tangent conditions defining $C_J$ has $q+tw\in F$ for small $t>0$. [F2] then gives $\langle v,w\rangle\le0$, so $v\in C_J$ and $\|v\|_2=1$, a contradiction. Hence $F=\Delta_d$ and the claim is immediate. [F1, F2, F3, step 1.1, algebra]

2.2 If $w$ satisfies the linear and sign conditions in the definition of $C_J$, then $q+tw\in F$ for all sufficiently small $t>0$: the affine equations are preserved, coordinates outside $J$ remain nonnegative, and the finitely many positive coordinates of $q$ on $J$ remain positive. By [F2], $\langle p-q,tw\rangle\le0$, so $\langle v,w\rangle\le0$ and $v\in C_J$. [F2, step 1.2, given, algebra]

3.1 For the nontrivial case of step 2.1, homogeneity and its constant $c$ give $\|Mp-b\|_2=\|M(p-q)\|_2=\|p-q\|_2\|Mv\|_2\ge c\operatorname{dist}_2(p,F)$. Taking $H=1/c$ proves the result for $p\notin F$; for $p\in F$ the left side is zero. In the empty-unit-section case from step 2.1, $F=\Delta_d$ and any $H>0$ works. [step 2.1, step 1.2, step 2.2, algebra] ∎
