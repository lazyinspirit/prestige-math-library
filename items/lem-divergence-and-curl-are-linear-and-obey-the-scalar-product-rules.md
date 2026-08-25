---
id: lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules
kind: lemma
title: "Divergence and curl are linear and satisfy the scalar product rules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-jacobian-matrix-and-gradient, def-cross-product-in-r3, def-euclidean-inner-product, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorems 4.1.4 and 4.1.5"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F,G:U\to\mathbb R^n$ be $C^1$, let $f:U\to\mathbb R$ be $C^1$ and let $a,b\in\mathbb R$. Then $aF+bG$ and $fF$ are $C^1$ on $U$ and

$$\operatorname{div}(aF+bG)=a\operatorname{div}F+b\operatorname{div}G,$$

$$\operatorname{div}(fF)=\langle\nabla f,F\rangle+f\operatorname{div}F.$$

If moreover $n=3$, then

$$\operatorname{curl}(aF+bG)=a\operatorname{curl}F+b\operatorname{curl}G,\qquad \operatorname{curl}(fF)=\nabla f\times F+f\operatorname{curl}F.$$

Here $\operatorname{div}$, $\operatorname{curl}$ and the coordinate naming are those of [[def-divergence-and-curl-of-a-c1-vector-field]], $\nabla f$ is the gradient of [[def-jacobian-matrix-and-gradient]], $\langle\cdot,\cdot\rangle$ is the inner product of [[def-euclidean-inner-product]] and $\times$ is the cross product of [[def-cross-product-in-r3]].

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ maps $F,G:U\to\mathbb R^n$, the $C^1$ scalar $f:U\to\mathbb R$ and the reals $a,b$ of the Statement.

[F1] The divergence of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^n$ is $\operatorname{div}F=\sum_{i<n}\partial_iF_i$, and for $n=3$ its curl is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For scalar-valued $f$ on an open subset of $\mathbb R^m$, the gradient is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]).

[F3] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F4] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{k<m}x_ky_k$ ([[def-euclidean-inner-product]]).

[F5] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] For real functions of one real variable differentiable at a point, $f+g$ is differentiable there with $(f+g)'=f'+g'$, $\alpha f$ is differentiable there with $(\alpha f)'=\alpha f'$, and $fg$ is differentiable there with $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 A partial derivative $\partial_j$ at a point $p$ is the ordinary one-variable derivative at $0$ of $t\mapsto(\,\cdot\,)(p+te_j)$, so [L1] applies to it verbatim: for scalar $C^1$ functions $u,v$ on $U$ and reals $a,b$ one has $\partial_j(au+bv)=a\,\partial_ju+b\,\partial_jv$ and $\partial_j(uv)=(\partial_ju)v+u\,\partial_jv$ pointwise on $U$, and the right-hand sides are continuous, so $au+bv$ and $uv$ are again $C^1$. [given, L1, F5]

1.2 Applying 1.1 componentwise, $aF+bG$ and $fF$ have $C^1$ components, hence are $C^1$ by [F5]; so all four expressions in the Statement are defined. [given, L1, F5]

2.1 By [F1], $\operatorname{div}(aF+bG)=\sum_{i<n}\partial_i(aF_i+bG_i)$, and step 1.1 rewrites each summand as $a\,\partial_iF_i+b\,\partial_iG_i$; summing gives $a\sum_{i<n}\partial_iF_i+b\sum_{i<n}\partial_iG_i=a\operatorname{div}F+b\operatorname{div}G$. [step 1.1, F1, algebra]

2.2 By [F1], the first coordinate of $\operatorname{curl}(aF+bG)$ is $\partial_y(aF_z+bG_z)-\partial_z(aF_y+bG_y)$, which step 1.1 rewrites as $a(\partial_yF_z-\partial_zF_y)+b(\partial_yG_z-\partial_zG_y)$; the second coordinate is $\partial_z(aF_x+bG_x)-\partial_x(aF_z+bG_z)=a(\partial_zF_x-\partial_xF_z)+b(\partial_zG_x-\partial_xG_z)$ and the third is $\partial_x(aF_y+bG_y)-\partial_y(aF_x+bG_x)=a(\partial_xF_y-\partial_yF_x)+b(\partial_xG_y-\partial_yG_x)$. The three coordinates are those of $a\operatorname{curl}F+b\operatorname{curl}G$. [step 1.1, F1, algebra]

2.3 By [F1], $\operatorname{div}(fF)=\sum_{i<n}\partial_i(fF_i)$, and step 1.1 rewrites each summand as $(\partial_if)F_i+f\,\partial_iF_i$. Splitting the sum gives $\sum_{i<n}(\partial_if)F_i+f\sum_{i<n}\partial_iF_i$, whose first term is $\langle\nabla f,F\rangle$ by [F2] and [F4] and whose second is $f\operatorname{div}F$ by [F1]. [step 1.1, F1, F2, F4, algebra]

2.4 By [F1], the first coordinate of $\operatorname{curl}(fF)$ is $\partial_y(fF_z)-\partial_z(fF_y)$, which step 1.1 rewrites as $\bigl((\partial_yf)F_z-(\partial_zf)F_y\bigr)+f(\partial_yF_z-\partial_zF_y)$. By [F2] and [F3] with $u=\nabla f$ and $v=F$, the first bracket is the first coordinate $u_yv_z-u_zv_y$ of $\nabla f\times F$, and the second summand is $f$ times the first coordinate of $\operatorname{curl}F$. [step 1.1, F1, F2, F3, algebra]

2.5 By [F1], the second coordinate of $\operatorname{curl}(fF)$ is $\partial_z(fF_x)-\partial_x(fF_z)$, which step 1.1 rewrites as $\bigl((\partial_zf)F_x-(\partial_xf)F_z\bigr)+f(\partial_zF_x-\partial_xF_z)$. By [F2] and [F3] the first bracket is the second coordinate $u_zv_x-u_xv_z$ of $\nabla f\times F$, and the second summand is $f$ times the second coordinate of $\operatorname{curl}F$. [step 1.1, F1, F2, F3, algebra]

2.6 By [F1], the third coordinate of $\operatorname{curl}(fF)$ is $\partial_x(fF_y)-\partial_y(fF_x)$, which step 1.1 rewrites as $\bigl((\partial_xf)F_y-(\partial_yf)F_x\bigr)+f(\partial_xF_y-\partial_yF_x)$. By [F2] and [F3] the first bracket is the third coordinate $u_xv_y-u_yv_x$ of $\nabla f\times F$, and the second summand is $f$ times the third coordinate of $\operatorname{curl}F$. [step 1.1, F1, F2, F3, algebra]

3.1 Steps 2.4, 2.5 and 2.6 give the three coordinates of $\nabla f\times F+f\operatorname{curl}F$, so $\operatorname{curl}(fF)=\nabla f\times F+f\operatorname{curl}F$; with steps 2.1, 2.2 and 2.3 this is every assertion of the Statement. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6] ∎

## Remarks

- **The scalar $f$ need only be $C^1$.** No mixed second derivative of $f$ appears in either product rule, so nothing here needs $C^2$; the identities of [[thm-the-curl-of-a-gradient-vanishes]] and [[thm-the-divergence-of-a-curl-vanishes]] are where the second-order hypothesis becomes necessary.
