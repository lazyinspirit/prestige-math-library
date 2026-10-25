---
id: lem-na-rt0-p0-kernel-is-divergencefree
kind: lemma
title: The RT0/P0 discrete kernel is exactly divergence-free
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-simplicial-mesh-rt-bdm-spaces,
    def-na-h0div-space,
    lem-na-h0div-div-zero-mean,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.1–14.2: H(div)-conforming RT fields and
        piecewise-constant divergence."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 7: stable RT0/P0 mixed pairs and divergence
        constraints."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the mesh conventions of [[def-na-simplicial-mesh-rt-bdm-spaces]]. With $V_h=\operatorname{RT}_0(\mathcal T_h)\cap H_0(\operatorname{div};D)$, $Q_h=\mathbb P_0(\mathcal T_h)\cap L^2_0(D)$ and $b(v_h,q_h)=-\int_Dq_h\operatorname{div}v_h$, the discrete kernel
$$Z_h:=\{v_h\in V_h:b(v_h,q_h)=0\text{ for every }q_h\in Q_h\}$$
is exactly $\{v_h\in V_h:\operatorname{div}v_h=0\}$.

## Facts & Assumptions

**Given:** A conforming mesh, the spaces $V_h,Q_h$, and $v_h\in V_h$.

[A1] Countable Choice is inherited from the zero-normal trace and Sobolev interfaces. ([[def-countable-choice]])

[F1] The divergence of an H(div) field with zero normal trace has zero integral. ([[lem-na-h0div-div-zero-mean]])

[F2] By definition, $V_h$ consists of global H(div) fields whose cell restrictions are RT0; their cellwise divergence is constant, and membership in $V_h$ includes zero normal trace. ([[def-na-simplicial-mesh-rt-bdm-spaces]], [[def-na-h0div-space]])

## Proof

1.1 By [F2], $\operatorname{div}v_h$ is cellwise constant; by [F1], its global mean is zero. Thus $\operatorname{div}v_h\in Q_h$. [A1, given, F1, F2]

2.1 If $v_h\in Z_h$, test its defining orthogonality with the admissible choice $q_h=\operatorname{div}v_h$ from step 1.1. Then $0=b(v_h,q_h)=-\|\operatorname{div}v_h\|_{L^2(D)}^2$, so its divergence vanishes in $L^2$. Conversely, if $\operatorname{div}v_h=0$, the defining integral $b(v_h,q_h)$ is zero for every $q_h\in Q_h$. This proves the equality, including the case $Q_h=\{0\}$. [given, step 1.1, algebra, cases] ∎