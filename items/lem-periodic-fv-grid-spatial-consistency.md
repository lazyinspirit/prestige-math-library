---
id: lem-periodic-fv-grid-spatial-consistency
kind: lemma
title: Second-order spatial consistency of the periodic FV heat stencil
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-periodic-reaction-diffusion-grid
  - def-semilinear-reaction-diffusion-system
  - cor-taylor-lagrange-and-cauchy-remainders
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the estimate is a finite stencil sum and a one-variable Taylor bound.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§4, printed pp. 28–29: centered diffusion stencils and their second-order spatial truncation error."
verification:
  precheck: pass
---

## Statement

Let $u_r\in C^4(\mathbb T_L^d)$, and let $P_hu_r$ denote its samples on the periodic rectangular grid of [[def-periodic-reaction-diffusion-grid]]. For every grid node $i$,
$$
\left|(A_h^{\rm per}P_hu_r)_i+P_h(\Delta u_r)_i\right|\le\frac1{12}\sum_{j=1}^dh_j^2\|\partial_{jjjj}u_r\|_{L^\infty(\mathbb T_L^d)}.
$$
For $D=\operatorname{diag}(d_1,\ldots,d_m)$, define the sampled spatial residual $r_h=D(P_h\Delta u-\Delta_hP_hu)$, where $\Delta_h=-A_h^{\rm per}$ acts componentwise. If the indicated fourth derivatives are uniformly bounded for $0\le t\le T$, then $\|r_h(t)\|_\infty\le C_{\rm sp}h_{\max}^2$ with $C_{\rm sp}=\frac{d_{\max}}{12}\sum_j\|\partial_{jjjj}u\|_{L^\infty}$ componentwise, uniformly in the mesh.

## Facts & Assumptions

**Given:** A smooth periodic scalar or vector field on $\mathbb T_L^d$, the periodic rectangular grid, and its positive stencil $A_h^{\rm per}$.

[F1] [[def-periodic-reaction-diffusion-grid]]: $(A_h^{\rm per}v)_i=\sum_j(2v_i-v_{i+e_j}-v_{i-e_j})/h_j^2$ with periodic wraparound.

[F2] [[cor-taylor-lagrange-and-cauchy-remainders]]: for a four-times continuously differentiable scalar function, the third-degree Taylor remainder at $x\pm h$ has magnitude at most $\|f^{(4)}\|_\infty h^4/24$.

[A1] Each component $u_r$ is periodic and belongs to $C^4$; the derivative norms in the Statement are finite.

## Proof

1.1 Fix a node $i$ and direction $j$. Lift the periodic component to its smooth periodic function on $\mathbb R^d$. Apply [F2] to the one-variable restrictions at $x_i+h_je_j$ and $x_i-h_je_j$, expanding each through its cubic term at $x_i$. The odd first- and third-degree terms cancel in the sum, leaving $u_r(x_i+h_je_j)-2u_r(x_i)+u_r(x_i-h_je_j)=h_j^2\partial_{jj}u_r(x_i)+\rho_{ij}$ with $|\rho_{ij}|\le h_j^4\|\partial_{jjjj}u_r\|_\infty/12$. [A1, F2, algebra]

2.1 Divide the identity of step 1.1 by $h_j^2$, change sign to match the positive stencil, and sum over the finite directions $j=1,\ldots,d$. The triangle inequality gives the first displayed bound. Multiplying componentwise by $d_r$ gives the residual estimate, and $h_j\le h_{\max}$ gives the uniform constant stated above. [F1, step 1.1, algebra] ∎
