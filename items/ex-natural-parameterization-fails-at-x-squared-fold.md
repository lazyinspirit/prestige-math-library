---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-natural-parameterization-fails-at-x-squared-fold.json
  precheck: pass
id: ex-natural-parameterization-fails-at-x-squared-fold
kind: example
title: 'The natural parameter fails at the fold $x^2-\lambda=0$'
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-simple-fold-lyapunov-schmidt-parameterization
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The equation $x^2-\lambda=0$ has a simple fold at $(0,0)$. The parameter
$\lambda$ cannot serve as a two-sided local coordinate for its solution set.

## Facts & Assumptions

**Given:** The real equation $x^2-\lambda=0$ near $(0,0)$.

[F1] [[thm-simple-fold-lyapunov-schmidt-parameterization]]: under the simple
fold hypotheses, the normalized curve has $\lambda'(0)=0$ and
$\lambda''(0)=-w^TF_{xx}[v,v]/(w^TF_\lambda)\ne0$.

## Verification

**Proof technique:** direct.

1.1 Solving for the parameter gives exactly $\lambda=x^2$. At $x=0$ its derivative is $d\lambda/dx=0$, and its second derivative is $2$. Thus the projection from the local solution curve to the $\lambda$-axis has zero derivative at the fold. [given, algebra]

2.1 For every $\lambda<0$ there is no real solution, while for every $\lambda>0$ there are two, $x=\sqrt\lambda$ and $x=-\sqrt\lambda$. Hence no open interval about $0$ is the parameter domain of a single-valued local solution graph covering the whole nearby solution set. On either one-sided branch, $|dx/d\lambda|=1/(2\sqrt\lambda)$ is unbounded as $\lambda\downarrow0$. [given, step 1.1, algebra]

3.1 The fold conditions are $F_x(0,0)=0$, $F_\lambda(0,0)=-1\ne0$, and $F_{xx}(0,0)=2\ne0$, so [F1] gives the same nonzero curvature conclusion independently of the explicit graph calculation. [F1, given, algebra] ∎ 

## Remarks

The sketch shows the solution curve $C=\{(\lambda,x):\lambda=x^2\}$ in
$(\lambda,x)$ coordinates. For sufficiently small $a>0$, the distinct points
$(a,\sqrt a)$ and $(a,-\sqrt a)$ have the same image $a$ under the projection
$\pi:C\to\mathbb R$, $\pi(\lambda,x)=\lambda$. The dashed arrows depict this
projection onto the horizontal axis. The curve continues beyond the displayed
portion; the origin is its fold, not an endpoint. The Verification above is
independent of the sketch.

```tikz
\begin{tikzpicture}[scale=1.6]
\draw[->] (-0.45,0) -- (2.55,0) node[right] {$\lambda$};
\draw[->] (0,-1.65) -- (0,1.7) node[above] {$x$};
\draw[<->,very thick,cyan,domain=-1.45:1.45,samples=65,variable=\t] plot ({\t*\t},{\t});
\node[cyan,right] at (2.08,1.3) {$C:\ \lambda=x^2$};
\draw[dashed,->] (1,1) -- (1,0.06);
\draw[dashed,->] (1,-1) -- (1,-0.06);
\fill[cyan] (1,1) circle (1.6pt) node[above left] {$(a,\sqrt a)$};
\fill[cyan] (1,-1) circle (1.6pt) node[below left] {$(a,-\sqrt a)$};
\fill[cyan] (1,0) circle (1.6pt);
\node[below right] at (1,0) {$a$};
\fill[cyan] (0,0) circle (1.8pt);
\node[below left] at (0,0) {$(0,0)$};
\end{tikzpicture}
```
