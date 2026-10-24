---
id: def-periodic-reaction-diffusion-grid
kind: definition
title: Periodic rectangular reaction-diffusion grid
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-periodic-heat-difference-amplification-symbol
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.6–10.8, printed pp. 144–148 (PDF pp. 149–153): multispecies reaction-diffusion equations, two-species linear stability and Turing context, and the FitzHugh–Nagumo illustration with a periodic centered-difference Laplacian (Listing 10.1)."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix $d\ge1$, side lengths $L_j>0$, and integers $N_j\ge3$. Put $h_j=L_j/N_j$, $\mathbb T_L^d=\prod_{j=1}^d(\mathbb R/L_j\mathbb Z)$, and $G_h=\prod_{j=1}^d(\mathbb Z/N_j\mathbb Z)$. Grid nodes are $x_i=((i_j+\tfrac12)h_j)_{j=1}^d$ modulo the side lengths, grid indices wrap modulo $N_j$, and $P_hu=(u(x_i))_{i\in G_h}$ denotes sampling. The cell volume is $m_h=\prod_jh_j$. The positive periodic heat stencil is the unit-diffusivity specialization of the periodic operator in [[def-parabolic-theta-finite-difference-scheme]]:
$$
(A_h^{\rm per}v)_i=\sum_{j=1}^d\frac{2v_i-v_{i+e_j}-v_{i-e_j}}{h_j^2}.
$$
For $s$ species with diffusivities $d_r\ge0$, the reaction-diffusion grid generator acts on species $r$ by $-d_rA_h^{\rm per}$. Each grid node has weight $m_h=\prod_jh_j$; the stencil has zero row and column sums, so each species' weighted sum is conserved by diffusion. Its matrix representation satisfies $L_h=m_hA_h^{\rm per}$, with symmetric $L_h$, nonpositive off-diagonal entries and $L_h\mathbf1=0$.

The sign convention is that $A_h^{\rm per}$ is nonnegative and $-d_rA_h^{\rm per}$ generates diffusion. The exact eigenvalues of the positive stencil are supplied by [[lem-periodic-heat-difference-amplification-symbol]]. This grid is the only spatial discretization used in the periodic error theorem; no mesh-uniform claim for general finite-volume meshes is made there.
