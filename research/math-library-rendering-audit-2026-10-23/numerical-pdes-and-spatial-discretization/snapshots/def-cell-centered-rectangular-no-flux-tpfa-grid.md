---
id: def-cell-centered-rectangular-no-flux-tpfa-grid
kind: definition
title: Cell-centered rectangular TPFA grid with homogeneous no-flux boundaries
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-fv-tpfa-no-flux-diffusion-specialization
  - def-periodic-reaction-diffusion-grid
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, updated author text, 2019
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §§9.2–9.3, PDF pp. 38–47: orthogonal cell-centered TPFA fluxes and boundary-face conventions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\Omega=\prod_{j=1}^d(0,L_j)$, where $L_j>0$, and let integers $N_j\ge2$ define $h_j=L_j/N_j$. The finite cell set is $I_h=\prod_{j=1}^d\{0,\ldots,N_j-1\}$, cell centers are $x_i=((i_j+\tfrac12)h_j)_{j=1}^d$, and every cell has volume $m_h=\prod_jh_j$. This is the uniform orthogonal Cartesian mesh; adjacent center segments are perpendicular to their shared faces. Take the scalar cellwise coefficient to be $\lambda_K=1$ and give boundary faces homogeneous no-flux data, so they contribute no flux.

For a grid vector $v=(v_i)_{i\in I_h}$, define the positive cell-centered stencil
$$
(A_h^Nv)_i=\sum_{j=1}^d\frac{2v_i-v_{i+e_j}-v_{i-e_j}}{h_j^2},
$$
where an unavailable neighbor at a boundary is assigned the value of the boundary cell itself. Indeed a face normal to direction $j$ has area $|F|=m_h/h_j$ and adjacent centers are distance $h_j$ apart, so its TPFA transmissibility is $|F|/h_j=m_h/h_j^2$; dividing the cell balance by $m_h$ gives the displayed coefficient. Boundary faces contribute zero flux. Thus $M_h=m_hI$ and $L_h^N=m_hA_h^N$ are the mass and stiffness matrices of the no-flux specialization in [[def-fv-tpfa-no-flux-diffusion-specialization]]. For species diffusivities $d_r\ge0$, the finite-volume diffusion equation is $U_r'=-d_rA_h^NU_r$.

Define the doubled periodic grid with $2N_j$ cells per direction on side lengths $2L_j$, using the same widths $h_j$, as in [[def-periodic-reaction-diffusion-grid]]. The reflection map $E_h$ extends $U$ evenly across every boundary face: in one coordinate, its extended index is $i$ for $0\le i<N_j$ and $2N_j-1-i$ for $N_j\le i<2N_j$; apply this coordinatewise. This finite reflection convention is used in the error theorem below.
