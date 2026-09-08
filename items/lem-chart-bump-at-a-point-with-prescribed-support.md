---
id: lem-chart-bump-at-a-point-with-prescribed-support
kind: lemma
title: "A chart bump at a point with prescribed support"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-smooth-maps-paste-over-an-open-cover, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, thm-heine-borel-rn, thm-compactness-agrees-with-metric-compactness, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized chart-bump support and compactness repair; local checks only, no independent judge"
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

Let $M$ be a smooth manifold, let $p\in M$, and let $W\subseteq M$ be open with $p\in W$. Then there exists a smooth function $\rho:M\to [0,1]$ such that $\rho(p)=1$ and $\operatorname{supp}(\rho)\subseteq W$.

## Facts & Assumptions

**Given:** A smooth manifold $M$, a point $p\in M$, and an open neighbourhood $W$ of $p$.

[F1] Smooth charts are diffeomorphisms onto open subsets of Euclidean space ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L1] Compact sets inside Euclidean open sets admit smooth bumps with prescribed support ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[L2] Smooth maps that agree on overlaps paste to a smooth global map, and
composites of smooth maps are smooth
([[lem-smooth-maps-paste-over-an-open-cover]],
[[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[L3] Closed bounded subsets of $\mathbb R^n$, $n\ge1$, are compact ([[thm-heine-borel-rn]]); metric and topological compactness agree ([[thm-compactness-agrees-with-metric-compactness]]).

[L4] Continuous images of compact spaces are compact ([[thm-compactness-under-continuous-maps]], clause 1), and compact subsets of a Hausdorff space are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], clause 3). The manifold $M$ is Hausdorff by [[def-smooth-manifold]].

[F2] For a real-valued function on $M$, its support means the closure in $M$ of its nonzero locus.

## Proof

**Proof technique:** direct.

1.1 If $M$ has dimension zero, each singleton is open by the chart condition and is closed since $M$ is Hausdorff. Define $\rho(p)=1$ and $\rho=0$ elsewhere. This is locally constant, hence smooth in charts, and its support is $\{p\}\subseteq W$. Henceforth assume the dimension $n$ is positive. [F1, F2, L4, given, construct]

2.1 Choose a smooth chart $(U,\varphi)$ with $p\in U$ and put $a=\varphi(p)$. Since $\varphi(W\cap U)$ is open, choose $\varepsilon>0$ with $B_\varepsilon(a)\subseteq\varphi(W\cap U)$, and put $R=\varepsilon/2$, $r=R/2$. Then $\overline B_R(a)\subseteq\varphi(W\cap U)$. By [L3], $\overline B_r(a)$ is compact. Apply [L1] inside $B_R(a)$ to obtain a smooth $\widetilde\rho:\mathbb R^n\to[0,1]$ equal to one on $\overline B_r(a)$ with support in $B_R(a)$. [F1, L1, L3, step 1.1, choose]

3.1 The closed ball $\overline B_R(a)$ is compact by [L3]. Its image $K=\varphi^{-1}(\overline B_R(a))$ under the continuous inverse chart, viewed as a map into $M$, is compact by [L4]. Thus $K$ is closed in $M$ and $K\subseteq W\cap U$. [F1, L3, L4, step 2.1, construct]

4.1 On the open cover $U\cup(M\setminus K)$, use $\rho=\widetilde\rho\circ\varphi$ on $U$ and $\rho=0$ on $M\setminus K$. The functions agree on $U\setminus K$, since its coordinate image misses $\overline B_R(a)$ and hence the support of $\widetilde\rho$. Composition and pasting in [L2] give a smooth global real-valued function whose values lie in $[0,1]$. [L2, step 2.1, step 3.1, construct]

5.1 The function equals one at $p$ by step 2.1. Its nonzero locus is contained in the closed set $K$ by step 4.1, so [F2] gives $\operatorname{supp}\rho\subseteq K\subseteq W$. This proves the positive-dimensional case, and step 1.1 proves the zero-dimensional case. [F2, step 1.1, step 2.1, step 3.1, step 4.1] ∎
