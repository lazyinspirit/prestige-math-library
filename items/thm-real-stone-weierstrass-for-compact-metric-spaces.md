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

1.1 For fixed $x,y\in K$, choose $u_{x,y}\in A$ with $u_{x,y}(x)=f(x)$ and $u_{x,y}(y)=f(y)$, using $f(x)\mathbf1$ when $x=y$ and [L2] otherwise. [L2, algebra]

2.1 For fixed $x$, the open sets $U_{x,y}=\{z:u_{x,y}(z)>f(z)-\varepsilon\}$ cover $K$, since $y\in U_{x,y}$. Select $y_1,\ldots,y_r$ whose sets cover $K$ by [L3]. [step 1.1, L3, construct]

3.1 Put $g_x=\max_j u_{x,y_j}\in\overline A$. Then $g_x(x)=f(x)$ and $g_x>f-\varepsilon$ on $K$. [L1, step 2.1, algebra]

4.1 The open sets $V_x=\{z:g_x(z)<f(z)+\varepsilon\}$ cover $K$. By [L3], choose $x_1,\ldots,x_s$ whose $V_{x_i}$ cover $K$. [step 3.1, L3, construct]

5.1 The function $h=\min_i g_{x_i}$ belongs to $\overline A$ by [L1], and $f-\varepsilon<h<f+\varepsilon$ pointwise. Thus $\lVert h-f\rVert_\infty<\varepsilon$. [L1, step 3.1, step 4.1, algebra]

6.1 Since $\varepsilon$ was arbitrary and every $h$ of step 5.1 lies in the closed set $\overline A$, the function $f$ lies in $\overline A$. Thus $\overline A=C(K,\mathbb R)$ and $A$ is dense. [step 5.1, discharge-construct] ∎
