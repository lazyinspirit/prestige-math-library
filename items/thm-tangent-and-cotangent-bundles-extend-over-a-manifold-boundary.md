---
id: thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary
kind: theorem
title: "Tangent and cotangent bundles extend over a boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-derivation-at-a-point-and-tangent-space, lem-a-derivation-annihilates-constant-germs, lem-first-order-hadamard-factorization-near-a-point, prop-chain-rule-for-smooth-half-space-maps, def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

For a smooth $n$-manifold with boundary, derivations of smooth boundary germs form an $n$-dimensional tangent space at every point, and the usual tangent and cotangent bundles have smooth boundary-chart transition maps.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ with boundary and a point $p\in M$.

[L1] Smooth Euclidean extensions that agree on a half-space have the same derivatives there ([[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]]).

[L2] Derivations annihilate constant germs, and smooth Euclidean functions admit first-order Hadamard factorization ([[lem-a-derivation-annihilates-constant-germs]]; [[lem-first-order-hadamard-factorization-near-a-point]]).

[L3] The cotangent space is the algebraic dual of the tangent space ([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]).

[L4] Boundary-chart transitions are smooth half-space diffeomorphisms, and their derivatives obey the chain rule ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]; [[prop-chain-rule-for-smooth-half-space-maps]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, every smooth germ is constant, so [L2] makes every derivation zero and the empty coordinate family is a basis. Assume $n\ge1$. For a boundary germ, define $\partial_i|_p$ by differentiating any smooth Euclidean extension in the $i$th coordinate. By [L1] this is well defined; linearity and the Euclidean product rule make it a derivation. [given, L1, L2, construct, algebra]

2.1 Let $v$ be any derivation and let $F$ extend a representative of a boundary germ $f$ near the coordinate point $a$. By [L2], write $F(x)-F(a)=\sum_i(x^i-a^i)g_i(x)$ with $g_i(a)=\partial_iF(a)$. Restricting to the half-space and applying $v$, using [L2] and the Leibniz rule, gives $v(f)=\sum_i v(x^i)\partial_i|_p(f)$. Thus the coordinate derivations span. Applying a linear relation among them to each coordinate germ proves independence, so $\dim T_pM=n$. [given, L1, L2, step 1.1, algebra]

3.1 By [L4], differentiating a boundary-chart transition and its inverse gives mutually inverse matrices; [L1] makes these derivatives extension independent, and their entries vary smoothly. They are the tangent transition maps. By [L3], the dual inverse matrices are the cotangent transition maps. Hence the usual tangent and cotangent bundles extend smoothly over all of $M$, including the $n=0$ case with empty matrices. [given, L1, L3, L4, step 1.1, step 2.1, algebra] ∎
