---
id: ex-na-two-triangle-hybrid-static-condensation
kind: example
title: Two-triangle hybrid RT0 local elimination
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 12
deps: [def-na-hybridized-rt0-darcy-system, thm-na-rt0-hybridization-equivalence-static-condensation, thm-na-rt0-p0-local-mass-conservation, def-na-simplicial-mesh-rt-bdm-spaces, lem-na-rt0-unisolvence-and-global-conformity, lem-affine-simplex-gauss-green-formula, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Francis J. Sayas, An Introduction to the Mathematical Analysis of the Finite Element Method"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 9, pp. 163–172: hybrid Darcy local equations, facet multipliers and elimination."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 7 §7.2: hybridization and static condensation."
---

## Statement

Assume Countable Choice.

Split the unit square by its diagonal into $K_1=\{0<y<x<1\}$ and $K_2=\{0<x<y<1\}$. For unit permeability and $f=1$ on $K_1$, $f=-1$ on $K_2$, the hybrid solution has
$$u_1=\tfrac12\theta_1,\quad u_2=-\tfrac12\theta_2,\quad p_1=\tfrac1{12},\quad p_2=-\tfrac1{12},\quad\lambda=0,$$
where $\theta_1(x,y)=(x-1,y)$ and $\theta_2(x,y)=(x,y-1)$. The local elimination equations reduce to $t_K/6-p_K+\lambda=0$, $t_1=1/2$, $t_2=-1/2$, and $t_1+t_2=0$; changing $\lambda$ shifts both pressures by the same constant and is precisely the gauge.

## Facts & Assumptions

**Given:** The two-triangle mesh, unit permeability, and source values $+1,-1$ on equal-area cells.

[A1] Countable Choice is inherited from the hybrid equivalence and local flux suppliers. ([[def-countable-choice]])

[F1] The local hybrid equations use the cell energy, pressure-divergence term, facet multiplier, cell balance and matching-flux equations. ([[def-na-hybridized-rt0-darcy-system]])

[F2] Cell balances and the constant pressure gauge have the meanings stated in the hybridization theorem. ([[thm-na-rt0-hybridization-equivalence-static-condensation]])

[F3] Gauss–Green gives the integral of divergence as total outward facet flux on each triangle. ([[lem-affine-simplex-gauss-green-formula]])

[F4] RT0 facet fluxes are unisolvent; imposing zero flux on two facets leaves a one-dimensional local flux space. ([[lem-na-rt0-unisolvence-and-global-conformity]])

## Proof

1.1 Each cell has area $1/2$. The field $\theta_1=(x-1,y)$ has zero normal component on $x=1$ and $y=0$, and unit integrated outward flux on the diagonal from $K_1$; $\theta_2=(x,y-1)$ has zero normal component on $x=0$ and $y=1$, and unit integrated outward flux on the diagonal from $K_2$. Their divergences are both $2$, so $\int_{K_i}\operatorname{div}\theta_i=1$ by [F3]. The two zero-boundary conditions and the single free facet degree of freedom make each $\theta_i$ a basis of its local space by [F4]. Direct integration gives $\int_{K_1}|\theta_1|^2=\int_0^1\int_0^x((x-1)^2+y^2)\,dy\,dx=\tfrac16,$ and reflection symmetry gives $\int_{K_2}|\theta_2|^2=1/6$. [given, F3, F4, algebra]

2.1 Write $u_i=t_i\theta_i$. The cell balances in [F1] give $t_1=\int_{K_1}f=1/2$ and $t_2=\int_{K_2}f=-1/2$. For a local test $v_i=s\theta_i$, its integrated divergence is $s$ and its interior outward flux is $s$. The first hybrid equation is therefore $t_i s/6-p_i s+\lambda s=0$ for every real $s$, equivalently $t_i/6-p_i+\lambda=0$. The jump equation is $t_1+t_2=0$, which the balance values satisfy. [F1, F2, step 1.1, algebra]

3.1 Solving the local equations gives $p_1=1/12+\lambda$ and $p_2=-1/12+\lambda$. Since the cells have equal area, their global mean is $\lambda$; choose the mean-zero gauge $\lambda=0$ to obtain the stated pressures. After local elimination the single skeleton equation is $t_1+t_2=0$, independent of $\lambda$, so its one-dimensional nullspace consists exactly of common constant shifts. This is the constant gauge described in [F2]. [A1, F2, step 2.1, algebra] ∎
## Mesh diagram

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0); \coordinate (B) at (1,0);
  \coordinate (C) at (1,1); \coordinate (D) at (0,1);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[thick] (A)--(C);
  \node at (.72,.25) {$K_1$, $f=1$};
  \node at (.25,.72) {$K_2$, $f=-1$};
  \node[above right] at (.52,.52) {$\lambda$};
  \draw[->,blue] (.72,.38)--(.56,.22) node[below right] {$u_1$};
  \draw[->,red] (.28,.62)--(.44,.78) node[above left] {$u_2$};
\end{tikzpicture}
```

The shared diagonal is the only interior facet. Flux arrows are schematic; the proof computes their exact integrated outward values as $1/2$ and $-1/2$.
