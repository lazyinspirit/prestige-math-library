---
id: def-fv-tpfa-no-flux-diffusion-specialization
kind: definition
title: No-flux TPFA diffusion generator
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-fv-admissible-cell-face-mesh
  - def-tpfa-harmonic-face-scheme
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, updated author text, 2019
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §9.2, PDF pp. 38–44: interior-face transmissibilities and shared conservative TPFA fluxes."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "§2, PDF pp. 8–10: orthogonal TPFA fluxes, positive transmissibilities, and the weighted stiffness matrix."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\mathcal T=(\mathcal K,\mathcal F)$ be a finite TPFA-admissible cell-face mesh from [[def-fv-admissible-cell-face-mesh]] and [[def-tpfa-harmonic-face-scheme]]. Impose homogeneous no-flux boundary conditions: boundary faces contribute zero flux and therefore no conductance. For adjacent cells $K,L$, set
$$
c_{KL}=\sum_{F=K|L}T_F,
$$
where the sum is over their common interior faces and is zero when they are not adjacent. Set $c_{KL}=c_{LK}$ and $m_K=|K|$. If more than one face separates a cell pair, summing their conductances gives the same cell-balance flux as retaining the faces separately. Define the symmetric matrix $L_h$ by $(L_h)_{KK}=\sum_{L\ne K}c_{KL}$ and $(L_h)_{KL}=-c_{KL}$ for $K\ne L$.

For species diffusivities $d_r\ge0$, the no-flux finite-volume diffusion equation is $M U_r'+d_r L_h U_r=0$ for each species $r$, where $M=\operatorname{diag}(|K|)$. Its component equation is
$$
|K|(U_{K,r})'=d_r\sum_{L:c_{KL}>0}c_{KL}(U_{L,r}-U_{K,r}).
$$
The equality is the usual shared-face TPFA balance with outward flux $T_F(U_{K,r}-U_{L,r})$ and no boundary flux. The matrix $L_h$ is symmetric, has zero row sums and nonpositive off-diagonal entries, and obeys $v^{\mathsf T}L_hv=\sum_{\{K,L\}}c_{KL}(v_K-v_L)^2\ge0$, where the sum is over unordered adjacent cell pairs. With $M=\operatorname{diag}(|K|)$, the generator $-M^{-1}L_h$ is self-adjoint in the weighted pairing $\langle v,w\rangle_M=v^{\mathsf T}Mw$. This definition makes no accuracy claim for arbitrary admissible meshes.
