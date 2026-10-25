---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up.json
  precheck: pass
id: cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up
kind: counterexample
title: "Quasilinear characteristics can cross before the lifted ODE blows up"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde, lem-local-solvability-of-the-augmented-characteristic-ode, thm-inviscid-burgers-characteristic-formula-and-first-crossing-time]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement refuted

If the lifted characteristic ODE continues, then the quasilinear PDE remains a single-valued classical graph.

## Counterexample

**Given:** Burgers data $u_0(\xi)=-\tanh\xi$.

**Proof technique:** direct.

1.1 The lifted characteristic is $Z(t,\xi)=-\tanh\xi$ and $X(t,\xi)=\xi-t\tanh\xi$, both defined for every $t\ge0$. [given, algebra]

2.1 Yet $X_\xi(1,0)=0$, so the projected map has a caustic at $t=1$. [step 1.1, algebra]

3.1 Thus the lifted ODE persists while inverse projection to a graph fails, refuting the statement. [step 2.1, given] ∎

## Remarks

The picture shows three projected characteristics in the $(x,t)$ plane. Along each line the lifted height $Z=-\tanh\xi$ stays constant. The marked point $(0,1)$ is the first rank loss of the full family, since $X_\xi=1-t\,\mathrm{sech}^2\xi$. The two outer lines shown meet later, at $t=\coth 1>1$; their different $Z$ values prevent their lifts from meeting. Thus the illustration distinguishes loss of graphing from failure of the lifted ODE.

```tikz
\begin{tikzpicture}[x=2.4cm,y=2.4cm]
\draw[->] (-1.35,0) -- (1.45,0) node[right] {$x$};
\draw[->] (0,-0.12) -- (0,2.05) node[above] {$t$};
\draw[thick,blue] (-1,0) -- (0.37087,1.8);
\draw[thick] (0,0) -- (0,1.8);
\draw[thick,red] (1,0) -- (-0.37087,1.8);
\node[below] at (-1,0) {$\xi=-1$};
\node[below right] at (0,0) {$\xi=0$};
\node[below] at (1,0) {$\xi=1$};
\node[blue,right] at (0.37087,1.8) {$Z=\tanh 1$};
\node[red,left] at (-0.37087,1.8) {$Z=-\tanh 1$};
\fill (0,1) circle (1.7pt);
\draw (-0.7,1) -- (-0.08,1);
\node[left] at (-0.7,1) {$(0,1)$: first rank loss};
\fill (0,1.313035) circle (1.7pt);
\draw (0.08,1.313035) -- (0.65,1.313035);
\node[right] at (0.65,1.313035) {$t=\coth 1$};
\end{tikzpicture}
```
