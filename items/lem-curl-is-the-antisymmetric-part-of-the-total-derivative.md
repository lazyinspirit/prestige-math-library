---
id: lem-curl-is-the-antisymmetric-part-of-the-total-derivative
kind: lemma
title: "The curl measures the antisymmetric part of the total derivative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, thm-total-derivative-computes-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability]
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
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.7"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open, let $F:U\to\mathbb R^3$ be $C^1$ and let $p\in U$. Then for all $u,v\in\mathbb R^3$,

$$\langle DF(p)u,v\rangle-\langle DF(p)v,u\rangle=\langle\operatorname{curl}F(p),u\times v\rangle,$$

where $DF(p)$ is the total derivative of $F$ at $p$, whose matrix is the Jacobian matrix $JF(p)=(\partial_jF_i(p))_{i,j<3}$.

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$, the $C^1$ field $F:U\to\mathbb R^3$, the point $p\in U$ and vectors $u,v\in\mathbb R^3$, with the three coordinates named $x,y,z$.

[F1] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F3] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{k<m}x_ky_k$ ([[def-euclidean-inner-product]]).

[F4] If every partial derivative $\partial_jf_i(a)$ of $f$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[L1] If $f$ is totally differentiable at $a$ then $D_vf(a)$ exists for every $v$ and equals $Df(a)v$; in particular $\partial_jf(a)=Df(a)e_j$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L2] If every partial derivative of $f$ exists on a neighbourhood of $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ and $Df(a)$ is the linear map with matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L3] The cross product is bilinear and alternating ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

## Proof

**Proof technique:** direct.

1.1 Since $F$ is $C^1$ on $U$, its partial derivatives exist on $U$ and are continuous, so [L2] makes $F$ totally differentiable at $p$ with $DF(p)$ the linear map of matrix $JF(p)$; by [L1] and [F4] the entries of that matrix are $\partial_jF_i(p)$, so $(DF(p)u)_i=\sum_{j<3}\partial_jF_i(p)\,u_j$. [given, L1, L2, F4]

1.2 Hence, by [F3] and [F4], $$\langle DF(p)u,v\rangle-\langle DF(p)v,u\rangle=\sum_{i<3}\sum_{j<3}\partial_jF_i(p)\,u_jv_i-\sum_{i<3}\sum_{j<3}\partial_jF_i(p)\,v_ju_i,$$ and exchanging the names of the two summation indices in the second double sum turns it into $\sum_{i<3}\sum_{j<3}\partial_iF_j(p)\,v_iu_j$, so the difference equals $\sum_{i<3}\sum_{j<3}\bigl(\partial_jF_i(p)-\partial_iF_j(p)\bigr)u_jv_i$. [F3, F4, algebra]

2.1 In the double sum of step 1.2 the terms with $i=j$ have coefficient $\partial_iF_i(p)-\partial_iF_i(p)=0$, so only the six terms with $i\ne j$ contribute, that is the three unordered index pairs $\{y,z\}$, $\{z,x\}$ and $\{x,y\}$, each occurring twice. [step 1.2, algebra]

3.1 Grouping the two terms of the pair $\{y,z\}$ gives $(\partial_yF_z(p)-\partial_zF_y(p))u_yv_z+(\partial_zF_y(p)-\partial_yF_z(p))u_zv_y$, that is $(\partial_yF_z(p)-\partial_zF_y(p))(u_yv_z-u_zv_y)$. The pair $\{z,x\}$ gives $(\partial_zF_x(p)-\partial_xF_z(p))(u_zv_x-u_xv_z)$ and the pair $\{x,y\}$ gives $(\partial_xF_y(p)-\partial_yF_x(p))(u_xv_y-u_yv_x)$. [step 1.2, step 2.1, F1, algebra]

4.1 By [F1] the three coefficients in step 3.1 are the first, second and third coordinates of $\operatorname{curl}F(p)$, and by [F2] the three bracketed factors are the first, second and third coordinates of $u\times v$. By [F3] their sum is therefore $\langle\operatorname{curl}F(p),u\times v\rangle$, which with step 1.2 is the asserted identity. [step 3.1, F1, F2, F3]

5.1 As a check on the signs, take $u=e_x$ and $v=e_y$: the left side is $\langle DF(p)e_x,e_y\rangle-\langle DF(p)e_y,e_x\rangle=\partial_xF_y(p)-\partial_yF_x(p)$ and the right side is the third coordinate of $\operatorname{curl}F(p)$, since $e_x\times e_y=e_z$ by [F2]; the pairs $(e_y,e_z)$ and $(e_z,e_x)$ give the first and second coordinates in the same way. When $u=v$ both sides vanish, the left by inspection and the right because the cross product is alternating by [L3]. [step 4.1, L3, F2] ∎

## Remarks

- **The identity is what makes the curl coordinate-free enough for Stokes.** Its left side is built from the total derivative and two vectors, with no reference to a coordinate system beyond the one the inner product carries; the right side reads off the coordinates. That is exactly the form in which the curl enters [[lem-the-stokes-integrand-identity-on-a-c2-patch]], where $u$ and $v$ are the two parameter derivatives of a patch.
