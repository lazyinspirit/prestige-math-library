---
id: cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function
kind: corollary
title: "Every closed subset of a manifold is the zero set of a smooth nonnegative function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, thm-weierstrass-m-test-for-function-series, thm-uniform-derivative-limit-on-a-closed-interval, thm-uniform-limit-continuous-real-functions, thm-extreme-value-metric, thm-geometric-series, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/frontier-38-owner-30-step5-misc-supplier-cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function.receipt.json
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Every closed subset $A$ of a smooth manifold $M$ is the zero set of some smooth nonnegative function $g:M\to [0,\infty)$.

## Facts & Assumptions

**Given:** Countable choice and a closed subset $A$ of a smooth manifold $M$.

[L1] Every open cover of a manifold has a countable cover by relatively compact coordinate balls subordinate to it ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] A countable cover by coordinate balls with compact closures has a countable locally finite shrinking $W_k\Subset V_k$ ([[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]]).

[L3] For every compact set inside an open set there is a smooth manifold bump equal to $1$ near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L4] If real-valued functions on a set are bounded in absolute value by the terms of a convergent nonnegative scalar series, their series converges uniformly and absolutely ([[thm-weierstrass-m-test-for-function-series]]). The geometric series $\sum_{k\ge1}2^{-k}$ converges ([[thm-geometric-series]]), and a uniform limit of continuous real-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L5] If continuously differentiable functions on a nondegenerate closed real interval converge at one point and their derivatives converge uniformly, their uniform limit is differentiable with derivative equal to that derivative limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[L6] Continuous functions on a compact metric space attain finite bounds ([[thm-extreme-value-metric]]). Smoothness of a real function on a manifold is tested in its smooth charts; in positive dimension, existence and continuity of every iterated coordinate partial derivative is precisely the $C^\infty$ condition ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-ck-and-multi-index-notation-in-several-variables]]). To avoid presupposing any interchange of mixed derivatives, write $D_\sigma$ for an iterated derivative in the specified order of a finite word $\sigma$ of coordinate indices, with $D_\varnothing$ the function itself.

[A1] Countable Choice is [[def-countable-choice]]. It is inherited in [L1,L2], selects the countably many chart witnesses and bumps below, and adds no dependent choice. All derivative bounds and scalar coefficients are uniquely specified maxima and finite algebraic formulas.

## Proof

**Proof technique:** direct, with diagonal coefficients giving uniform convergence of every coordinate derivative, including at the closed set.

1.1 If $M\setminus A=\varnothing$, take $g=0$. This includes the empty manifold. Otherwise $M$ is nonempty; all subsequent constructions are for this case. [given]

2.1 Apply [L1] to the cover of $M$ by its smooth chart domains. Enumerate the resulting relatively compact balls $B_i$, repeating one if there are only finitely many, and choose chart witnesses $(U_i,\varphi_i)$ with $K_i:=\overline{B_i}\subseteq U_i$. Countable Choice supplies these witnesses. Each $K_i$ is compact, and their interiors cover $M$ because they contain the $B_i$. Coordinate derivatives on $K_i$ therefore make sense in the containing chart, rather than on a ball whose boundary might leave that chart. [A1, L1, step 1.1]

2.2 Apply [L1] and [L2] on the open manifold $M\setminus A$ to obtain an at-most-countable family $W_k\Subset V_k$ whose $W_k$ cover $M\setminus A$, with compact $\overline{V_k}$ there. Compact subsets of this open manifold remain compact in $M$ by continuity of the inclusion, and they are closed in the Hausdorff manifold $M$; hence $\overline{W_k}$ is compact in $M$ and lies in $V_k$. By [L3] and [A1], choose global smooth $b_k:M\to[0,1]$ equal to one near $\overline{W_k}$ and supported in $V_k$. Enumerate them by positive integers, padding by zero functions in the finite case. Each $b_k$ vanishes on an open neighbourhood of every point of $A$, and some $b_k$ equals one at each point of $M\setminus A$. Local finiteness on $M\setminus A$ is not used to assert smoothness across $A$. [A1, L1, L2, L3, step 1.1]

3.1 For each $k\ge1$ set $$C_k:=\max\left(\{0\}\cup\left\{\sup_{x\in\varphi_i(K_i)}\left|D_\sigma(b_k\circ\varphi_i^{-1})(x)\right|:1\le i\le k,\ |\sigma|\le k\right\}\right),\qquad c_k:=\frac{2^{-k}}{1+C_k}>0.$$ There are finitely many derivative words of length at most $k$ in each fixed finite-dimensional chart, so [L6] makes $C_k$ finite. In dimension zero the empty word is the only word. Put $S_N:=\sum_{k=1}^N c_kb_k$. These are smooth nonnegative functions, and the coefficients require no additional family choice. [L6, step 2.1, step 2.2]

4.1 Fix $i$ and a derivative word $\sigma$. For every $k\ge\max\{i,|\sigma|,1\}$, $$\sup_{\varphi_i(K_i)}\left|D_\sigma(c_kb_k\circ\varphi_i^{-1})\right|\le c_k C_k\le2^{-k}.$$ The finitely many earlier terms have finite bounds by [L6]. Thus [L4] gives uniform convergence of every derivative series on $\varphi_i(K_i)$ to a continuous function $H_{i,\sigma}$. For the empty word the limit defines the same pointwise function $$g:=\sum_{k\ge1}c_kb_k$$ in every chart. Every point belongs to some $K_i$, so this series is everywhere finite and well defined. [L4, L6, step 2.1, step 3.1]

5.1 On the open set $\varphi_i(\operatorname{int}K_i)$, we prove that each $H_{i,\sigma}$ has coordinate derivative $\partial_jH_{i,\sigma}=H_{i,\sigma j}$, where $\sigma j$ denotes appending the differentiation in coordinate $j$. Fix a point there and a small nondegenerate closed segment in direction $j$ through it, wholly in that open set. The restrictions of $D_\sigma(S_N\circ\varphi_i^{-1})$ to this segment converge at every point by step 4.1, and their derivatives in its varying coordinate converge uniformly to the restriction of $H_{i,\sigma j}$. Applying [L5] identifies the derivative of their already known limit with $H_{i,\sigma j}$. The point and coordinate were arbitrary. Starting with $H_{i,\varnothing}=g\circ\varphi_i^{-1}$ and repeating this argument for every finite word proves all its iterated partial derivatives exist and are the continuous limits of step 4.1. Therefore $g$ is smooth on $\operatorname{int}K_i$ by [L6]. In dimension zero smoothness is automatic in the singleton charts. Since these interiors cover $M$, $g$ is smooth on all of $M$, including every point of $A$. [L5, L6, step 2.1, step 4.1]

6.1 All summands are nonnegative. At a point of $A$ every $b_k$ is zero, so $g=0$; at a point of $M\setminus A$, some $b_k=1$ by step 2.2 and its coefficient $c_k$ is positive, so $g\ge c_k>0$. Hence $g^{-1}(0)=A$. In fact every coordinate derivative of $g$ at $A$ is zero: each individual bump vanishes near that point, so every derivative term is zero there, and step 5.1 identifies the derivative of the sum with their limit. [step 2.2, step 3.1, step 4.1, step 5.1]

7.1 The nonempty-complement case is proved by steps 5.1 and 6.1; the empty-complement case was step 1.1. Thus every closed subset is the zero set of a smooth nonnegative function under exactly the stated $\mathrm{AC}_\omega$. [A1, step 1.1, step 5.1, step 6.1] ∎
