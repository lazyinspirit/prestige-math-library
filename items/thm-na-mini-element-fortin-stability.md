---
id: thm-na-mini-element-fortin-stability
kind: theorem
title: "Uniform Fortin stability of the mini element"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    "def-na-mini-element-p1-bubble-p1-spaces",
    "lem-na-scott-zhang-boundary-preserving-p1-interpolant",
    "def-na-fortin-operator",
    "lem-na-fortin-transfers-discrete-infsup",
    "thm-na-continuous-stokes-divergence-infsup",
    "def-countable-choice",
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "thm-matching-continuous-piecewise-polynomials-are-wkp",
    "lem-shape-regular-affine-simplex-scaling",
    "lem-affine-pullback-weak-derivatives-and-scaling",
    "thm-reference-simplex-trace-and-gauss-green",
    "thm-reference-simplex-poincare-wirtinger"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation
        and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2,
        8.5.5, 8.6.1, 8.7.1 and 8.10."
verification:
  precheck: pass
---

## Statement

On the mini-element spaces of [[def-na-mini-element-p1-bubble-p1-spaces]], there is a Fortin operator $\Pi_h:V\to V_h$ preserving $b(v,q_h)$ for every $q_h\in Q_h$, with $\|\Pi_hv\|_V\le C_F\|v\|_V$. The constant depends only on $d$ and the mesh shape-regularity bound, not on $h$. Consequently
$$\beta_h\ge (C_FC_{\rm div}(D))^{-1}.$$

## Facts & Assumptions

**Given:** Countable Choice; a bounded connected Lipschitz polyhedral domain with shape-regular conforming simplices; the continuous Stokes spaces, the face-average interpolant $I_h$, cell bubbles $b_K$, and the continuous inf-sup bound.

[A1] Countable Choice is inherited through the face-average H0 interpolation input. ([[def-countable-choice]])

[F1] $I_h$ maps $H^1_0$ to continuous zero-boundary P1, is H1 stable, and satisfies the local L2 estimate $\|v-I_hv\|_{L^2(K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}$. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]])

[F2] $b(v,q)=-\int_Dq\operatorname{div}v$ and $Q_h$ is continuous piecewise affine with zero mean. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[def-na-mini-element-p1-bubble-p1-spaces]])

[F3] The continuous inf-sup constant is at least $C_{\rm div}(D)^{-1}$, and a Fortin map of norm $C_F$ transfers it to $\beta_h\ge\beta/C_F$. ([[thm-na-continuous-stokes-divergence-infsup]], [[lem-na-fortin-transfers-discrete-infsup]])

[F4] A Fortin operator is a bounded linear map into $V_h$ that preserves $b(v,q_h)$ for every $q_h$. ([[def-na-fortin-operator]])


[F5] A continuous piecewise P1 pressure belongs to $H^1(D)$, with weak gradient equal to its cellwise polynomial gradient. ([[thm-matching-continuous-piecewise-polynomials-are-wkp]])

[F6] Affine scaling transfers the fixed reference-simplex trace and Poincare inequalities to each mesh cell; the scaling constants depend only on $d$ and the shape-regularity bound. ([[lem-shape-regular-affine-simplex-scaling]], [[lem-affine-pullback-weak-derivatives-and-scaling]], [[thm-reference-simplex-trace-and-gauss-green]], [[thm-reference-simplex-poincare-wirtinger]])

## Proof

1.1 For each cell put $c_K=(\int_Kb_K)^{-1}\int_K(v-I_hv)\in\mathbb R^d$, and define $\Pi_hv=I_hv+\sum_Kb_Kc_K$. The denominator is positive because $b_K>0$ in the cell interior. The added functions vanish on cell boundaries, so $\Pi_hv\in V_h$. [A1, F1, F2, construct]

1.2 We track the constants in the construction of [F1]. Shape regularity bounds each vertex solid angle below, so at most $N(d,\sigma)$ cells meet a vertex, where $\sigma$ is the shape-regularity bound. Each vertex star is facet connected: a sufficiently small interior ball or boundary Lipschitz-epigraph neighborhood is path connected, and paths avoiding the codimension-two mesh skeleton cross only facets. Thus cells in $\omega_K$ are linked by uniformly bounded facet chains and have comparable diameters by [F6]. For adjacent cells $T,T'$ with means $m_T,m_{T'}$, cell Poincare and trace give $|m_T-m_{T'}|\le C h_K^{1-d/2}\|\nabla v\|_{L^2(T\cup T')}$. Summing along those chains and choosing $c$ to be one cell mean gives $\|v-c\|_{L^2(\omega_K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}$. The facet dual functions of [F1] have norm at most $Ch_K^{-(d-1)/2}$; the scaled trace inequality therefore gives $|\int_{F_z}\psi_{z,F_z}(v-c)|\le Ch_K^{1-d/2}\|\nabla v\|_{L^2(\omega_K)}$ for each vertex of $K$. Since $I_h$ reproduces constants, the local P1 basis bounds yield $\|\nabla I_hv\|_{L^2(K)}+h_K^{-1}\|v-I_hv\|_{L^2(K)}\le C\|\nabla v\|_{L^2(\omega_K)}$. All these constants and the patch-overlap bound depend only on $d,\sigma$; the domain charts were used only for connectivity. [A1, F1, F6, algebra]

2.1 Put $w=\Pi_hv-v\in H^1_0(D;\mathbb R^d)$. By [F5], $q_h\in H^1(D)$; approximating $w$ in $H^1$ by compactly supported smooth fields and using the weak-derivative definition of $q_h$ gives $b(w,q_h)=\int_Dw\cdot\nabla q_h$. Since $\nabla q_h$ is constant on each cell and step 1.1 gives $\int_Kw=0$, this equals $\sum_K\nabla(q_h|_K)\cdot\int_Kw=0$. Therefore $b(\Pi_hv,q_h)=b(v,q_h)$. [A1, F1, F2, F5, step 1.1]

2.2 Reference scaling in [F6] gives $\int_Kb_K\ge c_d|K|$ and $\|\nabla b_K\|_{L^2(K)}\le C h_K^{d/2-1}$. Thus $\|\nabla(b_Kc_K)\|_{L^2(K)}\le C h_K^{-1}\|v-I_hv\|_{L^2(K)}\le C\|\nabla v\|_{L^2(\omega_K)}$ by step 1.2. Squaring, summing cells and using bounded patch overlap gives a uniform bound for the bubble correction; adding the H1 stability of $I_h$ from step 1.2 proves $\|\Pi_hv\|_V\le C_F\|v\|_V$. [A1, F6, step 1.1, step 1.2]

3.1 The construction is linear in $v$ and has the preservation and norm properties in steps 2.1 and 2.2, so [F3] applies with $\beta\ge C_{\rm div}(D)^{-1}$. It yields $\beta_h\ge(C_FC_{\rm div}(D))^{-1}$ uniformly over the mesh family. [A1, F3, F4, step 2.1, step 2.2] ∎
