---
id: def-jacobian-and-hessian-vector-difference-products
kind: definition
title: "Forward and central finite-difference Jacobian-vector and Hessian-vector products"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jacobian-matrix-and-gradient, def-hessian-and-euclidean-critical-point, def-ck-and-multi-index-notation-in-several-variables, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
    - title: "R. Boudjemaa, M. G. Cox, A. B. Forbes, and P. M. Harris, Automatic Differentiation Techniques and their Application in Metrology, NPL Report CMSC 26/03"
      url: "https://eprintspublications.npl.co.uk/2828/1/cmsc26.pdf"
dependency_level: 0
---

## Definition

Let $m,n\ge1$, $U\subseteq\mathbb R^n$ be open, $x\in U$, $F:U\to\mathbb R^m$, $f:U\to\mathbb R$, and let $v\in\mathbb R^n$. Use the Jacobian $JF(x)$ and gradient $\nabla f(x)$ of [[def-jacobian-matrix-and-gradient]], the Hessian $H_f(x)$ of [[def-hessian-and-euclidean-critical-point]], and the published Euclidean vector norm $\|\cdot\|_2$ of [[def-p-norms-on-rn]]. The Jacobian-vector products below require $JF(x)$ to exist, and the Hessian-vector products require $H_f(x)$ to exist. Each gradient-difference Hessian-vector estimate also requires $\nabla f$ to exist at every point in its stencil. The exact products are $JF(x)v$ and $H_f(x)v$, respectively.

For $h>0$ with the required points in $U$, define the forward and central Jacobian-vector estimates

$$J_h^+(F,x,v):=\frac{F(x+hv)-F(x)}h,\qquad J_h^0(F,x,v):=\frac{F(x+hv)-F(x-hv)}{2h},$$

and the gradient-difference Hessian-vector estimates

$$H_h^+(f,x,v):=\frac{\nabla f(x+hv)-\nabla f(x)}h,\qquad H_h^0(f,x,v):=\frac{\nabla f(x+hv)-\nabla f(x-hv)}{2h}.$$

For each requested vector value $z(y)$, write an inexact evaluation as $\widehat z(y)=z(y)+e$. When an error bound is specified, it is per call: $\|e\|_2\le\delta$ for that call's $\delta\ge0$. Errors may be dependent or random; a stated bound on a random error is understood to hold almost surely. Define the inexact estimates by substitution:

$$\widehat J_h^+(F,x,v):=\frac{\widehat F(x+hv)-\widehat F(x)}h,\qquad \widehat J_h^0(F,x,v):=\frac{\widehat F(x+hv)-\widehat F(x-hv)}{2h},$$

$$\widehat H_h^+(f,x,v):=\frac{\widehat{\nabla f}(x+hv)-\widehat{\nabla f}(x)}h,\qquad \widehat H_h^0(f,x,v):=\frac{\widehat{\nabla f}(x+hv)-\widehat{\nabla f}(x-hv)}{2h}.$$
