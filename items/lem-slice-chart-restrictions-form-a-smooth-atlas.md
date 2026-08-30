---
id: lem-slice-chart-restrictions-form-a-smooth-atlas
kind: lemma
title: "Slice-chart restrictions form a smooth atlas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, def-subspace-topology-top, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
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
    - title: "Will J. Merry, Differential Geometry, Proposition 6.7"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $S\subseteq M^m$ be an embedded $k$-submanifold. For each slice chart
$\varphi:U\to\varphi(U)$, restrict $\varphi$ to $U\cap S$ and identify
$\varphi(U)\cap(\mathbb R^k\times\{0\})$ with an open subset of $\mathbb R^k$
by projection onto the first $k$ coordinates. These restricted charts are
smoothly compatible and generate exactly the subspace topology on $S$.

## Facts & Assumptions

**Given:** An embedded $k$-submanifold $S\subseteq M^m$.

[F1] In a slice chart, $S$ is cut out by the coordinate slice
$\mathbb R^k\times\{0\}$ ([[def-embedded-submanifold-and-slice-chart]]).

[F2] The topology on $S$ is the subspace topology inherited from $M$
([[def-subspace-topology-top]]).

[L1] Chart maps are homeomorphisms onto open Euclidean sets
([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof
**Proof technique:** direct.

1.1 Let $\varphi:U\to\varphi(U)$ and $\psi:V\to\psi(V)$ be slice charts. By [F1], after projecting away the zero normal coordinates, the overlap transition on $S$ is $x\mapsto\pi_k\!\bigl(\psi\circ\varphi^{-1}(x,0)\bigr)$, where $\pi_k$ denotes projection onto the first $k$ coordinates. Because $\psi\circ\varphi^{-1}$ is a smooth map between open Euclidean sets and restriction to $(x,0)$ plus projection are smooth, the restricted transition maps are smooth. [F1, L1, given]

2.1 The restricted charts cover $S$ because the slice charts do. Their images are open in $\mathbb R^k$: indeed $\varphi(U)\cap(\mathbb R^k\times\{0\})$ equals $(\pi_k(\varphi(U)\cap(\mathbb R^k\times\{0\})),0)$, and the slice condition in [F1] says that every point of this set has an ambient product neighbourhood whose first-factor projection stays inside the image. [F1, step 1.1]

3.1 By [L1], each ambient chart map $\varphi$ is a homeomorphism, so its restriction identifies $U\cap S$ with $\varphi(U)\cap(\mathbb R^k\times\{0\})$. Therefore the restricted charts make $U\cap S$ open exactly when it is open in the subspace topology from [F2]. The atlas therefore generates precisely the subspace topology on $S$. [F2, L1, step 2.1]

4.1 Steps 1.1-3.1 prove smooth compatibility and the topology claim. [step 1.1, step 2.1, step 3.1] ∎