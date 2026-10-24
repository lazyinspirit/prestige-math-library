---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-spline-polynomial-reproduction.json
  precheck: pass
id: thm-spline-polynomial-reproduction
kind: theorem
title: B-spline basis properties and polynomial reproduction
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-b-spline-space-and-basis]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §§1.1–1.2
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Statement

Let $p\in\mathbb N_0$ and let $\xi$ be a clamped knot vector as in [[def-b-spline-space-and-basis]]. The recursively defined degree-$p$ B-splines are nonnegative, are supported on $[\xi_j,\xi_{j+p+1}]$, and are piecewise polynomials of degree at most $p$. At a knot of multiplicity $\mu\le p$, each B-spline is $C^{p-\mu}$; multiplicity $p+1$ imposes no continuity requirement. On every nonempty knot interval $[\xi_m,\xi_{m+1})$, the active functions $B_{m-p,p,\xi},\ldots,B_{m,p,\xi}$ form a basis of $\mathcal P_p$ and sum to one. Globally, the $n$ B-splines form a basis of $S_{p,\xi}$. In particular, every $q\in\mathcal P_p$ has a unique expansion $q=\sum_{j=1}^n c_jB_{j,p,\xi}$ on $[a,b]$.

## Facts & Assumptions

**Given:** A degree $p\in\mathbb N_0$, a clamped knot vector $\xi$, and its recursively defined B-splines.

[F1] The degree-zero functions are half-open knot-interval indicators; higher-degree functions satisfy the Cox–de Boor recurrence with zero-denominator terms set to zero, and $S_{p,\xi}$ is the piecewise-polynomial space with the stated knot-multiplicity matching conditions ([[def-b-spline-space-and-basis]]).

[A1] The knot vector is clamped, $p\in\mathbb N_0$, and every interior knot has multiplicity at most $p+1$.

## Proof

**Proof technique:** direct.

1.1 For $p=0$, support, piecewise degree, and nonnegativity follow from the indicator definition in [F1]. Inductively, each degree-$p$ term is a lower-degree spline multiplied by an affine factor; on the lower-degree spline's support that factor is nonnegative, and the two supports lie inside $[\xi_j, \xi_{j+p+1}]$. Thus support, degree at most $p$, and nonnegativity hold for every $p$. [A1, F1, algebra]

1.2 Let the distinct interior knots be $\eta_1<\cdots<\eta_s$ with multiplicities $\mu_1,\ldots,\mu_s$. For $k\ge1$ set $u_{r,k}(x)=(x-\eta_r)^k\mathbf1_{[\eta_r,\infty)}(x)$ and set $u_{r,0}(x)=\mathbf1_{[\eta_r,\infty)}(x)$; the value at $\eta_r$ follows the right-cell convention of [F1]. The functions $1,x,\ldots,x^p$ together with $u_{r,k}$ for $p-\mu_r+1\le k\le p$ span $S_{p,\xi}$: start with the polynomial on the first interval, then at each knot the difference of adjacent pieces has its derivatives through $p-\mu_r$ equal to zero, so it is a linear combination of the listed powers, including the right-continuous step when $\mu_r=p+1$. They are independent because restriction to successive knot intervals first forces the initial polynomial coefficients, then each new knot's coefficients, to vanish. Thus $\dim S_{p,\xi}=p+1+\sum_r\mu_r=n$. [A1, F1, algebra]

2.1 Define $\psi_{j,0}(y)=1$ and $\psi_{j,d}(y)=\prod_{r=1}^{d}(y-\xi_{j+r})$. When $\xi_{j+d}>\xi_j$, factoring $\psi_{j,d-1}$ gives $(y-x)\psi_{j,d-1}(y)=\frac{x-\xi_j}{\xi_{j+d}-\xi_j}\psi_{j,d}(y)+\frac{\xi_{j+d}-x}{\xi_{j+d}-\xi_j}\psi_{j-1,d}(y)$. Fix a nonempty cell $[\xi_m,\xi_{m+1})$. At degree zero its sole nonzero indicator is $B_{m,0,\xi}$, so the local identity holds. Inductively, the degree-$(d-1)$ local sum has indices $m-d+1\le j\le m$. For every such index, $\xi_j\le\xi_m<\xi_{m+1}\le\xi_{j+d}$, so the displayed identity has a strictly positive denominator. Multiply that local sum by $y-x$, apply the identity, and regroup with [F1]. The two extra lower-degree functions $B_{m-d,d-1,\xi}$ and $B_{m+1,d-1,\xi}$ vanish on the cell by support, even when their supports are empty; their recurrence terms are zero under [F1]. Thus $(y-x)^d=\sum_{i=m-d}^{m}\psi_{i,d}(y)B_{i,d,\xi}(x)$ for $0\le d\le p$, and in particular for $d=p$. [F1, given, step 1.1, algebra]

3.1 Differentiate the identity in step 2.1 exactly $p-k$ times in $y$ and set $y=0$, for each $0\le k\le p$. Since $\frac{d^{p-k}}{dy^{p-k}}(y-x)^p|_{y=0}=\frac{p!}{k!}(-x)^k$, this yields $x^k=\sum_{i=m-p}^{m}\left[(-1)^k\frac{k!}{p!}\psi_{i, p}^{(p-k)}(0)\right]B_{i,p,\xi}(x).$ The coefficients do not depend on $m$, so this is a single expansion valid on every knot interval. Linear combination proves reproduction of every member of $\mathcal P_p$; taking left limits extends the expansion to $b$. [A1, step 2.1, algebra]

