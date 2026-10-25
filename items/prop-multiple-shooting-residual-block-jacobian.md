---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/prop-multiple-shooting-residual-block-jacobian.json
  precheck: pass
id: prop-multiple-shooting-residual-block-jacobian
kind: proposition
title: "The multiple-shooting Jacobian is bordered block-bidiagonal"
status: published
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

## Remarks

For $N=3$, the following block diagram displays $DF$ with columns ordered by $s_0,s_1,s_2,s_3$ and rows ordered by $F_0,F_1,F_2,F_3$. Here $A_i=D\Psi_i(s_i)$, $B_0=D_1B(s_0,s_3)$ and $B_3=D_2B(s_0,s_3)$; every entry is a $d\times d$ block. Outlined entries are the blocks allowed to be nonzero, not an assertion that each is nonzero. The final row couples only the two endpoint states.

```tikz
\begin{tikzpicture}[x=1.7cm,y=1.05cm]
\node at (0,0.8) {$s_0$};
\node at (1,0.8) {$s_1$};
\node at (2,0.8) {$s_2$};
\node at (3,0.8) {$s_3$};
\node at (-0.9,0) {$F_0$};
\node at (-0.9,-1) {$F_1$};
\node at (-0.9,-2) {$F_2$};
\node at (-0.9,-3) {$F_3$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (0,0) {$A_0$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (1,0) {$-I_d$};
\node at (2,0) {$0$};
\node at (3,0) {$0$};
\node at (0,-1) {$0$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (1,-1) {$A_1$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (2,-1) {$-I_d$};
\node at (3,-1) {$0$};
\node at (0,-2) {$0$};
\node at (1,-2) {$0$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (2,-2) {$A_2$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (3,-2) {$-I_d$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (0,-3) {$B_0$};
\node at (1,-3) {$0$};
\node at (2,-3) {$0$};
\node[draw,rounded corners,minimum width=1.25cm,minimum height=0.65cm] at (3,-3) {$B_3$};
\draw[thick] (-0.48,0.4) -- (-0.58,0.4) -- (-0.58,-3.4) -- (-0.48,-3.4);
\draw[thick] (3.48,0.4) -- (3.58,0.4) -- (3.58,-3.4) -- (3.48,-3.4);
\end{tikzpicture}
```

This is an illustration of the block formulas proved above; the proof does not rely on the diagram.
