---
id: alg-bem-certified-inexact-matrix-assembly
kind: algorithm
title: Certified near-quadrature and far-multipole matrix assembly
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-bem-surface-mesh-and-piecewise-constant-density-space, def-bem-calderon-boundary-operators, thm-duffy-weak-singularity-transform, alg-duffy-weighted-product-gauss-quadrature, cor-duffy-weighted-product-gauss-error, alg-three-dimensional-laplace-cluster-expansion, thm-three-dimensional-laplace-expansion-error-and-work, def-countable-choice, def-axiom-of-choice, lem-bem-panel-pair-duffy-certificates, lem-bem-far-panel-quadrature-residual]
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice and Countable Choice are inherited through the weak single-layer pairing and trace-space suppliers in the panel-pair lemma. Countable Choice also supplies the positive weighted Gaussian rules. The finite geometric decompositions and finite matrix-error algebra use no choice once their inputs are supplied."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Imperial College London, Numerical quadrature, Finite Element course notes, §1.6"
      url: https://finite-element.github.io/1_quadrature.html
      locator: "§1.6, equations (1.11)–(1.13): Duffy's map and the weighted product rule for one reference-triangle vertex singularity."
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf
      locator: "Chapter 4 §4.1.2, PDF pp. 26–30: the 3D Laplace point-source expansion and its separated-cluster truncation."
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $\mathcal T_h$ and $X_h$ be the surface mesh and P0 space from [[def-bem-surface-mesh-and-piecewise-constant-density-space]]. For an ordered target/source pair $(T,S)$ define its exact 3D Laplace single-layer matrix entry by
$$A_{TS}=\langle1_T,V1_S\rangle_\Gamma=\int_T\int_S\frac{1}{4\pi|x-y|}\,dS_y\,dS_x,$$
where the equality is proved for every panel pair by [[lem-bem-panel-pair-duffy-certificates]]. Supply a positive per-entry tolerance $\tau_{TS}$ and construct exactly one auditable certificate as follows.

- **Near certificate.** For coincident panels or panels sharing an edge or vertex, use the finite sign-cell/pulling-simplex identity of [[lem-bem-panel-pair-duffy-certificates]]. A disjoint pair may also use that lemma's smooth fallback whenever the whole-panel far-cluster condition below is unavailable. Each term is a reference-triangle integral $\int_R|z|^{-\alpha_m}q_m(z)dz$ with $\alpha_m<2$ and transformed amplitude $G_m\in C^{2n}([0,1]^2)$. Record the exact change-of-variables derivation, the supplied derivative bounds, and the positive Gaussian remainder $E_m$ from [[cor-duffy-weighted-product-gauss-error]]. If $\rho_m$ is the separately certified total of nested fiber, node-value and outward arithmetic radii, require $\varepsilon_{TS}^{\rm near}=\sum_m|c_m|(E_m+\rho_m)\le\tau_{TS}$. A custom near identity is usable only after its identity and every Gaussian hypothesis have been fully verified. For the standard panel-pair construction, every final exponent is $\alpha_m=0$.

- **Far certificate.** For disjoint panels, choose positive centroid rules on finite midpoint subdivisions and use [[lem-bem-far-panel-quadrature-residual]] to record the physical-kernel quadrature residual $\varepsilon_{TS}^{\rm quad}$ and any separate outward evaluation radius $\varepsilon_{TS}^{\rm eval}$. If the source nodes with physical charges $q_j=v_j/(4\pi)$ lie in $B(c,a)$ and the target nodes lie in $B(d,b)$ with the strict condition $R=|d-c|>a+b$, evaluate the single-cluster field of [[alg-three-dimensional-laplace-cluster-expansion]]. For $Q=\sum_j|q_j|$ and target weight sum $W_T$, record
$$\varepsilon_{TS}^{\rm far}=\varepsilon_{TS}^{\rm quad}+\varepsilon_{TS}^{\rm eval}+W_T\frac{Q}{R-b}\frac{(a/(R-b))^{p+1}}{1-a/(R-b)}+\varepsilon_{TS}^{\rm FMM-arith}.$$
The final term is the outward arithmetic radius of the finite cluster evaluation; it is zero only for an exact-arithmetic evaluation. If the whole-panel balls fail $R>a+b$, do not use this tail and instead use the disjoint smooth near fallback. No global multilevel or $O(N)$ work claim is made.

