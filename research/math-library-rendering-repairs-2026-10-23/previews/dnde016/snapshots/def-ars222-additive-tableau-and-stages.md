---
id: def-ars222-additive-tableau-and-stages
kind: definition
title: "The ARS(2,2,2) additive tableau and its three stages"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-additive-ode-and-partition
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-implicit-runge-kutta-stage-equations
  - def-implicit-residual-and-algebraic-error-units
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
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, additive explicit/implicit tableaus and stage equations, PDF pp. 2–4."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1 and Table 2, PDF pp. 3 and 6: coupled order conditions and a second-order ARS-type pair."
---

## Definition

For the autonomous split problem $y'=a(y)+b(y)$ of [[def-additive-ode-and-partition]], set
$$\gamma:=1-\frac1{\sqrt2},\qquad \delta:=-\frac1{\sqrt2}.$$
The explicit tableau and the lower-triangular implicit tableau, using the separate stage conventions of [[def-explicit-runge-kutta-tableau-and-stage-map]] and [[def-implicit-runge-kutta-stage-equations]], are
$$\widetilde A=\begin{pmatrix}0&0&0\\\gamma&0&0\\\delta&1-\delta&0\end{pmatrix},\quad \widetilde b=(\delta,1-\delta,0),\quad \widetilde c=(0,\gamma,1),$$
$$A=\begin{pmatrix}0&0&0\\0&\gamma&0\\0&1-\gamma&\gamma\end{pmatrix},\quad b=(0,1-\gamma,\gamma),\quad c=(0,\gamma,1).$$
For a step $h>0$ from $y$, the method is defined by
$$Y_1=y,\qquad Y_2=y+\gamma h a(Y_1)+\gamma h b(Y_2),$$
$$Y_3=y+h\bigl[\delta a(Y_1)+(1-\delta)a(Y_2)\bigr]+h\bigl[(1-\gamma)b(Y_2)+\gamma b(Y_3)\bigr],\qquad y^+=Y_3.$$
Thus there are two implicit solves per step, one for each nonzero diagonal implicit stage. The unscaled stage-equation residual uses the update-residual convention of [[def-implicit-residual-and-algebraic-error-units]]. The tableaus and stages alone assert neither branch existence nor stability.


## Remarks

The stage-dependency diagram below separates contributions from earlier stages from the implicit diagonal terms. An arrow labelled with $a$ or $b$ contributes the indicated multiple of that component evaluated at the arrow's source stage to the target equation; every stage equation also contains the base state $y$. The self-loops at $Y_2$ and $Y_3$ mark the implicit terms, not an assertion that a solution exists or is unique. The formulas in the Definition specify the method independently of the picture.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node[draw,rounded corners,minimum width=1.5cm,minimum height=0.7cm] (Y1) at (0,2.8) {$Y_1=y$};
\node[draw,rounded corners,minimum width=1.5cm,minimum height=0.7cm] (Y2) at (-3,0) {$Y_2$};
\node[draw,rounded corners,minimum width=1.5cm,minimum height=0.7cm] (Y3) at (3,0) {$Y_3=y^+$};
\draw[->] (Y1) -- node[above left] {$\gamma h a$} (Y2);
\draw[->] (Y1) -- node[above right] {$\delta h a$} (Y3);
\draw[->] (Y2) -- node[above,align=center] {$h(1-\delta)a$\\$h(1-\gamma)b$} (Y3);
\draw[->] (Y2) edge[loop below,min distance=1.3cm] node[below] {$\gamma h b$} (Y2);
\draw[->] (Y3) edge[loop below,min distance=1.3cm] node[below] {$\gamma h b$} (Y3);
\end{tikzpicture}
```
