---
id: def-na-simplicial-mesh-rt-bdm-spaces
kind: definition
title: Affine simplicial meshes and RT/BDM spaces
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, def-na-hdiv-space, def-na-h0div-space, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.2–14.4: affine simplices, Raviart–Thomas and BDM polynomial spaces, and facet conformity."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §§2.1–2.2: affine simplex maps and RT/BDM families."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $d\in\{2,3\}$ and let $D\subset\mathbb R^d$ be a bounded, connected polyhedral Lipschitz domain. A matching affine simplicial mesh and its shape regularity have the exact meaning of [[def-matching-affine-simplicial-meshes]]; additionally, call the mesh facet-connected when its dual graph (one vertex per cell and one edge per shared $(d-1)$-facet) is connected. Write $h=\max_{K\in\mathcal T_h}\operatorname{diam}K$.

For $k\ge0$, $\mathbb P_k(K)$ is the real scalar polynomial space of total degree at most $k$, and $\widetilde{\mathbb P}_k$ is the real homogeneous scalar polynomial space of degree exactly $k$ (for $k=0$, the constants). Define
$$\operatorname{RT}_k(K)=\mathbb P_k(K;\mathbb R^d)+x\widetilde{\mathbb P}_k(K),\qquad \operatorname{BDM}_k(K)=\mathbb P_k(K;\mathbb R^d)\quad(k\ge1).$$
For either local family $X_k$, its global H(div)-conforming space is
$$X_k(\mathcal T_h)=\{v\in H(\operatorname{div};D):v|_K\in X_k(K)\text{ for every }K\in\mathcal T_h\}.
$$
The zero-normal RT0 flux space and mean-zero P0 pressure space are
$$V_h:=\operatorname{RT}_0(\mathcal T_h)\cap H_0(\operatorname{div};D),\qquad Q_h:=\{q\in L^2(D):q|_K\text{ is constant for every }K,\ \int_Dq=0\}.$$
For each mesh facet $F$, fix one unit normal $n_F$; on a cell boundary use the outward unit normal $n_K$, which equals either $n_F$ or $-n_F$. The notation $\mathbb P_0(\mathcal T_h)$ means cellwise constants. No existence of a mesh for every $D$ is asserted by this definition.
