---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-linear-all-at-once-time-operator.json
  precheck: n/a
id: def-linear-all-at-once-time-operator
kind: definition
title: "The all-at-once bidiagonal time operator and C/F points"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parareal-propagator-pair
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1 and §2.3, PDF pp. 3–5: all-at-once bidiagonal form, C/F splitting, and Schur-complement operators."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full 68-slide lecture deck, slides 57–60: Parareal as coarse correction and MGRIT FCF relaxation."
---

## Definition

Let $d,N\ge1$, let $\Phi_i\in\mathbb R^{d\times d}$ for $1\le i\le N$, and let $u_0\in\mathbb R^d$ be fixed. The linear part of a fine propagator in [[def-parareal-propagator-pair]] is represented by $\Phi_i$. For forcing vectors $g_i\in\mathbb R^d$, write the fine recurrence as $u_i=\Phi_i u_{i-1}+g_i$. On the unknown vector $v=(v_1,\ldots,v_N)\in(\mathbb R^d)^N$, define $A_t$ by $(A_tv)_1=v_1$ and $(A_tv)_i=v_i-\Phi_i v_{i-1}$ for $2\le i\le N$. With $b_1=\Phi_1u_0+g_1$ and $b_i=g_i$ for $i\ge2$, the recurrence is exactly $A_tv=b$.

For a coarsening factor $m\ge2$ dividing $N$, the coarse indices are $0,m,2m,\ldots,N$. Among unknowns, let $C=\{m,2m,\ldots,N\}$ and $F=\{1,\ldots,N\}\setminus C$. Reordering the unknown vector as $(v_F,v_C)$ gives
$$A_t=\begin{pmatrix}A_{FF}&A_{FC}\\ A_{CF}&A_{CC}\end{pmatrix}.$$
A practical coarse propagator $\Psi_j$ on each interval is the linear subcase of the coarse maps $G_n$ in [[def-parareal-propagator-pair]]; the exact coarse operator is determined by eliminating F-points and is not generally the same as this practical choice. This definition asserts no stability or convergence property.

## Remarks

For $N=6$ and $m=2$, the grid below separates the fixed initial state from the unknowns. Each arrow labels only the linear part of the update; the forcing $g_i$ is added at its destination, as in $u_i=\Phi_i u_{i-1}+g_i$.

```tikz
\begin{tikzpicture}[x=1.7cm,y=1cm]
\node (u0) at (0,0) {$u_0$};
\node (u1) at (1,0) {$u_1$};
\node (u2) at (2,0) {$u_2$};
\node (u3) at (3,0) {$u_3$};
\node (u4) at (4,0) {$u_4$};
\node (u5) at (5,0) {$u_5$};
\node (u6) at (6,0) {$u_6$};
\draw[->] (u0) -- node[above] {$\Phi_1$} (u1);
\draw[->] (u1) -- node[above] {$\Phi_2$} (u2);
\draw[->] (u2) -- node[above] {$\Phi_3$} (u3);
\draw[->] (u3) -- node[above] {$\Phi_4$} (u4);
\draw[->] (u4) -- node[above] {$\Phi_5$} (u5);
\draw[->] (u5) -- node[above] {$\Phi_6$} (u6);
\node at (0,-0.6) {$\mathrm{fixed}$};
\node at (1,-0.6) {$F$};
\node at (2,-0.6) {$C$};
\node at (3,-0.6) {$F$};
\node at (4,-0.6) {$C$};
\node at (5,-0.6) {$F$};
\node at (6,-0.6) {$C$};
\end{tikzpicture}
```

Thus the block order in the definition is $(v_F,v_C)=((v_1,v_3,v_5),(v_2,v_4,v_6))$; $u_0$ is not an unknown block entry. Eliminating each intervening F-point composes the two fine linear maps, giving $\Phi_{2j}\Phi_{2j-1}$ over the $j$th coarse interval, with the corresponding accumulated forcing. A practical choice $\Psi_j$ need not equal this product. The grid illustrates the definition; it asserts no stability or convergence property.
