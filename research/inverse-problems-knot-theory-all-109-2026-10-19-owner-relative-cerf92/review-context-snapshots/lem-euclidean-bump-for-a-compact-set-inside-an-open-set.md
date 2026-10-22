---
id: lem-euclidean-bump-for-a-compact-set-inside-an-open-set
kind: lemma
title: "A Euclidean bump for a compact set inside an open set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-smooth-bump-between-concentric-euclidean-balls, lem-compactness-is-intrinsic, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables, def-support-and-compactly-supported-riemann-integral-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized finite-cover and support repair; local checks only, no independent judge"
    delegated_by: owner
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

[L1] Compactness gives a finite subcover from an indexed ambient open cover ([[lem-compactness-is-intrinsic]], claim 3).

[L2] The explicit concentric-ball construction gives a smooth function into $[0,1]$, equal to $1$ on the inner closed ball and supported inside the outer open ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L3] The one-variable sum and product rules apply to coordinate derivatives ([[thm-algebra-of-derivatives]]). Smoothness requires all iterated coordinate derivatives to exist and be continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F1] Support is the closure of the nonzero locus ([[def-support-and-compactly-supported-riemann-integral-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $K=\varnothing$, the zero function has empty support and satisfies the claim. Suppose henceforth that $K\ne\varnothing$. Consider all triples $(p,r,R)$ with $p\in K$, $0<r<R$, and $B_R(p)\subseteq U$. Their inner balls $B_r(p)$ form an indexed open cover of $K$: openness gives a ball $B_R(p)\subseteq U$ at each $p$, and $r=R/2$ is admissible. This defines the whole family without making a simultaneous choice at every point. [given, F1, construct]

2.1 By [L1], finitely many admissible triples $(p_i,r_i,R_i)$, $1\le i\le m$, have inner balls covering $K$. For each of these finitely many triples use the explicit formula in [L2], with $x$ replaced by $x-p_i$, to define $\rho_i$. Translation preserves the coordinate-derivative formulas, so each $\rho_i$ is smooth, lies in $[0,1]$, equals $1$ on $\overline B_{r_i}(p_i)$, and has support contained in $B_{R_i}(p_i)\subseteq U$. [L1, L2, step 1.1]

3.1 Define $\rho=1-\prod_{i=1}^m(1-\rho_i)$. Repeated use of [L3] shows that each iterated coordinate derivative is a finite sum of products of continuous derivatives of the $\rho_i$, so $\rho$ is smooth. Since every factor lies in $[0,1]$, so does $\rho$. On each inner ball one factor is zero; hence $\rho=1$ on their union, an open neighbourhood of $K$. [L3, step 2.1, construct]

4.1 Let $F=\bigcup_{i=1}^m\operatorname{supp}\rho_i$. Each support is closed by [F1], so the finite union $F$ is closed, and step 2.1 gives $F\subseteq U$. Off $F$, every $\rho_i$ vanishes, so the formula in step 3.1 gives $\rho=0$. Therefore the closure of the nonzero locus of $\rho$ lies in $F$: $\operatorname{supp}\rho\subseteq F\subseteq U$. [F1, step 2.1, step 3.1, construct]

5.1 Steps 3.1 and 4.1 give all three required properties; step 1.1 handled the empty case. [step 1.1, step 3.1, step 4.1] ∎
