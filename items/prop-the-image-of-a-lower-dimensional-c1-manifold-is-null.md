---
id: prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
kind: proposition
title: "The image of a lower-dimensional $C^1$ manifold is null"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets,
       prop-a-countable-chart-cover-detects-manifold-null-sets,
       prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $P^m$ and $N^n$ be smooth manifolds with $m<n$, and let $F:P\to N$ be a
$C^1$ map. Then $F(P)\subseteq N$ is a null subset of $N$.

## Facts & Assumptions

**Given:** A $C^1$ map $F:P^m\to N^n$ with $m<n$.

[L1] An equidimensional $C^1$ map sends null sets to null sets ([[prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets]]).

[L2] A countable chart cover detects manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]]).

[L3] Every smooth manifold admits a countable smooth atlas with relatively compact domains ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]).

## Proof
**Proof technique:** direct.

1.1 Choose countable smooth atlases $\{(U_i,\varphi_i)\}$ on $P$ and $\{(V_j,\psi_j)\}$ on $N$ as in [L3], and replace each $U_i$ by the countable family of intersections $U_i\cap F^{-1}(V_j)$. It is enough to show that $F(U)$ is null for each resulting chart domain $U$, because those domains still cover $P$ and $F(P)$ is the countable union of the sets $F(U)$. [L3, given, choose]

2.1 Fix such a chart $U$ with coordinates $\varphi:U\to\Omega\subseteq\mathbb R^m$ and with $F(U)\subseteq V$ for some target chart $(V,\psi)$. Define $$ \widetilde F:\Omega\times\mathbb R^{n-m}\to\mathbb R^n,\qquad \widetilde F(u,z):=(\psi\circ F\circ\varphi^{-1})(u). $$ The slice $\Omega\times\{0\}$ is a null subset of $\mathbb R^n$, and $\widetilde F$ is $C^1$. By [L1], $\widetilde F(\Omega\times\{0\})=\psi(F(U))$ is null. [L1, step 1.1, construct]

3.1 Therefore $F(U)$ is null in the target chart $V$. Since the atlas on $N$ from step 1.1 detects nullity by [L2], each set $F(U)$ is null in $N$, and then the countable union from step 1.1 shows that $F(P)$ is null in $N$. [L2, step 1.1, step 2.1] ∎
