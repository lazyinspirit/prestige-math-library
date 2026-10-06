---
id: lem-odd-dimensional-wave-kernels-obey-the-radial-recursion
kind: lemma
title: "The radial recursion between dimensions n and n+2"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-wave-equation-cauchy-data-and-wave-speed, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3, Problem 14(a), printed p. 53: $r^{-1}\\partial_ru$ solves the spherical wave equation with $n$ replaced by $n+2$"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed pp. 173–174, Lemma 7.6 and its use in (7.19): the dimension-raising transform of radial means"
---


## Statement

Let $c>0$, $n\ge1$ and let $w$ be a $C^3$ function of $(r,t)$ on a domain with $r>0$. Write
$$L_mw:=w_{tt}-c^2\Bigl(w_{rr}+\frac{m-1}{r}w_r\Bigr)$$
for the radial $m$-dimensional wave operator and $\Delta_mg:=g_{rr}+\frac{m-1}{r}g_r$ for the radial Laplacian, in the sign convention of the wave operator of [[def-wave-equation-cauchy-data-and-wave-speed]]. Then
$$L_{n+2}\Bigl[\frac1r\partial_rw\Bigr]=\frac1r\partial_r\bigl[L_nw\bigr]\qquad(r>0).$$
Consequently $w\mapsto r^{-1}\partial_rw$ maps radial classical solutions of the $m$-dimensional homogeneous wave equation to radial classical solutions of the $(m+2)$-dimensional one; at $m=1$ this is the correspondence between one-dimensional waves and radial three-dimensional waves. It is the mechanism by which the kernels in dimension $n+2$ are radial derivatives of the kernels in dimension $n$.

## Facts & Assumptions

**Given:** a speed $c>0$, an integer $n\ge1$, and a $C^3$ function $w$ of $(r,t)$ on a domain with $r>0$.

[F1] Sums, products, quotients of differentiable functions are differentiable with the usual product, quotient rules ([[thm-algebra-of-derivatives]]).

[F2] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

1.1 Put $h:=r^{-1}w_r$. Differentiating the product and quotient, $h_r=r^{-1}w_{rr}-r^{-2}w_r$ and $h_{rr}=r^{-1}w_{rrr}-2r^{-2}w_{rr}+2r^{-3}w_r$, so the radial $(n+2)$-dimensional Laplacian of $h$ is $\Delta_{n+2}h=h_{rr}+\frac{n+1}{r}h_r=r^{-1}w_{rrr}+\frac{n-1}{r^2}w_{rr}-\frac{n-1}{r^3}w_r$. [F1, algebra]

1.2 On the other hand $\Delta_nw=w_{rr}+\frac{n-1}{r}w_r$, whence $\partial_r(\Delta_nw)=w_{rrr}+\frac{n-1}{r}w_{rr}-\frac{n-1}{r^2}w_r$ and $r^{-1}\partial_r(\Delta_nw)=r^{-1}w_{rrr}+\frac{n-1}{r^2}w_{rr}-\frac{n-1}{r^3}w_r$, the same expression as the radial Laplacian of the previous step. [F1, algebra]

2.1 Since $w$ is $C^3$, [F2] gives $w_{rtt}=w_{ttr}$, so time differentiation commutes with $r^{-1}\partial_r$: $h_{tt}=(r^{-1}w_r)_{tt}=r^{-1}\partial_r(w_{tt})$. Subtracting $c^2$ times the identity $\Delta_{n+2}h=r^{-1}\partial_r(\Delta_nw)$ from this equality gives $L_{n+2}h=h_{tt}-c^2\Delta_{n+2}h=r^{-1}\partial_r(w_{tt})-c^2r^{-1}\partial_r(\Delta_nw)=r^{-1}\partial_r(w_{tt}-c^2\Delta_nw)=r^{-1}\partial_r(L_nw)$; if in particular $L_nw=0$ then $L_{n+2}(r^{-1}w_r)=0$, which is the stated mapping of radial solutions. [F2, algebra] ∎ 