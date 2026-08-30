---
id: prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form
kind: proposition
title: "Transverse intersections of coordinate slices have the expected local form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-regular-level-set-is-an-embedded-submanifold, thm-product-universal-property, def-local-defining-map-for-an-embedded-submanifold, thm-differential-rank-is-lower-semicontinuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $U\subseteq\mathbb R^m$ be open. Suppose $S,T\subseteq U$ are given near a
point $a\in S\cap T$ by independent coordinate slices: after a permutation of
coordinates, there are smooth submersions
$\Phi:U\to\mathbb R^c$ and $\Psi:U\to\mathbb R^d$ with
$S=\Phi^{-1}(0)$, $T=\Psi^{-1}(0)$ near $a$, and with
$d\Phi_a\oplus d\Psi_a:T_aU\to\mathbb R^c\times\mathbb R^d$ surjective. Then
$S\cap T$ is, near $a$, an embedded submanifold of codimension $c+d$; in
suitable local coordinates it is a coordinate slice.

## Facts & Assumptions

**Given:** Open $U\subseteq\mathbb R^m$, submersions $\Phi,\Psi$, and a point $a\in S\cap T$ with the stated surjectivity.

[F1] A local defining map records a submersion whose zero fibre is the local submanifold ([[def-local-defining-map-for-an-embedded-submanifold]]).

[L1] The product of the two target maps is the unique map into the product with the prescribed components ([[thm-product-universal-property]]).

[L2] A regular level set of a smooth map is an embedded submanifold ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L3] For a Euclidean smooth map, the locus where the differential has rank at least a fixed value is open ([[thm-differential-rank-is-lower-semicontinuous]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], define $H:U\to\mathbb R^c\times\mathbb R^d$ by $H(x)=(\Phi(x),\Psi(x))$. Then $H^{-1}(0,0)=S\cap T$ near $a$ by [F1]. The differential of $H$ at $a$ is exactly $d\Phi_a\oplus d\Psi_a$, so it is surjective by hypothesis. [F1, L1, given]

2.1 Since the target of $H$ has dimension $c+d$, step 1.1 says $\operatorname{rank}dH_a=c+d$. By [L3], after shrinking to an open neighbourhood $W$ of $a$, every point of $W$ has differential rank at least $c+d$, hence exactly $c+d$. Therefore every point of $W\cap H^{-1}(0,0)$ is regular for $H|_W$, so $(0,0)$ is a regular value of $H|_W$. [L3, step 1.1]

3.1 By [L2], the common zero set $W\cap S\cap T=W\cap H^{-1}(0,0)$ is an embedded submanifold of codimension $c+d$ and therefore is locally a coordinate slice. [L2, step 2.1]

4.1 This is the claimed local form of the transverse intersection. [step 3.1] ∎
