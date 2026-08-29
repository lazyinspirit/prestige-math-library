---
id: ex-the-n-sphere-with-its-standard-smooth-atlas
kind: example
title: "The $n$-sphere with its standard smooth atlas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-atlas, def-smoothly-compatible-charts, def-smooth-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Example 1.8"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Example

For $n\ge1$, let

$$S^n:=\{(x_1,\dots,x_{n+1})\in\mathbb R^{n+1}:x_1^2+\cdots+x_{n+1}^2=1\}.$$

With north and south poles $N=(0,\dots,0,1)$ and $S=(0,\dots,0,-1)$, the
stereographic charts

$$\sigma_N(x)=\frac{(x_1,\dots,x_n)}{1-x_{n+1}},\qquad \sigma_S(x)=\frac{(x_1,\dots,x_n)}{1+x_{n+1}}$$

define a smooth atlas on $S^n$. Their overlap transition is
$u\mapsto u/\|u\|^2$ on $\mathbb R^n\setminus\{0\}$.

## Facts & Assumptions

**Given:** The sphere $S^n$ and the two stereographic maps $\sigma_N,\sigma_S$.

[F1] A smooth atlas is a covering family of pairwise smoothly compatible charts ([[def-smooth-atlas]]).

[F2] Smooth compatibility means that both transition maps are smooth on the overlap ([[def-smoothly-compatible-charts]]).

[F3] A smooth manifold is a topological manifold equipped with a smooth structure ([[def-smooth-manifold]]).

## Verification

**Proof technique:** direct.

1.1 The domains $S^n\setminus\{N\}$ and $S^n\setminus\{S\}$ are open and cover [given] $S^n$. The inverse formulas $$\sigma_N^{-1}(u)=\left(\frac{2u}{1+\|u\|^2},\frac{\|u\|^2-1}{1+\|u\|^2}\right), \qquad \sigma_S^{-1}(u)=\left(\frac{2u}{1+\|u\|^2},\frac{1-\|u\|^2}{1+\|u\|^2}\right)$$ show that both maps are homeomorphisms onto $\mathbb R^n$. [given]

2.1 On the overlap the transition maps are $$\sigma_S\circ\sigma_N^{-1}(u)=\frac{u}{\|u\|^2}, \qquad \sigma_N\circ\sigma_S^{-1}(u)=\frac{u}{\|u\|^2},$$ defined on $\mathbb R^n\setminus\{0\}$, so they are smooth rational maps there. Hence the two stereographic charts are smoothly compatible by [F2], and [F1] makes them a smooth atlas on $S^n$. [F1, F2, step 1.1]

3.1 Therefore $S^n$ is a smooth manifold by [F3]. [F3, step 2.1] ∎
