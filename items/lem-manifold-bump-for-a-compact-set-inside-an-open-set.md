---
id: lem-manifold-bump-for-a-compact-set-inside-an-open-set
kind: lemma
title: "A manifold bump for a compact set inside an open set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-chart-bump-at-a-point-with-prescribed-support, def-the-standard-smooth-step-function]
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

Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

## Facts & Assumptions

**Given:** A compact set $K\subseteq M$ and an open set $W\subseteq M$ with $K\subseteq W$.

[L1] Every point of $K$ admits a smooth bump supported in $W$ and equal to $1$ at that point ([[lem-chart-bump-at-a-point-with-prescribed-support]]).

[F1] The standard smooth step function $\sigma$ is $0$ on $(-\infty,0]$ and $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

[A1] Finite sums of smooth real-valued functions on a smooth manifold are smooth.

## Proof

**Proof technique:** direct.

1.1 For each $p\in K$, choose a smooth bump $\rho_p$ from [L1] with support in $W$ and $\rho_p(p)=1$; compactness gives finitely many points $p_1,\dots,p_m$ such that the open sets $V_{p_i}:=\rho_{p_i}^{-1}((1/2,1])$ cover $K$. [L1, given, choose]

2.1 Put $s:=\rho_{p_1}+\cdots+\rho_{p_m}$; then $s$ is smooth by [A1], one has $2s\ge 1$ on the open neighbourhood $V_{p_1}\cup\cdots\cup V_{p_m}$ of $K$, and $\operatorname{supp}(s)\subseteq W$. [A1, step 1.1]

3.1 Define $\rho:=\sigma\circ (2s)$; then $\rho$ is smooth, equals $1$ on an open neighbourhood of $K$, and vanishes off $W$, so $\operatorname{supp}(\rho)\subseteq W$. [F1, step 2.1] ∎
