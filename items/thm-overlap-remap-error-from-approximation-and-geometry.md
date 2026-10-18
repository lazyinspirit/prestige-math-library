---
id: thm-overlap-remap-error-from-approximation-and-geometry
kind: theorem
title: "Remap error separates source, target and geometry approximation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-intersection-volume-conservative-remapping
  - thm-overlap-remap-l2-projection-conservation-positivity
  - def-curved-domain-geometry-approximation
  - thm-holder-inequality-for-integrals
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\widehat\Omega$ be bounded, let $\Phi,\Phi_h$ be the geometry maps of [[def-curved-domain-geometry-approximation]] and assume each is a global orientation-preserving $C^1$ diffeomorphism from $\widehat\Omega$ onto its image, with $J_h\le J^*$ and $u$ is $L_u$-Lipschitz on the union of their images. On $\Omega_h=\Phi_h(\widehat\Omega)$ let $\mathcal S=(S_i)_{i=1}^m$ and $\mathcal T=(T_j)_{j=1}^n$ be finite families of Lebesgue-measurable sets of positive measure satisfying
$$|\Omega_h\setminus\textstyle\bigcup_i S_i|=|\Omega_h\setminus\textstyle\bigcup_j T_j|=0,\qquad |S_i\cap S_{i'}|=0\ (i\ne i'),\qquad |T_j\cap T_{j'}|=0\ (j\ne j').$$
Thus each family is a finite measurable partition up to null sets as required by [[def-intersection-volume-conservative-remapping]]. Let $v_S$ be source-piecewise-constant data with finite $L^2$ error. Assume the exact target projection error below is finite. Define $P_Tq$ on each target cell by its exact cell average, $\eta_S=\|u-v_S\|_{L^2(\Omega_h)}$, and $\eta_T=\|u-P_Tu\|_{L^2(\Omega_h)}$. If $R$ is the exact overlap remap, then
$$\|u\circ\Phi-(Rv_S)\circ\Phi_h\|_{L^2(\widehat\Omega,J_h)}\le L_u e_0\sqrt{J^*|\widehat\Omega|}+\eta_S+\eta_T,$$
where $e_0=\|\Phi-\Phi_h\|_\infty$ and $\|z\|_{L^2(\widehat\Omega,J_h)}^2=\int_{\widehat\Omega}|z|^2J_h$.

## Facts & Assumptions

**Given:** Countable Choice; the exact and approximate maps; a bounded approximate Jacobian; a Lipschitz field on both images; two finite measurable families satisfying the displayed coverage and pairwise-null-overlap conditions; and source values constant on source cells.

[F1] [[def-curved-domain-geometry-approximation]]: $e_0=\|\Phi-\Phi_h\|_\infty$ and $J_h$ is the positive approximate Jacobian.

[F2] [[def-intersection-volume-conservative-remapping]] and [[thm-overlap-remap-l2-projection-conservation-positivity]]: exact overlap remapping of source constants is the target-cell average projection.

[F3] [[thm-holder-inequality-for-integrals]]: $|\int_Tq|^2\le |T|\int_T|q|^2$ on every finite-volume target cell.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism transforms nonnegative integrals by its positive Jacobian.

[A1] Countable Choice is assumed for the measure/projection interfaces in [F2] and change of variables in [F4] ([[def-countable-choice]]).

## Proof

1.1 The Lipschitz condition gives $|u(\Phi(X))-u(\Phi_h(X))|\le L_ue_0$ for every $X$. Integrating its square against $J_h\le J^*$ gives the geometry term $L_ue_0\sqrt{J^*|\widehat\Omega|}$. [F1, given]

1.2 For any $q\in L^2(\Omega_h)$ and target cell $T$, [F3] gives $|T||P_Tq|_T^2=|\int_Tq|^2/|T|\le\int_T|q|^2$. Summing over the disjoint target cells shows $P_T$ is contractive. The same averaging identity gives $q-P_Tq$ orthogonal to every target-cellwise constant, so $P_T$ is the orthogonal projection. [F3, given, algebra]

2.1 By [F2], $Rv_S=P_Tv_S$. Thus $u-Rv_S=(u-P_Tu)+P_T(u-v_S)$; the two terms are orthogonal and $P_T$ is contractive by step 1.2. The first term has norm $\eta_T$ and the second is at most $\eta_S$, whence $\|u-Rv_S\|_{L^2(\Omega_h)}\le\eta_T+\eta_S$. [F2, step 1.2, algebra]

3.1 Apply [F4] separately on the finitely many mesh cells to identify the physical $L^2(\Omega_h)$ norm in step 2.1 with the weighted pullback norm of $(u-Rv_S)\circ\Phi_h$. The triangle inequality with step 1.1 proves the claimed bound. [F4, A1, step 1.1, step 2.1] ∎
