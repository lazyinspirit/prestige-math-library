---
id: lem-convex-set-and-closure-have-same-interior-and-boundary
kind: lemma
title: "A convex set and its closure have the same interior and boundary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-convex-subset-of-euclidean-space, def-linear-combination-and-span, cor-every-spanning-set-contains-a-basis, thm-dimension-of-a-linear-subspace, thm-all-norms-on-rn-are-equivalent, thm-euclidean-space-complete, thm-metric-sequential-closure, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-euclidean-inner-product, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and let $C\subseteq\mathbb R^n$ be nonempty and convex. The closure $\overline C$ is convex, $\operatorname{int}(C)=\operatorname{int}(\overline C)$, and $\partial C=\partial\overline C$.

## Facts & Assumptions

**Given:** The choice principles and the Euclidean topology and inner product in the Statement [[def-euclidean-inner-product]]. Relative interior is taken inside the affine hull of the set.

[A1] The Axiom of Choice says that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] The Axiom of Countable Choice says that every family of nonempty sets indexed by $\mathbb N$ has a choice function ([[def-countable-choice]]).

[F1] A subset $U\subseteq\mathbb R^m$ is convex when every $(1-t)x+ty$, for $x,y\in U$ and $t\in[0,1]$, belongs to $U$ ([[def-convex-subset-of-euclidean-space]]).

[L1] Under $\mathrm{AC}_\omega$, a point lies in the closure of a subset of a metric space exactly when it is the limit of a sequence from that subset ([[thm-metric-sequential-closure]]).

[L2] The span of a set is the smallest linear subspace containing it ([[def-linear-combination-and-span]]).

[L3] Assuming AC, every spanning set of a finite-dimensional vector space contains a basis of that space ([[cor-every-spanning-set-contains-a-basis]]).

[L4] Every linear subspace of a finite-dimensional vector space is finite-dimensional, of dimension at most that of the ambient space ([[thm-dimension-of-a-linear-subspace]]).

[L5] For $d\ge1$, every norm $N$ on $\mathbb R^d$ admits positive constants $c,C$ with $c\|x\|_2\le N(x)\le C\|x\|_2$ for every $x$ ([[thm-all-norms-on-rn-are-equivalent]]).

[L6] For $d\ge1$, Euclidean space $\mathbb R^d$ is complete ([[thm-euclidean-space-complete]]).

[L7] The boundary of $A$ is $\partial A=\overline A\setminus\operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]]).

[L8] The closure of $A$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A=\overline A$ ([[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Using [A2], paired sequences from $C$ and [F1] show by [L1] that $\overline C$ is convex. Fix $c_0\in C$ and put $W=\operatorname{span}(C-c_0)$ and $A=c_0+W$, the affine hull by [L2]. By [A1], [L3], and [L4], $W$ has a finite basis drawn from $C-c_0$. If $W=\{0\}$, then $W$ and the singleton $A$ are closed directly. Otherwise its positive-dimensional coordinate map pulls the Euclidean norm back to a norm on $\mathbb R^d$; [L5] and [L6] show that a convergent sequence in $W$ has its limit in $W$. Thus [L1] and [L8] make $W$, and hence $A$, closed in every case. Therefore $C$ and $\overline C$ have the same affine hull. [A1, A2, F1, L1, L2, L3, L4, L5, L6, L8, given, algebra]

2.1 The basis vectors from step 1.1 give points of $C$ whose simplex has a positive barycentric core, so $C$ has nonempty relative interior. Fix a relative ball $B_A(p,r)\subseteq C$ and $y\in\overline C$. For $q=(1-t)p+ty$ with $0\le t<1$, [A2] and [L1] give a sequence $y_k\in C$ tending to $y$; choose a term so close that $t\|y-y_k\|_2<(1-t)r/2$. If $\|h\|_2<(1-t)r/2$ and $$p_h=p+\frac{t(y-y_k)+h}{1-t},$$ then $p_h\in B_A(p,r)$ and $q+h=(1-t)p_h+ty_k\in C$ by [F1]. Thus every strict segment point lies in $\operatorname{ri}C$. [step 1.1, A2, F1, L1, L2, L3, L4, choose, algebra]

3.1 Let $x\in\operatorname{ri}(\overline C)$. If $x\ne p$, choose small $\varepsilon>0$ such that $y=x+\varepsilon(x-p)$ remains in a relative ball of $\overline C$ about $x$; then $$x=\frac{\varepsilon}{1+\varepsilon}p+\frac1{1+\varepsilon}y,$$ so step 2.1 gives $x\in\operatorname{ri}C$. The case $x=p$ and the reverse inclusion are immediate. If $W=\mathbb R^n$, relative and ordinary interiors agree. If $W$ is proper, choose $v\notin W$; every ambient ball about $A$ contains a point displaced by a small nonzero multiple of $v$ and hence outside $A$, so both ordinary interiors are empty. Thus $\operatorname{int}C=\operatorname{int}\overline C$. [step 1.1, step 2.1, L4, choose, algebra]

4.1 By [L8], $\overline{\overline C}=\overline C$. Combining this common closure with step 3.1 and the boundary formula [L7] gives $\partial C=\partial\overline C$. [step 3.1, L7, L8, algebra] ∎
