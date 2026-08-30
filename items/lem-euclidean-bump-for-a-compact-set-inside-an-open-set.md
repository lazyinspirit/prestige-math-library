---
id: lem-euclidean-bump-for-a-compact-set-inside-an-open-set
kind: lemma
title: "A Euclidean bump for a compact set inside an open set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-smooth-bump-between-concentric-euclidean-balls, def-the-standard-smooth-step-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
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

If $K\subseteq U\subseteq\mathbb R^n$ with $K$ compact and $U$ open, then there exists a smooth function $\rho:\mathbb R^n\to [0,1]$ such that $\rho=1$ on $K$ and $\operatorname{supp}(\rho)\subseteq U$.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\mathbb R^n$ and an open set $U\supseteq K$.

[L1] For every $p\in K$ there are radii $0<r_p<R_p$ with $\overline B_{r_p}(p)\subseteq B_{R_p}(p)\subseteq U$.

[L2] Each such concentric pair admits a smooth bump equal to $1$ on the inner closed ball and supported in the outer ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F1] The standard smooth step function $\sigma$ is $0$ on $(-\infty,0]$ and $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

[A1] Finite sums of smooth real-valued functions on $\mathbb R^n$ are smooth.

## Proof

**Proof technique:** direct.

1.1 For each $p\in K$, choose radii as in [L1] and a bump $\rho_p$ as in [L2]; compactness gives finitely many points $p_1,\dots,p_m$ such that $K\subseteq \bigcup_{i=1}^m B_{r_{p_i}}(p_i)$. [L1, L2, given, choose]

2.1 Put $s:=\rho_{p_1}+\cdots+\rho_{p_m}$; then $s$ is smooth by [A1], one has $s\ge 1$ on $K$, and $\operatorname{supp}(s)\subseteq U$. [A1, step 1.1]

3.1 Define $\rho:=\sigma\circ s$; then $\rho$ is smooth, equals $1$ on $K$, and vanishes off $U$, so $\operatorname{supp}(\rho)\subseteq U$. [F1, step 2.1] ∎
