---
id: thm-tpfa-flux-energy-convergence-smooth-interface
kind: theorem
title: TPFA flux-energy convergence for smooth face-aligned interfaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps: [def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme, thm-tpfa-green-coercivity-maximum-principle]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §§9.4–9.5, printed pp. 44–55: conservative flux consistency and regular-solution error estimates; Chapter 11 §11.1, printed pp. 78–81, for discontinuous coefficients."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§1.2 Remark 1.3 and §2, PDF pp. 5–10: face-flux consistency, conservation, and TPFA energy."
---

## Statement

Let $\Omega\subset\mathbb R^d$ be a bounded connected polyhedral set and let $(\mathcal T_h)$ be a refining, uniformly regular, boundary-anchored family of TPFA-admissible meshes. Assume $\lambda_K\in[\lambda_*,\lambda^*]$ with $0<\lambda_*\le\lambda^*<\infty$, constant on each cell, and that coefficient jumps occur only across mesh faces. Suppose $u$ is continuous, vanishes on $\partial\Omega$, and is $C^2$ on each cell closure with the uniform family bound
$$ M=\sup_h\max_{K\in\mathcal K_h}\|D^2u\|_{L^\infty(K)}<\infty. $$
For every interior face $F=K|L$ fix an orientation and define its exact outward flux from $K$ by $J_{K,F}=-\int_F\lambda_K\nabla u|_K\cdot n_{K,F}$. On a boundary face define $J_{K,F}$ by the same formula. Assume the exact fluxes satisfy the cell balances $\sum_{F\subset\partial K}J_{K,F}=\int_K f$ and $J_{K,F}=-J_{L,F}$ on every interior face. Let $U_h$ solve the TPFA cell balances with source $f$ and zero boundary values, and let $I_hu$ be the cell-center sample $u(x_K)$ with zero boundary face values. Then, for a constant $C$ depending only on $\Omega$, $\lambda_*,\lambda^*$, and the uniform mesh regularity bounds,
$$ \|U_h-I_hu\|_{E_h}\le C hM,\qquad \left(\sum_{F\in\mathcal F_{\rm int}}\frac{|Q_{K,F}(U_h)-J_{K,F}|^2}{T_F}+\sum_{F\in\mathcal F_{\rm bdy}}\frac{|Q_{K,F}(U_h)-J_{K,F}|^2}{T_{K,F}}\right)^{1/2}\le 2ChM. $$
The second estimate is convergence of the reconstructed numerical face flux in the transmissibility-dual energy norm. No pointwise operator consistency on arbitrary nonorthogonal meshes or error rate for nonsmooth weak solutions is asserted.

## Facts & Assumptions

**Given:** The exact cell and face geometry, a refining uniformly regular orthogonal mesh family, $\lambda_*\le\lambda_K\le\lambda^*$ with mesh-aligned jumps, the piecewise $C^2$ function $u$, the exact face fluxes and their cell balances, and the TPFA scheme.

[F1] [[def-fv-admissible-cell-face-mesh]]: in a uniformly regular family, cell volumes and face measures scale as $h^d$ and $h^{d-1}$, center-to-face distances scale as $h$, and the number of faces per cell is uniformly bounded.

[F2] [[def-tpfa-harmonic-face-scheme]]: $T_F=|F|/(d_{K,F}/\lambda_K+d_{L,F}/\lambda_L)$ on interior faces, $T_{K,F}=|F|\lambda_K/d_{K,F}$ on boundary faces, and $\|v\|_{E_h}^2=\sum_F T_F(\Delta_Fv)^2$.

[F3] [[thm-tpfa-green-coercivity-maximum-principle]]: the TPFA stiffness matrix is symmetric positive definite, and its bilinear form is the face energy in [F2].

[A1] Each cell restriction of $u$ extends $C^2$ to its closure with Hessian norm at most the family-wide bound $M$. The normal flux has matching traces across each interior face, and the exact cell flux balances hold as stated.

## Proof

1.1 For each face orient the exact flux $J_F$ outward from one incident cell, and set $\delta_F=Q_{K,F}(I_hu)-J_F$; on a boundary face set $\delta_F=Q_{K,F}(I_hu)-J_{K,F}$. Let $y_F$ be the intersection of the center-normal line with an interior face and the orthogonal projection point on a boundary face. Taylor's theorem along the normal gives, on $F=K|L$ with $n=n_{K,F}$, $u(x_K)=u(y_F)-d_{K,F}\partial_nu_K(y_F)+r_K,\quad u(x_L)=u(y_F)+d_{L,F}\partial_nu_L(y_F)+r_L,$ where $|r_K|+|r_L|\le C M h^2$. By [A1], $\lambda_K\partial_nu_K(y_F)=\lambda_L\partial_nu_L(y_F)=s_F$. Substitution into the harmonic formula gives $Q_{K,F}(I_hu)=-|F|s_F+T_F(r_K-r_L)$. The face trace varies by at most $M h$ from $y_F$, so $|J_{K,F}+|F|s_F|\le C\lambda^*M|F|h$. Since [F1]–[F2] imply $T_F\le C|F|/h$, we obtain $|\delta_F|\le C M|F|h$. On a boundary face, $u(y_F)=0$ and the one-sided Taylor expansion $u(x_K)=-d_{K,F}\partial_nu_K(y_F)+r_K$ yields the same bound for $\delta_F$. [F1, F2, A1, given, algebra]

2.1 By uniform regularity, every transmissibility satisfies $T_F\ge c|F|/h$. There are at most $N_0$ faces per cell, $|F|\le Ch^{d-1}$, and $|K|\ge ch^d$, so $\#\mathcal K_h\le |\Omega|/(ch^d)$ and $\sum_F|F|\le C h^{-1}$. Step 1.1 therefore gives $\sum_F\frac{\delta_F^2}{T_F}\le C M^2h^3\sum_F|F|\le C M^2h^2.$ Thus the vector of local flux defects has transmissibility-dual norm at most $C hM$. [F1, F2, step 1.1, algebra]

3.1 Let $e=U_h-I_hu$. The exact cell balances in [A1] and the finite-volume balances for $U_h$ imply, for every cell vector $v$, $a_h(e,v)=-\sum_{F\in\mathcal F_{\rm int}}\delta_F(v_K-v_L)-\sum_{F\in\mathcal F_{\rm bdy}}\delta_Fv_K,$ because the two exact interior fluxes are oppositely oriented. Take $v=e$. Weighted Cauchy–Schwarz gives $\|e\|_{E_h}^2\le(\sum_F\delta_F^2/T_F)^{1/2}\|e\|_{E_h}$. If $e=0$ the first estimate is immediate; otherwise divide by $\|e\|_{E_h}$ and use step 2.1 to obtain $\|e\|_{E_h}\le ChM$. The bilinear identity used here is [F3]. [A1, F3, step 2.1, algebra]

4.1 On every face, $Q_{K,F}(U_h)-Q_{K,F}(I_hu)$ equals $T_F(e_K-e_L)$ for an interior face and $T_{K,F}e_K$ for a boundary face. Its transmissibility-dual norm is therefore exactly $\|e\|_{E_h}$. By the triangle inequality, the numerical-flux error norm is at most $\|e\|_{E_h}+(\sum_F\delta_F^2/T_F)^{1/2}\le2ChM$, using steps 2.1 and 3.1. This proves both estimates. [F2, step 2.1, step 3.1, algebra] ∎

