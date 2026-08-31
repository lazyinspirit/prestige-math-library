---
id: prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual
kind: proposition
title: "The GMRES residual has the form $r_m=p_m(A)r_0$ with $p_m(0)=1$ and $\\deg p_m\\le m$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector,
       cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Let $x_m$ be an $m$th GMRES iterate for $Ax=b$ with initial residual
$r_0=b-Ax_0$, and let $r_m=b-Ax_m$. Then there is a polynomial $p_m$ such that

$$r_m=p_m(A)r_0,\qquad p_m(0)=1,\qquad \deg p_m\le m.$$

Moreover, among all polynomials $p$ with $\deg p\le m$ and $p(0)=1$, GMRES
chooses one minimizing $\|p(A)r_0\|_2$.

## Facts & Assumptions

**Given:** A GMRES iterate $x_m$ with residual $r_m=b-Ax_m$.

[L1] Every vector in $K_m(A,r_0)$ has the form $q(A)r_0$ with $\deg q<m$
([[prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector]]).

[L2] GMRES minimizes the residual norm over $x_0+K_m(A,r_0)$
([[cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]]).

## Proof
**Proof technique:** direct.

1.1 Since $x_m-x_0\in K_m(A,r_0)$, [L1] gives a polynomial $q$ with $\deg q<m$ and $x_m=x_0+q(A)r_0$. Therefore $$r_m=b-Ax_m=r_0-Aq(A)r_0=p_m(A)r_0,$$ where $p_m(z):=1-zq(z)$. Then $p_m(0)=1$ and $\deg p_m\le m$. [L1, construct, algebra]

2.1 Conversely, every polynomial $p$ with $\deg p\le m$ and $p(0)=1$ can be written as $p(z)=1-zq(z)$ with $\deg q<m$. The corresponding vector $x=x_0+q(A)r_0$ lies in $x_0+K_m(A,r_0)$ by [L1], and its residual is $p(A)r_0$. Since [L2] makes $x_m$ minimize that residual norm over all such $x$, the polynomial attached in step 1.1 minimizes $\|p(A)r_0\|_2$ among all admissible $p$. [L1, L2, step 1.1] ∎