---
id: lem-manifold-bump-for-a-compact-set-inside-an-open-set
kind: lemma
title: "A manifold bump for a compact set inside an open set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-chart-bump-at-a-point-with-prescribed-support, def-the-standard-smooth-step-function, lem-compactness-of-a-subspace-is-ambient, prop-smooth-maps-are-continuous, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized manifold compact-set bump repair; local checks only, no independent judge"
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

Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

## Facts & Assumptions

**Given:** A compact set $K\subseteq M$ and an open set $W\subseteq M$ with $K\subseteq W$.

[L1] Every point of $K$ admits a smooth bump supported in $W$ and equal to $1$ at that point ([[lem-chart-bump-at-a-point-with-prescribed-support]]).

[F1] The standard smooth step function $\sigma$ is smooth, takes values in $[0,1]$, is $0$ on $(-\infty,0]$ and $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

[L2] An indexed ambient open cover of a compact subset has a finite subcover ([[lem-compactness-of-a-subspace-is-ambient]], clause 2).

[L3] Smooth maps are continuous, and composites of smooth maps are smooth ([[prop-smooth-maps-are-continuous]], [[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[L4] Sums and scalar multiples satisfy the coordinate derivative rules ([[thm-algebra-of-derivatives]]); smoothness is tested by continuous iterated coordinate derivatives in charts ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] Support means the closure in $M$ of the nonzero locus.

## Proof

**Proof technique:** direct.

1.1 If $K=\varnothing$, take $\rho=0$ and the empty open neighbourhood. Otherwise let $\mathcal B$ be the set of all smooth $b:M\to[0,1]$ whose support lies in $W$. For each $b\in\mathcal B$, put $V_b=\{x:b(x)>1/2\}$. These sets are open by [L3] and cover $K$ by [L1]. The family uses all eligible functions, not a simultaneous choice of one function at each point. [F2, L1, L3, given, construct]

2.1 By [L2], there are finitely many $b_1,\ldots,b_m\in\mathcal B$ such that $V=\bigcup_{i=1}^m V_{b_i}$ contains $K$. Define $s=\sum_{i=1}^m b_i$. In every chart each iterated coordinate derivative of $s$ is the sum of the corresponding continuous derivatives of the $b_i$, by repeated use of [L4]. Hence $s$ and $2s$ are smooth. Since all summands are nonnegative, $2s>1$ throughout the open set $V$. [L2, L4, step 1.1, construct]

3.1 Define $\rho=\sigma\circ(2s)$. It is smooth by [F1] and [L3], takes values in $[0,1]$, and equals one on $V$ by step 2.1. [F1, L3, step 2.1, construct]

4.1 The finite union $F=\bigcup_{i=1}^m\operatorname{supp}b_i$ is closed by [F2], and lies in $W$. Off $F$ every $b_i$ is zero, so $s=0$ and $\rho=\sigma(0)=0$. Taking the closure of the nonzero locus gives $\operatorname{supp}\rho\subseteq F\subseteq W$. Together with step 3.1 and the empty case in step 1.1, this proves the claim. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
