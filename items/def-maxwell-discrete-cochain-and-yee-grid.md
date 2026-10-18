---
id: def-maxwell-discrete-cochain-and-yee-grid
kind: definition
title: Oriented Maxwell cochains, masses, and the Yee grid
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [ def-transient-maxwell-system-with-material-interfaces ]
forward_refs: []
justified_by:
  - lem-maxwell-discrete-incidence-identities
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §§3.2–3.3, printed pp. 30–36, and Chapter 9 §9.3, printed pp. 246–249: Yee staggering and three-dimensional update rows."
verification:
  precheck: n/a
---

## Definition

Let $K$ be a finite oriented three-dimensional cell complex with vertex, edge, face, and volume cochains. An edge cochain records oriented electric line integrals, a face cochain records oriented magnetic fluxes, and a vertex cochain records electric charge. Write $N_v,N_e,N_f,N_c$ for the retained vertex, edge, face, and cell counts. On a periodic cell, identify opposite cells with orientation preserved and let $G,C,D$ be the full vertex-to-edge gradient, edge-to-face curl, and face-to-cell divergence incidence matrices, each the transpose of its signed oriented boundary matrix. For a PEC closure, “interior” means not in the boundary subcomplex. Keep only interior electric edges as unknowns and only interior vertices as volume-charge locations, but keep all face fluxes, including boundary-normal magnetic fluxes, and all cells. This closure has no separate boundary surface-charge cochain. Define $G$ and $C$ by restricting the absolute vertex-edge and edge-face incidence matrices to those rows and columns. This mixed closure imposes zero tangential electric edge cochains on the boundary while allowing a fixed normal magnetic flux on boundary faces. In both cases, $G\in\mathbb R^{N_e\times N_v}$, $C\in\mathbb R^{N_f\times N_e}$, and $D\in\mathbb R^{N_c\times N_f}$ satisfy $CG=0$ and $DC=0$.

The electric, magnetic, and conductive material matrices are real symmetric matrices $M_e\in\mathbb R^{N_e\times N_e}$, $M_b\in\mathbb R^{N_f\times N_f}$, and $S\in\mathbb R^{N_e\times N_e}$, respectively. The first two are positive definite and represent the discrete weighted inner products induced by $\epsilon$ and $\mu^{-1}$; $S$ is positive semidefinite and represents conductivity. Write $\langle e_1,e_2\rangle_{M_e}=e_1^TM_ee_2$, $\langle b_1,b_2\rangle_{M_b}=b_1^TM_bb_2$, and $\|e\|_{M_e}^2=\langle e,e\rangle_{M_e}$, $\|b\|_{M_b}^2=\langle b,b\rangle_{M_b}$. In a homogeneous isotropic periodic Cartesian grid with spacings $h_x,h_y,h_z$ and cell volume $V=h_xh_yh_z$, the diagonal entries for an $x$-edge and an $x$-normal face are $\epsilon V/h_x^2=\epsilon h_yh_z/h_x$ and $\mu^{-1}h_x/(h_yh_z)$; the $y$ and $z$ entries are obtained by cyclic permutation. These values are dual-volume Hodge weights for line-integral and face-flux cochains. A compatible PEC closure uses the corresponding truncated dual volumes for free electric edges, while the magnetic mass includes boundary faces; the resulting matrices remain positive definite. The discrete constraints are $-G^TM_ee^n=\rho^n$ on interior vertices and $Db^{n-1/2}=0$ on all cells.

The minus sign in the electric constraint is essential: an edge oriented from tail to head has incidence entries $-1,+1$, so $-G^T$ is the outgoing-flux divergence. Thus $\rho$ represents physical electric charge with the sign of $\operatorname{div}(\epsilon E)$ in [[def-transient-maxwell-system-with-material-interfaces]].

For current cochains $j^{n+1/2}$ and charge rows $\rho^n$, the discrete continuity condition means
$$\rho^{n+1}-\rho^n-\Delta t\,G^T\left(j^{n+1/2}+S\frac{e^{n+1}+e^n}{2}\right)=0.$$
For PEC this is the interior-vertex volume-charge relation; this closure has no separate boundary surface-charge/current cochain.

The cochain identities $CG=0$ and $DC=0$ are not imposed as an extra numerical approximation: they follow from oriented boundary-of-boundary cancellation, including the PEC row and column restrictions, as proved in [[lem-maxwell-discrete-incidence-identities]]. No cell geometry picture is used as a proof.
