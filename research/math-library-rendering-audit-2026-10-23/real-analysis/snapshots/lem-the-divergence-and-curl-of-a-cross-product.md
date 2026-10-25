---
id: lem-the-divergence-and-curl-of-a-cross-product
kind: lemma
title: "The divergence and curl of a cross product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.1.5"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and let $F,G:U\to\mathbb R^3$ be $C^1$. Then $F\times G$ is $C^1$ on $U$ and

$$\operatorname{div}(F\times G)=\langle\operatorname{curl}F,G\rangle-\langle F,\operatorname{curl}G\rangle,$$

$$\operatorname{curl}(F\times G)=(\operatorname{div}G)F-(\operatorname{div}F)G+DF\,G-DG\,F.$$

Here $DF\,G$ denotes the map $U\to\mathbb R^3$ whose $i$th coordinate at $p$ is $\sum_{j<3}\partial_jF_i(p)\,G_j(p)$, that is, the Jacobian matrix of $F$ at $p$ applied to the vector $G(p)$, and $DG\,F$ is defined the same way with the roles of $F$ and $G$ exchanged. The operators are those of [[def-divergence-and-curl-of-a-c1-vector-field]], the cross product is that of [[def-cross-product-in-r3]], the inner product that of [[def-euclidean-inner-product]] and the Jacobian matrix that of [[def-jacobian-matrix-and-gradient]].

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$ and the $C^1$ maps $F,G:U\to\mathbb R^3$ of the Statement, with coordinates named $x,y,z$.

[F1] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F2] The divergence of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^n$ is $\operatorname{div}F=\sum_{i<n}\partial_iF_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F4] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{k<m}x_ky_k$ ([[def-euclidean-inner-product]]).

[F5] If every partial derivative $\partial_jf_i(a)$ of $f:U\to\mathbb R^n$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[L1] For real functions of one real variable differentiable at a point, $fg$ is differentiable there and $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[L2] If $f$ is totally differentiable at $a$ then $\partial_jf(a)=Df(a)e_j$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L3] The cross product is bilinear and alternating ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the three coordinates of $F\times G$ are $F_yG_z-F_zG_y$, $F_zG_x-F_xG_z$ and $F_xG_y-F_yG_x$. Each is a difference of products of $C^1$ scalars, so by [L1] applied in each coordinate direction each has continuous first partial derivatives, given by $\partial_j(F_aG_b)=(\partial_jF_a)G_b+F_a\,\partial_jG_b$; hence $F\times G$ is $C^1$ and both sides of both identities are defined. [given, F1, L1]

2.1 Expanding $\operatorname{div}(F\times G)=\partial_x(F_yG_z-F_zG_y)+\partial_y(F_zG_x-F_xG_z)+\partial_z(F_xG_y-F_yG_x)$ by step 1.1 gives twelve terms. Those carrying a derivative of $F$ are $(\partial_yF_z-\partial_zF_y)G_x+(\partial_zF_x-\partial_xF_z)G_y+(\partial_xF_y-\partial_yF_x)G_z$, which is $\langle\operatorname{curl}F,G\rangle$ by [F3] and [F4]; those carrying a derivative of $G$ are $-F_x(\partial_yG_z-\partial_zG_y)-F_y(\partial_zG_x-\partial_xG_z)-F_z(\partial_xG_y-\partial_yG_x)$, which is $-\langle F,\operatorname{curl}G\rangle$. This is the first identity. [step 1.1, L1, F2, F3, F4, algebra]

2.2 By [F3] and step 1.1 the first coordinate of $\operatorname{curl}(F\times G)$ is $\partial_y(F_xG_y-F_yG_x)-\partial_z(F_zG_x-F_xG_z)$, that is $(\partial_yF_x)G_y+F_x\partial_yG_y-(\partial_yF_y)G_x-F_y\partial_yG_x-(\partial_zF_z)G_x-F_z\partial_zG_x+(\partial_zF_x)G_z+F_x\partial_zG_z$. Adding and subtracting $F_x\partial_xG_x$ and $G_x\partial_xF_x$ regroups this as $F_x\operatorname{div}G-G_x\operatorname{div}F+\bigl((\partial_xF_x)G_x+(\partial_yF_x)G_y+(\partial_zF_x)G_z\bigr)-\bigl(F_x\partial_xG_x+F_y\partial_yG_x+F_z\partial_zG_x\bigr)$, using [F2] for the two divergences and [F5] for the two bracketed sums. [step 1.1, L1, F3, F2, F5, L2, algebra]

2.3 The same computation in the second coordinate gives $\partial_z(F_yG_z-F_zG_y)-\partial_x(F_xG_y-F_yG_x)$, which after adding and subtracting $F_y\partial_yG_y$ and $G_y\partial_yF_y$ is $F_y\operatorname{div}G-G_y\operatorname{div}F+\sum_{j<3}(\partial_jF_y)G_j-\sum_{j<3}F_j\partial_jG_y$; in the third coordinate it gives $\partial_x(F_zG_x-F_xG_z)-\partial_y(F_yG_z-F_zG_y)$, which after adding and subtracting $F_z\partial_zG_z$ and $G_z\partial_zF_z$ is $F_z\operatorname{div}G-G_z\operatorname{div}F+\sum_{j<3}(\partial_jF_z)G_j-\sum_{j<3}F_j\partial_jG_z$. [step 1.1, L1, F3, F2, F5, L2, algebra]

3.1 In steps 2.2 and 2.3 the sums $\sum_{j<3}(\partial_jF_i)G_j$ and $\sum_{j<3}F_j\,\partial_jG_i$ are the $i$th coordinates of $DF\,G$ and of $DG\,F$: by [F5] the $i$th row of the Jacobian matrix of $F$ is $(\partial_jF_i)_{j<3}$, and by [L2] that matrix is the matrix of the total derivative, so applying it to the vector $G$ produces exactly that sum coordinate by coordinate. [step 2.2, step 2.3, F5, L2, algebra]

4.1 Substituting step 3.1 into steps 2.2 and 2.3 gives the three coordinates of $(\operatorname{div}G)F-(\operatorname{div}F)G+DF\,G-DG\,F$, which is the second identity; with step 2.1 both assertions hold at every point of $U$, and by [L3] both sides of each are unchanged in form when $F$ and $G$ are replaced by linear combinations, since the cross product is bilinear. [step 2.1, step 3.1, L3] ∎

## Remarks

- **Where the alternating law is visible.** Taking $G=F$ makes $F\times F=0$ by [L3], and both identities then read $0=0$: in the first because $\langle\operatorname{curl}F,F\rangle-\langle F,\operatorname{curl}F\rangle=0$, and in the second because the four terms cancel in pairs.

- **Only first derivatives are used.** Both identities hold for $C^1$ fields; nothing here interchanges two partial derivatives, which is why no $C^2$ hypothesis appears.
