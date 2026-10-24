---
id: alg-age-structured-renewal-upwind-finite-volume
kind: algorithm
title: Finite-volume upwind scheme for age renewal transport
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-age-structured-renewal-transport-problem
  - alg-age-structured-positive-birth-quadrature
  - def-uniform-grid-and-difference-operators
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
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–18: finite-volume cell masses, upwind flux, renewal inflow and finite cutoff."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: upwind formula, numerical domain of dependence, CFL and stability proof."
---

## Definition

For [[def-age-structured-renewal-transport-problem]], input a finite horizon $T>0$, a cutoff $A>T$, integers $J,N\ge1$, and use the uniform grid $a_j=j\Delta a$ with $\Delta a=A/J$ and cells $C_j=[a_{j-1},a_j]$. Set $\Delta t=T/N$ and $t_k=k\Delta t$ for $0\le k\le N$. Use the model rates $\mu,\beta$ and input nonnegative initial cell masses $M_j^0$. Also input one positive-birth-quadrature setting for each cell as specified in [[alg-age-structured-positive-birth-quadrature]]; if omitted, use its default one-panel midpoint setting. Keep these settings fixed at every time step. Evaluate $\mu_j=\mu((a_{j-1}+a_j)/2)$. Require the transport-plus-loss CFL

$$\lambda+\Delta t\,\mu_\infty\le1,\qquad \lambda=\Delta t/\Delta a,\quad\mu_\infty=\|\mu\|_\infty.$$

If the CFL inequality fails, return status `invalid-cfl` without an update.

Initialize birth, quadrature-status, and outflow records as empty, and set cumulative outflow $O_h^0=0$. For each $k=0,\ldots,N-1$, put $u_j^k=M_j^k/\Delta a$, compute $B_h^k$ by calling [[alg-age-structured-positive-birth-quadrature]] with the current masses, model fertility $\beta$, and the selected cell settings, and set the upwind fluxes $F_0^k=B_h^k$ and $F_j^k=u_j^k$ for $1\le j\le J$. Update, for $1\le j\le J$,

$$M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\,\mu_jM_j^k.$$

The right flux $F_J^k$ is absorbing outflow: record and discard the step mass $\Delta t F_J^k$, set $O_h^{k+1}=O_h^k+\Delta t F_J^k$, and allow no inflow from ages above $A$. Append $B_h^k$, the quadrature status, and the step outflow record, then proceed to step $k+1$. Return $(M^k)_{k=0}^N$ with the birth, quadrature-status, step-outflow, and cumulative-outflow records. An invalid grid or failed rate/quadrature evaluation returns failure with no partial current step. A `cap-reached` adaptive quadrature estimate may be used for a finite step, but its status is retained and carries no accuracy claim.


## Remarks

The schematic below shows a time-$k$ cell balance and the two boundary fluxes. The upper panel represents any cell $1\le j\le J$; the lower panel shows the age interval, with intermediate cells omitted. The mortality arrow is a loss, and the cutoff arrow is discarded outflow, not a renewal return path. These illustrations do not change the algorithm, including the cases $J=1$ and $J=2$.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\draw (3,1) rectangle (7,2.4);
\node at (5,2) {$C_j=[a_{j-1},a_j]$};
\node at (5,1.5) {$M_j^k$};
\draw[->] (1,1.7) -- (3,1.7);
\node at (1.8,2.15) {$F_{j-1}^k$};
\draw[->] (7,1.7) -- (9,1.7);
\node at (8.2,2.15) {$F_j^k$};
\draw[->] (5,1) -- (5,0.2);
\node[below] at (5,0.2) {$\mu_j M_j^k$};
\node[below] at (3,1) {$a_{j-1}$};
\node[below] at (7,1) {$a_j$};
\draw[->] (0,-2) -- (10,-2);
\draw (1,-2.15) -- (1,-1.85);
\draw (3,-2.15) -- (3,-1.85);
\draw (7,-2.15) -- (7,-1.85);
\draw (9,-2.15) -- (9,-1.85);
\node[below] at (1,-2.15) {$a_0=0$};
\node[below] at (3,-2.15) {$a_1$};
\node[below] at (7,-2.15) {$a_{J-1}$};
\node[below] at (9,-2.15) {$a_J=A$};
\node at (2,-1.65) {$C_1$};
\node at (5,-1.65) {$\cdots$};
\node at (8,-1.65) {$C_J$};
\draw[->] (0,-1) -- (1.5,-1);
\node[above] at (0.7,-1) {$F_0^k=B_h^k$};
\draw[->] (8.5,-1) -- (10,-1);
\node[above] at (9.3,-1) {$F_J^k=u_J^k$};
\node[right] at (10,-2) {$a$};
\end{tikzpicture}
```

In the upper panel, fluxes are rates: the step increments multiply them by $\Delta t$. Thus the cell receives $\Delta t F_{j-1}^k$, loses $\Delta t F_j^k$ to transport, and loses $\Delta t\,\mu_j M_j^k$ to mortality, exactly as in the update. The interior flux is $F_j^k=u_j^k=M_j^k/\Delta a$. At the two ends, $F_0^k=B_h^k$ supplies newborn inflow and $O_h^{k+1}=O_h^k+\Delta t F_J^k$ records discarded cutoff outflow. The defining formulas above remain independent of the illustration.
