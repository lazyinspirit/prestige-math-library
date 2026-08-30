---
id: lem-chart-bump-at-a-point-with-prescribed-support
kind: lemma
title: "A chart bump at a point with prescribed support"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-smooth-maps-paste-over-an-open-cover, prop-identity-maps-and-composites-of-smooth-maps-are-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

[A1] Closed bounded subsets of Euclidean space are compact, and compact
subsets of the Hausdorff manifold $M$ are closed.

## Proof

**Proof technique:** direct.

1.1 Choose a smooth chart $(U,\varphi)$ with $p\in U$ and put $a:=\varphi(p)$. Choose $0<r<R$ such that $$\overline B_r(a)\subseteq B_R(a)\subseteq\overline B_R(a)\subseteq\varphi(W\cap U).$$ Applying [L1] to $\overline B_r(a)\subseteq B_R(a)$ gives a smooth $\widetilde\rho:\mathbb R^n\to[0,1]$ equal to $1$ on $\overline B_r(a)$ and supported in $B_R(a)$. Its support is compact by [A1]. [F1, L1, A1, given, choose]

2.1 Let $K:=\varphi^{-1}(\operatorname{supp}(\widetilde\rho))$. By step 1.1, $K$ is a compact, hence closed, subset of $W\cap U$. On the open cover $U\cup(M\setminus K)$, define $\rho=\widetilde\rho\circ\varphi$ on $U$ and $\rho=0$ on $M\setminus K$. The formulas agree on $U\setminus K$, so [L2] gives a smooth global function. [F1, L2, A1, step 1.1]

3.1 One has $\rho(p)=\widetilde\rho(a)=1$, and $\rho$ vanishes outside $W$, so $\operatorname{supp}(\rho)\subseteq W$. [step 1.1, step 2.1] ∎
