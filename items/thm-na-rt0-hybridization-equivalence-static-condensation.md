---
id: thm-na-rt0-hybridization-equivalence-static-condensation
kind: theorem
title: Hybridization, static condensation, and pressure gauge
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps:
  [
    def-na-hybridized-rt0-darcy-system,
    def-na-neumann-darcy-mixed-problem,
    thm-na-rt0-p0-darcy-error-estimate,
    thm-na-rt0-p0-local-mass-conservation,
    def-na-simplicial-mesh-rt-bdm-spaces,
    lem-na-rt0-unisolvence-and-global-conformity,
    lem-na-h0div-div-zero-mean,
    lem-affine-simplex-gauss-green-formula,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 7 §7.2: hybridization, multiplier
        formulation and static condensation."
    - title: "Francisco-Javier Sayas, A gentle introduction to the Finite Element Method (2015)"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 10 §§1.1–1.2, pp. 174–180: hybridized implementation and hybridized form."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the source-only Darcy system and hybrid equations of [[def-na-hybridized-rt0-darcy-system]] on a facet-connected mesh. The hybrid solutions modulo the common pressure shift $(p,\lambda)\mapsto(p+c,\lambda+c)$ are in one-to-one correspondence with the conforming RT0/P0 Darcy solution. If the mesh has at least two cells, every local flux-pressure saddle block is invertible; eliminating these local variables gives a linear system on the interior-facet multipliers whose nullspace is exactly the one-dimensional constant gauge. For one cell, the conforming flux and mean-zero pressure spaces are zero and the hybrid pressure is entirely gauge.

## Facts & Assumptions

**Given:** A source $f\in L^2_0(D)$, a facet-connected conforming mesh, fixed positive permeability bounds, and the hybrid spaces and equations in [[def-na-hybridized-rt0-darcy-system]].

[A1] Countable Choice is inherited through the discrete mixed solvability and normal-trace interfaces. ([[def-countable-choice]])

[F1] The hybrid method has broken RT0 cell fluxes with zero exterior normal flux, cell pressures, facet multipliers, local equations, cell balances, and flux-jump constraints; shifting all pressures and multipliers by the same constant is a gauge. ([[def-na-hybridized-rt0-darcy-system]])

[F2] Piecewise RT0 fields with matching oriented facet fluxes and zero boundary flux lie in $V_h$; each facet flux is a unisolvent local degree of freedom. ([[lem-na-rt0-unisolvence-and-global-conformity]])

[F3] The conforming RT0/P0 source problem has a unique solution for the mean-zero pressure. ([[thm-na-rt0-p0-darcy-error-estimate]])

[F4] Every conforming solution satisfies the cell balances $\int_K\operatorname{div}u_h=\int_Kf$. ([[thm-na-rt0-p0-local-mass-conservation]])

[F5] On each cell, a local RT0 basis function has unit outward flux on one selected facet and zero flux on all other facets. ([[lem-na-rt0-unisolvence-and-global-conformity]])

[F6] The local quadratic form $a_K(v,v)=\int_KK^{-1}v\cdot v$ is positive definite with $a_K(v,v)\ge\kappa_{\max}^{-1}\|v\|_{L^2(K)}^2$. ([[def-na-neumann-darcy-mixed-problem]])

[F7] Every no-flow H(div) field has zero total divergence integral. ([[lem-na-h0div-div-zero-mean]])

## Proof

1.1 Start with a hybrid solution. Its jump constraints and zero boundary flux, together with [F2], make $u_h$ a member of $V_h$. Summing the cell balances against any cellwise constant mean-zero $q_h$ gives the discrete second mixed equation. [F1, F2, given, algebra]

1.2 Conversely let $(u_h,p_h)$ be the unique conforming solution. Its cell balances hold by [F4]. Let $W_h$ be the broken flux space and define the jump map $J:W_h\to\mathbb R^{\mathcal F_h^i}$ by $J_F(v)=\int_F(v_{K^+}\cdot n_{K^+}+v_{K^-}\cdot n_{K^-})$. Its kernel consists of fields with matching interior fluxes, hence lies in $V_h$ by [F2]. Define $\ell(v)=\sum_K[a_K(u_h,v_K)-\int_Kp_h\operatorname{div}v_K]$. The conforming first equation gives $\ell=0$ on $\ker J$. [F1, F2, F3, F4, construct]

1.3 Suppose there are at least two cells. Every cell is incident to an interior facet because the dual graph is connected and has more than one vertex. The local space $W_K$ therefore contains a basis flux with nonzero total outward flux, so $D_K:W_K\to\mathbb R$, $D_Kv=\int_K\operatorname{div}v$, is onto. The homogeneous local saddle block has equations $a_K(u,v)-pD_Kv=0$ for all $v\in W_K$ and $D_Ku=0$. Taking $v=u$ gives $a_K(u,u)=0$, so [F6] gives $u=0$; then surjectivity of $D_K$ forces $p=0$. The square finite-dimensional block is injective and hence invertible. [F5, F6, algebra]

2.1 Let $c=|D|^{-1}\sum_K|K|p_K$ and set $\bar p_K=p_K-c$. Then $\bar p\in Q_h$. Sum the local first equations against a conforming test $v_h\in V_h$. The facet-multiplier terms cancel by normal continuity; the constant pressure term contributes $-c\int_D\operatorname{div}v_h=0$ by [F7]. The remaining equation is $a(u_h,v_h)-\int_D\bar p\operatorname{div}v_h=0$. Thus $(u_h,\bar p)$ is the conforming mixed solution, which is unique by [F3]. [A1, F1, F2, F3, F7, step 1.1, algebra]

2.2 The map $J$ is onto: for each interior facet $F$, use [F5] on one adjacent cell with zero flux on its other facets and zero field on all other cells; its image is the coordinate vector for $F$. Since $\ell$ vanishes on $\ker J$, the formula $\mu(Jv):=\ell(v)$ is well-defined and linear on $\mathbb R^{\mathcal F_h^i}$. Write $\mu(y)=\sum_F\mu_Fy_F$ and choose $\lambda_F=-\mu_F$. Then $\ell(v)+\sum_F\lambda_FJ_F(v)=0$ for all broken $v$. Taking tests supported in one cell yields each local hybrid equation; balances were already shown, so $(u_h,p_h,\lambda)$ is hybrid. This proves the correspondence before quotienting the pressure gauge. [F1, F3, F5, step 1.2, construct, algebra]

3.1 Invert the local blocks to express each $(u_K,p_K)$ as an affine function of the multiplier vector $\lambda$, with source-dependent right sides. Substitution into $J_F(u)=0$ gives a linear system solely on the finitely many interior-facet multipliers; this is static condensation. Existence and correspondence follow from steps 1.1–2.2. For its homogeneous nullspace, any multiplier vector yields a homogeneous hybrid solution, hence by step 2.1 a conforming solution with zero source. Uniqueness [F3] forces $u=0$ and $p_K=c$ for one global constant. The local equations then read $\sum_{F\subset\partial K,\ F\mathrm{interior}}(\lambda_F-c)\int_Fv_K\cdot n_K=0$ for all $v_K\in W_K$, since Gauss–Green and the zero physical-boundary flux give $D_Kv_K=\sum_{F\mathrm{interior}}\int_Fv_K\cdot n_K$. Using the independent facet basis [F5] gives $\lambda_F=c$ on every interior facet. Conversely a common constant vector is a null vector by the gauge identity in [F1]. Thus the kernel is exactly the constant gauge. [A1, F1, F3, F5, step 1.1, step 2.1, step 2.2, step 1.3, algebra]

4.1 For one cell there are no interior multipliers. All its facets are physical boundary facets, so zero boundary flux and local unisolvence [F2] force $W_K=\{0\}$; also $Q_h=\{0\}$. The hybrid cell pressure is arbitrary, but every two such values differ by the common gauge, so the quotient contains one solution, corresponding to the zero conforming pair. [F1, F2, F3, algebra, cases] ∎