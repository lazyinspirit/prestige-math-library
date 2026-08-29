---
id: ex-vandermonde-conditioning-improves-after-centering-and-scaling
kind: example
title: "Vandermonde conditioning improves after centering and scaling the nodes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 18"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Example

Interpolating a linear polynomial through two points whose nodes are
$t_0=100$ and $t_1=101$ is the Vandermonde system
$V(t_0,t_1)c=y$ with $V(t_0,t_1)=\begin{pmatrix}1&t_0\\1&t_1\end{pmatrix}$,
which has $\kappa_\infty=20502$. Centering and scaling the nodes to
$s_0=-1/2$ and $s_1=1/2$ through the affine change of variable
$t=s+201/2$ gives the equivalent system for the same interpolation task with
$\kappa_\infty=3$. Conditioning is a property of the chosen coordinates, not of
the underlying interpolation problem.

## Facts & Assumptions

**Given:** The nodes $t_0=100$, $t_1=101$ and their images $s_0=-1/2$, $s_1=1/2$ under $t=s+201/2$, and the Vandermonde matrices $V(t_0,t_1)=\begin{pmatrix}1&t_0\\1&t_1\end{pmatrix}$, $V(s_0,s_1)=\begin{pmatrix}1&s_0\\1&s_1\end{pmatrix}$.

[L1] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$ ([[def-condition-number-of-a-nonsingular-linear-system]]).

[L2] The induced $\infty$-norm is the maximum row sum ([[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]]).

[L3] For a nonsingular $2\times2$ matrix $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $M^{-1}=(ad-bc)^{-1}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

## Verification

**Proof technique:** direct.

1.1 For the node pair $(t_0,t_1)=(100,101)$, the determinant is $101-100=1$, and [L3] gives $V(t_0,t_1)^{-1}=\begin{pmatrix}101&-100\\-1&1\end{pmatrix}$. [L3, algebra]

1.2 By [L2], $\lVert V(100,101)\rVert_\infty=\max\{101,\,102\}=102$ and $\lVert V(100,101)^{-1}\rVert_\infty=\max\{201,\,2\}=201$, so [L1] gives $\kappa_\infty=102\cdot 201=20502$. [L1, L2, algebra]

1.3 For the centered and scaled pair $(s_0,s_1)=(-1/2,1/2)$, the determinant is $1/2-(-1/2)=1$, and [L3] gives $V(s_0,s_1)^{-1}=\begin{pmatrix}1/2&1/2\\-1&1\end{pmatrix}$. [L3, algebra]

1.4 By [L2], $\lVert V(s_0,s_1)\rVert_\infty=\max\{3/2,\,3/2\}=3/2$ and $\lVert V(s_0,s_1)^{-1}\rVert_\infty=\max\{1,\,2\}=2$, so [L1] gives $\kappa_\infty=(3/2)\cdot 2=3$. [L1, L2, algebra]

2.1 The change of variable $t=s+201/2$ maps $s_0$ to $100$ and $s_1$ to $101$, and interpolating the same data $(t_i,y_i)$ in the coordinate $t$ is the system $V(t_0,t_1)c=y$ while interpolating it in the coordinate $s$ is $V(s_0,s_1)c'=y$ with $c'_0=c_0+(201/2)c_1$ and $c'_1=c_1$; the two systems represent the same polynomial task, yet their condition numbers are $20502$ and $3$. [step 1.2, step 1.4, algebra]

3.1 Steps 1.2 and 1.4, read through step 2.1, show that centering and scaling the nodes improves the conditioning of the same interpolation problem by four orders of magnitude. [step 2.1] ∎
