---
id: ex-orthogonal-voronoi-harmonic-diffusion
kind: example
title: Harmonic TPFA flux on a rectangular Voronoï mesh
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [ def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook
        of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, Example 9.2, printed pp. 39–40: Voronoï meshes and
        orthogonality."
verification:
  precheck: pass
---

## Example

Take $\Omega=(0,2)\times(0,1)$ and the two rectangular cells $K=(0,1)\times(0,1)$ and $L=(1,2)\times(0,1)$. Their centers are $(1/2,1/2)$ and $(3/2,1/2)$, so the shared vertical face is orthogonal to the center segment. Set $\lambda_K=\lambda_L=1$, use $u(x,y)=x$, and impose its exact face-center values on the four outer boundary faces. The exact source is $f=0$.

## Facts & Assumptions

**Given:** The two-cell mesh and data above, and the TPFA transmissibilities and signed fluxes from [[def-tpfa-harmonic-face-scheme]].

[F1] [[def-fv-admissible-cell-face-mesh]]: $|K|=|L|=1$; the shared face has length $1$, and each outer face has length $1$.

[F2] [[def-tpfa-harmonic-face-scheme]]: $T_F=|F|/(d_{K,F}/\lambda_K+d_{L,F}/\lambda_L)$ on an interior face, and $T_{K,F}=|F|\lambda_K/d_{K,F}$ on a boundary face.

## Verification

1.1 The center-to-center distance across the shared face is $1$, with half-distances $d_{K,F}=d_{L,F}=1/2$. Thus $T_F=1$. The left and right boundary half-distances are $1/2$, so their transmissibilities are $2$; top and bottom center-to-face displacements are vertical and hence orthogonal to those faces. The mesh satisfies the TPFA orthogonality requirements. [F1, F2, given, algebra]

2.1 The cell values are $u_K=1/2$ and $u_L=3/2$. At the shared face, $Q_{K,F}=1(1/2-3/2)=-1$ and $Q_{L,F}=1$. On the left boundary the outward flux is $2(1/2-0)=1$, and on the right boundary it is $2(3/2-2)=-1$. The top and bottom boundary fluxes vanish because their face-center values equal the adjacent cell-center values. Each cell balance therefore sums to zero, and the shared flux matches the exact outward diffusive flux $-\nabla u\cdot(1,0)=-1$ from $K$. [F1, F2, step 1.1, algebra] ∎