3.2 Fix an open nonempty knot interval $(\xi_m,\xi_{m+1})$ and $p\ge1$. The $p+1$ dual polynomials $\psi_{i,p}$, $m-p\le i\le m$, form a basis of $\mathcal P_p$ in $y$: differentiating the identity of step 2.1 in $x$ at an interior point $x_0$ shows that their span contains $(y-x_0)^k$ for every $0\le k\le p$. For $m-p+1\le i\le m$, the span $\xi_{i+p}-\xi_i$ is strictly positive and factoring gives $\psi_{i,p}-\psi_{i-1,p}=-(\xi_{i+p}-\xi_i)\psi_{i,p-1}$. Differentiate the degree-$p$ local identity in $x$ and use the degree-$(p-1)$ identity and this difference formula to obtain $\sum_{i=m-p}^{m}B'_{i,p,\xi}\psi_{i,p}=p\sum_{i=m-p+1}^{m}\frac{B_{i,p-1,\xi}}{\xi_{i+p}-\xi_i}(\psi_{i,p}-\psi_{i-1,p})$. Comparison in the dual basis yields $B'_{j,p,\xi}=p\left(\frac{B_{j,p-1,\xi}}{\xi_{j+p}-\xi_j}-\frac{B_{j+1,p-1,\xi}}{\xi_{j+p+1}-\xi_{j+1}}\right)$ on this interval. The boundary lower-degree terms vanish by support; any zero denominator corresponds to an identically zero lower-degree spline and its term is zero. For indices outside the active range both sides vanish by support. [A1, F1, step 1.1, step 2.1, algebra]

4.1 Taking $k=0$ in step 3.1 gives $\sum_{i=m-p}^{m}B_{i,p,\xi}(x)=1$. Step 3.1 also shows that these $p+1$ active functions span $\mathcal P_p$ on the interval. Because $\dim\mathcal P_p=p+1$, they are linearly independent there and are a local basis. [A1, step 3.1, algebra]

4.2 Induct on $p$. If the knot multiplicity $\mu\le p-1$, the lower-degree splines in the recurrence are continuous there by induction, so the recurrence makes $B_{j,p,\xi}$ continuous; the derivative formula then makes its derivative $C^{p-1-\mu}$, hence $B_{j,p,\xi}\in C^{p-\mu}$. If $\mu=p$, a B-spline whose support crosses the repeated knot has one nonzero piece on either side, namely $(x-\xi_j)^p/(\xi_{j+p}-\xi_j)^p$ and $(\xi_{j+p+1}-x)^p/(\xi_{j+p+1}-\xi_{j+1})^p$; both one-sided limits equal $1$, while any B-spline not crossing it has zero endpoint value there. If $\mu=p+1$, the required order is $C^{-1}$ and no matching is asserted. [A1, step 3.2, F1, algebra]

5.1 The smoothness and piecewise-degree properties from steps 1.1 and 4.2 put every B-spline in $S_{p,\xi}$. If a linear combination of all $n$ B-splines is zero, then on every nonempty knot interval its active coefficients vanish by the local basis property in step 4.1. Each B-spline has a nonempty support interval by the clamped-knot hypothesis, so every coefficient occurs on at least one such interval and is zero. The B-splines are therefore $n$ independent members of the $n$-dimensional space in step 1.2, hence form its basis. The unique global expansion includes every polynomial from step 3.1. [A1, step 3.1, step 4.1, step 1.2, step 1.1, step 4.2, algebra] ∎

## Remarks

The illustration uses the degree-one clamped knot vector $\xi=(0,0,1,3,4,4)$. On the highlighted cell $[1,3)$, the active splines are $B_{2,1,\xi}(x)=(3-x)/2$ and $B_{3,1,\xi}(x)=(x-1)/2$, so their sum is one. Their supports are $[0,3]$ and $[1,4]$, respectively; the other degree-one B-splines vanish on this cell. These formulas follow directly from the recurrence in [F1]. The simple interior knots in this example give continuous piecewise-linear functions; no continuity at a knot of multiplicity $p+1$ is depicted. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=1.5cm,y=2cm]
\fill[black!75] (1,0) rectangle (3,1);
\draw[->] (-0.2,0) -- (4.4,0) node[right] {$x$};
\draw[->] (0,-0.1) -- (0,1.3);
\draw[dashed] (1,1) -- (3,1);
\draw[blue,thick] (0,0) -- (1,1) -- (3,0);
\draw[red,thick] (1,0) -- (3,1) -- (4,0);
\draw (0,-0.04) -- (0,0.04) node[below=5pt] {$0$};
\draw (1,-0.04) -- (1,0.04) node[below=5pt] {$1$};
\draw (3,-0.04) -- (3,0.04) node[below=5pt] {$3$};
\draw (4,-0.04) -- (4,0.04) node[below=5pt] {$4$};
\node[left] at (0,1) {$1$};
\node[blue,above] at (0.8,1.1) {$B_{2,1,\xi}$};
\node[red,above] at (3.3,1.1) {$B_{3,1,\xi}$};
\node[above] at (2,1.65) {$B_{2,1,\xi}+B_{3,1,\xi}=1$};
\node at (2,-0.4) {$[1,3)$};
\end{tikzpicture}
```
