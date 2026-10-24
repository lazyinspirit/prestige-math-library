---
id: ex-crouzeix-raviart-broken-gradient-norm
kind: example
title: A nonzero CR function on a two-triangle square
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-crouzeix-raviart-global-space
  - lem-crouzeix-raviart-global-face-basis
  - lem-crouzeix-raviart-local-face-unisolvence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36,
        Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.1–36.2.2 and Lemma 36.4, PDF pp. 2–4: CR face basis and
        broken-gradient norm."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations,
        Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 276–290: the nonconforming P1 CR space and its
        broken-gradient form."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Split the unit square along the diagonal from $(0,0)$ to $(1,1)$ into
$K_1=\operatorname{conv}\{(0,0),(1,0),(1,1)\}$ and
$K_2=\operatorname{conv}\{(0,0),(0,1),(1,1)\}$. The CR basis function for
the diagonal is nonzero and has broken-gradient norm $2\sqrt2$. Its boundary
edge means vanish, although its boundary traces are not pointwise zero.

The figure uses Cartesian coordinates with $x$ increasing rightward and $y$
upward. The red diagonal is the one interior facet; $K_1$ is below and to its
right, and $K_2$ is above and to its left.

\begin{tikzpicture}[scale=2,line width=0.7pt,every node/.style={font=\small}]
\fill[blue!8] (0,0)--(1,0)--(1,1)--cycle;
\fill[green!8] (0,0)--(0,1)--(1,1)--cycle;
\draw[gray] (0,0)--(1,0)--(1,1)--(0,1)--cycle;
\draw[red!75!black,very thick] (0,0)--(1,1);
\fill (0,0) circle (0.025) (1,0) circle (0.025) (1,1) circle (0.025) (0,1) circle (0.025);
\node[below left] at (0,0) {$(0,0)$};
\node[below right] at (1,0) {$(1,0)$};
\node[above right] at (1,1) {$(1,1)$};
\node[above left] at (0,1) {$(0,1)$};
\node at (0.72,0.35) {$K_1$};
\node at (0.28,0.65) {$K_2$};
\node[red!75!black,above left] at (0.5,0.5) {$F$};
\end{tikzpicture}

## Facts & Assumptions

**Given:** The two-triangle matching mesh of $\Omega=(0,1)^2$ and the homogeneous CR face basis of [[lem-crouzeix-raviart-global-face-basis]].

[F1] The local basis polynomial opposite a facet is $1-2\lambda_F$, and its mean is one on that facet and zero on the other edges. ([[lem-crouzeix-raviart-local-face-unisolvence]])

[F2] The global basis function for the only interior facet is supported on its two incident triangles. ([[lem-crouzeix-raviart-global-face-basis]])

## Verification
1.1 On $K_1$, the barycentric coordinate of the vertex $(1,0)$ opposite the diagonal is $\lambda_1(x,y)=x-y$, so the local polynomial is $v_1(x,y)=1-2x+2y$ and $\nabla v_1=(-2,2)$. On $K_2$, the opposite vertex is $(0,1)$ and $\lambda_2(x,y)=y-x$, giving $v_2(x,y)=1+2x-2y$ and $\nabla v_2=(2,-2)$. [F1, given, algebra]

2.1 Each triangle has area $1/2$, and both gradient squares have magnitude $8$. Thus $\|\nabla_hv_h\|_2^2=\tfrac12(8)+\tfrac12(8)=8, \qquad \|\nabla_hv_h\|_2=2\sqrt2>0.$ By [F1] its edge means are one on the shared diagonal and zero on the four boundary edges; hence [F2] gives a nonzero element of $V_h^{CR,0}$. On the bottom boundary edge of $K_1$, $v_1(x,0)=1-2x$, which is not identically zero although its edge mean is zero. The example therefore distinguishes the CR mean boundary condition from pointwise Dirichlet values. [F1, F2, step 1.1, algebra] ∎
