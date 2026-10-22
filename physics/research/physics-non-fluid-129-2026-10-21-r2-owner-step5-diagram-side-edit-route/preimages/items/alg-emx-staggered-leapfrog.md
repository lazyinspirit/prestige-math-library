---
id: alg-emx-staggered-leapfrog
kind: algorithm
title: "Staggered compatible leapfrog"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-emx-matrix-maxwell-system
justified_by: []
dependency_roles:
  def-emx-matrix-maxwell-system: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: not-applicable
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, centered and staggered leapfrog and Maxwell equations, PDF pp. 3–10."
    - title: "Marco Zank, Topics in Finite Elements, Part I: Introduction and Classical Methods for the Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, leapfrog method, PDF pp. 12–17."
---

## Definition

Inputs are real matrices $M_e\in\mathbb R^{n_e\times n_e}$ and $M_b\in\mathbb R^{n_b\times n_b}$ that are symmetric positive definite, $C\in\mathbb R^{n_b\times n_e}$, and compatible matrices $D,G$ satisfying $DC=CG=0$, with $S=0$ and $j\equiv0$ in the finite compatible matrix system. All dimensions are nonnegative integers as in that system. Also input a real step size $h>0$, an integer horizon $N\ge0$, and initial vectors $e_0\in\mathbb R^{n_e}$ and $b_{-1/2}\in\mathbb R^{n_b}$. The matrix $M_e$ is positive definite, so each mass equation below has a unique exact solution, including the unique empty solve when $n_e=0$. For each integer $n=0,1,\ldots,N-1$, first set

$$b_{n+1/2}:=b_{n-1/2}-hCe_n,$$

then solve uniquely for $v_n\in\mathbb R^{n_e}$ in

$$M_ev_n=C^TM_bb_{n+1/2}$$

and set $e_{n+1}:=e_n+h v_n$. Output the electric vectors $e_0,e_1,\ldots,e_N$ and magnetic vectors $b_{-1/2},b_{1/2},\ldots,b_{N-1/2}$. When $N=0$, the loop makes no updates and the output consists only of the two initial vectors. Every mass solve is exact; no inexact-solve error model is part of this procedure.

## Definition references

[[def-emx-matrix-maxwell-system]]

## Remarks

The horizontal coordinate in the diagram is the time index divided by $h$. Electric vectors are stored at integer indices and magnetic vectors at half-integer indices. At each loop index, the algorithm computes $b_{n+1/2}$ from $e_n$ and the previous magnetic vector, then computes $e_{n+1}$ from that new magnetic vector. The diagram records this indexing convention only; no proof uses it.

```tikz
\begin{tikzpicture}[x=1.15cm,y=0.8cm,>=stealth]
  \draw[->] (-0.85,-1.05) -- (2.7,-1.05) node[right] {$t/h$};
  \node[left] at (-0.85,0.35) {electric};
  \node[left] at (-0.85,-0.2) {magnetic};
  \fill (0,0.35) circle (1.4pt);
  \fill (1,0.35) circle (1.4pt);
  \fill (2,0.35) circle (1.4pt);
  \node[above] at (0,0.35) {$e_0$};
  \node[above] at (1,0.35) {$e_1$};
  \node[above] at (2,0.35) {$e_2$};
  \fill (-0.5,-0.2) circle (1.4pt);
  \fill (0.5,-0.2) circle (1.4pt);
  \fill (1.5,-0.2) circle (1.4pt);
  \node[below] at (-0.5,-0.2) {$b_{-1/2}$};
  \node[below] at (0.5,-0.2) {$b_{1/2}$};
  \node[below] at (1.5,-0.2) {$b_{3/2}$};
  \draw[densely dashed] (0,-0.65) -- (0,0.72);
  \draw[densely dashed] (1,-0.65) -- (1,0.72);
  \draw[densely dashed] (2,-0.65) -- (2,0.72);
\end{tikzpicture}
```
