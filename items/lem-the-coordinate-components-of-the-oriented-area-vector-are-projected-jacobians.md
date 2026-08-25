---
id: lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians
kind: lemma
title: "Each coordinate of the oriented area vector is the Jacobian determinant of the matching cyclic projection"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cross-product-in-r3, def-jacobian-determinant-of-a-c-one-map, def-simple-solid-region-in-a-coordinate-direction, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-determinant-of-a-square-matrix, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $O\subseteq\mathbb R^2$ be open and let $\varphi=(\varphi_x,\varphi_y,\varphi_z):O\to\mathbb R^3$ be $C^1$, with parameters named $u,v$ and $\varphi_u:=\partial_u\varphi$, $\varphi_v:=\partial_v\varphi$. Then at every point of $O$,

$$(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$$

for each of the three coordinate directions $k\in\{x,y,z\}$, where $\pi_k$ is the cyclic coordinate projection of [[def-simple-solid-region-in-a-coordinate-direction]].

## Facts & Assumptions

**Given:** The open set $O\subseteq\mathbb R^2$ and the $C^1$ map $\varphi:O\to\mathbb R^3$ of the Statement.

[F1] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F2] For a $C^1$ map $g$ of an open subset of $\mathbb R^n$ into $\mathbb R^n$, its **Jacobian determinant** is $\det Dg(x)$, the determinant of its Jacobian matrix ([[def-jacobian-determinant-of-a-c-one-map]]).

[F3] If every partial derivative $\partial_jf_i(a)$ of $f$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[F4] For a commutative ring $R$, $n\ge1$ and $A=(a_{ij})\in M_n(R)$, $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$, with columns indexed by $i<n$ and rows by $\sigma(i)$ ([[def-determinant-of-a-square-matrix]]).

[F5] An inversion of $\sigma\in S_n$ is a pair $(i,j)$ with $i<j<n$ and $\sigma(i)>\sigma(j)$, and $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$ ([[def-inversions-inversion-number-and-sign]]).

[F6] The cyclic coordinate projections are $\pi_x(p)=(p_y,p_z)$, $\pi_y(p)=(p_z,p_x)$ and $\pi_z(p)=(p_x,p_y)$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F7] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Each $\pi_k\circ\varphi$ is a map of the two parameters into $\mathbb R^2$ whose two components are components of $\varphi$, hence $C^1$ by [F7], so by [F2] and [F3] it has a Jacobian matrix $\begin{pmatrix}a_{00}&a_{01}\\a_{10}&a_{11}\end{pmatrix}$ with $a_{i0}=\partial_u$ and $a_{i1}=\partial_v$ of its $i$th component. There are exactly two elements of $S_2$: the identity, with no inversion and sign $+1$, contributing $a_{00}a_{11}$, and the transposition sending $0$ to $1$ and $1$ to $0$, with the single inversion $(0,1)$ and sign $-1$, contributing $-a_{10}a_{01}$. So [F4] and [F5] give $\det D(\pi_k\circ\varphi)=a_{00}a_{11}-a_{10}a_{01}$. [given, F2, F3, F4, F5, F7]

1.2 By [F1] with $u=\varphi_u$ and $v=\varphi_v$, whose coordinates are the partial derivatives named in [F3], the oriented area vector has coordinates $$(\varphi_u\times\varphi_v)_x=\partial_u\varphi_y\,\partial_v\varphi_z-\partial_u\varphi_z\,\partial_v\varphi_y,$$ $$(\varphi_u\times\varphi_v)_y=\partial_u\varphi_z\,\partial_v\varphi_x-\partial_u\varphi_x\,\partial_v\varphi_z,$$ $$(\varphi_u\times\varphi_v)_z=\partial_u\varphi_x\,\partial_v\varphi_y-\partial_u\varphi_y\,\partial_v\varphi_x.$$ [given, F1, F3]

2.1 By [F6] the projection $\pi_x$ retains the coordinates $y$ then $z$, so $\pi_x\circ\varphi=(\varphi_y,\varphi_z)$ and step 1.1 gives $\det D(\pi_x\circ\varphi)=\partial_u\varphi_y\,\partial_v\varphi_z-\partial_u\varphi_z\,\partial_v\varphi_y$, which is the first coordinate computed in step 1.2. [step 1.1, step 1.2, F6]

2.2 By [F6] the projection $\pi_y$ retains the coordinates $z$ then $x$, in that cyclic order, so $\pi_y\circ\varphi=(\varphi_z,\varphi_x)$ and step 1.1 gives $\det D(\pi_y\circ\varphi)=\partial_u\varphi_z\,\partial_v\varphi_x-\partial_u\varphi_x\,\partial_v\varphi_z$, the second coordinate computed in step 1.2. Retaining $x$ then $z$ in increasing order instead would exchange the two rows and give the opposite sign, which is why the cyclic order is part of the projection. [step 1.1, step 1.2, F6]

2.3 By [F6] the projection $\pi_z$ retains the coordinates $x$ then $y$, so $\pi_z\circ\varphi=(\varphi_x,\varphi_y)$ and step 1.1 gives $\det D(\pi_z\circ\varphi)=\partial_u\varphi_x\,\partial_v\varphi_y-\partial_u\varphi_y\,\partial_v\varphi_x$, the third coordinate computed in step 1.2. [step 1.1, step 1.2, F6]

3.1 Steps 2.1, 2.2 and 2.3 are the three asserted identities, valid at every point of $O$; in particular all three determinants vanish exactly where the oriented area vector does. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The identity holds where the patch is not regular.** Nothing above uses $\varphi_u\times\varphi_v\ne0$. That matters because the lateral faces of a boundary presentation are exactly the patches whose $k$th projected Jacobian determinant vanishes, and the identity is what turns that analytic condition into a geometric one.
