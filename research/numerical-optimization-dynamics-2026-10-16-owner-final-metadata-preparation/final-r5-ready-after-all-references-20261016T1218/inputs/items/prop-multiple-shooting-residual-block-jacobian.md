---
id: prop-multiple-shooting-residual-block-jacobian
kind: proposition
title: "The multiple-shooting Jacobian is bordered block-bidiagonal"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-nonlinear-two-point-bvp-and-boundary-residual, def-certified-ivp-approximation-and-sensitivity-interface, lem-c1-ode-flow-on-common-tube, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pass
---

## Statement

Fix a mesh $a=t_0<\cdots<t_N=b$, $N\ge1$, and an open product domain of segment starts $(s_0,\ldots,s_N)$ on which $B$ and each exact or certified approximate segment endpoint map $\Psi_i:U_i\to\mathbb R^d$ are $C^1$. Here $C^1$ means total differentiability with continuous derivative matrix entries. Define $F$ by rows $F_i=\Psi_i(s_i)-s_{i+1}$ for $0\le i<N$ and $F_N=B(s_0,s_N)$. Its Jacobian block row $i<N$ has $D\Psi_i(s_i)$ in column $i$, $-I_d$ in column $i+1$, and zero in every other column. Its boundary row has $D_1B$ and $D_2B$ in columns $0$ and $N$ and zero elsewhere. When $N=1$, columns $0$ and $N$ are distinct.

## Facts & Assumptions

**Given:** The mesh, open product domain, $C^1$ maps $B,\Psi_i$, and residual $F$.

[F1] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps $g,f$, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

[F2] [[lem-c1-ode-flow-on-common-tube]]: an exact segment endpoint map is $C^1$ when its solutions remain in a common compact convex tube.

[F3] [[def-certified-ivp-approximation-and-sensitivity-interface]]: a certified approximate segment endpoint map is $C^1$ and supplies its own exact derivative.

[F4] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: the exact multiple-shooting rows are the segment endpoint minus next segment start, followed by $B(s_0,s_N)$.

## Proof

1.1 For an interior row $F_i(s_0,\ldots,s_N)=\Psi_i(s_i)-s_{i+1}$, varying only block $s_i$ changes that row by $D\Psi_i(s_i)$, varying only block $s_{i+1}$ changes it by $-I_d$, and varying any other block leaves it unchanged. These are precisely the stated nonzero and zero blocks. [given, F1, F4, algebra]

1.2 For the boundary row $F_N=B(s_0,s_N)$, the chain rule gives derivatives $D_1B$ and $D_2B$ with respect to the first and last blocks; all intermediate blocks are absent from its formula, so their derivatives are zero. The differentiability assertions for exact and approximate segment maps follow from [F2] and [F3]. [given, F1, F2, F3, algebra]

2.1 The residual has $(N+1)d$ scalar rows and $(N+1)d$ scalar variables, so the displayed block matrix is square. [given, step 1.1, step 1.2, algebra] ∎
