---
id: cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding
kind: corollary
title: "An injective immersion from a compact manifold is an embedding"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-embedding, prop-smooth-maps-are-continuous, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, lem-t0-t1-and-hausdorff-are-hereditary, def-compact-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embeddings"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Proposition 6.3"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $M$ be compact and let $N$ be Hausdorff. Every injective smooth immersion
$F:M\to N$ is a smooth embedding.

## Facts & Assumptions

**Given:** A compact manifold $M$, a Hausdorff manifold $N$, and an injective smooth immersion $F:M\to N$.

[F1] A smooth embedding is an injective immersion and a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]).

[L1] Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[L2] Closed subsets of compact spaces are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L3] Compact subsets of Hausdorff spaces are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

[L4] Hausdorffness is hereditary to subspaces ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], $F$ is continuous. Since it is injective, the corestriction $f_0:M\to F(M)$ is a continuous bijection. By [L4], the subspace $F(M)\subseteq N$ is Hausdorff. [L1, L4, given]

2.1 Let $C\subseteq M$ be closed. Since $M$ is compact, [L2] makes $C$ compact. To show that $f_0[C]$ is compact in $F(M)$, let $\mathcal U$ be an open cover of $f_0[C]$ in the subspace $F(M)$; then $\{f_0^{-1}(U):U\in\mathcal U\}$ is an open cover of $C$, so finitely many members cover $C$. Applying $f_0$ back shows that the same finite subfamily covers $f_0[C]$. Thus $f_0[C]$ is compact, hence closed in the Hausdorff space $F(M)$ by [L3]. [L1, L2, L3, step 1.1]

3.1 Step 2.1 shows that $f_0$ is a closed bijection. Therefore for every open set $O\subseteq M$, the complement $M\setminus O$ is closed and $f_0[O]=F(M)\setminus f_0[M\setminus O]$ is open in $F(M)$. So $f_0$ is an open bijection, hence a homeomorphism. Since $F$ is an injective immersion by hypothesis, [F1] now gives that $F$ is a smooth embedding. [F1, step 1.1, step 2.1] ∎
