---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube.json
  precheck: pass
id: ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube
kind: example
title: "The Lebesgue measure of the image of the unit cube under an explicit linear map of the plane and of three-space"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-linear-change-of-variables-for-lebesgue-measure,
       def-determinant-of-a-square-matrix,
       thm-determinant-of-a-triangular-matrix,
       thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice. Let

$$T(x,y) := (2x+y,\ x+3y), \qquad U(x,y,z) := (2x+y,\ 3y-z,\ 4z), \qquad S(x,y) := (x,x).$$

Then the image of the unit square $(0,1]^2$ under $T$ has Lebesgue measure $5$,
the image of the unit cube $(0,1]^3$ under $U$ has Lebesgue measure $24$, and
the image of $(0,1]^2$ under the singular map $S$ is Lebesgue null.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the three linear maps $T$, $U$ and $S$ above.

[L1] Assuming countable choice, a linear map $T$ of $\mathbb R^n$ sends Lebesgue measurable sets to Lebesgue measurable sets, with $\lambda_n(T[E]) = |\det T|\,\lambda_n(E)$ when $T$ is invertible and $T[E]$ Lebesgue null when it is not ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F1] Its **determinant** is the Leibniz sum over permutations ([[def-determinant-of-a-square-matrix]]).

[F2] If $A=(a_{ij}) \in M_n(R)$ is upper or lower triangular over a commutative ring, then $\det(A) = \prod_i a_{ii}$ ([[thm-determinant-of-a-triangular-matrix]]).

[L2] Every affine hyperplane of $\mathbb R^n$, and hence every proper linear subspace, is Lebesgue null ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]).

## Verification

**Proof technique:** direct.

1.1 The matrix of $T$ is $\begin{pmatrix}2&1\\1&3\end{pmatrix}$, so [F1] gives $\det T = 2 \cdot 3 - 1 \cdot 1 = 5$; therefore [L1] gives $\lambda_2(T[(0,1]^2]) = 5 \lambda_2((0,1]^2) = 5$. [L1, F1, algebra]

1.2 The matrix of $U$ is the upper triangular matrix $\begin{pmatrix}2&1&0\\0&3&-1\\0&0&4\end{pmatrix}$, so [F2] gives $\det U = 2 \cdot 3 \cdot 4 = 24$; hence [L1] gives $\lambda_3(U[(0,1]^3]) = 24 \lambda_3((0,1]^3) = 24$. [L1, F1, F2, algebra]

2.1 The matrix of $S$ is $\begin{pmatrix}1&0\\1&0\end{pmatrix}$, so [F1] gives $\det S = 0$, and $S[(0,1]^2] = \{(t,t) : 0 < t \le 1\}$ lies in the proper linear subspace $\{(u,v) : u=v\}$; therefore [L1] and [L2] give that $S[(0,1]^2]$ is Lebesgue null. [L1, L2, F1, algebra] ∎

## Remarks

The first two panels show closures of the square and its $T$-image; the actual sets remain the half-open sets in the example. The $S$-image has its origin excluded and its other endpoint included. The last panel is an oblique projection of the closure of the $U$-image, with its three generating vectors labeled. Projected area does not represent three-dimensional volume.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw[fill=blue!10] (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0);
\node at (0.5,-0.45) {$[0,1]^2$};
\draw[->] (1.5,0.5) -- (3,0.5);
\node at (2.25,0.9) {$T$};
\draw[fill=blue!15] (4,0) -- (6,1) -- (7,4) -- (5,3) -- (4,0);
\node[below] at (4,0) {$(0,0)$};
\node[right] at (6,1) {$(2,1)$};
\node[above] at (7,4) {$(3,4)$};
\node[left] at (5,3) {$(1,3)$};
\node at (2.2,2.7) {$\det T=5$};
\node at (2.2,2.1) {$\lambda_2(T[(0,1]^2])=5$};
\begin{scope}[yshift=-3.8cm]
\draw[fill=blue!10] (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0);
\node at (0.5,-0.45) {$[0,1]^2$};
\draw[->] (1.5,0.5) -- (3,0.5);
\node at (2.25,0.9) {$S$};
\draw[thick] (4,0) -- (5,1);
\draw[fill=white] (4,0) circle (2pt);
\fill (5,1) circle (2pt);
\node[below] at (4,0) {$(0,0)$};
\node[above] at (5,1) {$(1,1)$};
\node at (6.4,0.1) {$\lambda_2(S[(0,1]^2])=0$};
\end{scope}
\begin{scope}[xshift=2.5cm,yshift=-9.9cm]
\draw[dashed] (0,0) -- (1,3);
\draw[dashed] (1,3) -- (3,3);
\draw[dashed] (1,3) -- (-0.6,4.8);
\draw[fill=blue!10] (0,0) -- (2,0) -- (0.4,1.8) -- (-1.6,1.8) -- (0,0);
\draw (2,0) -- (3,3) -- (1.4,4.8) -- (-0.6,4.8) -- (-1.6,1.8);
\draw (0.4,1.8) -- (1.4,4.8);
\draw[->,thick] (0,0) -- (2,0);
\draw[->,thick] (0,0) -- (-1.6,1.8);
\node[below] at (1,0) {$(2,0,0)$};
\node[left] at (-1.6,1.8) {$(0,-1,4)$};
\node[right] at (2.5,1.5) {$(1,3,0)$};
\node at (0.6,-1) {$\det U=24$};
\node at (0.6,-1.6) {$\lambda_3(U[(0,1]^3])=24$};
\end{scope}
\end{tikzpicture}
```

In the last panel the projection is $(a,b,c)\mapsto(a-0.4c,b+0.7c)$, and each edge parallel to a labeled edge represents that same generating vector. Thus the three vectors are $U(1,0,0)$, $U(0,1,0)$ and $U(0,0,1)$. The determinant and measure labels summarize verification steps 1.1, 1.2 and 2.1; the proof remains independent of the illustration.
