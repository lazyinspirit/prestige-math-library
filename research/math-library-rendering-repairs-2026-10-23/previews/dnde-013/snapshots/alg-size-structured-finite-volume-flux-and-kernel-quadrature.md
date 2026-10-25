---
id: alg-size-structured-finite-volume-flux-and-kernel-quadrature
kind: algorithm
title: Finite-volume size transport with positive division quadrature
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-size-structured-transport-and-division-kernel
  - alg-composite-midpoint-rule
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
      locator: "Chapter 2, §2.3, PDF pp. 17–18: finite-volume cell masses, upwind fluxes and renewal inflow; Chapter 1, §§1.4–1.5, PDF pp. 8–10: size-division moment conventions."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: constant-speed upwind flux and CFL; variable-speed size fluxes are defined locally here."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: composite midpoint nodes and positive equal panel weights."
    - title: "Lecture 14: Quadrature, Introduction to Numerical Computation II, Kent State University notes"
      url: "https://www.math.kent.edu/~reichel/courses/intr.num.comp.2/lecture18/quadrature.pdf"
      locator: "Complete eight-page lecture PDF; PDF pp. 4–6: composite midpoint nodes, weights and Taylor error expansion."
---

## Definition

Input a partition $0=x_0<x_1<\cdots<x_J=X$ with $J\ge1$, a time step $\Delta t>0$, a nonnegative current mass vector $M^k=(M_j^k)_{j=1}^J$, and the coefficients and kernel from [[def-size-structured-transport-and-division-kernel]]. Partition $[0,X]$ into disjoint cells $C_j=[x_{j-1},x_j)$ for $j<J$ and $C_J=[x_{J-1},X]$, with widths $h_j=x_j-x_{j-1}>0$ and centers $x_j^c=(x_{j-1}+x_j)/2$. Set $u_j^k=M_j^k/h_j$, the incoming flux $F_0^k=0$, the internal and outgoing upwind fluxes $F_j^k=g(x_j)u_j^k$ for $1\le j\le J$, and $d_j=\mu(x_j^c)+\gamma(x_j^c)$.

For each parent cell $C_\ell$, form nonnegative daughter coefficients

$$A_{j\ell}=\frac{1}{h_\ell}\,Q_M\bigl(y\mapsto K_y(C_j);x_{\ell-1},x_\ell,1\bigr),$$

using [[alg-composite-midpoint-rule]] on the parent-size interval. Since the one-panel midpoint rule is $Q_M(f;x_{\ell-1},x_\ell,1)=h_\ell f(x_\ell^c)$, this gives $A_{j\ell}=K_{x_\ell^c}(C_j)\ge0$. If $\Delta t(g(x_j)/h_j+d_j)>1$ for any cell, return `invalid-cfl` without an update. Otherwise the finite-volume update is

$$M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\,d_jM_j^k+\Delta t\sum_{\ell=1}^JA_{j\ell}M_\ell^k.$$

The flux $F_J^k$ is absorbing outflow. The admissible variable-width CFL is $\Delta t(g(x_j)/h_j+d_j)\le1$ for every cell. If a grid or any required coefficient/kernel evaluation fails, return failure without a partial update. Otherwise return $M^{k+1}$ together with the fluxes and daughter coefficients used in the step.


## Remarks

The schematic separates transport through cell faces from daughter production. Arrow labels are contributions over one time step; the loss arrow combines mortality and removal of dividing parents. The daughter arrow shows one summand for a parent cell, not transport through an intervening face. Its coefficient may be zero; the support condition on the kernel gives $A_{j\ell}=0$ for $j>\ell$. At the boundary, $F_0^k=0$, while $F_J^k$ leaves the size interval.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw, minimum width=2cm, minimum height=1cm] (cell) at (0,0) {$C_j:\ M_j^k$};
\draw[->] (-3.4,0) -- (cell) node[midway,above] {$\Delta t F_{j-1}^k$};
\draw[->] (cell) -- (3.4,0) node[midway,above] {$\Delta t F_j^k$};
\draw[->] (cell) -- (0,-1.5) node[midway,right] {$\Delta t d_j M_j^k$};
\node at (0,-1.85) {loss};
\node[draw, minimum width=2cm, minimum height=1cm] (parent) at (-2,-3.3) {$C_\ell:\ M_\ell^k$};
\node[draw, minimum width=2cm, minimum height=1cm] (daughter) at (2,-3.3) {$C_j$};
\draw[->] (parent) -- (daughter) node[midway,above] {$\Delta t A_{j\ell}M_\ell^k$};
\node at (0,-4.2) {daughter production};
\node[draw, minimum width=2cm, minimum height=0.8cm] (last) at (-2,-5.5) {$C_J$};
\node (outside) at (2,-5.5) {absorbing outflow};
\draw[->] (last) -- (outside) node[midway,above] {$\Delta t F_J^k$};
\end{tikzpicture}
```

This illustration only records the terms of the defined update; it supplies no additional assumption or proof.
