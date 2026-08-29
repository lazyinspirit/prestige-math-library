---
id: prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
kind: proposition
title: "Products of smooth manifolds have a canonical product smooth structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-manifold, def-smooth-atlas,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       def-smoothly-compatible-charts,
       thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas,
       thm-product-universal-property, def-product-topology,
       lem-product-topology-on-rn, lem-products-preserve-t0-t1-and-hausdorff,
       def-second-countable-space, lem-finite-powers-of-countable-sets-are-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $(M,\mathcal S)$ and $(N,\mathcal T)$ be smooth manifolds of dimensions $m$
and $n$. Then $M\times N$ with the product topology is a topological
$(m+n)$-manifold. If $\mathcal A$ and $\mathcal B$ are smooth atlases with
$[\mathcal A]=\mathcal S$ and $[\mathcal B]=\mathcal T$, then the set of product
charts

$$\mathcal A\times\mathcal B:=\bigl\{\,\bigl(V\times W,\ \varphi\times\psi\bigr):(V,\varphi)\in\mathcal A,\ (W,\psi)\in\mathcal B\,\bigr\}$$

is a smooth atlas on $M\times N$, and the maximal atlas it generates is
independent of the presenting atlases: it depends only on $\mathcal S$ and
$\mathcal T$. This maximal atlas is the **product smooth structure** of
$M\times N$.

## Facts & Assumptions

**Given:** Smooth manifolds $(M,\mathcal S)$, $(N,\mathcal T)$ of dimensions $m,n$, with presenting atlases $\mathcal A,\mathcal B$.

[F1] A product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[F2] A topological space is second countable when its topology has an at most countable basis ([[def-second-countable-space]]).

[F3] A finite power of an at most countable set is at most countable ([[lem-finite-powers-of-countable-sets-are-countable]]).

[F4] The product topology on $\prod_i X_i$ has the products of one open set from each factor as a basis, and projections are as in [[def-product-topology]].

[F6] A chart is a homeomorphism of an open domain onto an open subset of $\mathbb R^k$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]), and two charts are smoothly compatible when their domains are disjoint or both transition maps are smooth ([[def-smoothly-compatible-charts]]).

[F7] A smooth atlas is a set of pairwise smoothly compatible charts whose domains cover the manifold ([[def-smooth-atlas]]).

[L1] Two atlases generate the same maximal atlas exactly when their union is a smooth atlas ([[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

[A1] Under the identification of $\mathbb R^m\times\mathbb R^n$ with $\mathbb R^{m+n}$ supplied by [[lem-product-topology-on-rn]], a map into the product is smooth exactly when both component maps are smooth, and the product of two homeomorphisms onto open sets is a homeomorphism onto the product of those open sets.

## Proof

**Proof technique:** direct.

1.1 $M\times N$ is Hausdorff by [F1]. Second countability: choose at most countable bases $\mathcal B_M$ and $\mathcal B_N$ of $M$ and $N$ by [F2]; by [F4] the set $\{U\times V:U\in\mathcal B_M,\ V\in\mathcal B_N\}$ is a basis of the product topology, and it is at most countable by [F3], so $M\times N$ is second countable by [F2]. For $(p,q)\in M\times N$ take charts $(V,\varphi)$ at $p$ and $(W,\psi)$ at $q$; by [A1] the product $\varphi\times\psi:V\times W\to\varphi(V)\times\psi(W)$ is a homeomorphism between the open set $V\times W$ and the open subset $\varphi(V)\times\psi(W)$ of $\mathbb R^{m+n}$. Hence $M\times N$ is a topological $(m+n)$-manifold. [given, F1, F2, F3, F4, F6, A1]

1.2 The transition between product charts of $\mathcal A\times\mathcal B$ is $\bigl(\varphi'\times\psi'\bigr)\circ\bigl(\varphi\times\psi\bigr)^{-1}=\bigl(\varphi'\circ\varphi^{-1}\bigr)\times\bigl(\psi'\circ\psi^{-1}\bigr)$ on the overlap image; the two factors are smooth by the compatibility clause of [F6] applied inside $\mathcal A$ and $\mathcal B$, so [A1] makes the product transition smooth, and disjoint overlaps are covered by [F6]. Hence any two members are compatible, and [F7] makes $\mathcal A\times\mathcal B$ a smooth atlas. [given, F6, F7, A1]

2.1 The members of $\mathcal A\times\mathcal B$ are charts on $M\times N$ by step 1.1, and their domains $V\times W$ cover $M\times N$ because the domains of $\mathcal A$ cover $M$ and those of $\mathcal B$ cover $N$ by [F7]. [given, F7, step 1.1]

3.1 If $\mathcal A'$, $\mathcal B'$ are other presentations of the same two structures, then $\mathcal A\cup\mathcal A'$ and $\mathcal B\cup\mathcal B'$ are smooth atlases by [L1], and the cross transitions of $(\mathcal A\times\mathcal B)\cup(\mathcal A'\times\mathcal B')$ are products of smooth transitions exactly as in step 1.2, so the union is a smooth atlas. Then [L1] gives $[\mathcal A\times\mathcal B]=[\mathcal A'\times\mathcal B']$, which is the claimed independence. [given, F6, L1, step 1.2] ∎
