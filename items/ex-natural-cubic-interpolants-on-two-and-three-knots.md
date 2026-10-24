---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-natural-cubic-interpolants-on-two-and-three-knots.json
  precheck: pass
id: ex-natural-cubic-interpolants-on-two-and-three-knots
kind: example
title: Natural cubic interpolation with two and three knots
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-natural-cubic-spline, thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "P. J. Green and B. W. Silverman, Nonparametric Regression and Generalized Linear Models: A Roughness Penalty Approach, §2.2.1, Theorem 2.2, printed p. 15"
      url: https://ndl.ethernet.edu.et/handle/123456789/32883
---

## Example

With two knots, the natural cubic interpolant is the line joining the two values. With knots $0,1,2$ and values $0,1,0$, the middle second derivative is $-3$, and the interpolant is
$$s(x)=\begin{cases}\frac32x-\frac12x^3,&0\le x\le1,\\[2pt]\frac32(2-x)-\frac12(2-x)^3,&1\le x\le2.\end{cases}$$

## Facts & Assumptions

**Given:** The natural cubic convention and distinct-knot interpolation theorem.

[F1] Natural cubic splines are $C^2$, piecewise cubic, have zero second derivative at the extreme knots, and have linear tails ([[def-natural-cubic-spline]]).

[F2] At two or more distinct ordered knots, arbitrary interpolation values determine a unique natural cubic spline via the tridiagonal second-derivative system ([[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]).

[A1] The first data set has two distinct knots; the second has knots $0,1,2$ and values $0,1,0$.

## Verification

**Given:** The data sets $(0,y_1),(1,y_2)$ and $(0,0),(1,1),(2,0)$.

1.1 For two knots, there are no interior second derivatives in the system of [F2]. The endpoint second derivatives are both zero, so the cubic segment has affine second derivative vanishing at both ends, hence second derivative identically zero. The segment is the unique line through the two values, and its linear extension on any data-free tail is the same line. [A1, F1, F2, algebra]

1.2 For the three-knot data, $h_1=h_2=1$ and the secant slopes are $d_1=1$, $d_2=-1$. The one interior system equation is $4M_2=6(d_2-d_1)=-12$, so $M_2=-3$ while $M_1=M_3=0$. [A1, F2, algebra]

2.1 Substitution in the interval formula gives the displayed pieces. They interpolate $0,1,0$; their first derivatives at $1$ are both $0$, their second derivatives at $1$ are both $-3$, and the second derivatives at $0,2$ are $0$. Thus they join to a natural cubic spline, which is unique by [F2]. [A1, F1, F2, step 1.2, algebra] ∎


## Remarks

The left panel illustrates the two-knot case with $y_1=0$, $y_2=1$; the right panel shows the stated three-knot interpolant. Solid curves lie between the extreme knots; short dashed extensions show the linear tails when the ambient interval extends beyond the knots. The dotted horizontal segment marks $s'(1)=0$ in the right panel. There $s''(0)=s''(2)=0$ and $s''(1)=-3$, as checked in the verification. The figure is illustrative; the verification does not depend on it.

```tikz
\begin{tikzpicture}[x=2cm,y=2cm]
\begin{scope}
\draw[->] (-0.35,0) -- (1.45,0) node[right] {$x$};
\draw[->] (0,-0.45) -- (0,1.55) node[above] {$s(x)$};
\draw[thick] (0,0) -- (1,1);
\draw[thick,dashed] (-0.25,-0.25) -- (0,0);
\draw[thick,dashed] (1,1) -- (1.25,1.25);
\fill (0,0) circle (1.5pt) node[below right] {$(0,0)$};
\fill (1,1) circle (1.5pt) node[below right] {$(1,1)$};
\node at (0.65,-0.7) {Two knots};
\end{scope}
\begin{scope}[xshift=5cm]
\draw[->] (-0.35,0) -- (2.55,0) node[right] {$x$};
\draw[->] (0,-0.45) -- (0,1.55) node[above] {$s(x)$};
\draw[thick] (0,0) .. controls (0.333333,0.5) and (0.666667,1) .. (1,1)
 .. controls (1.333333,1) and (1.666667,0.5) .. (2,0);
\draw[thick,dashed] (-0.25,-0.375) -- (0,0);
\draw[thick,dashed] (2,0) -- (2.25,-0.375);
\draw[dotted] (0.65,1) -- (1.35,1);
\fill (0,0) circle (1.5pt) node[below right] {$(0,0)$};
\fill (1,1) circle (1.5pt) node[above] {$(1,1)$};
\fill (2,0) circle (1.5pt) node[below left] {$(2,0)$};
\node at (1,-0.7) {Three knots};
\end{scope}
\end{tikzpicture}
```
