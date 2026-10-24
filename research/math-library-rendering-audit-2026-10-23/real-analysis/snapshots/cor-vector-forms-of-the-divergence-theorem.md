---
id: cor-vector-forms-of-the-divergence-theorem
kind: corollary
title: "Vector forms: the boundary integrals of $fn$ and of $n\\times F$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, lem-the-divergence-and-curl-of-a-cross-product, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, lem-standard-basis-of-f-n, def-finite-gluing-of-elementary-solid-regions, def-finitely-patched-regular-surface-and-integrals]
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
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.2.9"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}=\bigl((D_1,\varphi_1),\ldots,(D_M,\varphi_M)\bigr)$. Vector-valued integrals below are taken coordinatewise, so that for a continuous $\mathbb R^3$-valued $W$ on $E$ the symbol $\iiint_EW$ denotes the vector whose $k$th coordinate is $\int_EW_k$, and for a continuous $\mathbb R^3$-valued $Z$ on the boundary the symbol $\iint_{\partial E}Z$ denotes the vector whose $k$th coordinate is $\sum_{j=1}^M\int_{D_j}Z_k(\varphi_j)$, where $n$ inside such an integrand is read as the oriented area vector $\varphi_{j,u}\times\varphi_{j,v}$ of the patch, exactly as in the scalar flux.

Then, for $f$ of class $C^1$ on an open set containing $E$ and $F$ of class $C^1$ on an open set containing $E$,

$$\iiint_E\nabla f=\iint_{\partial E}fn,\qquad \iiint_E\operatorname{curl}F=\iint_{\partial E}n\times F.$$

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, the $C^1$ scalar $f$ and the $C^1$ field $F$, both on open sets containing $E$, and the coordinatewise reading of the vector integrals fixed in the Statement.

[F1] The divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ and the curl of a $C^1$ field on an open subset of $\mathbb R^3$ is $\operatorname{curl}G=(\partial_yG_z-\partial_zG_y,\ \partial_zG_x-\partial_xG_z,\ \partial_xG_y-\partial_yG_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F3] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and $e_k$ has $k$th coordinate $1$ and the others $0$, so $\langle x,e_k\rangle=x_k$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[F4] For scalar-valued $f$ the gradient is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]).

[F5] In a finite gluing the outer patches form a compatible finite patch presentation of $\partial E$, over which flux is the sum of the patch values ([[def-finite-gluing-of-elementary-solid-regions]], [[def-finitely-patched-regular-surface-and-integrals]]).

[L1] For $C^1$ fields and a $C^1$ scalar on an open subset of $\mathbb R^n$, $\operatorname{div}(gG)=\langle\nabla g,G\rangle+g\operatorname{div}G$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[L2] For $C^1$ fields $G,H$ on an open subset of $\mathbb R^3$, $\operatorname{div}(G\times H)=\langle\operatorname{curl}G,H\rangle-\langle G,\operatorname{curl}H\rangle$ ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[L3] For a finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

## Proof

**Proof technique:** direct.

1.1 Let $c\in\mathbb R^3$ and let $\underline c$ be the constant field with value $c$ on the open set where $f$ is $C^1$. Its partial derivatives all vanish, so it is $C^1$ with $\operatorname{div}\underline c=0$ and $\operatorname{curl}\underline c=0$ by [F1]. The field $f\underline c$ is $C^1$ and [L1] gives $\operatorname{div}(f\underline c)=\langle\nabla f,\underline c\rangle+f\operatorname{div}\underline c=\langle\nabla f,c\rangle$, while its flux integrand against a vector $\nu$ is $\langle f c,\nu\rangle=f\langle c,\nu\rangle$ by [F3]. [given, F1, F3, L1]