For every pair require its certified total error $\varepsilon_{TS}\le\tau_{TS}$. Given one successful certificate for every ordered pair, form $\widetilde A_h=(\widetilde A_{TS})$. If $\gamma_h>0$ is a certified lower norm bound satisfying
$$\|c\|_2\le\gamma_h^{-1}\left\|\sum_Tc_T1_T\right\|_{H^{-1/2}(\Gamma)},$$
then the matrix defect is bounded by
$$\delta_h=\gamma_h^{-2}\left(\sum_{T,S}\varepsilon_{TS}^2\right)^{1/2}.$$
Any missing or unverified panel-pair geometry, identity, derivative bound, arithmetic radius or certificate returns **uncertified** and no matrix-defect claim. In particular, the batch-26 Duffy rule alone does not certify arbitrary coincident or edge-adjacent pairs.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, a finite conforming P0 surface mesh, the exact weak single-layer matrix, a positive tolerance for each ordered pair, finite audited pair certificates, and a certified $\gamma_h>0$.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the trace-space and weak-pairing context and supplies the positive weighted Gaussian rules and their error estimates.

[A2] [[def-axiom-of-choice]]: the Axiom of Choice is inherited through the weak-pairing identity in [[lem-bem-panel-pair-duffy-certificates]] and the trace-space context of [[def-bem-calderon-boundary-operators]]. The finite decomposition and matrix-error algebra do not themselves use choice once these continuum inputs are supplied.

[F1] [[lem-bem-panel-pair-duffy-certificates]]: every touching pair has an exact finite $\alpha=0$ reference-triangle identity and computable derivative, fiber and arithmetic error bounds; disjoint pairs have the smooth fallback, and the kernel matrix entry equals the weak P0 pairing.

[F2] [[lem-bem-far-panel-quadrature-residual]]: the positive centroid rule for disjoint panels has the displayed physical-kernel residual; its FMM combination uses charges $v_j/(4\pi)$ and requires $R>a+b$.

[F3] [[cor-duffy-weighted-product-gauss-error]]: a transformed reference-triangle integral with $\alpha<2$ and the declared $C^{2n}$ amplitude has the stated positive-rule derivative error.

[F4] [[thm-three-dimensional-laplace-expansion-error-and-work]]: for the single-cluster evaluator and a target ball satisfying $R>a+b$, the truncation error has the stated geometric tail and the arithmetic count is for one cluster only.

[F5] [[def-bem-calderon-boundary-operators]]: $A_{TS}=\langle1_T,V1_S\rangle_\Gamma$ is the exact weak P0 single-layer matrix entry.

## Proof

1.1 For a standard near certificate, [F1] supplies the exact identity; a custom certificate supplies it as an audited hypothesis. In either case each exponent and transformed amplitude meet [F3], so the positive Duffy rule error is bounded by $E_m$. Add the separately certified nested fiber, node-evaluation and outward arithmetic radii with the triangle inequality; the certificate condition gives $|A_{TS}-\widetilde A_{TS}|\le\sum_m|c_m|(E_m+\rho_m)=\varepsilon_{TS}^{\rm near}\le\tau_{TS}$. [A1, A2, F1, F3, given, algebra]

1.2 For a far certificate, [F2] bounds the difference between the exact entry and the positive centroid sum by $\varepsilon_{TS}^{\rm quad}+\varepsilon_{TS}^{\rm eval}$. Under the strict ball condition, [F4] bounds the point-cluster error uniformly over the target ball. Multiplying by the positive target weights and adding the outward arithmetic radius gives the remaining terms in $\varepsilon_{TS}^{\rm far}$. The total is at most $\tau_{TS}$ by the certificate condition; if $R\le a+b$, no FMM tail is used. [F2, F4, given, algebra]

2.1 Write $E_{TS}=A_{TS}-\widetilde A_{TS}$. For coefficient vectors $c,d$, finite Cauchy–Schwarz gives $|d^TEc|\le\left(\sum_{T,S}|E_{TS}|^2\right)^{1/2}\|c\|_2\|d\|_2$. The certified entry bounds imply $|E_{TS}|\le\varepsilon_{TS}$. The lower norm bound in the Definition gives $\|c\|_2\le\gamma_h^{-1}\|\sum_Sc_S1_S\|_{H^{-1/2}}$ and the corresponding bound for $d$. Substitute both inequalities and take the supremum over unit $H^{-1/2}$ densities to obtain the bilinear operator-defect bound $\delta_h$. If a pair has no successful certificate, steps 1.1–1.2 provide no bound for that entry, so the procedure correctly returns uncertified. [F5, step 1.1, step 1.2, given, algebra] ∎
