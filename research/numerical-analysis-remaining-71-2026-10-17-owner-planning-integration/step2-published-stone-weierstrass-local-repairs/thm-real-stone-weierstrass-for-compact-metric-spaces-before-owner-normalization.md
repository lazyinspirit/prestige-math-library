---
id: thm-real-stone-weierstrass-for-compact-metric-spaces
kind: theorem
title: "Real Stone--Weierstrass theorem for compact metric spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-uniform-closure-of-a-real-function-algebra-is-a-lattice, lem-two-point-interpolation-in-a-separating-real-function-algebra, def-metric-compactness]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Stone-Weierstrass Theorem (University of Chicago)"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a nonempty compact metric space and let $A\subseteq C(K,\mathbb R)$ be a unital subalgebra which separates points. Then $A$ is dense in $C(K,\mathbb R)$ for the supremum metric.

## Facts & Assumptions
**Given:** $f\in C(K,\mathbb R)$ and $\varepsilon>0$.

[L1] The uniform closure $\overline A$ is closed under pointwise maximum and minimum ([[lem-uniform-closure-of-a-real-function-algebra-is-a-lattice]]).

[L2] For distinct $x,y\in K$ and prescribed real values at $x,y$, $A$ contains a function taking those two values ([[lem-two-point-interpolation-in-a-separating-real-function-algebra]]).

[L3] Every open cover of the compact metric space $K$ has a finite subcover ([[def-metric-compactness]]).

## Proof

**Proof technique:** constructive.

1.1 Put $\delta=\varepsilon/3$. For a fixed $x\in K$, let $A_x=\{a\in A:a(x)=f(x)\}$. The open sets $U_a=\{z:a(z)>f(z)-\delta\}$ indexed by all $a\in A_x$ cover $K$: for each $y\ne x$, [L2] gives one $a\in A_x$ with $a(y)=f(y)$, and the constant $f(x)\mathbf1$ handles $y=x$. This asserts existence separately at each point without selecting an interpolant for every pair. [given, L2, algebra]

2.1 By [L3] this cover has a finite subcover. Choose representatives $a_1,\ldots,a_r\in A_x$ for its finitely many members; $r\ge1$ since $K$ is nonempty. Their maximum $g=\max_j a_j$ lies in $\overline A$ by [L1], satisfies $g(x)=f(x)$, and is greater than $f-\delta$ throughout $K$. This proves existence of such a finite maximum for every fixed $x$; it does not select a family $(g_x)_{x\in K}$. [L1, L3, step 1.1, construct]

3.1 Let $\mathcal G$ be the set of all finite nonempty maxima of members of $A$ which satisfy $g>f-\delta$ everywhere on $K$. Every member of $\mathcal G$ belongs to $\overline A$ and is continuous by [L1]. The open sets $V_g=\{z:g(z)<f(z)+\delta\}$ indexed by all $g\in\mathcal G$ cover $K$: for each $x$, the existential conclusion of step 2.1 supplies a member with $g(x)=f(x)$. Thus this second cover also requires no choice indexed by $K$. [L1, step 2.1, construct]

4.1 By [L3] take a finite subcover and representatives $g_1,\ldots,g_s\in\mathcal G$, where $s\ge1$. Then $h=\min_i g_i\in\overline A$ by [L1]. Every $g_i>f-\delta$ globally, and the subcover supplies at each point an index with $g_i<f+\delta$. Hence $f-\delta<h<f+\delta$ pointwise and $\|h-f\|_\infty\le\delta$. Only finitely many representatives were selected in either compactness step. [L1, L3, step 3.1, algebra]

5.1 Since $h\in\overline A$, choose one $a\in A$ with $\|a-h\|_\infty<\delta$. Then $\|a-f\|_\infty<2\delta<\varepsilon$. For every $f$ and positive target error this gives an approximant in $A$ itself, proving density without any countable or arbitrary-index choice assumption. [given, step 4.1, discharge-construct] ∎