1.2 For all $a,b,d\in\mathbb R^3$, expanding both sides by [F2] and [F3] gives $$\langle a\times b,d\rangle=(a_yb_z-a_zb_y)d_x+(a_zb_x-a_xb_z)d_y+(a_xb_y-a_yb_x)d_z,$$ $$\langle d\times a,b\rangle=(d_ya_z-d_za_y)b_x+(d_za_x-d_xa_z)b_y+(d_xa_y-d_ya_x)b_z,$$ and the six monomials of the first list are the six of the second with the same signs, matched as $a_yb_zd_x$ with $d_xa_yb_z$, $-a_zb_yd_x$ with $-d_xa_zb_y$, $a_zb_xd_y$ with $d_ya_zb_x$, $-a_xb_zd_y$ with $-d_ya_xb_z$, $a_xb_yd_z$ with $d_za_xb_y$ and $-a_yb_xd_z$ with $-d_za_yb_x$. Hence $\langle a\times b,d\rangle=\langle d\times a,b\rangle$. [F2, F3, algebra]

2.1 With $\underline c$ as in step 1.1 on the open set where $F$ is $C^1$, the field $F\times\underline c$ is $C^1$ and [L2] gives $\operatorname{div}(F\times\underline c)=\langle\operatorname{curl}F,c\rangle-\langle F,\operatorname{curl}\underline c\rangle=\langle\operatorname{curl}F,c\rangle$. [given, F1, F2, L2]

2.2 Apply [L3] to the field $f\underline c$ of step 1.1: $\int_E\langle\nabla f,c\rangle=\sum_{j=1}^M\int_{D_j}f(\varphi_j)\,\langle c,\varphi_{j,u}\times\varphi_{j,v}\rangle$, using [F5] to read the right side patch by patch. Take $c=e_k$: by [F3] and [F4] the left side becomes $\int_E\partial_kf$, the $k$th coordinate of $\iiint_E\nabla f$, and the right side becomes $\sum_j\int_{D_j}f(\varphi_j)\,(\varphi_{j,u}\times\varphi_{j,v})_k$, the $k$th coordinate of $\iint_{\partial E}fn$. As $k$ ranges over the three directions this is the first identity. [step 1.1, F3, F4, F5, L3]

3.1 Apply [L3] to the field $F\times\underline c$ of step 2.1: $\int_E\langle\operatorname{curl}F,c\rangle=\sum_{j=1}^M\int_{D_j}\langle F(\varphi_j)\times c,\varphi_{j,u}\times\varphi_{j,v}\rangle$. Step 1.2 with $a=F(\varphi_j)$, $b=c$ and $d=\varphi_{j,u}\times\varphi_{j,v}$ rewrites each integrand as $\langle(\varphi_{j,u}\times\varphi_{j,v})\times F(\varphi_j),c\rangle$. Take $c=e_k$: by [F3] the left side becomes $\int_E(\operatorname{curl}F)_k$ and the right side becomes $\sum_j\int_{D_j}\bigl((\varphi_{j,u}\times\varphi_{j,v})\times F(\varphi_j)\bigr)_k$, so as $k$ ranges over the three directions this is the second identity. [step 2.1, step 1.2, F3, F5, L3]

4.1 Steps 2.2 and 3.1 are the two asserted identities. [step 2.2, step 3.1] ∎

## Remarks

- **Why a constant vector is the right device.** Both clauses assert an equality of vectors, and the divergence theorem produces only scalars. Pairing with a fixed $c$ turns each vector identity into a scalar one; running $c$ over the standard basis recovers the vector identity coordinate by coordinate, and nothing else about $c$ is used.

- **The triple-product identity of step 1.2 is the determinant identity in disguise.** By [[lem-cross-product-is-bilinear-alternating-and-orthogonal]] each of $\langle a\times b,d\rangle$ and $\langle d\times a,b\rangle$ is the determinant of the matrix with the three vectors as columns, in the orders $a,b,d$ and $d,a,b$; those two orders differ by a cyclic permutation of three columns. The coordinate expansion above is the same fact written out, and it is what the proof uses.
