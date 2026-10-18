---
id: thm-na-mini-element-fortin-stability
kind: theorem
title: "Uniform Fortin stability of the mini element"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: ["def-na-mini-element-p1-bubble-p1-spaces", "lem-na-scott-zhang-boundary-preserving-p1-interpolant", "def-na-fortin-operator", "lem-na-fortin-transfers-discrete-infsup", "thm-na-continuous-stokes-divergence-infsup", "def-countable-choice", "def-na-stokes-zero-mean-pressure-and-velocity-spaces", "thm-reference-simplex-trace-and-gauss-green", "lem-affine-pullback-weak-derivatives-and-scaling"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
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


[F5] On each affine simplex, H1 fields and affine pressures satisfy Green integration by parts with their Sobolev traces, by reference-simplex pullback. ([[thm-reference-simplex-trace-and-gauss-green]], [[lem-affine-pullback-weak-derivatives-and-scaling]])
## Proof

1.1 For each cell put $c_K=(\int_Kb_K)^{-1}\int_K(v-I_hv)\in\mathbb R^d$, and define $\Pi_hv=I_hv+\sum_Kb_Kc_K$. The denominator is positive because $b_K>0$ in the cell interior. The added functions vanish on cell boundaries, so $\Pi_hv\in V_h$. [A1, F1, F2, construct]

2.1 By definition, $\int_K(\Pi_hv-v)=0$ for each cell. For $q_h\in Q_h$, integrate by parts cellwise in $b(\Pi_hv-v,q_h)$. Interior facet terms cancel because both fields and pressure are continuous; boundary terms vanish because $v,I_hv,\Pi_hv$ have zero trace. On each cell $\nabla q_h$ is constant, so the remaining term is $\int_K(\Pi_hv-v)\cdot\nabla q_h=0$. Therefore $b(\Pi_hv,q_h)=b(v,q_h)$. [A1, F1, F2, F5, step 1.1]

2.2 Reference scaling gives $\int_Kb_K\ge c_d|K|$ and $\|\nabla b_K\|_{L^2(K)}\le C h_K^{d/2-1}$. Thus $\|\nabla(b_Kc_K)\|_{L^2(K)}\le C h_K^{-1}\|v-I_hv\|_{L^2(K)}\le C\|\nabla v\|_{L^2(\omega_K)}$ by [F1]. Squaring, summing cells and using bounded patch overlap gives a uniform bound for the bubble correction; adding the H1 stability of $I_h$ proves $\|\Pi_hv\|_V\le C_F\|v\|_V$. [A1, F1, step 1.1]

3.1 The construction is linear in $v$ and has the preservation and norm properties in steps 2.1 and 2.2, so [F3] applies with $\beta\ge C_{\rm div}(D)^{-1}$. It yields $\beta_h\ge(C_FC_{\rm div}(D))^{-1}$ uniformly over the mesh family. [A1, F3, F4, step 2.1, step 2.2] ∎
