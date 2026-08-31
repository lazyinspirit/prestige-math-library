---
id: def-arnoldi-process
kind: definition
title: "The Arnoldi process for building an orthonormal basis of a Krylov subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-krylov-subspace-of-a-matrix-and-start-vector,
       def-inner-product-norm]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Definition

Let $A$ act on a real or complex inner-product space, and let $b\ne0$. The
**Arnoldi process** starts with

$$v_1:=\frac{b}{\|b\|}.$$

Given orthonormal vectors $v_1,\dots,v_j$, define

$$h_{ij}:=\langle Av_j,v_i\rangle \qquad(1\le i\le j),$$

and the orthogonalized residual

$$w_j:=Av_j-\sum_{i=1}^j h_{ij}v_i.$$

Set

$$h_{j+1,j}:=\|w_j\|.$$

If $h_{j+1,j}\ne0$, define

$$v_{j+1}:=\frac{w_j}{h_{j+1,j}}.$$

The process is said to **break down exactly** at step $j$ when
$h_{j+1,j}=0$.
