---
id: ex-na-primal-p1-flux-is-not-locally-conservative
kind: example
title: A continuous P1 pressure gives a nonconservative primal flux
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-hdiv-space, def-na-simplicial-mesh-rt-bdm-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.1–14.2: H(div) requires matching normal components across facets."
    - title: "Francis J. Sayas, An Introduction to the Mathematical Analysis of the Finite Element Method"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 9, pp. 152–156: primal pressure gradients versus H(div) flux conformity."
---

## Statement

Assume Countable Choice.

On the unit square split along the diagonal from $(0,0)$ to $(1,1)$, the continuous piecewise-affine pressure with nodal values $0,0,1,0$ at $(0,0),(1,0),(1,1),(0,1)$ has negative gradient $q=(0,-1)$ below the diagonal and $q=(-1,0)$ above it. Each cellwise divergence is zero, but the normal flux jumps by magnitude $\sqrt2$ across the diagonal; hence this piecewise field is not in $H(\operatorname{div};D)$ and does not have a locally conservative global flux.

## Facts & Assumptions

**Given:** The unit square mesh and the nodal data stated above; all vector fields and distributional pairings are real.

[A1] Countable Choice is inherited from the real H(div) definition. ([[def-countable-choice]])

[F1] H(div) consists of $L^2$ vector fields whose distributional divergence is an $L^2$ function. ([[def-na-hdiv-space]])

[F2] Cauchy–Schwarz bounds the pairing of any hypothetical $L^2$ divergence with a test function. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 Let $K_1=\{0<y<x<1\}$ and $K_2=\{0<x<y<1\}$. The affine formulas $p_1(x,y)=y$ and $p_2(x,y)=x$ agree on $x=y$ and attain the four stated vertex values, so they define a continuous piecewise-P1 function. Their negative gradients are $q_1=(0,-1)$ and $q_2=(-1,0)$, each with classical divergence zero. With fixed diagonal normal $n=(1,-1)/\sqrt2$, $q_1\cdot n=1/\sqrt2$ and $q_2\cdot n=-1/\sqrt2$, so the jump magnitude is $\sqrt2$. [given, algebra]

2.1 For $\phi\in C_c^\infty(D)$, integration by parts on the two triangles shows that the distributional divergence of the piecewise field is the nonzero line measure on the diagonal with density $q_1\cdot n-q_2\cdot n=\sqrt2$ in this orientation (the distributional pairing is the negative of the summed outward boundary flux). To see it cannot be an $L^2$ function, choose a nonnegative smooth $\psi$ supported in the open diagonal with positive line integral and a smooth transverse cutoff $\eta$ with $\eta(0)=1$; set $\phi_\varepsilon(y,t)=\psi(y)\eta(t/\varepsilon)$ in tubular coordinates, extended by zero. The surface pairing is the fixed nonzero number $\sqrt2\int\psi$, whereas $\|\phi_\varepsilon\|_{L^2(D)}=O(\varepsilon^{1/2})$. If the distribution were represented by $g\in L^2(D)$, [F2] would give $|\int g\phi_\varepsilon|\le\|g\|_2\|\phi_\varepsilon\|_2\to0$, a contradiction. By [F1] the field is not in H(div). [A1, F1, F2, step 1.1, algebra, contradiction] ∎
## Mesh diagram

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0); \coordinate (B) at (1,0);
  \coordinate (C) at (1,1); \coordinate (D) at (0,1);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[thick] (A)--(C);
  \node at (.72,.25) {$K_1$}; \node at (.25,.72) {$K_2$};
  \draw[->,blue] (.62,.38)--(.62,.23) node[right] {$q_1=(0,-1)$};
  \draw[->,red] (.38,.62)--(.23,.62) node[above] {$q_2=(-1,0)$};
  \draw[->,densely dashed] (.46,.54)--(.57,.43) node[above right] {$n=(1,-1)/\sqrt2$};
\end{tikzpicture}
```

The square coordinates are the unit-square vertices, and the diagonal is the shared facet. The fixed normal points from $K_2$ to $K_1$; arrow lengths are schematic, while the proof gives the exact normal components and their jump.
