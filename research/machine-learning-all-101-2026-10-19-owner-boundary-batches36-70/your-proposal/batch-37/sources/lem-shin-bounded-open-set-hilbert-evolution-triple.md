---
id: lem-shin-bounded-open-set-hilbert-evolution-triple
kind: lemma
title: "The zero-boundary Sobolev evolution triple on an arbitrary bounded open set"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-poincare-inequality-for-w-one-p-zero
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Christian Clason, Introduction to Finite Element Methods"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
      locator: "Chapter 11, evolution-space context; arbitrary bounded-open-set proof supplied locally"
---

## Statement

Assume Countable Choice. Let $U\subset\mathbb R^d$ be bounded and open, $d\ge1$, and put $H=L^2(U;\mathbb R)$ and $V=H^1_0(U;\mathbb R)$, where the latter is the $H^1$-closure of $C_c^\infty(U)$. Then $V$ is a separable real Hilbert space, its inclusion into $H$ is continuous, injective and dense, and $(V,H,V^*)$ is a real evolution triple. The gradient norm and the full $H^1$ norm are equivalent on $V$. No regularity of $\partial U$ is required.

## Statement references

[Clason, Chapter 11: the Sobolev evolution-triple setting](https://arxiv.org/pdf/1709.08618v2.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a bounded open $U\subset\mathbb R^d$, and the stated real spaces.

[A1] Countable Choice is carried by the $L^2$ completeness and density suppliers and by the countable selections below ([[def-countable-choice]]).

[F1] $L^2(U)$ is a real Hilbert space; rational box-step functions are countable and dense in $L^2(\mathbb R^d)$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F2] Weak derivatives are defined by integration against compactly supported smooth tests; $H^1_0(U)$ is the $H^1$-closure of those smooth functions ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] On an open set bounded in one direction, $\|v\|_2\le C\|Dv\|_2$ for $v\in H^1_0(U)$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] $C_c^\infty(U)$ is dense in $L^2(U)$ for every open $U$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F5] A continuous dense injective Hilbert inclusion $V\hookrightarrow H$ defines the canonical real evolution triple ([[def-parabolic-evolution-triple-and-energy-space]]).

## Proof

1.1 If $U=\varnothing$, both spaces are zero and the conclusions hold. Otherwise choose finite $a<b$ with $U\subset\{a<x_1<b\}$. The zero extension of any $h\in H$ belongs to $L^2(\mathbb R^d)$ with the same norm. Restricting the countable dense box-step family in [F1] to $U$ therefore gives a countable dense subset of $H$. The product $Z=H^{d+1}$ is a separable Hilbert space. [given, A1, F1, construct]

2.1 The map $J:H^1(U)\to Z$, $J(v)=(v,D_1v,\ldots,D_dv)$, is an isometry for the full Sobolev norm. Its range is closed: if $J(v_n)\to(v,g_1,\ldots,g_d)$ in $Z$, then for every $\phi\in C_c^\infty(U)$, Cauchy–Schwarz gives $\int vD_i\phi=\lim_n\int v_nD_i\phi=-\lim_n\int D_iv_n\phi=-\int g_i\phi$. Thus $g_i=D_iv$ weakly, so the limit is $J(v)$. A closed subspace of a Hilbert space is complete, hence $H^1(U)$ is Hilbert. [F1, F2, step 1.1, algebra]

3.1 By the closure definition, $V$ is a closed subspace of $H^1(U)$ and is Hilbert. The Poincare inequality applies because $U$ is bounded in the first direction, and yields $\|Dv\|_2^2\le\|v\|_{H^1}^2\le(1+C^2)\|Dv\|_2^2$ on $V$. This proves norm equivalence and continuity of the inclusion $V\hookrightarrow H$. Injectivity holds because these spaces use the same almost-everywhere equivalence classes. [F2, F3, step 1.1, step 2.1, algebra]

4.1 A subspace $Y$ of a separable metric space $Z$ is separable under [A1]: if $(z_j)$ is dense in $Z$, the sets $Y\cap B(z_j,r)$ for positive rational $r$ form a countable base of $Y$; choose one point from every nonempty such set. Any relatively open neighborhood contains one of these sets, so the chosen points are dense. Apply this first to $J(H^1(U))\subset Z$ and then to $J(V)$; transport the dense subsets through the isometry $J$. Thus $V$ is separable. [A1, step 1.1, step 2.1, step 3.1, construct]

5.1 By [F4], $C_c^\infty(U)$ is dense in $H$, and it is contained in $V$ by [F2]. Thus $V\hookrightarrow H$ is dense. The Hilbert, separability, continuity and injectivity conclusions already proved give the canonical evolution triple by [F5]. Every argument used an arbitrary bounded open $U$, so none requires a boundary chart or a polyhedral boundary. [F2, F4, F5, step 3.1, step 4.1, algebra] ∎

## Source notes

This reproduces the actual argument of the read published polyhedral Sobolev-evolution supplier on the larger bounded-open-set domain class. Its closed-graph, separability and compact-smooth-density arguments do not use polyhedral geometry. The bibliographic reference records the evolution-space context; no new reading of Clason's full text is claimed here.
