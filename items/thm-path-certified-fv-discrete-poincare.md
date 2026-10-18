---
id: thm-path-certified-fv-discrete-poincare
kind: theorem
title: Discrete Poincaré inequality from boundary paths
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [ def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook
        of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, Definition 9.2 and Lemma 9.1 with proof, printed pp.
        39–41: discrete H1 norm and a Poincaré inequality on admissible meshes."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations:
        introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§1.2 and §2.1, PDF pp. 5–9: discrete H1 norms and mesh-uniform
        Poincaré estimates in the TPFA convergence route."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\mathcal T$ be a finite boundary-anchored TPFA mesh and let $T_e>0$ be its interior and boundary transmissibilities. A **boundary path family** assigns to each cell $K$ a finite simple path $\gamma_K$ of adjacent interior faces, followed by one boundary face of its terminal cell; simple means it visits no cell more than once. Set $\Delta_eu=u_K-u_L$ on an interior face $e=K|L$ with a fixed orientation, and set $\Delta_eu=u_K$ on a boundary face of $K$. The sign of an interior increment is reversed when the path traverses the fixed orientation backward. Put
$$ S_K=\sum_{e\in\gamma_K}T_e^{-1},\qquad C_{\rm path}=\max_{e}\sum_{K:e\in\gamma_K}|K|S_K. $$
Then every cell vector $u$ satisfies the discrete Poincaré inequality
$$ \sum_{K\in\mathcal K}|K|u_K^2\le C_{\rm path}\sum_{e}T_e(\Delta_eu)^2=C_{\rm path}\|u\|_{E_h}^2. $$
Consequently, any uniformly regular mesh family supplied with boundary path families whose $C_{\rm path}$ are uniformly bounded has a mesh-uniform Poincaré constant. This theorem does not assert that every orthogonal mesh family has such a uniform path bound.

## Facts & Assumptions

**Given:** A finite cell-face mesh, positive interior and boundary transmissibilities, a specified boundary path from every cell, and the finite value $C_{\rm path}$ above.

[F1] [[def-fv-admissible-cell-face-mesh]]: each cell has a finite boundary path in a boundary-anchored mesh, and $|K|$ is its volume.

[F2] [[def-tpfa-harmonic-face-scheme]]: the transmissibility energy is $\|u\|_{E_h}^2=\sum_eT_e(\Delta_eu)^2$, with boundary increment $u_K$ because the Dirichlet boundary value is zero.

[A1] For each cell $K$, a particular finite path $\gamma_K$ is included as data; $S_K$ and $C_{\rm path}$ are finite.

## Proof

1.1 Fix a cell $K$. Traverse its supplied path to a boundary face. The signed increments telescope from $u_K$ to the terminal boundary value $0$, so $u_K=\sum_{e\in\gamma_K}\epsilon_{K,e}\Delta_eu$, where each $\epsilon_{K,e}\in\{-1,1\}$ records the orientation. [F1, A1, given, algebra]

2.1 Weighted Cauchy–Schwarz with weights $T_e$ gives $|u_K|^2\le(\sum_{e\in\gamma_K}T_e^{-1})(\sum_{e\in\gamma_K}T_e(\Delta_eu)^2)=S_K\sum_{e\in\gamma_K}T_e(\Delta_eu)^2$. [F2, step 1.1, algebra]

3.1 Multiply step 2.1 by $|K|$ and sum over all cells. Since the mesh, edge set, and paths are finite, reorder the sums to obtain $\sum_K|K|u_K^2\le\sum_eT_e(\Delta_eu)^2\sum_{K:e\in\gamma_K}|K|S_K\le C_{\rm path}\sum_eT_e(\Delta_eu)^2.$ The last sum is the energy norm in [F2], proving the assertion. [A1, F2, step 2.1, algebra] ∎

