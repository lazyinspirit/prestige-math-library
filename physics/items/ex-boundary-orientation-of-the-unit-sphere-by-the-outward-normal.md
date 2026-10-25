---
id: ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal
kind: example
title: "Boundary orientation of the unit sphere by the outward normal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field, ex-the-closed-ball-and-its-sphere-boundary]
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

## Example

For $n\ge1$, the boundary orientation of $S^{n-1}=\partial B^n$ is the standard hypersurface orientation for which the radial outward normal is first.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the closed unit ball $B^n\subset\mathbb R^n$ with the orientation induced by the standard ordered basis of $\mathbb R^n$, and its boundary $S^{n-1}$.

[L1] The induced boundary orientation is outward-normal-first ([[def-induced-boundary-orientation]]).

[L2] The boundary of $B^n$ is $S^{n-1}$ ([[ex-the-closed-ball-and-its-sphere-boundary]]).

[L3] The standard oriented interval satisfies $\partial[-1,1]=\{1\}-\{-1\}$ ([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

## Verification

**Proof technique:** direct.

1.1 At $u\in S^{n-1}$, the radial vector $u$ points outward from $B^n$. [given, L2]

2.1 If $n=1$, then $B^1=[-1,1]$ and [L3] gives the positive determinant ray at $1$ and the negative determinant ray at $-1$, exactly as the outward vectors $1$ and $-1$ require under [L1]. If $n\ge2$, a tangent basis $(v_1,\ldots,v_{n-1})$ is positive precisely when $(u,v_1,\ldots,v_{n-1})$ is positive in the standard orientation of $\mathbb R^n$. Thus in every case the boundary orientation is the standard hypersurface orientation cooriented by the radial outward normal. [given, L1, L3, step 1.1, algebra] ∎
