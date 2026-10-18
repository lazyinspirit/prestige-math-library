---
id: cex-signorini-nodal-contact-feasibility-needs-convex-obstacle
kind: counterexample
title: "Nodal feasibility can miss a nonconvex obstacle between vertices"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-signorini-nodal-p1-contact-scheme, def-signorini-contact-variational-inequality, def-convex-concave-and-midpoint-convex-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§3, printed pp. 966–970: nodal obstacle constraints and the need to control the between-node obstacle comparison."
---

## Statement

Let $\Omega=(0,1)^2$, $\Gamma_D=\{0\}\times[1/4,3/4]$, $\Gamma_C=\{1\}\times[1/4,3/4]$, and $n=(1,0)$. Use the grid $x\in\{0,1/2,1\}$, $y\in\{0,1/4,3/4,1\}$ and split each rectangular cell by a diagonal. This is a matching triangular mesh on which both segments are single boundary edges. Parameterize $\Gamma_C$ by normalized arclength $s=2(y-1/4)\in[0,1]$, set $\psi(s)=-1+4s(1-s)$, and let $v_h(x,y)=(-x,0)$. The obstacle is continuous, nonpositive and concave, and $v_h$ satisfies both endpoint nodal inequalities, but $v_h\notin K$ because its contact gap is negative at the midpoint.

## Facts & Assumptions

**Given:** The nodal scheme [[def-signorini-nodal-p1-contact-scheme]] except that its convexity hypothesis on $\psi$ is removed for this counterexample.

[F1] The nodal constraints require $v_h(a)\cdot n\ge I_h\psi(a)$ at each contact vertex; the continuum feasible set requires $T_Cv_h\cdot n\ge\psi$ almost everywhere on the whole contact segment. ([[def-signorini-nodal-p1-contact-scheme]], [[def-signorini-contact-variational-inequality]])

[F2] A real function is concave on an interval when its negative is convex there, with convexity defined by the chord inequality. ([[def-convex-concave-and-midpoint-convex-functions]])

## Proof

1.1 The polynomial $\psi(s)=-1+4s(1-s)$ has endpoint values $-1$ and midpoint value $0$, and $\psi(s)=-(2s-1)^2$ shows its maximum is $0$. For $s_0,s_1\in[0,1]$ and $t\in[0,1]$, direct expansion gives $\psi((1-t)s_0+ts_1)-[(1-t)\psi(s_0)+t\psi(s_1)]=4t(1-t)(s_1-s_0)^2\ge0$, with strict inequality when $0<t<1$ and $s_0\ne s_1$. Thus [F2] says $\psi$ is strictly concave, not convex, and the convex-obstacle premise is absent. [F1, F2, given, algebra]

2.1 The vector field $v_h(x,y)=(-x,0)$ is affine on each triangle and is zero on $\Gamma_D$, hence belongs to $V_h$. On the two contact vertices its normal value is $-1$, equal to the endpoint obstacle values, so both nodal inequalities hold. Along all of $\Gamma_C$, $v_h\cdot n=-1$, while at $s=1/2$ the obstacle equals $0$; continuity gives an interval around that midpoint on which $-1<\psi(s)$. Therefore the continuum contact inequality fails on a set of positive arclength and $v_h\notin K$. [F1, given, algebra] ∎
