---
id: thm-na-rt0-p0-bounded-divergence-lift-and-infsup
kind: theorem
title: Uniform RT0/P0 divergence lift and inf-sup bound
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  [
    def-na-simplicial-mesh-rt-bdm-spaces,
    lem-na-rt0-h1-interpolation-bounded-and-commuting,
    thm-na-bounded-lipschitz-domain-divergence-right-inverse,
    lem-na-homogeneous-dirichlet-poincare,
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
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local
        interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §16.1: divergence-commuting RT interpolation and
        stable facet moments."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 5: stable right inverses, discrete inf-sup
        and mixed approximation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice, a bounded connected Lipschitz polyhedral $D$ in dimension two or three, and a shape-regular conforming mesh. Let $C_I$ be the mesh-independent constant in the RT0 interpolation estimate and let $L$ be a coordinate-slab width for $D$. If $B_D$ is the actual right inverse of [[thm-na-bounded-lipschitz-domain-divergence-right-inverse]], define
$$S_hq_h:=I_hB_Dq_h,\qquad C_R:=C_I C_{\rm div}(L+\operatorname{diam}D).$$
Then $S_h:Q_h\to V_h$ is a linear right inverse of divergence and $\|S_hq_h\|_{L^2(D)}\le C_R\|q_h\|_{L^2(D)}$. Consequently $\|S_hq_h\|_{H(\operatorname{div})}\le\sqrt{1+C_R^2}\|q_h\|_2$. When $Q_h\ne\{0\}$, the RT0/P0 inf-sup constant satisfies $\beta_h\ge(1+C_R^2)^{-1/2}$ uniformly in mesh size.

## Facts & Assumptions

**Given:** Countable Choice, $D$, a shape-regular mesh, and $q_h\in Q_h$.

[A1] Countable Choice is inherited through the continuous divergence-lift and interpolation suppliers. ([[def-countable-choice]])

[F1] $B_Dq_h\in H^1_0(D;\mathbb R^d)$, $\operatorname{div}B_Dq_h=q_h$, and $\|\nabla B_Dq_h\|_2\le C_{\rm div}\|q_h\|_2$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F2] $I_h$ maps H1 fields to RT0, commutes with divergence cell averages, is zero-normal on H1_0 inputs, and obeys $\|I_hw\|_2\le C_I(\|w\|_2+h\|\nabla w\|_2)$. ([[lem-na-rt0-h1-interpolation-bounded-and-commuting]])

[F3] $\|B_Dq_h\|_2\le L\|\nabla B_Dq_h\|_2$ for the chosen slab width. ([[lem-na-homogeneous-dirichlet-poincare]])

## Proof

1.1 Since $q_h$ is cellwise constant, its cell average is itself. By [F1] and the commuting identity [F2], $\operatorname{div}S_hq_h=P_0(\operatorname{div}B_Dq_h)=q_h$. The input $B_Dq_h$ is in H1_0, so [F2] gives $S_hq_h\in V_h$. Linearity follows from the linear divergence lift and interpolation. [A1, F1, F2, construct]

2.1 The stability estimate [F2] and [F1], [F3] imply $\|S_hq_h\|_2\le C_I C_{\rm div}(L+h)\|q_h\|_2\le C_R\|q_h\|_2,$ because $h\le\operatorname{diam}D$. The right-inverse identity from step 1.1 then yields $\|S_hq_h\|_{H(\operatorname{div})}^2=\|S_hq_h\|_2^2+\|q_h\|_2^2\le(1+C_R^2)\|q_h\|_2^2$. [F1, F2, F3, step 1.1, algebra]

3.1 For nonzero $q_h\in Q_h$, take $v_h=-S_hq_h$. Then $b(v_h,q_h)=\|q_h\|_2^2$ and $\|v_h\|_{H(\operatorname{div})}\le\sqrt{1+C_R^2}\|q_h\|_2$ by step 2.1. This admissible test gives the lower bound on the supremum for each $q_h$; taking the infimum over nonzero $q_h$ proves the stated $\beta_h$ bound. The constants depend on $D$, its chosen continuous lift, and the shape bound, but not on $h$. [F2, step 1.1, step 2.1, algebra] ∎