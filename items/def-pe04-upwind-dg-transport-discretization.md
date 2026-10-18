---
id: def-pe04-upwind-dg-transport-discretization
kind: definition
title: Upwind discontinuous Galerkin discretization of constant transport
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.4, printed pp. 161–164; §4.2, printed pp. 201–203: elementwise weak form and upwind face flux."
    - title: "Bernardo Cockburn and Chi-Wang Shu, Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems, Journal of Scientific Computing 16 (2001)"
      url: "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
      locator: "§§2.1 and 3.1, printed pp. 184–186 and 201–203: weak DG form, traces, and multidimensional flux convention."
---

## Definition

Let $d\ge1$, let $\beta\in\mathbb R^d$ be constant, and consider $u_t+\nabla\cdot(\beta u)=0$ on a fixed domain. For $d=1$, use [[def-pe04-one-dimensional-interval-mesh-and-broken-polynomials]]. For $d\ge2$, use a finite matching affine simplicial mesh $\mathcal T_h$ and its broken space $V_h^{\mathrm{br}}=\prod_{K\in\mathcal T_h}\mathbb P_p(K)$ from [[def-matching-affine-simplicial-meshes]] and [[def-broken-and-conforming-polynomial-spaces]]. On each cell $K$, let $u_h|_K\in\mathbb P_p(K)$, with $p\ge0$.

In this discretization, a cell face means a facet of dimension $d-1$ when $d\ge2$, and an endpoint when $d=1$; all face sums below use only these faces, with counting measure at endpoints. For each cell face $F\subset\partial K$, let $n_{K,F}$ be the outward unit normal, $b_{K,F}=\beta\cdot n_{K,F}$, and $u_K$ the trace of $u_h|_K$. On an interior face with neighbor $K'$, define the upwind trace by $\widehat u_{K,F}=u_K$ when $b_{K,F}>0$ and $\widehat u_{K,F}=u_{K'}$ when $b_{K,F}<0$; either trace may be used when $b_{K,F}=0$. On a physical boundary face, use the prescribed inflow datum $g$ when $b_{K,F}<0$ and $u_K$ when $b_{K,F}\ge0$. The numerical flux is $\widehat f_{K,F}=b_{K,F}\widehat u_{K,F}$.

The **upwind DG semidiscretization** seeks a differentiable cellwise polynomial $u_h(t)$ such that for every $K\in\mathcal T_h$ and $v_h\in\mathbb P_p(K)$,
$$\int_K (\partial_tu_h)v_h\,dx-\int_K \beta u_h\cdot\nabla v_h\,dx+\sum_{F\subset\partial K}\int_F\widehat f_{K,F}v_h\,dS=0.$$
This definition is spatial only. It asserts neither a fully discrete bound nor a shock-convergence result.

For the face orientation, in the diagram $F$ is the shared vertical edge, $n_F=(1,0)$ points from $K^-$ to $K^+$, and $b=\beta\cdot n_F$. The flux takes the trace on the side from which the sign of $b$ transports data. The coordinates and orientation specify the diagram completely; the proofs use the displayed flux formula, not the picture.

```tikz
\begin{tikzpicture}[scale=1.05]
  \fill[blue!8] (-1.4,-0.8) -- (0,-0.8) -- (0,0.9) -- cycle;
  \fill[orange!10] (0,-0.8) -- (1.4,-0.8) -- (0,0.9) -- cycle;
  \draw[thick] (-1.4,-0.8) -- (0,-0.8) -- (0,0.9) -- cycle;
  \draw[thick] (0,-0.8) -- (1.4,-0.8) -- (0,0.9);
  \draw[very thick] (0,-0.8) -- (0,0.9);
  \node at (-0.65,0.0) {$K^-$};
  \node at (0.65,0.0) {$K^+$};
  \node[left] at (0,0.65) {$u^-$};
  \node[right] at (0,0.65) {$u^+$};
  \draw[->,thick] (0,0.05) -- (0.65,0.05) node[midway,above] {$n_F$};
  \draw[->,thick] (-1.2,0.55) -- (-0.55,0.55) node[midway,above] {$\beta$};
  \node[below] at (0,-0.8) {$F$};
\end{tikzpicture}
```
