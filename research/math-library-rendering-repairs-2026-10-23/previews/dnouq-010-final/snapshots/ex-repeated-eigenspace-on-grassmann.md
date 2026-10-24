---
id: ex-repeated-eigenspace-on-grassmann
kind: example
title: A repeated eigenvalue gives a continuum of Grassmann minimizers
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - prop-stiefel-grassmann-riemannian-gradient-formulas
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
verification:
  precheck: n/a
---

## Example

Let $A=\operatorname{diag}(0,0,2)$ and minimize the rank-one trace objective
$f([x])=x^{\mathsf T}Ax$ on $\operatorname{Gr}(1,3)$. Every line in
$\operatorname{span}(e_1,e_2)$ is a global minimizer. The repeated bottom
eigenvalue therefore produces a continuum of minimizers represented by one
Grassmann critical set.

## Facts & Assumptions

**Given:** The matrix $A$ and the rank-one Grassmann objective in the Example.

[F1] A Grassmann objective must be invariant under changing an orthonormal frame of the same subspace, and its gradient is the horizontal projection ([[prop-stiefel-grassmann-riemannian-gradient-formulas]]).

[F2] The horizontal tangent at a unit vector $x$ consists of vectors $z$ with $x^{\mathsf T}z=0$ ([[thm-stiefel-grassmann-tangent-projections]]).

## Proof

**Proof technique:** evaluate the Rayleigh quotient and its horizontal gradient.

1.1 For $q=\pm1\in\operatorname O(1)$, $(xq)^{\mathsf T}A(xq)=x^{\mathsf T}Ax$, so the objective is well-defined on lines by [F1]. Since $A$ is positive semidefinite, $f([x])\ge0$ for every unit $x$. If $x\in\operatorname{span}(e_1,e_2)$, then $Ax=0$ and $f([x])=0$, so every such line is a global minimizer. [F1, given, algebra]

2.1 The vectors $x=(\cos\theta)e_1+(\sin\theta)e_2$ for $0\le\theta<\pi$ are unit and give distinct lines: two such vectors span the same line only when their angles differ by a multiple of $\pi$, which cannot occur for distinct parameters in this half-open interval. Thus they parametrize continuum many distinct lines. At each such $x$, $Ax=0$, so the ambient gradient $2Ax$ and its horizontal projection vanish. The family is a continuum of Grassmann critical minimizers. [F1, F2, given, step 1.1, algebra] ∎

## Remarks

The picture is a front view of the zero-eigenspace $E=\operatorname{span}(e_1,e_2)=\ker A$. Each diameter represents one minimizing line, hence one point of $\operatorname{Gr}(1,3)$; only a few are drawn. The two marked unit vectors $x$ and $-x$ represent the same line $[x]$. Rotating through $0\le\theta<\pi$ gives all these lines without duplicating the endpoint. The transverse direction satisfies $Ae_3=2e_3$ and is not a minimizing line.

```tikz
\begin{tikzpicture}[scale=1.35]
\draw[->] (-2,0) -- (2.15,0) node[right] {$e_1$};
\draw[->] (0,-1.85) -- (0,2.1) node[above] {$e_2$};
\draw[dashed] (0,0) circle (1.5);
\draw[dashed] (-1.6,0.75) -- (1.6,-0.75);
\draw[dashed] (-0.6,-1.7) -- (0.6,1.7);
\draw[very thick] (-1.72,-1.20) -- (1.72,1.20);
\fill (1.229,0.860) circle (0.045);
\fill (-1.229,-0.860) circle (0.045);
\node[above left] at (1.229,0.860) {$x$};
\node[below right] at (-1.229,-0.860) {$-x$};
\draw[->] (0.55,0) arc (0:35:0.55);
\node at (0.77,0.23) {$\theta$};
\node[above] at (0,2.55) {$E=\ker A$};
\node at (0,-2.25) {$[x]=[-x],\qquad f([x])=0$};
\end{tikzpicture}
```

The figure illustrates the family in proof step 2.1; the proof does not depend on it.
