---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-b-spline-basis-and-polynomial-reproduction.json
  precheck: pass
id: ex-b-spline-basis-and-polynomial-reproduction
kind: example
title: A quadratic Bernstein B-spline basis
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-b-spline-space-and-basis, thm-spline-polynomial-reproduction]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §1.1.1
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Example

Take degree $p=2$ and clamped knot vector $(0,0,0,1,1,1)$. On $[0,1]$ its three B-splines are $(1-x)^2$, $2x(1-x)$, and $x^2$. They form a nonnegative partition of unity and hence a basis of $\mathcal P_2$.

## Facts & Assumptions

**Given:** The degree-two clamped knot vector $(0,0,0,1,1,1)$.

[F1] Degree-zero B-splines are knot-interval indicators and higher degrees follow the stated recurrence ([[def-b-spline-space-and-basis]]).

[F2] For a clamped knot vector, the degree-$p$ B-splines form a basis and reproduce every polynomial of degree at most $p$ ([[thm-spline-polynomial-reproduction]]).

[A1] The degree is $p=2$, the domain is $[0,1]$, and the knot vector is $(0,0,0,1,1,1)$.

## Verification

**Given:** $p=2$, knots $(0,0,0,1,1,1)$, and $x\in[0,1]$.

1.1 The only nonzero degree-zero spline on $(0,1)$ is $B_{3,0}=1$. Applying the recurrence [F1] first at degree one gives $B_{2,1}=1-x$ and $B_{3,1}=x$. Applying it again gives $B_{1,2}=(1-x)^2$, $B_{2,2}=x(1-x)+x(1-x)=2x(1-x)$, and $B_{3,2}=x^2$. Each is nonnegative on $[0,1]$ and their sum is $(1-x)^2+2x(1-x)+x^2=1$. [A1, F1, algebra]

2.1 For $q(x)=a+bx+cx^2$, choose coefficients $a$, $a+b/2$, and $a+b+c$. Their B-spline combination is $a(1-x)^2+2(a+b/2)x(1-x)+(a+b+c)x^2=a+bx+cx^2.$ Thus every quadratic is reproduced; uniqueness of the coefficient vector follows from the basis assertion [F2]. [A1, F2, step 1.1, algebra] ∎

## Remarks

The three curves below illustrate the formulas in verification step 1.1 on $[0,1]$. The dashed horizontal line is their sum, identically $1$. The endpoint values use the left-limit convention at $x=1$ from [[def-b-spline-space-and-basis]]. The verification above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=6cm,y=3cm]
\draw[->] (0,0) -- (1.12,0) node[right] {$x$};
\draw[->] (0,0) -- (0,1.17) node[above] {value};
\draw[dashed,gray] (0,1) -- (1,1);
\draw[blue,thick] (0,1) .. controls (0.333333,0.333333) and (0.666667,0) .. (1,0);
\draw[red,thick] (0,0) .. controls (0.333333,0.666667) and (0.666667,0.666667) .. (1,0);
\draw[green,thick] (0,0) .. controls (0.333333,0) and (0.666667,0.333333) .. (1,1);
\draw (0,0) -- (0,-0.03) node[below] {$0$};
\draw (0.5,0) -- (0.5,-0.03) node[below] {$\frac{1}{2}$};
\draw (1,0) -- (1,-0.03) node[below] {$1$};
\draw (0,0.5) -- (-0.015,0.5) node[left] {$\frac{1}{2}$};
\draw (0,1) -- (-0.015,1) node[left] {$1$};
\node[blue,anchor=west] at (0,-0.37) {$B_{1,2}=(1-x)^2$};
\node[red,anchor=west] at (0,-0.57) {$B_{2,2}=2x(1-x)$};
\node[green,anchor=west] at (0,-0.77) {$B_{3,2}=x^2$};
\end{tikzpicture}
```
