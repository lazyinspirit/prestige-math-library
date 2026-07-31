---
id: cor-contractible-spaces-are-path-connected
kind: corollary
title: "Every nonempty contractible space is path-connected"
status: published
origin: session
deps: [def-nullhomotopic-map-and-contractible-space, cor-contractible-iff-identity-nullhomotopic, def-path-connected, thm-product-universal-property, thm-continuity-characterisations-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

Every nonempty contractible topological space is path-connected.

## Facts & Assumptions

**Given:** A nonempty contractible space $X$ and points $x,y\in X$.

[L1] The identity of $X$ is homotopic to a constant map $c_{x_0}$ for some $x_0\in X$ ([[cor-contractible-iff-identity-nullhomotopic]], [[def-nullhomotopic-map-and-contractible-space]]).

[A1] Paths define an equivalence relation: paths may be reversed and concatenated, and $X$ is path-connected exactly when every pair of points is joined by a path ([[def-path-connected]]).

[L2] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L3] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $H:X\times I\to X$ be a homotopy from $\operatorname{id}_X$ to $c_{x_0}$. For each $z\in X$, the map $j_z:I\to X\times I$, $j_z(t)=(z,t)$, is continuous by [L2], its components being constant and the identity. [L1, L2]

2.1 The map $\gamma_z:=H\circ j_z:I\to X$ is continuous because $(H\circ j_z)^{-1}[V]=j_z^{-1}[H^{-1}[V]]$ is open for every open $V\subseteq X$. It has $\gamma_z(0)=z$ and $\gamma_z(1)=x_0$, so it is a path from $z$ to $x_0$. [step 1.1, L1, L3, A1]

3.1 Step 2.1 gives a path from $x$ to $x_0$ and a path from $y$ to $x_0$. Reversing the latter and concatenating it with the former gives a path from $x$ to $y$ by [A1]. [step 2.1, A1]

4.1 Since $x,y\in X$ were arbitrary, $X$ is path-connected. [step 3.1, A1] ∎
