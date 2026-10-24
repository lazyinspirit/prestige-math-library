---
id: thm-na-rt0-p0-local-mass-conservation
kind: theorem
title: Exact RT0/P0 element mass balance and normal continuity
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    def-na-neumann-darcy-mixed-problem,
    def-na-simplicial-mesh-rt-bdm-spaces,
    lem-na-rt0-unisolvence-and-global-conformity,
    lem-na-h0div-div-zero-mean,
    lem-na-cell-average-l2-projection,
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
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.1–14.2: RT normal continuity and cellwise
        divergence."
    - title: "Francisco-Javier Sayas, A gentle introduction to the Finite Element Method (2015)"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 9 §3.1, pp. 168–169: exact RT0/P0 cell mass balance."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice, the mesh conventions of [[def-na-simplicial-mesh-rt-bdm-spaces]], and let $(u_h,p_h)\in V_h\times Q_h$ solve the discrete Darcy equations with source $f\in L^2_0(D)$. Then on every cell $K$,
$$\operatorname{div}u_h|_K=|K|^{-1}\int_Kf,\qquad\int_K\operatorname{div}u_h=\int_Kf.$$
The normal flux is single-valued on every interior facet and zero on every boundary facet.

## Facts & Assumptions

**Given:** A source $f\in Q$, a conforming mesh, and a discrete solution $(u_h,p_h)$.

[A1] Countable Choice is inherited through the weak normal-trace and divergence-mean suppliers. ([[def-countable-choice]])

[F1] The discrete second equation is $-\int_Dq_h\operatorname{div}u_h=-\int_Dfq_h$ for every $q_h\in Q_h$. ([[def-na-neumann-darcy-mixed-problem]])

[F2] $\operatorname{div}u_h$ is cellwise constant and has zero mean. ([[def-na-simplicial-mesh-rt-bdm-spaces]], [[lem-na-h0div-div-zero-mean]])

[F3] Cell averaging maps $f$ to a mean-zero piecewise constant and is the $L^2$ projection onto cell constants. ([[lem-na-cell-average-l2-projection]])

[F4] Global RT0 conformity means matching interior normal flux and zero boundary normal flux. ([[lem-na-rt0-unisolvence-and-global-conformity]])

## Proof

1.1 Let $P_0f$ be the cellwise average of $f$. By [F2] and [F3], both $\operatorname{div}u_h$ and $P_0f$ are in $Q_h$. Put $g_h=\operatorname{div}u_h-P_0f\in Q_h$. For every $q_h\in Q_h$, [F1] and the orthogonality property in [F3] give $\int_Dg_hq_h=0$. Taking $q_h=g_h$ yields $\|g_h\|_2^2=0$. [A1, F1, F2, F3, construct, algebra]

2.1 On each cell the equality $\operatorname{div}u_h=P_0f$ says the constant divergence equals the cell average of $f$; multiplying by $|K|$ gives the exact element balance. The field $u_h$ is globally RT0 and in H0(div), so [F4] supplies matching interior normal values and zero boundary normal values. The H(div) conformity result equates the flux with the weak normal trace, hence the asserted normal conditions hold. [F2, F4, step 1.1, algebra] ∎