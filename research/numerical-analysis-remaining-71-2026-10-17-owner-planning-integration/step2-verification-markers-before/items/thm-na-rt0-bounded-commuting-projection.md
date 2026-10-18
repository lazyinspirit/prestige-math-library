---
id: thm-na-rt0-bounded-commuting-projection
kind: theorem
title: Bounded commuting projection onto the zero-normal RT0 space
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps: [def-na-simplicial-mesh-rt-bdm-spaces, def-na-h0div-space, lem-na-h0div-div-zero-mean, lem-na-cell-average-l2-projection, thm-na-rt0-p0-bounded-divergence-lift-and-infsup, lem-na-rt0-p0-kernel-is-divergencefree, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §§16.1–16.2: bounded commuting projections and the limits of canonical facet interpolation."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.3: commuting projections for H(div)-conforming spaces."
---

## Statement

Assume Countable Choice and a shape-regular mesh. Let $P_0$ be the cellwise $L^2$-orthogonal projection onto piecewise constants, let $S_h:Q_h\to V_h$ be the stable right inverse above, and put $Z_h=\{z_h\in V_h:\operatorname{div}z_h=0\}$. There is a linear projection $\Pi_h:H_0(\operatorname{div};D)\to V_h$ such that
$$\operatorname{div}\Pi_hv=P_0\operatorname{div}v,\qquad \|\Pi_hv\|_{H(\operatorname{div})}\le C\|v\|_{H(\operatorname{div})},$$
where $C$ depends on the domain and mesh shape bound, not mesh size. The construction uses the finite-dimensional $L^2$-orthogonal projection onto $Z_h$ and never applies facet moments to rough H(div)-only fields.

## Facts & Assumptions

**Given:** Countable Choice, a shape-regular mesh, and $v\in H_0(\operatorname{div};D)$.

[A1] Countable Choice is inherited through the H(div) Hilbert and finite-dimensional projection interfaces. ([[def-countable-choice]])

[F1] $\operatorname{div}v$ has zero mean, so $q_h:=P_0\operatorname{div}v$ belongs to $Q_h$; $P_0$ is an $L^2$ contraction and preserves the integral. ([[lem-na-h0div-div-zero-mean]], [[lem-na-cell-average-l2-projection]])

[F2] The right inverse obeys $\operatorname{div}S_hq_h=q_h$, $\|S_hq_h\|_2\le C_R\|q_h\|_2$, and $\|S_hq_h\|_{H(\operatorname{div})}\le C_S\|q_h\|_2$, where $C_S=\sqrt{1+C_R^2}$. ([[thm-na-rt0-p0-bounded-divergence-lift-and-infsup]])

[F3] $Z_h$ is a finite-dimensional subspace of real $L^2$ and hence has an $L^2$-orthogonal projection of norm at most one. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F4] The divergencefree members of $V_h$ are exactly the discrete kernel $Z_h$. ([[lem-na-rt0-p0-kernel-is-divergencefree]])

## Proof

1.1 Define $q_h=P_0\operatorname{div}v$, $r=v-S_hq_h$, and let $P_{Z_h}$ be the orthogonal projection from [F3]. Set $\Pi_hv:=S_hq_h+P_{Z_h}r.$ Both terms are in $V_h$, and the second lies in $Z_h$. Thus [F2] and [F4] give $\operatorname{div}\Pi_hv=q_h=P_0\operatorname{div}v$. The cell-average map, $S_h$, and the orthogonal projection are linear, so $\Pi_h$ is linear. [A1, F1, F2, F3, F4, construct, algebra]

2.1 If $v_h\in V_h$, then $\operatorname{div}v_h$ is cellwise constant, so $P_0\operatorname{div}v_h=\operatorname{div}v_h$. Consequently $v_h-S_h(\operatorname{div}v_h)\in V_h$ has zero divergence and lies in $Z_h$ by [F4]. Its orthogonal projection is itself; substituting in the formula of step 1.1 gives $\Pi_hv_h=v_h$. Hence $\Pi_h$ is a projection. [F2, F3, F4, step 1.1, algebra]

3.1 Let $C_S=\sqrt{1+C_R^2}$. Since $\|q_h\|_2\le\|\operatorname{div}v\|_2$, [F2] gives $\|S_hq_h\|_2\le C_R\|q_h\|_2$, hence $\|r\|_2\le\|v\|_2+C_R\|q_h\|_2$. Also $\|P_{Z_h}r\|_2\le\|r\|_2$ and its divergence is zero. Therefore [F2] gives $\|\Pi_hv\|_{H(\operatorname{div})}\le C_S\|q_h\|_2+\|r\|_2\le C_S\|q_h\|_2+\|v\|_2+C_R\|q_h\|_2\le(1+C_S+C_R)\|v\|_{H(\operatorname{div})}.$ This bound is uniform in mesh size. The formula uses only the $L^2$ divergence, the discrete right inverse, and a finite-dimensional $L^2$ projection, so no facet trace of $v$ is used. [F1, F2, F3, step 1.1, algebra] ∎