---
id: ex-anisotropic-mimetic-flux-on-skew-cell
kind: example
title: Affine anisotropic flux on a skew parallelogram
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps: [def-fv-admissible-cell-face-mesh, def-hybrid-mimetic-fv-scheme, prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Konstantin Lipnikov and Gianmarco Manzini, Discretization of mixed formulations of elliptic problems on polyhedral meshes, 2016"
      url: "https://arxiv.org/pdf/1610.05850"
      locator: "§3, PDF pp. 8–16: mixed-hybrid mimetic consistency and stability on polyhedral meshes."
---

## Example

Take the single parallelogram cell with vertices $(0,0),(2,0),(3,1),(1,1)$, tensor $A=\operatorname{diag}(2,1)$, and affine state $u(x,y)=x+2y$. Prescribe on each boundary face its exact face mean. The cell center is $(3/2,1/2)$ and the face centers, in bottom/right/top/left order, are $(1,0),(5/2,1/2),(2,1),(1/2,1/2)$. This cell is skew: its right and left face normals are not parallel to the vectors from the cell center to those face centers.

## Facts & Assumptions

**Given:** The skew parallelogram, $A=\operatorname{diag}(2,1)$, the affine function $u=x+2y$, and the hybrid mimetic reconstruction and flux conventions.

[F1] [[def-hybrid-mimetic-fv-scheme]]: $G_Ku=|K|^{-1}\sum_F|F|u_Fn_{K,F}$, the residual is $u_F-u_K-G_Ku\cdot(x_F-x_K)$, and the outward mimetic flux is $-\mathscr A_K(u,\phi_{K,F})$.

[F2] [[prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact]]: for affine states the mimetic flux is exactly $-|F|(A\nabla u)\cdot n_{K,F}$.

## Verification

1.1 The cell area is $|K|=2$. The face data $(|F|,x_F,n_{K,F})$, in bottom/right/top/left order, are $(2,(1,0),(0,-1)),\quad(\sqrt2,(5/2,1/2),(1,-1)/\sqrt2),\quad(2,(2,1),(0,1)),\quad(\sqrt2,(1/2,1/2),(-1,1)/\sqrt2).$ Their weighted normals sum to $(0,0)$ and $\sum_F|F|n_{K,F}\otimes x_F=2I_2$, so the cell satisfies the face-moment closure in [F1]. [F1, given, algebra]

2.1 The cell and face means of $u$ are $u_K=5/2$ and $(u_F)=(1,7/2,4,3/2)$. Substitution into [F1] gives $\sum_F|F|u_Fn_{K,F}=(2,4)$ and hence $G_Ku=(1,2)=\nabla u$. Each residual is zero: for example, on the bottom face $u_F-u_K=-3/2=G_Ku\cdot((-1/2,-1/2))$, and the same dot-product identity holds for the other three face centers. [F1, step 1.1, algebra]

3.1 We have $A\nabla u=(2,2)$. By [F2], the outward integrated fluxes in bottom/right/top/left order are $4,0,-4,0$, respectively. Their sum is zero, which is the exact cell balance for the affine state since its flux is constant and has zero divergence. This verifies affine consistency and local conservation on this skew, anisotropic cell. [F2, given, step 2.1, algebra] ∎

