---
id: lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets
kind: lemma
title: "A $C^1$ map is locally Lipschitz on compact coordinate subsets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       thm-extreme-value-metric,
       thm-mean-value-inequality-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ be $C^1$, let $(U,\varphi)$ be a chart on $M$, let $(V,\psi)$ be
a chart on $N$ with $F(U)\subseteq V$, and let $K\subseteq U$ be compact. Then
every point of $K$ has an open neighbourhood $W\subseteq U$ with
$\overline W\subseteq U$ such that the coordinate representative
$\psi\circ F\circ\varphi^{-1}$ is Lipschitz on $\varphi(\overline W)$.

## Facts & Assumptions

**Given:** A $C^1$ map $F:M\to N$, charts $(U,\varphi)$ and $(V,\psi)$ with $F(U)\subseteq V$, and a compact set $K\subseteq U$.

[F1] A $C^1$ map has a $C^1$ coordinate representative between Euclidean chart domains ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L1] A continuous real-valued function on a compact metric space attains a maximum ([[thm-extreme-value-metric]]).

[L2] On a convex Euclidean set, a bound on the derivative norm gives a Lipschitz bound ([[thm-mean-value-inequality-for-total-derivatives]]).

## Proof
**Proof technique:** direct.

1.1 Let $f:=\psi\circ F\circ\varphi^{-1}$. By [F1], $f$ is $C^1$ on the open set $\varphi(U)\subseteq\mathbb R^m$. For each $x\in\varphi(K)$ choose an open Euclidean ball $B_x$ with $\overline{B_x}$ compact and contained in $\varphi(U)$. [F1, given, choose]

2.1 The derivative norm $\|Df\|$ is continuous on each compact ball $\overline{B_x}$, so [L1] gives a finite bound $L_x$ there. Since $\overline{B_x}$ is convex, [L2] makes $f$ $L_x$-Lipschitz on $\overline{B_x}$. [L1, L2, step 1.1]

3.1 Put $W_x:=\varphi^{-1}(B_x)$. Then $W_x$ is an open neighbourhood of $\varphi^{-1}(x)$ with $\overline{W_x}\subseteq U$, and $f$ is Lipschitz on $\varphi(\overline{W_x})=\overline{B_x}$. Since $x$ was arbitrary in $\varphi(K)$, the claim follows. [step 2.1, construct] ∎