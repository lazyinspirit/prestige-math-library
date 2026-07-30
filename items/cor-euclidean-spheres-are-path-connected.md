---
id: cor-euclidean-spheres-are-path-connected
kind: corollary
title: "For $n\\ge2$, the sphere $S^{n-1}$ is path-connected and connected"
status: published
origin: session
deps: [lem-punctured-rn-is-polygonally-connected, lem-radial-normalisation-is-continuous, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-euclidean-spheres-and-closed-balls]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
pipeline_run: null
---

## Statement

For $n\ge2$, the unit sphere $S^{n-1}\subseteq\mathbb R^n$ is path-connected and connected.

## Facts & Assumptions

**Given:** $n\ge2$ and points $x,y\in S^{n-1}$.

[L1] The punctured space is polygonally connected, hence there is a continuous path in it from $x$ to $y$ ([[lem-punctured-rn-is-polygonally-connected]], [[lem-euclidean-polygonal-paths-are-continuous]]).

[L2] Radial normalisation is continuous on the punctured space and maps into the unit sphere ([[lem-radial-normalisation-is-continuous]], [[def-euclidean-spheres-and-closed-balls]]).

[L3] A path-connected space is connected ([[thm-path-connected-implies-connected]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a path $\gamma:[0,1]\to\mathbb R^n\setminus\{0\}$ from $x$ to $y$ as in [L1], and define $\eta:=\rho\circ\gamma$, where $\rho(z)=z/\lVert z\rVert_2$. [L1, L2, construct]

2.1 The map $\eta$ is continuous and takes values in $S^{n-1}$ by [L2]. Since $\rho(x)=x$ and $\rho(y)=y$, it joins $x$ to $y$ in the sphere. [L2, step 1.1]

3.1 Thus the sphere is path-connected, and it is connected by [L3]. [L3, step 2.1, discharge-construct] ∎
