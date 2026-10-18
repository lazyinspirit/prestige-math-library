---
id: def-na-hybridized-rt0-darcy-system
kind: definition
title: Hybridized no-flow RT0/P0 Darcy system
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-na-neumann-darcy-mixed-problem, def-na-simplicial-mesh-rt-bdm-spaces, def-na-h0div-space, lem-affine-simplex-gauss-green-formula, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 7 §7.2: hybridization of mixed methods and Lagrange multipliers on interfaces."
    - title: "Francisco-Javier Sayas, A gentle introduction to the Finite Element Method (2015)"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 10 §§1.1–1.2, pp. 174–180: hybridized implementation and hybridized form."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice.

Assume the no-flow Darcy data of [[def-na-neumann-darcy-mixed-problem]] and a facet-connected conforming mesh from [[def-na-simplicial-mesh-rt-bdm-spaces]]. Let $\mathcal F_h^i$ be its interior facets. On each cell $K$, let
$$W_K:=\{v\in\operatorname{RT}_0(K):v\cdot n_K=0\text{ on every boundary facet of }D\text{ contained in }\partial K\}.$$
The broken flux space is $W_h:=\prod_{K\in\mathcal T_h}W_K$, the cell pressure space is $M_h:=\prod_{K\in\mathcal T_h}\mathbb R$, and the skeleton multiplier space is $\Lambda_h:=\prod_{F\in\mathcal F_h^i}\mathbb R$. The scalar $\lambda_F$ is constant on facet $F$ and uses the fixed orientation only to label that facet; local equations use the outward normal of each cell.

For the source-only problem $F=0$, a hybrid solution $(u_h,p_h,\lambda_h)\in W_h\times M_h\times\Lambda_h$ for $f\in Q$ satisfies, for every cell $K$, every $v_K\in W_K$, and every interior facet $F=K^+\cap K^-$,
$$\int_KK^{-1}u_K\cdot v_K-\int_Kp_K\operatorname{div}v_K+\sum_{F\subset\partial K,\ F\in\mathcal F_h^i}\lambda_F\int_Fv_K\cdot n_K=0,$$
$$\int_K\operatorname{div}u_K=\int_Kf,$$
$$\int_F(u_{K^+}\cdot n_{K^+}+u_{K^-}\cdot n_{K^-})=0.$$
Because each RT0 normal component is constant on a facet, the last equation is pointwise normal-flux matching. With physical-boundary flux zero, the transformation $p_K\mapsto p_K+c$ for all cells and $\lambda_F\mapsto\lambda_F+c$ leaves the hybrid equations unchanged: in the local first equation the change is $-c\int_K\operatorname{div}v_K+c\sum_{F\text{ interior}}\int_Fv_K\cdot n_K=0$ by Gauss–Green and the zero physical-boundary flux; the mass and jump equations do not use pressure or multipliers. This is the common pressure gauge.
